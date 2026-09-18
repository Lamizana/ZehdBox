---
title: Template - Exercice Python
---

# <span class="h1">Template - Exercice Python</span>

> Ce fichier est un **gabarit de référence**. Il est préfixé `_` → ignoré par MkDocs (et donc invisible dans la navigation et le build). Copiez-collez le bloc d'exercice ci-dessous dans vos pages d'exercices.

---

## <span class="h2">Bloc d'exercice type</span>

Copiez ce bloc, puis remplacez les contenus entre `[...]`.

```markdown
## <span class="h2">Exercice N : [Titre court]</span>

!!! question "Énoncé"
    [Consigne claire et unique, verbe d'action au début.]

    | Niveau | Notions | Durée estimée |
    |:---:|:---|:---:|
    | [🟢 Facile / 🟡 Moyen / 🔴 Difficile] | [notion1, notion2] | [N] min |

???- note "💡 Indices"
    - [Indice 1 - pensée directrice]
    - [Indice 2 - aide plus précise]

!!! success "Résultat attendu"
    [Sortie attendue, en bloc code]

???- tip "Solution"
    === "Méthode 1 - [nom]"
        ```python
        [code]
        ```

    === "Méthode 2 - [nom]"
        ```python
        [code alternatif]
        ```
```

---

## <span class="h2">Bac à sable interactif (runner Pyodide)</span>

Depuis la Phase 2, les pages d'exercices embarquent un **bac à sable Python exécuté dans le navigateur** (Pyodide). Le runner **injecte le bac à sable automatiquement** sous chaque énoncé et l'utilisateur peut :

- écrire son code dans l'éditeur injecté après l'énoncé ;
- cliquer **Exécuter** pour voir la sortie / les erreurs ;
- cliquer **Vérifier** pour comparer sa sortie avec le résultat attendu ;
- cliquer **Charger la solution** pour se débloquer.

**Familles de structure prises en charge** (le runner détecte les deux sans configuration) :

| Famille | Déclencheur | Oracle (résultat attendu) | Solution |
|---|---|---|---|
| **A — admonitions** (recommandée) | `!!! question "Énoncé"` | `!!! success "Résultat attendu"` | `???- tip "Solution"` |
| **B — titres `###`** (pages existantes) | `### Énoncé` | `### Résultat attendu` + bloc code | `???- tip "Solution"` |

**Règles d'écriture du contenu** (pour que la vérification automatique fonctionne) :

1. **Titre du résumé attendu** : le titre de l'oracle doit contenir le marqueur `(variable)` si et seulement si la sortie est **non déterministe** (aléatoire, dépend d'une variable utilisateur, appel API...) :
   - déterministe : `!!! success "Résultat attendu"` ;
   - non déterministe : `!!! success "Résultat attendu (variable)"` → le runner **désactive Vérifier** et l'affiche en grisé.
2. **Code attendu littéral** : le bloc code du résumé attendu doit être la sortie brute `stdout` (pas de prompt `>>>`, pas de balise).
3. **stdin** : si le corrigé type utilise `input()`, l'utilisateur remplit le champ "Entrées standard" du bac à sable (une saisie par ligne).
4. **Packages** : le runner charge numpy (si la page contient `numpy` dans l'URL) et pandas (si `pandas`). Pour d'autres librairies, prévoir une note "pas disponible dans le bac à sable → utilisez Basthon".
5. **Bloc code Énoncé** : un bloc code dans l'énoncé (`### Résultat attendu` Famille B compris) doit être immédiatement suivi du bloc code attendu, sans admonition `details` intercalée, sinon la détection Famille B échoue.

---

## <span class="h2">Checklist de progression (pour les projets à étapes)</span>

Pour un projet type "Dés" ou "Météo", ajoutez une boîte cochable au début de la page :

```markdown
???+ abstract "Progression"
    - [ ] Exercice 1 : [titre]
    - [x] Exercice 2 : [titre terminé]
    - [ ] Exercice 3 : [titre]
```

(Le `+` rend la boîte dépliée par défaut.)

---

## <span class="h2">Sections de page recommandées</span>

```markdown
---
title: [Exercices - Sujet]
description: "Exercices pratiques sur [sujet] en Python."
---

# <span class="h1">[Titre page]</span>

<p class="intro">
    [Une phrase qui situe le niveau et l'objectif.]
</p>

---

## <span class="h2">Prérequis</span>

- [Prérequis 1]
- [Prérequis 2]

???+ note "Lancer les exercices - option hors environnement"
    Pas d'environnement Python local ? Utilisez un **bac à sable** directement dans le navigateur :

    [:fontawesome-brands-python: Ouvrir avec Basthon](https://basthon.fr/){ target="_blank" rel="noopener" .md-button .md-button--primary }

---

## <span class="h2">Exercice 1 : ...</span>

[bloc exercice type - voir ci-dessus]

---
```

---

## <span class="h2">Règles du gabarit</span>

1. **Un seul type d'admonition pour le sujet** : `!!! question "Énoncé"` (pas `abstract`, pas `note`).
2. **Solution systématiquement repliée** : `???- tip "Solution"` (jamais dépliée).
3. **Indices toujours présents** quand l'exercice est non trivial : `???- note "💡 Indices"`.
4. **Résultat attendu en `!!! success`**, avec bloc code si c'est une sortie console. Si la sortie est **non déterministe** (aléatoire, dépend de l'utilisateur, appel API), ajouter le marqueur `(variable)` au titre : `!!! success "Résultat attendu (variable)"` → le runner désactive alors le bouton **Vérifier**. Sans ce marqueur, la sortie est considérée comme déterministe et **Vérifier** compare la sortie de l'utilisateur au bloc attendu.
5. **Plusieurs méthodes** → onglets `=== ` (éviter la séparation "Méthode 1" en texte).
6. **Bac à sable interactif pris en charge automatiquement** : le runner Web injecte éditeur / Exécuter / Vérifier / Charger la solution sous chaque `Énoncé` (voir section **Bac à sable interactif (runner Pyodide)**). Les pages sous un dossier contenant `numpy` ou `pandas` chargent automatiquement ces packages.
7. **Strictement uniquement hors environnement** : `???+ note "Lancer les exercices - option hors environnement"` avec bouton Basthon primaire (`--primary`), à placer après l'intro (ou après les prérequis si la page en a).
8. **Méta (niveau/notions/durée)** en tableau sous l'énoncé, alignement centré pour la colonne niveau/durée.