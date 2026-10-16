---
title: Régression logistique - le Choixpeau de Poudlard
description: "Tutoriel régression logistique multiclasse en Python : sigmoïde, log-loss, stratégie one-vs-all, standardisation et descente de gradient codés de zéro - avec le code du projet 42 DSLR."
tags:
  - cours
  - python
  - machine-learning
  - intelligence-artificielle
  - datascience
  - classification
---

# <span class="h1">Régression logistique</span>

<p class="intro">
    Ton premier <strong>classifieur</strong> de machine learning, écrit de zéro en Python : prédire la maison d'un élève de Poudlard.
</p>

---

## <span class="h2">Introduction</span>

La **régression linéaire** prédit une **valeur** (un prix, une note). La **régression logistique** prédit une **catégorie** : ici, la maison d'un élève parmi quatre.

```console
Gryffondor · Poufsouffle · Serdaigle · Serpentard
```

Le principe tient en deux idées :

1. calculer un **score** linéaire `z = θ₀ + θ₁x₁ + θ₂x₂ + …`, exactement comme une régression ;
2. le passer dans une **sigmoïde** qui compresse ce score entre `0` et `1` → une **probabilité**.

!!! info "Un classifieur, pas une régression"
    Malgré son nom, la régression logistique est un **algorithme de classification**. Le « logistique » vient de la fonction logistique (la sigmoïde) qui modélise la probabilité d'appartenir à une classe.

> **Exemple du projet** : prédire la maison d'un élève à partir de ses notes en Botanique, Défense contre les forces du mal, Astronomie, Sortilèges et Vol.

!!! warning "La règle du jeu"
    L'objectif est de **comprendre** l'algorithme : la descente de gradient et le one-vs-all sont codés à la main. Seule l'évaluation finale utilise Scikit-Learn.

---

## <span class="h2">Prérequis & installation</span>

Tout le code utilise **NumPy**, **Pandas**, **Matplotlib** et **Seaborn** :

```bash
python3 -m venv venv
source venv/bin/activate
pip install numpy pandas matplotlib seaborn scikit-learn
```

Les jeux de données du projet :

- `datasets/dataset_train.csv` : les élèves **étiquetés** (avec leur maison) pour l'entraînement ;
- `datasets/dataset_test.csv` : les élèves à **classer**.

---

## <span class="h2">Partie 1 : explorer les données</span>

Avant de modéliser, on **regarde** les données. Le sujet impose de réécrire soi-même les statistiques descriptives : `mean`, `std` et `percentile` ne peuvent pas venir de pandas.

```python
import math

def our_mean(values):
    return sum(values) / len(values)

def our_variance(values):
    m = our_mean(values)
    return sum((x - m) ** 2 for x in values) / len(values)

def our_std(values):
    return math.sqrt(our_variance(values))

def our_percentile(values, p):
    values = sorted(values)
    n = len(values)
    k = (n - 1) * p
    f, c = math.floor(k), math.ceil(k)
    if f == c:
        return values[int(k)]
    return values[f] * (c - k) + values[c] * (k - f)
```

!!! tip "Le percentile en clair"
    `k = (n − 1) × p` situe la position du percentile dans la liste triée. S'il tombe entre deux valeurs, on **interpole** linéairement entre elles — c'est exactement ce que fait `numpy.percentile` (méthode linéaire).

`describe.py` assemble ces briques en un tableau : `count`, `mean`, `std`, `min`, `25 %`, `50 %`, `75 %`, `max` pour chaque feature numérique.

---

## <span class="h2">Partie 2 : visualiser pour choisir</span>

La visualisation n'est pas décorative : elle **répond à des questions** et guide la modélisation.

### Histogramme : une répartition homogène ?

Quel cours est réparti de façon **uniforme** entre les maisons ?

```python
import matplotlib.pyplot as plt

for house in df["Hogwarts House"].unique():
    subset = df[df["Hogwarts House"] == house][course].dropna()
    plt.hist(subset, bins=20, alpha=0.5, label=house)

plt.title(f"Distribution des notes en {course} par maison")
plt.legend(title="Maison")
plt.savefig("histogram.png")
```

Un cours dont les histogrammes des quatre maisons se **superposent** est peu informatif ; un cours où ils se **séparent** est discriminant.

### Nuage de points : deux features similaires ?

