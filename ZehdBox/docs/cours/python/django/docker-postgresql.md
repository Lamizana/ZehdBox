---
title: Docker & PostgreSQL — Conteneuriser Django et brancher la base
description: "Créer l'image Docker, orchestrer les conteneurs avec docker-compose et connecter l'application Django à une base PostgreSQL."
---

# <span class="h1">Docker & PostgreSQL</span>

<p class="intro">
    Faire tourner l'application Django dans un conteneur <strong>Docker</strong> et la relier à une base <strong>PostgreSQL</strong>.
</p>

---

## <span class="h2">Créer une image Docker</span>

Au niveau de `manage.py`, créer un fichier **Dockerfile**.
Créer aussi un fichier **.dockerignore**.

Construire l'image :

```bash
$ docker build .
```

Création du fichier **docker-compose.yml** au niveau du Dockerfile :

```bash
$ docker-compose up
```

!!! info "Application isolée"

    Notre serveur Django s'exécute dans un conteneur Docker autonome.

Pour arrêter le conteneur :

- `Ctrl-c`
- `docker compose down`

---

## <span class="h2">Créer la base de données PostgreSQL</span>

Psycopg est l'adaptateur de PostgreSQL. Rajouter dans **requirements.txt** :

```
psycopg[binary]==3.1.12
```

Création d'un conteneur **db** pour notre base de données PostgreSQL.

Le webservice dépend du service de base de données à exécuter : ajouter une ligne appelée `depends_on` pour le signifier.

Mettre à jour la base de données dans **settings.py** au niveau de `DATABASE`.

S'assurer que les tables Django par défaut ont été créées :

```bash
$ docker-compose exec db psql --username=alex --dbname=pong_db
```

Pour faire tourner les deux conteneurs en mode détaché avec une seule commande :

```bash
$ docker-compose up -d --build
```

Pour afficher les images qui tournent :

```bash
$ docker images -a
```

Forcer l'arrêt de tous les conteneurs puis supprimer toutes les images :

```bash
$ docker stop $(docker ps -aq)
$ docker rmi -f $(docker images -q)
```

---

## <span class="h2">Utilisation de PostgreSQL</span>

Vérifier qu'un conteneur est en route :

```bash
$ docker ps
```

Se connecter en root à PostgreSQL sur ligne de commande :

```bash
$ docker exec -it container_name bash
```

Pour accéder à PostgreSQL :

```bash
$ su - postgres
$ psql
psql (14.11 (Debian 14.11-1.pgdg120+2))
Type "help" for help.

postgres=#
```

Commandes utiles :

```bash
\conninfo       # Affiche l'état de la connexion.
\l              # Liste les bases de données.
\dt             # Liste les tables.
\q              # Quitte psql.
```

Accéder aux éléments d'une table de la base de données :

```sql
SELECT * FROM pong_player;
```

Arrêter le conteneur avant de le supprimer :

```bash
$ docker stop container_name
$ docker rm container_name
```