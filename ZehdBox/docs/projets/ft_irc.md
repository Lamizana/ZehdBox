---
title: ft_irc — Serveur IRC en C++ conforme RFC 1459 (projet 42)
description: "ft_irc, serveur IRC en C++ conforme à la RFC 1459 : sockets BSD, multi-clients, canaux et mode opérateur (projet 42)."
---

# <span class="h1">ft_irc</span>

<div class="badge-section">
<div class="badge-row">
    <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white" alt="C++">
    <img src="https://img.shields.io/badge/Sockets%20BSD-4E5EE4?style=for-the-badge&logo=linux&logoColor=white" alt="Sockets BSD">
    <img src="https://img.shields.io/badge/RFC%201459-000000?style=for-the-badge&logo=ietf&logoColor=white" alt="RFC 1459">
</div>
</div>

<p class="intro">
    Projet 42 : implémenter un <strong>serveur IRC</strong> en C++ conforme à la RFC 1459.
</p>

---

## <span class="h2">Description</span>

!!! abstract "Contexte"
    Projet 42 consistant à implémenter un **serveur IRC** (Internet Relay Chat) en C++. Ce projet enseigne les fondamentaux du réseau et de la programmation orientée objet.

---

## <span class="h2">Compétences Acquises</span>

<div class="skill-grid">

<div class="skill-card">
    <span class="skill-card-icon">📡</span>
    <span class="skill-card-title">Programmation réseau</span><br>
    <span class="skill-card-desc">Sockets TCP/UDP et communication client-serveur</span>
</div>

<div class="skill-card">
    <span class="skill-card-icon">🧊</span>
    <span class="skill-card-title">Programmation Orientée Objet</span><br>
    <span class="skill-card-desc">Conception orientée objet en C++</span>
</div>

<div class="skill-card">
    <span class="skill-card-icon">💬</span>
    <span class="skill-card-title">Protocole IRC</span><br>
    <span class="skill-card-desc">Implémentation conforme à la RFC 1459</span>
</div>

<div class="skill-card">
    <span class="skill-card-icon">👥</span>
    <span class="skill-card-title">Connexions multiples</span><br>
    <span class="skill-card-desc">Gestion simultanée de plusieurs clients</span>
</div>

<div class="skill-card">
    <span class="skill-card-icon">⚙️</span>
    <span class="skill-card-title">Concurrency</span><br>
    <span class="skill-card-desc">Traitement non-bloquant des événements réseau</span>
</div>

</div>

---

## <span class="h2">Stack Technique</span>

- **Langage**: C++
- **Standard**: C++98 (norme 42)
- **Sockets**: BSD sockets

---

## <span class="h2">Défis Relevés</span>

!!! tip "Points clés"
    1. **Protocole IRC** : Implémentation des commandes NICK, USER, JOIN, PRIVMSG, etc.
    2. **Multi-clients** : Gestion simultanée de plusieurs connexions
    3. **POO** : Conception propre avec classes
    4. **Gestion des canaux** : Création, join, part, topic

---

## <span class="h2">Fonctionnalités</span>

- Connexion/déconnexion des utilisateurs
- Création de canaux (channels)
- Envoi de messages privés
- Gestion des opérateurs de canal
- Commandes IRC standard

---

## <span class="h2">Lien</span>

[:fontawesome-brands-github: Voir le code](https://github.com/Lamizana/ft_irc){ .md-button .md-button--primary target="_blank" rel="noopener" }
