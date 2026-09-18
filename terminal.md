# Terminal — Exercices Python interactifs

> Fiche de chantier : refonte de l'architecture des exercices Python + résolution
> interactive dans le navigateur (Pyodide).
>
> - **Branche** : `feature/exercices-python-interactifs`
> - **Statut** : en cours — feuille de route validée, aucune phase implémentée
> - **Contexte** : site MkDocs Material (ZehdBox) — double usage vitrine + base de
>   connaissances. Les exercices Python (`docs/cours/python/`) sont actuellement en
>   "énoncé / indices / résultat attendu / solution" avec renvoi externe Basthon.

---

## 1. Objectif

Le site doit **savoir si l'utilisateur a réussi** : résolution dans la page,
validation automatique, solution dépliable en filet de sécurité, et travail local
possible en bonus (téléchargement des fichiers starter/tests généré côté client).

## 2. Décisions actées

| Sujet | Décision | Justification |
|---|---|---|
| Mode de résolution | En ligne dans la page, + bouton "Télécharger" (Blob client-side) | Le MD reste la seule source de vérité, zéro étape de build |
| Exercices existants | Conservés en **famille "sortie"**, validation par comparaison stdout | La majorité sont déterministes, pas de réécriture nécessaire |
| JupyterLite | **Écarté** | Sur-dimensionné ; Pyodide suffit |
| Progression "résolu" | **Oui** via `localStorage` | Pas de cookie → pas d'impact sur le bandeau `extra.consent` |
| Moteur d'exécution | **Pyodide** graphé en lazy-load (CDN jsDelivr) | Contrôle total de l'UX, validation possible, offline après 1er chargement |
| Fallback | Bouton Basthon conservé | Si le chargement Pyodide échoue |
| Input utilisateur | Champ "Entrée standard" branché sur `pyodide.setStdin` | Nécessaire pour les exercices `print()`/`input()` actuels |

## 3. Principes d'architecture

- **Aucun changement de build** : tout est runtime JS (Pyodide chargé au 1er clic
  sur "Executer", puis caché par le navigateur).
- **Aucune réécriture des exercices actuels** : le JS *détecte* la structure
  Markdown existante (énoncé `!!! question` → éditeur injecté après ; `!!! success`
  = oracle de sortie ; `??? tip` = solution).
- **Piège connu (`navigation.instant`)** : l'injection DOM doit s'abonner à
  `app.document$` de Material, sinon elle ne s'exécute pas au changement de page.
- **Aucun attribut custom sur les fences de code** : testé (pymdown-extensions
  10.21), SuperFences supprime silencieusement ou casse les attributs inconnus
  (`exo="..."` → fence ignorée en `language-text`). La détection se fait donc par
  la **structure DOM des admonitions** (`question`, `success`, `tip`) et par
  convention de **titres d'admonition** (`(variable)` = sortie non déterministe).

## 4. Architecture cible

```
properdocs.yml
 ├── extra_javascript : [js/pyodide-runner.js, js/exercise-runner.js]
 ├── extra_css        : [... , css/exercises.css]
ZehdBox/docs/
 ├── js/pyodide-runner.js    — chargement Pyodide lazy + état global
 ├── js/exercise-runner.js   — injection éditeur/console/validation dans les pages exos
 ├── css/exercises.css       — panneau d'exécution, console, badges
 └── cours/python/exercices/*.md — conventions légères (Phase 1)
```

## 5. Phases

### Phase 1 — Conventions Markdown & fondations
- **Objectif** : rendre le contenu "machine-readable" sans casser l'affichage.
- **Constat technique (validé par fichier jetable)** : SuperFences 10.21 rejette
  les attributs custom `exo="..."` sur les fences. La détection s'appuiera donc
  **uniquement sur la structure** :
  - énoncé → admonition `question` ;
  - résultat attendu → admonition `success` (oracle de sortie) ou titre
    `### Résultat attendu` ;
  - solution → admonition `tip` ;
  - sortie **non déterministe** → titre de l'admonition / bloc contenant
    le marqueur `(variable)` (ex. `!!! success "Résultat attendu (variable)"`),
    convention nouvelle et compatible (ne casse pas le rendu).
- Étapes :
  - Ajouter le marqueur `(variable)` sur les sorties non déterministes :
    `nombres` exo 2, `string` exos 1-4, `dice` exos 2-6 (+ bonus), `meteo`
    exos 6-8.
  - Les sorties déterministes restent telles quelles (aucune marque).
  - Aucune modification des blocs `solution` ni des fences (structure seule).
- **Fichiers** : `docs/cours/python/exercices/*.md` + `bases/exercice-bases.md`.
- **Validation** : `properdocs build --strict` + contrôle visuel du rendu.
- **Commit type** : `feat(exercices): conventions machine-readable (Phase 1)`

