---
title: Push Swap
description: "Algorithme de tri optimisé en C : deux piles et un nombre minimal d'opérations."
---

# <span class="h1">Push Swap</span>

<div class="project-hero">
    <span class="tech-tag">C</span>
    <span class="tech-tag">Algorithmique</span>
    <span class="tech-tag">Optimisation</span>
</div>

<p class="intro">
    Algorithme de tri de nombres développé en <strong>C</strong>, basé sur la manipulation de piles.
</p>

---

## <span class="h2">Description</span>

!!! note "Contexte"
    Projet 42 visant à trier une liste de nombres entiers en utilisant **deux piles** et un ensemble restreint d'opérations (`sa`, `sb`, `ss`, `pa`, `pb`, `ra`, `rb`, `rr`, `rra`, `rrb`, `rrr`). L'objectif est de minimiser le nombre total d'opérations.

---

## <span class="h2">Compétences Acquises</span>

- **Algorithmique** : conception de stratégies de tri adaptées
- **Optimisation** : réduction du nombre d'opérations à chaque taille de liste
- **Gestion mémoire** : allocation et libération en C
- **Structuration du code** : séparation parsing / logique / opérations

---

## <span class="h2">Stack Technique</span>

- **Langage** : C
- **Norme** : 42 (norminette)
- **Concepts** : piles, algorithmes de tri, complexité

---

## <span class="h2">Défis Relevés</span>

!!! tip "Points clés"
    1. **Choix de l'algorithme** : adapter la stratégie selon la taille de la liste (tri petit pour 3-5 éléments, tri radix pour les grandes listes)
    2. **Optimisation** : trouver le nombre minimal d'opérations pour chaque cas
    3. **Gestion des doublons** : traitement correct des valeurs identiques
    4. **Norme 42** : respecter les contraintes de la norminette

---

## <span class="h2">Fonctionnalités</span>

- Tri de listes de n'importe quelle taille
- Détection automatique de la stratégie optimale
- Gestion des erreurs (arguments invalides, doublons)
- Affichage du nombre total d'opérations

---

## <span class="h2">Lien</span>

[:fontawesome-brands-github: Voir le code](https://github.com/Lamizana/Push-swap){ .md-button .md-button--primary target="_blank" rel="noopener" }
