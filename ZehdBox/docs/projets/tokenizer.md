---
title: Tokenizer — Smart contract BEP-20 sur BNB Smart Chain
description: "Tokenizer : création du token GOLD42 (BEP-20) sur BNB Smart Chain Testnet — Solidity, OpenZeppelin, mint plafonné, burn et transfert de propriété (projet 42 × BNB Chain)."
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
    Création du token <strong>GOLD42 (G42)</strong> sur la BNB Smart Chain Testnet: mon premier smart contract.
</p>

---

## <span class="h2">Présentation</span>

Un **token BEP-20**  `GOLD42 (G42)` déployé sur la **BNB Smart Chain Testnet** : solde, transferts, autorisations, création et destruction de tokens, le tout sur la blockchain.

---

## <span class="h2">Contexte</span>

*Projet solo réalisé dans le cadre du partenariat **42 × BNB Chain**.*

**L'objectif** : comprendre concrètement le fonctionnement d'une blockchain en créant, testant et déployant un token BEP-20 réel sur un réseau de test, sans jamais engager d'argent réel.

---

## <span class="h2">Mon rôle</span>

Projet **100 % solo**, mené de bout en bout :

- Conception de la **tokenomics** : supply plafonnée, répartition 80 % / 20 %
- Rédaction du **smart contract** `g42.sol` en Solidity
- **Déploiement** sur la BSC Testnet via Remix + MetaMask
- **Vérification** du code source sur BscScan
- Rédaction de la **documentation** (livre blanc, guide de déploiement, tutoriel pas à pas)

---

## <span class="h2">Architecture</span>

Un **contrat unique** `GOLD42` qui **hérite** de l'implémentation `ERC20` d'OpenZeppelin (standard de référence). L'héritage fournit les fonctions natives : `transfer`, `approve`, `transferFrom`, `balanceOf`, `totalSupply`.

Le contrat ajoute sa **logique métier** : un mécanisme de propriété maison (`onlyOwner`), un `mint` plafonné par la supply maximale, un `burn` public et un transfert de propriété protégé.

```
GOLD42 is ERC20 (OpenZeppelin)
├── from ERC20    : transfer, approve, transferFrom, balanceOf, totalSupply…
├── mint()        : création de tokens, réservée au propriétaire, plafonnée
├── burn()        : destruction de ses propres tokens, public
└── transferOwnership() : changement de propriétaire, refuse l'adresse zéro
```

---

## <span class="h2">Technologies</span>

<div class="skill-grid">

<div class="skill-card">
    <span class="skill-card-title">Langage</span><br>
    <span class="skill-card-desc"><strong>Solidity ^0.8.0</strong><br><em>Typé et compilé pour l'EVM</em></span>
</div>

<div class="skill-card">
    <span class="skill-card-title">Bibliothèque</span><br>
    <span class="skill-card-desc"><strong>OpenZeppelin Contracts</strong><br><em>l'implémentation ERC-20 de référence</em></span>
</div>

<div class="skill-card">
    <span class="skill-card-title">Supports</span><br>
    <span class="skill-card-desc"><strong>Remix IDE</strong><br><em>IDE en ligne pour écrire et compiler le contrat</em><br><strong>MetaMask</strong><br><em>portefeuille connecté (Injected Provider)</em><br><strong>BscScan Testnet</strong><br><em>explorateur et vérification du contrat</em></span>
</div>

<div class="skill-card">
    <span class="skill-card-title">Réseau</span><br>
    <span class="skill-card-desc"><strong>BNB Smart Chain Testnet</strong><br><em>blockchain EVM, Chain ID 97</em></span>
</div>

</div>

---

## <span class="h2">Fonctionnalités</span>

| Fonction | Rôle | Accès |
| ---------- | ------ | ------- |
| `transfer(to, amount)` | Envoyer des G42 | Tous |
| `balanceOf(account)` | Consulter un solde | Lecture |
| `approve(spender, amount)` | Autoriser un tiers à dépenser | Tous |
| `transferFrom(from, to, amount)` | Dépenser via une autorisation | Spender autorisé |
| `mint(recipient, amount)` | Créer des G42 (limité au plafond) | Propriétaire |
| `burn(amount)` | Détruire définitivement ses propres G42 | Tous |
| `transferOwnership(newOwner)` | Transférer la propriété du contrat | Propriétaire |

---

## <span class="h2">Problème | Solution</span>

| Problème | Solution |
| ---------- | ---------- |
| Comprendre la blockchain avant d'écrire une ligne de code | Assimiler les concepts clés — wallet, gas, transaction, explorateur de blocs — via la documentation du dépôt |
| Manipuler les unités avec précision | Travailler en unités de base (wei) : `1 G42 = 10^18`, pas en décimales flottantes |
| Garantir une offre prédictible | Supply plafonnée absolue dans le contrat : `mint()` rejette tout dépassement de 1 000 000 G42 |
| Sécuriser les actions sensibles | Modificateur `onlyOwner` maison : seuls `mint` et `transferOwnership` sont restreints au propriétaire |
| Déployer sans argent réel | Testnet BSC + faucet de tBNB gratuit — zéro argent réel engagé |

---

## <span class="h2">Résultats</span>

- Smart contract déployé et **vérifié sur BscScan** : [`0xB03B454DDa79A522603f2a21471A6bC6B24dDb80`](https://testnet.bscscan.com/address/0xB03B454DDa79A522603f2a21471A6bC6B24dDb80)
- **1 000 000 G42** de supply maximale, **800 000 (80 %)** créés au déploiement, **200 000 (20 %)** mintables par le propriétaire
- **18 décimales**, coût de déploiement : 0,001544511 BNB
- Token importable dans MetaMask: transferts et échanges testés entre wallets

---

## <span class="h2">Ce que j'ai appris</span>

La blockchain n'est pas magique : chaque transaction est un **appel de fonction sur un contrat**, et le vrai coût est la compréhension des unités (`wei`) et de la **gestion de la propriété**.

Débugger un smart contract est radicalement différent du C : pas de `printf`, pas de `gdb`; il faut raisonner sur l'état du contrat **avant** de le déployer.

---

<div class="project-card" markdown>

## :material-robot-love: Tutoriel : Créer votre token BEP-20

Tu veux reproduire ce projet ? Consulte ce tutoriel qui couvre l'intégralité du processus, de l'installation de MetaMask à la vérification sur BscScan.

[:octicons-arrow-right-24: Commencer le tutoriel](../web/web3/tokenizer.md){ .md-button .md-button--primary }

</div>

---

## <span class="h2">Lien</span>

[:fontawesome-brands-github: Voir le code](https://github.com/Lamizana/Tokeniser){ .md-button .md-button--primary target="_blank" rel="noopener" }
[:octicons-verified-24: Contrat sur BscScan](https://testnet.bscscan.com/address/0xB03B454DDa79A522603f2a21471A6bC6B24dDb80){ .md-button target="_blank" rel="noopener" }
[:material-message-text: Contribuer](https://github.com/Lamizana/Tokeniser/issues){ .md-button target="_blank" rel="noopener" }