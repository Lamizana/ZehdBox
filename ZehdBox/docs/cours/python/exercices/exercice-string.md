---
title: Exercices - Chaînes de caractères
description: "Exercices pratiques sur les chaînes de caractères (strings) en Python : méthodes, f-strings, tranchage."
tags:
  - exercice
  - python
  - chaines
---

# <span class="h1">Exercices sur les chaînes de caractères</span>

<p class="intro">
    Huit exercices pour découvrir les <strong>chaînes de caractères</strong> : méthodes, f-strings, tranchage.
</p>

---

## <span class="h2">Au programme</span>

- [**Exercices précédents : Opérateurs**](exercice-operateurs.md) — les opérations et comparaisons.

???+ note "Lancer les exercices - option hors environnement"
    Pas d'environnement Python local ? Utilisez un **bac à sable** directement dans le navigateur :

    [:fontawesome-brands-python: Ouvrir avec Basthon](https://basthon.fr/){ target="_blank" rel="noopener" .md-button .md-button--primary }

---

## <span class="h2">Exercice 1 : Message personnel</span>

!!! question "Énoncé"
    Utiliser une variable pour représenter le nom d'une personne et l'afficher.

    - Le message doit être :

    ```python
    "Bonjour <name>, voudrais-tu apprendre un peu de python?"
    ```

    | Niveau | Notions | Durée estimée |
    |:---:|:---|:---:|
    | 🟢 Facile | f-strings, variables | 5 min |

???- note "💡 Indices"
    - Créez d'abord la variable `name`.
    - Utilisez une f-string pour insérer la variable dans le message.

!!! success "Résultat attendu (variable)"
    ```python
    Bonjour Alex, voudrais-tu apprendre un peu de python?
    ```

???- tip "Solution"
    ```python
    name = "Alex"
    message = f"Bonjour {name}, voudrais-tu apprendre un peu de python?"

    print(message)
    ```

---

## <span class="h2">Exercice 2 : Casse d'un nom</span>

!!! question "Énoncé"
    Utiliser une variable pour représenter le nom d'une personne.

    Afficher le nom :

    - En majuscules.
    - En minuscules.
    - En capitales initiales.

    | Niveau | Notions | Durée estimée |
    |:---:|:---|:---:|
    | 🟢 Facile | `upper()`, `lower()`, `title()` | 5 min |

???- note "💡 Indices"
    - Chaque méthode s'appelle directement sur la chaîne : `name.upper()`.
    - Les méthodes ne modifient pas la chaîne d'origine : elles **renvoient** une nouvelle chaîne.

!!! success "Résultat attendu (variable)"
    ```python
    Nom en minuscule: alex.
    Nom en majuscule: ALEX.
    Nom en majuscule initiale: Alex.
    ```

???- tip "Solution"
    ```python
    name = "alex"

    print(f"Nom en minuscule: {name.lower()}.")
    print(f"Nom en majuscule: {name.upper()}.")
    print(f"Nom en majuscule initiale: {name.title()}.")
    ```

---

## <span class="h2">Exercice 3 : Célèbre citation</span>

!!! question "Énoncé"
    Trouver une citation d'une personne célèbre.

    - L'afficher ainsi que le nom de l'auteur.
    - La sortie doit ressembler à ça :

    ```python
    Albert Einstein a dit "Qui n'a jamais fait d'erreur n'a jamais rien essayé de nouveau..."
    ```

    | Niveau | Notions | Durée estimée |
    |:---:|:---|:---:|
    | 🟡 Moyen | f-strings, texte multi-lignes (`\n`) | 10 min |

???- note "💡 Indices"
    - Stockez le nom de l'auteur et la citation dans deux variables.
    - Insérez les deux variables dans un f-string.

!!! success "Résultat attendu (variable)"
    ```python
    Mère Teresa a dit " La vie est une opportunité, profitez-en.
    La vie est belle, admirez-la.
    La vie est un rêve, réalisez-la.
    La vie est un devoir, complétez-la.
    La vie est un jeu, jouez-la."
    ```

???- tip "Solution"
    === "Méthode 1 - f-string simple"
        ```python
        name = "Mère Teresa"
        citation = "La vie est une opportunité, profitez-en."

        print(f'{name} a dit "{citation}"')
        ```

    === "Méthode 2 - citation multi-lignes"
        ```python
        name = "Mère Teresa"
        citation = " La vie est une opportunité, profitez-en. \nLa vie est belle, admirez-la. \nLa vie est un rêve, réalisez-la. \nLa vie est un devoir, complétez-la. \nLa vie est un jeu, jouez-la."

        print(f'{name} a dit "{citation}"')
        ```

---

## <span class="h2">Exercice 4 : Supprimer des espaces dans un nom</span>

!!! question "Énoncé"
    Utiliser une variable pour représenter le nom d'une personne avec des espaces au début et à la fin du nom.

    - Utiliser chaque combinaison de caractères : **`\t`** et **`\n`** au moins une fois.
    - Afficher **le nom une fois**, de sorte que les espaces avant et après soient visibles.
    - Afficher le nom en utilisant chacune des **3 fonctions de suppression** :
        - `lstrip()` : supprimer les espaces à gauche.
        - `rstrip()` : supprimer les espaces à droite.
        - `strip()` : supprimer les espaces à gauche et à droite.

    | Niveau | Notions | Durée estimée |
    |:---:|:---|:---:|
    | 🟡 Moyen | `strip()`, caractères d'échappement | 10 min |

???- note "💡 Indices"
    - `\t` insère une tabulation, `\n` un saut de ligne.
    - Observez bien la différence entre la version initiale et les versions "nettoyées".

!!! success "Résultat attendu (variable)"
    ```python
    Nom initial (avec espaces):
     Alex
     .
    Nom sans espace à gauche: Alex
     .
    Nom sans espace à droite:
     Alex .
    Nom sans espace: Alex .
    ```

???- tip "Solution"
    ```python
    name = "  \t \n Alex  \n\t"

    print(f"Nom initial (avec espaces): {name} .")
    print(f"Nom sans espace à gauche: {name.lstrip()} .")
    print(f"Nom sans espace à droite: {name.rstrip()} .")
    print(f"Nom sans espace: {name.strip()} .")
    ```

---

## <span class="h2">Exercice 5 : Chaînes - Majuscules</span>

!!! question "Énoncé"
    Convertissez "bonjour" en majuscules.

    | Niveau | Notions | Durée estimée |
    |:---:|:---|:---:|
    | 🟢 Facile | `upper()` | 5 min |

???- note "💡 Indices"
    - La méthode `upper()` sur une chaîne renvoie sa version en majuscules.

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

## <span class="h2">Exercice 6 : Chaînes - Recherche</span>

!!! question "Énoncé"
    Trouvez la position de "mon" dans "Bonjour tout le monde".

    | Niveau | Notions | Durée estimée |
    |:---:|:---|:---:|
    | 🟢 Facile | `find()` | 5 min |

???- note "💡 Indices"
    - La méthode `find()` renvoie l'index (à partir de 0) de la première occurrence trouvée.

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

## <span class="h2">Exercice 7 : F-String</span>

!!! question "Énoncé"
    Utilisez une f-string pour afficher "J'ai 25 ans".

    | Niveau | Notions | Durée estimée |
    |:---:|:---|:---:|
    | 🟢 Facile | f-strings | 5 min |

???- note "💡 Indices"
    - Placez la valeur dans une variable, puis insérez-la entre accolades `{}` dans une f-string.

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

## <span class="h2">Exercice 8 : Tranchage</span>

!!! question "Énoncé"
    Extrayez "py" de "Python".

    | Niveau | Notions | Durée estimée |
    |:---:|:---|:---:|
    | 🟡 Moyen | tranchage `[a:b]` | 5 min |

???- note "💡 Indices"
    - Le tranchage `texte[a:b]` extrait les caractères de l'index `a` inclus à l'index `b` exclu.
    - "Python" vaut : `P`(0) `y`(1) `t`(2) `h`(3) `o`(4) `n`(5) → `"py"` correspond aux index 2 et 3.

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

!!! note "Source"
    Exercices inspirés du manuel *Petite leçon de python* et du parcours *Les bases* de ZehdBox.

<div class="grid cards" markdown>

- :octicons-arrow-right-24: **[Continuer vers les nombres →](exercice-nombres.md)**

    Terminez les exercices sur les nombres, puis passez aux listes et dictionnaires.

</div>