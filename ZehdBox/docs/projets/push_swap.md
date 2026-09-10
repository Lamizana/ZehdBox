---
title: Push_swap — Algorithme de tri en C (projet 42)
description: "Push_swap : algorithme de tri en C avec deux piles — optimisation du nombre minimal d'opérations (projet 42)."
---

# <span class="h1">Push_swap</span>

<div class="badge-section">
<div class="badge-row">
    <img src="https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=white" alt="C">
    <img src="https://img.shields.io/badge/Algorithmique-4E5EE4?style=for-the-badge&logo=python&logoColor=white" alt="Algorithmique">
    <img src="https://img.shields.io/badge/Optimisation-00C853?style=for-the-badge&logo=googledatastudio&logoColor=white" alt="Optimisation">
</div>
</div>

<p class="intro">
    Algorithme de tri de nombres développé en <strong>C</strong>, basé sur la manipulation de piles.
</p>

---

## <span class="h2">Description</span>

Projet 42 visant à trier une liste de nombres entiers en utilisant **deux piles** et un ensemble restreint d'opérations (`sa`, `sb`, `ss`, `pa`, `pb`, `ra`, `rb`, `rr`, `rra`, `rrb`, `rrr`). L'objectif est de minimiser le nombre total d'opérations.

---

## <span class="h2">Compétences Acquises</span>

<div class="skill-grid">

<div class="skill-card">
    <span class="skill-card-icon">🔀</span>
    <span class="skill-card-title">Algorithmique</span><br>
    <span class="skill-card-desc">Conception de stratégies de tri adaptées à chaque taille de liste</span>
</div>

<div class="skill-card">
    <span class="skill-card-icon">🚀</span>
    <span class="skill-card-title">Optimisation</span><br>
    <span class="skill-card-desc">Réduction du nombre d'opérations minimal</span>
</div>

<div class="skill-card">
    <span class="skill-card-icon">🧠</span>
    <span class="skill-card-title">Gestion mémoire</span><br>
    <span class="skill-card-desc">Allocation et libération en C, sans fuites mémoire</span>
</div>

<div class="skill-card">
    <span class="skill-card-icon">🏷️</span>
    <span class="skill-card-title">Structuration du code</span><br>
    <span class="skill-card-desc">Séparation parsing / logique / opérations</span>
</div>

</div>

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
[:material-message-text: Contribuer](https://github.com/Lamizana/Push-swap/issues){ .md-button target="_blank" rel="noopener" }
