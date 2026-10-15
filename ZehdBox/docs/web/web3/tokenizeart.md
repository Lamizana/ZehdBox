---
title: TokenizeArt
description: "Tutoriel pas à pas : créer, déployer et vérifier votre premier NFT BEP-721 sur la BNB Smart Chain, avec métadonnées hébergées sur IPFS via Pinata."
tags:
  - cours
  - web3
  - solidity
  - smart-contract
  - nft
---

# <span class="h1">TokenizeArt</span>

<p class="intro">
    Tutoriel complet pour créer votre premier <strong>NFT BEP-721</strong> sur la BNB Smart Chain - de l'image jusqu'à un jeton non fongible miné, hébergé sur IPFS et vérifié sur BSCScan.
</p>

---

!!! info "À propos"
    **Niveau** : débutant · **Durée estimée** : 3 à 4 h · **0 € requis**

    Ce tutoriel couvre l'intégralité du processus : concepts de base (NFT, ERC-721, IPFS), configuration de MetaMask, écriture du smart contract en Solidity, compilation, publication de l'image et des métadonnées sur IPFS via Pinata, déploiement sur le BSC Testnet, minage du NFT et vérification sur BSCScan.

!!! abstract "Voir aussi"
    Ce tutoriel est lié à la [fiche projet TokenizeArt](../../projets/tokenizeart.md){ target="_blank" rel="noopener" } qui présente le résultat final, la stack technique et les compétences acquises.

    Les concepts sont expliqués en détail dans les pages [NFT & ERC-721](nft.md) et [IPFS & Pinata](ipfs.md), ainsi que dans le cours [Blockchain](blockchain.md).

---

## <span class="h2">1. Comprendre avant de coder</span>

On ne part pas écrire du Solidity sans comprendre **ce qu'est un NFT** et **où vivent ses données**.

### <span class="h3">1.1 Qu'est-ce qu'un NFT ?</span>

Un **NFT** (*non-fungible token*, ou jeton non fongible) est un **certificat numérique d'authenticité et de propriété** enregistré sur une blockchain.

Contrairement à un jeton fongible comme un token BEP-20 où un jeton en vaut un autre, chaque NFT est **unique** et **non interchangeable** : il porte un identifiant (`tokenId`) qui lui est propre.

