---
title: Exercices - Fonctions
description: "Exercices Python sur les fonctions : écrire des fonctions simples et les valider par des tests assert."
tags:
  - exercice
  - python
  - fonctions
---

# <span class="h1">Exercices - Fonctions</span>

<p class="intro">
    Quatre exercices pour écrire vos premières <strong>fonctions</strong> et les valider
    avec des <strong>tests automatiques</strong> (`assert`). Cliquez sur « Tester » pour
    vérifier votre fonction : chaque test affiche son résultat.
</p>

---

## <span class="h2">Au programme</span>

- [**Exercices précédents : Listes et dictionnaires**](exercice-structures.md) — les structures de données.
- [**Voir le parcours complet**](index.md) — les 6 étapes du parcours d'exercices.

???+ note "Lancer les exercices - option hors environnement"
    Pas d'environnement Python local ? Deux options :

    - **Dans le navigateur** : utilisez directement le bac à sable Pyodide intégré sous chaque exercice (bouton « Tester »).
    - **En local** : téléchargez `starter.py` et `tests.py` avec les boutons prévus, puis exécutez `python tests.py`.

---

## <span class="h2">Exercice 1 : Fonction double</span>

### Énoncé

Écrivez une fonction `double(n)` qui renvoie le **double** de `n`.

| Niveau | Notions | Durée estimée |
|:---:|:---|:---:|
| 🟢 Facile | `def`, `return` | 5 min |

```python
def double(n):
    pass  # à compléter
```

??? example "Tests"
    ```python
    assert double(2) == 4
    assert double(0) == 0
    assert double(-5) == -10
    ```

???- tip "Solution"
    ```python
    def double(n):
        return n * 2
    ```

---

## <span class="h2">Exercice 2 : Nombre pair</span>

### Énoncé

Écrivez une fonction `est_pair(n)` qui renvoie `True` si `n` est pair, `False` sinon.

| Niveau | Notions | Durée estimée |
|:---:|:---|:---:|
| 🟢 Facile | condition, modulo `%` | 5 min |

```python
def est_pair(n):
    pass  # à compléter
```

??? example "Tests"
    ```python
    assert est_pair(4) is True
    assert est_pair(7) is False
    assert est_pair(0) is True
    ```

???- tip "Solution"
    ```python
    def est_pair(n):
        return n % 2 == 0
    ```

---

## <span class="h2">Exercice 3 : Maximum de deux nombres</span>

### Énoncé

Écrivez une fonction `maximum(a, b)` qui renvoie le plus grand des deux nombres. Si les deux sont égaux, renvoyez cette valeur.

| Niveau | Notions | Durée estimée |
|:---:|:---|:---:|
| 🟡 Moyen | condition, comparaison | 5 min |

```python
def maximum(a, b):
    pass  # à compléter
```

??? example "Tests"
    ```python
    assert maximum(3, 7) == 7
    assert maximum(7, 3) == 7
    assert maximum(5, 5) == 5
    ```

???- tip "Solution"
    ```python
    def maximum(a, b):
        return a if a >= b else b
    ```

---

## <span class="h2">Exercice 4 : Somme d'une liste</span>

### Énoncé

Écrivez une fonction `somme_liste(nombres)` qui renvoie la somme des éléments d'une liste. La liste peut être vide (somme = 0).

| Niveau | Notions | Durée estimée |
|:---:|:---|:---:|
| 🟡 Moyen | boucle `for`, accumulateur | 10 min |

```python
def somme_liste(nombres):
    pass  # à compléter
```

??? example "Tests"
    ```python
    assert somme_liste([1, 2, 3]) == 6
    assert somme_liste([]) == 0
    assert somme_liste([-5, 5]) == 0
    ```

???- tip "Solution"
    ```python
    def somme_liste(nombres):
        total = 0
        for n in nombres:
            total += n
        return total
    ```

---

!!! note "Source"
    Exercices inspirés du style France-IOI / Exercism : la validation se fait par des tests `assert`.

<div class="grid cards" markdown>

- :octicons-arrow-right-24: **[Continuer : exercices des chapitres suivants →](index.md)**

    Prochainement : exercices sur les conditions (`if`/`elif`/`else`) et les boucles.

</div>