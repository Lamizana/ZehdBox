---
title: Tokenizer
description: "Tutoriel pas à pas : créer, déployer et vérifier votre premier token BEP-20 sur la BNB Smart Chain."
---

# <span class="h1">Tokenizer</span>

<p class="intro">
    Tutoriel complet pour créer votre premier token BEP-20 sur la BNB Smart Chain — de zéro jusqu'à un token publié et vérifié sur BSCScan.
</p>

---

!!! info "À propos"
    **Niveau** : débutant · **Durée estimée** : 2 à 3 h · **0 € requis**

    Ce tutoriel couvre l'intégralité du processus : concepts de base, installation de MetaMask, écriture du smart contract en Solidity, compilation, déploiement sur le BSC Testnet, tests et vérification sur BSCScan.

!!! abstract "Voir aussi"
    Ce tutoriel est lié à la [fiche projet Tokenizer](../../projets/tokeniser.md){ target="_blank" rel="noopener" } qui présente le résultat final, la stack technique et les compétences acquises.

---

## <span class="h2">A. Comprendre avant de coder</span>

Pas de panique si certains mots te semblent étranges. Voici l'essentiel en 5 minutes.

### A.1 Qu'est-ce qu'un token ?

Un **token** est une sorte de « pièce numérique » créée sur une blockchain. Dans notre projet, il suivra la norme **BEP-20** (la norme des jetons sur la BNB Chain), calquée sur l'ERC-20 d'Ethereum.

Cette norme impose un socle commun : tout token possède un `name` (nom), un `symbol` (ticker), un nombre de `decimals` (18 comme ETH), et des fonctions comme `transfer`, `balanceOf`, `approve`, `transferFrom`. Grâce à cela, tous les wallets et plateformes comprennent ton token automatiquement.

### A.2 Blockchain, testnet et réseau réel

La **BNB Chain** (réseau du partenaire du projet 42) existe en deux versions :

- **Réseau principal (Mainnet)** : le vrai réseau, avec de l'argent réel. **On n'y touche pas pour ce projet.**
- **Réseau de test (Testnet)** : une copie gratuite pour s'entraîner. Les tokens s'y appellent des **TBNB** et **ne valent rien**. C'est ici qu'on va travailler.

!!! success "Rassure-toi"
    Ce projet ne demande **jamais** d'argent réel. Tout se passe sur le testnet.

### A.3 Le vocabulaire à connaître

| Terme | Définition |
| --- | --- |
| **Wallet (portefeuille)** | Applis comme MetaMask qui détiennent tes adresses et tes fonds. |
| **Adresse** | Une longue chaîne (`0x...`) qui identifie un compte, un peu comme un numéro de compte bancaire. |
| **Smart contract** | Un programme qui vit sur la blockchain (ici : ton token). |
| **Gas** | La petite redevance en crypto payée pour exécuter une action sur la blockchain. |
| **Faucet** | Un site qui distribue gratuitement des jetons de test. |
| **Block explorer (BSCScan)** | Un moteur de recherche de la blockchain, où chaque transaction est visible. |
| **ABI** | La « notice d'utilisation » d'un smart contract, décrivant ses fonctions. |

!!! info "Notre objectif"
    Créer le token `GOLD42` (ticker `G42`), le déployer sur la **BSC Testnet**, puis le vérifier sur **BSCScan**. Le nom doit obligatoirement contenir **42**.

---

## <span class="h2">B. Installer MetaMask et ajouter le réseau de test</span>

MetaMask est le wallet qu'on utilisera pour signer les transactions et recevoir le token.

!!! tip "Objectif"
    Un wallet prêt, connecté au réseau BSC Testnet.

### B.1 Installer l'extension

1. Va sur `metamask.io` et clique sur **« Download »**.
2. Installe l'extension sur ton navigateur (Chrome, Firefox, Brave…).
3. Ouvre l'extension et clique sur **« Créer un wallet »**.
4. Choisis un mot de passe.
5. **IMPORTANT** : note la **phrase de récupération (seed phrase)** sur papier, jamais en ligne. C'est la clé de ton wallet. Quiconque l'a, contrôle tes fonds.

