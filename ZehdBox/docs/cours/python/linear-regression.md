---
title: Régression linéaire - le machine learning en pratique
description: "Tutoriel régression linéaire simple en Python : moindres carrés, descente de gradient, normalisation, évaluation MSE/MAE/R² et visualisation Matplotlib — avec le code du projet 42 ft_linear_regression."
tags:
  - cours
  - python
  - machine-learning
  - regression
  - datascience
---

# <span class="h1">Régression linéaire</span>

<p class="intro">
    Ton premier algorithme de machine learning, écrit de zéro en Python.
</p>

---

## <span class="h2">Introduction</span>

La **régression linéaire simple** modélise la relation entre une variable explicative `x` et une variable cible `y` par une **droite** :

```
estimatePrice(x) = θ₀ + θ₁ × x
```

- `θ₀` : l'ordonnée à l'origine (la valeur de `y` quand `x = 0`)
- `θ₁` : la pente (la variation de `y` quand `x` augmente de 1)

> **Exemple du projet** : prédire le prix d'une voiture selon son kilométrage.
> `θ₀` ≈ le prix d'une voiture neuve (0 km), `θ₁` ≈ la perte de valeur **par kilomètre**.
> Avec le modèle entraîné : `prix = 8480,97 - 0,0213 × km`.

!!! warning "La règle du jeu"
    L'objectif est de **comprendre** l'algorithme. Utiliser `numpy.polyfit` ou `sklearn.linear_model.LinearRegression` reviendrait à tricher : tout est codé à la main.

Le but de l'apprentissage : trouver les meilleurs `θ₀` et `θ₁` pour que la droite colle le mieux possible aux données réelles. Deux grandes approches existent — **les moindres carrés** (formule analytique) et **la descente de gradient** (optimisation itérative).

---

## <span class="h2">Prérequis & installation</span>

Tout le code utilise **NumPy**, **Pandas** et **Matplotlib** :

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install numpy pandas matplotlib
```

Le jeu de données `data.csv` contient 24 voitures : deux colonnes `km` et `price`.

```csv
km,price
240000,3650
139800,3800
150500,4400
…
```

---

## <span class="h2">La fonction de coût : l'erreur quadratique moyenne</span>

Pour savoir si la droite est bonne, on mesure l'écart entre les **valeurs prédites** et les **valeurs réelles**. La fonction de coût de référence est la **MSE** (*Mean Squared Error*) :

```
MSE = (1/n) × Σ (yᵢ - ŷᵢ)²
```

avec `ŷᵢ = θ₀ + θ₁ × xᵢ` la prédiction et `n` le nombre de données.

!!! info "Pourquoi élever au carré ?"
    - Les écarts positifs et négatifs **ne s'annulent plus**.
    - Les grosses erreurs sont **pénalisées plus lourdement**.

Entraîner le modèle = **minimiser la MSE** sur les données disponibles.

---

## <span class="h2">Partie 1 : la méthode des moindres carrés</span>

Les moindres carrés (OLS, *Ordinary Least Squares*) résolvent le problème **de manière analytique** : on trouve le minimum de la fonction de coût par le calcul, en une seule étape.

Les formules :

```
β₁ = Σ[(Xᵢ - X̄) × (Yᵢ - Ȳ)] / Σ[(Xᵢ - X̄)²]     la pente
β₀ = Ȳ - β₁ × X̄                                  l'ordonnée à l'origine
```

avec `X̄` et `Ȳ` les moyennes de `x` et `y`.

### Implémentation pas à pas

```python
import pandas as pd

data = pd.read_csv("data.csv")
X = data["km"]        # kilométrage
Y = data["price"]     # prix

# 1. Moyennes
mean_x = X.mean()
mean_y = Y.mean()

# 2. Pente β₁ = Σ[(Xᵢ - X̄)(Yᵢ - Ȳ)] / Σ[(Xᵢ - X̄)²]
numerateur   = sum((x - mean_x) * (y - mean_y) for x, y in zip(X, Y))
denominateur = sum((x - mean_x) ** 2 for x in X)
beta_1 = numerateur / denominateur

# 3. Ordonnée à l'origine β₀ = Ȳ - β₁·X̄
beta_0 = mean_y - beta_1 * mean_x

