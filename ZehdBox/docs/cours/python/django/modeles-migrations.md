---
title: Modèles & Migrations — Définir la structure des données
description: "Migrations Django, création d'une application (pong), modèles Python et manipulation des données dans le shell."
---

# <span class="h1">Modèles & Migrations</span>

<p class="intro">
    Configurer la base de données de l'application avec les <strong>migrations</strong> et les <strong>modèles</strong> Django.
</p>

---

## <span class="h2">Migrations</span>

Une migration est un ensemble d'instructions permettant de passer le schéma de notre base de données d'un état à un autre. Elles représentent un moyen de configurer la base de données de notre application.

Les commandes Docker ne sont pas les mêmes que celles de Django. Pour créer notre base de données :

```bash
$ docker compose exec web python3 manage.py migrate
```

Permet de forcer une migration :

```bash
$ docker compose exec web python3 manage.py migrate --fake APPNAME zero
```

---

## <span class="h2">Créer une application</span>

Création de notre application, ici `pong` :

```bash
$ docker compose exec web python3 manage.py startapp pong
```

`./pong` est un répertoire d'application :

- chaque répertoire d'application est spécifique à une application ;
- une application est une sous-section de votre projet entier.

!!! note "Répertoire du projet"

    `./apps` est un répertoire de projet : il contient l'ensemble du projet, c'est la tour de contrôle.

Pour installer l'application `pong` dans notre projet, aller dans `website/settings.py` et ajouter `'pong'` au début de `INSTALLED_APPS`.

Pour créer un super utilisateur :

```bash
$ docker compose exec web python3 manage.py createsuperuser
```

---

## <span class="h2">Définir les modèles</span>

Un modèle définit les caractéristiques que nous voulons stocker. Les caractéristiques sont définies par des **champs**.

- `id` sert de **clé primaire** : un identifiant unique pour chaque table.
- La structure d'une base de données est appelée **schéma**.

Pour changer l'état de notre base de données, nous utilisons une migration (ensemble d'instructions).

Ajouter d'abord le modèle dans **models.py** :

```python
# pong/models.py

class Player(models.Model):
    name = models.fields.CharField(max_length=100)
```

!!! info "Héritage de `models.Model`"

    Cette classe est nommée `Player` et hérite de `models.Model`, la classe de base des modèles de Django.

Créer le modèle :

```bash
$ docker compose exec web python3 manage.py makemigrations
```

Le mettre à jour :

```bash
$ docker compose exec web python3 manage.py migrate
```

Pour avoir la classe `Player` sur l'administration :

```python
# pong/admin.py

from pong.models import Player
admin.site.register(Player)
```

---

## <span class="h2">Manipuler les données dans le shell</span>

Lancement du shell Django :

```bash
$ docker compose exec web python3 manage.py shell
```

Travailler avec le modèle `Player` :

```python
>>> from pong.models import Player
```

Ajouter un élément :

```python
>>> player = Player.objects.create(name='Foo Fighters')
```

Récupérer un objet grâce à son id :

```python
>>> player = Player.objects.get(id=1)
>>> player.name
```

Voir tous les objets :

```python
>>> Player.objects.all()
```

Savoir combien d'éléments il y a :

```python
>>> Player.objects.count()
```

Supprimer le premier élément :

```python
>>> tmp = Player.objects.get(id=1)
>>> tmp.delete()
```

Supprimer tous les éléments :

```python
>>> tmp = Player.objects.all()
>>> tmp.delete()
```