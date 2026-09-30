# TODO — Indexation Google du site ZehdBox

> **Objectif** : faire indexer les **88 URLs** du site par Google.
> **Chemin critique** : l'**inspection d'URL**, page par page (§1) — **pas** le sitemap (voir la note ci-dessous).
> **Cockpit** : [Google Search Console](https://search.google.com/search-console) · **Site** : https://lamizana.github.io/ZehdBox/

---

## ⚠️ À savoir : le sitemap n'est PAS le chemin critique

État au 2026-09-30 — Search Console affiche « **Impossible de lire le sitemap** », **0 page découverte**.

- La doc Google classe ce message comme une **erreur de récupération (fetch)**, pas d'analyse (parsing).
- Le fichier est pourtant **provably valide** : XML bien formé, **validé contre le XSD officiel sitemaps.org**, namespace `0.9`, 88 `<loc>` toutes vérifiées en **HTTP 200**, `application/xml`, **0 redirection**, aucun blocage `robots.txt`.
- L'URL est **active** au test en direct de Google (Inspection d'URL → Tester l'URL réelle).
- Causes probables restantes : **erreur générale transitoire** et **faible demande d'exploration** sur un site récent. La doc précise que Google **cesse d'essayer** après plusieurs échecs, puis qu'il faut renvoyer le sitemap.

**Conclusion : ne plus chercher à « corriger » le sitemap, et ne pas conditionner l'indexation à lui.**

> Doc Google : *« Si votre site est de taille modeste (pas plus de 500 pages environ) et que vous pouvez accéder à chacune de ses pages en suivant un ou plusieurs liens à partir de votre page d'accueil, vous n'avez probablement pas besoin de sitemap. Dans ce cas, il vous suffit de demander l'indexation de votre page d'accueil. »*
>
> Et : *« submitting a sitemap is merely a hint »*.

ZehdBox : **84 pages**, toutes atteignables depuis l'accueil (nav + maillage interne) → le chemin garanti est l'**inspection d'URL** (§1).

**Suivi** : laisser le sitemap soumis, **ne pas le resoumettre en boucle**. Recontrôler la ligne Search Console vers le **07/10/2026**.

---

## 0. Prérequis techniques

- [x] Aucun blocage robots : `https://lamizana.github.io/robots.txt` renvoie **404** → Google autorise tout
      *(piège : le `docs/robots.txt` du site est **ignoré** par Google, un robots.txt n'étant lu qu'à la racine de l'hôte)*
- [x] Fichier de vérification Search Console déployé (`docs/googlec39c99d186f1c077.html`)
- [x] `sitemap.xml` généré nativement (88 URLs) — aucun plugin supplémentaire requis
- [x] Déploiement automatique via GitHub Actions (`push` sur `main`)
- [x] Sitemap soumis (`/sitemap.xml`) — état « Impossible de lire » assumé : **non bloquant**, cf. la note en tête
- [x] Type de propriété cohérent avec `site_url` (Préfixe d'URL `https://lamizana.github.io/ZehdBox/`)
- [x] Search Console → *Indexation → Pages* : aucune anomalie (« Exclue », « Erreur 404 »)

## 1. Méthode d'indexation (quota limité)

Google plafonne les demandes manuelles (≈ **10–15 URLs/jour/propriété**) : d'où l'ordre prioritaire ci-dessous.

1. Search Console → **Inspection de l'URL** → coller l'URL → **Tester l'URL réelle**.
2. Si « L'URL est sur Google » → rien à faire.
3. Sinon → **Demander une indexation**.
4. Ne demander l'indexation **qu'après** le déploiement effectif (une page non publiée renvoie 404).
5. Contrôle global ensuite : `site:lamizana.github.io/ZehdBox` dans Google.

> Délai habituel : de quelques jours à quelques semaines. Une demande **ne garantit pas** l'indexation — Google arbitre selon la qualité, l'originalité et la popularité des contenus.

---

## 2. 🎯 Vitrine — priorité maximale

Ces pages portent l'image professionnelle du site (recruteurs, clients) : à indexer **et** à vérifier en premier.

- [X] [Accueil](https://lamizana.github.io/ZehdBox/)
- [X] [Projets 42 - Applications, algorithmes et serveurs](https://lamizana.github.io/ZehdBox/projets/)
- [X] [So Long - Jeu 2D en C avec MiniLibX](https://lamizana.github.io/ZehdBox/projets/so_long/)
- [X] [Push Swap - Algorithme de tri en C](https://lamizana.github.io/ZehdBox/projets/push_swap/)
- [X] [Minishell - Interpréteur de commandes UNIX en C](https://lamizana.github.io/ZehdBox/projets/minishell/)
- [X] [ft_irc - Serveur IRC en C++ (multi-clients, canaux, opérateurs)](https://lamizana.github.io/ZehdBox/projets/ft_irc/)
- [X] [Transcendance - Pong multijoueur local](https://lamizana.github.io/ZehdBox/projets/transcendance/)
- [X] [Linear Regression - Descente de gradient](https://lamizana.github.io/ZehdBox/projets/linear-regression/)
- [X] [Tokenizer - Smart contract BEP-20 sur BNB Smart Chain](https://lamizana.github.io/ZehdBox/projets/tokenizer/)
- [X] [À Propos](https://lamizana.github.io/ZehdBox/about/)
- [X] [Contact](https://lamizana.github.io/ZehdBox/contact/)

## 3. 📚 Programmation — Python

- [X] [Cours de programmation - Python, JavaScript et plus](https://lamizana.github.io/ZehdBox/cours/)
- [X] [Cours Python - Bases, fonctions et bibliothèques](https://lamizana.github.io/ZehdBox/cours/python/)

**Les bases**

- [X] [Python - Les bases](https://lamizana.github.io/ZehdBox/cours/python/bases/)
- [X] [Mise en place](https://lamizana.github.io/ZehdBox/cours/python/bases/mise-en-place/)
- [X] [Variables](https://lamizana.github.io/ZehdBox/cours/python/bases/variables/)
- [X] [Types de données](https://lamizana.github.io/ZehdBox/cours/python/bases/types/)
- [X] [Opérateurs](https://lamizana.github.io/ZehdBox/cours/python/bases/operateurs/)
- [X] [Chaînes de caractères](https://lamizana.github.io/ZehdBox/cours/python/bases/chaines/)
- [ ] [Flux d'exécution](https://lamizana.github.io/ZehdBox/cours/python/bases/flux-execution/)
- [ ] [Instructions répétitives](https://lamizana.github.io/ZehdBox/cours/python/bases/instructions-repetitives/)
- [ ] [Exercices - Bases Python](https://lamizana.github.io/ZehdBox/cours/python/bases/exercice-bases/)

**Exercices**

- [ ] [Exercices](https://lamizana.github.io/ZehdBox/cours/python/exercices/)
- [ ] [Exercices - Nombres](https://lamizana.github.io/ZehdBox/cours/python/exercices/nombres/)
- [ ] [Exercices - Chaînes de caractères](https://lamizana.github.io/ZehdBox/cours/python/exercices/string/)

**Fonctions & Django**

- [ ] [Fonctions](https://lamizana.github.io/ZehdBox/cours/python/fonctions/)
- [ ] [Django - Du projet à l'application web avec SQL](https://lamizana.github.io/ZehdBox/cours/python/django/)
- [ ] [Installation - Environnement virtuel et projet Django](https://lamizana.github.io/ZehdBox/cours/python/django/installation/)
- [ ] [Docker & PostgreSQL - Conteneuriser Django et brancher la base](https://lamizana.github.io/ZehdBox/cours/python/django/docker-postgresql/)
- [ ] [Modèles & Migrations - Définir la structure des données](https://lamizana.github.io/ZehdBox/cours/python/django/modeles-migrations/)
- [ ] [Vues & URLs - Répondre aux requêtes du navigateur](https://lamizana.github.io/ZehdBox/cours/python/django/vues-urls/)
- [ ] [Templates - Gabarits HTML et architecture MVT](https://lamizana.github.io/ZehdBox/cours/python/django/templates/)

**Bibliothèques**

- [ ] [Python - Bibliothèques](https://lamizana.github.io/ZehdBox/cours/python/librairies/)
- [ ] [NumPy](https://lamizana.github.io/ZehdBox/cours/python/numpy/)
- [ ] [Projet - Analyse de Dés](https://lamizana.github.io/ZehdBox/cours/python/numpy/exercice-dice/)
- [ ] [Pandas](https://lamizana.github.io/ZehdBox/cours/python/pandas/)
- [ ] [Analyse Météo](https://lamizana.github.io/ZehdBox/cours/python/pandas/tutoriel-meteo/)
- [ ] [Exercices Météo](https://lamizana.github.io/ZehdBox/cours/python/pandas/exercice-meteo/)
- [ ] [Scikit-learn](https://lamizana.github.io/ZehdBox/cours/python/scikit-learn/)
- [ ] [Régression linéaire - le machine learning en pratique](https://lamizana.github.io/ZehdBox/cours/python/linear-regression/)

## 4. 📚 Programmation — MkDocs

- [ ] [Créer une documentation avec MkDocs et Material](https://lamizana.github.io/ZehdBox/mkdocs/)
- [ ] [Bases de MkDocs](https://lamizana.github.io/ZehdBox/mkdocs/bases/)
- [ ] [Material for MkDocs](https://lamizana.github.io/ZehdBox/mkdocs/material/)
- [ ] [Plugins](https://lamizana.github.io/ZehdBox/mkdocs/plugins/)
- [ ] [Extensions Markdown](https://lamizana.github.io/ZehdBox/mkdocs/extensions/)
- [ ] [Déploiement](https://lamizana.github.io/ZehdBox/mkdocs/deploiement/)

## 5. 📚 Programmation — Strudel

- [ ] [Strudel](https://lamizana.github.io/ZehdBox/strudel/)
- [ ] [Introduction](https://lamizana.github.io/ZehdBox/strudel/tutoriel-intro/)
- [ ] [Premier Sons](https://lamizana.github.io/ZehdBox/strudel/tutoriel-sons/)
- [ ] [Notes Musicales](https://lamizana.github.io/ZehdBox/strudel/tutoriel-notes/)
- [ ] [Syntaxe des Patterns](https://lamizana.github.io/ZehdBox/strudel/tutoriel-patterns/)
- [ ] [Effets Audio](https://lamizana.github.io/ZehdBox/strudel/tutoriel-effets/)
- [ ] [Exercices Strudel](https://lamizana.github.io/ZehdBox/strudel/exercice-strudel/)

## 6. 📚 Système

- [ ] [Système](https://lamizana.github.io/ZehdBox/systeme/)
- [ ] [Nettoyage de Disque](https://lamizana.github.io/ZehdBox/systeme/nettoyage-disque/)
- [ ] [Linux](https://lamizana.github.io/ZehdBox/systeme/linux/)
- [ ] [Windows](https://lamizana.github.io/ZehdBox/systeme/windows/)

## 7. 📚 Web

- [ ] [Web](https://lamizana.github.io/ZehdBox/web/)
- [ ] [Bases du Web](https://lamizana.github.io/ZehdBox/web/bases/)
- [ ] [La naissance du Web](https://lamizana.github.io/ZehdBox/web/bases/naissance/)
- [ ] [Les langages du Web](https://lamizana.github.io/ZehdBox/web/bases/langages/)
- [ ] [Les réseaux](https://lamizana.github.io/ZehdBox/web/bases/reseaux/)
- [ ] [Les métiers du Web](https://lamizana.github.io/ZehdBox/web/bases/metiers/)
- [ ] [Web 2.0](https://lamizana.github.io/ZehdBox/web/web2/)
- [ ] [Framework React](https://lamizana.github.io/ZehdBox/web/web2/react/)
- [ ] [Web 3.0 - Blockchain, DeFi et smart contracts](https://lamizana.github.io/ZehdBox/web/web3/)
- [ ] [Blockchain](https://lamizana.github.io/ZehdBox/web/web3/blockchain/)
- [ ] [Etherscan](https://lamizana.github.io/ZehdBox/web/web3/etherscan/)
- [ ] [BscScan](https://lamizana.github.io/ZehdBox/web/web3/bscscan/)
- [ ] [Tokenizer](https://lamizana.github.io/ZehdBox/web/web3/tokenizer/)

## 8. 📚 GitHub

- [ ] [GitHub pour débutants - Git, branches et pull requests](https://lamizana.github.io/ZehdBox/github/)
- [ ] [Git & GitHub - Les bases](https://lamizana.github.io/ZehdBox/github/git-bases/)
- [ ] [Branches, Fusion & Pull Requests](https://lamizana.github.io/ZehdBox/github/git-branches-merge/)
- [ ] [Fonctionnalités avancées](https://lamizana.github.io/ZehdBox/github/git-avance/)
- [ ] [Commandes & Bonnes pratiques](https://lamizana.github.io/ZehdBox/github/commandes/)

## 9. 📝 Blog

- [ ] [MyBlog](https://lamizana.github.io/ZehdBox/blog/) ⚠️ titre à corriger (voir § 12)
- [ ] [L'incident Hugging Face — quand une IA attaque toute seule](https://lamizana.github.io/ZehdBox/blog/2026/09/21/incident-hugging-face/)
- [ ] [Hiérarchie chez les rats](https://lamizana.github.io/ZehdBox/blog/2026/06/27/hierarchie-chez-les-rats/)
- [ ] [L'homme et ses déchets - mutilation des pattes de pigeons](https://lamizana.github.io/ZehdBox/blog/2026/06/26/lhomme-et-ses-dechets-mutilation-des-pattes-de-pigeons/)
- [ ] [Les Fourmis](https://lamizana.github.io/ZehdBox/blog/2026/03/23/les-fourmis/)
- [ ] [Les puces](https://lamizana.github.io/ZehdBox/blog/2026/03/22/les-puces/)
- [ ] [L'art de parler et d'écouter](https://lamizana.github.io/ZehdBox/blog/2026/02/06/lart-de-parler-et-ecouter/)
- [ ] [Capacité encéphalique](https://lamizana.github.io/ZehdBox/blog/2026/02/06/capacite-encephalique/)

**Pages générées par le plugin `blog`** (présentes au sitemap, suivies automatiquement)

- [ ] [Archive 2026](https://lamizana.github.io/ZehdBox/blog/archive/2026/)
- [ ] [Catégorie Culture](https://lamizana.github.io/ZehdBox/blog/category/-culture/)
- [ ] [Catégorie Science](https://lamizana.github.io/ZehdBox/blog/category/-science/)
- [ ] [Catégorie Technologie](https://lamizana.github.io/ZehdBox/blog/category/-technologie/)

## 10. 🧩 Pages annexes

- [ ] [Tags](https://lamizana.github.io/ZehdBox/tags/)

---

## 11. ⛔ À ne PAS demander à l'indexation

Ces URLs sont générées par le plugin `redirects` (balise `meta refresh`) : ce sont des doublons techniques, pas du contenu. Google suit la redirection vers la page cible — inutile de les soumettre, elles n'apparaissent d'ailleurs pas au sitemap.

- `https://lamizana.github.io/ZehdBox/projets/tokeniser/` → `projets/tokenizer/`
- `https://lamizana.github.io/ZehdBox/projets/ft_transcendence/` → `projets/transcendance/`
- `https://lamizana.github.io/ZehdBox/so_long/jeux/` → `projets/so_long/`
- `https://lamizana.github.io/ZehdBox/github/github/` → `github/`

De même, `docs/cours/python/_template-exercice.md` est exclu du build (`exclude_docs`) : il n'existe aucune page à indexer.

---

## 12. ⚠️ Points de vigilance SEO (avant/pendant l'indexation)

- [ ] `docs/blog/index.md` → frontmatter `title: MyBlog` : remplacer par un titre explicite (« Blog — notes & articles »), il apparaît dans les résultats Google.
- [ ] Contenus proches à départager : `projets/linear-regression/` vs `cours/python/linear-regression/`, et `projets/tokenizer/` vs `web/web3/tokenizer/`. Vérifier qu'ils ne se cannibalisent pas (contenu réellement différent, liens croisés).
- [ ] Catégories du blog : les emojis (📚 🧪 🤖) sont retirés des URLs → `/blog/category/-culture/`. Fonctionnel, mais URL peu lisible.
- [ ] 5 fiches projets sur 7 n'ont **pas de démo live** (Push Swap, Minishell, ft_irc, Transcendance, Linear Regression). Les 7 renvoient bien vers le code sur GitHub, mais seuls Tokenizer (contrat BscScan) et So Long (vidéo locale) montrent un résultat exécutable. Une démo ou des captures commentées renforcent la perception de contenu substantiel — critère d'indexation chez Google.
- [ ] Vérifier le rendu mobile et la vitesse (Search Console → *Signaux web essentiels*).

## 13. 📈 Suivi après indexation

- [ ] Search Console → *Indexation → Pages* : viser 88 URLs « Indexée » (les 84 pages + 4 pages blog auto)
- [ ] Traiter les « Détectée, actuellement non indexée » (souvent : contenu jugé trop léger)
- [ ] Search Console → *Performances* : relever les premières requêtes et impressions
- [ ] Re-soumettre le sitemap après chaque ajout de page (le fichier est régénéré à chaque déploiement)
- [ ] Contrôle manuel : `site:lamizana.github.io/ZehdBox`


- Les videos de solong ne sont pas indéxé