# 4. Prédiction
prix = beta_0 + beta_1 * 100_000     # pour 100 000 km
```

!!! tip "Vectorisé avec NumPy"
    Version équivalente qui exploite les tableaux :

    ```python
    import numpy as np
    X, Y = data["km"].to_numpy(float), data["price"].to_numpy(float)

    beta_1 = np.sum((X - X.mean()) * (Y - Y.mean())) / np.sum((X - X.mean())**2)
    beta_0 = Y.mean() - beta_1 * X.mean()
    ```

**Avantages** : rapide, exact, aucune boucle d'apprentissage.

**Limite** : la formule fermée ne se généralise pas telle quelle à tous les modèles (réseaux de neurones, etc.). D'où la descente de gradient.

---

## <span class="h2">Partie 2 : la descente de gradient</span>

La descente de gradient **approche** le minimum de la MSE **par étapes itératives** : on regarde la pente de la fonction de coût, et on fait un petit pas dans la **direction opposée** (vers le bas).

!!! example "C'est le cœur du projet 42"
    Cette partie correspond exactement à la **partie obligatoire** du sujet `ft_linear_regression` de l'école 42 : entraîner un modèle pour prédire le prix d'une voiture à partir de son kilométrage, puis réutiliser les paramètres pour prédire.

### Étape 1 — Normaliser les données

Le kilométrage (jusqu'à 240 000) et le prix (quelques milliers) n'ont **pas la même échelle** : la descente serait instable. On normalise tout vers `[0, 1]` :

```python
def normalize(x):
    x_min, x_max = min(x), max(x)
    return np.array([(xi - x_min) / (x_max - x_min) for xi in x], dtype=float), x_min, x_max

x_norm, x_min, x_max = normalize(X)
y_norm, y_min, y_max = normalize(Y)
```

### Étape 2 — Boucle d'entraînement

À chaque itération on calcule les **gradients** (les dérivées partielles de la MSE par rapport à θ₀ et θ₁), puis on met à jour **simultanément** les deux paramètres :

```python
ITERATIONS    = 10_000
LEARNING_RATE = 0.01
n = len(x_norm)

theta0, theta1 = 0.0, 0.0          # paramètres initiaux

for _ in range(ITERATIONS):
    # Prédiction avec les paramètres courants
    y_pred = theta0 + theta1 * x_norm
    error  = y_pred - y_norm

    # Gradients de la MSE
    grad_theta0 = (1 / n) * error.sum()
    grad_theta1 = (1 / n) * (error * x_norm).sum()

    # Mise à jour simultanée (pas dans le sens inverse du gradient)
    theta0 -= LEARNING_RATE * grad_theta0
    theta1 -= LEARNING_RATE * grad_theta1
```

!!! danger "Mise à jour simultanée"
    Il faut calculer **les deux gradients à partir des mêmes prédictions**, puis appliquer les deux mises à jour. Si l'on modifie `theta0` avant de calculer `grad_theta1`, l'algorithme diverge.

### Étape 3 — Dénormaliser les paramètres

L'entraînement s'est fait sur des données normalisées `[0, 1]` : il faut **ramener θ₀ et θ₁ à l'échelle d'origine** avant de les utiliser pour prédire.

```python
# θ₁ : rapport des écarts (pente dans l'échelle d'origine)
theta1_final = theta1 * (y_max - y_min) / (x_max - x_min)

# θ₀ : ajustement pour retrouver l'ordonnée à l'origine
theta0_final = y_min + (y_max - y_min) * (theta0 - theta1 * x_min / (x_max - x_min))
```

Enfin on **sauvegarde** les paramètres pour les réutiliser plus tard :

```python
import json
json.dump({"theta0": theta0_final, "theta1": theta1_final}, open("thetas.json", "w"))
```

Résultat obtenu avec les données du sujet (10 000 itérations, taux 0,01) :

```json
{ "theta0": 8480.966554681116, "theta1": -0.021271757648460635 }
```

---

## <span class="h2">Prédiction</span>

Une fois le modèle entraîné, on prédit le prix d'une voiture à partir de son kilométrage :

```python
import json

with open("thetas.json") as f:
    thetas = json.load(f)
theta0, theta1 = thetas["theta0"], thetas["theta1"]

km = float(input("Kilométrage : "))       # ex. 150000
prix_estime = theta0 + theta1 * km

