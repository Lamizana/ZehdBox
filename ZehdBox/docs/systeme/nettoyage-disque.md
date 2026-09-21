---
title: Nettoyage de Disque
description: "Guide pas à pas pour réparer et formater une clé USB inaccessible ou impossible à formater."
tags:
  - cours
  - systeme
  - disque
---

# <span class="h1">Nettoyage de Disque</span>

<p class="intro">
    Guide de sauvetage et réparation de disque.
</p>

---

## <span class="h2">Introduction</span>

Ce guide décrit la procédure *pas à pas* pour réinitialiser et formater une clé USB devenue inaccessible ou impossible à formater via l'explorateur de fichiers standard à la suite d'une erreur de partitionnement.

Nous allons aborder ici deux méthodes :

<div class="soft-skills-grid">

<div class="soft-skill-card">
    <span class="soft-skill-title">Méthode principale</span><br><br>
    <span class="soft-skill-desc">Diskpart Windows</span>
</div>

<div class="soft-skill-card">
    <span class="soft-skill-title">Méthode alternative</span><br><br>
    <span class="soft-skill-desc">Linux (GParted / Disques)</span>
</div>

</div>

---

## <span class="h2">Utilisation de Diskpart (Windows)</span>

L'utilitaire en ligne de commande `diskpart` permet de communiquer directement avec le contrôleur matériel de la clé pour effacer les structures des partitions défectueuses.

!!! danger
    Soyez extrêmement vigilant lors du choix du numéro de disque **à l'étape 2**.

    Si vous sélectionnez le mauvais numéro, vous risquez d'effacer instantanément l'intégralité du disque dur principal de votre ordinateur. Ejectez tout autre stockage externe inutile avant de commencer.

---

### <span class="h2">1. Ouverture de l'invite de commande</span>

- Branchez votre clé USB défectueuse à votre ordinateur.
- Appuyez sur la touche ***`Windows`***.
- Tapez l'abréviation `cmd`.
- Faites un clic droit sur le résultat **Invite de commandes** et sélectionnez impérativement ***Exécuter en tant qu'administrateur***.

### <span class="h2">2. Lancement de l'outil de partitionnement</span>

Dans la fenêtre noire qui s'affiche, tapez la commande suivante puis validez avec la touche `Entrée` :

```bash
> diskpart
```

### <span class="h2">3. Identification de la clé USB</span>

Affichez l'ensemble des disques physiques connectés à la machine :

```bash

list disk
```

Analysez la colonne `Taille`. Repérez le numéro (ex : Disque 1, Disque 2) correspondant à votre clé USB (par exemple, une clé de 16 Go affichera environ 14 ou 15 Go).

### <span class="h2">4. Sélection du périphérique</span>

Sélectionnez le disque de votre clé en remplaçant la lettre `X` par le numéro identifié à l'étape précédente :

```bash
select disk X
```

!!! example
    Si votre clé USB est associée au disque 2, tapez `select disk 2`. Un message de confirmation vous indiquera *"Le disque X est maintenant le disque sélectionné"*.

### <span class="h2">5. Nettoyage complet du support (Remise à zéro)</span>

Cette commande **efface définitivement la table de partition** corrompue et toutes les données résiduelles :

```bash
clean
```

### <span class="h2">6. Création d'une nouvelle structure</span>

Générez une partition saine à la racine du support nettoyé :

```bash
create partition primary
```

### <span class="h2">7. Sélection et activation de la partition</span>

Ciblez la partition fraîchement créée afin de la rendre bootable et opérationnelle :

```bash
select partition 1
active
```

### <span class="h2">8. Formatage forcé du système de fichiers</span>

Lancez un formatage rapide. Choisissez le format selon vos besoins de stockage :

<div class="soft-skills-grid">

<div class="soft-skill-card">
    <span class="soft-skill-title">FAT32</span><br><br>
    <span class="soft-skill-desc">Idéal pour une compatibilité maximale (TV, consoles, Linux, Mac), mais limité aux fichiers de moins de 4 Go.</span>
</div>

<div class="soft-skill-card">
    <span class="soft-skill-title">NTFS</span><br><br>
    <span class="soft-skill-desc">Recommandé si votre clé fait plus de 32 Go et doit accueillir de gros fichiers.</span>
</div>

</div>

```bash
# Pour un formatage FAT32 (Standard) :
format fs=fat32 quick

# Ou si la clé est volumineuse, optez pour le NTFS :
format fs=ntfs quick
```

### <span class="h2">9. Attribution d'une lettre et sortie</span>

Une fois le formatage arrivé à 100%, attribuez une lettre de lecteur automatique afin que la clé apparaisse à nouveau dans votre explorateur de fichiers, puis quittez l'outil :

```bash
assign
exit
```

---

## <span class="h2">Utilisation de Linux (GParted / Disques)</span>

Si vous êtes sur un environnement Linux, l'opération peut être réalisée graphiquement de manière très intuitive.

1. Ouvrez l'utilitaire natif nommé ***Disques*** (Gnome Disk) ou installez l'outil avancé ***GParted***.

2. Dans le panneau latéral gauche, sélectionnez minutieusement votre clé USB en vérifiant sa capacité globale.

3. Cliquez sur le bouton de menu (icône d'engrenage ou trois petits points verticaux) en haut à droite de l'interface.

4. Sélectionnez l'option ***Formater le disque...***

5. Dans le schéma de partitionnement, optez pour **MBR/DOS** (compatible tous systèmes) ou **GPT** (pour les clés modernes de grande capacité).

6. Cliquez sur le bouton de création de volume pour ajouter une nouvelle partition au format **FAT** ou **NTFS**.

---

!!! tip "Poursuivre sur Linux"
    Vous débutez sur Linux ? Retrouvez les commandes et notions d'administration dans [Bases Linux](linux/index.md).
