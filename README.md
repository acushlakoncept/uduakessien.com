# Uduak Essien — Personal Website

A modern, terminal-inspired portfolio for **Uduak Essien**, a senior full stack software engineer specializing in **Ruby on Rails and React**.

The website introduces Uduak's experience to employers and freelance clients, highlights recent professional work, and brings technical writing and contact information into one place. It pairs a restrained hacker-inspired identity with readable typography, responsive layouts, and a comfortable day mode.

**Website:** [uduakessien.com](https://uduakessien.com/)  
**GitHub:** [acushlakoncept](https://github.com/acushlakoncept)  
**LinkedIn:** [acushlakoncept](https://www.linkedin.com/in/acushlakoncept)

> The website link identifies the personal domain. Pushing this repository does not, by itself, confirm that the domain is serving this version.

## Contents

- [Features](#features)
- [Pages](#pages)
- [Technology](#technology)
- [Repository structure](#repository-structure)
- [Local development](#local-development)
- [Commands](#commands)
- [Build and hosting](#build-and-hosting)
- [Updating content and assets](#updating-content-and-assets)
- [Appearance and animation](#appearance-and-animation)
- [Accessibility and metadata](#accessibility-and-metadata)
- [Verification](#verification)
- [Troubleshooting](#troubleshooting)
- [Contributing and usage](#contributing-and-usage)

## Features

- Five dedicated pages with shared navigation, a mobile menu, and a custom not-found screen.
- Recent professional experience and project write-ups, including work on OCConnect, warranty claims management, and Racing for Recovery APIs.
- Additional personal projects linking to their GitHub repositories.
- Eight technical publications, with topic filters and links to the original articles.
- Downloadable PDF résumé, personal logo, and portrait.
- Direct email links, a copy-email button, and links to LinkedIn and GitHub.
- Day/night mode with a saved browser preference.
- GSAP entrance animations, scroll reveals, and terminal-style typing effects.
- Reduced-motion handling and keyboard-visible focus states.
- A footer clock displaying the current time in Lisbon.

Professional project descriptions do not expose private client source code or claim to offer public demos of those systems.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Introduction, selected professional work, skills, and recent writing |
| `/about` | Career story, professional experience, education, and technical skills |
| `/projects` | Professional project descriptions and selected personal repositories |
| `/blog` | Publications with topic filtering and links to original sources |
| `/contact` | Email, copy-address action, professional profiles, and résumé |
| Unmatched routes | Terminal-inspired not-found page with navigation back to the site |

The navigation labels `/blog` as **writing**. The original route is retained.

## Technology

| Area | Implementation |
| --- | --- |
| UI | React 19 and TypeScript |
| Development and bundling | Vite 7 |
| Styling | Tailwind CSS 4, shared CSS variables, and custom utilities |
| Routing | Wouter |
| Animation | GSAP and ScrollTrigger |
| Icons | Lucide React |
| Fonts | Bricolage Grotesque and IBM Plex Mono, loaded through Google Fonts |
| Package management | pnpm workspaces |

The portfolio is a **client-rendered, static web application**. Its current pages do not require a database, authentication provider, API keys, or a running backend. Contact opens the visitor's email application; there is no server-side contact form or email delivery service.

The repository also includes shared API/database scaffolding and a component-preview sandbox. Those are separate workspace packages, not runtime requirements for the portfolio's static output.

## Repository structure

```text
.
├── artifacts/
│   ├── uduak-portfolio/          # Main website package
│   │   ├── index.html           # HTML entry, initial theme, default metadata
│   │   ├── public/
│   │   │   ├── assets/          # Published logo, portrait, and résumé
│   │   │   ├── favicon.ico
│   │   │   └── robots.txt       # Allows crawling
│   │   ├── src/
│   │   │   ├── components/      # Shared layout, theme toggle, and UI components
│   │   │   ├── hooks/           # Animation, metadata, and utility hooks
│   │   │   ├── lib/content.ts   # Profile, experience, projects, skills, articles
│   │   │   ├── pages/           # Home, About, Projects, Blog, Contact, and 404
│   │   │   ├── App.tsx          # Routing and application providers
│   │   │   ├── main.tsx         # React entry point
│   │   │   └── index.css        # Theme tokens and shared styling
│   │   ├── package.json
│   │   └── vite.config.ts
│   ├── api-server/              # Shared backend scaffold
│   └── mockup-sandbox/          # Separate component-preview workspace
├── attached_assets/            # Original uploaded source assets
├── lib/                        # Shared API contract, generated clients, DB scaffold
├── scripts/                    # Workspace utility scripts
├── package.json                # Root workspace commands
├── pnpm-workspace.yaml         # Package discovery and dependency catalog
└── pnpm-lock.yaml              # Locked dependency versions
```

## Local development

### Prerequisites

- **Node.js 24** is the version used in the development environment.
- **pnpm 10**; the development environment uses pnpm 10.26.1.
- Git.

Use pnpm rather than npm or Yarn. The repository's preinstall check enforces this, and dependencies use pnpm workspace/catalog references.

### Install and run

Run these commands from the repository root on your own machine:

```bash
git clone https://github.com/acushlakoncept/uduakessien.com.git
cd uduakessien.com
pnpm install --frozen-lockfile
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/uduak-portfolio run dev
```

Open `http://localhost:5173`.

The environment-variable syntax above is for macOS/Linux shells. In PowerShell:

```powershell
$env:PORT = "5173"
$env:BASE_PATH = "/"
pnpm --filter @workspace/uduak-portfolio run dev
```

In the existing Replit project, use the configured **`artifacts/uduak-portfolio: web`** workflow rather than starting a second development server. The checked-in artifact configuration supplies its port and base path.

### Required configuration

| Variable | Purpose | Local example |
| --- | --- | --- |
| `PORT` | Listening port; required when Vite loads its configuration, including during builds | `5173` |
| `BASE_PATH` | Public URL prefix; required when Vite loads its configuration | `/` |

For hosting below a subpath, use a leading and trailing slash, such as `/portfolio/`, and configure the host to serve the app under that same prefix.

No `.env` file or secrets are necessary for the current portfolio. The optional backend/database packages have separate configuration requirements; those should not be confused with the website's requirements.

## Commands

Run from the repository root:

| Command | Purpose |
| --- | --- |
| `pnpm install --frozen-lockfile` | Install exactly the dependencies in the lockfile |
| `PORT=5173 BASE_PATH=/ pnpm --filter @workspace/uduak-portfolio run dev` | Start the portfolio locally |
| `pnpm --filter @workspace/uduak-portfolio run typecheck` | Type-check the website without emitting files |
| `PORT=5173 BASE_PATH=/ pnpm --filter @workspace/uduak-portfolio run build` | Build the portfolio for static hosting |
| `PORT=4173 BASE_PATH=/ pnpm --filter @workspace/uduak-portfolio run serve` | Preview an already-built portfolio locally |
| `pnpm run typecheck` | Type-check shared libraries and configured workspace packages |

The root `pnpm run build` checks and builds multiple workspace packages. For a portfolio-only release, use the filtered build above.

## Build and hosting

```bash
pnpm install --frozen-lockfile
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/uduak-portfolio run build
```

The generated static files are written to:

```text
artifacts/uduak-portfolio/dist/public/
```

Configure your static host with:

1. The repository root as the install/build working directory.
2. The portfolio-only build command shown above.
3. `PORT` and `BASE_PATH` available during the build, even if the host does not run a Node.js server in production.
4. `artifacts/uduak-portfolio/dist/public` as the publish/output directory.
5. An SPA fallback: requests that do not match a real static asset should serve `index.html`, so direct visits to `/about`, `/projects`, `/blog`, and `/contact` work.

The artifact's checked-in production configuration already declares static output and a catch-all rewrite to `/index.html`. Other hosting providers need their equivalent configuration. Keep asset requests working normally rather than returning HTML for a missing image or PDF.

This repository does not include a GitHub Actions publishing workflow. A Git push updates source control; any automatic deployment must be configured separately on the chosen host.

## Updating content and assets

### Profile, experience, projects, and publications

Start with [`artifacts/uduak-portfolio/src/lib/content.ts`](artifacts/uduak-portfolio/src/lib/content.ts). It holds shared profile data, career entries, skills, project descriptions, education, and publication details.

- Update shared contact details and professional links in `profile`.
- Maintain accurate employment dates and avoid describing past roles as current.
- Add or edit project descriptions without inventing public URLs for private work.
- Add publications with their original title, date, outlet, topic, and destination URL.
- Some introductory and supporting copy lives directly in `src/pages/`; update those passages when a content change affects them.

### Logo, portrait, résumé, and favicon

Published assets live in `artifacts/uduak-portfolio/public/`:

| File | Used for |
| --- | --- |
| `assets/uduak-essien-logo.png` | Shared header logo |
| `assets/uduak-portrait.png` | Portrait and default social image |
| `assets/Uduak_Essien_Resume.pdf` | Résumé download links |
| `favicon.ico` | Browser tab icon (the supplied file contains a 64×64 PNG image) |

Replace these files while keeping their names to preserve existing links. If renaming a file, update all references, including `profile`, the header, and `index.html` where applicable.

`attached_assets/` contains the original uploads; replacing an original there does **not** automatically replace the published copy in `public/assets/`.

Use the existing base-aware asset helper in `content.ts` or `import.meta.env.BASE_URL` for new application asset links.

### Adding a page

1. Create a page component under `src/pages/`.
2. Register its route in `src/App.tsx`.
3. Add navigation where appropriate in `src/components/site-shell.tsx`.
4. Set a meaningful title and description with `usePageMeta`.
5. Check mobile layout, both themes, and a direct page reload.

## Appearance and animation

### Day and night modes

- The sun/moon button is available in the shared header on desktop and mobile.
- First-time visitors start with their device's light/dark preference.
- Explicit choices are saved in browser `localStorage` under `uduak-theme`.
- When persistent storage is blocked, switching still works for the current mounted application.
- A small script in `index.html` applies the initial theme before React renders to avoid a flash of the wrong background.
- The toggle also updates the browser's `color-scheme` and theme-color metadata.

Theme colors are defined in `src/index.css`. The day palette is scoped to `:root[data-theme="light"]`; dark styling uses the existing default and `.dark` tokens. Keep contrast, borders, muted text, buttons, and focus indicators readable in both modes.

### GSAP

Shared page animations live in `src/hooks/use-gsap.ts`:

| Attribute | Effect |
| --- | --- |
| `data-intro` | Staggered page entrance |
| `data-reveal` | One-time reveal on scroll |
| `data-type` | Typed terminal text |
| `data-line` | Horizontal line reveal |

Use the `usePageAnimations` hook on a containing element. GSAP contexts are reverted when the page unmounts. The hook skips these animations when reduced motion is requested; CSS also disables the blinking caret and smooth scrolling for that preference.

## Accessibility and metadata

The site includes a skip-to-content link, semantic navigation, active-page indicators, visible keyboard focus, descriptive image text, labeled menu/theme controls, and pressed-state indicators for publication filters.

Default search/social metadata lives in `index.html`. Individual pages update titles, descriptions, and Open Graph/Twitter tags through `src/hooks/use-page-meta.ts`.

**Important limitation:** route-specific metadata is updated in the browser. There is no prerendering or server-side rendering, so crawlers or social preview services that do not run JavaScript may only see the default HTML metadata. A basic `robots.txt` allows crawling; there is no generated sitemap.

Google Fonts requests require internet access. System font fallbacks are configured for situations where those requests are unavailable.

## Verification

Start with:

```bash
pnpm --filter @workspace/uduak-portfolio run typecheck
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/uduak-portfolio run build
```

Before publishing, manually check:

- All five navigation destinations and a direct reload on each route.
- Header layout and the mobile menu at narrow widths.
- Day/night switching, navigation after switching, and persistence after refresh.
- Keyboard navigation and visible focus.
- Reduced-motion behavior.
- Résumé download, logo, portrait, and favicon.
- Publication filters and outbound links.
- Email links and copy-address feedback.
- The not-found screen.

There is currently no dedicated automated browser regression suite or CI workflow in this repository. A successful type check is not a substitute for checking the user-facing flows.

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| `PORT environment variable is required` | Set `PORT` for dev, build, or preview; Vite validates it while loading configuration |
| `BASE_PATH environment variable is required` | Set `BASE_PATH=/`, or the correct deployment prefix |
| Port is already in use | Stop the duplicate local server or choose another `PORT`; strict-port mode is enabled |
| A direct `/about` or `/projects` visit returns a host 404 | Add the host's SPA rewrite/fallback to `index.html` |
| Images or résumé links fail below a subpath | Match the host path to `BASE_PATH` and use base-aware asset URLs |
| Theme does not persist between visits | Check whether browser storage is disabled or cleared; switching itself does not require storage |
| Copy-email action is unavailable | Check browser clipboard permissions and secure-context requirements; use the visible address or mail link instead |
| Email link does not send a message | `mailto:` opens an email application; the visitor still needs a configured mail client and must send the message |
| A social preview shows the default description | The preview service may not execute client-side metadata updates |

## Contributing and usage

Keep changes focused, preserve the professional terminal-inspired identity, and check both themes and mobile layouts before submitting a change. Use pnpm and commit the lockfile when dependencies change.

Do not commit credentials, private client code, or confidential project information. The portfolio's photographs, logo, résumé, and biographical content are personal materials; do not assume permission to reuse them as your own.

The root package metadata declares `MIT`, but this repository does not currently contain a standalone license text. Confirm intended licensing with the owner before redistributing code or personal assets.
