# 🧰 ZehdBox

> **Base de connaissances & portfolio de développement** — Python, Data Science, Web, Système

[![Deploy to GitHub Pages](https://github.com/Lamizana/ZehdBox/actions/workflows/deploy.yml/badge.svg)](https://github.com/Lamizana/ZehdBox/actions/workflows/deploy.yml)
![License](https://img.shields.io/badge/license-MIT-green)
![Python](https://img.shields.io/badge/Python-3.12-3776AB?logo=python&logoColor=white)
![ProperDocs](https://img.shields.io/badge/ProperDocs-1.6.7-blue)
![Material for MkDocs](https://img.shields.io/badge/Material_for_MkDocs-9-dark?logo=markdown&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-deployed-brightgreen?logo=githubpages&logoColor=white)

---

## À propos

**ZehdBox** est un site vitrine & base de connaissances personnel, couvrant le développement logiciel, la data science, le web et le système. Il sert à la fois de **portfolio pour les recruteurs** et de **mémo technique** alimenté au fil de l'apprentissage.

**71 pages** de contenu structuré, déployées automatiquement via GitHub Actions sur GitHub Pages.

**Live** : [lamizana.github.io/ZehdBox](https://lamizana.github.io/ZehdBox/)

---

## Fonctionnalités

- **Cours Python complet** : bases du langage, exercices, NumPy, Pandas, Scikit-learn, fonctions
- **7 fiches projets** détaillées : contexte, stack, défis techniques, résultats
- **Blog technique** avec articles et images
- **Cours Système** : Linux, Windows
- **Cours Web** : Web2, Web3, blockchain
- **Tutoriels Strudel** : audio live coding
- **Recherche full-text** intégrée
- **Mode sombre automatique** (selon les préférences système)
- **Responsive design** (mobile, tablette, desktop)
- **Déploiement automatique** via GitHub Actions

---

## Stack technique

| Catégorie | Technologie | Badge |
| --- | --- | --- |
| **Générateur** | ProperDocs + Material for MkDocs | ![](https://img.shields.io/badge/ProperDocs-1.6.7-blue) |
| **Thème** | Material for MkDocs | ![](https://img.shields.io/badge/Material_for_MkDocs-9-dark?logo=markdown&logoColor=white) |
| **Langage** | Python 3.12 | ![](https://img.shields.io/badge/Python-3.12-3776AB?logo=python&logoColor=white) |
| **Extensions** | PyMdown, Mermaid, Admonitions, Content Tabs | ![](https://img.shields.io/badge/Extensions-Markdown-orange) |
| **CI/CD** | GitHub Actions | ![](https://img.shields.io/badge/GitHub_Actions-2023-dark?logo=githubactions&logoColor=white) |
| **Hébergement** | GitHub Pages | ![](https://img.shields.io/badge/GitHub_Pages-brightgreen?logo=githubpages&logoColor=white) |
| **Recherche** | Plugin search (built-in) | ![](https://img.shields.io/badge/Search-full--text-yellow) |

### Extensions Markdown activées

| Extension | Usage |
| --- | --- |
| `pymdownx.highlight` | Coloration syntaxique du code |
| `pymdownx.superfences` | Fenced code blocks avancés + Mermaid |
| `pymdownx.tabbed` | Onglets de contenu (alternates) |
| `pymdownx.details` | Admonitions repliables |
| `pymdownx.emoji` | Icônes Material Design |
| `pymdownx.tasklist` | Listes de tâches cochables |
| `attr_list` + `md_in_html` | Grid cards et boutons |
| `admonition` | Blocs d'information (note, tip, warning) |

---

## 📁 Structure du projet

```console
ZehdBox/
├── .github/workflows/deploy.yml   # CI/CD GitHub Actions
├── ZehdBox/
│   ├── properdocs.yml             # Configuration du site
│   ├── docs/
│   │   ├── projets/               # 7 fiches projets
│   │   ├── cours/
│   │   │   ├── python/            # Cours Python complet (30+ pages)
│   │   │   │   ├── bases/         # Variables, types, opérateurs, etc.
│   │   │   │   ├── exercices/     # Exercices nombres & chaînes
│   │   │   │   ├── numpy/         # NumPy + projet Dés
│   │   │   │   ├── pandas/        # Pandas + tutoriel + exercices Météo
│   │   │   │   └── fonctions.md   # Fonctions Python
│   │   │   └── index.md           # Hub des cours
│   │   ├── blog/                  # Articles techniques
│   │   ├── systeme/               # Linux & Windows
│   │   ├── web/                   # Web2 & Web3
│   │   ├── strudel/               # Tutoriels audio
│   │   ├── github/                # Git & GitHub
│   │   ├── mkdocs/                # Documentation MkDocs
│   │   └── css/custom.css         # Styles personnalisés
│   ├── requirements-ci.txt        # Dépendances minimales (CI)
│   └── requirements-dev.txt       # Environnement complet gelé
├── TODO.md                        # Roadmap d'amélioration
├── PR.txt                         # Récapitulatif des PR
├── LICENSE                        # MIT License
└── README.md
```

---

## 🎯 Projets

| Projet | Description | Stack | Démo |
| --- | --- | --- | --- |
| [**Transcendance**](https://lamizana.github.io/ZehdBox/projets/transcendance/) | Application web Pong multiplayer | ![](https://img.shields.io/badge/React-blue) ![](https://img.shields.io/badge/PostgreSQL-blue) ![](https://img.shields.io/badge/WebSockets-orange) | ❌ |
| [**Tokenizer**](https://lamizana.github.io/ZehdBox/projets/tokeniser.md) | Token ERC-20 + frontend | ![](https://img.shields.io/badge/Solidity-black) ![](https://img.shields.io/badge/React-blue) ![](https://img.shields.io/badge/BEP--20-purple) | ✅ [BscScan](https://lamizana.github.io/ZehdBox/projets/tokeniser.md) |
| [**Minishell**](https://lamizana.github.io/ZehdBox/projets/minishell.md) | Interpréteur de commandes | ![](https://img.shields.io/badge/C-A8B9CC?logo=c&logoColor=white) ![](https://img.shields.io/badge/UNIX-dark) | ⚠️ Captures |
| [**ft_irc**](https://lamizana.github.io/ZehdBox/projets/ft_irc.md) | Serveur IRC en C++ | ![](https://img.shields.io/badge/C%2B%2B-00599C?logo=cplusplus&logoColor=white) ![](https://img.shields.io/badge/RFC_1459-blue) | ⚠️ Captures |
| [**Push Swap**](https://lamizana.github.io/ZehdBox/projets/push_swap.md) | Algorithme de tri optimisé | ![](https://img.shields.io/badge/C-A8B9CC?logo=c&logoColor=white) ![](https://img.shields.io/badge/Algorithmique-red) | ⚠️ Captures |
| [**So Long**](https://lamizana.github.io/ZehdBox/projets/so_long.md) | Jeu 2D en C | ![](https://img.shields.io/badge/C-A8B9CC?logo=c&logoColor=white) ![](https://img.shields.io/badge/MiniLibX-blue) | ✅ [Vidéo](https://lamizana.github.io/ZehdBox/projets/so_long.md) |

---

## Cours

### Python (30+ pages)

| Section | Contenu | Lien |
| --- | --- | --- |
| **Les bases** | Variables, types, opérateurs, chaînes, flux, répétitives | [Bases](https://lamizana.github.io/ZehdBox/cours/python/bases/) |
| **Exercices** | 15 exercices de révision + exercices chaînes | [Exercices](https://lamizana.github.io/ZehdBox/cours/python/exercices/) |
| **Fonctions** | Définir, appeler, return, portée, docstrings | [Fonctions](https://lamizana.github.io/ZehdBox/cours/python/fonctions.md) |
| **NumPy** | Tableaux, opérations vectorielles, projet Dés | [NumPy](https://lamizana.github.io/ZehdBox/cours/python/numpy/) |
| **Pandas** | DataFrames, tutoriel Météo, exercices API | [Pandas](https://lamizana.github.io/ZehdBox/cours/python/pandas/) |
| **Scikit-learn** | Machine learning : classification, régression | [Scikit-learn](https://lamizana.github.io/ZehdBox/cours/python/scikit-learn.md) |

### Autres domaines

| Domaine | Pages | Lien |
| --- | --- | --- |
| **Système** | Linux, Windows | [Système](https://lamizana.github.io/ZehdBox/systeme/) |
| **Web** | Web2, Web3, blockchain | [Web](https://lamizana.github.io/ZehdBox/web/) |
| **Git & GitHub** | Commandes, workflows | [GitHub](https://lamizana.github.io/ZehdBox/github/) |
| **MkDocs** | Documentation, thèmes | [MkDocs](https://lamizana.github.io/ZehdBox/mkdocs/) |
| **Blog** | Articles techniques | [Blog](https://lamizana.github.io/ZehdBox/blog/) |
| **Strudel** | Tutoriels audio live coding | [Strudel](https://lamizana.github.io/ZehdBox/strudel/) |

---

## Installation

### Prérequis

- Python 3.12+
- pip

### Déploiement rapide

```bash
# 1. Cloner le dépôt
git clone https://github.com/Lamizana/ZehdBox.git
cd ZehdBox

# 2. Créer et activer l'environnement virtuel
python3 -m venv .env
source .env/bin/activate

# 3. Installer les dépendances
cd ZehdBox
pip install --upgrade pip
pip install -r requirements-ci.txt

# 4. Lancer le serveur local
properdocs serve --dev-addr=127.0.0.1:8001 --livereload
```

Le site sera accessible sur `http://127.0.0.1:8001`.

---

## Commandes

| Commande | Description |
| --- | --- |
| `properdocs serve` | Serveur local avec hot-reload |
| `properdocs build --strict` | Build de validation (warnings = erreurs) |
| `properdocs gh-deploy` | Déployer sur GitHub Pages |

> [!WARNING]
> Toutes les commandes doivent être lancées **depuis le dossier `ZehdBox/`** avec l'environnement virtuel activé.

```bash
# Serveur local
properdocs serve --dev-addr=127.0.0.1:8001

# Build de validation
properdocs build -f properdocs.yml --strict

# Déploiement
properdocs gh-deploy
```

---

## CI/CD

Le déploiement est automatisé via **GitHub Actions** (`deploy.yml`) :

1. **Push sur `main`** → déclenche le workflow
2. **Build strict** → validation des warnings comme erreurs
3. **Upload artifact** → upload du site généré
4. **Deploy** → déploiement sur GitHub Pages

Le workflow utilise `fetch-depth: 0` pour conserver l'historique git complet (nécessaire pour `git-revision-date-localized`).

---

## Contribution

Ce projet est un repository personnel. Cependant, si vous souhaitez contribuer :

1. Fork le dépôt
2. Créer une branche (`git checkout -b feature/amazing-feature`)
3. Commit vos changements (`git commit -m 'Add amazing feature'`)
4. Push vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request

### Convention de commits

```bash
<type>(<scope>): <description>

Types : feat, fix, docs, style, refactor, test, chore
Scopes : python, exercices, nav, web, blog, css
```

---

## License

Distribué sous la licence MIT. Voir [`LICENSE`](LICENSE) pour plus de détails.

---

## 👨Auteur

**Alex Lamizana** — Étudiant 42 Angoulême, spécialisation Data & IA

- [Site](https://lamizana.github.io/ZehdBox/)
- [GitHub](https://github.com/Lamizana)

---
