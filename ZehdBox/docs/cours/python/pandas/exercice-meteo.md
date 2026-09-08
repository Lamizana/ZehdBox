---
title: Exercices Météo
description: Exercices pratiques pour maîtriser Pandas avec des données météo réelles.
---

# <span class="h1">Exercices Météo avec Pandas</span>

<p class="intro">
    Exercices pour maîtriser <strong>Pandas</strong> avec des données météo.
</p>

---

## <span class="h2">Introduction</span>

À travers une série d'exercices, vous apprendrez à **manipuler** des données météo, **filtrer** des DataFrames, **calculer** des statistiques et **intégrer** une API temps réel.

???- abstract "Note sur l'organisation"

    - **Flexibilité** : Les exercices peuvent être réalisés indépendamment ou à la suite dans un seul et même script.
    - **Indices** : Si vous bloquez, des blocs d'indices sont là pour vous guider sans vous donner la réponse immédiatement.
    - **Solutions** : Elles utilisent les meilleures pratiques de Pandas.

!!! warning "Conseil pédagogique"
    Pour progresser, **ESSAYEZ PAR VOUS-MÊME** avant de dévoiler les solutions.
    
    L'erreur fait partie de l'apprentissage !

---

## <span class="h2">Prérequis</span>

- Python 3.8+
- Pandas installé (`pip install pandas`)
- Requests installé (`pip install requests`)

***ou***

Essayer l'exercice directement sur:

