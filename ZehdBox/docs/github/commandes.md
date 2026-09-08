---
title: Commandes & Bonnes pratiques
description: "Récapitulatif de toutes les commandes Git et les bonnes pratiques à adopter au quotidien."
---

# <span class="h1">Commandes & Bonnes pratiques</span>

<p class="intro">
    Le récapitulatif à garder sous la main : toutes les commandes Git essentielles et les bonnes pratiques du quotidien.
</p>

---

## <span class="h2">11. Commandes utiles en résumé</span>

| Commande | Action |
| --- | --- |
| `git init` | Initialiser un dépôt |
| `git clone <url>` | Cloner un dépôt distant |
| `git status` | Voir l'état du dépôt |
| `git add <fichier>` | Indexer des changements |
| `git commit -m "message"` | Créer un commit |
| `git push` | Envoyer vers le distant |
| `git pull` | Récupérer depuis le distant |
| `git fetch` | Récupérer sans fusionner |
| `git branch` | Gérer les branches |
| `git switch <branche>` | Changer de branche |
| `git merge <branche>` | Fusionner une branche |
| `git rebase <branche>` | Rebaser une branche |
| `git log` | Voir l'historique |
| `git diff` | Voir les différences |
| `git stash` | Mettre de côté des changements |
| `git tag` | Créer un tag/version |
| `git reset` | Annuler des commits |
| `git revert` | Annuler via un nouveau commit |

---

## <span class="h2">12. Bonnes pratiques générales</span>

### ✅ À faire

- Commiter souvent, avec des messages clairs et explicites
- Toujours travailler sur une branche dédiée pour chaque fonctionnalité/correctif
- Faire un `pull` avant de commencer à travailler et avant de pusher
- Ne jamais commiter de secrets ou fichiers volumineux inutiles
- Utiliser un `.gitignore` adapté dès la création du projet
- Relire son code (`git diff`) avant de commiter
- Protéger la branche `main` sur GitHub
- Documenter le projet avec un `README.md` à jour
- Utiliser les Pull Requests pour toute revue de code, même en solo (bonne habitude)

### ❌ À éviter

- Les `git push --force` sur des branches partagées
- Les commits massifs regroupant des changements sans rapport entre eux

!!! tip "La règle d'or"
    **Un commit = une intention claire.** Si tu ne peux pas décrire ton commit en une phrase à l'impératif, c'est que tu devrais probablement le découper en plusieurs commits.

---

> Lien vers source : [Git Documentation](https://git-scm.com/doc){ target="_blank" rel="noopener" }
