---
title: Tokenizer
description: "Token BEP-20 GOLD42 sur BNB Smart Chain : premier smart contract, défi de compréhension blockchain et DeFi."
---

# <span class="h1">Tokenizer</span>

<div class="project-hero">
    <span class="tech-tag">Solidity</span>
    <span class="tech-tag">BEP-20</span>
    <span class="tech-tag">BNB Smart Chain</span>
    <span class="tech-tag">OpenZeppelin</span>
</div>

<p class="intro">
    Création du token <strong>GOLD42 (G42)</strong> sur la BNB Smart Chain Testnet — mon premier smart contract.
</p>

---

## <span class="h2">Description</span>

!!! note "Contexte"
    Projet solo réalisé dans le cadre du partenariat **42 × BNB Chain**. L'objectif était de comprendre concrètement le fonctionnement d'une blockchain en créant, testant et déployant un token BEP-20 réel sur un réseau de test.

---

## <span class="h2">Compétences Acquises</span>

- **Blockchain & DeFi** : compréhension des concepts fondamentaux (wallet, gas, transaction, explorateur de blocs)
- **Smart Contracts** : écriture, compilation et déploiement d'un contrat Solidity
- **Standard BEP-20/ERC-20** : implémentation des fonctions `transfer`, `approve`, `transferFrom`, `mint`, `burn`
- **Sécurité** : gestion de la propriété (`onlyOwner`), plafond de supply, protection contre les transferts vers l'adresse zéro
- **Outils** : Remix IDE, MetaMask, BscScan Testnet

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

## <span class="h2">Sécurité</span>

!!! info "Garanties du contrat"
    - **Propriété explicite** : seules les fonctions `mint` et `transferOwnership` sont restreintes au propriétaire
    - **Offre plafonnée** : le total émis ne peut jamais dépasser 1 000 000 G42
    - **Aucun privilège caché** : pas de pause, pas de blacklist, pas de frais — les détenteurs restent libres de leurs fonds
    - **Zéro argent réel** : déploiement sur testnet uniquement

---

## <span class="h2">Lien</span>

[:fontawesome-brands-github: Voir le code](https://github.com/Lamizana/Tokeniser){ .md-button .md-button--primary target="_blank" rel="noopener" }
[:octicons-verified-24: Contrat sur BscScan](https://testnet.bscscan.com/address/0xa3B9A3eb3F2aE8ed3a6788F4Ccbdb1e503FE6aaD){ .md-button target="_blank" rel="noopener" }

---

!!! info "Tutoriel complet"
    Tu veux reproduire ce projet ? Consulte le [tutoriel pas à pas : créer un token BEP-20](../web/web3/tokenizer.md){ target="_blank" rel="noopener" } qui couvre l'intégralité du processus, de l'installation de MetaMask à la vérification sur BSCScan.
