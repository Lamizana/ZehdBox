# ✅ ZehdBox — Roadmap d'amélioration

> **Document de travail** — Audit réalisé le **07 septembre 2026** · Site vitrine développeur

| | |
|---|---|
| 🏆 **Score global** | 86 / 100 |
| 📝 **Statut** | En cours d'amélioration continue |
| 🚀 **Priorité** | Vitrine / conviction recruteur |
| 📈 **Progression** | 2 / 15 tâches accomplies |

---

## 📑 Sommaire

1. [🚀 Priorité haute — Vitrine recruteur](#-priorité-haute--vitrine--conviction-recruteur)
2. [📄 Contenu & structure](#-contenu--structure)
3. [🎨 Design & CSS](#-design--css)
4. [🔍 SEO & référencement](#-seo--référencement)
5. [🔗 Maillage interne](#-maillage-interne)
6. [🎯 Badges projets](#-badges-projets)
7. [🌐 Déploiement & CI/CD](#-déploiement--cicd)
8. [📋 Idées futures](#-idées-futures)

---

## 🚀 Priorité haute — Vitrine / conviction recruteur

> **Objectif** : convaincre un recruteur en moins de 30 secondes.

### 🔗 Démos live

- [ ] Ajouter un lien de **démo live / déploiement** sur chaque fiche projet
- **État actuel** : 5 projets sur 6 n'ont *que* le lien GitHub ← signal faible

| Projet | Démo live | Action recommandée |
|---|---|---|
| Transcendance | ❌ | Héberger une instance (Render / Railway / VPS) |
| Tokenizer | ✅ | Lien BscScan déjà présent |
| Minishell | ⚠️ | Dépendances natives → captures + démonstration |
| ft_irc | ⚠️ | Dépendances natives → captures + démonstration |
| Push_swap | ⚠️ | Dépendances natives → captures + démonstration |
| So_long | ✅ | Vidéo déjà présente |

> 💡 **Cible** : uniformiser la section « Lien » de chaque fiche → `[Démo live]` + `[Repo]`

### 🧱 Structure des fiches projets

- [ ] Uniformiser la **densité** et la **structure** des fiches projets
- ✅ **Modèles riches** : `transcendance.md`, `tokeniser.md`
- ⚠️ **À harmoniser** :
  - `minishell.md` : section Compétences en cards (`.soft-skills-grid`) vs liste plate ailleurs
  - `ft_irc.md` / `minishell.md` / `push_swap.md` : ajouter *Résultat / retombées*
- 📐 **Structure cible** : `Contexte → Compétences → Stack → Défis → Résultat → [Démo live] + [Repo]`

### 🏷️ Nom du projet IRC

- [x] Homogénéiser le nom du projet IRC dans la nav
- ✅ **Terminé** sur la branche `feat/seo-tittres-descriptions` (nav + `about.md`) — **attente merge**

---

## 📄 Contenu & structure

### Blog

- [ ] Étoffer la page d'accueil du blog : `docs/blog/index.md` (25 lignes, quasi vide)
  - 📌 Présenter les derniers articles
  - 📌 Courte présentation de la thématique (science / culture)
  - 📌 Orienter vers les tags

### Organisation de la navigation

- [ ] Séparer explicitement dans la nav :
  - **« Projets »** (vitrine) ← déjà le cas ✅
  - **« Notes/Veille »** (cours, système, web, github) ← déjà bien séparé ✅
  - → RAS — la séparation est déjà saine, continuer sur cette lancée

---

## 🎨 Design & CSS

- [ ] **Supprimer les définitions dupliquées** dans `docs/css/custom.css`

| Sélecteur | Occurrence 1 | Occurrence 2 |
|---|---|---|
| `.badge-row` | ~ligne 98 | ~ligne 537 |
| `.badge-category` | ~ligne 91 | ~ligne 528 |
| `.project-card` | ~ligne 116 | ~ligne 550+ |

> 🔄 Fusionner en une seule définition chacune — les règles des blocs sont proches mais pas identiques : réconcilier hauteurs/justification.

- [ ] Ajouter `loading="lazy"` sur les images de contenu (perf mobile)
  - *(déjà listé dans l'ancien TODO — toujours en attente)*

---

## 🔍 SEO & référencement

- [ ] **Meta Open Graph / Twitter différenciée par page projet** (partage LinkedIn/Twitter)
  - Vérifier que le plugin social Material génère une carte distincte par page
  - Penser aux drafts de description + images
- [ ] Confirmer l'indexation du **sitemap** dans Search Console
  - ✅ Soumis dans GSC le 08/09/2026 — état *« Impossible de lire »* à surveiller
  - ℹ️ XML pourtant validé en local (72 URLs, format OK)
  - 🛠️ Solutions si persiste : re-tester dans GSC / soumettre `sitemap.xml.gz` / attendre 24-48 h
- [ ] Vérifier que **Google Analytics** (`G-74MZWWS1RR`) collecte réellement après acceptation des cookies

---

## 🔗 Maillage interne

> **Constat (audit du 08/09/2026)** : 25 pages orphelines = accessibles uniquement via la nav, sans lien dans le contenu.
>
> `cours Python (14)` · `Strudel (6)` · `blog (6 articles)` · `tags.md` · `react.md`

### Vue d'ensemble des chantiers

| Chantier | Impact | Pages | Statut |
|---|---|---|---|
| 🔴 1 — Chaînage cours Python | ⭐⭐⭐ | 8 | ⬜ À faire |
| 🟠 2 — Bloc « Autres projets » | ⭐⭐⭐ | 6 | ⬜ À faire |
| 🟡 3 — Blog & tags | ⭐⭐ | 4 | ⬜ À faire |
| 🟢 4 — Web & cross-links | ⭐⭐ | 4 | ⬜ À faire |
| ⚪ 5 — Strudel | ⭐ | 6 | ⬜ À faire |

### 🔴 Chantier 1 — Chaînage pédagogique cours Python

- [ ] Ajouter en bas de chaque page un bloc **« Continuer la lecture »**

| Étape | Page suivante |
|---|---|
| `mise-en-place` | → `variables` |
| `variables` | → `types` |
| `types` | → `operateurs` |
| `operateurs` | → `chaines` |
| `chaines` | → `flux-execution` |
| `flux-execution` | → `instructions-repetitives` |
| `instructions-repetitives` | → `fonctions` |
| `fonctions` | → `exercices` |

### 🟠 Chantier 2 — Bloc « Autres projets »

- [ ] Encart « 📚 Autres projets » en bas de chaque fiche

| Projet | Liens suggérés |
|---|---|
| `transcendance` | ft_irc, push_swap, index |
| `minishell` | ft_irc, push_swap, index |
| `ft_irc` | transcendance, minishell, index |
| `tokeniser` | web3/tokenizer *(déjà fait)* + transcendance + index |
| `push_swap` | minishell, so_long, index |
| `so_long` | push_swap, minishell, index |

### 🟡 Chantier 3 — Réactiver blog et tags

- [ ] Ajouter une carte « Blog » dans les grid cards de la home *(manquante)*
- [ ] `blog/index.md` → lien « 📂 Explorer par tags » vers `tags.md`
- [ ] Cross-links entre articles : `fourmis` ↔ `puces` ; `mutilation_pigeon` ↔ `hierarchie_rats`
- [ ] Lier `tags.md` depuis le contenu *(aucun lien entrant actuellement)*

### 🟢 Chantier 4 — Web & cross-links

- [ ] `react.md` orpheline → lier depuis `cours/javascript` et `web/web2/index`
- [ ] web3 : `blockchain` ↔ `tokenizer` ; `etherscan` ↔ `bscscan` (« voir aussi »)
- [ ] `systeme/nettoyage-disque` → lien vers `linux/index`

### ⚪ Chantier 5 — Strudel

- [ ] Chaînage des tutoriels : `intro` → `sons` → `notes` → `patterns` → `effets` → `exercice`

---

## 🎯 Badges projets

> 📅 **Plan validé** — déploiement prévu **après merge de la PR SEO**.

- [ ] Remplacer les `<span class="tech-tag">` des 6 fiches projets par des badges `shields.io style=for-the-badge`

| Type | Technos |
|---|---|
| 🎨 Logos officiels | C · C++ · JavaScript · Solidity · PostgreSQL · React |
| 🔊 Badges texte coloré | UNIX · Makefile · Sockets · RFC 1459 · WebSockets · OAuth 42 · BEP-20 · OpenZeppelin · Algorithmique · Optimisation · MiniLibX · Jeu 2D |

- 📐 Structure `badge-row` (CSS `.badge-row` déjà présent) + attribut `alt` (accessibilité)
- 🔀 Branche dédiée : `feat/badges-projets` + PR

---

## 🌐 Déploiement & CI/CD

- [ ] Vérifier le dernier run GitHub Actions (build strict + deploy) après le prochain push
  - via `gh` ou l'interface GitHub

---

## 📋 Idées futures

- [ ] Ajouter une page « Changelog » / « Journal » pour suivre les évolutions
- [ ] Ajouter des tags aux pages de cours (Python, JavaScript…) pour enrichir `/tags/`
- [ ] Réfléchir à un filtre par tag sur la page d'accueil du blog