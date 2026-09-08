---
title: Déploiement
description: "Déployer votre site ProperDocs/MkDocs : GitHub Pages, CI/CD et alternatives."
---

# <span class="h1">Déploiement</span>

<p class="intro">
    Mettre en ligne votre site avec GitHub Pages, un workflow CI/CD et les alternatives populaires.
</p>

---

## <span class="h2">GitHub Pages (manuel)</span>

La méthode la plus simple :

```bash
properdocs gh-deploy
```

Cela génère le site et pousse la branche `gh-pages` sur GitHub.

!!! warning "Prérequis"
    Activez **GitHub Pages** dans les paramètres du dépôt :
    **Settings → Pages → Source → GitHub Actions**

---

## <span class="h2">GitHub Actions (CI/CD)</span>

Créez `.github/workflows/deploy.yml` :

```yaml
name: Deploy ProperDocs site to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.12'

      - name: Install system dependencies
        run: |
          sudo apt-get update
          sudo apt-get install -y libcairo2-dev libpango1.0-dev libgdk-pixbuf2.0-dev libffi-dev

      - name: Install Python dependencies
        run: pip install -r requirements.txt

      - name: Build site (strict)
        run: properdocs build --strict

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: site

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## <span class="h2">requirements.txt</span>

Fichier minimal pour la CI :

```
properdocs==1.6.7
mkdocs-material[imaging]==9.7.1
mkdocs-rss-plugin==1.17.9
mkdocs-minify-plugin==0.8.0
mkdocs-git-revision-date-localized-plugin==1.5.3
mkdocs-redirects==1.2.3
```

!!! tip "Pas de `pip freeze`"
    Ne faites jamais un `pip freeze` complet — ça inclut des paquets inutiles qui rallongent le build CI.

---

## <span class="h2">Netlify</span>

Fichier `netlify.toml` à la racine :

```toml
[build]
  command = "properdocs build"
  publish = "site"

[build.environment]
  PYTHON_VERSION = "3.12"
```

---

## <span class="h2">Vercel</span>

Fichier `vercel.json` :

```json
{
  "buildCommand": "properdocs build",
  "outputDirectory": "site",
  "framework": null
}
```

---

## <span class="h2">Déploiement local</span>

Pour prévisualiser le site généré :

```bash
# Générer le site
properdocs build

# Servir les fichiers statiques
python -m http.server -d site 8000
```

Ou utilisez `properdocs serve` pour le dev avec hot-reload.
