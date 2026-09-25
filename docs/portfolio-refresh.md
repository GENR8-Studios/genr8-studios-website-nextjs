# Portfolio refresh — production Next.js site

This is the production repository for genr8studios.com, deployed by Vercel from `main`. The earlier static design was developed in Genr83d/genr8-studios-production, which does not drive this deployment.

The portfolio page adopts the approved dark/orange image-led design and retains every project in `src/constants/portfolio.ts`. Four additional artwork pieces from the approved design remain accessible through direct image links. Existing project detail routes and other pages are unchanged.

`src/app/portfolio/page.tsx` owns the page composition and project mapping. `src/components/portfolio/PortfolioGallery.tsx` progressively enhances the server-rendered list with accessible filters and native history. Without JavaScript all projects remain visible. Filter changes initiated by pointer use transform/opacity animation; keyboard and reduced-motion changes are immediate. Category links are shareable.

Styles are scoped to `.portfolio-page`. Edit the SCSS, then compile:

```sh
npx sass src/app/portfolio/portfolio.scss src/app/portfolio/portfolio.css --style=compressed --no-source-map
```

Driven and Mountain Dew use edited PNG masters and responsive WebP alternatives from `public/portfolio`, bypassing a second lossy image optimization. The AI editing prompts and original provenance are recorded in `portfolio-image-clarity.md`; its original asset paths refer to the earlier static repository. The artwork is AI enhanced, not a lossless reconstruction of original source data. The actual native generated dimensions are retained.

Validation: production build and TypeScript checking; React DOM tests for category controls, URL initialization and history restoration, active state/counts, invalid-category fallback and cleanup; rendered HTML and local link/asset checks. A connected browser is unavailable in this environment, so no interactive visual-browser approval is claimed.
