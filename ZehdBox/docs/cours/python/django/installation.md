---
title: Installation — Environnement virtuel et projet Django
description: "Préparer un environnement virtuel Python, installer Django et créer son premier projet."
---

# <span class="h1">Installation</span>

<p class="intro">
    Créer un environnement virtuel, installer <strong>Django</strong> et démarrer un premier projet.
</p>

---

## <span class="h2">Créer un environnement virtuel</span>

Créer le répertoire du projet :

```bash
$ mkdir project
```

Dans ce répertoire, créer un environnement virtuel :

```bash
$ python3 -m venv .env
```

Activer l'environnement virtuel :

```bash
$ source .env/bin/activate
```

---

## <span class="h2">Installer Django</span>

```bash
$ pip install Django
```

Stocker les packages installés au format requis (ordonnés) :

```bash
$ pip freeze > requirements.txt
```

---

## <span class="h2">Démarrer le projet</span>

Création du projet : un seul projet contient plusieurs applications :

```bash
$ django-admin startproject transcendence .
```

Lancer le serveur :

```bash
$ python3 manage.py runserver
```

!!! example "Affichage au lancement"

    ```bash
    Django version 5.0.4, using settings 'transcendence.settings'
    Starting development server at http://127.0.0.1:8000/ <- adresse.
    Quit the server with CONTROL-C.
    ```

Pour désactiver l'environnement virtuel :

```bash
$ deactivate
```

!!! note "L'adresse du site"

    L'application est hébergée sur notre machine et non en ligne : il faut se connecter au navigateur à l'adresse indiquée.

    `python3 manage.py` est la commande utilisée pour exécuter Django.