print(f"Prix estimé pour {km:,.0f} km : {prix_estime:,.2f} €")
```

!!! warning "Limite du modèle linéaire"
    Avec le modèle du projet, un kilométrage extrême peut donner un prix estimé **négatif** — le programme le détecte et affiche un avertissement : au-delà de certaines données, la droite n'est plus fiable.

---

## <span class="h2">Évaluer le modèle : MSE, MAE, R²</span>

Trois métriques mesurent la qualité de la régression :

| Métrique | Formule | Rôle | Idéal |
| -------- | ------- | ---- | ----- |
| **MSE** | `mean((y - y_pred)²)` | Moyenne des carrés des écarts | proche de 0 |
| **MAE** | `mean(abs(y - y_pred))` | Erreur moyenne, en € (même unité que les données) | proche de 0 |
| **R²** | `1 - SS_res / SS_tot` | Part de variance expliquée par le modèle | proche de 1 |

```python
import numpy as np

def mean_squared_error(y, y_pred):
    return ((y - y_pred) ** 2).mean()

def mean_absolute_error(y, y_pred):
    return np.abs(y - y_pred).mean()

def r2_score(y, y_pred):
    ss_res = ((y - y_pred) ** 2).sum()
    ss_tot = ((y - y.mean()) ** 2).sum()
    return 1 - (ss_res / ss_tot)

y_pred = theta0 + theta1 * X
print(f"MSE = {mean_squared_error(Y, y_pred):,.2f}")
print(f"MAE = {mean_absolute_error(Y, y_pred):,.2f}")
print(f"R²  = {r2_score(Y, y_pred):.4f}")
```

Résultats réels du projet :

```text
MSE = 445 729,27
MAE = 556,48
R²  = 0,7329
```

!!! success "Interprétation"
    Avec **R² = 0,73**, le kilométrage explique **73 % de la variance des prix** : la relation est réelle mais pas parfaitement linéaire (d'autres facteurs comptent).

---

## <span class="h2">Visualiser avec Matplotlib</span>

Le meilleur moyen de valider un modèle : **regarder la droite** par-dessus les données.

```python
import matplotlib.pyplot as plt

# Nuage de points des données réelles
plt.scatter(X, Y, color="blue", label="Prix réels")

# Droite de régression
plt.plot(X, theta0 + theta1 * X, color="red", label="Régression")

plt.title("Évolution du prix en fonction des kilomètres parcourus")
plt.xlabel("Kilomètres parcourus")
plt.ylabel("Prix du véhicule (€)")
plt.grid(True)
plt.legend()
plt.savefig("regression_lineaire.png")
```

!!! note "Le rendu visuel"
    Si la droite traverse la forme du nuage de points et que les écarts semblent aléatoires autour d'elle, le modèle est cohérent. Si les points sont en courbe (parabole, exponentielle…), une régression simple ne suffit pas.

---

## <span class="h2">Comparaison des deux méthodes</span>

| Aspect | Moindres carrés (OLS) | Descente de gradient |
| ------ | --------------------- | -------------------- |
| **Résolution** | Analytique (formule fermée) | Itérative (10 000 étapes) |
| **Normalisation** | Aucune | Min-max vers `[0, 1]` |
| **Persistance des paramètres** | Aucune (calcul à la volée) | `thetas.json` |
| **Métriques** | Visuel uniquement | MSE, MAE, R² |
| **Vitesse** | Immédiate | Dépend des itérations |
| **Généralisation** | Formule dédiée aux moindres carrés | S'applique à d'autres modèles (régressions complexes, réseaux de neurones) |

---

## <span class="h2">Pour aller plus loin</span>

- **[Scikit-learn](scikit-learn.md)** : la bibliothèque qui implémente `LinearRegression`, `train_test_split` et `cross_val_score` — maintenant que tu sais les coder, tu peux les utiliser sans mystère.
- **Régression multiple** : plusieurs variables explicatives (km, âge, motorisation…) → l'équation devient `ŷ = θ₀ + θ₁x₁ + θ₂x₂ + …` et le raisonnement reste le même.
- **Régularisation** : Ridge / Lasso pour limiter le surapprentissage.
- Le projet complet — la **fiche 42** de la descente de gradient, avec son architecture et ses résultats chiffrés : [**Linear Regression**](../../projets/linear-regression.md).

---

<div class="grid cards" markdown>

-   :octicons-arrow-right-24: **[Retour au sommaire →](index.md)**

    Tu maîtrises la régression linéaire de zéro : moindres carrés, descente de gradient, évaluation et visualisation.

-   :material-rocket-launch: **[Voir la fiche projet →](../../projets/linear-regression.md)**

    Contexte 42, architecture, résultats chiffrés et lien GitHub.

</div>