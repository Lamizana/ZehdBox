---
title: Material for MkDocs
description: "Le thème Material for MkDocs : palettes, modes sombre/clair, polices, features de navigation et icônes."
---

# <span class="h1">Material</span>

<p class="intro">
    <strong>Material for MkDocs</strong> est le thème le plus populaire pour ProperDocs/MkDocs.
</p>

---

## <span class="h2">Installation</span>

```bash
pip install mkdocs-material
```

---

## <span class="h2">Configuration de base</span>

```yaml
theme:
  name: material
  language: fr
  palette:
    - scheme: default
      primary: deep purple
      accent: deep orange
  font:
    text: Roboto
    code: Roboto Mono
  favicon: favicon.png
  icon:
    logo: material/bat
```

---

## <span class="h2">Mode sombre / clair</span>

Material supporte le basculement automatique selon les préférences système :

```yaml
theme:
  palette:
    # Mode clair
    - media: "(prefers-color-scheme: light)"
      scheme: default
      primary: deep purple
      accent: deep orange
      toggle:
        icon: material/brightness-7
        name: Passer en mode sombre

    # Mode sombre
    - media: "(prefers-color-scheme: dark)"
      scheme: slate
      primary: teal
      accent: purple
      toggle:
        icon: material/brightness-4
        name: Passer en mode clair
```

| Scheme | Description |
|---|---|
| `default` | Mode clair |
| `slate` | Mode sombre |

---

## <span class="h2">Couleurs principales</span>

Les couleurs `primary` et `accent` sont au format **kebab-case** :

<div class="badge-section">
<div class="badge-row">
    <span class="tech-tag" style="background:#f44336">Red</span>
    <span class="tech-tag" style="background:#e91e63">Pink</span>
    <span class="tech-tag" style="background:#9c27b0">Purple</span>
    <span class="tech-tag" style="background:#673ab7">Deep Purple</span>
    <span class="tech-tag" style="background:#3f51b5">Indigo</span>
    <span class="tech-tag" style="background:#2196f3">Blue</span>
    <span class="tech-tag" style="background:#03a9f4">Light Blue</span>
    <span class="tech-tag" style="background:#00bcd4">Cyan</span>
    <span class="tech-tag" style="background:#009688">Teal</span>
    <span class="tech-tag" style="background:#4caf50">Green</span>
    <span class="tech-tag" style="background:#8bc34a">Light Green</span>
    <span class="tech-tag" style="background:#ff9800">Orange</span>
    <span class="tech-tag" style="background:#ff5722">Deep Orange</span>
    <span class="tech-tag" style="background:#795548">Brown</span>
    <span class="tech-tag" style="background:#9e9e9e">Grey</span>
    <span class="tech-tag" style="background:#607d8b">Blue Grey</span>
</div>
</div>

---

## <span class="h2">Polices</span>

```yaml
theme:
  font:
    text: Roboto        # Police du texte
    code: Roboto Mono   # Police du code
```

Polices disponibles pour `text` : Roboto, Roboto Slab, Source Sans Pro, Helvetiva Neue...

---

## <span class="h2">Features de navigation</span>

```yaml
theme:
  features:
    - navigation.instant        # Navigation SPA (pas de rechargement)
    - navigation.instant.progress  # Barre de progression
    - navigation.tracking       # URL suit la section visible
    - navigation.tabs           # Onglets de premier niveau
    - navigation.path           # Fil d'Ariane
    - navigation.top            # Bouton "Retour en haut"
    - navigation.sections       # Sections dépliables
    - navigation.indexes        # Pages index par dossier
    - navigation.footer         # Liens précédent/suivant
    - navigation.expand         # Déplier la nav automatiquement
    - search.suggest            # Autocomplétion recherche
    - search.highlight          # Surbrillance dans les résultats
    - content.code.copy         # Bouton copier sur les blocs de code
    - header.autohide           # Header qui disparaît au scroll
```

---

## <span class="h2">Icônes d'admonitions</span>

```yaml
theme:
  icon:
    admonition:
      note: octicons/tag-16
      info: octicons/info-16
      tip: octicons/squirrel-16
      warning: octicons/alert-16
      danger: octicons/zap-16
      example: octicons/beaker-16
```

---

## <span class="h2">CSS personnalisé</span>

Pour aller au-delà de la configuration YAML, ajoutez un fichier CSS :

```yaml
extra_css:
  - css/custom.css
```

```css
/* docs/css/custom.css */
.md-header {
    background-color: var(--md-primary-fg-color);
}
```
