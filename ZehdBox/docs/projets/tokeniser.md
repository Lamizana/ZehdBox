---
title: Tokenizer — Smart contract BEP-20 sur BNB Smart Chain
description: "Création d'un token BEP-20 GOLD42 sur BNB Smart Chain : premier smart contract Solidity, OpenZeppelin, blockchain et DeFi."
---

# <span class="h1">Tokenizer</span>

<div class="badge-section">
<div class="badge-row">
    <img src="https://img.shields.io/badge/Solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" alt="Solidity">
    <img src="https://img.shields.io/badge/BEP--20-F0B90B?style=for-the-badge&logo=binance&logoColor=black" alt="BEP-20">
    <img src="https://img.shields.io/badge/BNB%20Smart%20Chain-F0B90B?style=for-the-badge&logo=binance&logoColor=black" alt="BNB Smart Chain">
    <img src="https://img.shields.io/badge/OpenZeppelin-4E5EE4?style=for-the-badge&logo=openzeppelin&logoColor=white" alt="OpenZeppelin">
</div>
</div>

<p class="intro">
    Création du token <strong>GOLD42 (G42)</strong> sur la BNB Smart Chain Testnet. Mon premier smart contract.
</p>

---

## <span class="h2">Description</span>

Projet solo réalisé dans le cadre du partenariat **42 × BNB Chain**. L'objectif était de comprendre concrètement le fonctionnement d'une blockchain en créant, testant et déployant un token ***BEP-20*** réel sur un réseau de test.

---

## <span class="h2">Compétences Acquises</span>

<div class="skill-grid">

<div class="skill-card">
    <span class="skill-card-icon">🔗</span>
    <span class="skill-card-title">Blockchain & DeFi</span><br>
    <span class="skill-card-desc">Compréhension des concepts fondamentaux (wallet, gas, transaction, explorateur de blocs)</span>
</div>

<div class="skill-card">
    <span class="skill-card-icon">📜</span>
    <span class="skill-card-title">Smart Contracts</span><br>
    <span class="skill-card-desc">Écriture, compilation et déploiement d'un contrat Solidity</span>
</div>

<div class="skill-card">
    <span class="skill-card-icon">🔁</span>
    <span class="skill-card-title">Standard BEP-20/ERC-20</span><br>
    <span class="skill-card-desc">Implémentation des fonctions <code>transfer</code>, <code>approve</code>, <code>transferFrom</code>, <code>mint</code>, <code>burn</code></span>
</div>

<div class="skill-card">
    <span class="skill-card-icon">🛡️</span>
    <span class="skill-card-title">Sécurité</span><br>
    <span class="skill-card-desc">Gestion de la propriété (<code>onlyOwner</code>), plafond de supply, protection contre les transferts vers l'adresse zéro</span>
</div>

<div class="skill-card">
    <span class="skill-card-icon">🔧</span>
    <span class="skill-card-title">Outils</span><br>
    <span class="skill-card-desc">Remix IDE, MetaMask, BscScan Testnet</span>
</div>

</div>

---

## <span class="h2">Stack Technique</span>

| Langage | Framework | IDE | Réseau | Wallet |
|----------|-----------|-----|--------|--------|
| Solidity ^0.8.0 | OpenZeppelin ERC20 | Remix | BSC Testnet | MetaMask |

---

## <span class="h2">Défis Relevés</span>

!!! tip "Premier smart contract"
    1. **Comprendre la blockchain** : assimiler les concepts de wallet, gas, transaction et explorateur de blocs avant même d'écrire une ligne de code
    2. **Maîtriser les unités** : travailler avec les wei (`1 G42 = 10^18` unités de base), un piège classique pour les débutants
    3. **Supply plafonnée** : concevoir un contrat avec 80 % créé au déploiement et 20 % mintables, tout en garantissant un plafond absolu de 1 000 000 G42
    4. **Déploiement réel** : passer de l'IDE Remix au déploiement sur BSC Testnet via MetaMask, sans argent réel

---

## <span class="h2">Fonctionnalités</span>

| Fonction | Rôle | Accès |
|----------|------|-------|
| `transfer(to, amount)` | Envoyer des G42 | Tous |
| `balanceOf(account)` | Consulter un solde | Lecture |
| `approve(spender, amount)` | Autoriser un tiers à dépenser | Tous |
| `mint(recipient, amount)` | Créer des G42 (dans la limite du plafond) | Propriétaire |
| `burn(amount)` | Détruire ses propres G42 | Tous |
| `transferOwnership(newOwner)` | Transférer la propriété du contrat | Propriétaire |

---

## <span class="h2">Métriques</span>

<div class="skill-grid">

<div class="skill-card">
    <span class="skill-card-icon">🏭</span>
    <span class="skill-card-title">1 000 000 G42</span><br>
    <span class="skill-card-desc">supply maximal plafonné</span>
</div>

<div class="skill-card">
    <span class="skill-card-icon">📦</span>
    <span class="skill-card-title">80 % créés</span><br>
    <span class="skill-card-desc">au moment du déploiement</span>
</div>

<div class="skill-card">
    <span class="skill-card-icon">🔨</span>
    <span class="skill-card-title">20 % mintables</span><br>
    <span class="skill-card-desc">par le propriétaire</span>
</div>

<div class="skill-card">
    <span class="skill-card-icon">🪙</span>
    <span class="skill-card-title">10^18 wei</span><br>
    <span class="skill-card-desc">précision de 1 G42</span>
</div>

</div>

---

## <span class="h2">Ce que j'ai appris</span>

!!! info "Réflexion"
    Ce projet m'a fait comprendre que la blockchain n'est pas magique : chaque transaction est un **appel de fonction sur un contrat**, et le vrai coût est la compréhension des unités (`wei`) et de la **gestion de la propriété**. Debugger un smart contract est radicalement différent du C : pas de `printf`, pas de `gdb` — il faut raisonner sur l'état du contrat **avant** de le déployer.

---

## <span class="h2">Sécurité</span>

!!! info "Garanties du contrat"
    - **Propriété explicite** : seules les fonctions `mint` et `transferOwnership` sont restreintes au propriétaire
    - **Offre plafonnée** : le total émis ne peut jamais dépasser 1 000 000 G42
    - **Aucun privilège caché** : pas de pause, pas de blacklist, pas de frais — les détenteurs restent libres de leurs fonds
    - **Zéro argent réel** : déploiement sur testnet uniquement

---

<div class="project-card" markdown>

## :material-robot-love: Tutoriel : Créer votre token BEP-20

Tu veux reproduire ce projet ? Consulte ce tutoriel qui couvre l'intégralité du processus, de l'installation de MetaMask à la vérification sur BSCScan.

[:octicons-arrow-right-24: Commencer le tutoriel](../web/web3/tokenizer.md){ .md-button .md-button--primary }

</div>

---

## <span class="h2">Lien</span>

[:fontawesome-brands-github: Voir le code](https://github.com/Lamizana/Tokeniser){ .md-button .md-button--primary target="_blank" rel="noopener" }
[:octicons-verified-24: Contrat sur BscScan](https://testnet.bscscan.com/address/0xa3B9A3eb3F2aE8ed3a6788F4Ccbdb1e503FE6aaD){ .md-button target="_blank" rel="noopener" }
[:material-message-text: Contribuer](https://github.com/Lamizana/Tokeniser/issues){ .md-button target="_blank" rel="noopener" }
