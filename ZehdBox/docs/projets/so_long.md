---
title: so_long — Jeu 2D en C avec la Minilibx (projet 42)
description: "so_long, jeu 2D en C avec la minilibx 42 : collecte d'objets, gestion des collisions et rendu graphique (projet 42)."
---

# <span class="h1">so_long — Jeu 2D en C</span>

<div class="project-hero">
    <span class="tech-tag">C</span>
    <span class="tech-tag">Minilibx</span>
    <span class="tech-tag">Jeu 2D</span>
</div>

![player](../images/player-solong.png){.player-solong}

<p class="intro">
    Petit jeu 2D développé en <strong>C</strong> avec la <strong>minilibx 42</strong>.
</p>

---

## <span class="h2">:material-presentation: Présentation</span>

<div class="presentation">
    <p>
        <strong>So Long</strong> est un petit jeu 2D où le joueur doit collecter tous les objets sur une carte avant de sortir. Le projet a été développé en <strong>C</strong> en utilisant la bibliothèque graphique <strong>minilibx</strong>, fournie par l'école 42.
    </p>
    <p>
        L'objectif principal est de gérer les entrées clavier, les collisions, et l'affichage graphique de manière fluide et optimisée.
    </p>
</div>

---

## <span class="h2">:fontawesome-solid-computer: Installation</span>

Pour installer et exécuter le projet, suivez ces étapes :

```bash
# Cloner le dépôt
git clone https://github.com/Lamizana/So-long.git

# Accéder au projet
cd So-long
```

Accéder ensuite aux exécutables :

```bash
$ ls
carte_01.ber  carte_03.ber        carte_04_bonus.ber  ft_errors.c      ft_inits.c  ft_parse_road.c  gnl     main.c    mlx_linux  so_long_bonus  so_long.h
carte_02.ber  carte_03_bonus.ber  ft_display.c        ft_event_move.c  ft_move.c   ft_parsing.c     images  Makefile  so_long    solong_bonus   so_long_utils.c
```

Le projet contient deux versions du jeu :

* ***`so_long`***: Version de base, compatible avec les cartes standard.
* ***`solong-bonus`***: Version bonus avec des fonctionnalités supplémentaires.

---

## <span class="h2">:fontawesome-regular-circle-play: Comment jouer</span>

Pour lancer le jeu, utilisez les commandes suivantes :

``` c
# Lancer la version de base
./so_long carte_03.ber

# Lancer la version bonus
./solong_bonus carte_03.ber
```

Le jeu s'ouvre dans une fenêtre indépendante.

* Utilisez les **flèches directionnelles** pour déplacer le personnage.

<div style="display: flex; justify-content: center; gap: 20px; margin: 20px 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 300px; max-width: 48%;">
    <p style="text-align: center; font-weight: bold; margin-bottom: 10px;">Version Standard</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);">
      <video class="video" controls style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
        <source src="../videos/soLong.mp4" type="video/mp4">
        Votre navigateur ne supporte pas la vidéo.
      </video>
    </div>
  </div>
  <div style="flex: 1; min-width: 300px; max-width: 48%;">
    <p style="text-align: center; font-weight: bold; margin-bottom: 10px;">Version Bonus</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);">
      <video class="video" controls style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
        <source src="../videos/soLong_bonus.mp4" type="video/mp4">
        Votre navigateur ne supporte pas la vidéo.
      </video>
    </div>
  </div>
</div>

---

## <span class="h2">:fontawesome-regular-map: Cartes disponibles</span>

Voici les cartes disponibles dans le projet :
  
* **carte_01.ber** : Carte de base simple.
* **carte_02.ber** : Carte avec des obstacles.
* **carte_03.ber** : Carte recommandée pour commencer.
* **carte_03_bonus.ber**: Carte bonus avec des fonctionnalités supplémentaires.
* **carte_04_bonus.ber**: Carte bonus avec map différente.

---

## <span class="h2">:material-note-text: Notes supplémentaires</span>

!!! note "Note"
    Ce projet a été réalisé dans le cadre de la formation à **l'école 42**. Il met en avant les compétences en gestion de projet, en programmation système, et en utilisation de bibliothèques graphiques.
    
    N'hésitez pas à contribuer ou à signaler des bugs sur le [dépôt GitHub](https://github.com/Lamizana/So-long){ target="_blank" rel="noopener" } !