!!! info "En résumé"
    Un NFT = **un identifiant unique sur la blockchain** + **des métadonnées** (l'œuvre et sa description) stockées ailleurs, sur IPFS.

Pour aller plus loin : [NFT & ERC-721](nft.md).

### <span class="h3">1.2 Le standard ERC-721 (et BEP-721)</span>

**ERC-721** est la norme Ethereum qui définit l'API d'un jeton non fongible : `ownerOf`, `transferFrom`, `approve`… **BEP-721** en est le strict équivalent sur la **BNB Smart Chain** (même interface, autre réseau).

On ne réécrit pas cette norme à la main : on **hérite** de l'implémentation [`ERC721URIStorage` d'OpenZeppelin](https://docs.openzeppelin.com/contracts/5.x/erc721){ target="_blank" rel="noopener" }, qui gère pour nous la propriété, les transferts et l'URI des métadonnées.

### <span class="h3">1.3 Où sont stockées les données ?</span>

Il y a **deux étages** dans un NFT, et c'est la clé du projet :

| Étage | Contenu | Où ? | Pourquoi |
| ----- | ------- | ---- | -------- |
| **La blockchain** | Le contrat, le propriétaire, le `tokenId` | BNB Smart Chain | Immuable, vérifiable, propriété prouvée |
| **Le stockage distribué** | L'image et le JSON de métadonnées | IPFS (via Pinata) | Stocker de gros fichiers on-chain coûterait une fortune |

Le contrat ne contient donc **que** l'adresse du JSON de métadonnées (`tokenURI`) ; c'est le wallet qui va chercher l'image à cette adresse pour l'afficher.

Pour aller plus loin : [IPFS & Pinata](ipfs.md).

### <span class="h3">1.4 Le vocabulaire à connaître</span>

- **Wallet (portefeuille)** : application comme MetaMask qui détient tes adresses et tes fonds.
- **Adresse** : une longue chaîne (`0x...`) qui identifie un compte, un peu comme un numéro de compte bancaire.
- **Smart contract** : un programme qui vit sur la blockchain - ici, la fabrique qui crée les NFT.
- **NFT** : un jeton non fongible, unique, régi par la norme ERC-721 / BEP-721.
- **Métadonnées** : le « dossier » du NFT (nom, description, image, attributs) au format JSON.
- **IPFS** : un système de stockage distribué de fichiers.
- **CID** : l'empreinte unique d'un fichier sur IPFS (`ipfs://Qm...`) - elle permet de le retrouver n'importe où.
- **Pinata** : le service qui « épingle » (maintient en ligne) tes fichiers sur IPFS.
- **Gas** : la petite redevance payée pour exécuter une action sur la blockchain.
- **Faucet** : un site qui distribue gratuitement des jetons de test.
- **Testnet** : un réseau de test public où la crypto ne vaut rien.
- **Block explorer (BSCScan)** : un moteur de recherche de la blockchain.

!!! info "Notre objectif"
    Un NFT unique nommé **`Zehd42`** (symbole `Z42`) portant le chiffre **42**, avec une image et des métadonnées épinglées sur IPFS, miné depuis un contrat déployé sur la **BNB Smart Chain Testnet**.

!!! success "Rassure-toi"
    On ne travaille **que** sur le testnet. Aucun argent réel n'est engagé, et aucun code n'est dangereux pour ta machine.

---

## <span class="h2">2. Installer MetaMask et ajouter le réseau de test</span>

**MetaMask** est le portefeuille qui va signer les transactions du contrat.

!!! tip "Objectif"
    MetaMask installé, connecté au **BSC Testnet**, avec une adresse prête à l'emploi.

### <span class="h3">2.1 Installer l'extension</span>

1. Va sur `https://metamask.io` et installe l'extension pour ton navigateur (ou l'application mobile).
2. Crée un portefeuille, choisis un mot de passe, puis **note la phrase de récupération** sur papier.

!!! danger "Attention"
    La phrase de récupération (*seed phrase*) **ne se partage jamais** et ne se stocke pas dans un fichier ou un dépôt Git. C'est la clé de tes fonds, même en test.

### <span class="h3">2.2 Ajouter le réseau BSC Testnet</span>

MetaMask arrive configuré sur Ethereum. Il faut lui ajouter le réseau de test de la BNB Smart Chain.

- Ouvre MetaMask → menu des réseaux → **Ajouter un réseau manuellement**.
- Renseigne :

    | Champ | Valeur |
    | ----- | ------ |
    | Nom du réseau | `BSC Testnet` |
    | Nouvelle URL RPC | `https://data-seed-prebsc-1-s1.binance.org:8545/` |
    | ID de chaîne | `97` |
    | Symbole de la monnaie | `tBNB` |
    | URL de l'explorateur de blocs | `https://testnet.bscscan.com` |

- Enregistre, puis **sélectionne le réseau BSC Testnet**.

!!! info "Astuce"
    Le sélecteur de réseau en haut de MetaMask affiche le réseau actif. Tout déploiement se fera sur celui qui est sélectionné : vérifie-le **avant** chaque transaction importante.

### <span class="h3">2.3 Copier ton adresse</span>

1. Clique sur le nom du compte en haut de MetaMask pour copier l'adresse publique (`0x...`).
2. Garde-la sous la main : c'est elle qui recevra le NFT et qui apparaîtra dans `ownerOf(1)`.

!!! success "Vérif"
    La case réseau affiche **BSC Testnet** et une adresse en `0x` est copiée.

---

## <span class="h2">3. Récupérer des tBNB gratuits (faucet)</span>

Chaque transaction coûte du **gas**, payé en `tBNB` (BNB de test). Le *faucet* en distribue gratuitement.

!!! tip "Objectif"
    Un solde non nul en tBNB sur l'adresse MetaMask.

### <span class="h3">3.1 Utiliser le faucet de BNB Chain</span>

