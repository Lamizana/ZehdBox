---
title: Branches, Fusion & Pull Requests
description: "Gérer les branches, résoudre les conflits de fusion et travailler avec les Pull Requests sur GitHub."
---

# <span class="h1">Branches, Fusion & Pull Requests</span>

<p class="intro">
    Développer en parallèle, fusionner sans conflits et collaborer efficacement grâce aux branches et aux Pull Requests.
</p>

---

## <span class="h2">6. Branches</span>

### Pourquoi des branches ?

Elles permettent de développer une fonctionnalité, corriger un bug ou expérimenter **sans affecter le code stable de `main`**.

### Convention de nommage courante

```console
main / master        → code stable, production
develop               → intégration continue
feature/nom-fonction  → nouvelle fonctionnalité
fix/nom-bug           → correction de bug
hotfix/nom            → correctif urgent en production
release/1.2.0         → préparation de version
```

### Commandes

```bash
# Créer une branche
git branch feature/login

# Créer et basculer dessus en une commande
git checkout -b feature/login
# ou (syntaxe moderne)
git switch -c feature/login

# Lister les branches
git branch          # locales
git branch -r       # distantes
git branch -a       # toutes

# Changer de branche
git switch main
# ou
git checkout main

# Supprimer une branche locale
git branch -d feature/login    # si déjà fusionnée
git branch -D feature/login    # forcer la suppression

# Supprimer une branche distante
git push origin --delete feature/login
```

---

## <span class="h2">7. Fusion et gestion des conflits</span>

### Fusionner une branche

```bash
git switch main
git merge feature/login
```

### Rebase (alternative au merge)

Le rebase réapplique vos commits par-dessus une autre branche, pour garder un **historique linéaire** :

```bash
git switch feature/login
git rebase main
```

!!! warning "Règle d'or"
    **Ne jamais rebaser une branche déjà partagée avec d'autres.** Le rebase réécrit l'historique — si d'autres ont pull vos commits, ils auront des problèmes.

    > *"Never rebase public history"*

### Gérer un conflit

Un conflit apparaît quand deux branches modifient la même ligne différemment. Git marque le fichier ainsi :

```
<<<<<<< HEAD
Votre version
=======
Version de l'autre branche
>>>>>>> feature/login
```

!!! tip "Étapes de résolution"
    1. Ouvrir le(s) fichier(s) en conflit et choisir/fusionner le contenu
    2. Supprimer les marqueurs `<<<<<<<`, `=======`, `>>>>>>>`
    3. Ajouter le fichier résolu : `git add fichier-en-conflit.txt`
    4. Continuer :
        - Si **merge** : `git commit`
        - Si **rebase** : `git rebase --continue`

---

## <span class="h2">8. Pull Requests (GitHub)</span>

Une **Pull Request (PR)** est une demande de fusion d'une branche vers une autre, avec revue de code possible.

### Workflow type

```bash
# 1. Créer une branche depuis main à jour
git switch main
git pull
git switch -c feature/ma-fonctionnalite

# 2. Travailler et commiter
git add .
git commit -m "feat: ajoute ma fonctionnalité"

# 3. Pousser la branche
git push -u origin feature/ma-fonctionnalite

# 4. Ouvrir une Pull Request sur GitHub (interface web ou gh CLI)
gh pr create --base main --head feature/ma-fonctionnalite \
  --title "Ma fonctionnalité" \
  --body "Description des changements"
```

### Bonnes pratiques pour une PR

!!! tip "Checklist PR"
    - Titre clair et description détaillée (contexte, changements, captures d'écran si utile)
    - PR de taille raisonnable (facile à relire)
    - Lier les issues concernées (`Closes #12`)
    - Attendre la revue et les tests CI avant de fusionner
    - Utiliser **Squash and merge** pour garder un historique propre, ou **Rebase and merge** selon la convention de l'équipe

---

> Lien vers source : [Git Documentation — Branches](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell){ target="_blank" rel="noopener" } · [GitHub Docs — Pull Requests](https://docs.github.com/en/pull-requests){ target="_blank" rel="noopener" }
> 