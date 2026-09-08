---
title: Effets Audio
description: Manipulez la chaîne de signal avec des effets audio — réverbération, delay, filtres et plus.
---

# <span class="h1">Effets Audio avec Strudel</span>

<p class="intro">
    Transformez vos sons avec des effets audio.
</p>

---

## <span class="h2">Chaîne de signal</span>

Les effets s'appliquent en chaîne avec le symbole `.` :

```js
note("c3 e3 g3").s("sawtooth").lpf(800)
```

L'ordre des effets compte !

---

## <span class="h2">Filtre Passe-Bas (LPF)</span>

Le filtre passe-bas (Low-Pass Filter) coupe les hautes fréquences :

```js
note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>")
.sound("sawtooth").lpf(800)
```

### Résumé

| Valeur LPF | Effet |
|------------|-------|
| 200 | Son sourd, muffled |
| 500 | Son moyen |
| 5000 | Son brillant, ouvert |

Essayez différentes valeurs pour comprendre l'effet !

---

## <span class="h2">Pattern sur le filtre</span>

Vous pouvez_PATTERNER le filtre comme une séquence :

```js
note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>")
.sound("sawtooth").lpf("200 1000 200 1000")
```

Le pattern du filtre ne change pas le rythme !

---

## <span class="h2">Effet Vowel</span>

Ajoute un son vocal au synthétiseur :

```js
note("<[c3,g3,e4] [bb2,f3,d4] [a2,f3,c4] [bb2,g3,eb4]>")
.sound("sawtooth").vowel("<a e i o>")
```

### Valeurs disponibles

- `a`, `e`, `i`, `o`, `u`

---

## <span class="h2">Gain (Volume)</span>

Contrôle le volume :

```js
sound("hh*16").gain("[.25 1]*4")
```

### ADSR

L'enveloppe ADSR contrôle l'évolution du volume :

```js
sound("bd").attack(0.01).decay(0.2).sustain(0.5).release(0.3)
```

| Paramètre | Description |
|-----------|-------------|
| `attack` | Temps d'attaque |
| `decay` | Temps de déclin |
| `sustain` | Niveau de maintien |
| `release` | Temps de relâchement |

---

## <span class="h2">Reverb (Salle)</span>

Ajoute de la réverbération :

```js
sound("bd sd hh").room(0.5)
sound("bd sd hh").room(0.9)
```

---

## <span class="h2">Delay (Écho)</span>

Ajoute un délai :

```js
sound("bd").delay(0.5)
sound("bd").delay("0.25 0.5")
```

### Feedback du delay

```js
sound("bd").delay(0.5).delayfeedback(0.5)
```

---

## <span class="h2">Effet Pan</span>

Contrôle la position stéréo :

```js
sound("bd sd hh").pan(0)    // Gauche
sound("bd sd hh").pan(1)    // Droite
sound("bd sd hh").pan(0.5)  // Centre
```

---

## <span class="h2">Effet Speed</span>

Change la vitesse de lecture :

```js
sound("bd").speed(1)    // Normal
sound("bd").speed(2)    // Double vitesse (plus aigu)
sound("bd").speed(0.5)  // Demi-vitesse (plus grave)
```

---

## <span class="h2">Effet Distortion</span>

Ajoute de la distorsion :

```js
sound("bd").distort(0.5)
sound("bd").distort(0.9)
```

---

## <span class="h2">Combinaison d'effets</span>

Chaînez plusieurs effets ensemble :

```js
note("c3 e3 g3")
.s("sawtooth")
.lpf(800)
.room(0.5)
.gain(0.8)
```

---

## <span class="h2">Résumé des Effets</span>

| Effet | Description | Exemple |
|-------|-------------|---------|
| `lpf(x)` | Filtre passe-bas | `.lpf(800)` |
| `hpf(x)` | Filtre passe-haut | `.hpf(200)` |
| `vowel(x)` | Effet vocal | `.vowel("a e i o")` |
| `gain(x)` | Volume | `.gain(0.8)` |
| `room(x)` | Réverbération | `.room(0.5)` |
| `delay(x)` | Délai | `.delay(0.5)` |
| `pan(x)` | Position stereo | `.pan(0.5)` |
| `speed(x)` | Vitesse | `.speed(1.5)` |
| `distort(x)` | Distorsion | `.distort(0.5)` |

---

## <span class="h2">Exemples</span>

### Beat avec effets

```js
sound("bd*4, hh*8").bank("RolandTR909").lpf(1000).room(0.5)
```

### Mélodie éthérée

```js
note("<c3 e3 g3> <d3 f#3 a3> <e3 g#3 b3> <f3 a3 c4>")
.s("sawtooth").lpf("500 1000 2000").room(0.7).vowel("a e")
```

### Bass avec delay

```js
note("c2 c2 c2 c2").s("sawtooth").delay(0.25).delayfeedback(0.5)
```

---

!!! tip "Exercice"
    Expérimentez avec différents effets dans le REPL !
