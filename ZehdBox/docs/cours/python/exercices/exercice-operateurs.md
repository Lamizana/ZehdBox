---
title: Exercices - Opérateurs
description: "Exercices Python sur les opérateurs : arithmétiques, comparaison, logiques et opérateurs combinés."
tags:
  - exercice
  - python
  - operateurs
---

# <span class="h1">Exercices - Opérateurs</span>

<p class="intro">
    Cinq exercices pour maîtriser les <strong>opérateurs</strong> : arithmétiques, de comparaison, logiques et combinés.
</p>

---

## <span class="h2">Au programme</span>

- [**Exercices précédents : Types de données**](exercice-types.md) — créez et convertissez les types.

???+ note "Lancer les exercices - option hors environnement"
    Pas d'environnement Python local ? Utilisez un **bac à sable** directement dans le navigateur :

    [:fontawesome-brands-python: Ouvrir avec Basthon](https://basthon.fr/){ target="_blank" rel="noopener" .md-button .md-button--primary }

---

## <span class="h2">Exercice 1 : Opérations Arithmétiques</span>

!!! question "Énoncé"
    Calculez :
    - L'addition de 10 et 5
    - La multiplication de 7 par 6
    - Le reste de la division de 17 par 5

    | Niveau | Notions | Durée estimée |
    |:---:|:---|:---:|
    | 🟢 Facile | `+`, `*`, `%` | 5 min |

???- note "💡 Indices"
    - L'opérateur `%` donne le **reste** d'une division entière.
    - On peut écrire directement `print(10 + 5)` sans passer par une variable.

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

## <span class="h2">Exercice 2 : Comparaison</span>

!!! question "Énoncé"
    Vérifiez si 10 est supérieur à 5, et si "Bonjour" est égal à "bonjour".

    | Niveau | Notions | Durée estimée |
    |:---:|:---|:---:|
    | 🟢 Facile | `>`, `==` | 5 min |

???- note "💡 Indices"
    - `>` compare deux valeurs numériques.
    - `==` compare l'**égalité** — attention à la casse pour les chaînes de caractères.

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

## <span class="h2">Exercice 3 : Opérateurs Logiques</span>

!!! question "Énoncé"
    Vérifiez si 10 est supérieur à 5 ET inférieur à 20.

    | Niveau | Notions | Durée estimée |
    |:---:|:---|:---:|
    | 🟢 Facile | `and`, comparaisons | 5 min |

???- note "💡 Indices"
    - `and` renvoie `True` uniquement si **toutes** les conditions sont vraies.
    - Vous pouvez garder le résultat dans une variable avant de l'afficher.

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

## <span class="h2">Exercice 4 : Opérateur +=</span>

!!! question "Énoncé"
    Utilisez `+=` pour incrémenter une variable de 5.

    | Niveau | Notions | Durée estimée |
    |:---:|:---|:---:|
    | 🟢 Facile | opérateur combiné `+=` | 5 min |

???- note "💡 Indices"
    - `x += 5` équivaut à `x = x + 5`.
    - Commencez par une valeur initiale de 10.

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

## <span class="h2">Exercice 5 : Ordre des Opérations</span>

!!! question "Énoncé"
    Calculez : 2 + 3 * 4, puis (2 + 3) * 4

    | Niveau | Notions | Durée estimée |
    |:---:|:---|:---:|
    | 🟡 Moyen | priorité des opérateurs, parenthèses | 10 min |

???- note "💡 Indices"
    - La multiplication est **prioritaire** sur l'addition : `2 + 3 * 4` vaut d'abord `3 * 4`.
    - Les parenthèses forcent le calcul dans l'ordre écrit : `(2 + 3) * 4`.

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

!!! note "Source"
    Exercices inspirés du parcours *Les bases* de ZehdBox.

<div class="grid cards" markdown>

- :octicons-arrow-right-24: **[Continuer vers les chaînes de caractères →](exercice-string.md)**

    Découvrez les méthodes `upper()`, `strip()` et les f-strings.

</div>