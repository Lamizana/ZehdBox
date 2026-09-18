---
title: Exercices - Types de données
description: "Exercices Python sur les types de données : int, float, str, bool et leurs conversions."
tags:
  - exercice
  - python
  - types
---

# <span class="h1">Exercices - Types de données</span>

<p class="intro">
    Deux exercices pour comprendre les <strong>types de données</strong> et les **conversions de types** en Python.
</p>

---

## <span class="h2">Au programme</span>

- [**Exercices précédents : Opérateurs**](exercice-operateurs.md) — les opérations et comparaisons.

???+ note "Lancer les exercices - option hors environnement"
    Pas d'environnement Python local ? Utilisez un **bac à sable** directement dans le navigateur :

    [:fontawesome-brands-python: Ouvrir avec Basthon](https://basthon.fr/){ target="_blank" rel="noopener" .md-button .md-button--primary }

---

## <span class="h2">Exercice 1 : Types de Données</span>

!!! question "Énoncé"
    Créez une variable de chaque type : entier, flottant, chaîne, booléen.

    | Niveau | Notions | Durée estimée |
    |:---:|:---|:---:|
    | 🟢 Facile | `int`, `float`, `str`, `bool` | 5 min |

???- note "💡 Indices"
    - Un entier n'a pas de décimales : `42`, un flottant en a : `3.14`.
    - Une chaîne est entre guillemets : `"texte"`, un booléen vaut `True` ou `False`.
    - `type()` affiche la classe du type.

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

## <span class="h2">Exercice 2 : Conversion de Types</span>

!!! question "Énoncé"
    Convertissez la chaîne "123" en entier, puis le nombre 45 en chaîne.

    | Niveau | Notions | Durée estimée |
    |:---:|:---|:---:|
    | 🟢 Facile | `int()`, `str()`, `type()` | 5 min |

???- note "💡 Indices"
    - `int("123")` transforme la chaîne en entier.
    - `str(45)` transforme l'entier en chaîne de caractères.

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

!!! note "Source"
    Exercices inspirés du parcours *Les bases* de ZehdBox.

<div class="grid cards" markdown>

- :octicons-arrow-right-24: **[Continuer vers les nombres →](exercice-nombres.md)**

    Appliquez ces types dans des exercices sur les nombres.

</div>