# ZehdBox

Site documentaire sur la programmation - Propulsé par ProperDocs et Material theme.

---

## Stack Technique

- **Site**: ProperDocs + Material for MkDocs
- **Hébergement**: GitHub Pages (déploiement automatique via GitHub Actions)
- **Cours**: Python, JavaScript, React, Git, Data/IA

---

## Structure du dépôt

```
.
├── .env/                 # Environnement virtuel Python (ne pas versionner)
├── ZehdBox/               # Source du site
│   ├── properdocs.yml    # Configuration du site
│   ├── docs/             # Contenu Markdown
│   ├── requirements-ci.txt  # Dépendances minimales (CI + local)
│   └── requirements-dev.txt # Environnement complet gelé (pip freeze)
└── README.md
```

---

## Contenu

### Projets

- **Transcendence** - Application web Pong multiplayer
- **Minishell** - Interpréteur de commandes
- **ft_irc** - Serveur IRC en C++
- **Push Swap** - Algorithme de tri optimisé
- **So Long** - Jeu 2D en C

### Cours

- Python (bases, pandas, numpy, scikit-learn)
- JavaScript, React, Redux
- Git & GitHub
- MkDocs

---

## Installation locale

```bash
# 1. Créer l'environnement virtuel (à la racine du dépôt)
python3 -m venv .env

# 2. Activer l'environnement
source .env/bin/activate

# 3. Installer les dépendances du site (depuis le dossier ZehdBox/)
cd ZehdBox
pip install --upgrade pip
pip install -r requirements-ci.txt

# 4. Lancer le serveur local
properdocs serve --dev-addr=127.0.0.1:8001 --livereload
```

> **Note sur les fichiers de dépendances** :
> - `requirements-ci.txt` — jeu minimal de dépendances utilisé par la CI GitHub Actions. C'est **le seul fichier nécessaire** pour le développement local.
> - `requirements-dev.txt` — environnement complet gelé (`pip freeze`). Utilisez-le uniquement si vous voulez reproduire un environnement identique à celui de la machine d'origine.

### Ajouter une dépendance

```bash
source .env/bin/activate
pip install <paquet>
cd ZehdBox && pip freeze > requirements-dev.txt   # met à jour l'environnement gelé
# Puis ajoutez manuellement le paquet et ses versions dans requirements-ci.txt
```

---

## Commandes

| Commande                | Description                   |
|-------------------------|-------------------------------|
| `properdocs serve`      | Serveur local avec hot-reload |
| `properdocs build`      | Générer le site statique      |
| `properdocs gh-deploy`  | Déployer sur GitHub Pages     |

> ⚠️ Toutes les commandes `properdocs` doivent être lancées **depuis le dossier `ZehdBox/`** (là où se trouve `properdocs.yml`), avec l'environnement virtuel **activé**.

```bash
# Serveur local
properdocs serve --dev-addr=127.0.0.1:8001
properdocs serve --dev-addr=127.0.0.1:8001 --livereload

# Build de validation (strict : les warnings deviennent des erreurs)
properdocs build --strict

# Déploiement
properdocs gh-deploy
```

---

## Dépannage

### `zsh: command not found: properdocs`

Le binaire `properdocs` vit dans l'environnement virtuel, qui n'est pas encore activé dans le terminal :

```bash
source /home/alex/Code/Python/ZehdBox/.env/bin/activate
properdocs --version   # doit afficher 1.6.7
```

### `bad interpreter: ... aucun fichier ou dossier de ce nom`

L'environnement virtuel a été **déplacé ou copié** depuis un autre dossier : les scripts contiennent l'ancien chemin en dur. Recréez-le :

```bash
rm -rf .env   # (ou renommez-le en .env.bak pour le garder)
python3 -m venv .env
source .env/bin/activate
pip install -r ZehdBox/requirements-ci.txt
```

---

## À Propos

Développé par **Alex Lamizana** - Étudiant 42 Angoulême, spécialisation Data & IA.

- [Voir le site](https://lamizana.github.io/ZehdBox/)
- [Mon profil GitHub](https://github.com/Lamizana)
