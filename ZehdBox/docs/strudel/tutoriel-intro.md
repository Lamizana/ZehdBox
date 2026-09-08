---
title: Introduction
description: "Découvrez Strudel, un langage de musique algorithmique, et installez votre environnement de travail."
---

# <span class="h1">Introduction à Strudel</span>

<p class="intro">
    Apprenez à <strong>créer de la musique avec du code</strong>.
</p>

---

## <span class="h2">Qu'est-ce que Strudel ?</span>

<em>Strudel</em> est un langage de programmation musicale qui permet de composer des morceaux dynamiques. Il s'agit d'une adaptation officielle du langage <strong>Tidal Cycles</strong> en JavaScript.

---

## <span class="h2">Ce que vous pouvez faire avec Strudel</span>

- **Live coding** : Créez de la musique en temps réel avec du code
- **Composition algorithmique** : Composez en utilisant les patterns uniques de Tidal
- **Enseignement** : Idéal pour enseigner la musique et le code simultanément
- **Intégration** : Connectez via MIDI ou OSC à votre setup musical existant

---

## <span class="h2">Comment commencer ?</span>

**Strudel** s'utilise directement dans le navigateur via le **REPL** (Read-Eval-Print Loop) :

[Ouvrir Strudel REPL](https://strudel.cc/){ target="_blank" rel="noopener" .md-button }

!!! tip "Raccourcis clavier"
    - `Ctrl` + `Enter` : Lancer le code
    - `Ctrl` + `.` : Arrêter

---

## <span class="h2">Parcours d'apprentissage</span>

Voici l'ordre recommandé pour apprendre Strudel :

1. **Premier Sons** : Apprendre à jouer des sons et créer des rythmes
2. **Notes** : Ajouter des mélodies
3. **Effets** : Transformer le son avec des effets
4. **Projets** : Créer vos propres morceaux

---

## <span class="h2">Exemples</span>

Voici un exemple de ce que vous pouvez créer avec Strudel :

```js
// Beat de base
sound("bd hh sd hh").bank("RolandTR909")
```

```js
// Mélodie
note("c3 e3 g3 b3").s("piano")
```

```js
// Pattern complexe
sound("<bd sd [bd bd] sd>*4").bank("bossdr110")
```

---

!!! info "Lien officiel"
    Ce cours est basé sur la documentation officielle de Strudel : [strudel.cc](https://strudel.cc/){ target="_blank" rel="noopener" }

    Pour aller plus loin, consultez la [documentation complète](https://strudel.cc/workshop/getting-started/){ target="_blank" rel="noopener" }.
