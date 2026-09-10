---
title: Vues & URLs — Répondre aux requêtes du navigateur
description: "Les vues Django (views.py), la configuration des URL (urls.py) et l'affichage des données issues des modèles."
---

# <span class="h1">Vues & URLs</span>

<p class="intro">
    Répondre à la visite d'un utilisateur avec les <strong>vues</strong> et router les requêtes avec les <strong>URLs</strong>.
</p>

---

## <span class="h2">Définir les vues</span>

Le fichier **views.py** gère l'ensemble des vues avec le fichier **urls.py**.

- Une vue a pour fonction de répondre à la visite d'un utilisateur sur le site en renvoyant une page que l'utilisateur peut voir.
- Une vue est une fonction qui accepte un objet `HttpRequest` comme paramètre et retourne un objet `HttpResponse`.

```python
# pong/views.py

from django.http import HttpResponse

def index(request):
    return HttpResponse('<h1>Hello Django!</h1>')
```

!!! note "Signatures des vues"

    Le premier paramètre de la fonction est une variable contenant l'objet `HttpRequest`. Par convention, nous le nommons toujours `request`. La valeur de retour de la fonction est toujours un objet `HttpResponse`.

---

## <span class="h2">Configurer les URLs</span>

Un modèle d'URL est la façon dont nous indiquons à Django qu'il doit être à l'écoute d'une requête pour une URL donnée, puis appeler une vue spécifique pour générer une page.

Importation de l'élément vue dans **urls.py** :

```python
# pong/urls.py

from django.contrib import admin
from django.urls import path
from pong import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('index/', views.index)
]
```

---

## <span class="h2">Utiliser les modèles dans les vues</span>

Mettre à jour **views.py** pour afficher les données issues des modèles :

```python
# pong/views.py

from django.shortcuts import render
from django.http        import HttpResponse
from pong.models        import Player

def index(request):
    player = Player.objects.all()
    return render(request, 'pong/log/log.html', {'players': players})
```

!!! info "Le paramètre `render`"

    `render` prend plusieurs paramètres : `'pong/log/log.html'` est le chemin du fichier HTML à récupérer. Le troisième argument est un « dictionnaire de contexte » : `'players': players` permet de récupérer tous les objets de notre modèle.