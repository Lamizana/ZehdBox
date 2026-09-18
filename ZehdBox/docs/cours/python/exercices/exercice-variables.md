---
title: Exercices - Variables
description: "Exercices Python sur les variables : création, affectation simple et multiple."
tags:
  - exercice
  - python
  - variables
---

# <span class="h1">Exercices - Variables</span>

<p class="intro">
    Deux exercices pour manipuler les <strong>variables</strong> : créer, affecter et afficher des valeurs.
</p>

---

## <span class="h2">Au programme</span>

- [**10 minutes pour manipuler les variables**](exercice-variables.md) dans ce parcours progressif.

???+ note "Lancer les exercices - option hors environnement"
    Pas d'environnement Python local ? Utilisez un **bac à sable** directement dans le navigateur :

    [:fontawesome-brands-python: Ouvrir avec Basthon](https://basthon.fr/){ target="_blank" rel="noopener" .md-button .md-button--primary }

---

## <span class="h2">Exercice 1 : Créer des Variables</span>

!!! question "Énoncé"
    Créez trois variables : `prenom`, `nom` et `age`, puis affichez-les.

    | Niveau | Notions | Durée estimée |
    |:---:|:---|:---:|
    | 🟢 Facile | variables, `print()` | 5 min |

???- note "💡 Indices"
    - Choisissez des valeurs qui vous représentent : un prénom, un nom, un âge.
    - Pensez à utiliser des chaînes (`"..."`) pour `prenom` et `nom`, et un entier pour `age`.
    - Affichez chaque variable avec un `print(variable)` séparé.

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

    | Niveau | Notions | Durée estimée |
    |:---:|:---|:---:|
    | 🟢 Facile | affectation multiple, `print()` | 5 min |

???- note "💡 Indices"
    - L'affectation multiple sépare les **noms** par des virgules d'un côté, et les **valeurs** par des virgules de l'autre.
    - Il n'y a qu'**une seule ligne** d'affectation, puis une ligne d'affichage.

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

!!! note "Source"
    Exercices inspirés du parcours *Les bases* de ZehdBox.

<div class="grid cards" markdown>

- :octicons-arrow-right-24: **[Continuer vers les opérateurs →](exercice-operateurs.md)**

    Enchaînez avec les opérateurs arithmétiques, de comparaison et logiques.

</div>