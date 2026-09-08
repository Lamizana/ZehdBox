---
title: Projet - Analyse de Dés
description: Projet pratique pour maîtriser les fondamentaux de NumPy à travers l'analyse de dés.
---

# <span class="h1">Analyseur de Dés</span>

<p class="intro">
    Création d'un <strong>analyseur de dés</strong> pour maîtriser les fondamentaux de NumPy.
</p>

---

## <span class="h2">Introduction</span>

À travers une série d'exercices, vous apprendrez à **simuler** des lancers, **calculer** des **statistiques** et **analyser** des probabilités.

???- abstract "Note sur l'organisation"

    - **Flexibilité** : Les exercices peuvent être réalisés indépendamment ou à la suite dans un seul et même script.
    - **Indices** : Si vous bloquez, des blocs d'indices sont là pour vous guider sans vous donner la réponse immédiatement.
    - **Solutions** : Elles utilisent les meilleures pratiques (les plus communes) de NumPy pour vous montrer la voie la plus optimisée.

!!! warning "Conseil pédagogique"
    Pour progresser, **JOUEZ LE JEUX** : essayez par vous-même avant de dévoiler les solutions.
    
    L'erreur fait partie de l'apprentissage !

---

## <span class="h2">Prérequis</span>

- Python 3.8+
- NumPy installé (`pip install numpy`)

***ou***

Essayer l'exercice directement sur:

