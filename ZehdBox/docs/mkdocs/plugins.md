---
title: Plugins
description: "Les plugins ProperDocs/MkDocs : recherche, social cards, blog, tags, RSS, minify et plus."
---

# <span class="h1">Plugins</span>

<p class="intro">
    Enrichir votre site avec la recherche, les cartes de partage, le blog, les tags et l'optimisation.
</p>

---

## <span class="h2">Configuration</span>

Les plugins s'ajoutent dans `properdocs.yml` :

```yaml
plugins:
  - search
  - social
  - tags
  - minify
  - git-revision-date-localized
```

---

## <span class="h2">search</span>

Recherche full-text intégrée — activée par défaut.

```yaml
plugins:
  - search:
      lang: fr
```

!!! tip "Features associées"
    - `search.suggest` : autocomplétion dans la barre de recherche
    - `search.highlight` : surbrillance des termes trouvés dans la page

---

## <span class="h2">social</span>

Génère automatiquement une image Open Graph (OG) pour chaque page — idéal pour le partage sur Twitter/LinkedIn.

```yaml
plugins:
  - social:
      cards_layout_options:
        font_family: Noto Sans
```

!!! warning "Dépendances système"
    Le plugin `social` nécessite des librairies système (Cairo) :
    ```bash
    sudo apt-get install -y libcairo2-dev libpango1.0-dev libgdk-pixbuf2.0-dev libffi-dev
    pip install mkdocs-material[imaging]
    ```

---

## <span class="h2">blog</span>

Système de blog complet avec auteurs, dates et catégories.

```yaml
plugins:
  - blog:
      blog_dir: blog
      authors_file: "{blog}/.authors.yml"
```

Créez un fichier `blog/.authors.yml` :

```yaml
authors:
  alex:
    name: Alex Lamizana
    description: Développeur & Étudiant 42
    avatar: https://github.com/Lamizana.png
```

Chaque post commence avec un frontmatter :

```yaml
---
title: Mon article
date: 2026-01-15
authors:
  - alex
categories:
  - Python
tags:
  - tutorial
---
```

---

## <span class="h2">tags</span>

Système de tags pour catégoriser les pages.

```yaml
plugins:
  - tags
```

Dans le frontmatter d'une page :

```yaml
---
tags:
  - python
  - débutant
---
```

Créez une page `tags.md` à la racine de `docs/` pour afficher le nuage de tags :

```markdown
# Tags

:material-tag:
```

---

## <span class="h2">rss</span>

Génère un flux RSS pour le blog.

```yaml
plugins:
  - rss:
      match_path: blog/posts/.*
      date_from_meta:
        as_creation: date
      categories:
        - categories
        - tags
```

Le flux est disponible à `/feed.xml`.

---

## <span class="h2">minify</span>

Minifie le HTML de sortie pour réduire la taille du site.

```yaml
plugins:
  - minify:
      minify_html: true
```

---

## <span class="h2">git-revision-date-localized</span>

Affiche la date de dernière modification de chaque page (basée sur git).

```yaml
plugins:
  - git-revision-date-localized:
      type: date
      locale: fr
      enable_creation_date: true
```

!!! info "CI requise"
    Nécessite `fetch-depth: 0` dans le workflow GitHub Actions pour avoir l'historique git complet.

---

## <span class="h2">redirects</span>

Rediriger d'anciennes URLs vers de nouvelles.

```yaml
plugins:
  - redirects:
      redirect_maps:
        ancienne-page.md: nouvelle-page.md
```
