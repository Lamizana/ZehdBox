---
title: Fonctionnalités avancées
description: "Stash, tags, cherry-pick, sous-modules, GitHub Actions et fichiers spéciaux : les outils avancés de Git."
---

# <span class="h1">Fonctionnalités avancées</span>

<p class="intro">
    Au-delà des bases : stash, tags, cherry-pick, sous-modules, GitHub Actions et fichiers spéciaux.
</p>

---

## <span class="h2">9. Fonctionnalités Git avancées</span>

### Annuler des changements

```bash
# Annuler des modifications non indexées (working dir)
git restore fichier.txt

# Retirer un fichier de l'index (sans perdre les modifications)
git restore --staged fichier.txt

# Annuler le dernier commit en gardant les modifications
git reset --soft HEAD~1

# Annuler le dernier commit ET les modifications (destructif)
git reset --hard HEAD~1

# Créer un nouveau commit qui annule un commit précédent (sûr, préserve l'historique)
git revert <hash-du-commit>
```

!!! danger "Attention"
    `git reset --hard` est **destructif** : les modifications non commitées sont perdues définitivement. Privilégie `git revert` quand tu veux préserver l'historique.

### Stash (mettre de côté des changements temporaires)

```bash
git stash                  # met de côté les modifications en cours
git stash list              # liste les stash
git stash pop                # réapplique et supprime le dernier stash
git stash apply              # réapplique sans supprimer
git stash drop                # supprime un stash
```

!!! tip "Cas d'usage"
    Tu travailles sur une feature mais tu doisrapidement corriger un bug sur `main` ? Utilise `git stash` pour mettre de côté ton travail en cours, change de branche, corrige, puis `git stash pop` pour reprendre là où tu en étais.

### Tags (marquer des versions)

```bash
git tag v1.0.0                              # tag léger
git tag -a v1.0.0 -m "Version 1.0.0"        # tag annoté (recommandé)
git push origin v1.0.0                       # pousser un tag
git push origin --tags                       # pousser tous les tags
```

### Cherry-pick (récupérer un commit précis)

```bash
git cherry-pick <hash-du-commit>
```

!!! info "Utile pour"
    Rapatrier un correctif d'une branche à une autre sans fusionner toute la branche.

### Historique et recherche

```bash
git log --author="Nom"
git log --since="2024-01-01" --until="2024-12-31"
git log -p fichier.txt          # historique détaillé d'un fichier
git blame fichier.txt            # qui a modifié quelle ligne
git bisect start                 # recherche binaire d'un commit fautif
```

### Sous-modules (submodules)

```bash
git submodule add git@github.com:utilisateur/lib.git chemin/lib
git submodule update --init --recursive
```

### GitHub Actions (CI/CD)

!!! info "Automatisation"
    Fichier `.github/workflows/ci.yml` à la racine du dépôt pour automatiser tests, build, déploiement à chaque push/PR.

---

## <span class="h2">10. Fichiers spéciaux</span>

### `.gitignore`

Liste les fichiers/dossiers à **ne jamais suivre** par Git (dépendances, fichiers de build, secrets…).

```gitignore
# Exemple générique
node_modules/
.env
*.log
dist/
build/
.DS_Store
__pycache__/
*.pyc
```

### `README.md`

Page d'accueil du dépôt, doit contenir :

- Description du projet
- Installation
- Utilisation
- Contribution
- Licence

### `LICENSE`

Définit les droits d'utilisation du code (MIT, Apache 2.0, GPL, etc.).

### `CONTRIBUTING.md`

Explique comment contribuer au projet (style de code, process de PR, tests requis).

---

> Lien vers source : [Git Documentation](https://git-scm.com/doc){ target="_blank" rel="noopener" } · [GitHub Actions](https://docs.github.com/en/actions){ target="_blank" rel="noopener" }