### Phase 2 — Runner interactif Pyodide (cœur du chantier)
- **Objectif** : les exercices existants "tournent" dans la page.
- Étapes :
  - `pyodide-runner.js` : `loadPyodide()` (CDN), lazy au 1er clic, message
    "Preparation de Python...", `loadPackage()` au besoin (numpy/pandas pour
    dice/meteo).
  - `exercise-runner.js` :
    - injection après l'énoncé : éditeur `<textarea>` (prérempli avec `starter`
      sinon vide) + boutons `Executer`, `Verifier`, `Charger la solution`,
      `Telecharger` ;
    - stdin : champ "Entrée standard" branché sur `pyodide.setStdin` ;
    - sortie : console stdout + erreurs stderr en rouge ;
    - validation famille sortie : comparaison stdout ↔ bloc attendu
      (diff "attendu X / obtenu Y") ;
    - abonnement à `app.document$` pour `navigation.instant`.
  - `exercises.css` : panneau, console, badges reussite/echec.
  - Bouton Basthon conservé en fallback.
- **Fichiers** : `ZehdBox/docs/js/*.js`, `ZehdBox/docs/css/exercises.css`,
  `ZehdBox/properdocs.yml`.
- **Validation** : build strict + serve local + checklist manuelle (chargement,
  stdin, stdout, solution, changement de page via instant).
- **Commit type** : `feat(exercices): runner Pyodide interactif (Phase 2)`

### Phase 3 — Famille fonction + tests
- **Objectif** : contrat type France-IOI/Exercism pour les nouveaux exercices.
- Étapes :
  - 2 exercices "fonction" pilotes sur `bases` (ex. `def double(n)`) avec tests
    `assert` exécutés dans le même namespace → affichage du statut par test ;
  - recette progressive des exos numpy/pandas vers ce contrat si pertinent ;
  - bouton "Telecharger starter.py / tests.py" (Blob client-side) pour le local.
  - Conventions famille fonction (par cohérence avec le constat Phase 1, pas
    d'attributs custom) : starter = bloc dans admonition `hint`/`question`,
    tests = bloc dans admonition `example "Tests"`, identifiés par titre.
- **Fichiers** : `docs/cours/python/bases/*.md`, `docs/js/exercise-runner.js`.
- **Validation** : build strict + tests manuels pass/fail.
- **Commit type** : `feat(exercices): famille fonction et validation par tests (Phase 3)`

### Phase 4 — Progression
- **Objectif** : feedback motivant type France-IOI.
- Étapes : badge "resolu" à côté du `h2` de l'exercice (slug derive du titre),
  stockage `localStorage`, bouton "Réinitialiser ma progression".
- **Fichiers** : `docs/js/exercise-runner.js`, `docs/css/exercises.css`.
- **Validation** : build strict + test navigateur (badge persiste après reload).
- **Commit type** : `feat(exercices): progression localStorage et badges (Phase 4)`

### Phase 5 — Contenu & documentation d'usage
- **Objectif** : intégrer la fonctionnalite dans la navigation courante du site.
- Étapes :
  - réécriture de l'intro de `exercices/index.md` (mode interactif, mode local,
    conseil "essayez avant de déplier") ;
  - note wiki interne : conventions d'ajout d'un exercice (famille, marqueurs
    `(variable)`, tests).
- **Fichiers** : `docs/cours/python/exercices/index.md`, note wiki.
- **Validation** : build strict + lecture critique.
- **Commit type** : `docs(exercices): intro et guide d'ajout d'exercices (Phase 5)`

## 6. Périmètre exclu (anti-recommandations)

- Backend de validation / serveur — non nécessaire, le site est statique.
- Monaco / CodeMirror — lourds, un `<textarea>` suffit pour ces exercices.
- JupyterLite — écarté (voir decisions).
- Génération de fichiers au build (Modèle B) — à reconsidérer uniquement si le
  mode local devient prioritaire.
- Soumission réseau / comptes — hors périmètre.

## 7. Rappels de procédure

- **Build** : `properdocs build --strict` avant et après chaque modification.
- **Doutes sur le rendu** (ex. attributs, admonitions) : toujours tester via
  fichier jetable + build + lecture du HTML généré avant d'éditer le vrai contenu.
- **Commits** : francais, style `feat(...)` / `docs(...)` / `chore(...)`.
- **Push** : interdit sans demande explicite de l'utilisateur.

## 8. Checklist de validation finale

- [ ] Exercices existants executables dans la page (exit du fallback Basthon).
- [ ] Entrée standard (stdin) fonctionnelle sur un exo `input()`.
- [ ] Validation stdout correcte, diff "attendu / obtenu" clair.
- [ ] Chargement de la solution dans l'editeur.
- [ ] Changement de page (navigation.instant) sans perte de l'injection.
- [ ] Exos fonction + tests affichent un statut par test.
- [ ] Telechargement starter/tests fonctionne (Blob).
- [ ] Badge "resolu" persiste apres rechargement.
- [ ] `properdocs build --strict` sans erreur ni warning.