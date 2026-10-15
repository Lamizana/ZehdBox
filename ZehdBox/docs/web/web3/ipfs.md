---
title: IPFS & Pinata
description: "Comprendre IPFS et Pinata : stockage distribué, adressage par contenu (CID), épinglage, passerelles et rôle dans les métadonnées d'un NFT."
tags:
  - cours
  - web3
  - blockchain
  - ipfs
---

# <span class="h1">IPFS & Pinata</span>

<p class="intro">
    Le <strong>registre distribué</strong> (IPFS) et le service d'<strong>épinglage</strong> (Pinata) utilisés pour héberger l'image et les métadonnées d'un NFT.
</p>

---

## <span class="h2">Qu'est-ce qu'IPFS ?</span>

L'**IPFS** (*InterPlanetary File System*) est un protocole **pair-à-pair** de distribution de contenu, conçu à l'origine par [Juan Benet](https://fr.wikipedia.org/wiki/Juan_Benet){ target="_blank" rel="noopener" } et principalement implémenté en Go.

C'est un système de fichiers **distribué** et **adressé par contenu** : chaque fichier reçoit un **CID** (*Content Identifier*), une empreinte cryptographique figée. Le même contenu produit le même CID, où que ce soit sur le réseau. Les fichiers sont répliqués entre les nœuds, ce qui les rend résistants à la censure et sans point de défaillance unique.

!!! note "CID et épinglage"
    Un CID pointe vers un contenu **immuable**. Pour garantir sa disponibilité, le fichier doit être **épinglé** (*pinning*) par au moins un service.
    
    C'est le rôle de Pinata (voir [Pinata, le service d'épinglage](#pinata-le-service-depinglage)).

---

## <span class="h2">Pourquoi IPFS et pas un serveur classique ?</span>

Avant de manipuler Pinata, il faut saisir **pourquoi** on ne met pas simplement l'image sur un site web classique. C'est une question que les évaluateurs adorent poser.

Si l'image vit sur un seul serveur (hébergeur, site, réseau social…), tout dépend d'un point unique, qui peut :

- **tomber en panne** → l'image disparaît ;
- **fermer** ou supprimer le contenu → les liens deviennent « morts » ;
- **être censuré** ou modifié sans ton accord.

!!! important "Un NFT est fait pour durer"
    Un NFT est censé durer et prouver durablement une propriété. Le lier à un serveur central fragile est donc contre-productif.

---

## <span class="h2">Adressage par contenu, immuabilité, déduplication</span>

Contre l'approche centralisée, IPFS introduit deux idées majeures :

- **Adressage par contenu** : un fichier n'est pas identifié par son *emplacement* (comme une URL `/images/token.png`) mais par son *contenu*, via un **CID**.
    - Le même contenu donne toujours le même CID, partout.
- **Déduplication et immuabilité** : deux personnes ayant le même fichier partagent le même CID. Modifier ne serait-ce qu'un pixel change complètement le CID :
    - un CID pointe donc toujours vers un contenu **exactement identique**.

!!! warning "Un CID est figé"
    Si tu modifies l'image ou le JSON, tu obtiens un **nouveau CID**. L'ancien reste intact, mais pointe vers l'ancien contenu.

---

## <span class="h2">Épinglage et passerelles</span>

- **Épinglage (*pinning*)** : sur IPFS, un fichier n'est lisible que si au moins un nœud le **maintient en ligne**. « Épingler » un fichier, c'est s'engager à le garder disponible. Sans épinglage, un contenu peut disparaître.
- **Passerelles (*gateways*)** : les navigateurs ne parlent pas IPFS nativement. Une passerelle est un site web qui traduit un CID en URL web classique :

```text
https://gateway.pinata.cloud/ipfs/<CID>
```

!!! tip "HTTPS plutôt que `ipfs://`"
    Pour l'affichage garanti dans les wallets (MetaMask, OpenSea), préfère l'**URL HTTPS de passerelle** au schéma `ipfs://` (dont la résolution dépend du wallet). C'est le choix retenu pour le NFT de ce site.

---

## <span class="h2">Pinata, le service d'épinglage</span>

Pinata est un **service d'épinglage** (*pinning service*). Plutôt que de monter et d'entretenir son propre nœud IPFS (technique, coûteux, fragile), Pinata héberge et épingle les fichiers pour nous, tout en offrant une interface web, des statistiques et une API. 

C'est l'un des prestataires les plus utilisés dans l'écosystème NFT.

!!! tip "Ressources"
    - Site : [pinata.cloud](https://www.pinata.cloud){ target="_blank" rel="noopener" }
    - Documentation : [docs.pinata.cloud](https://docs.pinata.cloud){ target="_blank" rel="noopener" }

### <span class="h3">Serveur classique vs IPFS (+ Pinata)</span>

| Critère | Serveur classique | IPFS (+ Pinata) |
| ------- | ----------------- | --------------- |
| **Adressage** | Par emplacement (URL) | Par contenu (CID) |
| **Infrastructure** | Centralisée, un point unique | Distribuée, pair-à-pair |
| **Risque de lien mort** | Élevé (panne, fermeture, censure) | Faible si épinglé |
| **Modification** | Possible sur place | Impossible (CID = contenu figé) |
| **Durabilité** | Dépend du serveur unique | Dépend de l'épinglage (géré par Pinata) |

---

## <span class="h2">Ce qui est publié sur IPFS</span>

Deux fichiers sont publiés sur IPFS (via Pinata) pour un NFT :

- **L'image** : l'œuvre elle-même (ici, un `.png` avec le chiffre **42** lisible - exigence du sujet).
- **Les métadonnées** : un fichier **JSON** qui décrit le NFT (nom, description, image, attributs). Les wallets lisent ce JSON, pas l'image directement.

Et c'est ce **CID du JSON** qui sert de `baseURI` dans le contrat du NFT.

!!! warning "Le piège classique"
    `tokenURI` doit pointer vers le **JSON de métadonnées**, pas directement vers l'image : sinon les wallets affichent une case vide.

### <span class="h3">Alternatives à Pinata</span>

Pinata est un excellent choix, mais il n'est pas le seul : **NFT.Storage**, **Web3.Storage**, **Filebase**, **Infura IPFS**, un **nœud IPFS personnel**, ou le stockage **directement on-chain** (JSON en base64).

Peu importe le prestataire, tant que l'image et les métadonnées sont **accessibles durablement** via un identifiant de contenu.

---

!!! abstract "Mettre en pratique"
    La procédure complète (créer un compte, uploader l'image et le JSON, récupérer les CID) est détaillée à l'étape **F** du [tutoriel TokenizeArt](tokenizeart.md).

    Sa fiche projet : [TokenizeArt](../../projets/tokenizeart.md) · Concept lié : [NFT & ERC-721](nft.md).

---

> Lien vers source : [IPFS](https://ipfs.tech/){ target="_blank" rel="noopener" } · [Pinata](https://www.pinata.cloud){ target="_blank" rel="noopener" }