[Ouvrir avec Basthon](https://basthon.fr/){ target="_blank" rel="noopener" .md-button }

---

## <span class="h2">Exercice 1: Création du Dé</span>

### Énoncé

Créez un tableau NumPy représentant les faces d'un dé à 6 faces.

### Résultat attendu

```bash
[1 2 3 4 5 6]
```

??? - note "Indices"
    - Utilisez `np.array()` pour créer un tableau à partir d'une liste
    - ou `np.arange()` pour créer une suite arithmétique

    ### Résumé: Création de tableaux

    | Méthode | Description | Exemple |
    |---------|-------------|---------|
    | `np.array([...])` | Tableau à partir d'une liste | `np.array([1,2,3])` |
    | `np.arange(start, stop, step)` | Suite arithmétique | `np.arange(1, 7)` |
    | `np.array(list(range(...)))` | Convertir une liste | `np.array(range(1,7))` |


??? - tip "Solution"
    ```python
    import numpy as np

    # Methode 1: avec np.array
    faces = np.array([1, 2, 3, 4, 5, 6])

    # Methode 2: avec np.arange
    faces = np.arange(1, 7)

    print(faces)
    ```
---

## <span class="h2">Exercice 2: Lancer le Dé</span>

### Énoncé

Simulez un lancer de dé aléatoire, puis *lancez-le 3 fois*.

Lors des 3 lancers, vous devez afficher:

- le nombre de lancé effectuer
- les résultats de chaque lancé

### Résultat attendu (exemple)

```bash
Vous avez lancé: 3
Résultats: [6 5 3]
```

???+ warning "Contraintes"
    - Utilisez `np.random.choice()`

???- tip "Solution"
    ```python
    import numpy as np

    faces = np.array([1, 2, 3, 4, 5, 6])

    # Un seul lancer
    resultat = np.random.choice(faces)
    print(f"Vous avez lance: {resultat}")

    # Trois lancers
    lancers = np.random.choice(faces, size=3)
    print("Résultats:", lancers)
    ```

??? - note "Résumé: Nombres aléatoires"
    ```python
    np.random.choice(tableau)                           # 1 élément aléatoire
    np.random.choice(tableau, size=n)                   # n éléments
    np.random.choice(tableau, size=n, replace=True)     # Avec remise
    np.random.choice(tableau, size=n, replace=False)    # Sans remise
    ```

    !!! info "replace=True vs False"
        - **Avec remise**: Le même élément peut apparaître plusieurs fois
        - **Sans remise**: Chaque élément n'apparaît qu'une seule fois

---

## <span class="h2">Exercice 3: Statistiques de Base</span>

### Énoncé

Simulez 1000 lancers de dé et calculez:

- La `moyenne`
- La `médiane`
- L'`écart-type`

### Résultat attendu (exemple)

```python
Moyenne: 3.52
Mediane: 4.0
Ecart-type: 1.71
Min: 1, Max: 6
```

???- tip "Solution"
    ```python
    import numpy as np

    faces = np.array([1, 2, 3, 4, 5, 6])
    nb_lancers = 1000
    resultats = np.random.choice(faces, size=nb_lancers)

    print(f"Moyenne: {np.mean(resultats):.2f}")
    print(f"Mediane: {np.median(resultats):.2f}")
    print(f"Ecart-type: {np.std(resultats):.2f}")
    print(f"Min: {np.min(resultats)}, Max: {np.max(resultats)}")
    ```

---

## <span class="h2">Exercice 4: Compter les Occurrences</span>

### Énoncé

Comptez combien de fois chaque face apparaît sur 1000 lancers, puis calculez la fréquence en pourcentage.

### Résultat attendu (exemple)

```python
Face 1: 168 fois (16.80%)
Face 2: 162 fois (16.20%)
Face 3: 175 fois (17.50%)
Face 4: 161 fois (16.10%)
Face 5: 167 fois (16.70%)
Face 6: 167 fois (16.70%)
```

???- note "Indices"
    - Utilisez `np.bincount()` pour compter les occurrences

???- tip "Solution"
    ```python
    import numpy as np

    faces = np.array([1, 2, 3, 4, 5, 6])
    nb_lancers = 1000
    resultats = np.random.choice(faces, size=nb_lancers)

    # Compter les occurrences
    comptage = np.bincount(resultats)[1:]  # [1:] car pas de 0

    # Afficher
    for i, count in enumerate(comptage, 1):
        freq = count / nb_lancers * 100
        print(f"Face {i}: {count} fois ({freq:.2f}%)")
    ```

---

## <span class="h2">Exercice 5: Comparaison Théorie vs Simulation</span>

### Énoncé

Comparez les résultats après 100, 1000, 10000 et 100000 lancers. Observez comment les résultats se rapprochent de la théorie (16.67% par face).

### Question

Pourquoi les résultats se rapprochent-ils de 16.67% quand le nombre de lancers augmente?

???- tip "Solution"
    ```python
    import numpy as np

    faces = np.array([1, 2, 3, 4, 5, 6])

    print("=== Comparaison ===")
    for n in [100, 1000, 10000, 100000]:
        resultats = np.random.choice(faces, size=n)
        comptage = np.bincount(resultats)[1:]
        frequence = comptage / n * 100
        
        print(f"Apres {n:>6} lancers:")
        print(f"  Min: {min(frequence):.2f}% | Max: {max(frequence):.2f}%")
    ```

    Ce phénomène s'explique par ***la Loi des Grands Nombres***.
    
    ???- note "Voici les points clés à retenir"
        - **La Probabilité Théorique** : Pour un dé équilibré à 6 faces, chaque face a exactement 1 chance sur 6 de sortir, soit environ `16,67%`.

        - **Le Rôle du Hasard** : Sur un petit nombre de lancers (ex: 10 ou 100), le hasard crée des écarts importants. On peut obtenir trois "6" d'affilée par pure chance, ce qui fait bondir la fréquence à 30% ou plus.
        
        - **La Convergence** : Plus tu augmentes la taille de ton échantillon (le nombre de lancers `n`), plus les "anomalies" du hasard se compensent et se lissent.
        
        - **La Stabilité** : À partir de 100 000 lancers, la fréquence observée devient extrêmement stable et "converge" vers la valeur théorique.

---

## <span class="h2">Exercice 6: Classe AnalyseurDe</span>

### Énoncé

Créer une classe pour **simuler et analyser les lancers** d'un dé multidimensionnel.

Cette dernière permet de générer des lancers aléatoires, de stocker l'historique
et de calculer des statistiques descriptives ainsi que la distribution des faces.

Créez la classe `AnalyseurDe` avec les méthodes suivantes:

```python
class AnalyseurDe:
    """
    Une classe pour simuler et analyser les lancers d'un dé multidimensionnel.

    Cette classe permet de générer des lancers aléatoires, de stocker l'historique
    et de calculer des statistiques descriptives ainsi que la distribution des faces.
    """

    def __init__(self, nb_faces=6) -> int:
        """
        Initialise l'analyseur avec un nombre spécifique de faces.
        
        Args:
            nb_faces (int): Le nombre de faces du dé (par défaut 6).
        """

        [Code ici...]


    def lancer(self, nb_lancers=1):
        """
        Simule un ou plusieurs lancers de dé et les ajoute à l'historique.

        Args:
            nb_lancers (int): Nombre de lancers à effectuer.

        Returns:
            numpy.ndarray: Un tableau contenant les résultats des nouveaux lancers.
        """

        [Code ici...]


    def statistiques(self):
        """
        Calcule et affiche les statistiques de base de l'historique des lancers.
        Affiche la moyenne, la médiane, l'écart-type, le minimum et le maximum.
        """

        [Code ici...]


    def distribution(self):
        """
        Affiche la distribution de fréquence de chaque face sous forme visuelle.
        
        Compare la fréquence réelle obtenue avec la probabilité théorique
        et affiche l'écart (diff) constaté.
        """

        [Code ici...]
    
```

### Résultat attendu (exemple)

```python
=== Analyse sur 1000 lancers ===
Moyenne: 3.4800
Mediane: 3.0000
Ecart-type: 1.7144
Min: 1, Max: 6

Distribution:
  Face 1: 16.70% (attendu: 16.67%, diff: +0.03%)
  Face 2: 16.20% (attendu: 16.67%, diff: -0.47%)
  Face 3: 17.50% (attendu: 16.67%, diff: +0.83%)
  Face 4: 16.10% (attendu: 16.67%, diff: -0.57%)
  Face 5: 16.70% (attendu: 16.67%, diff: +0.03%)
  Face 6: 16.70% (attendu: 16.67%, diff: +0.03%)
```

???- tip "Solution"
    ```python
    import numpy as np

    class AnalyseurDe:
        """
        Une classe pour simuler et analyser les lancers d'un dé multidimensionnel.
        
        Cette classe permet de générer des lancers aléatoires, de stocker l'historique
        et de calculer des statistiques descriptives ainsi que la distribution des faces.
        """

        def __init__(self, nb_faces=6):
            """
            Initialise l'analyseur avec un nombre spécifique de faces.

            Args:
                nb_faces (int): Le nombre de faces du dé (par défaut 6).
            """
            self.nb_faces = nb_faces
            self.faces = np.arange(1, nb_faces + 1)
            self.resultats = np.array([])

        def lancer(self, nb_lancers=1):
            """
            Simule un ou plusieurs lancers de dé et les ajoute à l'historique.

            Args:
                nb_lancers (int): Nombre de lancers à effectuer.

            Returns:
                numpy.ndarray: Un tableau contenant les résultats des nouveaux lancers.
            """
            nouveaux = np.random.choice(self.faces, size=nb_lancers)

            # On utilise concatenate pour ajouter les nouveaux résultats à l'historique
            self.resultats = np.concatenate([self.resultats, nouveaux])
            return nouveaux

        def statistiques(self):
            """
            Calcule et affiche les statistiques de base de l'historique des lancers.
            
            Affiche la moyenne, la médiane, l'écart-type, le minimum et le maximum.
            """
            n = len(self.resultats)
            if n == 0:
                print("Aucun lancer enregistré.")
                return

            print(f"=== Analyse sur {n} lancers ===")
            print(f"Moyenne: {np.mean(self.resultats):.4f}")
            print(f"Mediane: {np.median(self.resultats):.4f}")
            print(f"Ecart-type: {np.std(self.resultats):.4f}")
            print(f"Min: {np.min(self.resultats)}, Max: {np.max(self.resultats)}")

        def distribution(self):
            """
            Affiche la distribution de fréquence de chaque face sous forme visuelle.
            
            Compare la fréquence réelle obtenue avec la probabilité théorique
            et affiche l'écart (diff) constaté.
            """
            n = len(self.resultats)
            if n == 0:
                print("Aucun lancer pour la distribution.")
                return

            # bincount compte les occurrences de chaque entier
            comptage = np.bincount(self.resultats.astype(int))[1:self.nb_faces+1]

            print("\nDistribution:")
            for i, count in enumerate(comptage, 1):
                freq = count / n * 100
                attendu = 100 / self.nb_faces
                diff = freq - attendu
                print(f"  Face {i}: {freq:5.2f}% (attendu: {attendu:.2f}%, diff: {diff:+.2f}%)")

    # --- Test du script ---
    if __name__ == "__main__":
        de = AnalyseurDe(6)
        de.lancer(1000)
        de.statistiques()
        de.distribution()  
    ```

---

## <span class="h2">Défis Bonus</span>

### Défi 1: Dés Pipés

Créez un dé pipé où la face 6 a 30% de chance de sortir.

```python
# Indice: utilisez le parametre p de np.random.choice
np.random.choice(faces, size=10, p=[...])  # p doit somme a 1
```

---

### Défi 2: Somme de 2 Dés

Simulez 2 dés et analysez la somme. Quelle somme est la plus fréquente?

```python
# Indice: lancez 2 dés deux fois et additionnez
de1 = np.random.choice(faces, size=10000)
de2 = np.random.choice(faces, size=10000)
somme = de1 + de2
```

---

### Défi 3: Suite Consécutive

Comptez combien de fois la suite "1, 2, 3" apparaît consécutivement dans vos résultats.

???- note "Indices"
    Utilisez une boucle ou la fonction `np.where`

---

### Défi 4: Jeu de Dés

Créez un jeu simple:

- **Lancez 2 dés**, si la somme est 7 vous gagnez, sinon vous perdez.

---

## <span class="h2">Corrigé Final</span>

Voici le code complet de tous les exercices:

```python
import numpy as np

# Exercice 1: Creation du de
faces = np.arange(1, 7)
print(faces)

# Exercice 2: Lancer
resultat = np.random.choice(faces)
print(f"Vous avez lance: {resultat}")

lancers = np.random.choice(faces, size=3)
print("Resultats:", lancers)

# Exercice 3: Statistiques
nb_lancers = 1000
resultats = np.random.choice(faces, size=nb_lancers)
print(f"Moyenne: {np.mean(resultats):.2f}")
print(f"Mediane: {np.median(resultats):.2f}")
print(f"Ecart-type: {np.std(resultats):.2f}")

# Exercice 4: Comptage
comptage = np.bincount(resultats)[1:]
print("Occurrences:", comptage)

# Exercice 7: Classe complete
class AnalyseurDe:
    def __init__(self, nb_faces=6):
        self.nb_faces = nb_faces
        self.faces = np.arange(1, nb_faces + 1)
        self.resultats = np.array([])
    
    def lancer(self, nb_lancers=1):
        nouveaux = np.random.choice(self.faces, size=nb_lancers)
        self.resultats = np.concatenate([self.resultats, nouveaux])
        return nouveaux
    
    def statistiques(self):
        n = len(self.resultats)
        print(f"Moyenne: {np.mean(self.resultats):.4f}")
        print(f"Mediane: {np.median(self.resultats):.4f}")
        print(f"Ecart-type: {np.std(self.resultats):.4f}")
    
    def distribution(self):
        n = len(self.resultats)
        comptage = np.bincount(self.resultats.astype(int))[1:self.nb_faces+1]
        for i, count in enumerate(comptage, 1):
            freq = count / n * 100
            print(f"Face {i}: {freq:.2f}%")

# Utilisation
de = AnalyseurDe(6)
de.lancer(1000)
de.statistiques()
de.distribution()
```

