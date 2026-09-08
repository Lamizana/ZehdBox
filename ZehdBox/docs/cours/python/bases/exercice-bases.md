---
title: Exercices - Bases Python
description: "Exercices pratiques pour consolider les bases du langage Python."
---

# <span class="h1">Exercices - Bases Python</span>

---

## <span class="h2">Introduction</span>

Pratiquez les bases de Python avec ces exercices.

---

## <span class="h2">Exercice 1: Créer des Variables</span>

### Énoncé

Créez trois variables : `prenom`, `nom` et `age`, puis affichez-les.

### Résultat attendu

```
Alex
Dupont
25
```

???- tip "Solution"
    ```python
    prenom = "Alex"
    nom = "Dupont"
    age = 25
    
    print(prenom)
    print(nom)
    print(age)
    ```

---

## <span class="h2">Exercice 2: Affectation Multiple</span>

### Énoncé

Créez trois variables `x`, `y`, `z` avec les valeurs 1, 2, 3 en une seule ligne.

### Résultat attendu

```
1 2 3
```

???- tip "Solution"
    ```python
    x, y, z = 1, 2, 3
    print(x, y, z)
    ```

---

## <span class="h2">Exercice 3: Opérations Arithmétiques</span>

### Énoncé

Calculez :
- L'addition de 10 et 5
- La multiplication de 7 par 6
- Le reste de la division de 17 par 5

### Résultat attendu

```
15
42
2
```

???- tip "Solution"
    ```python
    print(10 + 5)      # 15
    print(7 * 6)       # 42
    print(17 % 5)      # 2
    ```

---

## <span class="h2">Exercice 4: Comparaison</span>

### Énoncé

Vérifiez si 10 est supérieur à 5, et si "Bonjour" est égal à "bonjour".

### Résultat attendu

```
True
False
```

???- tip "Solution"
    ```python
    print(10 > 5)                    # True
    print("Bonjour" == "bonjour")    # False
    ```

---

## <span class="h2">Exercice 5: Types de Données</span>

### Énoncé

Créez une variable de chaque type : entier, flottant, chaîne, booléen.

### Résultat attendu

```
<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>
```

???- tip "Solution"
    ```python
    entier = 42
    flottant = 3.14
    chaine = "texte"
    booleen = True
    
    print(type(entier))
    print(type(flottant))
    print(type(chaine))
    print(type(booleen))
    ```

---

## <span class="h2">Exercice 6: Conversion de Types</span>

### Énoncé

Convertissez la chaîne "123" en entier, puis le nombre 45 en chaîne.

### Résultat attendu

```
123
<class 'int'>
45
<class 'str'>
```

???- tip "Solution"
    ```python
    texte = "123"
    nombre = int(texte)
    print(nombre)
    print(type(nombre))
    
    nombre2 = 45
    texte2 = str(nombre2)
    print(texte2)
    print(type(texte2))
    ```

---

## <span class="h2">Exercice 7: Opérateurs Logiques</span>

### Énoncé

Vérifiez si 10 est supérieur à 5 ET inférieur à 20.

### Résultat attendu

```
True
```

???- tip "Solution"
    ```python
    resultat = (10 > 5) and (10 < 20)
    print(resultat)  # True
    ```

---

## <span class="h2">Exercice 8: Chaînes - Majuscules</span>

### Énoncé

Convertissez "bonjour" en majuscules.

### Résultat attendu

```
BONJOUR
```

???- tip "Solution"
    ```python
    texte = "bonjour"
    print(texte.upper())
    ```

---

## <span class="h2">Exercice 9: Chaînes - Recherche</span>

### Énoncé

Trouvez la position de "mon" dans "Bonjour tout le monde".

### Résultat attendu

```
8
```

???- tip "Solution"
    ```python
    texte = "Bonjour tout le monde"
    print(texte.find("mon"))
    ```

---

## <span class="h2">Exercice 10: F-String</span>

### Énoncé

Utilisez une f-string pour afficher "J'ai 25 ans".

### Résultat attendu

```
J'ai 25 ans
```

???- tip "Solution"
    ```python
    age = 25
    print(f"J'ai {age} ans")
    ```

---

## <span class="h2">Exercice 11: Listes</span>

### Énoncé

Créez une liste de vos fruits préférés et affichez le deuxième.

### Résultat attendu

```
banane
```

???- tip "Solution"
    ```python
    fruits = ["pomme", "banane", "orange"]
    print(fruits[1])  # banane
    ```

---

## <span class="h2">Exercice 12: Dictionnaires</span>

### Énoncé

Créez un dictionnaire avec votre nom et âge, puis affichez l'âge.

### Résultat attendu

```
25
```

???- tip "Solution"
    ```python
    personne = {"nom": "Dupont", "age": 25}
    print(personne["age"])
    ```

---

## <span class="h2">Exercice 13: Opérateur +=</span>

### Énoncé

Utilisez `+=` pour incrémenter une variable de 5.

### Résultat attendu

```
15
```

???- tip "Solution"
    ```python
    x = 10
    x += 5
    print(x)  # 15
    ```

---

## <span class="h2">Exercice 14: Tranchage</span>

### Énoncé

Extrayez "py" de "Python".

### Résultat attendu

```
py
```

???- tip "Solution"
    ```python
    texte = "Python"
    print(texte[2:4])  # py
    ```

---

## <span class="h2">Exercice 15: Ordre des Opérations</span>

### Énoncé

Calculez : 2 + 3 * 4, puis (2 + 3) * 4

### Résultat attendu

```
14
20
```

???- tip "Solution"
    ```python
    print(2 + 3 * 4)      # 14
    print((2 + 3) * 4)    # 20
    ```

---

## <span class="h2">Correction</span>

Vous retrouverez toutes les solutions dans les blocs "Solution" ci-dessus.
