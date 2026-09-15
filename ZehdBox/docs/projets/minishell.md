---
title: Minishell — Interpréteur de commandes UNIX en C (projet 42)
description: "Minishell : interpréteur de commandes UNIX en C inspiré de bash — REPL, parsing par pipeline, pipes, redirections et gestion des signaux (projet 42)."
---

# <span class="h1">Minishell</span>

<div class="badge-section">
<div class="badge-row">
    <img src="https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=white" alt="C">
    <img src="https://img.shields.io/badge/UNIX-2496ED?style=for-the-badge&logo=gnubash&logoColor=white" alt="UNIX">
    <img src="https://img.shields.io/badge/Libft-4D4D4D?style=for-the-badge&logo=c&logoColor=white" alt="Libft">
    <img src="https://img.shields.io/badge/Readline-4D4D4D?style=for-the-badge&logo=gnubash&logoColor=white" alt="Readline">
    <img src="https://img.shields.io/badge/Signaux-FF6F00?style=for-the-badge&logo=linux&logoColor=white" alt="Signaux">
</div>
</div>

<p class="intro">
    Interpréteur de commandes UNIX (shell) inspiré de bash, développé en <strong>C</strong>.
</p>

---

## <span class="h2">Présentation</span>

Un **interpréteur de commandes UNIX** qui exécute des commandes, gère les pipes et réagit aux signaux comme le ferait un vrai terminal.

---

## <span class="h2">Contexte</span>

*Projet du tronc commun de l'école 42, réalisé en binôme avec mon camarade, en 2023.*

**L'objectif** : comprendre ce qui se passe réellement quand on tape une commande dans un terminal; les processus, les descripteurs de fichiers et les signaux.

---

## <span class="h2">Mon rôle</span>

Projet réalisé en **binôme** : j'ai conçu le cœur de l'interpréteur, mon binôme a apporté le découpage des arguments et l'expansion des variables.

- Conception du **REPL** (boucle lecture-évaluation-exécution) avec `readline` pour le prompt et l'historique
- **Parsing** de la ligne de commande : substitution des variables, espacement des pipes, découpage en arguments et nettoyage des quotes
- Implémentation des **builtins** et de l'**exécution** des commandes externes via `fork` / `exec` / `wait`
- **Pipes** (simples et multiples) et gestion des **signaux** avec `readline`

---

## <span class="h2">Architecture</span>

<figure markdown>
  ![Architecture de Minishell](images/minishell_architecture.jpeg){.project-architecture}
  <figcaption>Schéma de l'architecture de Minishell</figcaption>
</figure>

Le REPL (**R**ead — **E**val — **P**rint — **L**oop) est le cycle fondamental de tout shell interactif :

| Étape | Rôle | Dans le code |
| ----- | ---- | ------------ |
| **R**ead — Lecture | Le shell lit la commande saisie au clavier | `readline()` + `add_history()` |
| **E**val — Évaluation | La commande est parsée puis exécutée | `parsing()` → `fork()` / `execve()` |
| **P**rint — Affichage | La sortie s'affiche sur le terminal | `dup2()` vers `STDOUT_FILENO` |
| **L**oop — Boucle | Le shell réaffiche le prompt et attend la saisie suivante | retour au `while(1)` avec `free()` |

La boucle tourne jusqu'à ce qu'un signal d'arrêt mette fin au programme : commande `exit` ou fin de fichier (`Ctrl+D`).

**L'étape Eval** correspond au pipeline de parsing, qui enchaîne quatre transformations sur la chaîne lue :

1. **Expansion** des variables (`$VAR`, `$?`) hors zones entre quotes simples
2. **Espacement** des caractères `|` pour les isoler comme tokens
3. **Découpage** en arguments avec un splitter qui ignore les séparateurs entre quotes
4. **Nettoyage** des quotes résiduelles de chaque argument

L'exécution distingue ensuite trois cas : une **commande simple**, une **redirection** (`>`), et un **pipe** — chaque commande d'un pipe étant lancée dans un processus `fork` relié à son voisin via `dup2`, avec une gestion dédiée du dernier maillon de la chaîne.

---

## <span class="h2">Technologies</span>

- **Langage** : C
- **Système** : Linux/UNIX
- **Bibliothèques** : libft (personnelle), readline
- **Outils** : Makefile, clang

---

## <span class="h2">Fonctionnalités</span>

- Commandes builtins (cd, echo, pwd, export, unset, env, exit)
- Commandes externes via `PATH` et exécutables locaux `./programme`
- Pipes simples et multiples (`|`)
- Redirection de sortie (`>`)
- Variables d'environnement (`$VAR`) et code de retour (`$?`)
- Gestion des signaux : `Ctrl+C` (interrompt la commande, réaffiche le prompt), `Ctrl+D` (quitte)
- Gestion des erreurs

---

## <span class="h2">Problème | Solution</span>

| Problème | Solution |
| ---------- | ---------- |
| Distinguer un `\|` dans une chaîne `echo "a \| b"` d'une vraie pipe | Découpage avec `skip_quotes` : les séparateurs entre quotes simples ou doubles sont ignorés |
| Interrompre une commande qui tourne sans tuer le shell | Gestion des signaux **ciblée** : `Ctrl+C` transmet l'interruption à l'enfant via un handler `readline`, le shell reste actif |
| Enchaîner plusieurs commandes avec des pipes | Une **boucle de `fork`** qui chaîne les descripteurs : `dup2` relie la sortie d'un enfant à l'entrée du suivant, dernier maillon géré séparément |
| Empêcher les variables d'être développées dans une chaîne simple-quoted | L'expansion saute explicitement les zones délimitées par `'...'` |

---

## <span class="h2">Résultats</span>

- Repl complet : l'utilisateur tape, le shell exécute
- Builtins fonctionnelles : `cd`, `echo`, `pwd`, `export`, `unset`, `env`, `exit`
- Signaux correctement gérés : `Ctrl+C` interrompt, le shell reste vivant
- Pipes simples et chaînes multi-commandes

---

## <span class="h2">Ce que j'ai appris</span>

J'ai compris le pipeline `fork → exec → wait` : je vois désormais chaque `ls` comme un processus qui naît, vit et meurt.

La gestion des signaux m'a appris qu'un programme est défini autant par ce qu'il fait que par ce qu'il **refuse** de faire, et que le parsing d'entrées utilisateur est un terrain miné, une citation mal fermée fait tout exploser.

---

## <span class="h2">Lien</span>

[:fontawesome-brands-github: Voir le code](https://github.com/Lamizana/Minishell){ .md-button .md-button--primary target="_blank" rel="noopener" }
[:material-message-text: Contribuer](https://github.com/Lamizana/Minishell/issues){ .md-button target="_blank" rel="noopener" }
