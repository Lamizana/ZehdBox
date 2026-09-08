---
title: Instructions répétitives
description: Les boucles for et while en Python pour automatiser les tâches répétitives.
---

# <span class="h1">Instructions répétitives</span>

<p class="intro">
    L'une des tâches que les machines font le mieux est la répétition sans erreurs de tâches identiques.
</p>

---

## <span class="h2">Introduction</span>

Il existe différentes méthodes pour programmer des tâches répétitives.

Nous allons ici voir l'une des plus fondamentale: la boucle de répétition construite autour de l'***instruction while***.

???+ note "Note"
    Comme d'habitude, si vous n'avez pas ou la flemme de créer un environnement python :

    [Ouvrir avec Basthon](https://basthon.fr/){ target="_blank" rel="noopener" .md-button }

---

## <span class="h2">Réaffectation</span>

Il est permis de *ré-affecter une nouvelle valeur à une même variable*, et ceux autant de fois qu'on le souhaite.

!!! info "Information"
    L'effet d'une réaffectation est de remplacer l'ancienne valeur par une nouvelle.

```python
>>> altitude = 50
>>> print(altitude)
50
>>> altitude = 150
>>> print(altitude)
150
```

!!! warning "Attention"
    Le symbole "égale" (`=`) utilisé sous Python ne doit en aucun cas être confondu avec le symbole d'égalité tel qu'il est compris en mathématique. Il est tentant d'interpréter l'instruction `altitude = 150` comme instruction d'égalité, mais ce n'en est pas une !

- L'égalité est ***commutative***, alors que l'affectation ne l'est pas. Ainsi, en mathématique, écrire `a = 7` ou  `7 = a ` sont équivalentes, alors qu'une instruction de programmation telle que `375 = altitude`serait interdite.
- L'égalité est ***permanente***, alors que l'affectation peut-être remplacé. Lorsqu'en mathématique, nous affirmons une égalité telle que `a = b` au début d'un raisonnement, alors `a` continue à être égale à `b` durant tout le déroulement qui suit.