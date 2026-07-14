# Ellen Chen — Portfolio

My personal portfolio site: [portfolio-ellenchen.vercel.app](https://portfolio-ellenchen.vercel.app/)

Built with **Next.js 14 (App Router) + Tailwind CSS + TypeScript**, exported as a static site.

## Highlights

- **Hero review panel** — the profile renders as fields coming out of an AI extraction pipeline, verified one by one. It's a working nod to the review UIs I built at Qlo.
- **Schema-driven content** — every string on the page lives in [`data/content.ts`](data/content.ts); components render from it rather than hardcoding copy.
- **Accessible by default** — visible keyboard focus throughout, the hero animation respects `prefers-reduced-motion`, and the architecture diagram ships a full text alternative.

## Stack

React · Next.js 14 · TypeScript · Tailwind CSS

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

`npm run build` outputs a static site to `out/`.

## Structure

```
app/            layout, page, global styles (tokens + animations)
components/     ReviewPanel (hero signature), CaseStudyBlock, ArchDiagram, FieldLabel
data/content.ts all page copy
```
