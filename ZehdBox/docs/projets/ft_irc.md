---
title: Irc
description: "Serveur IRC en C++ conforme à la RFC 1459 : sockets BSD, canaux, multi-clients."
---

# <span class="h1">Irc</span>

<div class="project-hero">
    <span class="tech-tag">C++</span>
    <span class="tech-tag">Sockets BSD</span>
    <span class="tech-tag">RFC 1459</span>
</div>

<p class="intro">
    Projet 42 : implémenter un <strong>serveur IRC</strong> en C++ conforme à la RFC 1459.
</p>

---

## <span class="h2">Description</span>

!!! note "Contexte"
    Projet 42 consistant à implémenter un **serveur IRC** (Internet Relay Chat) en C++. Ce projet enseigne les fondamentaux du réseau et de la programmation orientée objet.

---

## <span class="h2">Compétences Acquises</span>

- **Programmation réseau** (sockets TCP/UDP)
- **Programmation Orientée Objet** (C++)
- **Protocole IRC** (RFC 1459)
- **Gestion des connexions** multiples
- **Concurrency** (non-bloquant)

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
