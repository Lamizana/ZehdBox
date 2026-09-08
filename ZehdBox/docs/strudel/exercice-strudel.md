---
title: Exercices Strudel
description: Exercices pratiques pour consolider vos acquis en musique algorithmique avec Strudel.
---

# <span class="h1">Exercices Strudel</span>

<p class="intro">
    Pratiquez ce que vous avez appris avec ces exercices.
</p>

---

## <span class="h2">Introduction</span>

Ces exercices sont conçus pour vous aider à progresser avec Strudel. Essayez par vous-même avant de regarder les solutions !

[Ouvrir Strudel REPL](https://strudel.cc/){ target="_blank" rel="noopener" .md-button }

---

## <span class="h2">Exercice 1: Premier Son</span>

### Énoncé

Jouez le son "casio" dans le REPL.

### Résultat attendu

Vous devriez entendre un son de synthétiseur.

???- tip "Solution"
    ```js
    sound("casio")
    ```

---

## <span class="h2">Exercice 2: Séquence de Batterie</span>

### Énoncé

Créez une séquence avec un kick, une snare, et deux hi-hats.

### Résultat attendu

Un rythme simple : bd (kick), sd (snare), hh (hi-hat).

???- tip "Solution"
    ```js
    sound("bd sd hh hh")
    ```

---

## <span class="h2">Exercice 3: Utiliser une Bank</span>

### Énoncé

Appliquez le bank "RolandTR909" à votre séquence de batterie.

### Résultat attendu

Le son de la drum machine 909.

???- tip "Solution"
    ```js
    sound("bd sd hh hh").bank("RolandTR909")
    ```

---

## <span class="h2">Exercice 4: Sous-séquence</span>

### Énoncé

Créez un pattern avec une sous-séquence : kick, deux hi-hats, snare.

### Résultat attendu

Le temps des deux hi-hats est divisé par 2.

???- tip "Solution"
    ```js
    sound("bd [hh hh] sd")
    ```

---

## <span class="h2">Exercice 5: Silences</span>

### Énoncé

Ajoutez un silence entre le kick et la snare.

### Résultat attendu

Kick... silence... snare.

???- tip "Solution"
    ```js
    sound("bd ~ sd ~")
    ```

---

## <span class="h2">Exercice 6: Notes Musicales</span>

### Énoncé

Jouez un accord de Do majeur (Do, Mi, Sol) avec un synthétiseur sawtooth.

### Résultat attendu

Un son d'accord joué simultanément.

???- tip "Solution"
    ```js
    note("c3 e3 g3").s("sawtooth")
    ```

---

## <span class="h2">Exercice 7: Gamme</span>

### Énoncé

Jouez la gamme de Do (Do, Ré, Mi, Fa, Sol, La, Si, Do).

### Résultat attendu

Une mélodie ascendante.

???- tip "Solution"
    ```js
    note("c3 d3 e3 f3 g3 a3 b3 c4")
    ```

---

## <span class="h2">Exercice 8: Effet Filtre</span>

### Énoncé

Appliquez un filtre passe-bas à un son de synthétiseur.

### Résultat attendu

Le son doit être plus sourd/étouffé.

???- tip "Solution"
    ```js
    note("c3 e3 g3").s("sawtooth").lpf(500)
    ```

---

## <span class="h2">Exercice 9: Effet Reverb</span>

### Énoncé

Ajoutez de la réverbération à votre beat.

### Résultat attendu

Un son avec plus d'espace/ambiance.

???- tip "Solution"
    ```js
    sound("bd sd hh").room(0.7)
    ```

---

## <span class="h2">Exercice 10: Combinaison d'Effets</span>

### Énoncé

Appliquez un filtre ET une réverbération à votre son.

### Résultat attendu

Un son transformé par les deux effets.

???- tip "Solution"
    ```js
    note("c3 e3 g3").s("sawtooth").lpf(800).room(0.5)
    ```

---

## <span class="h2">Exercice 11: Pattern avec Alternance</span>

### Énoncé

Utilisez `< >` pour alterner entre deux sons différents.

### Résultat attendu

Alternance kick / snare à chaque cycle.

???- tip "Solution"
    ```js
    sound("<bd sd>")
    ```

---

## <span class="h2">Exercice 12: Pattern Parallèle</span>

### Énoncé

Utilisez `,` pour jouer drums et mélodie simultanément.

### Résultat attendu

Un beat + une mélodie ensemble.

???- tip "Solution"
    ```js
    sound("bd*4, note(c3 e3 g3)")
    ```

---

## <span class="h2">Exercice 13: Tempo</span>

### Énoncé

Changez le tempo à 120 BPM (utilisez setcpm).

### Résultat attendu

Le beat plus rapide.

???- tip "Solution"
    ```js
    setcpm(120/4)
    sound("bd*4, hh*8")
    ```

---

## <span class="h2">Exercice 14: Beat Complet</span>

### Énoncé

Créez un beat complet avec :
- 4 kicks par mesure
- 8 hi-hats
- 2 snares
- Bank RolandTR909

### Résultat attendu

Un beat de style house.

???- tip "Solution"
    ```js
    sound("bd*4, [- cp]*2, hh*8").bank("RolandTR909")
    ```

---

## <span class="h2">Exercice 15: Mélodie avec Effets</span>

### Énoncé

Créez une mélodie avec filtre, delay et reverb.

### Résultat attendu

Une mélodie avec beaucoup d'ambiance.

???- tip "Solution"
    ```js
    note("c3 d3 e3 f3 g3 a3 b3 c4")
    .s("sawtooth")
    .lpf(1000)
    .delay(0.25)
    .room(0.7)
    ```

---

## <span class="h2">Correction</span>

Vous pouvez retrouver toutes les solutions dans les blocs ci-dessus.

!!! tip "Conseil"
    Essayez de modifier les exemples pour créer vos propres compositions !
