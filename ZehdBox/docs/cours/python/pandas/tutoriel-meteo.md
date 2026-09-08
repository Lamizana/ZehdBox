---
title: Analyse Météo
description: Tutoriel complet pour analyser des données météo avec Pandas et l'API Open-Meteo.
---

# <span class="h1">Analyse Météo avec Pandas</span>

---

## <span class="h2">Introduction</span>

<em>Dans ce projet, nous allons créer un <strong>analyseur météo</strong> pour maîtriser les fondamentaux de Pandas. Nous allons analyser des données de température, humidité et conditions météo, puis passer à l'analyse en temps réel avec l'API Open-Meteo.</em>

---

## <span class="h2">Objectifs du Projet</span>

- Créer des DataFrames Pandas
- Manipuler colonnes, filtres, tris
- Calculer des statistiques
- Intégrer une API météo en temps réel
- Créer un analyseur complet

!!! info "Prérequis"
    Ce projet nécessite Pandas installé : `pip install pandas requests`

---

## <span class="h2">Niveau Débutant: Les Bases</span>

---

### Partie 1: Création du DataFrame

#### Création manuelle

```python
import pandas as pd
import numpy as np

# Données météo sur 7 jours
data = {
    'jour': ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
    'temperature': [15, 18, 22, 19, 17, 20, 21],
    'humidite': [65, 55, 45, 60, 70, 50, 48],
    'condition': ['Nuageux', 'Ensoleillé', 'Ensoleillé', 'Nuageux', 'Pluie', 'Ensoleillé', 'Ensoleillé']
}

meteo = pd.DataFrame(data)
print(meteo)
```

**Résultat:**
```
       jour  temperature  humidite  condition
0     Lundi           15         65    Nuageux
1    Mardi           18         55  Ensoleillé
2  Mercredi           22         45  Ensoleillé
3   Jeudi           19         60    Nuageux
4  Vendredi           17         70      Pluie
5    Samedi           20         50  Ensoleillé
6  Dimanche           21         48  Ensoleillé
```

---

### Résumé: Création de DataFrame

| Méthode | Description |
|---------|-------------|
| `pd.DataFrame(dict)` | DataFrame à partir d'un dictionnaire |
| `pd.read_csv('fichier.csv')` | Charger depuis un fichier CSV |
| `pd.read_excel('fichier.xlsx')` | Charger depuis Excel |
| `pd.read_json('fichier.json')` | Charger depuis JSON |

---

### Partie 2: Accéder aux Données

```python
# Accéder à une colonne
print("Températures:")
print(meteo['temperature'])

# Accéder à plusieurs colonnes
print("\nJour et condition:")
print(meteo[['jour', 'condition']])

# Accéder à une ligne par index
print("\nPremière ligne:")
print(meteo.loc[0])

# Accéder par position
print("\nTrois premières lignes:")
print(meteo.iloc[:3])
```

---

### Résumé: Accès aux données

| Méthode | Description |
|---------|-------------|
| `df['colonne']` | Une colonne |
| `df[['col1', 'col2']]` | Plusieurs colonnes |
| `df.loc[ligne]` | Ligne par index |
| `df.iloc[position]` | Ligne par position |
| `df.head(n)` | Les n premières lignes |
| `df.tail(n)` | Les n dernières lignes |

---

### Partie 3: Statistiques de Base

```python
print("=== Statistiques ===")
print(f"Température moyenne: {meteo['temperature'].mean():.1f}°C")
print(f"Température max: {meteo['temperature'].max()}°C")
print(f"Température min: {meteo['temperature'].min()}°C")
print(f"Écart-type: {meteo['temperature'].std():.1f}")
print(f"Médiane: {meteo['temperature'].median():.1f}°C")

# Statistiques globales
print("\n=== Résumé complet ===")
print(meteo.describe())
```

---

### Résumé: Statistiques

| Fonction | Description |
|----------|-------------|
| `df['col'].mean()` | Moyenne |
| `df['col'].max()` / `.min()` | Max / Min |
| `df['col'].std()` | Écart-type |
| `df['col'].median()` | Médiane |
| `df['col'].sum()` | Somme |
| `df.describe()` | Toutes les stats |
| `df.info()` | Infos sur le DataFrame |
| `df.shape` | Dimensions (lignes, colonnes) |

---

## <span class="h2">Niveau Intermédiaire: Analyse Avancée</span>

