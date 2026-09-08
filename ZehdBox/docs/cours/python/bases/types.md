---
title: Types de données
description: "Les différents types de données en Python : entiers, flottants, chaînes, booléens, listes."
---

# <span class="h1">Types de Données</span>

---

## <span class="h2">Introduction</span>

Python gère différents types de données. Connaître le type est essentiel pour manipulate correctement les données.

---

## <span class="h2">Les Types Fondamentaux</span>

### Entier (int)

 nombres positifs ou négatifs sans décimale

```python
age = 25
prix = -10
population = 7_900_000_000
```

### Flottant (float)

Nombres avec une décimale

```python
taille = 1.75
temperature = -5.5
pi = 3.14159
```

### Chaîne de caractères (str)

Du texte, entre guillemets

```python
nom = "Alex"
message = 'Bonjour'
```

### Booléen (bool)

Vrai ou Faux

```python
est_majeur = True
a_licence = False
```

---

## <span class="h2">Connaître le Type</span>

Utilisez `type()` pour connaître le type d'une variable :

```python
x = 42
print(type(x))  # <class 'int'>

y = 3.14
print(type(y))  # <class 'float'>

z = "Bonjour"
print(type(z))  # <class 'str'>

b = True
print(type(b))  # <class 'bool'>
```

---

## <span class="h2">Convertir les Types</span>

### Vers entier

```python
int(3.7)    # 3
int("42")   # 42
```

### Vers flottant

```python
float(5)    # 5.0
float("3.14")  # 3.14
```

### Vers chaîne

```python
str(42)     # "42"
str(3.14)   # "3.14"
```

### Vers booléen

```python
bool(1)     # True
bool(0)     # False
bool("")    # False
bool("abc") # True
```

!!! warning "Attention"
    `int("3.5")` provoque une erreur ! Utilisez d'abord `float()`.

---

## <span class="h2">Les Collections</span>

### Liste (list)

Tableau ordonnée et modifiable

```python
jours = ["lundi", "mars", "mercredi"]
nombres = [1, 2, 3, 4, 5]
melange = [1, "texte", True, 3.14]
```

### Tuple

Tableau ordonnée et immuable :

- Une fois créé, on ne peut plus modifier, ajouter ou supprimer d'éléments.

```python
coordonnees = (10, 20)
couleurs = ("rouge", "vert", "bleu")
```

### Ensemble (set)

Collection sans doublon, non ordonnée

```python
nombres = {1, 2, 3, 3, 4}  # {1, 2, 3, 4}
```

### Dictionnaire (dict)

Paires clé-valeur

```python
personne = {
    "nom": "Dupont",
    "age": 30,
    "ville": "Paris"
}
```

---

## <span class="h2">Résumé des Types</span>

| Type | Description | Exemple |
|------|-------------|---------|
| `int` | Entier | `42` |
| `float` | Flottant | `3.14` |
| `str` | Chaîne | `"texte"` |
| `bool` | Booléen | `True` |
| `list` | Liste | `[1, 2, 3]` |
| `tuple` | Tuple | `(1, 2, 3)` |
| `set` | Ensemble | `{1, 2, 3}` |
| `dict` | Dictionnaire | `{"a": 1}` |

---

## <span class="h2">Vérifier le Type</span>

Utilisez `isinstance()` :

```python
x = 42

isinstance(x, int)     # True
isinstance(x, float)    # False
isinstance(x, str)      # False

y = "Bonjour"
isinstance(y, str)     # True
```

---

## <span class="h2">Exemples Pratiques</string>

### Exemple 1: Calcul de moyenne

```python
notes = [15, 18, 12, 16]
moyenne = sum(notes) / len(notes)
print(type(moyenne))  # <class 'float'>
```

### Exemple 2: Conversion temperature

```python
celsius = 25
fahrenheit = celsius * 9/5 + 32
print(f"{celsius}°C = {fahrenheit}°F")
```

### Exemple 3: Validation

```python
age = 18
est_adulte = age >= 18
print(type(est_adulte))  # <class 'bool'>
```
