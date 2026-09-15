---
title: Transcendance — Pong multijoueur local (projet 42)
description: "Projet 42 Transcendance : application web Django + Canvas pour jouer au Pong en local — solo, 1v1, 4 joueurs, tournoi, multi-langue."
---

# <span class="h1">Transcendance</span>

<div class="badge-section">
<div class="badge-row">
    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
    <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" alt="Django">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
    <img src="https://img.shields.io/badge/HTML5%20Canvas-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 Canvas">
    <img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
    <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
    <img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" alt="Nginx">
</div>
</div>

<p class="intro">
    Projet final du tronc commun de l'école 42 : créer une application web complète permettant de jouer au <strong>Pong</strong> en local — solo contre l'IA, en duel 1v1, à 4 joueurs ou en tournoi.
</p>

---

## <span class="h2">Contexte</span>

Transcendance est le **dernier projet du tronc commun 42**. L'objectif était de concevoir une application web full-stack fonctionnelle, déployable via Docker, intégrant un jeu Pong jouable en local sur un même navigateur. Le projet combinait développement back-end (API REST), front-end (rendu Canvas), gestion d'utilisateurs, base de données relationnelle et conteneurisation — le tout en **solo**.

---

## <span class="h2">Mon rôle</span>

Développeur **full-stack solo** sur l'ensemble du projet :

- **Back-end** : Django 4.2, modélisation PostgreSQL, API REST (Django REST Framework), authentification, gestion des profils et des scores
- **Front-end** : moteur de jeu Pong en vanilla JavaScript sur `<canvas>` HTML5, gestion des entrées clavier et tactile, IA adverse
- **Infra** : Docker Compose (3 conteneurs), configuration Nginx avec SSL/TLS, migrations Django

---

## <span class="h2">Architecture</span>

<div class="skill-grid">

<div class="skill-card">
    <span class="skill-card-title">Django 4.2</span><br>
    <span class="skill-card-desc"><strong>Back-end Python</strong><br><em>Framework web avec ORM, auth natif, admin, système de templates.</em></span>
</div>

<div class="skill-card">
    <span class="skill-card-title">Docker Compose</span><br>
    <span class="skill-card-desc"><strong>3 conteneurs</strong><br><em>web (gunicorn + Django), db (PostgreSQL 15), nginx (reverse proxy SSL).</em></span>
</div>

<div class="skill-card">
    <span class="skill-card-title">Nginx + SSL/TLS</span><br>
    <span class="skill-card-desc"><strong>Reverse proxy</strong><br><em>Terminaison SSL (TLSv1.2/1.3), proxy_pass vers gunicorn, service des fichiers statiques.</em></span>
</div>

<div class="skill-card">
    <span class="skill-card-title">PostgreSQL 15</span><br>
    <span class="skill-card-desc"><strong>Base relationnelle</strong><br><em>Modèle Player avec ArrayField pour historique des duels et tournois.</em></span>
</div>

<div class="skill-card">
    <span class="skill-card-title">HTML5 Canvas + Vanilla JS</span><br>
    <span class="skill-card-desc"><strong>Moteur de jeu côté client</strong><br><em>Rendu 60fps, physique de balle, collisions, IA prédictive, contrôles tactiles.</em></span>
</div>

<div class="skill-card">
    <span class="skill-card-title">Django REST Framework</span><br>
    <span class="skill-card-desc"><strong>API REST</strong><br><em>Viewsets pour scores, tournois, profils, langues et statuts — consommés via fetch() côté JS.</em></span>
</div>

</div>

---

## <span class="h2">Technologies</span>

<div class="skill-grid">

<div class="skill-card">
    <span class="skill-card-title">Back-end</span><br>
    <span class="skill-card-desc"><strong>Python 3.12</strong><br><em>Langage principal du back-end.</em><br><strong>Django 4.2</strong><br><em>Framework web : ORM, auth, templates, admin.</em><br><strong>Django REST Framework</strong><br><em>API REST avec serializers et viewsets.</em></span>
