---
title: Template — Exercice Python
---

# <span class="h1">Template — Exercice Python</span>

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
    - [Indice 1 — pensée directrice]
    - [Indice 2 — aide plus précise]

!!! success "Résultat attendu"
    [Sortie attendue, en bloc code]

???- tip "Solution"
    === "Méthode 1 — [nom]"
        ```python
        [code]
        ```

    === "Méthode 2 — [nom]"
        ```python
        [code alternatif]
        ```
```

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

???+ note "Lancer les exercices — option hors environnement"
    Pas d'environnement Python local ? Utilisez un **bac à sable** directement dans le navigateur :

    [:fontawesome-brands-python: Ouvrir avec Basthon](https://basthon.fr/){ target="_blank" rel="noopener" .md-button .md-button--primary }

---

## <span class="h2">Exercice 1 : ...</span>

[bloc exercice type — voir ci-dessus]

---
```

---

## <span class="h2">Règles du gabarit</span>

1. **Un seul type d'admonition pour le sujet** : `!!! question "Énoncé"` (pas `abstract`, pas `note`).
2. **Solution systématiquement repliée** : `???- tip "Solution"` (jamais dépliée).
3. **Indices toujours présents** quand l'exercice est non trivial : `???- note "💡 Indices"`.
4. **Résultat attendu en `!!! success`**, avec bloc code si c'est une sortie console.
5. **Plusieurs méthodes** → onglets `=== ` (éviter la séparation "Méthode 1" en texte).
6. **Strictement uniquement hors environnement** : `???+ note "Lancer les exercices — option hors environnement"` avec bouton Basthon primaire (`--primary`), à placer après l'intro (ou après les prérequis si la page en a).
6. **Méta (niveau/notions/durée)** en tableau sous l'énoncé, alignement centré pour la colonne niveau/durée.