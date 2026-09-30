#!/usr/bin/env python3
"""Garde-fou de parite CI : plugins declares dans properdocs.yml vs requirements-ci.txt.

POURQUOI CE SCRIPT EXISTE
-------------------------
Le 15/09/2026, le plugin `redirects` a ete ajoute a la cle `plugins` de
properdocs.yml sans etre ajoute a requirements-ci.txt. Le build strict de la
CI a echoue (plugin introuvable) et le site est reste fige sur l'artefact
precedent pendant 2 jours (15/09 15:42 -> 17/09 15:13 UTC, 4 deploiements
rates). Le symptome etait un echec de build cryptique, decouvert trop tard.

Ce script transforme cette classe d'erreur en diagnostic explicite : il
verifie que chaque plugin utilise est bien installe par requirements-ci.txt.

USAGE
-----
    python ZehdBox/scripts/check_ci_parity.py

Options :
    --config PATH        properdocs.yml a analyser (defaut : ZehdBox/properdocs.yml)
    --requirements PATH  fichier de dependances CI (defaut : ZehdBox/requirements-ci.txt)

Code de sortie : 0 si tout est coherent, 1 sinon (utilisable dans la CI).
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

import yaml

# Correspondance plugin (cle dans `plugins:`) -> distribution(s) PyPI qui le fournissent.
# Volontairement explicite : les noms de plugin et de paquet ne coincident presque jamais.
PLUGIN_PACKAGES: dict[str, list[str]] = {
    # Fournis par ProperDocs / MkDocs eux-memes : rien a declarer.
    "search": [],
    "sitemap": [],
    # Fournis par mkdocs-material.
    "blog": ["mkdocs-material"],
    "social": ["mkdocs-material"],
    "tags": ["mkdocs-material"],
    "offline": ["mkdocs-material"],
    "group": ["mkdocs-material"],
    # Plugins externes.
    "rss": ["mkdocs-rss-plugin"],
    "minify": ["mkdocs-minify-plugin"],
    "git-revision-date-localized": ["mkdocs-git-revision-date-localized-plugin"],
    "redirects": ["mkdocs-redirects"],
    "macros": ["mkdocs-macros-plugin"],
}


class _Loader(yaml.SafeLoader):
    """Chargeur tolerant aux balises Python utilisees par PyMdown dans properdocs.yml."""


def _ignore_python_tag(loader: yaml.Loader, tag_suffix: str, node: yaml.Node) -> object:
    """Ignore les balises `!!python/name:...` : seuls les noms de plugins nous interessent."""
    if isinstance(node, yaml.ScalarNode):
        return loader.construct_scalar(node)
    if isinstance(node, yaml.SequenceNode):
        return loader.construct_sequence(node)
    return loader.construct_mapping(node)


_Loader.add_multi_constructor("tag:yaml.org,2002:python/name:", _ignore_python_tag)


def normalize(name: str) -> str:
    """Normalise un nom de distribution : minuscules, `_`/`.` -> `-`, sans extras ni version."""
    name = name.strip()
    # Coupe la version et les extras : "mkdocs-material[imaging]==9.7.1" -> "mkdocs-material"
    name = re.split(r"[<>=!~;\s\[]", name, maxsplit=1)[0]
    return name.lower().replace("_", "-").replace(".", "-")


def parse_requirements(path: Path) -> set[str]:
    """Retourne l'ensemble des distributions normalisees declarees dans un fichier pip."""
    dists: set[str] = set()
    for raw_line in path.read_text(encoding="utf-8").splitlines():
        line = raw_line.split("#", 1)[0].strip()
        if not line or line.startswith("-"):
            continue  # commentaire vide, ou option pip (-r, -e, ...)
        dists.add(normalize(line))
    return dists


def plugin_names(config: dict) -> list[str]:
    """Extrait les noms de plugins declares dans la config (listes de str ou de dicts)."""
    names: list[str] = []
    for entry in config.get("plugins") or []:
        if isinstance(entry, str):
            names.append(entry)
        elif isinstance(entry, dict):
            names.extend(str(key) for key in entry)
    return names


def main(argv: list[str] | None = None) -> int:
    project_dir = Path(__file__).resolve().parent.parent  # -> ZehdBox/

    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--config", type=Path, default=project_dir / "properdocs.yml")
    parser.add_argument("--requirements", type=Path, default=project_dir / "requirements-ci.txt")
    args = parser.parse_args(argv)

    for path in (args.config, args.requirements):
        if not path.is_file():
            print(f"ECHEC : fichier introuvable -> {path}")
            return 1

    config = yaml.load(args.config.read_text(encoding="utf-8"), Loader=_Loader) or {}
    declared = parse_requirements(args.requirements)
    plugins = plugin_names(config)

    missing: list[tuple[str, list[str]]] = []
    unknown: list[str] = []
    for plugin in plugins:
        if plugin not in PLUGIN_PACKAGES:
            unknown.append(plugin)
            continue
        packages = PLUGIN_PACKAGES[plugin]
        if packages and not any(normalize(pkg) in declared for pkg in packages):
            missing.append((plugin, packages))

    if missing or unknown:
        print("ECHEC : incoherence entre les plugins du site et les dependances CI.\n")

        if missing:
            print("  Plugins utilises mais NON installees par la CI :")
            for plugin, packages in missing:
                print(f"    - plugin '{plugin}'  ->  attendu : {', '.join(packages)}")
            print("\n  Consequence si on pousse tel quel : le build strict echoue sur le runner,")
            print("  et le site reste fige sur l'artefact precedent (panne silencieuse).")
            print("  Correctif : ajouter le paquet (avec version epinglee) a")
            print(f"  {args.requirements.name}, dans le MEME commit que l'ajout du plugin.\n")

        if unknown:
            print("  Plugins non repertories dans PLUGIN_PACKAGES :")
            for plugin in unknown:
                print(f"    - '{plugin}'")
            print("\n  Ce script ne connait pas la distribution PyPI qui fournit ces plugins.")
            print("  Correctif : ajouter la correspondance dans PLUGIN_PACKAGES")
            print("  (scripts/check_ci_parity.py) ET le paquet dans requirements-ci.txt.\n")

        return 1

    print(f"OK : {len(plugins)} plugin(s) declare(s), tous installes par {args.requirements.name}.")
    print(f"     {', '.join(plugins)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
