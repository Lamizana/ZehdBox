---
title: Syntaxe des Patterns
description: Maîtrisez la mini-notation pour créer des rythmes complexes avec Strudel.
---

# <span class="h1">Syntaxe des Patterns (Mini-notation)</span>

<p class="intro">
    Maîtrisez la syntaxe qui permet de créer des rythmes complexes.
</p>

---

## <span class="h2">Introduction</span>

La **mini-notation** est le langage de patterns de Tidal/Strudel. Elle permet de créer des rythmes complexes avec une syntaxe simple.

---

## <span class="h2">Concepts de Base</span>

### Séquence simple

Séparez les éléments par un espace :

```js
sound("bd hh sd")
```

### Cycle

Le contenu d'une séquence est joué sur un cycle (1 beat par défaut).

---

## <span class="h2">Symboles Spécials</span>

### `< >` - Alternance

Joue un élément différent à chaque cycle :

```js
sound("<bd sd hh>")
// Cycle 1: bd
// Cycle 2: sd
// Cycle 3: hh
```

### `[]` - Sous-séquence

Subdivise le temps :

```js
sound("bd [hh hh] sd")
// bd (1 temps)
// hh hh (1 temps, 2x plus vite)
// sd (1 temps)
```

### `~` ou `-` - Silence

```js
sound("bd ~ sd ~")
```

### `,` - Parallèle

Joue plusieurs patterns simultanément :

```js
sound("bd hh, sd")
```

---

## <span class="h2">Opérateurs de Temps</span>

### `*n` - Multiplication

Accélère un son (joue n fois) :

```js
sound("bd*2")     // 2 fois
sound("hh*4")     // 4 fois
sound("bd*32")    // très vite
```

### Division

```js
sound("bd/2")     // moitié moins de fois
```

### `.x` - Valeurs décimales

```js
sound("bd*1.5")   // 1.5x
sound("[hh rim]*1.5")
```

---

## <span class="h2">Imbrication</span>

### Niveaux multiples

```js
// Niveau 1: beat principal
// Niveau 2: sous-pattern
// Niveau 3: sous-sous-pattern

sound("bd [[hh rim] cp] sd")
```

### Profondeur illimitée

```js
sound("bd [[[hh hh] rim] cp]")
```

---

## <span class="h2">Groupement avec `stack`</span>

`stack` permet de combiner plusieurs patterns :

```js
stack(
  sound("bd*4"),
  sound("hh*8"),
  sound("sd*2")
)
```

---

## <span class="h2">Fonctions de Temps</span>

### `slow`

Ralentit le pattern :

```js
sound("bd sd hh").slow(2)
```

### `fast`

Accélère le pattern :

```js
sound("bd sd hh").fast(2)
```

### `sometimes`

Applique parfois un effet :

```js
sound("bd sd hh").sometimes(rev)
```

### `every`

Applique un effet à chaque n cycles :

```js
sound("bd sd hh").every(4, rev)
```

---

## <span class="h2">Jouer avec le Tempo</span>

### setcps

Définit les cycles par seconde :

```js
setcps(1)    // 1 cycle par seconde
setcps(0.5) // 1 cycle toutes les 2 secondes
setcps(2)   // 2 cycles par seconde
```

### setcpm

Définit les cycles par minute :

```js
setcpm(60)    // 60 cycles par minute
setcpm(120/4) // Équivalent à 120 BPM en 4/4
```

---

## <span class="h2">Fonctions Conditionnelles</span>

### `when`

Applique un effet quand une condition est vraie :

```js
sound("bd sd hh").when(every(4), fast(2))
```

### `if`

Condition if/else :

```js
if(every(2), fast(2), slow(2))
```

---

## <span class="h2">Fonctions Aléatoires</span>

### `sometimes`

Applique aléatoirement (50% du temps) :

```js
sound("bd").sometimes(rev)
```

### `often`

Applique fréquemment (70% du temps) :

```js
sound("bd").often(gain(0.5))
```

### `rarely`

Applique rarement (30% du temps) :

```js
sound("bd").rarely(fast(2))
```

### `almostAlways`

Presque toujours (90% du temps) :

```js
sound("bd").almostAlways(lpf(500))
```

---

## <span class="h2">Exemples de Patterns Avancés</span>

### Polyrhythmie

```js
sound("bd*4, hh*3")
// 4 beats vs 3 beats
```

### Pattern Euclidien

```js
sound("bd(3,8)")
// 3 beats répartis sur 8 temps
```

### Variation progressive

```js
sound("bd sd hh").jux(rev)
```

---

## <span class="h2">Résumé des Symboles</span>

| Symbole | Description | Exemple |
|---------|-------------|---------|
| Espace | Séparateur | `bd sd hh` |
| `<>` | Alternance | `<bd sd>` |
| `[]` | Sous-suite | `bd [hh sd]` |
| `~` ou `-` | Silence | `bd ~ sd` |
| `,` | Parallèle | `bd, hh` |
| `*n` | Multiplication | `bd*2` |
| `/n` | Division | `bd/2` |

---

## <span class="h2">Résumé des Fonctions</span>

| Fonction | Description |
|----------|-------------|
| `slow(n)` | Ralentit n fois |
| `fast(n)` | Accélère n fois |
| `sometimes(f)` | Aléatoire 50% |
| `often(f)` | Aléatoire 70% |
| `rarely(f)` | Aléatoire 30% |
| `every(n, f)` | Every n cycles |
| `jux(f)` | Effet mirror |
| `rev()` | Reverse |
| `stack(...)` | Combiner patterns |

---

!!! tip "Exercice"
    Créez un pattern complexe en utilisant les symboles de la mini-notation !