!!! danger "Attention"
    **Jamais** donner sa seed phrase à qui que ce soit, ni la coller dans un site ou dans un code.

### B.2 Ajouter le réseau BSC Testnet

Par défaut, MetaMask est sur Ethereum. On ajoute la BNB Smart Chain de test :

1. Clique sur le menu déroulant en haut à gauche (il affiche « Ethereum Mainnet »).
2. Clique sur **« Add network »** puis **« Add a network manually »**.
3. Remplis les champs suivants (à recopier exactement) :

| Champ | Valeur |
|---|---|
| Network name | `BSC Testnet` |
| New RPC URL | `https://data-seed-prebsc-1-s1.bnbchain.org:8545` |
| Chain ID | `97` |
| Currency symbol | `tBNB` |
| Block Explorer URL | `https://testnet.bscscan.com` |

4. Clique sur **« Save »**. Le réseau doit apparaître dans la liste.

!!! info "Astuce"
    Le « Chain ID 97 » identifie la BSC Testnet. Si tu vois un autre numéro, tu es sur le mauvais réseau.

### B.3 Copier ton adresse

Clique sur ton adresse (sous le nom du compte, ça ressemble à `0x1234...abcd`) pour la copier. Garde-la sous la main : tu t'en serviras partout.

---

## <span class="h2">C. Récupérer des TBNB gratuits (faucet)</span>

Pour déployer un contrat, il faut payer le « gas » en TBNB. On les obtient gratuitement.

!!! tip "Objectif"
    Avoir quelques TBNB sur ton wallet testnet.

### C.1 Utiliser le faucet de BNB Chain

1. Va sur le site officiel : `https://www.bnbchain.org/` puis cherche la section **Faucet** (ou va directement sur `faucet.bnbchain.org`).
2. Sélectionne le réseau **BSC Testnet**.
3. Colle ton adresse MetaMask (celle du B.3).
4. Clique sur le bouton pour recevoir des TBNB.
5. Attends la confirmation. Vérifie dans MetaMask que ton solde TBNB a augmenté.

!!! warning "Si tu n'as rien reçu"
    Attends quelques minutes ou réessaie. Les faucets peuvent être temporairement à sec ou demander un délai entre deux demandes. C'est normal.

!!! success "Vérif"
    Solde TBNB > 0 dans MetaMask = étape réussie.

---

## <span class="h2">D. Écrire le smart contract du token</span>

