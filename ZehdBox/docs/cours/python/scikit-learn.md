---
title: Scikit-learn
description: Introduction à Scikit-learn — classification, régression, clustering et machine learning en Python.
---

# <span class="h1">Scikit-learn</span>

## Introduction

**Scikit-learn** est la bibliothèque Python de référence pour le Machine Learning. Elle propose des algorithmes de classification, régression, clustering et réduction de dimension.

---

## Installation

```bash
pip install scikit-learn
```

---

## Structure Générale

```python
from sklearn import ensemble, model_selection, metrics

# 1. Préparer les données
X_train, X_test, y_train, y_test = model_selection.train_test_split(
    X, y, test_size=0.2
)

# 2. Choisir un modèle
model = ensemble.RandomForestClassifier(n_estimators=100)

# 3. Entraîner
model.fit(X_train, y_train)

# 4. Prédire
y_pred = model.predict(X_test)

# 5. Évaluer
accuracy = metrics.accuracy_score(y_test, y_pred)
```

---

## Modèles Courants

| Type | Modèle | Use case |
|------|--------|----------|
| **Classification** | LogisticRegression | Classification binaire |
| **Classification** | RandomForest | Classification multi-classes |
| **Régression** | LinearRegression | Prédiction de valeurs |
| **Régression** | RandomForestRegressor | Régression non-linéaire |
| **Clustering** | KMeans | Regroupement non-supervisé |

---

## Exemple: Iris Dataset

```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Charger les données
iris = load_iris()
X, y = iris.data, iris.target

# Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Entraîner
clf = RandomForestClassifier(n_estimators=100)
clf.fit(X_train, y_train)

# Évaluer
y_pred = clf.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, y_pred):.2f}")
```

---

## Validation Croisée

```python
from sklearn.model_selection import cross_val_score

scores = cross_val_score(clf, X, y, cv=5)
print(f"Scores: {scores}")
print(f"Moyenne: {scores.mean():.2f}")
```

---

## Préprocessing

```python
from sklearn.preprocessing import StandardScaler, LabelEncoder

# Normalisation (pour les distances)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Encodage des labels
encoder = LabelEncoder()
y_encoded = encoder.fit_transform(y)
```

---

## Pour Aller Plus Loin

- **Deep Learning**: PyTorch, TensorFlow
- **XGBoost**: Pour des performances optimisées
- **Feature Engineering**: Créer de nouvelles features

---

## Exercice Interactif

Essayer scikit-learn directement:

[:fontawesome-brands-python: Ouvrir avec Basthon](https://basthon.fr/){ target="_blank" rel="noopener" .md-button }
