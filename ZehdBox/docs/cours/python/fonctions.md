---
title: Fonctions
description: Création et utilisation de fonctions en Python — paramètres, arguments, retour et portée.
---

# <span class="h1">Fonctions</span>

<p class="intro">
    Les fonctions sont le cœur de la programmation structurée : elles permettent de découper un problème en petits morceaux réutilisables, lisibles et testables.
</p>

---

## <span class="h2">Introduction</span>

Imaginons que vous deviez calculer l'aire d'un rectangle à plusieurs endroits de votre programme :

```python
aire1 = 5 * 3
aire2 = 8 * 4
aire3 = 12 * 6
```

Cela fonctionne, mais le jour où la formule change (par exemple pour gérer les décimales), vous devrez modifier **chaque ligne**… et risquer d'en oublier une.

Une **fonction** regroupe cette logique en un seul endroit :

```python
def aire_rectangle(longueur, largeur):
    return longueur * largeur
```

!!! info "À retenir"
    Une fonction est un **bloc de code nommé et réutilisable**. On la **définit** une fois, puis on **l'appelle** autant de fois que nécessaire.

---

## <span class="h2">Définir une fonction</span>

La syntaxe commence par le mot-clé `def`, suivi du **nom** de la fonction, de **parenthèses** et d'un **deux-points** :

```python
def dire_bonjour():
    print("Bonjour !")
```

- Le corps de la fonction (les instructions indentées) ne s'exécute **que** lorsqu'on appelle la fonction.
- La fonction peut recevoir des **paramètres** entre parenthèses (voir plus bas).

```python
def saluer(nom):
    print(f"Salut {nom} !")
```

!!! warning "Important"
    Tant que vous ne **l'appelez pas**, la fonction ne fait rien. La définir ne suffit pas.

---

## <span class="h2">Appeler une fonction</span>

Pour exécuter une fonction, on écrit son nom suivi de parenthèses :

```python
def saluer(nom):
    print(f"Salut {nom} !")

saluer("Alex")      # Salut Alex !
saluer("Sam")       # Salut Sam !
```

L'appel peut se faire **autant de fois qu'on veut**, avec des valeurs différentes. C'est tout l'intérêt de la réutilisation.

---

## <span class="h2">Paramètres et arguments</span>

Il existe une nuance de vocabulaire importante :

- **Paramètre** : la variable déclarée dans la définition de la fonction (`nom` dans `saluer(nom)`).
- **Argument** : la valeur réelle fournie à l'appel (`"Alex"` dans `saluer("Alex")`).

```python
def addition(a, b):      # a et b sont des PARAMÈTRES
    print(a + b)

addition(3, 5)           # 3 et 5 sont des ARGUMENTS
addition(10, 2)
```

Une fonction peut avoir **autant de paramètres que nécessaire** :

```python
def profil(nom, age, ville):
    print(f"{nom}, {age} ans, habite à {ville}")

profil("Alex", 25, "Paris")
profil("Sam", 30, "Lyon")
```

!!! tip "Bonnes pratiques"
    - Choisissez des noms de paramètres **explicites** (`longueur`, `largeur`) plutôt que `a`, `b` quand c'est possible.
    - Un nom de fonction commence par une **minuscule** et décrit l'action (`calculer_total`, `afficher_menu`).

---

## <span class="h2">Valeur de retour</span>

Une fonction ne se contente pas d'afficher : elle peut **renvoyer** une valeur avec le mot-clé `return`. Cette valeur peut ensuite être stockée dans une variable ou utilisée dans une expression :

```python
def carre(nombre):
    return nombre ** 2

resultat = carre(5)
print(resultat)          # 25
print(carre(7))          # 49
```

```python
def addition(a, b):
    return a + b

total = addition(3, 5) + addition(1, 1)
print(total)             # 10
```

