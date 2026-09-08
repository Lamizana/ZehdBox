---
title: Bases de MkDocs
description: "Les fondamentaux de ProperDocs/MkDocs : installation, commandes et structure du projet."
---

# <span class="h1">Bases</span>

<p class="intro">
    Installation, premiers pas et structure d'un projet ProperDocs (fork de MkDocs 1.x).
</p>

---

## <span class="h2">Installation</span>

```bash
pip install properdocs
```

!!! tip "Alternative"
    Si la commande n'est pas reconnue :
    ```bash
    python -m pip install properdocs
    python -m properdocs --version
    ```

---

## <span class="h2">Créer un projet</span>

```bash
properdocs new mon-projet
cd mon-projet
```

Cela génère la structure suivante :

```
mon-projet/
├── properdocs.yml    # Fichier de configuration
└── docs/
    └── index.md      # Page d'accueil
```

---

## <span class="h2">Commandes essentielles</span>

| Commande | Description |
|---|---|
| `properdocs new [dossier]` | Créer un nouveau projet |
| `properdocs serve` | Lancer le serveur de dev (hot-reload) |
| `properdocs build` | Générer le site statique |
| `properdocs build --strict` | Build avec erreurs fatales (liens cassés, etc.) |
| `properdocs gh-deploy` | Déployer sur GitHub Pages |

```bash
# Serveur local avec port personnalisé
properdocs serve --dev-addr=127.0.0.1:8001

# Build optimisé
properdocs build --strict
```

---

## <span class="h2">Fichier de configuration</span>

Le fichier `properdocs.yml` est le cœur du projet. Il contient :

```yaml
site_name: MonSite
site_url: https://exemple.github.io/mon-site/

theme:
  name: material
  language: fr

nav:
  - Accueil: index.md
  - Guide: guide.md

plugins:
  - search

markdown_extensions:
  - admonition
  - pymdownx.highlight
```

!!! info "Migration depuis MkDocs"
    Si vous veniez de MkDocs, remplacez simplement :
    - `pip install mkdocs` → `pip install properdocs`
    - `mkdocs build` → `properdocs build`
    - `mkdocs.yml` → `properdocs.yml`
    - Le reste est identique (mêmes plugins, thèmes et extensions).

---

## <span class="h2">Structure recommandée</span>

```
mon-projet/
├── properdocs.yml
├── docs/
│   ├── index.md
│   ├── css/
│   │   └── custom.css
│   ├── images/
│   └── ...
└── site/              # Généré automatiquement (à gitignorer)
```

!!! warning "Ne pas commit le dossier `site/`"
    Ajoutez `site/` à votre `.gitignore` — c'est le build généré.
