---
title: Notes Musicales
description: Jouez des mélodies avec des notes musicales et des accords dans Strudel.
---

# <span class="h1">Notes Musicales avec Strudel</span>

<p class="intro">
    Apprenez à jouer des mélodies avec des notes musicales.
</p>

---

## <span class="h2">Jouer des Notes</span>

La fonction `note` (ou `n`) permet de jouer des notes musicales :

```js
note("c3 e3 g3 b3")
```

### Notation des notes

Les notes suivent la notation anglaise :

| Note française | Note anglaise |
|----------------|---------------|
| Do | C |
| Ré | D |
| Mi | E |
| Fa | F |
| Sol | G |
| La | A |
| Si | B |

### Octaves

Ajoutez un numéro pour l'octave (plus le numéro est haut, plus le son est aigu) :

```js
note("c2 c3 c4 c5")
```

---

## <span class="h2">Accidents (dièse et bémol)</span>

### Dièse (#)

```js
note("c3 c#3 d3 d#3 e3 f3 f#3 g3 g#3 a3 a#3 b3")
```

- `c#` = Do dièse
- `d#` = Ré dièse

### Bémol (b)

```js
note("c3 db3 d3 eb3 e3 f3 gb3 g3 ab3 a3 bb3 b3")
```

- `db` = Ré bémol
- `eb` = Mi bémol

---

## <span class="h2">Combiner Notes et Sons</span>

Utilisez `.sound()` ou `.s()` pour appliquer un son à vos notes :

```js
note("a3 c#4 e4 a4").s("sawtooth")
```

### Avec différents synthétiseurs

```js
note("c3 e3 g3").s("sawtooth")
note("c3 e3 g3").s("square")
note("c3 e3 g3").s("triangle")
note("c3 e3 g3").s("sine")
```

---

## <span class="h2">Notes courtes</span>

### Notation abrégée

Vous pouvez utiliser seulement la lettre :

```js
n("c e g b")
```

Ou juste les nombres (numéro de note) :

```js
n("0 4 7 11")
```

---

## <span class="h2">Hauteurs avec `freq`</span>

La fonction `freq` permet de spécifier la fréquence en Hz :

```js
freq("220 275 330 440").s("triangle")
```

---

## <span class="h2">Patterns de Notes</span>

Vous pouvez utiliser toutes les techniques de la mini-notation avec les notes :

### Séquence

```js
note("c3 d3 e3 f3 g3 a3 b3 c4")
```

### Alternance

```js
note("<c3 e3 g3 b3>")
```

### Sous-séquence

```js
note("c3 [d3 e3] f3 g3")
```

### Rythme

```js
note("c3*2 d3*3 e3 f3*2")
```

---

## <span class="h2">Accords</span>

Jouez plusieurs notes simultanément :

```js
note("c3 e3 g3")
note("<c3 e3 g3> <d3 f#3 a3>")
```

---

## <span class="h2">Exemples de Mélodies</span>

### Ascendante

```js
note("c3 d3 e3 f3 g3 a3 b3 c4")
```

### Gamme descendante

```js
note("c4 b3 a3 g3 f3 e3 d3 c3")
```

### Arpège

```js
note("<c3 e3 g3 c4>")
```

### Pattern mélodique

```js
note("c3 e3 g3 b3 c4 b3 g3 e3")
```

---

## <span class="h2">Combiner Percussions et Mélodie</span>

Utilisez la virgule pour combiner drums et notes :

```js
sound("bd hh sd hh, note(c3 e3 g3)")
```

### Exemple avec effets

```js
sound("bd*4, note(c3 e3 g3)*2").s("piano")
```

---

## <span class="h2">Résumé</span>

| Fonction | Description | Exemple |
|----------|-------------|---------|
| `note` / `n` | Joue des notes | `note("c3 e3 g3")` |
| `freq` | Fréquence en Hz | `freq("220 440")` |
| `.s()` | Applique un son | `.s("sawtooth")` |

---

## <span class="h2">Exemples de Morceaux</span>

### Accord majeur

```js
note("c3 e3 g3").s("piano")
```

### Gamme pentatonique

```js
note("c3 d3 e3 g3 a3 c4").s("sawtooth")
```

### Mélodie house

```js
sound("bd*4, note(c3 [d3 e3] f3 g3)*2").s("piano")
```

---

!!! tip "Exercice"
    Créez une mélodie simple dans le REPL !