```python
import seaborn as sns

sns.scatterplot(
    data=df,
    x="Defense Against the Dark Arts",
    y="Astronomy",
    hue="Hogwarts House",
    alpha=0.7,
)
```

### Pair plot : quelles features pour le modèle ?

```python
sns.pairplot(df, hue="Hogwarts House", palette={
    "Ravenclaw": "yellow", "Gryffindor": "red",
    "Slytherin": "green", "Hufflepuff": "blue",
})
plt.savefig("pair_plot.png")
```

!!! success "Le choix des features"
    Le pair plot révèle les cours qui **séparent le mieux** les maisons. Le projet retient :

    ```python
    features = ["Herbology", "Defense Against the Dark Arts",
                "Astronomy", "Charms", "Flying"]
    ```

---

## <span class="h2">Partie 3 : la sigmoïde</span>

La sigmoïde transforme n'importe quel score en une **probabilité** entre `0` et `1` :

```console
σ(z) = 1 / (1 + e^(−z))
```

```python
import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))
```

- `z` très négatif → `σ(z) ≈ 0`
- `z = 0` → `σ(z) = 0,5`
- `z` très positif → `σ(z) ≈ 1`

On lit la sortie comme : « probabilité que cet élève appartienne à la classe ».

---

## <span class="h2">Partie 4 : la fonction de coût</span>

Pour une régression logistique, la MSE d'une régression linéaire n'est pas adaptée (la surface devient non convexe). On utilise l'**entropie croisée** (log-loss) :

```console
J(θ) = −(1/m) · Σ [ yᵢ·log(hᵢ) + (1 − yᵢ)·log(1 − hᵢ) ]
```

avec `hᵢ = σ(Xᵢ · θ)`.

```python
h = sigmoid(X.dot(theta))
loss = -(1/m) * np.sum(y * np.log(h + 1e-15) + (1 - y) * np.log(1 - h + 1e-15))
```

!!! note "Le `+ 1e-15`"
    `log(0)` vaut `−∞`. Quand une probabilité prédite vaut exactement `0` ou `1`, on ajoute une **minuscule constante** pour éviter le calcul impossible.

Entraîner le modèle = **minimiser** cette fonction de coût.

---

## <span class="h2">Partie 5 : one-vs-all pour le multiclasse</span>

Une régression logistique est **binaire**. Pour quatre maisons, on entraîne **un modèle par maison**, chacun répondant à « cette maison, ou les trois autres » :

```python
def train_one_vs_all(X, y, labels, alpha=0.1, iterations=5000):
    all_theta = {}
    for label in labels:
        y_binary = (y == label).astype(int)   # 1 si cette maison, 0 sinon
        all_theta[label] = gradient_descent(X, y_binary, alpha, iterations)
    return all_theta
```

!!! example "Pourquoi ça marche ?"
    Chaque modèle apprend **une frontière** entre sa maison et le reste. En combinant les quatre, on obtient un découpage complet de l'espace — sans complexifier l'algorithme.

---

## <span class="h2">Partie 6 : la descente de gradient</span>

### Standardiser d'abord

Les notes n'ont pas la même échelle : sans centrage-réduction, la convergence est lente. On ramène chaque feature à une moyenne `0` et un écart-type `1`, puis on ajoute la colonne de **biais**.

```python
X = df[features].fillna(0)
X = (X - X.mean()) / X.std()   # centrage-réduction
X.insert(0, "bias", 1)         # θ₀
```

### La boucle d'entraînement

À chaque itération, on calcule la prédiction, le gradient, puis on fait un pas **dans le sens opposé** :

```python
def gradient_descent(X, y, alpha=0.1, iterations=5000):
    m, n = X.shape
    theta = np.zeros(n)
    for _ in range(iterations):
        h = sigmoid(X.dot(theta))            # probabilités prédites
        gradient = (1 / m) * X.T.dot(h - y)  # gradient de la log-loss
        theta -= alpha * gradient            # pas dans le sens opposé
    return theta
```

!!! tip "La même recette qu'en régression linéaire"
    Seule la fonction d'activation change : la sigmoïde remplace l'identité. Le gradient a exactement la même forme `(1/m)·Xᵀ·(h − y)`.

### Sauvegarder les poids

L'entraînement écrit un fichier JSON réutilisé par la prédiction :