1. Va sur le [faucet BNB Chain](https://www.bnbchain.org/en/testnet-faucet){ target="_blank" rel="noopener" }.
2. Colle ton adresse MetaMask et valide le captcha.
3. Attends la transaction : quelques `tBNB` arrivent sur ton compte.

!!! warning "Si tu n'as rien reçu"
    Certains faucets limitent les demandes par adresse et par jour. Réessaie plus tard, et vérifie que tu as bien collé une adresse du **BSC Testnet** (et non du réseau principal).

!!! success "Vérif"
    MetaMask affiche un solde en `tBNB`. Cela suffit largement pour tout le tutoriel.

---

## <span class="h2">4. Écrire le smart contract du NFT</span>

On écrit le programme qui **fabrique** le NFT en **Solidity**. On réutilise la bibliothèque **OpenZeppelin** qui fournit un ERC-721 éprouvé (pas besoin de tout réinventer, c'est plus sûr - et c'est explicitement recommandé par le sujet).

!!! tip "Objectif"
    Un fichier `zehd42.sol` correct, commenté.

### <span class="h3">4.1 Le code complet du contrat</span>

Ce fichier doit aller dans le dossier `code/` de ton dépôt sous le nom `zehd42.sol` :

```solidity
// SPDX-License-Identifier: MIT
// Zehd42 - NFT non fongible (BEP-721 / ERC-721) sur la BNB Smart Chain
pragma solidity ^0.8.20;

// Imports OpenZeppelin v5.1.0 : ERC721 (standard), ERC721URIStorage (URI), Ownable (propriété)
import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/v5.1.0/contracts/token/ERC721/ERC721.sol";
import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/v5.1.0/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/v5.1.0/contracts/access/Ownable.sol";

contract Zehd42 is ERC721URIStorage, Ownable {
    // Compteur des tokens créés (ids à partir de 1) :
    uint256 private _tokenIds;

    // URI de base des métadonnées (IPFS) :
    string public baseURI;

    // Constructeur : nom, symbole et URI de base :
    constructor(string memory _baseURI) ERC721("Zehd42", "Z42") Ownable(msg.sender) {
        baseURI = _baseURI;
    }

    // Miner un NFT, réservé au propriétaire :
    function mintNFT(address recipient) public onlyOwner returns (uint256) {
        _tokenIds += 1;                    // nouvel id
        uint256 newTokenId = _tokenIds;
        _safeMint(recipient, newTokenId);  // vérifie que le destinataire accepte le NFT
        _setTokenURI(newTokenId, baseURI); // associe les métadonnées IPFS
        return newTokenId;
    }

    // Changer l'URI de base des prochains mints (réservé au propriétaire)
    // Fait évoluer l'emplacement des métadonnées sans changer l'adresse du contrat :
    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }
}
```

### <span class="h3">4.2 Expliquer les mots du code</span>

| Élément | Explication |
| ------- | ----------- |
| `pragma solidity ^0.8.20;` | Version du langage utilisée (≥ 0.8.20). |
| `contract Zehd42 is ERC721URIStorage, Ownable` | On **hérite** du standard OpenZeppelin et du module `Ownable` (gestion du propriétaire). |
| `ERC721("Zehd42", "Z42")` | Le nom et le symbole de la collection, passés au constructeur parent. |
| `_tokenIds` | Compteur privé : chaque mint incrémente l'id, donc chaque NFT est unique. |
| `_safeMint(recipient, newTokenId)` | Crée le NFT **et vérifie** que le destinataire est capable de le recevoir (norme ERC-721). |
| `_setTokenURI(newTokenId, baseURI)` | Associe au jeton l'URL des métadonnées - c'est `tokenURI(1)` en lecture. |
| `onlyOwner` | Modificateur apporté par `Ownable` : bloque la fonction si l'appelant n'est pas le propriétaire. |
| `setBaseURI(...)` | Permet de changer l'URI des **prochains** mints sans redéployer ; les jetons déjà minés gardent leur `tokenURI`. |

!!! info "Pourquoi `_safeMint` et pas `_mint` ?"
    `_safeMint` vérifie que le destinataire est un contrat capable de recevoir des NFT (`onERC721Received`), ou un simple compte externe. C'est la pratique recommandée pour éviter de « perdre » un NFT dans un contrat qui ne sait pas le gérer.

### <span class="h3">4.3 Mettre à jour ton dépôt</span>

1. Ouvre `code/zehd42.sol` et colle le code ci-dessus.
2. Assure-toi que chaque fonction a bien un commentaire lisible.

---

## <span class="h2">5. Compiler avec Remix</span>

**Remix IDE** est l'IDE en ligne recommandé par le sujet : il permet d'écrire, compiler et déployer sans rien installer.

!!! tip "Objectif"
    Ton code compile sans erreur.

### <span class="h3">5.1 Ouvrir Remix et créer le fichier</span>

1. Va sur `https://remix.ethereum.org`.
2. Dans l'explorateur de fichiers, crée un dossier `contracts` s'il n'existe pas, puis un fichier `zehd42.sol`.
3. Colle le code du contrat et enregistre (`Ctrl+S`).

### <span class="h3">5.2 Comprendre les imports</span>

Le contrat importe directement OpenZeppelin **v5.1.0** par URL :

```solidity
import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/v5.1.0/contracts/token/ERC721/ERC721.sol";
```

!!! info "Pourquoi cette version ?"
    La **v5.1.0** ne dépend pas de l'opcode `mcopy`, ce qui simplifie la compilation avec la version d'EVM par défaut de Remix.

Remix télécharge automatiquement les imports lors de la compilation, tu n'as rien à installer manuellement.

### <span class="h3">5.3 Choisir la version et compiler</span>

1. Ouvre l'onglet **Solidity Compiler**.
2. Choisis une version **0.8.20 ou supérieure** (l'import exige `^0.8.20`).
3. Clique sur **Compile zehd42.sol**.

!!! warning "Erreurs fréquentes"
    - *Source not found* : l'URL d'import est incomplète ou mal copiée> Vérifie la ligne `import`.
    - *ParserError* : la version de Solidity sélectionnée est trop ancienne (il faut ≥ 0.8.20).
    - *Identifier already declared* : le fichier existe en double dans l'explorateur de Remix.

!!! success "Vérif"
    Une coche verte apparaît sur l'onglet *Solidity Compiler*.

---

## <span class="h2">6. Publier l'image et les métadonnées sur IPFS</span>

On ne met **pas** l'image dans le contrat (ce serait hors de prix). On la publie sur **IPFS** via **Pinata**, puis on met le lien dans les métadonnées.

!!! tip "Objectif"
    Deux CID IPFS : celui de l'image, puis celui du JSON de métadonnées.

### <span class="h3">6.1 Préparer l'œuvre</span>

L'image doit remplir les exigences du sujet :

- une image originale contenant le chiffre **42** clairement lisible ;
- un format `.png` ou `.jpg` ;
- aucun terme ni contenu insultant.

Place-la dans `images/` de ton dépôt (par exemple `images/Zehd42.png`).

### <span class="h3">6.2 Créer un compte Pinata</span>

1. Va sur [pinata.cloud](https://www.pinata.cloud){ target="_blank" rel="noopener" } et crée un compte gratuit.
2. Une fois connecté, l'onglet **Files** liste les fichiers épinglés.

!!! info "L'offre gratuite suffit"
    Le quota d'épinglage gratuit est très large pour quelques fichiers. Une clé API n'est **pas** nécessaire pour ce projet : la clé secrète se garde confidentielle.

### <span class="h3">6.3 Épingler l'image</span>

1. Onglet **Files** → **Add Files** → **File**.
2. Sélectionne l'image, puis clique sur **Upload**.
3. Dans la liste, copie la colonne **CID** : c'est le *CID image*.

### <span class="h3">6.4 Écrire les métadonnées (JSON)</span>

Crée `code/zehd42.json` - c'est le « dossier » du NFT, que les wallets vont lire :

```json
{
  "name": "Zehd42",
  "description": "Un NFT unique créé dans le cadre du projet Zehd42. L'œuvre représente la réponse... et bien sûr, le 42.",
  "image": "https://gateway.pinata.cloud/ipfs/<CID_IMAGE>",
  "attributes": [
    { "trait_type": "Artiste", "value": "alamizan" },
    { "trait_type": "Projet", "value": "Zehd42" }
  ]
}
```

!!! warning "Deux pièges classiques"
    - Le champ `image` doit contenir **l'URL HTTPS de passerelle** (`https://gateway.pinata.cloud/ipfs/<CID_IMAGE>`), pas un chemin local ni un `ipfs://`.
    - Aucun **espace parasite** en début ou en fin d'URL : c'est un bug constaté sur ce projet, le wallet affiche alors une case vide.

### <span class="h3">6.5 Épingler les métadonnées</span>

1. Refaire **Add Files** → **File** avec `code/zehd42.json`.
2. Copier son **CID** : il **diffère** de celui de l'image (deux contenus distincts). C'est le *CID JSON*.
3. Tester l'affichage : `https://gateway.pinata.cloud/ipfs/<CID_JSON>` doit renvoyer le JSON.

!!! success "Vérif"
    Tu as deux CID, et l'URL de passerelle du JSON s'affiche dans le navigateur. **Ne supprime plus ces fichiers du tableau de bord Pinata** : tant qu'ils sont épinglés, ils restent disponibles.

---

## <span class="h2">7. Déployer sur la BSC Testnet</span>

On déploie le contrat en lui passant l'**URL de passerelle du JSON** : c'est le `_baseURI` du constructeur.

!!! tip "Objectif"
    Une adresse de contrat déployée et reliée à tes métadonnées IPFS.

### <span class="h3">7.1 Connecter Remix à MetaMask</span>

1. Dans Remix, ouvre l'onglet **Deploy & Run Transactions**.
2. Dans **Environment**, choisis **Injected Provider - MetaMask**.

!!! warning "Si rien ne se connecte"
    Vérifie que MetaMask est déverrouillé, que le réseau **BSC Testnet** est bien sélectionné, puis accepte la connexion demandée par Remix.

### <span class="h3">7.2 Lancer le déploiement</span>

1. Dans le champ du constructeur, saisis le `_baseURI` :

```text
https://gateway.pinata.cloud/ipfs/<CID_JSON>
```

2. Clique sur **Deploy**.
3. MetaMask ouvre une fenêtre : vérifie le réseau (**BSC Testnet**) et confirme.
4. Attends la confirmation : le contrat apparaît dans **Deployed Contracts**.

!!! info "Coût du déploiement"
    Le déploiement consomme du `tBNB` de test (quelques dixièmes suffisent largement). Aucun fonds réel n'est engagé.

### <span class="h3">7.3 Récupérer l'adresse du contrat</span>

1. Déplie le contrat déployé dans Remix.
2. Copie l'icône « copier » à côté de son adresse.
3. Vérifie que ce sont bien tes métadonnées qui sont référencées en lisant `baseURI()`.

!!! success "Réussi !"
    Le contrat répond à `baseURI()`, `name()` et `symbol()` (`Zehd42` / `Z42`).

---

## <span class="h2">8. Miner le NFT et vérifier la propriété</span>

Le NFT n'existe pas encore : le contrat n'est que la **fabrique**. Il faut appeler `mintNFT`.

!!! tip "Objectif"
    Le `tokenId` **1** miné, propriétaire et `tokenURI` vérifiés.

### <span class="h3">8.1 Miner le NFT</span>

1. Dans **Deployed Contracts**, déplie le contrat.
2. Repère la fonction `mintNFT` et colle ton adresse MetaMask comme `recipient`.
3. Clique sur **transact** et confirme dans MetaMask.

!!! warning "Tu dois être le propriétaire"
    `mintNFT` est protégé par `onlyOwner`. Si tu appelles la fonction depuis une autre adresse, la transaction est annulée avec `revert` - c'est le comportement attendu et **exactement ce qu'il faut montrer à l'évaluation**.

### <span class="h3">8.2 Vérifier en lecture</span>

Un appel `transact` modifie la chaîne ; un appel bleu (lecture) ne coûte rien et ne nécessite pas de signature.

| Appel | Résultat attendu |
| ----- | ---------------- |
| `mintNFT(<ton adresse>)` | Un `tokenId` retourné. Le premier vaut **1** |
| `ownerOf(1)` | Ton adresse |
| `tokenURI(1)` | `https://gateway.pinata.cloud/ipfs/<CID_JSON>` |
| `balanceOf(<ton adresse>)` | `1` |
| `baseURI()` | `https://gateway.pinata.cloud/ipfs/<CID_JSON>` |

---

## <span class="h2">9. Vérifier et publier sur BSCScan</span>

La vérification rend ton code source **public** et prouve que le contrat déployé correspond exactement à celui que tu as écrit.

!!! tip "Objectif"
    Le contrat vérifié sur BSCScan, avec un lien partageable.

### <span class="h3">9.1 Trouver le contrat</span>

1. Copie l'adresse du contrat depuis Remix.
2. Ouvre-la sur [BSCScan Testnet](https://testnet.bscscan.com){ target="_blank" rel="noopener" }.
3. L'onglet **Contract** montre d'abord le *bytecode* : illisible, donc à vérifier.

### <span class="h3">9.2 Vérifier le code source</span>

1. Sur la page du contrat → **Contract** → **Verify and Publish**.
2. Choisis *Solidity (Single file)* si le contrat tient en un seul fichier, sinon *Standard-Json-Input* (obligatoire ici à cause des imports).
3. Renseigne la version du compilateur utilisée dans Remix et l'optimisation activée ou non.
4. Colle le code source et valide.

!!! warning "Si la vérification échoue"
    - **Version du compilateur** ou **optimisation** différente de Remix : ce sont les causes n° 1.
    - Imports multiples : utilise *Standard-Json-Input* et fournis tous les fichiers, ou laisse BSCScan récupérer les imports par URL.
    - Contrat déjà vérifié : dans ce cas, rien à faire, la mention « Verified » est déjà affichée.

!!! success "Résultat"
    La mention **Verified** apparaît, et le code source devient consultable publiquement. Ton NFT est alors exploitable depuis l'explorateur.

---

## <span class="h2">10. Dépannage et questions fréquentes</span>

### <span class="h3">10.1 « Not enough funds for gas »</span>

Ton solde en `tBNB` est vide ou insuffisant. Retourne à l'étape **3** (faucet).

### <span class="h3">10.2 La transaction reste « pending »</span>

Le testnet est parfois congestionné. Attends une minute, puis vérifie la transaction dans l'onglet **Activity** de MetaMask : tu peux en afficher le suivi sur BSCScan.

### <span class="h3">10.3 Le wallet affiche une image cassée</span>

Trois causes possibles, dans l'ordre :

1. `tokenURI(1)` ne pointe pas vers le **JSON** (mais vers l'image) ;
2. le JSON contient une URL d'image invalide ou avec un **espace parasite** ;
3. le fichier n'est plus **épinglé** sur Pinata.

### <span class="h3">10.4 « revert » quand j'appelle `mintNFT` depuis un autre compte</span>

Normal ! `mintNFT` est protégé par `onlyOwner`. C'est le comportement attendu et c'est exactement ce qu'il faut montrer à l'évaluation.

### <span class="h3">10.5 La passerelle Pinata renvoie une page vide</span>

**Propagation IPFS** : un fichier tout juste publié peut mettre de quelques secondes à quelques minutes à être visible via toutes les passerelles. Attends, puis recharge la page.

### <span class="h3">10.6 Est-ce que je risque de perdre de l'argent ?</span>

Non. On ne travaille que sur la **BSC Testnet** avec des `tBNB` de test qui ne valent rien. N'utilise **jamais** le Mainnet ni des fonds réels.

### <span class="h3">10.7 Et si je veux changer les métadonnées après le mint ?</span>

Les métadonnées sont **figées** par CID : modifier le JSON produit un **nouveau** CID. `setBaseURI(...)` (réservé au propriétaire) permet de pointer les **prochains** mints vers les nouvelles métadonnées, sans redéployer le contrat. Les jetons déjà minés conservent leur `tokenURI`.

---

> Lien vers source : [BNB Chain](https://www.bnbchain.org/){ target="_blank" rel="noopener" } · [Remix IDE](https://remix.ethereum.org){ target="_blank" rel="noopener" } · [BSCScan Testnet](https://testnet.bscscan.com){ target="_blank" rel="noopener" } · [OpenZeppelin](https://docs.openzeppelin.com/contracts/){ target="_blank" rel="noopener" } · [Pinata](https://www.pinata.cloud){ target="_blank" rel="noopener" }
