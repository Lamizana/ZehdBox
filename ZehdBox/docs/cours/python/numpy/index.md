---
title: NumPy
description: Introduction à NumPy — tableaux multidimensionnels, opérations vectorielles et calcul numérique en Python.
---

# <span class="h1">NumPy</span>

---

## <span class="h2">Présentation</span>

**NumPy** (Numerical Python) est la bibliothèque fondamentale pour le calcul numérique en Python. Elle fournit des tableaux multidimensionnels et des fonctions mathématiques rapides.

!!! info "Pourquoi NumPy ?"
    - **Performance** : Les opérations NumPy sont écrites en C et sont beaucoup plus rapides que les boucles Python natives
    - **Vectorisation** : Travailler sur des tableaux entiers sans écrire de boucles
    - **Broadcasting** : Opérations entre tableaux de formes différentes

---

## <span class="h2">Installation</span>

```bash
pip install numpy
```

???- warning "Version Python requise"
    NumPy nécessite Python 3.8 ou supérieur

---

## <span class="h2">Tableaux (Arrays)</span>

### Création de tableaux

```python
import numpy as np

# Tableau 1D
a = np.array([1, 2, 3, 4, 5])

# Tableau 2D
b = np.array([[1, 2, 3], [4, 5, 6]])

# Tableau de zéros
zeros = np.zeros((3, 3))

# Tableau de uns
ones = np.ones((2, 4))

# Suite arithmétique
range_arr = np.arange(0, 10, 2)  # [0, 2, 4, 6, 8]

# Tableau avec intervalle linéaire
linear = np.linspace(0, 10, 5)  # [0, 2.5, 5, 7.5, 10]

# Matrice identité
identity = np.eye(3)
```

### Type de données

```python
# Spécifier le type
arr = np.array([1, 2, 3], dtype=np.float64)
arr = np.array([1, 2, 3], dtype=np.int32)

# Convertir le type
arr_float = np.array([1.5, 2.7, 3.3])
arr_int = arr_float.astype(np.int32)  # [1, 2, 3]
```

???- info "Types disponibles"
    - `np.int8`, `np.int16`, `np.int32`, `np.int64`
    - `np.float16`, `np.float32`, `np.float64`
    - `np.bool_` (True/False)
    - `np.complex64`, `np.complex128`

---

## <span class="h2">Opérations Mathématiques</span>

### Opérations de base

```python
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# Addition
print(a + b)  # [5, 7, 9]

# Soustraction
print(a - b)  # [-3, -3, -3]

# Multiplication élément par élément
print(a * b)  # [4, 10, 18]

# Division
print(a / b)  # [0.25, 0.4, 0.5]

# Puissance
print(a ** 2)  # [1, 4, 9]
```

### Fonctions mathématiques

```python
arr = np.array([1, 2, 3])

# Trigonométrie
np.sin(arr)    # sinus
np.cos(arr)    # cosinus
np.tan(arr)    # tangente
np.arcsin(arr) # arcsinus

# Logarithme et exponentielle
np.log(arr)    # logarithme naturel
np.log10(arr)  # logarithme base 10
np.exp(arr)    # exponentielle

# Racine carrée
np.sqrt(arr)   # [1, 1.414, 1.732]

# Valeur absolue
np.abs(arr)
```

### Algèbre linéaire

```python
# Produit scalaire
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
print(np.dot(a, b))  # 32

# Produit matriciel
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
print(np.matmul(A, B))

# Inverse d'une matrice
inv = np.linalg.inv(A)

# Déterminant
det = np.linalg.det(A)

# Valeurs propres
eigenvalues, eigenvectors = np.linalg.eig(A)
```

!!! danger "Erreur commune"
    Assurez-vous que les dimensions sont compatibles pour le produit matriciel :
    - `(m, n) @ (n, p) = (m, p)`
    - `(3,) @ (3,) = scalaire` (pas vecteur!)

---

## <span class="h2">Broadcasting</span>

Le **broadcasting** permet d'effectuer des opérations sur des tableaux de formes différentes.

```python
# Addition avec un scalaire
arr = np.array([1, 2, 3])
print(arr + 10)  # [11, 12, 13]

# Addition avec un vecteur colonne
a = np.array([[1], [2], [3]])  # forme (3, 1)
b = np.array([10, 20, 30])      # forme (3,)
print(a + b)  # [[11, 21, 31], [12, 22, 32], [13, 23, 33]]
```

!!! info "Règles du broadcasting"
    1. Les dimensions sont comparées de droite à gauche
    2. Si les dimensions sont différentes, la plus petite est étirée à 1
    3. Si les dimensions sont différentes et aucune n'est 1, erreur

---

## <span class="h2">Indexation et Slicing</span>

### Indexation de base

```python
arr = np.array([0, 1, 2, 3, 4, 5])

# Accéder à un élément
arr[0]  # 0
arr[-1]  # 5 (dernier élément)
```

### Slicing