Sans `return` explicite, une fonction renvoie **`None`** (l'absence de valeur) :

```python
def afficher(message):
    print(message)

resultat = afficher("coucou")   # affiche : coucou
print(resultat)                 # None
```

!!! warning "Attention"
    `print()` **affiche** à l'écran, `return` **fournit** une valeur au programme. Ce sont deux choses différentes — souvent confondues par les débutants.

---

## <span class="h2">Arguments par défaut</span>

Un paramètre peut avoir une **valeur par défaut**. Si l'argument est omis à l'appel, c'est cette valeur qui sera utilisée :

```python
def saluer(nom, ponctuation="!"):
    print(f"Salut {nom}{ponctuation}")

saluer("Alex")            # Salut Alex!
saluer("Alex", " ?")      # Salut Alex ?
```

!!! note "Règle"
    Les paramètres avec valeurs par défaut doivent être placés **après** les paramètres sans valeur par défaut :

    ```python
    def exemple(a, b=0):   # ✅ correct
        pass

    # def exemple(a=0, b):  # ❌ erreur de syntaxe
    ```

---

## <span class="h2">Arguments nommés</span>

On peut appeler une fonction en précisant **le nom des paramètres** — l'ordre n'a alors plus d'importance :

```python
def profil(nom, age, ville):
    print(f"{nom}, {age} ans, {ville}")

profil(age=25, ville="Paris", nom="Alex")   # ✅ ordre libre
```

C'est particulièrement utile pour les fonctions avec beaucoup de paramètres : le code est plus lisible et on évite les erreurs d'ordre.

```python
def creer_compte(pseudo, email, 
                 notification_ok=True, mode_sombre=False):
    print(f"Compte {pseudo} créé ({email})")
    print(f"Notifications : {notification_ok}, thème sombre : {mode_sombre}")

creer_compte("alex42", "alex@mail.com")
creer_compte("sam", "sam@mail.com", mode_sombre=True)
```

---

## <span class="h2">Portée des variables</span>

Une variable définie **à l'intérieur** d'une fonction est **locale** : elle n'existe que dans la fonction.

```python
def calculer():
    x = 10          # variable locale
    print(x)        # 10

calculer()
# print(x)          # ❌ NameError : x n'existe pas ici
```

Une variable définie **hors** de toute fonction est **globale** : elle est lisible dans la fonction, mais **non modifiable directement**.

```python
compteur = 0        # variable globale

def afficher_compteur():
    print(compteur)     # ✅ lecture OK

afficher_compteur()     # 0
```

```python
compteur = 0

def incrementer():
    compteur = compteur + 1   # ❌ UnboundLocalError !

incrementer()
```

Pour **modifier** une variable globale depuis une fonction, on utilise le mot-clé `global` :

```python
compteur = 0

def incrementer():
    global compteur
    compteur = compteur + 1

incrementer()
incrementer()
print(compteur)          # 2
```

!!! tip "Conseil"
    Privilégiez la **valeur de retour** plutôt que `global` : passer par des paramètres et un `return` rend les fonctions prévisibles et faciles à tester.

```python
def incrementer(valeur):
    return valeur + 1

compteur = 0
compteur = incrementer(compteur)
compteur = incrementer(compteur)
print(compteur)          # 2 — même résultat, sans effet global
```

---

## <span class="h2">Docstrings</span>

Une **docstring** est une chaîne de caractères documentant le rôle de la fonction, placée juste après `def` :

```python
def aire_rectangle(longueur, largeur):
    """Calcule l'aire d'un rectangle."""
    return longueur * largeur
```

On peut la consulter avec `help()` :

```python
help(aire_rectangle)
```

!!! info "À savoir"
    Multi-lignes : description, paramètres, valeur de retour.

    ```python
    def diviser(a, b):
        """
        Divise deux nombres.

        Paramètres :
            a (float) : le dividende.
            b (float) : le diviseur.

        Retourne :
            float : le quotient de a par b.
        """
        return a / b
    ```

---

## <span class="h2">Bonnes pratiques</span>

| Règle | Exemple |
|-------|---------|
| Un nom explicite | `def calculer_moyenne(...)` plutôt que `def m(...)` |
| Une fonction = une tâche | `def valider_email(...)` puis `def envoyer_email(...)` |
| Garder le code court | si la fonction dépasse 20 lignes, découper |
| Éviter les variables globales | utiliser des paramètres + `return` |
| Documenter avec une docstring | `"""Résumé de ce que fait la fonction."""` |

---

## <span class="h2">Exemples pratiques</span>

!!! abstract "Énoncé"
    Écrire une fonction `est_pair(nombre)` qui renvoie `True` si le nombre est pair, `False` sinon.

???- tip "Solution"
    ```python
    def est_pair(nombre):
        return nombre % 2 == 0

    print(est_pair(4))     # True
    print(est_pair(7))     # False
    ```

---

!!! abstract "Énoncé"
    Écrire une fonction `moyenne(nombres)` qui reçoit une liste et renvoie sa moyenne.

???- tip "Solution"
    ```python
    def moyenne(nombres):
        if len(nombres) == 0:
            return 0
        return sum(nombres) / len(nombres)

    print(moyenne([15, 18, 12]))    # 15.0
    ```

---

!!! abstract "Énoncé"
    Écrire une fonction `convertir_temperature(celsius)` qui convertit en Fahrenheit, puis l'utiliser pour afficher plusieurs valeurs.

???- tip "Solution"
    ```python
    def convertir_temperature(celsius):
        return celsius * 9 / 5 + 32

    for temp in [0, 25, 100]:
        print(f"{temp}°C = {convertir_temperature(temp)}°F")
    ```

---

## <span class="h2">Résumé</span>

| Mot-clé / Notion | Rôle |
|------------------|------|
| `def nom(...)` | Définir une fonction |
| `nom(argument)` | Appeler une fonction |
| `return valeur` | Renvoyer une valeur |
| `None` | Valeur renvoyée par défaut (pas de `return`) |
| Paramètres / Arguments | Variables définies / valeurs fournies à l'appel |
| Valeur par défaut | `def f(x, y=0)` — argument optionnel |
| Arguments nommés | `f(y=2, x=1)` — ordre libre |
| Variable locale / globale | Interne à la fonction / accessible partout |
| Docstring | Documentation de la fonction |