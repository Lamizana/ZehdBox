#!/usr/bin/env bash
# -----------------------------------------------------------------------------
# check-consistency.sh
#
# Contrôle croisé "Vitrine" : à chaque mise à jour d'une fiche projet
# (docs/projets/*.md), vérifie la visibilité de la fiche selon le principe
# éditorial du site :
#   - projets "vedette" (FEATURED) → visibles sur l'accueil (index.md) ET
#     dans la page "À propos" (about.md)
#   - autres projets → visibles dans l'inventaire complet (projets/index.md)
#
# Usage : ./scripts/check-consistency.sh   (depuis n'importe où)
# Retour : 0 si tout est cohérent, 1 sinon (incohérences listées)
# -----------------------------------------------------------------------------
set -u

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DOCS="$ROOT/ZehdBox/docs"
INDEX="$DOCS/index.md"
ABOUT="$DOCS/about.md"
PROJETS="$DOCS/projets/index.md"

# Projets en vedette (sélection home + about) : slug séparés par des espaces
FEATURED="tokenizer transcendance minishell ft_irc linear-regression"

status=0

for f in "$DOCS"/projets/*.md; do
  [ "$(basename "$f")" = "index.md" ] && continue
  slug="$(basename "$f" .md)"

  # Le slug fait-il partie des projets vedettes ?
  is_featured=false
  for feat in $FEATURED; do
    [ "$feat" = "$slug" ] && is_featured=true
  done

  if $is_featured; then
    # 1. Carte présente sur la home ?
    if grep -q "projets/$slug.md" "$INDEX"; then
      echo "OK   index.md   → $slug (vedette)"
    else
      echo "FAIL index.md   → $slug (carte vedette manquante sur l'accueil)"
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
  else
    # 3. Projet non vedette : présent dans l'inventaire complet ?
    if grep -q "$slug.md" "$PROJETS"; then
      echo "OK   projets/index.md → $slug (inventaire complet)"
    else
      echo "FAIL projets/index.md → $slug (absente de l'inventaire)"
      status=1
    fi
  fi
done

echo "---"
if [ "$status" -eq 0 ]; then
  echo "✅ Cohérence vitrine (home + about + inventaire) vs fiches projets : OK"
else
  echo "❌ Incohérences détectées : relire index.md et about.md"
fi
exit "$status"