On écrit le programme de notre token en **Solidity**. On réutilise la bibliothèque **OpenZeppelin** qui fournit un ERC-20 éprouvé (pas besoin de tout réinventer, c'est plus sûr).

!!! tip "Objectif"
    Un fichier `token.sol` correct, commenté.

### D.1 Le code complet du contrat

Ce fichier doit aller dans le dossier `code/` de ton dépôt sous le nom `token.sol` :

```solidity
// SPDX-License-Identifier: MIT
// GOLD42 — jeton BEP-20 (standard ERC-20 d'OpenZeppelin)
// Norme : BEP-20 sur la BNB Smart Chain
pragma solidity ^0.8.0;

// Import du contrat ERC-20 d'OpenZeppelin : fournit name, symbol,
// decimals, totalSupply, balanceOf, transfer, approve, transferFrom...
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GOLD42 is ERC20 {
    // --- Propriétés du token ---
    string public constant NAME = "GOLD42";   // Nom du token (doit contenir 42)
    string public constant SYMBOL = "G42";     // Ticker (symbole court)
    uint8 public constant DECIMALS = 18;       // 18 décimales, comme l'ETH

    // --- Approvisionnement total (1 000 000 G42) : plafond absolu ---
    uint256 public constant TOTAL_SUPPLY = 1_000_000 * 10 ** uint256(DECIMALS);

    // --- Supply initiale (800 000 G42) : créée au déploiement,
    //     les 200 000 G42 restants sont réservés au futur mint du propriétaire ---
    uint256 public constant INITIAL_SUPPLY = 800_000 * 10 ** uint256(DECIMALS);

    // --- Propriétaire du contrat ---
    address public owner;

    // --- Événements (traces lisibles sur la blockchain) ---
    event Mint(address indexed to, uint256 amount);
    event Burn(address indexed from, uint256 amount);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    // --- Constructeur : exécuté une seule fois au déploiement ---
    constructor() ERC20(NAME, SYMBOL) {
        owner = msg.sender;                        // Le déployeur devient propriétaire
        _mint(msg.sender, INITIAL_SUPPLY);         // On crée 80 % de la supply pour lui
    }

    // --- Créer (mint) des tokens, réservé au propriétaire ---
    function mint(address recipient, uint256 amount) public onlyOwner {
        require(totalSupply() + amount <= TOTAL_SUPPLY,
            "GOLD42: minting exceeds total supply");
        _mint(recipient, amount);
        emit Mint(recipient, amount);
    }

    // --- Détruire (burn) ses propres tokens ---
    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
        emit Burn(msg.sender, amount);
    }

    // --- Transférer la propriété du contrat ---
    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "GOLD42: new owner is the zero address");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }

    // --- Restriction : seule la fonction ne peut être appelée que par le propriétaire ---
    modifier onlyOwner() {
        require(msg.sender == owner, "GOLD42: only owner can perform this action");
        _;
    }
}
```

### D.2 Expliquer les mots du code

| Élément | Explication |
|---|---|
| `pragma solidity ^0.8.0;` | Version du langage utilisée (≥ 0.8.0). |
| `contract GOLD42 is ERC20` | On hérite du standard OpenZeppelin. |
| `constructor()` | Code exécuté au déploiement : on donne la supply initiale au déployeur et on l'élit propriétaire. |
| `_mint` / `_burn` | Fonctions internes d'OpenZeppelin qui créent/détruisent réellement des tokens. |
| `onlyOwner` | Un « modificateur » : il bloque la fonction si `msg.sender` (celui qui appelle) n'est pas le propriétaire. C'est notre garde-fou de sécurité. |
| `require(...)` | Vérifie une condition, sinon annule la transaction. Ici : on ne peut pas dépasser la supply totale. |

!!! info "Pourquoi pas de dépôt de fonds ?"
    Le contrat n'accepte aucun ETH/BNB : il n'a pas de fonction `payable`. C'est une bonne chose pour la sécurité (pas d'argent bloqué).

### D.3 Mettre à jour ton dépôt

1. Ouvre `code/token.sol` et remplace son contenu par le code ci-dessus.
2. Assure-toi que chaque fonction a bien un commentaire lisible. C'est exigé par le sujet (revue de code à l'évaluation).

---

## <span class="h2">E. Compiler avec Remix</span>

**Remix IDE** est l'outil recommandé par le sujet : un environnement gratuit dans le navigateur pour écrire, compiler et déployer des smart contracts.

!!! tip "Objectif"
    Ton code compile sans erreur.

### E.1 Ouvrir Remix et créer le fichier

1. Va sur `https://remix.ethereum.org`.
2. Dans le panneau de gauche (explorateur de fichiers), crée un dossier **contracts** s'il n'existe pas, puis un fichier `token.sol` (icône « nouveau fichier »).
3. Colle le code du contrat dedans et enregistre (`Ctrl+S`).

### E.2 Installer OpenZeppelin (import)

Le code importe `@openzeppelin/contracts/...`. Remix doit le télécharger :

1. Ouvre l'onglet **« Solidity Compiler »** (icône en forme de « S » sur le côté gauche).
2. Clique sur **« Compile token.sol »**. Remix détectera l'import manquant et proposera de l'installer — accepte.
3. Sinon, va dans l'onglet **« File explorer »** → clic droit sur le dossier racine → **« Import from GitHub »** et colle : `OpenZeppelin/openzeppelin-contracts@master/contracts/token/ERC20/ERC20.sol`.

### E.3 Choisir la version et compiler

