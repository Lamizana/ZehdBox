---
title: Exercices - Nombres
description: "Exercices Python sur les nombres : opérations arithmétiques et nombre préféré."
---

# <span class="h1">Exercices — Nombres</span>

<p class="intro">
    Deux exercices pour manipuler les <strong>nombres</strong> en Python : opérations arithmétiques et variables.
</p>

---

???+ note "Lancer les exercices — option hors environnement"
    Pas d'environnement Python local ? Utilisez un **bac à sable** directement dans le navigateur :

    [:fontawesome-brands-python: Ouvrir avec Basthon](https://basthon.fr/){ target="_blank" rel="noopener" .md-button .md-button--primary }

---

## <span class="h2">Exercice 1 : Nombre huit</span>

!!! question "Énoncé"
    Écrire des opérations d'**addition**, de **soustraction**, de **multiplication** et de **division** qui ont pour résultat le chiffre **8**.

    - La sortie ne doit comporter que **4 lignes**, le chiffre `8` figurant sur chaque ligne.

    | Niveau | Notions | Durée estimée |
    |:---:|:---|:---:|
    | 🟢 Facile | opérateurs arithmétiques, `print()` | 5 min |

???- note "💡 Indices"
    - Chaque ligne affichera une opération différente dont le résultat est 8.
    - Exemple : `print(5 + 3)` affiche `8`.

!!! success "Résultat attendu"
    ```python
    8
    8
    8
    8
    ```

???- tip "Solution"
    ```python
    print(7 + 1)
    print(16 / 2)
    print(12 - 4)
    print(45 - 37)
    ```

---

## <span class="h2">Exercice 2 : Nombre préféré</span>

!!! question "Énoncé"
    Utiliser une variable pour stocker votre **nombre préféré**.

    - Avec cette variable, créer un **message** qui indique ce nombre.
    - Afficher le message.

    | Niveau | Notions | Durée estimée |
    |:---:|:---|:---:|
    | 🟢 Facile | variables, f-strings | 5 min |

???- note "💡 Indices"
    - Créez votre nombre dans une variable, par exemple `favorite_number`.
    - Utilisez une **f-string** pour insérer la variable dans un message : `f"Votre nombre est: {favorite_number}."`

!!! success "Résultat attendu"
    Un message qui contient votre nombre préféré :
    ```python
    Votre nombre est: 12.
    ```

???- tip "Solution"
    === "Méthode 1 — f-string"
        ```python
        favorite_number = 12
        message = f"Votre nombre est: {favorite_number}."

        print(message)
        ```

    === "Méthode 2 — concaténation"
        ```python
        favorite_number = 12
        message = "Votre nombre est: " + str(favorite_number) + "."

        print(message)
        ```

---

!!! note "Source"
    Exercices inspirés des exos 2-8 et 2-9 de *Petite leçon de python*.
