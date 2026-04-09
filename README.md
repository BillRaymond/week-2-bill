# week-2-bill

SvelteKit + Tailwind CSS starter for a static site that can be opened in a VS Code Dev Container and deployed to GitHub Pages.

## Local development

```sh
npm run dev
```

## Quality checks

```sh
npm run check
npm run lint
```

## Production build

```sh
npm run build
```

The static site is generated into `build/`.

## Deployment

The GitHub Pages workflow now builds the site inside the Docker image defined at `.devcontainer/Dockerfile`, then publishes the generated `build/` directory to GitHub Pages. This keeps local dev container tooling and CI aligned around the same container setup.

## Dev Container

Open the repo in VS Code and choose `Reopen in Container`. The container installs the project dependencies, includes Git and GitHub CLI, and applies the same global Git identity configured on this computer.

The container is configured for SvelteKit and Tailwind development, with the Svelte, Tailwind CSS, ESLint, Prettier, GitHub Actions, and Docker VS Code extensions preinstalled.
