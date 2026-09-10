---
title: Minishell — Interpréteur de commandes UNIX en C (projet 42)
description: "Minishell : interpréteur de commandes UNIX en C inspiré de bash — processus, redirections, pipes et gestion des signaux (projet 42)."
---

# <span class="h1">Minishell</span>

<div class="badge-section">
<div class="badge-row">
    <img src="https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=white" alt="C">
    <img src="https://img.shields.io/badge/UNIX-2496ED?style=for-the-badge&logo=gnubash&logoColor=white" alt="UNIX">
    <img src="https://img.shields.io/badge/Makefile-4D4D4D?style=for-the-badge&logo=gnubash&logoColor=white" alt="Makefile">
    <img src="https://img.shields.io/badge/Signaux-FF6F00?style=for-the-badge&logo=linux&logoColor=white" alt="Signaux">
</div>
</div>

<p class="intro">
   Création d'un <strong>terminal</strong> en <strong>C</strong>.
</p>

---

## <span class="h2">Description</span>

Projet 42 visant à créer un **interpréteur de commandes** (shell) similaire à bash. Ce projet est une excellente introduction aux systèmes UNIX.

---

## <span class="h2">Compétences Acquises</span>

<div class="skill-grid">

<div class="skill-card">
    <span class="skill-card-icon">💻</span>
    <span class="skill-card-title">Programmation système</span><br>
    <span class="skill-card-desc">Compréhension du système UNIX</span>
</div>

<div class="skill-card">
    <span class="skill-card-icon">🌿</span>
    <span class="skill-card-title">Gestion des processus</span><br>
    <span class="skill-card-desc">Découverte des processus (fork, exec, wait)</span>
</div>

<div class="skill-card">
    <span class="skill-card-icon">📋</span>
    <span class="skill-card-title">Parsing</span><br>
    <span class="skill-card-desc">Gestion des inputs et parsing avancé</span>
</div>

<div class="skill-card">
    <span class="skill-card-icon">⚠️</span>
    <span class="skill-card-title">Signaux</span><br>
    <span class="skill-card-desc">Compréhension des effets des signaux (SIGINT, SIGQUIT, etc...)</span>
</div>

<div class="skill-card">
    <span class="skill-card-icon">🔀</span>
    <span class="skill-card-title">Redirections</span><br>
    <span class="skill-card-desc">Gestion des pipes et des redirections</span>
</div>

</div>

---

## <span class="h2">Stack Technique</span>

- **Langage**: C
- **Système**: Linux/UNIX
- **Outils**: Makefile, GCC

---

## <span class="h2">Défis Relevés</span>

!!! tip "Points clés"
    1. **Boucle interactive** : Implémentation du read-eval-print loop (REPL)
    2. **Gestion des signaux** : Comportement comme bash (Ctrl+C, Ctrl+\\)
    3. **Parsing complexe** : Gestion des quotes, redirections, pipes
    4. **Builtins** : Implémentation de cd, echo, env, export, unset, etc.

---

## <span class="h2">Fonctionnalités</span>

- Commandes (cd, echo, pwd, export, unset, env, exit)
- Redirections (`>`, `>>`, `<`)
- Pipes (`|`)
- Variables d'environnement
- Gestion des erreurs

---

## <span class="h2">Ce que j'ai appris</span>

!!! info "Réflexion"
    Ce projet a révélé la puissance des **processus `fork`**. Avant, le terminal était une boîte noire ; après minishell, je voyais chaque `ls` comme un `fork` + `exec` + `wait`. La gestion des signaux (`Ctrl+C`) m'a appris qu'un programme est défini autant par ce qu'il fait que par ce qu'il **refuse** de faire — et que le parsing d'entrées utilisateur est un terrain miné où une citation mal fermée fait tout exploser.

---

## <span class="h2">Lien</span>

[:fontawesome-brands-github: Voir le code](https://github.com/Lamizana/Minishell){ .md-button .md-button--primary target="_blank" rel="noopener" }
