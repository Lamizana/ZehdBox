---
title: Exercices - Listes et dictionnaires
description: "Exercices Python sur les structures de données : listes et dictionnaires."
tags:
  - exercice
  - python
  - structures
---

# <span class="h1">Exercices - Listes et dictionnaires</span>

<p class="intro">
    Deux exercices pour manipuler les <strong>listes</strong> et les <strong>dictionnaires</strong>, deux structures de données centrales.
</p>

---

## <span class="h2">Au programme</span>

- [**Exercices précédents : Nombres**](exercice-nombres.md) — les opérations et f-strings.

???+ note "Lancer les exercices - option hors environnement"
    Pas d'environnement Python local ? Utilisez un **bac à sable** directement dans le navigateur :

    [:fontawesome-brands-python: Ouvrir avec Basthon](https://basthon.fr/){ target="_blank" rel="noopener" .md-button .md-button--primary }

---

## <span class="h2">Exercice 1 : Listes</span>

!!! question "Énoncé"
    Créez une liste de vos fruits préférés et affichez le deuxième.

    | Niveau | Notions | Durée estimée |
    |:---:|:---|:---:|
    | 🟡 Moyen | listes, indexation | 10 min |

???- note "💡 Indices"
    - Une liste se crée entre crochets : `["pomme", "banane", "orange"]`.
    - L'indexation commence à **0** : le deuxième élément est à l'index `1`.

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

## <span class="h2">Exercice 2 : Dictionnaires</span>

!!! question "Énoncé"
    Créez un dictionnaire avec votre nom et âge, puis affichez l'âge.

    | Niveau | Notions | Durée estimée |
    |:---:|:---|:---:|
    | 🟡 Moyen | dictionnaires, clés | 10 min |

???- note "💡 Indices"
    - Un dictionnaire associe des **clés** (ici `"nom"` et `"age"`) à des valeurs.
    - On accède à une valeur par sa clé : `personne["age"]`.

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

!!! note "Source"
    Exercices inspirés du parcours *Les bases* de ZehdBox.

<div class="grid cards" markdown>

- :octicons-arrow-right-24: **[Fin du parcours → revenir au sommaire](index.md)**

    Bravo, vous avez terminé le parcours d'exercices de base !

</div>