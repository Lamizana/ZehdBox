---
title: IA - Intelligence artificielle et machine learning
description: "Intelligence artificielle et machine learning : comprendre les modèles de l'intérieur - régression linéaire (descente de gradient) et régression logistique multiclasse (DSLR) codées de zéro."
icon: material/robot
tags:
  - cours
  - machine-learning
  - intelligence-artificielle
  - python
---

# <span class="h1">Intelligence Artificielle</span>

<p class="intro">
    L'<strong>apprentissage automatique</strong> expliqué et codé de zéro : comprendre ce qui se passe sous le capot, plutôt que d'appeler une boîte noire.
</p>

---

## <span class="h2">Apprendre en construisant</span>

L'IA n'est pas une magie : derrière chaque modèle, il y a des maths, une fonction de coût et un algorithme d'optimisation. Cette section **construit les algorithmes à la main**, ligne par ligne, du plus simple au plus complet.

Les exemples sont écrits en **Python** — mais les idées (prédire, mesurer l'erreur, corriger un pas à la fois) sont **indépendantes du langage**.

<div class="grid cards" markdown>

-   :material-chart-line:{ .lg .middle } __Régression linéaire__

    ---

    Prédire une **valeur** (un prix, une note) : moindres carrés et descente de gradient codés de zéro.

    `NumPy` `Pandas` `Descente de gradient`

    [:octicons-arrow-right-24: Le tutoriel](linear-regression.md)

-   :material-brain:{ .lg .middle } __Régression logistique (DSLR)__

    ---

    Prédire une **catégorie** : le Choixpeau de Poudlard reconstruit par un classifieur one-vs-all codé de zéro.

    `NumPy` `Pandas` `Seaborn` `Classification`

    [:octicons-arrow-right-24: Le tutoriel](dslr.md)

</div>

---

## <span class="h2">Comment avancer ?</span>

1. Commencez par la **[régression linéaire](linear-regression.md)** : c'est le premier modèle de machine learning, qui pose la **descente de gradient**.
2. Enchaînez avec la **[régression logistique (DSLR)](dslr.md)** : même descente de gradient, mais pour **classer**.
3. Comparez ensuite avec **[Scikit-learn](../cours/python/scikit-learn.md)** : la même chose, en quelques lignes — maintenant que vous savez ce qui se passe dedans.

---

!!! info "Prérequis"
    Les exemples s'appuient sur les **[bases de Python](../cours/python/bases/index.md)**, les **[fonctions](../cours/python/fonctions.md)** et les **[bibliothèques](../cours/python/librairies/index.md)** (surtout NumPy et Pandas). Le parcours Python complet se trouve dans **[Programmation](../cours/python/index.md)**.

!!! tip "Régression ou classification ?"
    - **Régression** : la sortie est une **valeur continue** (« le prix sera 6 353 € »).
    - **Classification** : la sortie est une **catégorie** (« cet élève ira à Gryffondor »).

    La frontière tient souvent à une seule fonction : une **sigmoïde** transforme un score en probabilité.

---

!!! abstract "Section en construction"
    Cette section va grandir : les prochains projets et notes d'IA viendront s'y ranger, chacun avec son tutoriel et sa fiche projet dans **[Projets](../projets/index.md)**.
