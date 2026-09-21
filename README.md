<p align="center">
  <img src="https://img.shields.io/badge/Material_for_MkDocs-9-526CFE?style=for-the-badge&logo=markdown&logoColor=white" alt="Material for MkDocs">
  <img src="https://img.shields.io/badge/Python-3.12-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/GitHub_Pages-deployed-brightgreen?style=for-the-badge&logo=githubpages&logoColor=white" alt="GitHub Pages">
  <img src="https://img.shields.io/badge/ProperDocs-1.6.7-blue?style=for-the-badge" alt="ProperDocs">
  <img src="https://img.shields.io/badge/license-MIT-green?style=for-the-badge" alt="License MIT">
</p>

<h1 align="center">ZehdBox</h1>

<p align="center">
  <strong>Base de connaissances de développement & portfolio</strong>
</p>

<p align="center">
  Python, Data Science, Web, Système.
</p>

---

## À propos

**ZehdBox** est un site vitrine & base de connaissances personnel, couvrant le développement logiciel, la data science, le web et le système. Il sert à la fois de **portfolio pour les recruteurs** et de **mémo technique** alimenté au fil de l'apprentissage.

Contenu structuré, déployé automatiquement via GitHub Actions sur GitHub Pages.

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

## Structure du projet

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
│   │   │   │   ├── django/        # Django : installation, modèles, vues, templates
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
│   └── requirements-dev.txt       # Environnement de développement
├── LICENSE                        # MIT License
└── README.md
```

---

## Projets

> **Inventaire complet des 7 fiches projets** (même liste et ordre que [`projets/index.md`](https://lamizana.github.io/ZehdBox/projets/)).

| Projet | Description | Stack | Démo |
| --- | --- | --- | --- |
| [**Transcendance**](https://lamizana.github.io/ZehdBox/projets/transcendance/) | Pong multijoueur local - solo, 1v1, 4 joueurs, tournoi | ![](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white) ![](https://img.shields.io/badge/Django-092E20?logo=django&logoColor=white) ![](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) ![](https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql&logoColor=white) ![](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white) | ❌ |
| [**Tokenizer**](https://lamizana.github.io/ZehdBox/projets/tokenizer/) | Token BEP-20 GOLD42 (BNB Smart Chain testnet) | ![](https://img.shields.io/badge/Solidity-363636?logo=solidity&logoColor=white) ![](https://img.shields.io/badge/BEP--20-purple) | ✅ [BscScan](https://lamizana.github.io/ZehdBox/projets/tokenizer/) |
| [**Linear Regression**](https://lamizana.github.io/ZehdBox/projets/linear-regression/) | Régression linéaire - descente de gradient (projet 42) | ![](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white) ![](https://img.shields.io/badge/NumPy-013243?logo=numpy&logoColor=white) ![](https://img.shields.io/badge/Pandas-150458?logo=pandas&logoColor=white) ![](https://img.shields.io/badge/Matplotlib-11557C?logo=matplotlib&logoColor=white) | ⚠️ Captures |
| [**Minishell**](https://lamizana.github.io/ZehdBox/projets/minishell/) | Interpréteur de commandes UNIX | ![](https://img.shields.io/badge/C-A8B9CC?logo=c&logoColor=white) ![](https://img.shields.io/badge/UNIX-dark) | ⚠️ Captures |
| [**ft_irc**](https://lamizana.github.io/ZehdBox/projets/ft_irc/) | Serveur IRC en C++ (RFC 2810-2813) | ![](https://img.shields.io/badge/C%2B%2B-00599C?logo=cplusplus&logoColor=white) ![](https://img.shields.io/badge/RFC%202810--2813-blue) | ⚠️ Captures |
| [**Push Swap**](https://lamizana.github.io/ZehdBox/projets/push_swap/) | Algorithme de tri optimisé en C | ![](https://img.shields.io/badge/C-A8B9CC?logo=c&logoColor=white) ![](https://img.shields.io/badge/Algorithmique-red) | ⚠️ Captures |
| [**So Long**](https://lamizana.github.io/ZehdBox/projets/so_long/) | Jeu 2D en C (MiniLibX) | ![](https://img.shields.io/badge/C-A8B9CC?logo=c&logoColor=white) ![](https://img.shields.io/badge/MiniLibX-blue) | ✅ [Vidéo](https://lamizana.github.io/ZehdBox/projets/so_long/) |

---

## Cours

### Python (30+ pages)

| Section | Contenu | Lien |
| --- | --- | --- |
| **Les bases** | Variables, types, opérateurs, chaînes, flux, répétitives | [Bases](https://lamizana.github.io/ZehdBox/cours/python/bases/) |
| **Exercices** | 15 exercices de révision + exercices chaînes | [Exercices](https://lamizana.github.io/ZehdBox/cours/python/exercices/) |
| **Fonctions** | Définir, appeler, return, portée, docstrings | [Fonctions](https://lamizana.github.io/ZehdBox/cours/python/fonctions/) |
| **NumPy** | Tableaux, opérations vectorielles, projet Dés | [NumPy](https://lamizana.github.io/ZehdBox/cours/python/numpy/) |
| **Pandas** | DataFrames, tutoriel Météo, exercices API | [Pandas](https://lamizana.github.io/ZehdBox/cours/python/pandas/) |
| **Scikit-learn** | Machine learning : classification, régression | [Scikit-learn](https://lamizana.github.io/ZehdBox/cours/python/scikit-learn/) |
| **Django** | Installation, Docker & PostgreSQL, modèles, vues, templates | [Django](https://lamizana.github.io/ZehdBox/cours/python/django/) |

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

> [!WARNING]
> Toutes les commandes doivent être lancées **depuis le dossier `ZehdBox/`** avec l'environnement virtuel activé.

```bash
# Serveur local
properdocs serve --dev-addr=127.0.0.1:8001

# Build de validation
properdocs build -f properdocs.yml --strict
```

> [!NOTE]
> Le déploiement **ne se fait pas en local** : un simple `git push` sur `main` déclenche le workflow GitHub Actions (voir la section [CI/CD](#cicd) ci-dessous). La commande `properdocs gh-deploy` n'est donc pas utilisée par ce projet.

---

## CI/CD

Le déploiement est automatisé via **GitHub Actions** (`deploy.yml`) :

1. **Push sur `main`** → déclenche le workflow
2. **Build strict** → validation des warnings comme erreurs
3. **Upload artifact** → upload du site généré
4. **Deploy** → déploiement sur GitHub Pages

Le workflow utilise `fetch-depth: 0` pour conserver l'historique git complet (nécessaire pour `git-revision-date-localized`).

> [!IMPORTANT]
> **Aucune commande de déploiement manuelle n'est nécessaire.** Le workflow est la seule source de vérité pour la mise en ligne ; ne pas publier via une branche `gh-pages` (vestige de l'ancien déploiement MkDocs, désormais abandonné).

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

## Auteur

**Alex Lamizana** — Étudiant 42 Angoulême, spécialisation Data & IA

- [Site](https://lamizana.github.io/ZehdBox/)
- [GitHub](https://github.com/Lamizana)

---
