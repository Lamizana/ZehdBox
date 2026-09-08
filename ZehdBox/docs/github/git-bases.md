---
title: Git & GitHub — Les bases
description: "Présentation de Git et GitHub, installation, création de dépôt, cycle de travail et bonnes pratiques de push."
---

# <span class="h1">Git & GitHub — Les bases</span>

<p class="intro">
    Tout ce qu'il faut savoir pour démarrer avec Git et GitHub : installation, premier dépôt, cycle de travail et règles de push.
</p>

---

## <span class="h2">1. Présentation</span>

### Qu'est-ce que Git ?

Git est un **système de contrôle de version décentralisé (DVCS)**. Il permet de :

- Suivre l'historique des modifications d'un projet (code, texte, etc.)
- Travailler à plusieurs sur un même projet sans écraser le travail des autres
- Revenir en arrière à n'importe quel état antérieur du projet
- Travailler en parallèle sur différentes fonctionnalités grâce aux branches

!!! info "Décentralisé"
    Chaque développeur possède une **copie complète du dépôt** (historique inclus), contrairement aux systèmes centralisés (comme SVN).

### Qu'est-ce que GitHub ?

GitHub est une **plateforme d'hébergement de dépôts Git en ligne**. Elle ajoute à Git :

- Un espace de stockage distant (remote)
- Des outils de collaboration : Pull Requests, Issues, Projects, Actions (CI/CD)
- Une gestion des droits d'accès et des équipes
- Une interface web pour visualiser le code, l'historique, les statistiques

!!! tip "Retiens"
    **Git** = l'outil (local) ; **GitHub** = le service d'hébergement (distant). D'autres alternatives existent : GitLab, Bitbucket.

### Concepts clés

| Terme | Définition |
| --- | --- |
| **Repository (dépôt)** | Dossier contenant le projet et son historique Git |
| **Commit** | Instantané des modifications à un instant T, avec un message descriptif |
| **Branch (branche)** | Ligne de développement indépendante |
| **Remote** | Dépôt distant (ex : GitHub) |
| **Clone** | Copie locale d'un dépôt distant |
| **Push** | Envoi des commits locaux vers le dépôt distant |
| **Pull** | Récupération des commits distants vers le local |
| **Merge** | Fusion de deux branches |
| **HEAD** | Pointeur vers le commit/branche actuellement actif |

---

## <span class="h2">2. Installation et configuration</span>

### Installation

=== "macOS"

    ```bash
    brew install git
    ```

=== "Linux (Debian/Ubuntu)"

    ```bash
    sudo apt install git
    ```

