---
title: NFT & ERC-721
description: "Comprendre les NFT : jetons non fongibles, norme ERC-721 / BEP-721, identifiant numérique, droits associés et différence entre OpenSea et Pinata."
tags:
  - cours
  - web3
  - blockchain
  - nft
---

# <span class="h1">NFT & ERC-721</span>

<p class="intro">
    Un NFT est un <strong>certificat numérique d'authenticité</strong> et de propriété associé à un objet virtuel ou réel, enregistré sur une <strong>blockchain</strong>.
</p>

---

## <span class="h2">Qu'est-ce qu'un NFT ?</span>

Un **NFT** (*non-fungible token*), ou jeton non fongible (**JNF**), est un objet informatique.

Ce jeton est suivi, stocké et authentifié grâce à un protocole de [blockchain](blockchain.md), auquel est rattaché **un identifiant numérique** qui le rend unique et non fongible.

Ce jeton accorde des droits de propriété ou autres sur un objet réel ou virtuel :

- Une œuvre d'art (souvent numérique).
- Un contrat.
- Un diplôme.
- ...

Il est associé à un compte propriétaire comme tout jeton de blockchain, mais parce que le jeton est **non fongible**, le propriétaire est **garanti unique** :

- C'est cette unicité qui donne sa valeur au jeton.

D'un point de vue technique, **les jetons non fongibles ne sont pas interchangeables**. Cette unicité de chaque jeton contraste avec la fongibilité des unités de cryptomonnaies comme le Bitcoin et de nombreux jetons utilitaires (*utility tokens*).

Ainsi, la valeur d'un jeton est déterminée par le jeu de l'offre et de la demande, sans régulation de marché, et liée à la valeur symbolique associée à l'objet représenté.

Le plus souvent, les NFT sont générés par des **contrats intelligents** associés à la blockchain Ethereum, selon le modèle de *smart contract* **ERC-721**. Mais des blockchains spécifiques à la gestion des NFT apparaissent de plus en plus.

!!! note "Paiement"
    Les NFT se paient en général en cryptomonnaie, le plus souvent sur la même blockchain que celle des NFT.

---

## <span class="h2">Définitions</span>

### <span class="h3">Identifiant numérique</span>

**L'identité numérique** (***IDN***) est définie comme **un lien technologique** entre une entité réelle (personnes, organismes) et des entités virtuelles (sa ou ses représentations numériques).

Elle permet *l'identification de l'individu en ligne* ainsi que la mise en relation de celui-ci avec l'ensemble des communautés virtuelles présentes sur le **Web**.

### <span class="h3">Fongible</span>

Un bien fongible est un **bien sans identité propre**, que l'on peut mesurer, compter ou peser, et qui peut indifféremment être échangé contre un autre bien du même genre :

- Riz
- Monnaie
- …

### <span class="h3">Smart contract (contrat intelligent)</span>

Ce sont des **protocoles informatiques** qui facilitent, vérifient et exécutent la négociation ou l'exécution d'un contrat.

### <span class="h3">ERC-721</span>

*C'est une norme pour les NFT qui implémente une API pour les jetons au sein des contrats intelligents.*

**ERC-721** a été la première norme, dans l'écosystème **Ethereum**, pour la représentation des actifs numériques non fongibles.

C'est un standard de contrat [Solidity](https://fr.wikipedia.org/wiki/Solidity){ target="_blank" rel="noopener" }. Il est **héritable**, ce qui signifie que les développeurs peuvent facilement créer de nouveaux contrats conformes à la norme ERC-721 en important la bibliothèque [OpenZeppelin](https://docs.openzeppelin.com/contracts/){ target="_blank" rel="noopener" }.

Il fournit des fonctionnalités telles que :

- Le **transfert de jetons** d'un compte à un autre.
- L'**obtention du solde actuel** de jetons d'un compte.
- L'**obtention du propriétaire** d'un jeton spécifique.
- L'**offre totale** du jeton disponible sur le réseau.

En plus de celles-ci, il possède également d'autres fonctionnalités, comme approuver qu'une quantité de jetons d'un compte puisse être déplacée par un compte tiers.

