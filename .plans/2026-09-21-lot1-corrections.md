# Lot 1 — Corrections « gains nets » ZehdBox — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Corriger les défauts non-admonition identifiés par la revue (bloc REPL faux, cache CI manquant, clés de consentement inertes, favicon sur-dimensionné, une coquille de texte) sans introduire de régression, build `--strict` vert garanti.

**Architecture:** Corrections de contenu Markdown et de configuration, par lots atomiques indépendants. Chaque lot = un commit. Aucune modification de code applicatif. Le « test » de chaque lot est un build `properdocs --strict` + des assertions `grep` sur la sortie générée ou les fichiers sources.

**Tech Stack:** MkDocs Material 9.7.1 via `properdocs` 1.6.7, Python 3.10 (local) / 3.12 (CI), GitHub Actions.

**Spec:** Rapport de revue du 2026-09-21 (revue « @reviewer ZehdBox », conversation) — section « Lot 1 », **hors constat I2**.

## Global Constraints

- **NE PAS TOUCHER AUX ADMONITIONS.** Aucune ligne commençant par `!!!`, `???` ou `???+` ne doit être modifiée (exigence explicite de l'humain, 2026-09-21). Le constat de revue I2 (`???-`) est **hors périmètre** de ce lot.
- Langue du site : **français** ; les messages de commit et les commentaires sont en français.
- Style de commit : **Conventional Commits** en français, scopes déjà utilisés dans le repo (`config`, `docs`, `favicon`, `ci`, `deps`, `style`, `images`, `seo`).
- Le build de contrôle est **obligatoirement** : `cd /home/alamizan/Projects/ZehdBox && properdocs build -f ZehdBox/properdocs.yml --strict` → **exit 0** (0 warning).
- Ne jamais committer `ZehdBox/site/` (gitignoré) ni `.cache/`.
- **Aucun `git push`** dans ce lot (déploiement manuel décidé par l'humain).
- Environnement : le plugin `opencode-snip` préfixe naïvement chaque segment `;` par `snip ` **même entre quotes**. ⇒ Pour toute commande composée, écrire un script dans `/tmp/` et l'exécuter via `bash /tmp/<script>.sh`. Pas de `for ...; do`, pas de `python3 -c "a;b"` en une ligne.
- Cible des fichiers : les chemins sont relatifs à la racine du repo `/home/alamizan/Projects/ZehdBox`.

## Review Focus

Points où une correction mécanique peut casser quelque chose sans que le build ne s'en aperçoive — à vérifier à la main après le lot :

1. **Bloc REPL** : `>>> 2 - 9` doit afficher `-7` (la sortie actuelle `7` est fausse) ; l'invite `>>` doit devenir `>>>` ; ne pas casser l'alignement des commentaires `#` ni le reste du bloc (les autres lignes `>>>` sont correctes).
2. **Périmètre admonitions** : le diff final ne doit contenir **aucune** ligne modifiée commençant par `!!!`, `???` ou `???+` (vérifié par un `git diff` filtré en fin de lot).
3. **Clés de consentement retirées** : `extra.analytics.property` doit rester l'unique source de l'ID GA ; après retrait, vérifier que GA est toujours présent dans le HTML généré.
4. **Favicon** : le nouveau fichier doit rester nommé `favicon.png` et être un carré ; `theme.favicon: favicon.png` ne change pas.

---

### Task 1: Corriger le bloc REPL de la page « Mise en place »

**Files:**
- Modify: `ZehdBox/docs/cours/python/bases/mise-en-place.md` (lignes 108-110 et 119, **dans le bloc de code uniquement**)

**Interfaces:**
- Consumes: aucune.
- Produces: rien (contenu pédagogique). Indépendant des autres tâches.

- [ ] **Step 1: Écrire les assertions AVANT correction (état fautif actuel)**

Créer `/tmp/check_t1.sh` :

```bash
#!/usr/bin/env bash
cd /home/alamizan/Projects/ZehdBox || exit 1
F=ZehdBox/docs/cours/python/bases/mise-en-place.md
echo "### fautes attendues AVANT (doivent être trouvées) :"
grep -n '^7$' "$F"                                  # sortie fausse de 2 - 9
grep -n '^>> 7 + 3 \* 4' "$F"                        # invite >> au lieu de >>>
grep -n 'interpreteur Pyhton' "$F"                   # typo Pyhton
```

- [ ] **Step 2: Exécuter les assertions — elles doivent TROUVER les fautes**

Run: `bash /tmp/check_t1.sh`
Expected: 3 lignes de résultat (fautes présentes), pas 0.

- [ ] **Step 3: Appliquer les corrections (bloc de code l.108-119 UNIQUEMENT)**

Dans `ZehdBox/docs/cours/python/bases/mise-en-place.md`, remplacer exactement :

Lignes 108-111 (attention à l'alignement des commentaires) :
```
>>> 2 - 9       # les espaces sont optionnels
7
>> 7 + 3 * 4    # la hierarchie des operations mathématiques sont respecté
19
```
→
```
>>> 2 - 9       # les espaces sont optionnels
-7
>>> 7 + 3 * 4   # la hiérarchie des opérations est respectée
19
```

Ligne 119 :
```
>>> Ctrl-D      # quitte l'interpreteur Pyhton
```
→
```
>>> Ctrl-D      # quitte l'interpréteur Python
```

> Ne PAS modifier la ligne 62 (`!!! bug "A savoir"`) : c'est une admonition, hors périmètre.

- [ ] **Step 4: Vérifier les corrections (assertions inversées)**

Créer et lancer `/tmp/check_t1_ok.sh` :

```bash
#!/usr/bin/env bash
cd /home/alamizan/Projects/ZehdBox || exit 1
F=ZehdBox/docs/cours/python/bases/mise-en-place.md
grep -q '^>>> 2 - 9' "$F" && echo "OK: question 2-9"
grep -q '^-7$' "$F" && echo "OK: reponse -7"
grep -q '^>>> 7 + 3 \* 4' "$F" && echo "OK: invite >>>"
grep -q 'interpréteur Python' "$F" && echo "OK: typo corrigee"
grep -c 'Pyhton' "$F" | grep -q '^0$' && echo "OK: plus de Pyhton"
```

Run: `bash /tmp/check_t1_ok.sh`
Expected: 5 lignes `OK:`.

- [ ] **Step 5: Build strict de contrôle**

Run: `cd /home/alamizan/Projects/ZehdBox && properdocs build -f ZehdBox/properdocs.yml --strict; echo "exit=$?"`
Expected: `Documentation built in ... seconds` puis `exit=0`.

- [ ] **Step 6: Vérifier qu'aucune admonition n'a bougé**

Run: `cd /home/alamizan/Projects/ZehdBox && git diff -- ZehdBox/docs/cours/python/bases/mise-en-place.md | grep -E '^[+-](!!!|\?\?\?)' || echo "OK: aucune admonition modifiee"`
Expected: `OK: aucune admonition modifiee`.

- [ ] **Step 7: Commit**

```bash
cd /home/alamizan/Projects/ZehdBox
git add ZehdBox/docs/cours/python/bases/mise-en-place.md
git commit -m "fix(docs): corrige le bloc REPL (mise en place)" -m "- 2 - 9 affichait 7 au lieu de -7
- invite >> corrigee en >>>
- coquilles 'interpreteur Pyhton' et 'hierarchie ... sont respecte'"
```

---

### Task 2: Corriger la coquille de react.md

**Files:**
- Modify: `ZehdBox/docs/web/web2/react.md` (ligne 262)

**Interfaces:**
- Consumes: aucune.
- Produces: rien.

- [ ] **Step 1: Assertion AVANT**

Run: `grep -n 'recuperer une categories' /home/alamizan/Projects/ZehdBox/ZehdBox/docs/web/web2/react.md`
Expected: 1 ligne trouvée (ligne 262).

- [ ] **Step 2: Appliquer la correction**

`ZehdBox/docs/web/web2/react.md` ligne 262 :
```
- Pour recuperer une categories de plantes :
```
→
```
- Pour récupérer une catégorie de plantes :
```

- [ ] **Step 3: Vérifier**

Créer `/tmp/check_t2_ok.sh` :

```bash
#!/usr/bin/env bash
cd /home/alamizan/Projects/ZehdBox || exit 1
grep -q 'récupérer une catégorie' ZehdBox/docs/web/web2/react.md && echo "OK: react corrige"
grep -c 'recuperer une categories' ZehdBox/docs/web/web2/react.md
```

Run: `bash /tmp/check_t2_ok.sh`
Expected: `OK: react corrige` ; `0`.

- [ ] **Step 4: Build strict**

Run: `cd /home/alamizan/Projects/ZehdBox && properdocs build -f ZehdBox/properdocs.yml --strict; echo "exit=$?"`
Expected: `exit=0`.

- [ ] **Step 5: Commit**

```bash
cd /home/alamizan/Projects/ZehdBox
git add ZehdBox/docs/web/web2/react.md
git commit -m "fix(docs): coquille 'recuperer une categories' (react)"
```

---

### Task 3: Retirer les clés de consentement inertes (M4)

**Files:**
- Modify: `ZehdBox/properdocs.yml` (section `extra.consent.cookies.analytics`, lignes ~347-352)

**Interfaces:**
- Consumes: aucune.
- Produces: `extra.analytics` (lignes ~338-340) devient l'unique source de l'ID GA.

**Pourquoi :** le template `material/templates/partials/consent.html` ne lit que `cookie.name` et `cookie.checked`. `provider` et `property` sont ignorés → double source de vérité avec `extra.analytics`.

- [ ] **Step 1: Assertions AVANT**

Créer `/tmp/check_t3.sh` :

```bash
#!/usr/bin/env bash
cd /home/alamizan/Projects/ZehdBox || exit 1
echo "### occurrences de l'ID GA dans la config :"
grep -n 'G-74MZWWS1RR' ZehdBox/properdocs.yml
```

Run: `bash /tmp/check_t3.sh`
Expected: 2 lignes (`extra.analytics.property` et `extra.consent.cookies.analytics.property`).

- [ ] **Step 2: Appliquer la correction**

Dans `ZehdBox/properdocs.yml`, remplacer :
```yaml
    cookies:
      analytics:
        name: Google Analytics
        provider: google
        checked: true
        property: G-74MZWWS1RR
```
par :
```yaml
    cookies:
      analytics:
        name: Google Analytics
        checked: true
```

- [ ] **Step 3: Vérifier qu'il ne reste qu'une source**

Run: `bash /tmp/check_t3.sh`
Expected: **1 seule** ligne (`extra.analytics.property`).

- [ ] **Step 4: Build strict + GA toujours présent dans le HTML**

Créer `/tmp/verify_t3.sh` :

```bash
#!/usr/bin/env bash
cd /home/alamizan/Projects/ZehdBox || exit 1
properdocs build -f ZehdBox/properdocs.yml --strict > /tmp/build-t3.log 2>&1
echo "build exit=$?"
echo -n "GA dans index.html : "; grep -c 'G-74MZWWS1RR' ZehdBox/site/index.html
echo -n "bandeau consentement : "; grep -c 'md-consent' ZehdBox/site/index.html
```

Run: `bash /tmp/verify_t3.sh`
Expected: `build exit=0` ; GA ≥ 1 ; bandeau consentement ≥ 1.

- [ ] **Step 5: Commit**

```bash
cd /home/alamizan/Projects/ZehdBox
git add ZehdBox/properdocs.yml
git commit -m "fix(config): retire les cles de consentement inertes" -m "Le template consent.html ne lit que name/checked ; provider et
property n'ont aucun effet. extra.analytics reste la seule source de
l'ID GA."
```

---

### Task 4: Activer le cache pip dans la CI (I3)

**Files:**
- Modify: `.github/workflows/deploy.yml` (étape « Setup Python », lignes 27-30)

**Interfaces:**
- Consumes: `ZehdBox/requirements-ci.txt` (existe).
- Produces: rien.

- [ ] **Step 1: Assertion AVANT**

Run: `grep -n 'cache' /home/alamizan/Projects/ZehdBox/.github/workflows/deploy.yml || echo "aucun cache"`
Expected: `aucun cache`.

- [ ] **Step 2: Appliquer la correction**

Remplacer :
```yaml
      - name: Setup Python
        uses: actions/setup-python@v6
        with:
          python-version: "3.12"
```
par :
```yaml
      - name: Setup Python
        uses: actions/setup-python@v6
        with:
          python-version: "3.12"
          cache: pip
          cache-dependency-path: ZehdBox/requirements-ci.txt
```

- [ ] **Step 3: Vérifier la validité YAML + la présence du cache**

Créer `/tmp/check_t4.sh` :

```bash
#!/usr/bin/env bash
cd /home/alamizan/Projects/ZehdBox || exit 1
python3 - <<'PY'
import yaml
d = yaml.safe_load(open(".github/workflows/deploy.yml"))
steps = d["jobs"]["build"]["steps"]
sp = [s for s in steps if s.get("name") == "Setup Python"][0]
print("cache =", sp["with"].get("cache"))
print("cache-dependency-path =", sp["with"].get("cache-dependency-path"))
print("yaml parse OK")
PY
```

Run: `bash /tmp/check_t4.sh`
Expected: `cache = pip`, `cache-dependency-path = ZehdBox/requirements-ci.txt`, `yaml parse OK`.

- [ ] **Step 4: Commit**

```bash
cd /home/alamizan/Projects/ZehdBox
git add .github/workflows/deploy.yml
git commit -m "ci: met en cache les dependances pip" -m "actions/setup-python : cache: pip + cache-dependency-path sur
requirements-ci.txt (evite de reinstaller pillow/cairosvg a chaque push)."
```

---

### Task 5: Favicon 64×64 (m1)

**Files:**
- Modify: `ZehdBox/docs/favicon.png` (actuellement 512×512)

**Interfaces:**
- Consumes: `~/.local/lib/python3.10/site-packages/material/templates/.icons/material/bat.svg` (icône du logo).
- Produces: rien ; `theme.favicon: favicon.png` inchangé.

**Pourquoi :** un favicon s'affiche à 16–64 px ; 12,2 Ko pour 512×512 est ~40× le besoin.

- [ ] **Step 1: Assertion AVANT**

Run: `file /home/alamizan/Projects/ZehdBox/ZehdBox/docs/favicon.png`
Expected: `PNG image data, 512 x 512`.

- [ ] **Step 2: Régénérer en 64×64**

Créer `/tmp/makefav64.py` :

```python
import io
import cairosvg
from PIL import Image, ImageDraw

SVG = "/home/alamizan/.local/lib/python3.10/site-packages/material/templates/.icons/material/bat.svg"
svg = open(SVG, encoding="utf-8").read().replace("<svg ", '<svg fill="#ffffff" ', 1)

big = Image.open(io.BytesIO(cairosvg.svg2png(
    bytestring=svg.encode("utf-8"),
    output_width=1024, output_height=1024, background_color=None))).convert("RGBA")
big = big.crop(big.getbbox())

S = 64
bg = Image.new("RGBA", (S, S), (0, 0, 0, 0))
ImageDraw.Draw(bg).rounded_rectangle([0, 0, S - 1, S - 1],
                                     radius=int(S * 0.22),
                                     fill=(103, 58, 183, 255))

w, h = big.size
scale = (S * 0.58) / max(w, h)
bat = big.resize((max(1, int(w * scale)), max(1, int(h * scale))), Image.LANCZOS)
bg.alpha_composite(bat, ((S - bat.width) // 2, (S - bat.height) // 2))

out = "/home/alamizan/Projects/ZehdBox/ZehdBox/docs/favicon.png"
bg.save(out, optimize=True)
print("saved:", out, bg.size)
```

Run: `python3 /tmp/makefav64.py`
Expected: `saved: .../favicon.png (64, 64)`.

- [ ] **Step 3: Vérifier**

Run: `file /home/alamizan/Projects/ZehdBox/ZehdBox/docs/favicon.png; ls -la /home/alamizan/Projects/ZehdBox/ZehdBox/docs/favicon.png`
Expected: `PNG image data, 64 x 64, 8-bit/color RGBA` et taille < 3 Ko.

- [ ] **Step 4: Build strict + favicon copié**

Créer `/tmp/verify_t5.sh` :

```bash
#!/usr/bin/env bash
cd /home/alamizan/Projects/ZehdBox || exit 1
properdocs build -f ZehdBox/properdocs.yml --strict > /tmp/build-t5.log 2>&1
echo "build exit=$?"
file ZehdBox/site/favicon.png
grep -o '<link rel="icon"[^>]*>' ZehdBox/site/index.html | head -1
```

Run: `bash /tmp/verify_t5.sh`
Expected: `build exit=0` ; `64 x 64` ; balise `<link rel="icon" ... href=".../favicon.png">`.

- [ ] **Step 5: Commit**

```bash
cd /home/alamizan/Projects/ZehdBox
git add ZehdBox/docs/favicon.png
git commit -m "chore(favicon): reduit le favicon a 64x64" -m "512x512 (12,2 Ko) etait sur-dimensionne pour un affichage 16-64 px.
Aucun changement de design (bat Material, fond deep purple)."
```

---

## Ordre d'exécution & dépendances

Toutes les tâches sont **indépendantes** (fichiers disjoints) et peuvent être exécutées dans l'ordre 1→5. Recommandation : exécuter dans cet ordre, un commit par tâche, en lançant le build strict après chaque tâche (déjà intégré).

## Vérification finale du lot

Après la Task 5 :

```bash
cd /home/alamizan/Projects/ZehdBox
git log --oneline -6
git status --short           # attendu : vide
properdocs build -f ZehdBox/properdocs.yml --strict; echo "exit=$?"   # attendu : exit=0
echo "### aucune admonition modifiee dans le lot :"
git diff HEAD~5 -- ZehdBox/docs | grep -E '^[+-](!!!|\?\?\?)' || echo "OK: aucune admonition modifiee"
```

Attendu : 5 nouveaux commits, working tree propre, build strict vert, **aucune admonition modifiée**.

## Hors périmètre (explicitement écarté)

- **I2 — normalisation des 79 admonitions `???-` / `??? -`** : NE PAS FAIRE (exigence humaine). Les constats I2 et les accents des titres d'admonitions restent ouverts, à traiter seulement si l'humain le demande.