---

### Partie 4: Filtrer et Trier

```python
# Filtrer: jours ensoleillés
ensoleilles = meteo[meteo['condition'] == 'Ensoleillé']
print("Jours ensoleillés:")
print(ensoleilles)

# Filtrer: jours très chauds (> 20°C)
chauds = meteo[meteo['temperature'] > 20]
print("\nJours chauds (>20°C):")
print(chauds)

# Filtrer avec plusieurs conditions
chaud_et_ensoleille = meteo[(meteo['temperature'] > 18) & (meteo['condition'] == 'Ensoleillé')]
print("\nChauds et ensoleillés:")
print(chaud_et_ensoleille)

# Trier par température
print("\nTrié par température (décroissant):")
print(meteo.sort_values('temperature', ascending=False))
```

---

### Résumé: Filtrage

| Méthode | Description |
|---------|-------------|
| `df[df['col'] == valeur]` | Égal à |
| `df[df['col'] > valeur]` | Supérieur à |
| `df[(df['col1'] > x) & (df['col2'] < y)]` | ET logique |
| `df[(df['col1'] > x) \| (df['col2'] < y)]` | OU logique |
| `df.sort_values('col')` | Trier |
| `df.nlargest(n, 'col')` | Les n plus grands |
| `df.nsmallest(n, 'col')` | Les n plus petits |

---

### Partie 5: Groupements et Agrégations

```python
# Créer des données sur 30 jours pour les groupements
np.random.seed(42)

data_30 = {
    'jour': [f'Jour {i+1}' for i in range(30)],
    'temperature': np.random.randint(10, 30, 30),
    'humidite': np.random.randint(40, 90, 30),
    'condition': np.random.choice(['Ensoleillé', 'Nuageux', 'Pluie'], 30)
}

meteo_30 = pd.DataFrame(data_30)

# Groupement par condition
print("=== Statistiques par condition ===")
print(meteo_30.groupby('condition')['temperature'].mean())

# Groupement avec plusieurs agg
print("\n=== Résumé par condition ===")
print(meteo_30.groupby('condition').agg({
    'temperature': ['mean', 'min', 'max'],
    'humidite': ['mean', 'min', 'max']
}))

# Compter les occurrences
print("\n=== Nombre de jours par condition ===")
print(meteo_30['condition'].value_counts())
```

---

### Résumé: Groupements

| Méthode | Description |
|---------|-------------|
| `df.groupby('col')` | Grouper par colonne |
| `.agg({'col': 'mean'})` | Agrégation |
| `.count()` | Compter |
| `.sum()` | Somme |
| `.mean()` | Moyenne |
| `.value_counts()` | Comptage des valeurs |

---

### Partie 6: Ajouter et Modifier des Colonnes

```python
# Ajouter une colonne calculée
meteo['temperature_f'] = meteo['temperature'] * 9/5 + 32
print("Avec Fahrenheit:")
print(meteo)

# Créer une colonne catégorielle
meteo['qualite_jour'] = meteo['temperature'].apply(
    lambda x: 'Bon' if 15 <= x <= 25 else 'Extremme'
)
print("\nQualité du jour:")
print(meteo[['jour', 'temperature', 'qualite_jour']])

# Supprimer une colonne
meteo_sans_f = meteo.drop('temperature_f', axis=1)
```

---

## <span class="h2">Niveau Avancé: API Temps Réel ⚡</span>

---

### Partie 7: Introduction aux API

Une API (Application Programming Interface) permet de récupérer des données depuis un service externe. Pour la météo, nous allons utiliser **Open-Meteo**, une API gratuite qui ne nécessite pas de clé API.

```python
import requests

# Coordonnées d'Angoulême
lat = 45.65
lon = 0.15

# URL de l'API Open-Meteo
url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m"

# Faire la requête
reponse = requests.get(url)

# Convertir en JSON
donnees = reponse.json()

print("Données reçues:")
print(donnees)
```

**Résultat:**
```json
{
  "latitude": 45.65,
  "longitude": 0.15,
  "current": {
    "time": "2024-01-15T12:00",
    "temperature_2m": 12.5,
    "relative_humidity_2m": 75,
    "weather_code": 3,
    "wind_speed_10m": 15.2
  }
}
```

---

### Partie 8: Créer un DataFrame depuis l'API

