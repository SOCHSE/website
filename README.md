# SOCHSE Public Website

Static public website for [sochse.in](https://sochse.in).

## Stack

- Astro static output
- Tailwind CSS utilities over canonical CSS custom-property tokens
- Cloudflare Workers Static Assets
- No server runtime, database, CMS, or client-portal connection

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run check
npm run build
```

## Deployment

The production Worker is connected to the `main` branch through Cloudflare
Workers Builds. A push to `main` builds and deploys the site. Build caching is
intentionally disabled while the site remains small and static.

An authenticated local environment can also deploy manually:

```bash
npm run deploy
```

`sochse.in` is attached as the Worker Custom Domain. Deployment does not use
the SOCHSE Oracle server.

## Content boundary

Private founder systems receive high-level descriptions only. Never add private
metrics, screenshots, demos, repositories, credentials, data, strategies, or
proof-like mockups. Elixir public work covers its website only.
