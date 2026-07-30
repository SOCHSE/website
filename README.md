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

Connect this repository to Cloudflare Workers Builds or deploy from an
authenticated local environment:

```bash
npm run deploy
```

Attach `sochse.in` as a Worker Custom Domain after the first preview has been
reviewed. Deployment does not use the SOCHSE Oracle server.

## Content boundary

Private founder systems receive high-level descriptions only. Never add private
metrics, screenshots, demos, repositories, credentials, data, strategies, or
proof-like mockups. Elixir public work covers its website only.