</div>

<div class="skill-card">
    <span class="skill-card-title">Front-end</span><br>
    <span class="skill-card-desc"><strong>JavaScript vanilla</strong><br><em>Moteur de jeu, gestion DOM, appels API fetch().</em><br><strong>HTML5 Canvas</strong><br><em>Rendu du terrain de jeu, raquettes, balle, score.</em><br><strong>Bootstrap 5</strong><br><em>Composants UI : modals, boutons, formulaires.</em></span>
</div>

<div class="skill-card">
    <span class="skill-card-title">Base de données</span><br>
    <span class="skill-card-desc"><strong>PostgreSQL 15</strong><br><em>Stockage des profils, scores, duels, tournois, amis.</em><br><strong>ArrayField (psycopg2)</strong><br><em>Tableaux d'historique sans jointures — duels, positions de tournoi.</em></span>
</div>

<div class="skill-card">
    <span class="skill-card-title">Infra & DevOps</span><br>
    <span class="skill-card-desc"><strong>Docker Compose</strong><br><em>Orchestration de 3 conteneurs avec volumes et migrations.</em><br><strong>Nginx</strong><br><em>Reverse proxy SSL, proxy_pass, fichiers statiques.</em><br><strong>Makefile</strong><br><em>Commandes make create, make re, make fclean, make psql…</em></span>
</div>

<div class="skill-card">
    <span class="skill-card-title">Déploiement</span><br>
    <span class="skill-card-desc"><strong>SSL/TLS</strong><br><em>Certificats auto-signés, TLSv1.2/1.3.</em><br><strong>Gunicorn</strong><br><em>Serveur WSGI production derrière Nginx.</em><br><strong>Migrations Django</strong><br><em>makemigrations + migrate via Makefile.</em></span>
</div>

</div>

---

## <span class="h2">Fonctionnalités</span>

<div class="skill-grid">

<div class="skill-card">
    <span class="skill-card-title">Mode Solo (IA)</span><br>
    <span class="skill-card-desc"><strong>Partie contre l'ordinateur</strong><br><em>L'IA prédit la trajectoire de la balle avec une marge d'aléatoire pour varier la difficulté. Premier à 3 points gagne.</em></span>
</div>

<div class="skill-card">
    <span class="skill-card-title">1v1 Local</span><br>
    <span class="skill-card-desc"><strong>Deux joueurs, un clavier</strong><br><em>Joueur 1 : W/S. Joueur 2 : flèches haut/bas. Raquettes pilotées en simultané sur le même écran.</em></span>
</div>

<div class="skill-card">
    <span class="skill-card-title">4 Joueurs</span><br>
    <span class="skill-card-desc"><strong>Quadra sur un canvas carré</strong><br><em>4 raquettes (gauche/droite/haut/bas) avec murs d'angles. Chaque joueur a sa palette colorée (rouge, bleu, vert, jaune).</em></span>
</div>

<div class="skill-card">
    <span class="skill-card-title">Tournoi 4</span><br>
    <span class="skill-card-desc"><strong>Bracket à 4 joueurs</strong><br><em>Saisie des 4 noms, demi-finales (p1v2, p3v4), puis finale. Résultat sauvegardé via API DRF.</em></span>
</div>

<div class="skill-card">
    <span class="skill-card-title">Multi-langue (FR / EN / ES)</span><br>
    <span class="skill-card-desc"><strong>3 langues natives</strong><br><em>Interfaces, boutons, règles du jeu, messages de victoire — tout est traduit via un système de balises lang="" et un routeur JS.</em></span>
</div>

<div class="skill-card">
    <span class="skill-card-title">Profil & Avatar</span><br>
    <span class="skill-card-desc"><strong>Gestion du joueur</strong><br><em>Création de profil (nickname, langue, avatar), modification du mot de passe, suppression de compte.</em></span>
</div>