!!! info "BEP-721 : la variante BNB Smart Chain"
    **BEP-721** est le nom donné à la norme ERC-721 sur la **BNB Smart Chain**. L'interface est identique : un contrat BEP-721 est donc un contrat ERC-721 déployé sur BSC. C'est la norme utilisée pour les NFT de ce site, comme le montre la fiche [TokenizeArt](../../projets/tokenizeart.md).

---

## <span class="h2">Droits associés au NFT</span>

*Un NFT associe des droits sur un objet unique du monde réel ou virtuel à un détenteur unique.*

Les droits ne sont pas forcément et pas généralement des droits de propriété sur l'objet associé. **On est propriétaire du NFT, mais pas forcément de l'objet associé au NFT.**

!!! note "Le lien compte autant que le jeton"
    Il importe donc de savoir comment est réalisé ce lien et quels sont les droits que donne le fait de posséder un NFT.

Pour les protocoles NFT les plus connus, il existe des licences générales qui établissent les droits que donne la détention d'un NFT.
Une joueuse de tennis a émis un NFT sur son bras, mais la « propriété » du bras donne simplement le droit d'y afficher des publicités.
*Le NFT est un objet « en plus » de l'objet qu'il représente et ne s'identifie pas à lui, malgré le lien.* Il peut être **comparé à une photo dédicacée** : elle est **non fongible** (la signature ou la dédicace est unique) et **appartient au dédicataire**, qui a des droits dessus et peut porter plainte si elle est volée, mais elle **ne donne aucun droit sur la photo**, qui appartient toujours au photographe et encore moins sur la personne représentée.

!!! warning "Droits flous"
    Les droits associés à la possession d'un NFT sont souvent flous et peuvent donner lieu à des imbroglios judiciaires.

---

## <span class="h2">Tiers de confiance</span>

*Il est nécessaire d'associer un identifiant numérique liant le NFT à l'objet qu'il représente.*

Le protocole des NFT n'est pas entièrement décentralisé, car il est nécessaire qu'un **tiers de confiance**, comme **Pinata** par exemple, associe un identifiant numérique liant le NFT à l'objet réel ou virtuel qu'il représente.

Le lien, l'identifiant est placé de manière infalsifiable par le tiers de confiance dans le NFT, peut être :

- **Un objet numérique** : une URL vers un tweet par exemple, ou un hachage cryptographique de l'œuvre numérique.
- **Un objet réel** : c'est alors au tiers de confiance d'assurer l'identification et la traçabilité vers l'objet réel.

---

## <span class="h2">OpenSea et Pinata : deux rôles complémentaires</span>

**OpenSea** et **Pinata** sont deux outils incontournables de l'écosystème NFT, mais ils remplissent des rôles totalement différents et complémentaires.

Pour faire simple :

- **OpenSea est la boutique (la vitrine)** où l'on échange les NFT.
- **Pinata est le coffre-fort (le serveur de stockage)** où sont conservés les fichiers numériques de ces NFT.

| Caractéristique | OpenSea | Pinata |
| --------------- | ------- | ------ |
| **Rôle principal** | Place de marché (*marketplace*) | Hébergement et stockage de fichiers |
| **Ce qu'on y fait** | Acheter, vendre, échanger et lister des NFT | Stocker images, vidéos, fichiers 3D et métadonnées |
| **Technologie** | Blockchain (Ethereum, Polygon, Solana…) | [IPFS](ipfs.md) (*InterPlanetary File System*) |
| **Public cible** | Collectionneurs, acheteurs, vendeurs et créateurs | Développeurs et créateurs de collections de NFT |

---

!!! abstract "Mettre en pratique"
    Les mécanismes de stockage distribué sont détaillés dans la page [IPFS & Pinata](ipfs.md).

    Le [tutoriel TokenizeArt](tokenizeart.md) montre comment créer, déployer et vérifier un **NFT BEP-721 réel** sur la BNB Smart Chain Testnet.
    
    Sa fiche projet : [TokenizeArt](../../projets/tokenizeart.md).

---

> Lien vers source : [ERC-721](https://eips.ethereum.org/EIPS/eip-721){ target="_blank" rel="noopener" } · [OpenZeppelin ERC-721](https://docs.openzeppelin.com/contracts/5.x/erc721){ target="_blank" rel="noopener" }
