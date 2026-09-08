---
title: Pandas
description: Introduction à Pandas — DataFrames, Series et manipulation de données en Python.
---

# <span class="h1">Pandas</span>

## Introduction

**Pandas** est la bibliothèque Python de référence pour la manipulation et l'analyse de données. Elle fournit des structures de données rapides, flexibles et expressives.

---

## Installation

```bash
pip install pandas
```

---

## DataFrame

Le **DataFrame** est la structure de données principale de Pandas:

```python
import pandas as pd

# Créer un DataFrame
df = pd.DataFrame({
    'nom': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'ville': ['Paris', 'Lyon', 'Marseille']
})

print(df)
```

---

## Opérations Courantes

| Opération | Code |
|-----------|------|
| Lire un CSV | `pd.read_csv('fichier.csv')` |
| Afficher les premières lignes | `df.head()` |
| Infos sur les colonnes | `df.info()` |
| Statistiques | `df.describe()` |
| Sélectionner une colonne | `df['nom']` |
| Filtrer | `df[df['age'] > 25]` |

---

## Manipulation de Données

```python
# Ajouter une colonne
df['salaire'] = [3000, 3500, 4000]

# Supprimer une colonne
df.drop('ville', axis=1, inplace=True)

# Trier
df.sort_values('age', ascending=False)

# Groupby
df.groupby('ville').mean()
```

---

## Valeurs Manquantes

```python
# Détecter les valeurs manquantes
df.isnull()

# Supprimer les lignes manquantes
df.dropna()

# Remplir les valeurs manquantes
df.fillna(0)
```

---

## Exercice Interactif

Essayer Pandas directement dans votre navigateur:

[:fontawesome-brands-python: Ouvrir avec Basthon](https://basthon.fr/){ target="_blank" rel="noopener" .md-button }