```python
import json

weights = train_one_vs_all(X.values, y.values, y.unique())
json.dump(weights, open("weights.json", "w"))
```

---

## <span class="h2">Prédiction</span>

Pour chaque élève, on calcule les **quatre** probabilités et on retient la plus grande :

```python
with open("weights.json") as f:
    thetas = json.load(f)

X.insert(0, "bias", 1)
predictions = []
for x in X.values:
    scores = {house: sigmoid(np.dot(x, theta)) for house, theta in thetas.items()}
    predictions.append(max(scores, key=scores.get))   # argmax
```

Enfin, `logreg_predict.py` écrit le résultat au format attendu :

```csv
Index,Hogwarts House
0,Gryffindor
1,Hufflepuff
2,Ravenclaw
3,Hufflepuff
4,Slytherin
```

---

## <span class="h2">Bonus : la descente de gradient stochastique</span>

La descente « par lots » (batch) calcule le gradient sur **tous** les exemples à chaque pas. La **SGD** le calcule sur **un seul exemple** à la fois : plus rapide, mais plus bruitée.

```python
def stochastic_gradient_descent(X, y, alpha=0.01, iterations=100):
    m, n = X.shape
    theta = np.zeros(n)
    for epoch in range(iterations):
        indices = np.arange(m)
        np.random.shuffle(indices)         # on mélange à chaque epoch
        for i in indices:
            xi, yi = X[i], y[i]
            hi = sigmoid(np.dot(xi, theta))
            theta -= alpha * (hi - yi) * xi  # mise à jour immédiate
    return theta
```

!!! info "Batch vs stochastique"
    **Batch** : un pas précis par epoch, mais chaque pas coûte cher. **Stochastique** : beaucoup de pas rapides — la trajectoire oscille autour du minimum au lieu de le viser droit.

---

## <span class="h2">Évaluer le modèle</span>

Le sujet fixe la barre : **98 %** de précision. On compare le modèle maison à la référence Scikit-Learn :

```python
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

clf = LogisticRegression(multi_class="ovr", solver="lbfgs", max_iter=10_000)
clf.fit(X_scaled, y)

print(f"Modèle maison : {accuracy_score(y, predictions):.4f}")
print(f"Scikit-Learn  : {accuracy_score(y, clf.predict(X_scaled)):.4f}")
```

| Métrique | Rôle | Idéal |
| -------- | ---- | ----- |
| **Accuracy** | Part de bonnes prédictions | proche de 1 |
| **Log-loss** | Erreur sur les probabilités (pénalise la confiance à tort) | proche de 0 |

---

## <span class="h2">Récapitulatif</span>

| Étape | Outil | Idée clé |
| ----- | ----- | -------- |
| Explorer | `describe.py` | Statistiques réécrites à la main |
| Visualiser | histogramme / scatter / pair plot | **Choisir** les features |
| Modéliser | sigmoïde + log-loss | Un score devient une **probabilité** |
| Multi-classes | one-vs-all | Un modèle binaire **par maison** |
| Optimiser | descente de gradient | Un pas **opposé** au gradient |
| Prédire | `argmax` | La probabilité la plus haute gagne |
| Évaluer | `accuracy_score` | Comparer à la référence Scikit-Learn |

---

## <span class="h2">Pour aller plus loin</span>

- **[Scikit-learn](../cours/python/scikit-learn.md)** : la bibliothèque qui implémente `LogisticRegression` — maintenant que tu sais coder la sigmoïde et le one-vs-all, tu la lis sans mystère.
- **[Régression linéaire](linear-regression.md)** : le projet précédent, pour revoir la descente de gradient sur un problème de **régression**.
- **Régularisation** : `Ridge` / `Lasso`, et le paramètre `C` de `LogisticRegression` pour lutter contre le surapprentissage.
- La fiche projet complète, avec son architecture et ses résultats : [**DSLR**](../projets/dslr.md).

---

<div class="grid cards" markdown>

-   :octicons-arrow-right-24: **[Retour au sommaire →](index.md)**

    Tu maîtrises la régression logistique de zéro : sigmoïde, one-vs-all, descente de gradient et évaluation.

-   :material-rocket-launch: **[Voir la fiche projet →](../projets/dslr.md)**

    Contexte 42, pipeline complet, résultats et lien GitHub.

</div>
