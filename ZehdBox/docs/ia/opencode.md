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
    <strong>OpenCode</strong> est un agent de codage <strong>open source</strong> (220k+ ⭐, 22M+ devs/mois) qui s'exécute localement sur votre machine. Il s'utilise depuis le terminal, une application desktop, le web, le mobile ou via son SDK.
</p>

---

## <span class="h2">Produits disponibles</span>

<div class="grid cards" markdown>

-   :material-console-line:{ .lg .middle } __Terminal (CLI)__

    ---

    Interface rapide dans n'importe quel shell, éditeur ou serveur distant. Raccourcis clavier, sessions parallèles, diffs temps réel.

    [:octicons-arrow-right-24: Installation CLI](#terminal-cli)

-   :material-desktop-classic:{ .lg .middle } __Application Desktop__

    ---

    App native multi-plateforme : onglets, navigateur intégré, extensions, UI complète.

    [:octicons-arrow-right-24: Télécharger](https://opencode.ai/desktop#download)

-   :material-web:{ .lg .middle } __Interface Web__

    ---

    Via `opencode pair` (tunnel local) ou auto-hébergée avec OpenChamber. PWA installable, fonctionne sur mobile.

    [:octicons-arrow-right-24: OpenChamber](#openchamber-interface-web-pour-opencode)

-   :material-cellphone:{ .lg .middle } __Mobile__

    ---

    Apps iOS (TestFlight) et Android (Play Store) pour piloter vos sessions.

    [:octicons-arrow-right-24: Mobile](#openchamber-interface-web-pour-opencode)

-   :material-code-braces:{ .lg .middle } __SDK TypeScript__

    ---

    Pilotage programmatique pour CI, scripts, outils internes.

    ```bash
    npm install @opencode/sdk
    ```

-   :material-cube-outline:{ .lg .middle } __OpenChamber__

    ---

    Environnement de développement agentique : desktop, web, VS Code, mobile. Inclut OpenCode pré-installé.

    [:octicons-arrow-right-24: OpenChamber](#openchamber-interface-web-pour-opencode)

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

## <span class="h2">Installation</span>

=== "Linux"

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
        Ces gestionnaires utilisent un script `postinstall` pour télécharger le binaire natif adapté à votre plateforme. Les flags `--trust` / `--allow-build` sont requis.

    #### Binaires standalone (glibc/musl, x64/ARM64)

    ![OpenCode TUI Demo](assets/opencode-tui-demo.png){ .cli-demo }

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

=== "Windows"

    ### Terminal (CLI)

    #### Binaires standalone (recommandé)

    ![OpenCode Windows](assets/opencode-tui-demo.png){ .cli-demo }

    Télécharger depuis <https://opencode.ai/update/api/latest/cli/opencode/> :

    | Architecture | Fichier |
    |--------------|---------|
    | x64 | [windows-x64.zip](https://opencode.ai/update/api/latest/cli/opencode/opencode-windows-x64.zip) |
    | ARM64 | [windows-arm64.zip](https://opencode.ai/update/api/latest/cli/opencode/opencode-windows-arm64.zip) |
    | x64 (baseline) | [windows-x64-baseline.zip](https://opencode.ai/update/api/latest/cli/opencode/opencode-windows-x64-baseline.zip) |

    ```powershell
    # PowerShell - x64
    Invoke-WebRequest -Uri "https://opencode.ai/update/api/latest/cli/opencode/opencode-windows-x64.zip" -OutFile "opencode.zip"
    Expand-Archive -Path "opencode.zip" -DestinationPath "$env:USERPROFILE\opencode"
    # Ajouter $env:USERPROFILE\opencode au PATH système
    ```

    #### Via gestionnaires de paquets (si disponibles)

    ```powershell
    # Scoop
    scoop install opencode

    # Chocolatey
    choco install opencode

    # Winget
    winget install anomalyco.opencode
    ```

    !!! note "Gestionnaires de paquets Windows"
        Les gestionnaires natifs (winget, scoop, choco) peuvent avoir des versions légèrement en retard. Privilégier le binaire direct pour la dernière version.

    ### Application Desktop

    Télécharger l'installateur :

    | Version | Télécharger |
    |---------|-------------|
    | Windows x64 | [.exe](https://opencode.ai/update/api/latest/desktop/opencode/opencode-desktop-win-x64.exe) |
    | Windows ARM64 | [.exe](https://opencode.ai/update/api/latest/desktop/opencode/opencode-desktop-win-arm64.exe) |

    Exécuter l'installateur et suivre l'assistant.

---

## <span class="h2">OpenChamber : Interface web pour OpenCode</span>

<p class="intro">
    <strong>OpenChamber</strong> est l'environnement de développement agentique pour OpenCode : desktop, web (PWA), VS Code, mobile. UI moderne pour visualiser les diffs, reviewer le travail des agents, gérer les projets et contexts.
</p>

!!! important "Compatibilité versions"
    **OpenChamber 2.0 nécessite OpenCode 2.0.15+**. L'application desktop la bundle automatiquement.

<div class="grid cards" markdown>

-   :material-desktop-classic:{ .lg .middle } __Application Desktop (recommandée)__

    ---

    L'app desktop **inclut sa propre copie d'OpenCode** → rien d'autre à installer.

    **Formats :** `.deb`, `.rpm`, `AppImage` (Linux) · `.exe` (Windows) · `.dmg` (macOS)

    [:octicons-arrow-right-24: Télécharger](https://openchamber.dev/download/)

-   :material-web:{ .lg .middle } __Web + PWA (auto-hébergé)__

    ---

    Nécessite OpenCode + Node.js 24.14+

    ```bash
    curl -fsSL https://raw.githubusercontent.com/openchamber/openchamber/main/scripts/install.sh | bash
    openchamber --ui-password "votre-mot-de-passe"
    ```

    Ouvrir `http://localhost:3000` → "Installer" dans le navigateur pour PWA.

-   :material-microsoft-visual-studio-code:{ .lg .middle } __Extension VS Code / Cursor / Windsurf__

    ---

    [Marketplace](https://marketplace.visualstudio.com/items?itemName=fedaykindev.openchamber) / [Open VSX](https://open-vsx.org/extension/FedaykinDev/openchamber)
    Nécessite OpenCode installé séparément.

-   :material-cellphone:{ .lg .middle } __Mobile (iOS / Android)__

    ---

    iOS : [TestFlight](https://testflight.apple.com/join/M9eFEE1q)
    Android : [Play Store](https://play.google.com/store/apps/details?id=ai.opencode.mobilecode)
    Pairer via QR code.

-   :material-snowflake:{ .lg .middle } __Nix / NixOS__

    ---

    ```bash
    nix run github:openchamber/openchamber        # Web
    nix run github:openchamber/openchamber#gui    # Desktop
    ```

</div>

---

## <span class="h2">Configuration initiale</span>

### :material-account-key: Connexion aux modèles (Providers)

```bash
opencode
# Puis dans le TUI : /connect
```

**Providers supportés :** Anthropic, OpenAI, Google, xAI, DeepSeek, Groq, **Ollama (local)**, OpenRouter, 200+ via Models.dev.

**Modèles gratuits (sans clé) :** Big Pickle, DeepSeek V4.1 Flash Free, GLM-5.3-Flash Free.

### :material-file-cog: Fichiers de configuration

| Fichier | Portée |
|---------|--------|
| `~/.config/opencode/opencode.json` | Globale (utilisateur) |
| `.opencode/opencode.json` | Projet (partagé via git) |

Exemple `.opencode/opencode.json` :
```json
{
  "theme": "catppuccin-mocha",
  "keybindings": "vscode",
  "providers": { "anthropic": { "apiKey": "${ANTHROPIC_API_KEY}" } }
}
```

### :material-palette: Thèmes & raccourcis (Terminal)

`Ctrl+Shift+P` → Settings | `?` / `F1` → Aide

Thèmes : `catppuccin-mocha`, `tokyo-night`, `dracula`, `gruvbox`, `nord`
Raccourcis : `vscode`, `vim`, `emacs`, `default`

---

## <span class="h2">Exemple d'usage : Premier projet avec OpenCode</span>

### 1. :material-folder-open: Ouvrir un projet

```bash
cd mon-projet
opencode
```

### 2. :material-robot: Lancer une première tâche

Dans le TUI, taper en langage naturel :
```
> Analyse ce projet et propose une amélioration du README
```

L'agent explore le code, comprend la structure, et propose des modifications concrètes.

### 3. :material-tab-plus: Sessions parallèles

```bash
# Nouveau onglet: Ctrl+Shift+T
/session new "refactor auth"
/sessions
/session 2
```

### 4. :material-console-line: Commande personnalisée

```bash
# .opencode/commands/review.md
---
name: review
description: Revue de code complète
---
Revue : style, sécurité, performance, tests, doc.
```
Puis utiliser : `/review`

### 5. :material-github: Connecter un serveur MCP (ex: GitHub)

```bash
# Dans le TUI
/mcp add github
# Suivre les instructions d'authentification
```

### 6. :material-book-multiple: Skills (workflows réutilisables)

```bash
# .opencode/skills/ma-tache.md
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

<div class="grid cards" markdown>

-   :material-book-open-variant:{ .lg .middle } __Documentation officielle__

    ---

    <https://opencode.ai/docs>

-   :material-github:{ .lg .middle } __GitHub Repository__

    ---

    <https://github.com/anomalyco/opencode> (220k+ ⭐)

-   :material-message-text:{ .lg .middle } __Discord Community__

    ---

    <https://discord.gg/opencode>

-   :material-school:{ .lg .middle } __Cours Boot.dev (gratuit)__

    ---

    <https://www.boot.dev/courses/learn-ai-coding>

-   :material-cube-outline:{ .lg .middle } __OpenChamber Docs__

    ---

    <https://docs.openchamber.dev/>

-   :material-currency-usd:{ .lg .middle } __OpenCode Go / Go Plus__

    ---

    $10/mois / $40/mois — <https://opencode.ai/console/go>

</div>

---

!!! tip "Astuces rapides"
    - `opencode --help` : toutes les options CLI
    - `?` ou `F1` dans le TUI : aide intégrée (raccourcis, commandes)
    - `Ctrl+Shift+P` dans le TUI : palette de commandes (settings, thèmes, keybindings)
    - `/undo` / `/redo` : annuler/rétablir les derniers changements
    - Variables d'env dans config : `${VAR_NAME}` (ex: `${ANTHROPIC_API_KEY}`)