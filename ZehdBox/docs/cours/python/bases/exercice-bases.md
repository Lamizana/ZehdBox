---
title: Exercices - Bases Python
description: "Exercices pratiques pour consolider les bases du langage Python."
---

# <span class="h1">Exercices — Bases Python</span>

<p class="intro">
    Pratiquez les bases de Python avec ces 15 exercices de révision.
</p>

---

## <span class="h2">Introduction</span>

Cette page regroupe les **notions essentielles** du parcours *Les bases* :

!!! abstract "Notions couvertes"
    | Notion | Exercices |
    |:---|:---:|
    | Variables et affectations | 1, 2 |
    | Opérateurs arithmétiques | 3, 15 |
    | Comparaisons et logique | 4, 7 |
    | Types et conversions | 5, 6 |
    | Chaînes de caractères | 8, 9, 10, 14 |
    | Listes et dictionnaires | 11, 12 |
    | Opérateurs combinés | 13 |

!!! tip "Conseil"
    Essayez **par vous-même** avant de déplier la solution. L'erreur fait partie de l'apprentissage !

???+ note "Lancer les exercices — option hors environnement"
    Pas d'environnement Python local ? Utilisez un **bac à sable** directement dans le navigateur :

    [:fontawesome-brands-python: Ouvrir avec Basthon](https://basthon.fr/){ target="_blank" rel="noopener" .md-button .md-button--primary }

---

## <span class="h2">Exercice 1 : Créer des Variables</span>

!!! question "Énoncé"
    Créez trois variables : `prenom`, `nom` et `age`, puis affichez-les.

!!! success "Résultat attendu"
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

## <span class="h2">Exercice 2 : Affectation Multiple</span>

!!! question "Énoncé"
    Créez trois variables `x`, `y`, `z` avec les valeurs 1, 2, 3 en une seule ligne.

!!! success "Résultat attendu"
    ```
    1 2 3
    ```

???- tip "Solution"
    ```python
    x, y, z = 1, 2, 3
    print(x, y, z)
    ```

---

## <span class="h2">Exercice 3 : Opérations Arithmétiques</span>

!!! question "Énoncé"
    Calculez :
    - L'addition de 10 et 5
    - La multiplication de 7 par 6
    - Le reste de la division de 17 par 5

!!! success "Résultat attendu"
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

## <span class="h2">Exercice 4 : Comparaison</span>

!!! question "Énoncé"
    Vérifiez si 10 est supérieur à 5, et si "Bonjour" est égal à "bonjour".

!!! success "Résultat attendu"
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

## <span class="h2">Exercice 5 : Types de Données</span>

!!! question "Énoncé"
    Créez une variable de chaque type : entier, flottant, chaîne, booléen.

!!! success "Résultat attendu"
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

## <span class="h2">Exercice 6 : Conversion de Types</span>

!!! question "Énoncé"
    Convertissez la chaîne "123" en entier, puis le nombre 45 en chaîne.

!!! success "Résultat attendu"
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

## <span class="h2">Exercice 7 : Opérateurs Logiques</span>

!!! question "Énoncé"
    Vérifiez si 10 est supérieur à 5 ET inférieur à 20.

!!! success "Résultat attendu"
    ```
    True
    ```

???- tip "Solution"
    ```python
    resultat = (10 > 5) and (10 < 20)
    print(resultat)  # True
    ```

---

## <span class="h2">Exercice 8 : Chaînes — Majuscules</span>

!!! question "Énoncé"
    Convertissez "bonjour" en majuscules.

!!! success "Résultat attendu"
    ```
    BONJOUR
    ```

???- tip "Solution"
    ```python
    texte = "bonjour"
    print(texte.upper())
    ```

---

## <span class="h2">Exercice 9 : Chaînes — Recherche</span>

!!! question "Énoncé"
    Trouvez la position de "mon" dans "Bonjour tout le monde".

!!! success "Résultat attendu"
    ```
    8
    ```

???- tip "Solution"
    ```python
    texte = "Bonjour tout le monde"
    print(texte.find("mon"))
    ```

---

## <span class="h2">Exercice 10 : F-String</span>

!!! question "Énoncé"
    Utilisez une f-string pour afficher "J'ai 25 ans".

!!! success "Résultat attendu"
    ```
    J'ai 25 ans
    ```

???- tip "Solution"
    ```python
    age = 25
    print(f"J'ai {age} ans")
    ```

---

## <span class="h2">Exercice 11 : Listes</span>

!!! question "Énoncé"
    Créez une liste de vos fruits préférés et affichez le deuxième.

!!! success "Résultat attendu"
    ```
    banane
    ```

???- tip "Solution"
    ```python
    fruits = ["pomme", "banane", "orange"]
    print(fruits[1])  # banane
    ```

---

## <span class="h2">Exercice 12 : Dictionnaires</span>

!!! question "Énoncé"
    Créez un dictionnaire avec votre nom et âge, puis affichez l'âge.

!!! success "Résultat attendu"
    ```
    25
    ```

???- tip "Solution"
    ```python
    personne = {"nom": "Dupont", "age": 25}
    print(personne["age"])
    ```

---

## <span class="h2">Exercice 13 : Opérateur +=</span>

!!! question "Énoncé"
    Utilisez `+=` pour incrémenter une variable de 5.

!!! success "Résultat attendu"
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

## <span class="h2">Exercice 14 : Tranchage</span>

!!! question "Énoncé"
    Extrayez "py" de "Python".

!!! success "Résultat attendu"
    ```
    py
    ```

???- tip "Solution"
    ```python
    texte = "Python"
    print(texte[2:4])  # py
    ```

---

## <span class="h2">Exercice 15 : Ordre des Opérations</span>

!!! question "Énoncé"
    Calculez : 2 + 3 * 4, puis (2 + 3) * 4

!!! success "Résultat attendu"
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

!!! note "Correction"
    Toutes les solutions se trouvent dans les blocs **"Solution"** dépliables de chaque exercice.

<div class="grid cards" markdown>

- :octicons-arrow-right-24: **[Passe aux exercices →](../exercices/index.md)**

    🎉 Tu as terminé les bases de Python. Deux ateliers pratiques t'attendent : nombres et chaînes de caractères.

</div>
