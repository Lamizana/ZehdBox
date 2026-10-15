---
title: Extensions Markdown
description: "Les extensions Markdown de Material for MkDocs : admonitions, onglets, code highlight, emojis, grid cards."
tags:
  - cours
  - mkdocs
  - extensions
---

# <span class="h1">Extensions Markdown</span>

<p class="intro">
    Enrichir vos pages avec des admonitions, onglets, coloration de code, emojis et grilles de cartes.
</p>

---

## <span class="h2">Configuration</span>

Les extensions s'ajoutent dans `properdocs.yml` :

```yaml
markdown_extensions:
  - admonition
  - pymdownx.details
  - pymdownx.superfences
  - pymdownx.highlight
  - pymdownx.tabbed:
      alternate_style: true
  - pymdownx.emoji:
      emoji_index: !!python/name:material.extensions.emoji.twemoji
      emoji_generator: !!python/name:material.extensions.emoji.to_svg
  - attr_list
  - md_in_html
  - toc:
      permalink: true
```

---

## <span class="h2">Admonitions</span>

Blocs d'information mis en avant : notes, astuces, avertissements.

```markdown
!!! note "Titre"
    Contenu de la note.

!!! tip "Astuce"
    Contenu de l'astuce.

!!! warning "Attention"
    Contenu de l'avertissement.

!!! danger "Danger"
    Contenu de danger.
```

**Résultat :**

!!! note "Titre"
    Contenu de la note.

!!! tip "Astuce"
    Contenu de l'astuce.

!!! warning "Attention"
    Contenu de l'avertissement.

### <span class="h3">Admonitions dépliables</span>

```markdown
??? note "Cliquer pour ouvrir"
    Contenu caché par défaut.

???+ warning "Ouvert par défaut"
    Contenu visible par défaut.
```

??? note "Cliquer pour ouvrir"
    Contenu caché par défaut.

???+ warning "Ouvert par défaut"
    Contenu visible par défaut.

---

## <span class="h2">Onglets de code</span>

Comparer plusieurs langages côte à côte :

```markdown
=== "Python"

    ```python
    print("Hello World")
    ```

=== "JavaScript"

    ```javascript
    console.log("Hello World")
    ```
```

**Résultat :**

=== "Python"

    ```python
    print("Hello World")
    ```

=== "JavaScript"

    ```javascript
    console.log("Hello World")
    ```

---

## <span class="h2">Coloration de code</span>

Avec numéros de ligne et surbrillance :

````markdown
```python title="example.py" linenums="1" hl_lines="2 3"
def hello(name):
    """Saluer un utilisateur."""
    print(f"Bonjour {name}!")
    return True
```
````

```python title="example.py" linenums="1" hl_lines="2 3"
def hello(name):
    """Saluer un utilisateur."""
    print(f"Bonjour {name}!")
    return True
```

---

## <span class="h2">Emojis & Icônes Material</span>

Utilisez les icônes Material Design inline :

```markdown
:material-home: :material-github: :fontawesome-brands-python:
:octicons-star-16: :material-check:
```

:material-home: :material-github: :fontawesome-brands-python: :octicons-star-16: :material-check:

---

## <span class="h2">Grid Cards</span>

Grille de cartes cliquables avec `attr_list` + `md_in_html` :

````markdown
<div class="grid cards" markdown>

-   :materialrocket-launch:{ .lg .middle } __Titre__

    ---

    Description de la carte.

    [:octicons-arrow-right-24: Lien](page.md)

</div>
````

**Résultat :**

<div class="grid cards" markdown>

-   :material-rocket-launch:{ .lg .middle } __Exemple__

    ---

    Une carte de démonstration avec un lien.

    [:octicons-arrow-right-24: Voir](bases.md)

</div>

---

## <span class="h2">Liens boutons</span>

```markdown
[:material-download: Télécharger](fichier.zip){ .md-button .md-button--primary }
[:fontawesome-brands-github: GitHub](https://github.com){ .md-button }
```

[:material-download: Télécharger](#){ .md-button .md-button--primary }
[:fontawesome-brands-github: GitHub](https://github.com){ .md-button }

---

## <span class="h2">Listes de définition</span>

```markdown
Terme
:   Définition du terme

Autre terme
:   Une autre définition
```

---

## <span class="h2">Footnotes</span>

```markdown
Ceci est un texte avec une note[^1].

[^1]: Voici le contenu de la note.
```

---

## <span class="h2">Table des matières</span>

```yaml
markdown_extensions:
  - toc:
      permalink: true    # Lien d'ancrage sur chaque titre
```

---

## <span class="h2">Titres et numérotation</span>

### <span class="h3">Habillage des titres</span>

Chaque titre porte la classe de son niveau, définie dans `docs/css/custom.css` :

```markdown
# <span class="h1">Titre de la page</span>

## <span class="h2">Section</span>

### <span class="h3">Sous-section</span>
```

### <span class="h3">Numérotation des étapes</span>

!!! note "Convention"
    Les étapes d'un tutoriel pas-à-pas se numérotent **en chiffres arabes** : un `h2` pour l'étape, un `h3` pour la sous-étape.

    ```markdown
    ## <span class="h2">1. Créer le compte</span>

    ### <span class="h3">1.1 Installer l'extension</span>
    ```

    Une fois les étapes numérotées, tout renvoi dans le texte cite le **numéro** — « retourne à l'étape 3 » — jamais la lettre. Les pages de concepts (cours, notes, fiches projets) ne numérotent pas leurs titres : l'habillage `h2`/`h3` suffit à les repérer.

C'est la forme prévue par la norme [ISO 2145](https://www.iso.org/standard/6937.html) — chiffres arabes, point entre les niveaux, rien après le dernier numéro.
