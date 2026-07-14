# Ellen Chen — Portfolio

Single-page portfolio built with **Next.js 14 (App Router) + Tailwind CSS + TypeScript**, exported as a fully static site.

All copy lives in [`data/content.ts`](data/content.ts) — edit that file to change any text on the page without touching components.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy (GitHub → Vercel, ~5 minutes)

1. Create a new GitHub repo (public — the repo doubles as a code sample) and push this project.
2. On [vercel.com](https://vercel.com), **Add New → Project**, import the repo. Vercel auto-detects Next.js; no settings needed (`output: 'export'` is already configured).
3. Deploy. Optionally add a custom domain under Project → Settings → Domains.

`npm run build` outputs the static site to `out/` if you'd rather host it anywhere else (GitHub Pages, Cloudflare Pages, etc.).

## TODO before applying

- [ ] **Resume PDF** — drop `Resume_Chia_Lin_Chen.pdf` into `/public` (the hero Resume button already points to `/Resume_Chia_Lin_Chen.pdf`).
- [ ] **Read the Qlo case study once more** — it's written from public info + generic architecture patterns only, but you know best where the line is. Cut anything you're unsure about.

## Structure

```
app/            layout, page, global styles (tokens + animations)
components/     ReviewPanel (hero signature), CaseStudyBlock, ArchDiagram, FieldLabel
data/content.ts all page copy — the only file you need to edit routinely
```

Accessibility notes: keyboard focus is visible throughout, the hero animation is disabled under `prefers-reduced-motion`, and the architecture diagram has a full text alternative.
