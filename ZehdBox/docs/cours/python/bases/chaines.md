---
title: Chaînes de caractères
description: "Manipuler le texte en Python : chaînes de caractères (strings), méthodes et formatage."
---

# <span class="h1">Chaînes de Caractères</span>

---

## <span class="h2">Introduction</span>

Les chaînes de caractères (strings) permettent de manipulate du texte en Python.

---

## <span class="h2">Créer une Chaîne</span>

```python
# Guillemets simples
message = 'Bonjour'

# Guillemets doubles
message = "Bonjour"

# Multi-lignes
texte = """Ceci est un
texte sur
plusieurs lignes"""

# Guillemets triples
texte = '''Autre façon
de faire'''
```

---

## <span class="h2">Accéder aux Caractères</span>

Les caractères sont indexés (commence à 0) :

```python
texte = "Python"

print(texte[0])   # P
print(texte[1])   # y
print(texte[-1])  # n (dernier caractère)
print(texte[-2])  # o
```

### Tranchage (Slicing)

```python
texte = "Python"

print(texte[0:3])   # Pyt (indices 0, 1, 2)
print(texte[:3])    # Pyt (du début)
print(texte[3:])    # hon (jusqu'à la fin)
print(texte[:])     # Python (copie)
print(texte[::2])   # Pto (un caractère sur deux)
print(texte[::-1])  # nohtyP (inversé)
```

---

## <span class="h2">Méthodes de Chaînes</span>

### Minuscules / Majuscules

```python
texte = "Bonjour"

print(texte.upper())       # BONJOUR
print(texte.lower())       # bonjour
print(texte.capitalize())  # Bonjour
print(texte.title())       # Bonjour
```

### Recherche et Remplacement

```python
texte = "Bonjour tout le monde"

print(texte.find("tout"))      # 8 (position)
print(texte.replace("Bonjour", "Salut"))  # Salut tout le monde
print(texte.count("o"))        # 3
```

### Nettoyage

```python
texte = "  Bonjour   "

print(texte.strip())    # "Bonjour" (enlève espaces)
print(texte.lstrip())    # "Bonjour   "
print(texte.rstrip())    # "  Bonjour"
```

### Découpage

```python
texte = "pomme,banane,orange"

print(texte.split(","))  # ['pomme', 'banane', 'orange']

mots = ["pomme", "banane"]
print(",".join(mots))    # "pomme,banane"
```

---

## <span class="h2">Interpolation</span>

### Format (f-string)

```python
nom = "Alex"
age = 25

print(f"Bonjour, je m'appelle {nom} et j'ai {age} ans")
```

### Format avec expressions

```python
a = 10
b = 3

print(f"{a} + {b} = {a + b}")  # 10 + 3 = 13
print(f"{a} / {b} = {a/b:.2f}")  # 10 / 3 = 3.33
```

### Ancienne méthode

```python
nom = "Alex"
print("Bonjour %s" % nom)  # Bonjour Alex
```

---

## <span class="h2">Opérations sur Chaînes</span>

### Concaténation

```python
prenom = "Alex"
nom = "Dupont"

nom_complet = prenom + " " + nom
print(nom_complet)  # Alex Dupont
```

### Répétition

```python
print("Ha" * 3)  # HaHaHa
```

### Longueur

```python
texte = "Python"
print(len(texte))  # 6
```

---

## <span class="h2">Vérifications</string>

```python
texte = "Bonjour"

print(texte.isalpha())      # True (que lettres)
print(texte.isdigit())      # False (que chiffres)
print(texte.isalnum())     # True (lettres et chiffres)
print(texte.islower())     # False
print(texte.isupper())     # False
print(texte.startswith("Bo"))  # True
print(texte.endswith("ur"))    # True
```

---

## <span class="h2">Caractères Spéciaux</span>

```python
# Saut de ligne
print("Ligne 1\nLigne 2")

# Tabulation
print("Colonne1\tColonne2")

# Guillemets dans chaîne
print("Il a dit \"Bonjour\"")
print('Il a dit "Bonjour"')
```

---

## <span class="h2">Résumé des Méthodes</string>

| Méthode | Description |
|---------|-------------|
| `upper()` | Minuscules → MAJUSCULES |
| `lower()` | MAJUSCULES → minuscules |
| `strip()` | Enlève les espaces |
| `split()` | Découpe en liste |
| `replace()` | Remplace un texte |
| `find()` | Trouve position |
| `count()` | Compte occurrences |
| `format()` | Formatage |

---

## <span class="h2">Exemples Pratiques</span>

### Exemple 1: Formater un nom

```python
nom = "   alex dupont   "
nom_format = nom.strip().title()
print(nom_format)  # Alex Dupont
```

### Exemple 2: Vérifier un email

```python
email = "alex@example.com"

if "@" in email and "." in email:
    print("Email valide")
else:
    print("Email invalide")
```

### Exemple 3: Compter les mots

```python
phrase = "bonjour tout le monde"
mots = phrase.split(" ")
print(f"Nombre de mots: {len(mots)}")  # 5
```
