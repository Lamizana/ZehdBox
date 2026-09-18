/* ============================================================
 * exercise-runner.js — injection du bac a sable Python dans les
 * pages d'exercices.
 *
 * Detection 100 % structurelle (aucun attribut custom Markdown).
 * Deux familles d'exercices sont prises en charge :
 *
 *  Famille A (admonitions) — nombres,string,bases :
 *   - !!! question "Enonce" -> div.admonition.question  (declencheur)
 *   - !!! success "Resultat attendu" -> div.admonition.success (oracle)
 *   - ??? tip "Solution" -> details.tip               (solution)
 *
 *  Famille B (titres ### ) — dice, meteo :
 *   - ### Enonce            -> h3 dont le texte == "Enonce" (declencheur)
 *   - ### Resultat attendu  -> h3 + bloc pre/code suivant (oracle)
 *   - ??? tip "Solution"    -> details.tip            (solution)
 *
 * Marqueur "(variable)" present dans le titre de l'oracle
 * => sortie non deterministe, verification automatique desactivee.
 *
 * Compatible navigation.instant via document$.
 * ============================================================ */
(function () {
  "use strict";

  var PATH_PACKAGES = [
    { pattern: "numpy", packages: ["numpy"] },
    { pattern: "pandas", packages: ["numpy", "pandas"] },
  ];

  function pagePackages() {
    var path = document.location.pathname;
    var found = [];
    PATH_PACKAGES.forEach(function (entry) {
      if (path.indexOf(entry.pattern) !== -1) {
        entry.packages.forEach(function (p) {
          if (found.indexOf(p) === -1) found.push(p);
        });
      }
    });
    return found;
  }

  function isExercisePage() {
    return (
      document.location.pathname.indexOf("exercice") !== -1 ||
      document.location.pathname.indexOf("dice") !== -1 ||
      document.location.pathname.indexOf("meteo") !== -1
    );
  }

  function normalize(s) {
    return (s || "")
      .replace(/\r\n/g, "\n")
      .replace(/[ \t]+$/gm, "")
      .replace(/^\s+|\s+$/g, "");
  }

  /* texte d'un titre (h2/h3) : retire le symbole de permalink (¶) de
     Material et normalise NFD pour ignorer les accents ("Énoncé" -> "Enonce"). */
  function headingText(el) {
    var t = (el.textContent || "")
      .replace(/[\u00b6\u00a7]/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (t.normalize) {
      t = t.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    return t;
  }

  /* ---------- recherche des blocs autour du declencheur ---------- */

  function isSectionEnd(el) {
    return el && el.tagName === "H2";
  }

  function findOracle(triggerEl) {
    // Famille A : div.admonition.success direct
    // Famille B : h3 du texte "Resultat attendu" suivi du pre/code
    var el = triggerEl.nextElementSibling;
    while (el && !isSectionEnd(el)) {
      if (el.classList) {
        if (
          el.classList.contains("admonition") &&
          el.classList.contains("success")
        ) {
          return { type: "block", el: el };
        }
      }
      if (
        el.tagName === "H3" &&
        /^Resultat attendu/.test(headingText(el))
      ) {
        // le code attendu est dans le pre/code qui suit le h3, avant la
        // prochaine section ou le prochain bloc details/solution
        var next = el.nextElementSibling;
        while (next && !isSectionEnd(next)) {
          if (next.tagName === "DETAILS" || (next.tagName === "H3" && next !== el)) break;
          if (next.tagName === "PRE" || (next.querySelector && next.querySelector("pre code"))) {
            return { type: "heading", el: el, codeEl: next };
          }
          next = next.nextElementSibling;
        }
        return { type: "heading", el: el, codeEl: null };
      }
      el = el.nextElementSibling;
    }
    return null;
  }

  function findSolution(triggerEl) {
    var el = triggerEl.nextElementSibling;
    while (el && !isSectionEnd(el)) {
      if (
        el.tagName === "DETAILS" &&
        el.classList &&
        el.classList.contains("tip")
      ) {
        return el;
      }
      el = el.nextElementSibling;
    }
    return null;
  }

  function extractCode(el, codeEl) {
    if (!el) return "";
    if (codeEl) {
      // Famille B : un bloc pre (ou conteneur highlight) contenant le code
      var codeIn = codeEl.tagName === "PRE" ? codeEl : codeEl.querySelector("pre code");
      return codeIn ? codeIn.textContent : "";
    }
    // Famille A : div.admonition.success -> pre code interne
    var pre = el.querySelector("pre code");
    return pre ? pre.textContent : "";
  }

  function isVariable(oracle) {
    if (!oracle) return false;
    var title = oracle.type === "block"
      ? oracle.el.querySelector(".admonition-title")
      : oracle.el;
    if (!title) return false;
    var text = oracle.type === "block" ? title.textContent : headingText(title);
    return (text || "").indexOf("(variable)") !== -1;
  }

  /* ------------------------ construction du panneau ------------------------ */

  function buildPanel(triggerEl, oracle, solutionEl, packages) {
    var variable = isVariable(oracle);
    var expectedText = normalize(extractCode(oracle ? oracle.el : null, oracle ? oracle.codeEl : null));

    // --- elements ---
    var panel = document.createElement("div");
    panel.className = "exercise-panel";

    var header = document.createElement("div");
    header.className = "exercise-panel__header";
    header.textContent = "Python interactif (Pyodide)";

    var editor = document.createElement("textarea");
    editor.className = "exercise-panel__editor";
    editor.rows = 8;
    editor.spellcheck = false;
    editor.placeholder = "# Ecris ton code Python ici...";

    var stdin = document.createElement("textarea");
    stdin.className = "exercise-panel__stdin";
    stdin.rows = 2;
    stdin.spellcheck = false;
    stdin.placeholder = "Entrees standard (une par ligne) — facultatif";

    var actions = document.createElement("div");
    actions.className = "exercise-panel__actions";

    var btnRun = document.createElement("button");
    btnRun.className = "md-button";
    btnRun.textContent = "Executer";
    actions.appendChild(btnRun);

    var btnCheck = document.createElement("button");
    btnCheck.className = "md-button exercise-panel__btn-check";
    btnCheck.textContent = "Verifier";
    if (variable || !oracle) {
      btnCheck.disabled = true;
      btnCheck.title = variable
        ? "Sortie variable : pas de verification automatique."
        : "Pas de resultat attendu defini pour cet exercice.";
    }
    actions.appendChild(btnCheck);

    var btnSolution = document.createElement("button");
    btnSolution.className = "md-button";
    btnSolution.textContent = "Charger la solution";
    actions.appendChild(btnSolution);

    var status = document.createElement("div");
    status.className = "exercise-panel__status";

    var output = document.createElement("pre");
    output.className = "exercise-panel__output";
    output.style.display = "none";

    panel.appendChild(header);
    panel.appendChild(editor);
    panel.appendChild(stdin);
    panel.appendChild(actions);
    panel.appendChild(status);
    panel.appendChild(output);

    // --- comportements ---
    function render(result) {
      var parts = [];
      if (result.stdout) parts.push(result.stdout);
      if (result.stderr) parts.push("-- stderr --\n" + result.stderr);
      if (result.error) parts.push("-- erreur --\n" + result.error);

      if (parts.length === 0) {
        output.style.display = "none";
        status.textContent = "Pas de sortie.";
        status.className = "exercise-panel__status";
        return;
      }

      output.textContent = parts.join("\n");
      output.style.display = "block";

      status.textContent = "";
      status.className = "exercise-panel__status";
    }

    btnRun.addEventListener("click", function () {
      status.textContent = "Execution en cours...";
      status.className = "exercise-panel__status exercise-panel__status--busy";
      window.ZehdBoxPyodide.run(editor.value, stdin.value, packages).then(render);
    });

    btnCheck.addEventListener("click", function () {
      status.textContent = "Execution + verification...";
      status.className = "exercise-panel__status exercise-panel__status--busy";
      window.ZehdBoxPyodide.run(editor.value, stdin.value, packages).then(function (result) {
        render(result);
        if (result.error) return;
        var obtained = normalize(result.stdout);
        if (obtained === expectedText) {
          status.textContent = "Bravo : la sortie correspond au resultat attendu.";
          status.className = "exercise-panel__status exercise-panel__status--ok";
        } else {
          status.textContent =
            "Attention : la sortie ne correspond pas. Attendu : " +
            JSON.stringify(expectedText) +
            " | Obtenu : " +
            JSON.stringify(obtained);
          status.className = "exercise-panel__status exercise-panel__status--ko";
        }
      });
    });

    btnSolution.addEventListener("click", function () {
      var solution = extractCode(solutionEl, null);
      // gest des blocs tabbed : on prend le premier bloc de code de chaque onglet
      if (!solution && solutionEl) {
        var codes = solutionEl.querySelectorAll("pre code");
        if (codes.length) {
          solution = codes[0].textContent;
        }
      }
      if (!solution) {
        status.textContent = "Pas de solution decelable sur cette page.";
        status.className = "exercise-panel__status exercise-panel__status--warn";
        return;
      }
      editor.value = solution;
      status.textContent = "Solution chargee dans l'editeur.";
      status.className = "exercise-panel__status";
    });

    return panel;
  }

  /* ------------------------- orchestration DOM ------------------------- */

  function triggerIsAdmonitionQuestion(el) {
    return (
      el.classList &&
      el.classList.contains("admonition") &&
      el.classList.contains("question")
    );
  }

  function triggerIsHeadingEnonce(el) {
    return el.tagName === "H3" && headingText(el) === "Enonce";
  }

  function inject() {
    if (!window.ZehdBoxPyodide) return; // chargeur absent

    var triggers = Array.prototype.slice.call(
      document.querySelectorAll("div.admonition.question, h3")
    ).filter(function (el) {
      return triggerIsAdmonitionQuestion(el) || triggerIsHeadingEnonce(el);
    });

    if (triggers.length === 0) return;

    var packages = pagePackages();

    triggers.forEach(function (triggerEl) {
      // ne pas injecter deux fois (navigation + re-render)
      if (
        triggerEl.nextElementSibling &&
        triggerEl.nextElementSibling.classList &&
        triggerEl.nextElementSibling.classList.contains("exercise-panel")
      ) {
        return;
      }
      var oracle = findOracle(triggerEl);
      var solutionEl = findSolution(triggerEl);
      var panel = buildPanel(triggerEl, oracle, solutionEl, packages);
      triggerEl.parentNode.insertBefore(panel, triggerEl.nextSibling);
    });
  }

  function init() {
    if (!isExercisePage()) return;
    inject();
  }

  // Compatibilite Material navigation.instant (re-execution apres XHR).
  // Le bundle Material expose window.document$ (observable RxJS).
  if (typeof document$ !== "undefined") {
    document$.subscribe(init);
  } else {
    document.addEventListener("DOMContentLoaded", init);
    if (document.readyState !== "loading") init();
  }
})();