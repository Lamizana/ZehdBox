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

  function run(code, stdinText, packages) {
    packages = packages || [];

    return getPyodide()
      .then(function (pyodide) {
        var loadPkgs = packages.filter(function (p) {
          return !pyodide.loadedPackages[p];
        });

        if (loadPkgs.length === 0) return pyodide;

        return pyodide.loadPackage(loadPkgs).then(function () {
          return pyodide;
        });
      })
      .then(function (pyodide) {
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

        return pyodide
          .runPythonAsync(code)
          .then(function () {
            return { stdout: stdout.join("\n"), stderr: stderr.join("\n"), error: null };
          })
          .catch(function (err) {
            return {
              stdout: stdout.join("\n"),
              stderr: stderr.join("\n"),
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

  window.ZehdBoxPyodide = {
    run: run,
    isReady: function () {
      return pyodideInstance !== null;
    },
  };
})();