```python
arr = np.array([0, 1, 2, 3, 4, 5])

arr[1:4]    # [1, 2, 3]
arr[:3]     # [0, 1, 2]
arr[3:]     # [3, 4, 5]
arr[::2]    # [0, 2, 4] (pas de 2)
arr[::-1]   # [5, 4, 3, 2, 1, 0] (inversion)
```

### Tableaux 2D

```python
matrix = np.array([[1, 2, 3], 
                   [4, 5, 6], 
                   [7, 8, 9]])

# Accéder à un élément
matrix[0, 0]   # 1 (ligne 0, colonne 0)
matrix[1, 2]   # 6

# Ligne complète
matrix[1, :]   # [4, 5, 6]

# Colonne complète
matrix[:, 2]   # [3, 6, 9]

# Sous-matrice
matrix[0:2, 1:3]  # [[2, 3], [5, 6]]
```

### Indexation booléenne

```python
arr = np.array([1, 2, 3, 4, 5])

# Masque booléen
mask = arr > 2
print(mask)  # [False, False, True, True, True]

print(arr[mask])  # [3, 4, 5]

# Plus court
print(arr[arr > 2])  # [3, 4, 5]
print(arr[arr % 2 == 0])  # [2, 4] (nombres pairs)
```

!!! warning "Attention"
    L'indexation booléenne crée une copie, pas une vue du tableau original

---

## <span class="h2">Statistiques</span>

```python
arr = np.array([1, 2, 3, 4, 5])

# Mesures de tendance centrale
print(np.mean(arr))    # Moyenne: 3.0
print(np.median(arr))  # Médiane: 3.0

# Mesures de dispersion
print(np.std(arr))     # Écart-type: 1.41
print(np.var(arr))     # Variance: 2.0

# Autres
print(np.sum(arr))     # Somme: 15
print(np.min(arr))     # Min: 1
print(np.max(arr))     # Max: 5
print(np.prod(arr))    # Produit: 120

# Percentiles
print(np.percentile(arr, 25))  # 2.0
print(np.percentile(arr, 75))  # 4.0
```

---

## <span class="h2">Génération de nombres aléatoires</span>

```python
# Graines (pour la reproductibilité)
np.random.seed(42)

# Entiers aléatoires
np.random.randint(0, 10)      # Un entier entre 0 et 10
np.random.randint(0, 10, 5)  # Tableau de 5 entiers

# Floats entre 0 et 1
np.random.rand(3, 3)  # Matrice 3x3

# Floats avec distribution normale
np.random.randn(5)  # 5 valeurs avec µ=0, σ=1

# Choix aléatoire
choices = np.array(['a', 'b', 'c'])
np.random.choice(choices, size=2)  # 2 choix aléatoires

# Mélanger un tableau
arr = np.array([1, 2, 3, 4, 5])
np.random.shuffle(arr)  # Modifie inplace
```

---

## <span class="h2">Manipulation de tableaux</span>

```python
# Transposer
arr = np.array([[1, 2], [3, 4]])
arr.T

# Aplatir
arr.flatten()

# Reshaper
arr = np.arange(12)  # [0, 1, ..., 11]
arr.reshape(3, 4)   # matrice 3x4
arr.reshape(2, -1)  # -1 calcule automatiquement

# Concaténation
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
np.concatenate([a, b])  # [1, 2, 3, 4, 5, 6]

# Splitter
arr = np.array([1, 2, 3, 4, 5, 6])
np.split(arr, 3)  # [[1, 2], [3, 4], [5, 6]]
```

!!! info "Différence flatten vs ravel"
    - `flatten()` retourne une **copie**
    - `ravel()` retourne une **vue** (plus performant)

---

## <span class="h2">Erreurs Courantes</span>

!!! danger "Ne confondez pas!"
    ```python
    a = np.array([1, 2, 3])
    b = np.array([4, 5, 6])

    # Multiplication élément par élément (OK)
    a * b  # [4, 10, 18]

    # Produit matriciel (ERREUR si mal utilisé)
    a @ b  # 32 (scalaire)
    a.dot(b)  # 32

    # Pour des vecteurs 1D, np.dot retourne un scalaire!
    ```

!!! danger "Copie vs Vue"
    ```python
    arr = np.array([1, 2, 3, 4, 5])

    # SLICING crée une VUE (pas une copie!)
    subset = arr[0:3]
    subset[0] = 100
    print(arr)  # [100, 2, 3, 4, 5] -- Original modifié!

    # Pour créer une copie :
    subset = arr[0:3].copy()
    ```

!!! warning "Performance"
    - Utilisez `np.where()` au lieu de boucles `if`
    - Évitez d'utiliser des listes Python dans les opérations NumPy
    - Préférez les opérations vectorisées aux boucles `for`

---

## <span class="h2">Exercice Interactif</span>

Essayer ***NumPy*** directement:

[:fontawesome-brands-python: Ouvrir avec Basthon](https://basthon.fr/){ target="_blank" rel="noopener" .md-button }