1. Dans « Solidity Compiler », choisis la version **0.8.x** (ex. 0.8.26) — elle doit correspondre à `pragma solidity ^0.8.0`.
2. Clique sur **« Compile token.sol »**.
3. La barre verte **« Compilation successful »** doit s'afficher.

!!! warning "Erreurs fréquentes"
    - `DeclarationError: Identifier already declared` → tu as encore la constante `decimals` en plus du getter. Supprime-la (le getter d'ERC20 la fournit).
    - `Source file requires different compiler version` → change la version sélectionnée en 0.8.x.
    - `SPDX license identifier not provided` → la ligne `// SPDX-License-Identifier: MIT` est absente, ajoute-la.

---

## <span class="h2">F. Déployer sur la BSC Testnet</span>

Maintenant qu'on compile, on déploie réellement le token sur le testnet via MetaMask.

!!! tip "Objectif"
    Une adresse de contrat `0x...` sur le testnet + des TBNB dépensés (en test, ça ne coûte rien de réel).

### F.1 Connecter Remix à MetaMask

1. Dans Remix, ouvre l'onglet **« Deploy & Run Transactions »** (icône en forme de flèche « Run »).
2. Dans le menu **Environment**, choisis **« Injected Provider - MetaMask »**.
3. Une fenêtre MetaMask s'ouvre : choisis ton compte et clique **« Connect »**.
4. Vérifie que le réseau affiché dans MetaMask est bien **BSC Testnet** (chain ID 97).

!!! warning "Si rien ne se connecte"
    Assure-toi que l'extension MetaMask est déverrouillée et que tu es sur le bon réseau. Relance Remix au besoin.

### F.2 Lancer le déploiement

1. Dans le panneau « Deploy & Run », le contrat **GOLD42** doit être sélectionné (en haut).
2. Clique sur **« Deploy »**.
3. Une fenêtre MetaMask apparaît : vérifie le « gas » estimé et clique **« Confirmer »**.
4. Attends que la transaction soit incluse dans un bloc (généralement quelques secondes).

### F.3 Récupérer l'adresse du contrat

1. Sous la section « Deployed Contracts » de Remix, tu verras ton contrat déployé avec son adresse `0x...`.
2. **Clique sur la copie** de l'adresse (icône) et sauvegarde-la quelque part. On en a besoin pour BSCScan et pour le README.
3. Note aussi le réseau : **BSC Testnet**.

!!! success "Réussi !"
    Ton token existe désormais sur la blockchain de test.

---

## <span class="h2">G. Tester le token (démonstration)</span>

On démontre que le token fonctionne. Ces actions seront montrées à l'évaluation.

!!! tip "Objectif"
    Prouver que balance, transfert, mint et burn marchent.

### G.1 Vérifier le solde initial

1. Dans Remix, déploie le contrat (section « Deployed Contracts »).
2. Clique sur **`balanceOf`** et colle ton adresse MetaMask, puis clique le bouton.
3. Tu dois voir `1000000000000000000000000` (1 000 000 G42 avec 18 décimales).

### G.2 Transférer des tokens

1. Dans MetaMask, copie une **deuxième adresse** (compte de test B.3).
2. Appelle `transfer` avec : adresse destinataire + montant `10000000000000000000` (soit 10 G42).
3. Confirme dans MetaMask. Vérifie avec `balanceOf` que le destinataire a bien reçu 10 G42.

!!! info "Note"
    1 G42 = `1` suivi de 18 zéros en « plus petit entier ». C'est la règle des 18 décimales, comme pour l'ETH.

### G.3 Mint et burn

1. **`mint`** (réservé au propriétaire) : renseigne une adresse + un montant. Confirme.
2. Pour prouver la sécurité : appelle `mint` **depuis une autre adresse** (change de compte dans MetaMask) → la transaction doit échouer avec `GOLD42: only owner can perform this action`.
3. **`burn`** : brûle des tokens de ton propre compte, par ex. 1 G42. Vérifie que ton solde baisse.
4. **`transferOwnership`** : teste de transférer la propriété à une autre adresse.

!!! success "À l'évaluation"
    Montre ces tests dans Remix ou directement sur BSCScan — les transactions y sont visibles et vérifiables.

---

## <span class="h2">H. Vérifier et publier sur BSCScan</span>

Un block explorer est le « Google de la blockchain ». On y rend notre contrat public et vérifiable.

!!! tip "Objectif"
    Le contrat « Vérifié » sur BSCScan, avec ticker publié et transactions de démo visibles.

### H.1 Trouver le contrat

1. Va sur `https://testnet.bscscan.com` (le **testnet**, pas le mainnet !).
2. Colle l'adresse du contrat dans la barre de recherche.
3. La page du contrat s'affiche avec les transactions, les holders, etc. Le symbole y apparaît encore comme « Unknown Token » tant que ce n'est pas vérifié.

### H.2 Vérifier le code source

1. Ouvre l'onglet **« Contract »** puis clique **« Verify and Publish »**.
2. Remplis le formulaire **exactement** comme à la compilation :
    - Compiler type : `Solidity (Single file)`
    - Compiler version : celle choisie dans Remix (ex. 0.8.26)
    - Open Source License Type : `MIT License`
3. Colle le code complet de `token.sol` dans le champ « Solidity Contract Code ».
4. Clique **« Verify and Publish »**.

!!! warning "Si la vérification échoue"
    C'est presque toujours un paramètre différent de la compilation (version Solidity, licence, ou le code pas exactement identique). Recopie ton code depuis Remix tel quel.

### H.3 Publier le ticker et les infos du token

1. Sur la page du contrat, ouvre **« Contract → Update Token Info »** (ou « Update Token Information »).
2. Renseigne : nom `GOLD42`, symbole `G42`, 18 décimales.
3. Tu peux aussi uploader un logo (optionnel).

!!! success "Résultat"
    Ton token apparaît désormais proprement sur BSCScan avec ses transactions.

---

## <span class="h2">J. Dépannage et questions fréquentes</span>

Les erreurs les plus courantes et leurs solutions.

### J.1 « Not enough funds for gas »

Tu n'as pas assez de TBNB sur ton wallet testnet.

→ Récupère des TBNB au faucet (partie C) ou vérifie que MetaMask est bien sur le **BSC Testnet** (chain ID 97), pas sur Ethereum Mainnet.

### J.2 La transaction reste « pending »

Le réseau de test est parfois lent ou le gas nonce est bloqué.

→ Attends, ou dans MetaMask va dans Paramètres → Avancé → **« Clear activity tab data »** pour réinitialiser. Puis réessaie.

### J.3 « Identifier already declared » à la compilation

C'est le fameux conflit `decimals` : une constante `uint8 public constant decimals` entre en collision avec le getter `decimals()` de l'ERC-20.

→ Supprime la constante (et renomme-la `DECIMALS` en majuscule si tu la gardes en interne). Le getter d'OpenZeppelin renvoie déjà 18.

### J.4 La vérification BSCScan échoue

→ Compare paramètre par paramètre avec Remix : version Solidity identique, licence MIT, et colle le code **exact** de `token.sol` (mêmes espaces, mêmes commentaires, c'est un hash qui doit matcher).

### J.5 « revert » quand j'appelle mint depuis un autre compte

Normal ! `mint` est protégé par `onlyOwner`. C'est le comportement attendu et c'est exactement ce qu'il faut montrer à l'évaluation.

### J.6 Est-ce que je risque de perdre de l'argent ?

Non. On ne travaille que sur la BSC Testnet avec des TBNB de test qui ne valent rien. N'utilise **jamais** le Mainnet ni des fonds réels.

---

> Lien vers source : [BNB Chain](https://www.bnbchain.org/){ target="_blank" rel="noopener" } · [Remix IDE](https://remix.ethereum.org){ target="_blank" rel="noopener" } · [BSCScan Testnet](https://testnet.bscscan.com){ target="_blank" rel="noopener" } · [OpenZeppelin](https://docs.openzeppelin.com/contracts/){ target="_blank" rel="noopener" }

