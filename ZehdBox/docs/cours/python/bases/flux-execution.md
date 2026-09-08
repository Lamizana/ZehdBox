---
title: Flux d'exécution
description: Comprendre les conditions (if/elif/else) et le contrôle du flux d'exécution en Python.
---

# <span class="h1">Contrôle du flux d'exécution</span>

<p class="intro">
     Nous allons ici définir ce qu'est un contrôle de flux et de quoi il en retourne...
</p>

---

## <span class="h2">Introduction</span>

L'activité essentiel d'un programmeur est la résolution de problèmes. Or pour résoudre un probléme informatique, il faut toujours effectuer une série d'actions dans un certain ordre. _La description structuré de ces actions et de l'ordre dans lequel il convient de les effectuer s'appellent un **algorithme**_.


Le "_chemin_" suivie par Python est appelé un **flux d'exécution**, et les constructions qui le modifient sont appelé des **instructions de contrôle de flux**.

Les structures de contrôles sont les groupes d'instructions qui définissent l'ordre dans lequel les actions sont effectuées.En programmation moderne il en existe seulement 3 :

- La séquence.
- La sélection.
- La répétition.

Nous allons aborder dans ce chapitre la **séquence** et la **sélection**.

???+ note "Note"
    Comme d'habitude, si vous n'avez pas ou la flemme de créer un environnement python :

    [Ouvrir avec Basthon](https://basthon.fr/){ target="_blank" rel="noopener" .md-button }

---

## <span class="h2">Séquence d'instructions</span>

En régle générales, les instructions d'un programme s'effectue les unes après les autres, _dans l'ordre dans elles ont été écrite dans le script_.

???+ warning "Attention"
    Une mauvaise disposition des instructions peut créer des erreurs sémantiques dans les programmes informatiques. 

Il faut donc être extrémement attentif à l'ordre des instructions dans vos programmes. Prenons la séquence d'instructions suivantes:

```py
>>> a, b = 5, 2
>>> a = b           # 2
>>> b = a           # 2
>>> print(a, b)
2 2 
```

On obtient un résultat inverse si l'on intervertit la deuxième et troisième lignes.

```py
>>> a, b = 5, 2
>>> b = a           # 5
>>> a = b           # 5
>>> print(a, b)
5 5 
```

Python exécute normalement les instrcutions dans l'ordre, sauf s'il rencontre une ***instruction conditionnelle*** (ex: l'instruction `if`). Une telle instruction va permettre au programmede suivre différent chemin suivant les circonstances.

---

## <span class="h2">Sélection ou exécution conditionnelle</span>

Pour pouvoir écrire des applications utiles, il nous faut pouvoir aiguiller notre programme dans différentes directions en fonction de la requete ou circonstance donnée.

Nous devons donc disposer d'instruction capable de tester une certaine condition, vérifier si elle est vrai ou non et de modifier le comportement du programme en conséquence.

L'instruction conditionnelle la plus commune est l'instruction _if_. Allez dans l'éditeur Python et tapez les deux lignes suivantes:

````python
>>> a = 50
>>> if a > 30:
... 
````

Décryptons ligne par ligne :

1. on affecte la valeur `50` à la variable `a`.
2. instruction conditionnelle `if` (terminé par `:`).
3. le **prompt principal** (`>>>`)est maintenant remplacé par un **prompt secondaire** (`...`).

Nous allons maintenant rajouter une ligne dans notre condition :

```python
>>> a = 50
>>> if a > 30:
...     print("a depasse les trentes")
```

Appuyer sur `<Entré>`. Le programme s'execute et vous obtenez :

```python
a depasse les trentes
```

> Si vous recommencez en changeant la valeur de la variable `a` à `20`, le code suivant n'affichera plus rien.

L'expression placé après le `if` et ce que nous appelons une ***condition***. L'instruction `if` permet de tester la validité de cette condition.

- Si la condition est vrai: l'instruction que nous avons **indentée** après le `:` est exécuté.
- Si la condition est fausse: rien ne se passe.

Rajoutons deux lignes comme ci- dessous :

```python
>>> a = 10
>>> if a > 30:
...     print("a depasse les trentes")
... else:
...     print("a ne depasse pas les trente")
```

Appuyer sur `<Entré>`

```python
a ne depasse pas les trente
```

Nous avons rajouter l'instruction **`else`** ("sinnon" en anglais). Ele permet d'exécuter une condition alternative. On peut faire mieux en utilisant l'instruction **`elif`** (contrqction de "else if") :

```python
>>> a = 0
>>> if a > 0:
...     print("a est positif")
... elif a < 0:
...     print("a est negatif")
... else:
...     print("a est nul")
```

---

## <span class="h2">Opérateur de comparaison</span>

La condition évalué après l'instuction `if` peut contenir des ***opérateurs de comparaison*** :

| Opérateur | Description | Exemple | Résultat |
|-----------|-------------|---------|----------|
| `==` | Égal à | `5 == 5` | `True` |
| `!=` | Différent de | `5 != 3` | `True` |
| `>` | Supérieur à | `5 > 3` | `True` |
| `<` | Inférieur à | `5 < 3` | `False` |
| `>=` | Supérieur ou égal | `5 >= 5` | `True` |
| `<=` | Inférieur ou égal | `5 <= 3` | `False` |


**Exemple** :

```python
>>> a = 7
>>> if a % 2 == 0:
...     print("a est pair")
...     print("calcul du modulo")
... else:
...     print("a est impair")
... 
a est impair
```

???+ info
    L'opérateur `%` est l'opératur ***modulo***: il calcule le reste d'une division entière. Par exemple, fournit le reste de la division de `a` par 2.

L'opérateur de comparaison pour l'égalité de deux valeurs est constitué de deux signes "égale" (`==`) et non d'un seul.

Le signe "égale" utilisé seul est un **opérateur d'affectation**, et non un opérateur de comparaison.

---

## <span class="h2">Instructions composées - Blocs d'instructions</span>

La construction utilisé ci-dessus avec l'instruction `if` et votre premier exemple d'**instruction composée**.

Sous Python, les instructions composées on toujours la même structure :

- Une ligne d'en-tête terminé par un double point, suivi d'une ou plusieurs instructions indentées sous cette ligne d'en-tête.

*Un bloc d'instruction est une suite d'instruction formant un ensemble logique*, qui n'est exécuté que dans certaines conditions définies dans la ligne d'en-tête.

---

## <span class="h2">Instructions imbriquées</span>

Il est parfaitement possible d'imbriquer les unes dans les autres plusieurs instructions composées, de manière à réaliser des structures de décisions complexe :

```python
>>> if embranchement == "vertebre":
...     if classe == "mammifere":
...             if ordre == "carnivore":
...                     if fammille == "felin":
...                             print("c est un chat")
...             print("cest en tout cas un mammifere")
...     elif classe == "oiseaux":
...             print("cest un canari")
... print("La classification des animaux est complexe")
```

Ce fragment de programme n'affiche la phrase `"c est un chat"` que dans le cas ou les 4 premières conditions sont vraies.

- Pour que la phrase `"cest en tout cas un mammifere"` soit affiché, il suffit que les 2 premières conditions soient vraies.

- Pour que la phrase `"cest un canari"` soit affiché, il faut que la variable **`embranchement`** contienne `"vertébré"`, et que la variable **`classe`** contienne `"oiseaux"`.

- La dernnière phrase, elle, est affiché dans tout les cas, car elle fait partie du même bloc d'instruction que la ligne 1.

!!! warning "Attention"
    Avec Python, vous devez utiliser ***les sauts à la ligne et l'indentation***, mais en contrepartie vous n'avez pas à vous préoccuper d'autres symboles délimiteurs de blocs.