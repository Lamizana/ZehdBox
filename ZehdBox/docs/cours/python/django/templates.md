---
title: Templates — Gabarits HTML et architecture MVT
description: "Créer des gabarits Django (base.html, blocks), itérer sur les données, appliquer des filtres et comprendre l'architecture MVT."
---

# <span class="h1">Templates</span>

<p class="intro">
    Afficher et recueillir les données avec les <strong>gabarits</strong> Django et l'architecture <strong>MVT</strong>.
</p>

---

## <span class="h2">Séparer les gabarits</span>

Le but est de séparer le HTML valable pour l'ensemble du site du HTML spécifique à la page.

- `pong/template/pong/log/log.html` : le gabarit de la page.
- `pong/template/pong/base.html` : le gabarit de base.

---

## <span class="h2">Créer un gabarit de base</span>

La balise `{% block %}` est un espace réservé dans lequel on peut placer du contenu ; elle se termine par `{% endblock %}`. Notre block ici s'appelle **content**.

Notre gabarit de base est l'endroit idéal pour charger un fichier CSS en utilisant la balise de gabarits `static`.

---

## <span class="h2">Hériter du gabarit de base</span>

Pour chaque fichier HTML qui se servira de la base, mettre au début :

```html
{% extends 'pong/base.html' %}

{% block content %}
<ul>
    <h1>Hello Django !</h1>
    ...
</ul>
{% endblock %}
```

!!! note "Balises de gabarits"

    Les instructions `{%...%}` sont des **balises de gabarits**.

Pour itérer sur une liste dans un modèle :

```html
{# pong/template/pong/log/log.html #}

<p>Les joueurs sont :</p>
<ul>
    {% for player in players %}
    <li>{{ player.name }}</li>
    {% endfor %}
</ul>
```

Instruction `if` dans un gabarit :

```html
<p>
    Il y a
    {% if players|length == 0 %}
        pas de
    {% elif players|length == 1 %}
        qu'un seul
    {% else %}
        beaucoup de
    {% endif %}
        players.
</p>
```

---

## <span class="h2">Appliquer des filtres de gabarits</span>

Les filtres permettent d'appliquer un certain formatage.

```html
<li>{{ client.name|upper }}</li>   <!-- Met le nom en majuscule -->
```

```html
<li>{{ client.name|length }}</li>  <!-- Donne la longueur du nom -->
```

---

## <span class="h2">Ajouter un style CSS</span>

Les fichiers CSS sont appelés fichiers **statiques**.

Création d'un dossier et du fichier de style :

```bash
$ mkdir pong/static/pong
$ touch log.css
```

---

## <span class="h2">Récapitulatif de l'architecture MVT</span>

Voici les trois principaux composants de l'architecture **MVT** :

- **M** : les modèles.
- **V** : les vues.
- **T** : les templates.