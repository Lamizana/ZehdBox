#!/usr/bin/env bash
# -----------------------------------------------------------------------------
# check-consistency.sh
#
# Contrôle croisé "Vitrine" : à chaque mise à jour d'une fiche projet
# (docs/projets/*.md), vérifie que la fiche est toujours référencée :
#   1. dans la page d'accueil (docs/index.md) via un lien vers <slug>.md
#   2. dans la page "À propos" (docs/about.md) via son nom de projet
#
# Usage : ./scripts/check-consistency.sh   (depuis n'importe où)
# Retour : 0 si tout est cohérent, 1 sinon (incohérences listées)
# -----------------------------------------------------------------------------
set -u

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DOCS="$ROOT/ZehdBox/docs"
INDEX="$DOCS/index.md"
ABOUT="$DOCS/about.md"

status=0

for f in "$DOCS"/projets/*.md; do
  [ "$(basename "$f")" = "index.md" ] && continue
  slug="$(basename "$f" .md)"

  # 1. Carte présente sur la home ?
  if grep -q "projets/$slug.md" "$INDEX"; then
    echo "OK   index.md  → $slug"
  else
    echo "FAIL index.md  → $slug (carte manquante sur l'accueil)"
    status=1
  fi

  # 2. Projet présent dans about.md (par son nom, extrait du titre) ?
  name="$(grep -m1 '^title:' "$f" | sed 's/^title:[[:space:]]*//' | sed 's/ - .*//' | tr '_' ' ')"
  name="$(printf '%s' "$name" | sed 's/^ *//;s/ *$//')"
  if [ -n "$name" ]; then
    if sed 's/_/ /g' "$ABOUT" | grep -qiF -- "$name"; then
      echo "OK   about.md  → $slug ($name)"
    else
      echo "FAIL about.md  → $slug ($name absente de la page À propos)"
      status=1
    fi
  fi
done

echo "---"
if [ "$status" -eq 0 ]; then
  echo "✅ Cohérence accueil/about vs fiches projets : OK"
else
  echo "❌ Incohérences détectées : relire index.md et about.md"
fi
exit "$status"