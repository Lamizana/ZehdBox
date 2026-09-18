/* ============================================================
 * pyodide-runner.js — chargeur paresseux de l'interpretateur
 * Python (WebAssembly via Pyodide, CDN jsDelivr) avec support
 * des packages numpy / pandas (loadPackage).
 *
 * - Un seul chargement Pyodide, partage entre tous les exercices.
 * - API exposee a l'ecran :
 *      window.ZehdBoxPyodide.run(code, stdinText, packages[])
 *        => Promise<{ stdout, stderr, error }>
 * - packages : liste optionnelle de paquets a charger avec Pyodide
 *   (ex : ['numpy'], ['pandas'], ['numpy','pandas']).
 *
 * Spike Phase 2 : la detection des exercices est 100 % structurelle
 * (admonitions / titres), voir exercise-runner.js.
 * ============================================================ */
(function () {
  "use strict";

  var PYODIDE_VERSION = "v314.0.7";
  var INDEX_URL =
    "https://cdn.jsdelivr.net/pyodide/" + PYODIDE_VERSION + "/full/";

  var pyodideInstance = null;
  var loadingPromise = null;

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = function () {
        reject(new Error("Impossible de charger Pyodide depuis le CDN"));
      };
      document.head.appendChild(script);
    });
  }

  function getPyodide() {
    if (pyodideInstance) return Promise.resolve(pyodideInstance);
    if (loadingPromise) return loadingPromise;

    loadingPromise = loadScript(INDEX_URL + "pyodide.js")
      .then(function () {
        return window.loadPyodide({ indexURL: INDEX_URL });
      })
      .then(function (pyodide) {
        pyodideInstance = pyodide;
        return pyodide;
      });

    return loadingPromise;
  }

  /* prefere le chargement paresseux partage ; ne recharge que les
     packages absents. */
  function ensurePackages(pyodide, packages) {
    packages = packages || [];
    var loadPkgs = packages.filter(function (p) {
      return !pyodide.loadedPackages[p];
    });
    if (loadPkgs.length === 0) return Promise.resolve(pyodide);
    return pyodide.loadPackage(loadPkgs).then(function () {
      return pyodide;
    });
  }

  function captureStreams(pyodide, stdinText) {
    var stdout = [];
    var stderr = [];
    var inputQueue = stdinText ? stdinText.split("\n") : [];

    pyodide.setStdout({
      batched: function (s) {
        stdout.push(String(s));
      },
    });
    pyodide.setStderr({
      batched: function (s) {
        stderr.push(String(s));
      },
    });
    pyodide.setStdin({
      stdin: function () {
        return inputQueue.length ? inputQueue.shift() : null;
      },
    });

    return {
      stdout: stdout,
      stderr: stderr,
      join: function () {
        return {
          stdout: stdout.join("\n"),
          stderr: stderr.join("\n"),
        };
      },
    };
  }

  /* Garde-fou : rejette apres `ms` si la promesse n'est pas resolue.
     NB : un `while True` bloquant ne cede pas la main au thread JS, ce qui
     ne peut etre interrompu qu'avec un worker + actuel COEP (SharedArrayBuffer).
     Ce timeout couvre les executions longues mais non bloquantes. */
  function withTimeout(promise, ms) {
    return Promise.race([
      promise,
      new Promise(function (resolve, reject) {
        setTimeout(function () {
          reject(new Error("Execution trop longue (> " + Math.round(ms / 1000) + " s)."));
        }, ms);
      }),
    ]);
  }

  var RUN_TIMEOUT_MS = 10000;

  function run(code, stdinText, packages) {
    return getPyodide()
      .then(function (pyodide) {
        return ensurePackages(pyodide, packages);
      })
      .then(function (pyodide) {
        var streams = captureStreams(pyodide, stdinText);
        return withTimeout(pyodide.runPythonAsync(code), RUN_TIMEOUT_MS)
          .then(function () {
            return {
              stdout: streams.stdout.join("\n"),
              stderr: streams.stderr.join("\n"),
              error: null,
            };
          })
          .catch(function (err) {
            return {
              stdout: streams.stdout.join("\n"),
              stderr: streams.stderr.join("\n"),
              error: String((err && err.message) || err),
            };
          });
      })
      .catch(function (err) {
        var message = "Pyodide : " + ((err && err.message) || err);
        if (packages && packages.length) {
          message =
            "Chargement des packages " + packages.join(", ") + " impossible : " + message;
        }
        return { stdout: "", stderr: "", error: message };
      });
  }

  /* Exécution a la France-IOI : le code de l'eleve puis chaque assert du
     bloc Tests dans LE MEME globals Pyodide. Un echec n'arrete pas la
     suite : on recupere le statut de chaque test pour un rendu par test.

     Retour : { passed, total, firstFailure, tests:[{code,ok,message}],
                stdout, stderr, error } */
  function runWithTests(studentCode, testsCode, packages) {
    return getPyodide()
      .then(function (pyodide) {
        return ensurePackages(pyodide, packages);
      })
      .then(function (pyodide) {
        var streams = captureStreams(pyodide, "");

        return withTimeout(
          pyodide.runPythonAsync(studentCode).then(function () {
            var tests = [];
            var firstFailure = null;

            (testsCode || "").split("\n").forEach(function (line) {
              var t = line.trim();
              if (!t || t.indexOf("assert ") !== 0) return; // commentaires / setup ignores
              tests.push({ code: t, ok: null, message: "" });
            });

            tests.forEach(function (test) {
              try {
                pyodide.runPython(test.code); // meme globals global
                test.ok = true;
              } catch (err) {
                test.ok = false;
                test.message = String((err && err.message) || err);
                if (!firstFailure) firstFailure = test;
              }
            });

            var total = tests.length;
            var passed = tests.filter(function (t) {
              return t.ok;
            }).length;

            return {
              passed: passed,
              total: total,
              firstFailure: firstFailure,
              tests: tests,
              error: null,
            };
          }),
          RUN_TIMEOUT_MS
        )
          .then(function (result) {
            result.stdout = streams.stdout.join("\n");
            result.stderr = streams.stderr.join("\n");
            if (result.total === 0) {
              result.error =
                "Aucun test (assert ...) detecte dans le bloc Tests. " +
                "Verifie la convention de la page.";
            }
            return result;
          })
          .catch(function (err) {
            return {
              passed: 0,
              total: 0,
              firstFailure: null,
              tests: [],
              stdout: streams.stdout.join("\n"),
              stderr: streams.stderr.join("\n"),
              error: String((err && err.message) || err),
            };
          });
      })
      .catch(function (err) {
        var message = "Pyodide : " + ((err && err.message) || err);
        if (packages && packages.length) {
          message =
            "Chargement des packages " + packages.join(", ") + " impossible : " + message;
        }
        return {
          passed: 0, total: 0, firstFailure: null, tests: [],
          stdout: "", stderr: "", error: message,
        };
      });
  }

  window.ZehdBoxPyodide = {
    run: run,
    runWithTests: runWithTests,
    isReady: function () {
      return pyodideInstance !== null;
    },
  };
})();