---
title: Transcendance — Pong multijoueur en ligne (projet 42)
description: "Projet 42 Transcendance : Pong multijoueur temps réel en JavaScript — WebSockets, OAuth 42, PostgreSQL et architecture microservices."
---

# <span class="h1">Transcendance</span>

<div class="badge-section">
<div class="badge-row">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
    <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white" alt="C++">
    <img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
    <img src="https://img.shields.io/badge/WebSockets-4E5EE4?style=for-the-badge&logo=socketdotio&logoColor=white" alt="WebSockets">
    <img src="https://img.shields.io/badge/OAuth%2042-000000?style=for-the-badge&logo=42&logoColor=white" alt="OAuth 42">
</div>
</div>

<p class="intro">
    Projet final du tronc commun de l'école 42 : créer une application web complète permettant de jouer au <strong>Pong</strong> en ligne.
</p>

---

## <span class="h2">Description</span>

Projet final du tronc commun de l'école 42. Le but était de créer une application web complète permettant de jouer au **Pong** en ligne contre d'autres joueurs.

---

## <span class="h2">Compétences Acquises</span>

<div class="skill-grid">

<div class="skill-card">
    <span class="skill-card-icon">🌐</span>
    <span class="skill-card-title">Full-stack Web Development</span><br>
    <span class="skill-card-desc">Développement d'une application web complète, du front au back</span>
</div>

<div class="skill-card">
    <span class="skill-card-icon">⚡</span>
    <span class="skill-card-title">Temps réel</span><br>
    <span class="skill-card-desc">Mise en œuvre des WebSockets pour un gameplay fluide</span>
</div>

<div class="skill-card">
    <span class="skill-card-icon">🔑</span>
    <span class="skill-card-title">Authentification</span><br>
    <span class="skill-card-desc">Sessions sécurisées avec JWT et OAuth 42</span>
</div>

<div class="skill-card">
    <span class="skill-card-icon">🗃️</span>
    <span class="skill-card-title">Base de données</span><br>
    <span class="skill-card-desc">Modélisation et requêtes SQL (PostgreSQL)</span>
</div>

<div class="skill-card">
    <span class="skill-card-icon">🖥️</span>
    <span class="skill-card-title">Architecture</span><br>
    <span class="skill-card-desc">Conception d'une application en microservices</span>
</div>

</div>

---

## <span class="h2">Stack Technique</span>

=== "Frontend"
    - JavaScript
    - HTML/CSS
    - Socket.io

=== "Backend"
    - C++

=== "Base de données"
    - PostgreSQL

---

## <span class="h2">Défis Relevés</span>

!!! tip "Points clés"
    1. **Communication temps réel** : Implémentation des WebSockets pour le gameplay fluide
    2. **Gestion des sessions** : Authentification avec OAuth 42
    3. **Architecture** : Conception d'une API RESTful
    4. **Multijoueur** : Gestion des rooms et match-making

---

## <span class="h2">Fonctionnalités</span>

- Inscription/connexion via OAuth 42
- Parties 1v1 en temps réel
- Classements (leaderboard)
- Chat en direct
- Mode spectateur

---

## <span class="h2">Métriques</span>

<div class="skill-grid">

<div class="skill-card">
    <span class="skill-card-icon">👥</span>
    <span class="skill-card-title">2 joueurs</span><br>
    <span class="skill-card-desc">en duel temps réel par partie</span>
</div>

<div class="skill-card">
    <span class="skill-card-icon">👀</span>
    <span class="skill-card-title">Mode spectateur</span><br>
    <span class="skill-card-desc">rejoindre une partie en cours</span>
</div>

<div class="skill-card">
    <span class="skill-card-icon">🏆</span>
    <span class="skill-card-title">Leaderboard</span><br>
    <span class="skill-card-desc">classement global des joueurs</span>
</div>

<div class="skill-card">
    <span class="skill-card-icon">💬</span>
    <span class="skill-card-title">Chat intégré</span><br>
    <span class="skill-card-desc">échanges en direct pendant la partie</span>
</div>

</div>

---

## <span class="h2">Ce que j'ai appris</span>

!!! info "Réflexion"
    Le plus gros défi n'était pas le jeu lui-même mais l'**architecture** : quand le front (JavaScript) et le back (C++) échangent via WebSockets, la discipline consiste à décider **qui détient l'état de vérité** à chaque instant. J'ai compris pourquoi l'état d'une application temps réel doit être pensé avant la première ligne de code — la latence se paie cher ensuite.

---

## <span class="h2">Lien</span>

[:fontawesome-brands-github: Voir le code](https://github.com/Lamizana/ft_transcendence){ target="_blank" rel="noopener" .md-button .md-button--primary }
[:material-message-text: Contribuer](https://github.com/Lamizana/ft_transcendence/issues){ .md-button target="_blank" rel="noopener" }
