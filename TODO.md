# ZehdBox - Audit complet & Roadmap d'amélioration

> **Document de travail** - Audit réalisé le **18 septembre 2026** · Site vitrine développeur + base de connaissances

| | |
| --- | --- |
| **Score global** | 84 / 100 |
| **Statut** | En amélioration continue |
| **Priorité** | Vitrine / conviction recruteur, puis maintenance du fonds documentaire |
| **Progression** | 9 / 22 chantiers accomplis |
| **Dernière validation** | `properdocs build --strict` (18/09/2026, 0 erreur 0 warning) |

---

## Sommaire

1. [Vitrine recruteur - cohérence et conviction](#vitrine)
2. [Contenu & structure](#contenu)
3. [Maillage interne](#maillage)
4. [Tags & recherche](#tags-recherche)
5. [Design, CSS & performance](#design-css-perf)
6. [SEO & référencement](#seo)
7. [Accessibilité](#accessibilite)
8. [Déploiement & CI/CD](#deploiement-cicd)
9. [Nettoyage & hygiène](#nettoyage)
10. [Idées futures](#idees-futures)

---

## Vitrine recruteur - cohérence et conviction {#vitrine}

> **Objectif** : convaincre en moins de 30 secondes *et* ne jamais contredire les fiches projets.

### P1 - Incohérences Accueil / About vs fiches projets (détectées à l'audit du 18/09)

**Constat** : la page d'accueil et `about.md` contenaient des **informations périmées** qui contredisaient les fiches projets corrigées.

| Emplacement | Correction appliquée |
| --- | --- |
| `docs/index.md` (card Transcendance) | « WebSockets, OAuth 42 » → **Django + Canvas, multijoueur local, FR/EN/ES** |
| `docs/index.md` (card ft_irc) | « conforme à la RFC 1459 » → **RFC 2810-2813** |
| `docs/about.md` (badges Transcendance) | Badges **React / C++ / SQL** → **Django + Canvas + PostgreSQL** |
| `docs/about.md` (desc. Transcendance) | « Pong multiplayer en temps réel avec chat et classements » → **local** |

- [x] Mettre à jour les 4 zones (2 home + 2 about) à partir des fiches projets - fait le 18/09/2026
- [ ] Ajouter une **procédure de contrôle croisé** : à chaque mise à jour de fiche projet, relire `index.md` et `about.md`

### Démos live

- [ ] Ajouter un lien **démo live / déploiement** sur chaque fiche projet (héritage du TODO précédent)

| Projet | Démo live | Action recommandée |
| --- | --- | --- |
| Transcendance | Non | Héberger une instance (Render / Railway / VPS) |
| Tokenizer | Oui | Lien BscScan déjà présent |
| Minishell | Partiel | Dépendances natives → captures + démonstration |
| ft_irc | Partiel | Dépendances natives → captures + démonstration |
| Push_swap | Partiel | Dépendances natives → captures + démonstration |
| So_long | Oui | Vidéo déjà présente |

> **Cible** : uniformiser la section « Lien » de chaque fiche → `[Démo live]` + `[Repo]`

### Accueil - pitch et CTA

- [ ] Remplacer le tagline « Le pouvoir du savoir... » par un **pitch de 1 ligne** (qui tu es, ce que tu cherches : alternance Backend/Data/IA)
- [ ] Ajouter un **CTA « À propos / CV »** visible sur la home (bouton `md-button`) - aujourd'hui About/Contact ne sont accessibles que via la nav
- [ ] Envisager un **CV téléchargeable** (PDF) lié depuis home + about

### Structure des fiches projets

- [x] **Titres harmonisés** (` - ` comme séparateur) - fait le 18/09/2026
- [x] **Badges autonomes** supprimés au profit des sections stack - fait (PR antérieure)
- [ ] Uniformiser la **densité** et la section **« Résultat / retombées »** sur `minishell.md`, `ft_irc.md`, `push_swap.md`

---

## Contenu & structure {#contenu}

### Blog

- [ ] Étoffer `docs/blog/index.md` (quasi vide) : présentation de la thématique, derniers articles, orientation vers les tags
- [x] Les 6 articles du blog ont des `tags:` - fait le 18/09/2026

### Organisation de la navigation

- [x] Typologie **vitrine (Projets)** vs **base de connaissances (Cours/Système/Web/GitHub)** déjà séparée - fait
- [ ] Aligner les **libellés nav** sur les nouveaux titres :
  - `nav: - Push_swap:` → `Push Swap` (incohérent avec le titre de la fiche)
  - Vérifier `So Long` et `FT_IRC` (dénomination désormais utilisée en H1)
- [ ] Évaluer si le tab **« Programmation »** (Python + MkDocs + Strudel) devient trop chargé → déplacer `Strudel` (musique algorithmique) ou `MkDocs` dans une section dédiée
- [ ] Ajouter la feature `content.action.edit` (bouton « Modifier cette page ») - `edit_uri` est déjà configuré, c'est une ligne à activer dans `theme.features`

---

## Maillage interne {#maillage}

> **Constat (audit 08/09 + 18/09)** : des pages restent orphelines (accessibles via la nav uniquement).

### Chantiers (hérités, toujours en attente)

| Chantier | Impact | Statut |
| --- | --- | --- |
| 1 - Chaînage cours Python « Continuer la lecture » | Élevé | Terminé |
| 2 - Bloc « Autres projets » en bas des fiches | Élevé | À faire |
| 3 - Réactiver blog et tags (home + cross-links articles) | Moyen | À faire |
| 4 - Web & cross-links (`react.md`, web3, système) | Moyen | À faire |
| 5 - Strudel : chaînage intro → sons → notes → patterns → effets | Faible | À faire |

### Détails

- [ ] Encart « Autres projets » en bas des 6 fiches (fi. `transcendance` → `ft_irc`, `push_swap`, index, etc.)
- [ ] Ajouter une **carte Blog** dans les grid cards de la home (aujourd'hui le blog n'est pas mis en avant)
- [ ] `blog/index.md` → lien « Explorer par tags » vers `tags.md`
- [ ] Cross-links articles : `fourmis` ↔ `puces` ; `mutilation_pigeon` ↔ `hierarchie_rats`
- [ ] `react.md` : lier depuis `cours/javascript` et `web/web2/index`
- [ ] web3 : `blockchain` ↔ `tokenizer` ; `etherscan` ↔ `bscscan`
- [ ] `systeme/nettoyage-disque` → lien vers `systeme/linux/index`
- [x] Lier `tags.md` depuis du contenu : les chips de toutes les pages taggées pointent vers `tags/#tag:x` (marqueur `<!-- material/tags -->`) - fait le 18/09/2026

---

## Tags & recherche {#tags-recherche}

- [x] **Ajouter `tags:` en front matter aux pages de cours** : **0 page de contenu sans tags** (76 pages taggées hors blog, home, about, contact, tags.md et template) - fait le 18/09/2026
  - Lots : systeme+github (9) · mkdocs+strudel (13) · web (12) · cours/python (28)
  - Tags normalisés en kebab-case sans accent ; tag fantôme `matplotlib` retiré
- [x] **Variante avancée du plugin tags** : icônes sur chips + TOC allégé de l'index - fait le 18/09/2026
  - `toc: false` sur le marqueur → les 86 sections `#tag:xxx` ne polluent plus la sidebar de la page Tags
  - Icônes Material/Simple Icons sur **31 tags** tech/domaine (`extra.tags` + `theme.icon.tag`) ; défaut `material/pound` pour les autres
  - Étape « hide: tags » abandonnée : les hubs vitrine n'ont pas de chips, les chips des hubs de sections sont informatifs
- [ ] Vérifier le comportement de `navigation.prune` (page `tags.md` listée dans la nav - à confirmer sur mobile)
- [ ] Option : ajouter `search.share` dans `theme.features` pour partager des résultats de recherche

---

## Design, CSS & performance {#design-css-perf}

### CSS dupliqué

- [ ] **Supprimer les définitions dupliquées** dans `docs/css/custom.css` (639 lignes)

| Sélecteur | Occurrence 1 | Occurrence 2 |
| --- | --- | --- |
| `.badge-row` | ~ligne 110 | ~ligne 581 |
| `.badge-category` | ~ligne 103 | ~ligne 572 |
| `.project-card` | ~ligne 128 | ~ligne 550+ |
| `.tech-tag` / `project-hero` | une seule fois | — |

> Réconcilier hauteurs/justification avant fusion, puis re-test mode clair/sombre.

### Images & poids

- [ ] **Alléger le site (22 Mo de `docs/`)** :
  - Convertir les `.jpeg`/`.png` lourds en `.webp` (ex. `linear_regression.jpeg`, captures Etherscan/BscScan)
  - [x] Supprimer `Gemini_Generated_Image_ofbn0ofbn0ofbn0o.jpeg` : image orpheline détectée par script (1,8 Mo libérés) - fait le 18/09/2026
- [ ] Ajouter `loading="lazy"` sur les images de contenu (perf mobile) - via `attr_list` (`{ loading=lazy }`)
- [ ] Activer `minify_js: true` et `minify_css: true` dans le plugin `minify` (aujourd'hui seul `minify_html` est actif)

---

## SEO & référencement {#seo}

- [x] **Descriptions SEO** : 100 % des pages ont une `description:` - fait
- [x] **Tirets normalisés** partout (` - `) - titles, H1, descriptions, contenu - fait le 18/09/2026
- [ ] **Meta OG / Twitter différenciée par page projet** : le plugin `social` génère une carte par page, mais le layout est identique → personnaliser les cartes des 6 fiches projets (image + titre projet) pour le partage LinkedIn/Twitter
- [ ] **Sitemap** : soumis dans GSC le 08/09 (« Impossible de lire ») - à re-tester, sinon `sitemap.xml.gz`
- [ ] **Analytics** : confirmer que `G-74MZWWS1RR` collecte réellement après acceptation du consentement (cohérence bandeau sur la config, reste à vérifier dans GA4)
- [ ] Vérifier que `robots.txt` présent dans `docs/` est servi sur GitHub Pages (le fichier existe)

---

## Accessibilité {#accessibilite}

- [ ] **Contraste** : `.intro` (`color: #90a4ae`) risque d'être trop clair en mode clair → tester avec un outil de contraste (cible AA ≥ 4.5:1)
- [ ] Vérifier les `alt` de toutes les images (grep `![]` et `<img>`) - `about`, fiches projets et blog
- [ ] Ajouter `aria-label` sur les liens icones seuls (ex. boutons sociaux) si présents
- [ ] Vérifier le flot de lecture mobile (tout le contenu passe sous la nav ?) avec les features `navigation.path` + `header.autohide`

---

## Déploiement & CI/CD {#deploiement-cicd}

- [x] `--strict` activé dans le workflow GitHub Actions - fait
- [x] `fetch-depth: 0` présent (dates de révision fiables) - fait
- [ ] Vérifier le **dernier run GitHub Actions** après le prochain push (build + deploy)
- [ ] Option : ajouter un **job de vérification des liens externes** (ou workflow manuel) pour attraper les URLs 404 vers shields.io / docs externes
- [ ] Penser à un **test de non-régression** : vérifier périodiquement que `docs/` ne grossit pas démesurément (22 Mo aujourd'hui)

---

## Nettoyage & hygiène {#nettoyage}

- [x] Supprimer `backup/` (répertoire vide à la racine) - fait le 18/09/2026
- [x] Purger `ZehdBox/node_modules/` si non utilisé (déjà gitignoré - confort disque) - fait le 18/09/2026 (coquille vide `bootstrap-icons`)
- [x] Supprimer les **assets orphelins** : fichiers images non référencés dans le Markdown (script de détection à écrire) - fait le 18/09/2026 (1 orphelin sur 20, 1,8 Mo)
- [x] Homogénéiser l'orthographe `Tokenizer` vs `Tokeniser` : repo renommé `Lamizana/Tokenizer`, liens mis à jour - fait le 18/09/2026
- [x] `docs/blog/.authors.yml` : description « Createur » → corriger l'orthographe « Créateur » - fait le 18/09/2026

---

## Idées futures {#idees-futures}

- [ ] Page « Changelog » / « Journal » pour suivre les évolutions du site
- [ ] Filtre par tag sur la page d'accueil du blog
- [ ] Page 404 personnalisée (l'activation nécessite un override du thème - Material n'expose pas de `404.md` natif)
- [ ] Séparer physiquement `docs/` en `projects/` et `notes/` si le contenu grossit encore (anticiper avant que la nav ne devienne ingérable)
- [ ] Ajouter un système de statut sur les pages de cours (`à jour` / `à revoir` / `obsolète`) via front matter ou admonition

---

*Audit 18/09/2026 : `properdocs build -f ZehdBox/properdocs.yml --strict` valide (6,4 s). Tant que ce fichier existe dans le working tree, considérer les `[ ]` comme des chantiers ouverts.*