[Ouvrir avec Basthon](https://basthon.fr/){ target="_blank" rel="noopener" .md-button }

---

## <span class="h2">Exercice 1: Création du DataFrame Météo</span>

### Énoncé

Créez un DataFrame Pandas avec les données météo suivantes:

| jour | temperature | humidite | condition |
|------|-------------|----------|-----------|
| Lundi | 15 | 65 | Nuageux |
| Mardi | 18 | 55 | Ensoleillé |
| Mercredi | 22 | 45 | Ensoleillé |
| Jeudi | 19 | 60 | Nuageux |
| Vendredi | 17 | 70 | Pluie |

### Résultat attendu

```
       jour  temperature  humidite  condition
0     Lundi           15         65    Nuageux
1    Mardi           18         55  Ensoleillé
2  Mercredi           22         45  Ensoleillé
3    Jeudi           19         60    Nuageux
4  Vendredi           17         70      Pluie
```

???- note "Indices"
    - Utilisez `pd.DataFrame()` avec un dictionnaire
    - Les clés du dictionnaire deviennent les noms de colonnes

    ### Résumé: Création de DataFrame

    | Méthode | Description |
    |---------|-------------|
    | `pd.DataFrame(dict)` | DataFrame à partir d'un dictionnaire |
    | `pd.DataFrame(liste)` | DataFrame à partir d'une liste de dicts |
    | `pd.read_csv('fichier.csv')` | Charger depuis un fichier |

???- tip "Solution"
    ```python
    import pandas as pd

    # Methode 1: avec un dictionnaire
    data = {
        'jour': ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
        'temperature': [15, 18, 22, 19, 17],
        'humidite': [65, 55, 45, 60, 70],
        'condition': ['Nuageux', 'Ensoleillé', 'Ensoleillé', 'Nuageux', 'Pluie']
    }

    meteo = pd.DataFrame(data)
    print(meteo)
    ```

---

## <span class="h2">Exercice 2: Accéder aux Données</span>

### Énoncé

À partir du DataFrame créé précédemment, affichez:

1. La colonne `temperature` uniquement
2. Les colonnes `jour` et `condition`
3. La première ligne (Lundi)

### Résultat attendu

```
1. Températures:
0    15
1    18
2    22
3    19
4    17
Name: temperature, dtype: int64

2. Jour et condition:
       jour  condition
0     Lundi    Nuageux
1    Mardi  Ensoleillé
2  Mercredi  Ensoleillé
3    Jeudi    Nuageux
4  Vendredi      Pluie

3. Première ligne:
jour          Lundi
temperature        15
humidite          65
condition      Nuageux
Name: 0, dtype: object
```

???- note "Indices"
    - Pour une colonne: `df['nom_colonne']`
    - Pour plusieurs colonnes: `df[['col1', 'col2']]`
    - Pour une ligne: `df.loc[index]` ou `df.iloc[position]`

    ### Résumé: Accès aux données

    | Méthode | Description |
    |---------|-------------|
    | `df['colonne']` | Une colonne (Series) |
    | `df[['col1', 'col2']]` | Plusieurs colonnes (DataFrame) |
    | `df.loc[index]` | Ligne par index |
    | `df.iloc[position]` | Ligne par position |

???- tip "Solution"
    ```python
    # 1. Une colonne
    print("1. Températures:")
    print(meteo['temperature'])

    # 2. Plusieurs colonnes
    print("\n2. Jour et condition:")
    print(meteo[['jour', 'condition']])

    # 3. Première ligne
    print("\n3. Première ligne:")
    print(meteo.loc[0])
    ```

---

## <span class="h2">Exercice 3: Statistiques</span>

### Énoncé

Calculez les statistiques suivantes sur le DataFrame:

1. La température moyenne
2. La température maximale et minimale
3. L'écart-type des températures

### Résultat attendu

```
Température moyenne: 18.2°C
Température max: 22°C
Température min: 15°C
Écart-type: 2.48
```

???- note "Indices"
    - Utilisez les méthodes sur la colonne: `.mean()`, `.max()`, `.min()`, `.std()`

    ### Résumé: Statistiques

    | Fonction | Description |
    |----------|-------------|
    | `df['col'].mean()` | Moyenne |
    | `df['col'].max()` | Maximum |
    | `df['col'].min()` | Minimum |
    | `df['col'].std()` | Écart-type |
    | `df['col'].median()` | Médiane |

???- tip "Solution"
    ```python
    print(f"Température moyenne: {meteo['temperature'].mean():.1f}°C")
    print(f"Température max: {meteo['temperature'].max()}°C")
    print(f"Température min: {meteo['temperature'].min()}°C")
    print(f"Écart-type: {meteo['temperature'].std():.2f}")
    ```

---

## <span class="h2">Exercice 4: Filtrer les Données</span>

### Énoncé

Filtrez le DataFrame pour obtenir:

1. Les jours ensoleillés uniquement
2. Les jours où la température est supérieure à 18°C
3. Les jours nuageux ET avec une humidité supérieure à 60%

### Résultat attendu

```
1. Jours ensoleillés:
       jour  temperature  humidite  condition
1    Mardi           18         55  Ensoleillé
2  Mercredi           22         45  Ensoleillé

2. Jours chauds (>18°C):
       jour  temperature  humidite  condition
1    Mardi           18         55  Ensoleillé
2  Mercredi           22         45  Ensoleillé
3    Jeudi           19         60    Nuageux

3. Nuageux et humide:
       jour  temperature  humidite  condition
3    Jeudi           19         60    Nuageux
4  Vendredi           17         70      Pluie
```

???- note "Indices"
    - Filtrage simple: `df[df['colonne'] == valeur]`
    - Comparaison: `df[df['colonne'] > valeur]`
    - Plusieurs conditions: `df[(condition1) & (condition2)]`

    ### Résumé: Filtrage

    | Méthode | Description |
    |---------|-------------|
    | `df[df['col'] == x]` | Égal à x |
    | `df[df['col'] > x]` | Supérieur à x |
    | `df[df['col'] < x]` | Inférieur à x |
    | `df[(c1) & (c2)]` | ET logique |
    | `df[(c1) \| (c2)]` | OU logique |

???- tip "Solution"
    ```python
    # 1. Jours ensoleillés
    print("1. Jours ensoleillés:")
    print(meteo[meteo['condition'] == 'Ensoleillé'])

    # 2. Température > 18
    print("\n2. Jours chauds (>18°C):")
    print(meteo[meteo['temperature'] > 18])

    # 3. Nuageux ET humidite > 60
    print("\n3. Nuageux et humide:")
    print(meteo[(meteo['condition'] == 'Nuageux') & (meteo['humidite'] > 60)])
    ```

---

## <span class="h2">Exercice 5: Trier et Ajouter des Colonnes</span>

### Énoncé

1. Triez le DataFrame par température décroissante
2. Ajoutez une colonne `temperature_f` avec la température en Fahrenheit (formula: C × 9/5 + 32)
3. Triez par condition alphabétique

### Résultat attendu

```
1. Trié par température (décroissant):
       jour  temperature  humidite  condition
2  Mercredi           22         45  Ensoleillé
3    Jeudi           19         60    Nuageux
1    Mardi           18         55  Ensoleillé
4  Vendredi           17         70      Pluie
0     Lundi           15         65    Nuageux

2. Avec Fahrenheit:
       jour  temperature  humidite  condition  temperature_f
0     Lundi           15         65    Nuageux            59.0
1    Mardi           18         55  Ensoleillé            64.4
2  Mercredi           22         45  Ensoleillé            71.6
3    Jeudi           19         60    Nuageux            66.2
4  Vendredi           17         70      Pluie            62.6
```

???- note "Indices"
    - Trier: `df.sort_values('colonne', ascending=False)`
    - Ajouter colonne: `df['nouvelle_colonne'] = valeurs`
    - Appliquer une fonction: `df['col'].apply(fonction)`

    ### Résumé: Trier et ajouter

    | Méthode | Description |
    |---------|-------------|
    | `df.sort_values('col')` | Trier croissant |
    | `df.sort_values('col', ascending=False)` | Trier décroissant |
    | `df['col_calculée'] = ...` | Ajouter colonne |
    | `df.apply(lambda x: ...)` | Appliquer fonction |

???- tip "Solution"
    ```python
    # 1. Trier par température décroissant
    print("1. Trié par température:")
    print(meteo.sort_values('temperature', ascending=False))

    # 2. Ajouter colonne Fahrenheit
    meteo['temperature_f'] = meteo['temperature'] * 9/5 + 32
    print("\n2. Avec Fahrenheit:")
    print(meteo)
    ```

---

## <span class="h2">Exercice 6: API Open-Meteo</span>

### Énoncé

Récupérez la météo actuelle d'Angoulême (lat=45.65, lon=0.15) en utilisant l'API Open-Meteo et affichez:

1. La température actuelle
2. L'humidité actuelle

### URL de l'API

```
https://api.open-meteo.com/v1/forecast?latitude=45.65&longitude=0.15&current=temperature_2m,relative_humidity_2m
```

### Résultat attendu

```
Température à Angoulême: [valeur]°C
Humidité à Angoulême: [valeur]%
```

???- note "Indices"
    - Utilisez `requests.get(url)` pour faire la requête
    - Utilisez `.json()` pour convertir la réponse
    - Les données sont dans `donnees['current']['temperature_2m']`

    ### Résumé: Requêtes API

    | Méthode | Description |
    |---------|-------------|
    | `requests.get(url)` | Requête GET |
    | `reponse.json()` | Convertir en JSON |
    | `donnees['cle']` | Accéder aux données |

???- tip "Solution"
    ```python
    import requests

    lat = 45.65  # Angoulême
    lon = 0.15

    url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m,relative_humidity_2m"

    reponse = requests.get(url)
    donnees = reponse.json()

    temp = donnees['current']['temperature_2m']
    humidite = donnees['current']['relative_humidity_2m']

    print(f"Température à Angoulême: {temp}°C")
    print(f"Humidité à Angoulême: {humidite}%")
    ```

---

## <span class="h2">Exercice 7: API vers DataFrame</span>

### Énoncé

Créez un DataFrame avec les données de l'API Open-Meteo pour Angoulême.

Le DataFrame doit contenir:
- ville
- temperature
- humidite
- vent

### Résultat attendu

```
      ville  temperature  humidite    vent
0  Angoulême         12.5         75    15.2
```

???- note "Indices"
    - Récupérez d'abord les données avec l'API
    - Créez un dictionnaire avec les valeurs
    - Transformez en DataFrame avec `pd.DataFrame()`

    ### URL complète
    ```
    https://api.open-meteo.com/v1/forecast?latitude=45.65&longitude=0.15&current=temperature_2m,relative_humidity_2m,wind_speed_10m
    ```

???- tip "Solution"
    ```python
    import requests
    import pandas as pd

    lat = 45.65
    lon = 0.15

    url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m"

    reponse = requests.get(url)
    donnees = reponse.json()
    actuel = donnees['current']

    data = {
        'ville': ['Angoulême'],
        'temperature': [actuel['temperature_2m']],
        'humidite': [actuel['relative_humidity_2m']],
        'vent': [actuel['wind_speed_10m']]
    }

    meteo = pd.DataFrame(data)
    print(meteo)
    ```

---

## <span class="h2">Exercice 8: Projet Final - Analyseur Météo</span>

### Énoncé

Créez une classe `AnalyseurMeteo` qui:

1. Prend en paramètres: ville, latitude, longitude
2. A une méthode `recuperer()` qui fetch les données de l'API
3. A une méthode `afficher()` qui affiche un résumé
4. A une méthode `statistiques()` qui affiche les statistiques

### Résultat attendu

```
==================================================
   Météo à Angoulême
==================================================
      ville  temperature  humidite    vent
0  Angoulême         12.5         75    15.2
==================================================

=== Analyse ===
Température: 12.5°C
Humidité: 75%
```

???- note "Indices"
    - Créez une classe avec `class NomClasse:`
    - Utilisez `__init__` pour initialiser les attributs
    - Appelez l'API dans une méthode séparée
    - Utilisez `self` pour accéder aux attributs

    ### Résumé: Programmation orientée objet

    | Élément | Description |
    |---------|-------------|
    | `class Classe:` | Définir une classe |
    | `def __init__(self, params):` | Constructeur |
    | `self.attribut = valeur` | Attribut d'instance |
    | `self.methode()` | Appeler une méthode |

???- tip "Solution"
    ```python
    import requests
    import pandas as pd

    class AnalyseurMeteo:
        def __init__(self, ville, lat, lon):
            self.ville = ville
            self.lat = lat
            self.lon = lon
            self.data = None
        
        def recuperer(self):
            url = f"https://api.open-meteo.com/v1/forecast?latitude={self.lat}&longitude={self.lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m"
            reponse = requests.get(url)
            actuel = reponse.json()['current']
            
            self.data = pd.DataFrame({
                'ville': [self.ville],
                'temperature': [actuel['temperature_2m']],
                'humidite': [actuel['relative_humidity_2m']],
                'vent': [actuel['wind_speed_10m']]
            })
        
        def afficher(self):
            if self.data is None:
                self.recuperer()
            print(f"\n{'='*50}")
            print(f"   Météo à {self.ville}")
            print(f"{'='*50}")
            print(self.data.to_string(index=False))
            print(f"{'='*50}")
        
        def statistiques(self):
            if self.data is None:
                self.recuperer()
            print("\n=== Analyse ===")
            print(f"Température: {self.data['temperature'][0]}°C")
            print(f"Humidité: {self.data['humidite'][0]}%")

    # Utilisation
    meteo = AnalyseurMeteo("Angoulême", 45.65, 0.15)
    meteo.afficher()
    meteo.statistiques()
    ```

---

## <span class="h2">Correction</span>

Vous pouvez retrouver toutes les solutions dans les blocs "Solution" de chaque exercice ci-dessus.

!!! tip "Conseil"
    Essayez de faire les exercices dans l'ordre, ils sont conçus pour construire progressivement vos connaissances.
