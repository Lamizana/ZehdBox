---
title: Exercices - Chaînes de caractères
description: "Exercices pratiques sur les chaînes de caractères (strings) en Python."
---

# <span class="h1">Exercices sur les String</span>

<p class="intro">
    Découverte des <strong>chaines de caractères</strong> en Python.
</p>

---

## <span class="h2">Présentation</span>

<div class="presentation">
    <p>
        Cette page contient quelques exercices simple pour la comprehension et l'utilisation des chaines de caractères.
    </p>
    <p>
        Les chaines de caractères, Plus comunément appelees <strong>string</strong> sont une part importante dans la compréhension de la programmation.
    </p>
    <p>
        Pour chaque exercices je fournit le sujet et la réponse.
        Cela va sans dire qu'il est preferables <strong>d'essayer par soi-meme avant de regarder la réponse ou d'aller sur ChatGpt</strong>.
    </p>
</div>

---

## <span class="h2">Console Python Interactive</span>

Pour accéder à un terminal python dans le navigateur nous allons utiliser **Basthon**:

[:material-play-circle: Ouvrir le terminal dans Basthon](https://console.basthon.fr/){ target="_blank" rel="noopener" .md-button .md-button--primary }

---

## <span class="h2">Messages personnel</span>

!!! abstract "Sujet"
    Utiliser une variable pour representer le nom d'une personne et l'afficher.

    - Le message doit etre:

    ```python
    "Bonjour <name>, voudrais-tu apprendre un peu de python?"
    ```

???- tip "Solution"
    ```python
    name = "Alex"
    message = f"Bonjour {name}, voudrais-tu apprendre un peu de python?"
    print(message)
    ```


---

## <span class="h2">Casse d'un nom</span>

!!! abstract "Sujet"
    Utiliser une variable pour representer le nom d'une personne.

    Afficher le nom:

    - En majuscule
    - En minuscule.
    - En majuscule initial.

???- tip "Solution"
    ```python
    name = "alex"

    print(f"Nom en minuscule: {name.lower()}.")
    print(f"Nom en majuscule: {name.upper()}.")
    print(f"Nom en majuscule initiale: {name.title()}.")
    ```

---

## <span class="h2">Célèbre citation</span>

!!! note "Sujet"
    Touver une citation d'une personne célèbre.

    - L'afficher ainsi que le nom de l'auteur.
    - La sortie doit ressembler à ca:

    ```python
    Albert Einstein a dit "Qui n'a jamais fait d'erreur n'a jamais rien essayer de nouveau..."
    ```

???- tip "Solution"
    ```python
    name = "Mere Theresa"
    citation = " La vie est une opportunité, profitez-en. \nLa vie est belle, admirez la. \nLa vie est un rêve, réalisez-la. \nLa vie est un devoir, complètez-la. \nLa vie est un jeu, jouez-la."

    print(f'{name} a dit "{citation}"')
    ```

---

## <span class="h2">Supprimer des espaces dans un nom</span>

!!! note "Sujet"
    Utiliser une variable pour représenter le nom d'une personne avec des espace au début et à la fin du nom.

    - Utiliser chaque combinaison de caractères: **`\t`** et **`\n`** au moins une fois.
    - Afficher **le nom une fois**, de sorte que les espaces avant et après soient visibles.
    - Afficher le nom en utilisant chacune des **3 fonctions de suppression**:
        - *`lstrip()`*: Supprime les espaces à gauche.
        - *`rstrip()`*: Supprime les espaces à droite.
        - *`strip()`*: Supprime les espaces à gauche et à droite.

??? - tip "Solution"
    ```python
    name = "  \t \n Alex  \n\t"

    print(f"Nom initial (avec espaces): {name} .")
    print(f"Nom sans espace à gauche: {name.lstrip()} .")
    print(f"Nom sans espace à droite: {name.rstrip()} .")
    print(f"Nom sans espace: {name.strip()} .")
    ```
