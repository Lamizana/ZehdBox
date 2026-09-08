---
title: Minishell — Interpréteur de commandes UNIX en C (projet 42)
description: "Minishell : interpréteur de commandes UNIX en C inspiré de bash — processus, redirections, pipes et gestion des signaux (projet 42)."
---

# <span class="h1">Minishell — Interpréteur de commandes UNIX</span>

<div class="project-hero">
    <span class="tech-tag">C</span>
    <span class="tech-tag">UNIX</span>
    <span class="tech-tag">Makefile</span>
    <span class="tech-tag">Signaux</span>
</div>

<p class="intro">
   Création d'un <strong>terminal</strong> en <strong>C</strong>.
</p>

---

## <span class="h2">Description</span>

!!! note "Contexte"
    Projet 42 visant à créer un **interpréteur de commandes** (shell) similaire à bash. Ce projet est une excellente introduction aux systèmes UNIX.

---

## <span class="h2">Compétences Acquises</span>

<div class="soft-skills-grid">

<div class="soft-skill-card">
    <span class="soft-skill-title">Programmation système</span><br><br>
    <span class="soft-skill-desc">Compréhension du système UNIX</span>
</div>

<div class="soft-skill-card">
    <span class="soft-skill-title">Gestion des processus</span><br><br>
    <span class="soft-skill-desc">Découverte des processus (fork, exec, wait)</span>
</div>

<div class="soft-skill-card">
    <span class="soft-skill-title">Parsing</span><br><br>
    <span class="soft-skill-desc">Gestion des inputs et parsing avancé</span>
</div>

<div class="soft-skill-card">
    <span class="soft-skill-title">Signaux</span><br><br>
    <span class="soft-skill-desc">Compréhension des effets des signaux (SIGINT, SIGQUIT, etc...)</span>
</div>

   <div class="soft-skill-card">
      <span class="soft-skill-title">Redirections</span><br><br>
      <span class="soft-skill-desc">Gestion des pipes et des redirections.</span>
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

## <span class="h2">Lien</span>

[:fontawesome-brands-github: Voir le code](https://github.com/Lamizana/Minishell){ .md-button .md-button--primary target="_blank" rel="noopener" }
