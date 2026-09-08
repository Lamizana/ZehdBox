---
title: Mise en place
description: "Installer Python et préparer son environnement pour commencer la programmation."
---

# <span class="h1">Mise en place</span>

---

## <span class="h2">Introduction</span>

_La programmation est l'art de commander à un ordinateur de faire exactement ce que vous voulez et Python compte 
parmi les langages qu'il est capable de comprendre pour recevoir vos odres. Nous allons essayer cela tout de suite 
avec des ordres très simples concernant des nombres, puisque ces derniers constituent son matériau de prédilection._

_Nous allons lui fournir nos premiere "instructions", et préciser au passage la définition de quelques termes 
essentiels du vocabulaire informatique, indispensable à la compréhension de ce cours._

!!! info
    A la fin de ce chapitre, vous serez en mesure de créer **votre premier programme** `Hello World` sur les deux 
    principaux type d'OS :

    - Linux
    - Windows

---

## <span class="h2">Installation de l'environnement</span>

Nous allons ici mettre en place un environnement pour utiliser Python. Nous avons, pour ce faire, plusieurs façons :

<div class="soft-skills-grid">
    <div class="soft-skill-card">
        <span class="soft-skill-title">Mode intéractif</span><br><br>
        <span class="soft-skill-desc">Possibilié de dialoguer directement depuis le clavier.</span>
    </div>
    
    <div class="soft-skill-card">
        <span class="soft-skill-title">Interface graphique</span><br><br>
        <span class="soft-skill-desc">Windows, Gnome, VsCode, CodeBlock, ... </span>
    </div>
</div>

### 1. Pour lancer l'interpréteur de commande en mode interactif

```bash
# LINUX - Ouvrir le terminal et tapez :
$ python3
Python 3.10.12 (main, Mar  3 2026, 11:56:32) [GCC 11.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> 

# WINDOWS - tapez `cmd` dans la barre de recherche et tapez :
$ python3
>>>
```

!!! bug "A savoir"
    Les trois caractères "supérieur à" (`>>>`) constitue **le signal d'invite**, ou _prompt principal_, lequel vous 
    indique que Python est prét à exécuter une commande.

### 2. Pour lancer l'interpréteur de commande avec une interface graphique

Si vous utilisez une interface graphique telle que `Windows`, `VsCode`, `Gnome`,..., vous préfèrerez sans doute 
travailler dans un environnement de travail spécialisé tel que **IDLE**.

Nous verrons par la suite comment installer ces différents outils.

---

## <span class="h2">Basthon</span>

Basthon est l'acronyme de **"Bac À Sable pour pyTHON"**. 

Il ressemble au mot "baston", c'est une allusion à la "lutte" que peut parfois représenter l'apprentissage de la programmation, l'écriture d'un code ou son
débogage.

**Basthon** est utilisé pour s'initier au langage de programmation Python 3 (mais aussi `SQL`, `OCaml`, `JavaScript`
et `XCAS` !), sans rien avoir à installer. Il suffit de disposer d'un navigateur (`Firefox` ⩾ 78, `Chrome` ou `Chromium`
⩾ 85, ou encore `Edge` 1) à jour et d'une connexion à Internet.

!!! tips "Astuce"
    En fait, Basthon peut être utilisé pour s'initier à d'autres langages que Python !

Deux interfaces permettent d'utiliser **Basthon** :

[:material-play-circle: Basthon-Console](https://console.basthon.fr){ target="_blank" rel="noopener" } : Une interface de type 
**console**

[:material-play-circle: Basthon-Notebook](https://notebook.basthon.fr){ target="_blank" rel="noopener" } : Une interface de type 
**notebook**

Vous avez un lien qui vous permet d'accéder directement à la console correspondante.

---

## <span class="h2">Utilisation de l'interpréteur de commande</span>

Une fois sur **Basthon** ou dans votre terminal avec l'interpreteur python lancé :

``` python
>>> 5+3
8
>>> 2 - 9       # les espaces sont optionnels
7
>> 7 + 3 * 4    # la hierarchie des operations mathématiques sont respecté
19
>>> (7+3)*4
40
>>> 20 / 3
6.666666666666667
>>> 20 // 3
6

>>> Ctrl-D      # quitte l'interpreteur Pyhton
```

---

## <span class="h2">Création de scripts en Python</span>

Jusqu'à présent, nous avons utilisé Python en **mode intéractif** dans le terminal ou Basthon. Cela signifie que 
vous avez à chaque fois entré directement les commandes directement dans l'interpréteur, sans les sauvegarder au 
prealable dans un fichier.

Nous allons ici voir comment écrire _un script_, que vous pourrez ensuite sauvegarder, modifier, copier, 
etc.

Pour ensuite tester l'execution de votre programme, il suffira de lancer l'interpreteur python en lui fournissant 
comme argument le nom du fichier qui contient le script.

!!! note
    Pour ce faire, vous allez désormais rédiger vos séquences d'instructions dans un _éditeur de texte_, il y a 
    plusieurs choix et ce dernier dépendra de vos affinitées. Voici une liste non exaustive des principaux :
    
    !!! abstract "Editeurs"
        :material-microsoft-visual-studio-code: VsCode
        
        :simple-codeblocks: Code Block 
        
        :simple-pycharm: Pycharm

Vous pouvez tout aussi bien creer votre script sans editeur en creant un fichier `monScript.py` et en n'oubliant pas 
de rajouter `.py`

!!! tip "Cas concret"
    Dans votre terminal:
    ```console
    $ touch monScript.py        # Cree un fichier monScript.py
    ```

    Une fois le script créé, ecrire dedans :
    ```python
    print("Hello World")
    ```
    
    Pour le compiler, allez dans le terminal au niveau de votre script:
    ```console
    $ python3 monScript.py      # Execute le script                  
    Hello World
    ```