```python
import requests
import pandas as pd

lat = 45.65  # Angoulême
lon = 0.15

url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m"

reponse = requests.get(url)
donnees = reponse.json()

# Extraire les données actuelles
actuel = donnees['current']

# Créer un DataFrame
data_actuel = {
    'ville': ['Angoulême'],
    'temperature': [actuel['temperature_2m']],
    'humidite': [actuel['relative_humidity_2m']],
    'vent': [actuel['wind_speed_10m']],
    'code_meteo': [actuel['weather_code']]
}

meteo_actuel = pd.DataFrame(data_actuel)
print(meteo_actuel)
```

---

### Résumé: Requêtes API

| Élément | Description |
|---------|-------------|
| `requests.get(url)` | Faire une requête GET |
| `reponse.json()` | Convertir en JSON |
| `donnees['cle']` | Accéder aux données |
| `pd.DataFrame(dict)` | Convertir en DataFrame |

---

### Partie 9: Projet Final - Tableau de Bord Météo

```python
import requests
import pandas as pd

class AnalyseurMeteo:
    def __init__(self, ville, lat, lon):
        self.ville = ville
        self.lat = lat
        self.lon = lon
        self.data = None
    
    def recuperer_meteo(self):
        url = f"https://api.open-meteo.com/v1/forecast?latitude={self.lat}&longitude={self.lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m"
        reponse = requests.get(url)
        return reponse.json()['current']
    
    def creer_dataframe(self):
        actuel = self.recuperer_meteo()
        self.data = pd.DataFrame({
            'Ville': [self.ville],
            'Température (°C)': [actuel['temperature_2m']],
            'Humidité (%)': [actuel['relative_humidity_2m']],
            'Vent (km/h)': [actuel['wind_speed_10m']],
            'Code météo': [actuel['weather_code']]
        })
        return self.data
    
    def afficher(self):
        if self.data is None:
            self.creer_dataframe()
        print(f"\n{'='*50}")
        print(f"   Météo à {self.ville}")
        print(f"{'='*50}")
        print(self.data.to_string(index=False))
        print(f"{'='*50}")
    
    def analyser(self):
        if self.data is None:
            self.creer_dataframe()
        
        temp = self.data['Température (°C)'][0]
        humidite = self.data['Humidité (%)'][0]
        
        print("\n=== Analyse ===")
        
        if temp > 25:
            print("🌡️ Il fait chaud!")
        elif temp < 10:
            print("❄️ Il fait froid!")
        else:
            print("✅ Température agréable")
        
        if humidite > 80:
            print("💧 Humidité élevée")
        elif humidite < 40:
            print("🏜️ Air sec")
        else:
            print("💦 Humidité normale")

# Utilisation
meteo = AnalyseurMeteo("Angoulême", 45.65, 0.15)
meteo.creer_dataframe()
meteo.afficher()
meteo.analyser()
```

---

### Partie 10: Prévisions sur 7 Jours

```python
import requests
import pandas as pd

lat = 45.65  # Angoulême
lon = 0.15

# Récupérer les prévisions
url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto"

reponse = requests.get(url)
donnees = reponse.json()

# Créer le DataFrame des prévisions
previsions = pd.DataFrame({
    'Date': donnees['daily']['time'],
    'Temp max': donnees['daily']['temperature_2m_max'],
    'Temp min': donnees['daily']['temperature_2m_min'],
    'Code météo': donnees['daily']['weather_code']
})

print("=== Prévisions 7 jours - Angoulême ===")
print(previsions)
```

---

## <span class="h2">Défis Bonus</span>

1. **Plusieurs villes**: Créer une liste de villes et afficher la météo pour chacune
2. **Historique**: Collecter les données chaque heure et créer un historique
3. **Graphiques**: Ajouter matplotlib pour tracer les courbes de température
4. **Alertes**: Créer des alertes (température trop haute/basse, vent fort)
5. **Fuseaux horaires**: Analyser la météo dans différentes régions du monde

---

## <span class="h2">Exercice Interactif</span>

Essayer le projet directement:

[Ouvrir avec Basthon](https://basthon.fr/){ target="_blank" rel="noopener" .md-button }

!!! info "Note"
    Pour un usage en production, vous pouvez utiliser l'API OpenWeatherMap qui offre plus de données (prévisions horaires, UV, etc.) mais nécessite une clé API gratuite sur https://openweathermap.org/