=== "Windows"

    Télécharger sur [git-scm.com](https://git-scm.com){ target="_blank" rel="noopener" }

### Configuration initiale (obligatoire)

```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"
```

### Configuration recommandée

```bash
# Éditeur par défaut
git config --global core.editor "code --wait"

# Nom de branche par défaut
git config --global init.defaultBranch main

# Couleurs dans le terminal
git config --global color.ui auto

# Vérifier la configuration
git config --list
```

### Authentification GitHub

!!! warning "Depuis août 2021"
    GitHub n'accepte plus les mots de passe classiques en ligne de commande. Deux méthodes sont possibles :

=== "Clé SSH (recommandée)"

    ```bash
    ssh-keygen -t ed25519 -C "votre.email@example.com"
    cat ~/.ssh/id_ed25519.pub
    # Copier la clé publique dans GitHub > Settings > SSH and GPG keys
    ```

=== "Token d'accès personnel (HTTPS)"

    Créer un token dans *GitHub > Settings > Developer settings > Personal access tokens*, à utiliser à la place du mot de passe.

---

## <span class="h2">3. Création d'un dépôt</span>

### Méthode 1 : créer localement puis lier à GitHub

```bash
# Initialiser un dépôt Git local
mkdir mon-projet
cd mon-projet
git init

# Créer un premier fichier
echo "# Mon Projet" > README.md

# Ajouter et commiter
git add README.md
git commit -m "Initial commit"

# Créer le dépôt sur GitHub (via l'interface web ou gh CLI), puis lier :
git remote add origin git@github.com:utilisateur/mon-projet.git

# Premier push
git push -u origin main
```

### Méthode 2 : créer sur GitHub puis cloner

1. Sur GitHub : bouton **New repository**
2. Choisir un nom, une visibilité (public/privé), cocher éventuellement « Add a README »
3. Cloner en local :

```bash
git clone git@github.com:utilisateur/mon-projet.git
cd mon-projet
```

### Avec la CLI GitHub (`gh`)

```bash
gh repo create mon-projet --public --clone
```

---

## <span class="h2">4. Cycle de travail de base</span>

Le cycle Git repose sur trois zones :

```
Répertoire de travail  →  Zone d'index (staging)  →  Dépôt local  →  Dépôt distant
     (working dir)              (git add)             (git commit)     (git push)
```

### Commandes essentielles

```bash
# Voir l'état du dépôt (fichiers modifiés, non suivis, etc.)
git status

# Ajouter des fichiers à l'index
git add fichier.txt        # un fichier précis
git add dossier/           # un dossier
git add .                  # tout ce qui a changé
git add -p                 # ajouter interactivement par morceaux (hunks)

# Créer un commit
git commit -m "Message clair et concis"

# Ajouter et commiter en une commande (fichiers déjà suivis uniquement)
git commit -am "Message"

# Voir l'historique
git log
git log --oneline --graph --all   # vue compacte et graphique

# Voir les différences
git diff                   # working dir vs index
git diff --staged          # index vs dernier commit

# Récupérer les changements distants
git pull

# Envoyer les changements
git push
```

### Rédiger un bon message de commit

```
type(portée): résumé court à l'impératif (≤ 50 caractères)

Corps du message expliquant le POURQUOI (pas seulement le quoi),
si nécessaire. Limité à ~72 caractères par ligne.
```

!!! info "Convention Conventional Commits"
    Types courants : `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.

    **Exemple :**

    ```
    feat(auth): ajoute la validation du token JWT

    Empêche l'accès aux routes protégées si le token est expiré.
    Ajoute des tests unitaires associés.
    ```

---

## <span class="h2">5. Règles et bonnes pratiques pour le push</span>

### Règles essentielles

!!! danger "Ne jamais"
    - Pusher directement sur `main`/`master` dans un projet collaboratif → passer par des branches et des Pull Requests.
    - Pusher de secrets (mots de passe, clés API, fichiers `.env`) → utiliser un `.gitignore`.
    - Forcer un push (`--force`) sur une branche partagée sans prévenir l'équipe.

!!! tip "Bons réflexes"
    - Toujours faire `git pull` avant de push pour éviter les conflits inutiles.
    - Un commit = une intention claire. Éviter les commits fourre-tout (« fix », « wip », « changes »).
    - Tester avant de pusher : s'assurer que le code compile/passe les tests localement.
    - Pusher souvent, mais des commits propres : des petits commits fréquents plutôt qu'un énorme commit final.

### Push simple

```bash
git push origin nom-de-la-branche
```

### Premier push d'une nouvelle branche

```bash
git push -u origin nom-de-la-branche   # -u lie la branche locale à la distante
```

### Push forcé (à utiliser avec prudence)

```bash
# Dangereux : écrase l'historique distant
git push --force

# Plus sûr : échoue si quelqu'un d'autre a poussé entre-temps
git push --force-with-lease
```

!!! warning "Règle d'or"
    `--force-with-lease` doit rester réservé à **vos propres branches personnelles** (feature branches), jamais à `main`.

### Protection de branche (côté GitHub)

Dans *Settings > Branches > Branch protection rules*, on peut configurer :

- Interdiction du push direct sur `main`
- Obligation de passer par une Pull Request
- Obligation d'une revue de code avant fusion
- Obligation que les tests CI passent avant fusion

---

> Lien vers source : [Git Documentation](https://git-scm.com/doc){ target="_blank" rel="noopener" } · [GitHub Docs](https://docs.github.com){ target="_blank" rel="noopener" }
