---
title: Exercices - Chaînes de caractères
description: "Exercices pratiques sur les chaînes de caractères (strings) en Python."
---

# <span class="h1">Exercices sur les chaînes de caractères</span>

<p class="intro">
    Découverte des <strong>chaînes de caractères</strong> en Python.
</p>

---

## <span class="h2">Présentation</span>

<div class="presentation">
    <p>
        Cette page contient quelques exercices simples pour la compréhension et l'utilisation des chaînes de caractères.
    </p>
    <p>
        Les chaînes de caractères, plus communément appelées <strong>strings</strong>, sont une part importante dans la compréhension de la programmation.
    </p>
    <p>
        Pour chaque exercice, je fournis le sujet et la réponse.
        Cela va sans dire qu'il est préférable <strong>d'essayer par soi-même avant de regarder la réponse ou d'aller sur ChatGPT</strong>.
    </p>
</div>

---

???+ note "Lancer les exercices — option hors environnement"
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

!!! success "Résultat attendu"
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

!!! success "Résultat attendu"
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

!!! success "Résultat attendu"
    ```python
    Mère Teresa a dit " La vie est une opportunité, profitez-en.
    La vie est belle, admirez-la.
    La vie est un rêve, réalisez-la.
    La vie est un devoir, complétez-la.
    La vie est un jeu, jouez-la."
    ```

???- tip "Solution"
    === "Méthode 1 — f-string simple"
        ```python
        name = "Mère Teresa"
        citation = "La vie est une opportunité, profitez-en."

        print(f'{name} a dit "{citation}"')
        ```

    === "Méthode 2 — citation multi-lignes"
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

!!! success "Résultat attendu"
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

!!! note "Source"
    Exercices inspirés du manuel *Petite leçon de python*.

<div class="grid cards" markdown>

- :octicons-arrow-right-24: **[Continue vers le sommaire](../index.md)**

    Exercices terminés.
    
    Explore maintenant les fonctions et les bibliothèques (Pandas, NumPy, Scikit-learn).

</div>