<div class="skill-card">
    <span class="skill-card-title">Système d'amis</span><br>
    <span class="skill-card-desc"><strong>Ajout / suppression d'amis</strong><br><em>Liste de tous les joueurs, ajout par nickname, liste d'amis persistante via ArrayField, statut en ligne / hors ligne.</em></span>
</div>

<div class="skill-card">
    <span class="skill-card-title">Scores & Historique</span><br>
    <span class="skill-card-desc"><strong>Suivi des performances</strong><br><em>Wins / loses, historique détaillé par duel (adversaire, score, date), positions de tournoi — tout exposé via API REST.</em></span>
</div>

</div>

---

## <span class="h2">Problème <span class="h2-sep">|</span> Solution</span>

<div class="skill-grid">

<div class="skill-card">
    <span class="skill-card-title">Rendu multi-écrans</span><br>
    <span class="skill-card-desc"><strong>Problème</strong><br><em>Le jeu devait être jouable sur des écrans allant de 320px (mobile) à 1440px+ (desktop) sans distortion.</em><br><strong>Solution</strong><br><em>Calcul dynamique des dimensions Canvas en fonction de <code>window.innerWidth</code> avec 5 paliers, et normalisation de toutes les positions/rayons par <code>canvas.height / 1000</code>.</em></span>
</div>

<div class="skill-card">
    <span class="skill-card-title">Physique de la balle</span><br>
    <span class="skill-card-desc"><strong>Problème</strong><br><em>La balle accélérait indéfiniment après chaque rebond, rendant le jeu ingérable.</em><br><strong>Solution</strong><br><em>Conservation de la vitesse totale via Pythagore : <code>speed = √(12² − speedy²)</code> à chaque collision, pour que la vitesse reste constante quelle que soit l'angle de rebond.</em></span>
</div>

<div class="skill-card">
    <span class="skill-card-title">IA prédictive</span><br>
    <span class="skill-card-desc"><strong>Problème</strong><br><em>Une IA qui suit simplement la balle est trop facile à battre.</em><br><strong>Solution</strong><br><em>L'IA calcule le point d'intersection y de la trajectoire de la balle au niveau de sa raquette, puis ajoute un bruit aléatoire (±10px) pour simuler une difficulté imparfaite mais crédible.</em></span>
</div>

</div>

---

## <span class="h2">Résultats</span>

<div class="skill-grid">

<div class="skill-card">
    <span class="skill-card-title">4 modes de jeu</span><br>
    <span class="skill-card-desc">solo, 1v1, 4 joueurs, tournoi — jouables en local</span>
</div>

<div class="skill-card">
    <span class="skill-card-title">3 langues</span><br>
    <span class="skill-card-desc">FR, EN, ES — toute l'interface traduite</span>
</div>

<div class="skill-card">
    <span class="skill-card-title">3 conteneurs Docker</span><br>
    <span class="skill-card-desc">déploiement en une commande : <code>make create</code></span>
</div>

<div class="skill-card">
    <span class="skill-card-title">API REST complète</span><br>
    <span class="skill-card-desc">scores, tournois, profils, langues, statuts — 5 viewsets DRF</span>
</div>

</div>

---

## <span class="h2">Ce que j'ai appris</span>

!!! info "Réflexion"
    Transcendance m'a appris que **la plupart des projets "temps réel" en 42 ne le sont pas vraiment** — la vraie difficulté n'est pas le networking, mais la **gestion de l'état** côté client : qui possède la balle, quand le tour change, comment un score se propage au back-end. J'ai aussi compris pourquoi Docker n'est pas qu'un outil de déploiement mais une **contrainte d'architecture** : séparer web, base et proxy m'a forcé à penser les interfaces entre composants avant d'écrire la première ligne de code.

---

## <span class="h2">Lien</span>

[:fontawesome-brands-github: Voir le code](https://github.com/Lamizana/ft_transcendence){ target="_blank" rel="noopener" .md-button .md-button--primary }
