---
title: OpenCode - Agent de codage IA
description: "Installer et configurer OpenCode sur Linux, Windows et OpenChamber - Guide complet pas à pas"
icon: material/console-line
tags:
  - ia
  - outils
  - opencode
  - openchamber
  - linux
  - windows
---

# <span class="h1">OpenCode : Agent de codage IA</span>

<p class="intro">
    <strong>OpenCode</strong> est un agent de codage <strong>open source</strong> (220k+ ⭐ sur GitHub, 22M+ développeurs/mois) qui s'exécute localement sur votre machine. Il s'utilise depuis le terminal, une application desktop, le web, le mobile ou via son SDK.
</p>

---

## <span class="h2">Pourquoi OpenCode ?</span>

<div class="grid cards" markdown>

-   :material-console-line:{ .lg .middle } __Terminal (TUI)__

    ---

    Interface rapide dans n'importe quel shell, éditeur ou serveur distant. Raccourcis clavier, sessions parallèles, diffs en temps réel.

    [:octicons-arrow-right-24: Installation CLI](#terminal-cli)

-   :material-desktop-classic:{ .lg .middle } __Application Desktop__

    ---

    Interface graphique native (macOS, Windows, Linux) avec onglets, navigateur intégré, extensions, gestion visuelle des sessions.

    [:octicons-arrow-right-24: Installation Desktop](#application-desktop)

-   :material-web:{ .lg .middle } __Interface Web__

    ---

    Accessible via `opencode pair` ou auto-hébergée avec OpenChamber. PWA installable, fonctionne sur mobile.

    [:octicons-arrow-right-24: OpenChamber](#openchamber-interface-web-pour-opencode)

-   :material-cellphone:{ .lg .middle } __Mobile__

    ---

    Apps iOS (TestFlight) et Android (Play Store) pour démarrer, piloter et approuver des sessions depuis votre téléphone.

    [:octicons-arrow-right-24: Mobile](#mobile-ios-android)

-   :material-code-braces:{ .lg .middle } __SDK__

    ---

    Pilotage programmatique depuis TypeScript/JavaScript pour CI, scripts, outils internes.

    ```ts
    import { OpenCode } from "@opencode/sdk"
    await using oc = await OpenCode.create()
    const s = await oc.sessions.create()
    await oc.sessions.prompt({ sessionID: s.id, text: "Fix failing tests" })
    ```

</div>

---

## <span class="h2">Fonctionnalités clés</span>

| Fonctionnalité | Description |
|----------------|-------------|
| **Modèles** | 200+ providers via Models.dev (Anthropic, OpenAI, Google, xAI, DeepSeek, Groq, Ollama, OpenRouter...) + modèles locaux |
| **Modèles gratuits** | Big Pickle, DeepSeek V4.1 Flash Free, GLM-5.3-Flash Free (sans compte) |
| **Multi-session** | Plusieurs agents en parallèle sur le même projet |
| **Plugins** | Hooks événementiels pour étendre OpenCode |
| **MCP Servers** | Connexion à GitHub, Linear, Figma, Sentry, Notion, Slack, Supabase, Stripe... |
| **Agents personnalisés** | Prompts, modèles et outils dédiés par agent |
| **Skills** | Workflows réutilisables (fichiers `.md` avec étapes) |
| **Commandes** | Slash commands personnalisés (`/ma-commande`) |
| **Permissions** | Contrôle granulaire : auto-approbation ou confirmation |
| **Undo/Redo** | Annuler/rétablir les changements récents (fichiers + conversation) |

---

## <span class="h2">Produits disponibles</span>

=== "Terminal (CLI)"
    Interface texte rapide, raccourcis clavier, sessions parallèles, diffs temps réel.
    
    ```bash
    # Installation rapide
    curl -fsSL https://opencode.ai/v2/install | bash
    opencode
    ```

=== "Desktop"
    App native multi-plateforme : onglets, navigateur intégré, extensions, UI complète.
    
    [Télécharger](https://opencode.ai/desktop#download) · [GitHub Releases](https://github.com/anomalyco/opencode/releases)

=== "Web"
    Via `opencode pair` (tunnel local) ou auto-hébergé avec OpenChamber.
    
    ```bash
    opencode pair
    # Ouvre http://127.0.0.1:49374/auth/connect/...
    ```

=== "Mobile"
    iOS (TestFlight) / Android (Play Store) - pairer via QR code.
    
    [TestFlight](https://testflight.apple.com/join/M9eFEE1q) · [Play Store](https://play.google.com/store/apps/details?id=ai.opencode.mobilecode)

=== "SDK"
    TypeScript/JavaScript pour automatisation, CI, outils custom.
    
    ```bash
    npm install @opencode/sdk
    ```

---

## <span class="h2">Installation sur Linux</span>

### Terminal (CLI)

#### Via curl (recommandé, universel)
```bash
curl -fsSL https://opencode.ai/v2/install | bash
```

#### Via gestionnaires de paquets
```bash
# Homebrew
brew install anomalyco/tap/opencode-v2

# npm
npm install -g @opencode/cli

# bun
bun install -g --trust @opencode/cli

# pnpm
pnpm add -g --allow-build=@opencode/cli @opencode/cli

# yarn
yarn global add @opencode/cli

# mise
mise use -g opencode

# Arch (AUR)
paru -S opencode-beta
```

!!! note "Note sur npm/pnpm/yarn"
    Ces gestionnaires utilisent un script `postinstall` pour télécharger le binaire natif adapté à votre plateforme. Les flags `--trust` / `--allow-build` / pas de flag pour Vite+ sont requis.

#### Binaires standalone (glibc/musl, x64/ARM64)
Télécharger depuis <https://opencode.ai/update/api/latest/cli/opencode/> :

| Architecture | glibc | musl (Alpine) |
|--------------|-------|---------------|
| x64 | [linux-x64.tar.gz](https://opencode.ai/update/api/latest/cli/opencode/opencode-linux-x64.tar.gz) | [linux-x64-musl.tar.gz](https://opencode.ai/update/api/latest/cli/opencode/opencode-linux-x64-musl.tar.gz) |
| ARM64 | [linux-arm64.tar.gz](https://opencode.ai/update/api/latest/cli/opencode/opencode-linux-arm64.tar.gz) | [linux-arm64-musl.tar.gz](https://opencode.ai/update/api/latest/cli/opencode/opencode-linux-arm64-musl.tar.gz) |
| x64 (baseline) | [linux-x64-baseline.tar.gz](https://opencode.ai/update/api/latest/cli/opencode/opencode-linux-x64-baseline.tar.gz) | [linux-x64-baseline-musl.tar.gz](https://opencode.ai/update/api/latest/cli/opencode/opencode-linux-x64-baseline-musl.tar.gz) |

Installation :
```bash
# Exemple x64 glibc
tar -xzf opencode-linux-x64.tar.gz
sudo mv opencode /usr/local/bin/
opencode --version
```

### Application Desktop

Télécharger depuis <https://opencode.ai/desktop#download> :

| Format | x64 | ARM64 |
|--------|-----|-------|
| .deb (Ubuntu/Debian) | [amd64.deb](https://opencode.ai/update/api/latest/desktop/opencode/opencode-desktop-linux-amd64.deb) | [arm64.deb](https://opencode.ai/update/api/latest/desktop/opencode/opencode-desktop-linux-arm64.deb) |
| .rpm (Fedora/RHEL) | [x86_64.rpm](https://opencode.ai/update/api/latest/desktop/opencode/opencode-desktop-linux-x86_64.rpm) | [aarch64.rpm](https://opencode.ai/update/api/latest/desktop/opencode/opencode-desktop-linux-aarch64.rpm) |
| AppImage (universel) | [x86_64.AppImage](https://opencode.ai/update/api/latest/desktop/opencode/opencode-desktop-linux-x86_64.AppImage) | [arm64.AppImage](https://opencode.ai/update/api/latest/desktop/opencode/opencode-desktop-linux-arm64.AppImage) |

Installation :
```bash
# .deb (Ubuntu/Debian)
sudo dpkg -i opencode-desktop-linux-amd64.deb

# .rpm (Fedora/RHEL)
sudo rpm -i opencode-desktop-linux-x86_64.rpm

# AppImage (universel)
chmod +x opencode-desktop-linux-x86_64.AppImage
./opencode-desktop-linux-x86_64.AppImage
```

---

## <span class="h2">Installation sur Windows</span>

### Terminal (CLI)

#### Binaires standalone (recommandé)
Télécharger depuis <https://opencode.ai/update/api/latest/cli/opencode/> :

- `opencode-windows-x64.zip` (x64)
- `opencode-windows-arm64.zip` (ARM64)
- `opencode-windows-x64-baseline.zip` (compatibilité étendue)

```powershell
# PowerShell - x64
Invoke-WebRequest -Uri "https://opencode.ai/update/api/latest/cli/opencode/opencode-windows-x64.zip" -OutFile "opencode.zip"
Expand-Archive -Path "opencode.zip" -DestinationPath "$env:USERPROFILE\opencode"
# Ajouter $env:USERPROFILE\opencode au PATH système (Variables d'environnement)
```

!!! note "Gestionnaires de paquets Windows"
    Les gestionnaires natifs (winget, scoop, choco) peuvent avoir des versions légèrement en retard. Privilégier le binaire direct pour la dernière version.

#### Via gestionnaires de paquets (si disponibles)
```powershell
# Scoop
scoop install opencode

# Chocolatey
choco install opencode

# Winget
winget install anomalyco.opencode
```

### Application Desktop

Télécharger l'installateur :
- [Windows x64 (.exe)](https://opencode.ai/update/api/latest/desktop/opencode/opencode-desktop-win-x64.exe)
- [Windows ARM64 (.exe)](https://opencode.ai/update/api/latest/desktop/opencode/opencode-desktop-win-arm64.exe)

Exécuter l'installateur et suivre l'assistant.

---

## <span class="h2">OpenChamber : Interface web pour OpenCode</span>

<p class="intro">
    <strong>OpenChamber</strong> est l'environnement de développement agentique pour OpenCode : desktop, web (PWA), VS Code, mobile. Il apporte une UI moderne pour visualiser les diffs, reviewer le travail des agents, gérer les projets et contexts.
</p>

!!! important "Compatibilité versions"
    **OpenChamber 2.0 nécessite OpenCode 2.0.15+**. L'application desktop la bundle automatiquement.

### Application Desktop (recommandé)

L'app desktop **inclut sa propre copie d'OpenCode** → rien d'autre à installer.

Télécharger depuis <https://openchamber.dev/download/> ou [GitHub Releases](https://github.com/openchamber/openchamber/releases/latest) :

| OS | Formats |
|----|---------|
| Linux | `.deb`, `.rpm`, `AppImage` |
| Windows | `.exe` |
| macOS | `.dmg` |

### Web + PWA (auto-hébergé)

Nécessite : OpenCode installé + **Node.js 24.14+**

```bash
# Installation rapide
curl -fsSL https://raw.githubusercontent.com/openchamber/openchamber/main/scripts/install.sh | bash
openchamber --ui-password "votre-mot-de-passe-securise"
```

Ouvrir l'URL affichée (ex: `http://localhost:3000`).
Utiliser **"Installer"** dans la barre d'adresse du navigateur pour l'avoir comme app (PWA).

### Extension VS Code / Cursor / Windsurf

1. Installer depuis [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=fedaykindev.openchamber) ou [Open VSX](https://open-vsx.org/extension/FedaykinDev/openchamber)
2. Nécessite OpenCode installé séparément
3. Ouvrir la vue OpenChamber dans la barre latérale (icône OpenChamber)

### Mobile (iOS / Android)

- iOS : [TestFlight public beta](https://testflight.apple.com/join/M9eFEE1q)
- Android : [Google Play](https://play.google.com/store/apps/details?id=ai.opencode.mobilecode) ou [GitHub Releases](https://github.com/openchamber/openchamber/releases)

Pairer avec votre ordinateur via QR code ou lien de connexion.

### Nix / NixOS

```bash
# Web server sur http://localhost:3000
nix run github:openchamber/openchamber

# Desktop app
nix run github:openchamber/openchamber#gui
```

Le flake expose aussi `packages.openchamber`, `packages.openchamber-desktop`, et un module NixOS `nixosModules.openchamber`.

---

## <span class="h2">Configuration initiale</span>

### Connexion aux modèles (Providers)

Dans le terminal OpenCode :
```bash
opencode
# Puis dans le TUI : /connect
```

Providers supportés : **Anthropic**, **OpenAI**, **Google**, **xAI**, **DeepSeek**, **Groq**, **Ollama** (local), **OpenRouter**, et **200+ via Models.dev**.

Modèles gratuits disponibles (sans clé API) : **Big Pickle**, **DeepSeek V4.1 Flash Free**, **GLM-5.3-Flash Free**.

### Fichiers de configuration (optionnel)

```bash
# Config globale (utilisateur)
~/.config/opencode/opencode.json

# Config projet (partagée via git)
.opencode/opencode.json
```

Exemple `.opencode/opencode.json` :
```json
{
  "theme": "catppuccin-mocha",
  "keybindings": "vscode",
  "providers": {
    "anthropic": { "apiKey": "${ANTHROPIC_API_KEY}" }
  }
}
```

### Thèmes et raccourcis (Terminal)

Disponibles dans le TUI via `Ctrl+Shift+P` → **Settings** ou `?` / `F1` pour l'aide.

Thèmes populaires : `catppuccin-mocha`, `tokyo-night`, `dracula`, `gruvbox`, `nord`.
Raccourcis : `vscode`, `vim`, `emacs`, `default`.

---

## <span class="h2">Exemple d'usage : Premier projet avec OpenCode</span>

### 1. Ouvrir un projet existant
```bash
cd mon-projet
opencode
```

### 2. Lancer une première tâche
Dans le TUI, taper en langage naturel :
```
> Analyse ce projet et propose une amélioration du README
```

L'agent explore le code, comprend la structure, et propose des modifications concrètes.

### 3. Utiliser les sessions parallèles
```bash
# Nouvelle session (onglet) - Ctrl+Shift+T dans le TUI
# Ou via commande :
/session new "refactor auth"

# Lister les sessions
/sessions

# Basculer vers la session 2
/session 2
```

### 4. Créer une commande personnalisée
```bash
# Créer .opencode/commands/review.md
---
name: review
description: Revue de code complète
---
Revue de code : style, sécurité, performance, tests, documentation.
```

Puis utiliser : `/review`

### 5. Connecter un serveur MCP (ex: GitHub)
```bash
# Dans le TUI
/mcp add github
# Suivre les instructions d'authentification
```

### 6. Utiliser les Skills (workflows réutilisables)
```bash
# Créer .opencode/skills/ma-tache.md
---
name: ma-tache
description: Mon workflow personnalisé
---
1. Analyser l'existant
2. Proposer un plan
3. Implémenter
4. Tester
5. Documenter
```

Puis lancer : `/skill ma-tache`

---

## <span class="h2">Ressources utiles</span>

- **Documentation officielle** : <https://opencode.ai/docs>
- **Changelog** : <https://opencode.ai/changelog>
- **GitHub** : <https://github.com/anomalyco/opencode> (220k+ ⭐)
- **Discord** : <https://discord.gg/opencode>
- **OpenChamber Docs** : <https://docs.openchamber.dev/>
- **OpenChamber GitHub** : <https://github.com/openchamber/openchamber>
- **Cours Boot.dev (gratuit)** : <https://www.boot.dev/courses/learn-ai-coding>
- **Modèles gratuits** : <https://opencode.ai/console/models#free-models>
- **OpenCode Go** : <https://opencode.ai/console/go> ($10/mois)
- **OpenCode Go Plus** : <https://opencode.ai/console/go> ($40/mois)

---

!!! tip "Astuces rapides"
    - `opencode --help` : toutes les options CLI
    - `?` ou `F1` dans le TUI : aide intégrée (raccourcis, commandes)
    - `Ctrl+Shift+P` dans le TUI : palette de commandes (settings, thèmes, keybindings)
    - `/undo` / `/redo` : annuler/rétablir les derniers changements
    - Variables d'env dans config : `${VAR_NAME}` (ex: `${ANTHROPIC_API_KEY}`)