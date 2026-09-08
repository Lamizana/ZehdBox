---
title: Premier Sons
description: Premiers pas avec Strudel — jouer des sons, créer des rythmes et utiliser le REPL.
---

# <span class="h1">Premier Sons avec Strudel</span>

<p class="intro">
    Apprenez à jouer des sons et créer des rythmes avec Strudel.
</p>

---

## <span class="h2">Comment utiliser le REPL</span>

Le REPL (Read-Eval-Print Loop) est l'endroit où vous allez coder avec Strudel.

1. Cliquez dans le champ de code ci-dessous
2. Appuyez sur `Ctrl` + `Enter` pour jouer
3. Changez le son (par exemple `metal`)
4. Appuyez sur `Ctrl` + `Enter` pour mettre à jour
5. Appuyez sur `Ctrl` + `.` pour arrêter

[Ouvrir Strudel REPL](https://strudel.cc/){ target="_blank" rel="noopener" .md-button }

---

## <span class="h2">Jouer un Son</span>

La fonction `sound` (ou `s`) permet de jouer un son :

```js
sound("casio")
```

!!! tip "Note"
    Il peut y avoir un petit temps de chargement lors du premier lancement d'un son.

---

## <span class="h2">Les Sons Disponibles</span>

Voici quelques sons disponibles par défaut :

```js
sound("insect wind jazz metal east crow casio space numbers")
```

Essayez ces sons dans le REPL !

---

## <span class="h2">Numéro d'échantillon</span>

Un son peut contenir plusieurs échantillons (fichiers audio). Pour sélectionner un échantillon spécifique, ajoutez `:` suivi d'un numéro :

```js
sound("casio:1")
```

- `casio` = `casio:0` (premier échantillon)
- `casio:1` = deuxième échantillon
- Et ainsi de suite...

---

## <span class="h2">Sons de Batterie</span>

Strudel dispose de nombreux sons de batterie intégrés :

```js
sound("bd hh sd oh")
```

### Correspondance des sons

| Code | Description |
|------|-------------|
| `bd` | **B**ass **D**rum (Grosse caisse) |
| `sd` | **S**nare **D**rum (Caisse claire) |
| `rim` | Rimshot |
| `hh` | **H**i-**H**at |
| `oh` | **O**pen **H**ihat |
| `lt` | **L**ow **T**om |
| `mt` | **M**iddle **T**om |
| `ht` | **H**igh **T**om |
| `rd` | **R**i**D**e cymbal |
| `cr` | **C**R**ash cymbal |

---

## <span class="h2">Bank de Batteries</span>

Pour changer le caractère des drums, utilisez `bank` :

```js
sound("bd hh sd oh").bank("RolandTR909")
```

### Banques disponibles

- `RolandTR909` (House, Techno)
- `RolandTR808` 
- `AkaiLinn`
- `RhythmAce`
- `RolandTR707`
- `ViscoSpaceDrum`
- `bossdr110`

---

## <span class="h2">Séquences</span>

### Séquence simple

Séparez les sons par un espace pour créer une séquence :

```js
sound("bd hh sd hh")
```

Le contenu sera joué sur un **cycle** (2 secondes par défaut).

### Accélérer la séquence

Plus vous ajoutez de sons, plus ça joue vite :

```js
sound("bd bd hh bd rim bd hh bd")
```

---

## <span class="h2">Alternance avec `< >`</span>

Les crochets `< >` permettent de jouer un son par cycle (le tempo ne change pas) :

```js
sound("<bd hh rim oh>")
```

Pour accélérer :

```js
sound("<bd hh rim oh>*8")
```

---

## <span class="h2">Silences</span>

Utilisez `-` ou `~` pour les silences :

```js
sound("bd hh - rim - bd hh rim")
```

---

## <span class="h2">Sous-séquences</span>

Les crochets `[]` permettent de subdiviser le temps :

```js
sound("bd [hh hh] sd [hh bd] bd")
```

Le contenu entre crochets est joué dans le même temps qu'un seul son !

---

## <span class="h2">Multiplication</span>

Utilisez `*` pour accélérer un son ou une sous-séquence :

```js
sound("bd hh*2 rim hh*3 bd")
```

- `hh*2` = joue 2 fois plus vite
- `hh*3` = joue 3 fois plus vite

### Sous-séquence accélérée

```js
sound("bd [hh rim]*2 bd [hh rim]*1.5")
```

---

## <span class="h2">Sous-sous-séquences</span>

Imbriquez les crochets pour des patterns complexes :

```js
sound("bd [[rim rim] hh] bd cp")
```

Vous pouvez aller aussi profond que vous voulez !

---

## <span class="h2">Parallèle avec virgules</span>

Utilisez `,` pour jouer plusieurs séquences en parallèle :

```js
sound("hh hh hh, bd casio")
```

### Plusieurs virgules

```js
sound("hh hh hh, bd bd, - casio")
```

### Dans une sous-séquence

```js
sound("hh hh hh, bd [bd,casio]")
```

---

## <span class="h2">Multi-lignes</span>

Utilisez les backticks \` pour écrire sur plusieurs lignes :

```js
sound(`
bd*2, - cp, 
- - - oh, hh*4,
[- casio]*2
`)
```

---

## <span class="h2">Sélection d'échantillons avec `n`</span>

Au lieu de sélectionner每个样品 individuellement :

```js
sound("jazz:0 jazz:1 [jazz:4 jazz:2] jazz:3*2")
```

Utilisez la fonction `n` pour plus de lisibilité :

```js
n("0 1 [4 2] 3*2").sound("jazz")
```

---

## <span class="h2">Changer le tempo</span>

### Avec `setcpm`

```js
setcpm(90/4)
sound("<bd hh rim hh>*8")
```

- **cpm** = Cycles Per Minute (Cycles par minute)
- Par défaut : 30 cpm = 1 cycle toutes les 2 secondes
- `90/4` = 90 BPM en 4/4 (8 croches par cycle)

---

## <span class="h2">Résumé : Mini-notation</span>

| Concept | Syntaxe | Exemple |
|---------|---------|---------|
| Séquence | espace | `sound("bd bd sd hh")` |
| Numéro sample | `:x` | `sound("hh:0 hh:1")` |
| Silence | `-` ou `~` | `sound("metal - jazz")` |
| Alternance | `<>` | `sound("<bd hh rim>")` |
| Sous-suite | `[]` | `sound("bd [hh hh] sd")` |
| Vitesse | `*` | `sound("bd sd*2")` |
| Parallèle | `,` | `sound("hh*2, bd*2")` |

---

## <span class="h2">Résumé : Fonctions</span>

| Fonction | Description | Exemple |
|----------|-------------|---------|
| `sound` / `s` | Joue le son | `sound("bd sd")` |
| `bank` | Sélectionne la bank | `sound("bd").bank("RolandTR909")` |
| `setcpm` | Définit le tempo | `setcpm(90)` |
| `n` | Sélectionne sample | `n("0 1 2").sound("jazz")` |

---

## <span class="h2">Exemples de Beats</span>

### Rock basique

```js
setcpm(100/4)
sound("[bd sd]*2, hh*8").bank("RolandTR505")
```

### House classique

```js
sound("bd*4, [- cp]*2, [- hh]*4").bank("RolandTR909")
```

### We Will Rock You

```js
setcpm(81/2)
sound("bd*2 cp").bank("RolandTR707")
```

---

!!! tip "Exercice"
    Essayez de créer votre propre beat dans le REPL !
