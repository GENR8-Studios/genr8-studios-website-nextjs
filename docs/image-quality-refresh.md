# Image quality refresh — 24 October 2026

This change targets `GENR8-Studios/genr8-studios-website-nextjs`. It reuses the artwork generated in this conversation. The edits made in the older static repository were removed after transferring the finished assets here. No deployment was performed.

## Artwork and integration

- `src/assets/images/NecrosRevenge/necros-revenge-hero-v2.webp` is the new dark fantasy hero. The homepage and game detail background use it with a 74% horizontal focal point for mobile. The project feature export and games listing use the same new artwork. Historical gallery artwork remains available.
- `docs/artwork/necros-revenge-hero-v2.png` preserves the generated hero master: **1672 × 941**.
- `docs/artwork/moondrip-restored-v2.png` preserves the reconstructed portrait master: **1122 × 1402**, replacing a **488 × 610** thumbnail.
- Both images were produced with the built-in image generation tool. [The full prompts](artwork/generation-prompts.md) accompany the assets. The tool returned smaller dimensions than requested; no file was artificially enlarged or presented as native 4K.

## Production UI baseline

The rendered live homepage and portfolio at `https://genr8studios.com` are the reference. A cached text extraction initially returned an older 11-card portfolio; direct browser and HTTP checks confirmed the live 15-item gallery. The final page retains the live gallery, typography, navigation, footer, text, card ordering and filters. Image URLs, responsive delivery and the new hero focal point are the intended differences. No client-first redesign proposal is implemented. The local production server is stopped before rebuilding and restarted afterward to avoid serving cached pages against a different asset manifest.

## Gallery delivery

The first eight gallery items now have high-quality WebP exports at their native dimensions and at 640, 960 and 1400 pixels where smaller than the master. The crop-aware `sizes` hints account for the 4:3 and 4:5 display crops, the grid's actual breakpoints, and the wider column so filtering can move cards without undersampling. These manually exported images avoid a second lossy optimizer pass. All remaining production projects and their existing detail routes are retained with their native source imagery.

| Project | Delivered native size |
| --- | --- |
| Solar Apartment Complex | 1920 × 1080 |
| Driven | 1672 × 941 |
| Mountain Dew | 1122 × 1402 |
| Moondrip | 1122 × 1402 |
| Office Space | 1920 × 1080 |
| Cookie Quest | 1775 × 1000 |
| Fruity Smoothies | 2250 × 2812 |
| Rotten Egg | 2000 × 1455 |

The exports were generated with ImageMagick at WebP quality 94 from the original project files and the generated PNG masters. Driven and Mountain Dew reuse their previously reconstructed masters. Solar, Office Space, Cookie Quest, Fruity Smoothies and Rotten Egg exports use the higher-detail originals from the older repository; these exported files are self-contained in this repository and do not require that checkout at runtime.

Shared project cards, game cards and project detail images use Next.js image quality 90 and responsive `sizes`, reducing further compression of the source artwork. This cannot restore missing source detail. Office Space includes intentional depth of field, and several campus virtual tour originals are only about 940 pixels wide. Those rendering/source limitations remain. Moondrip and the generated hero should still be reviewed as reconstructed artwork, particularly fine print and anatomy.

## Validation

- `npm run build`: passed; all 21 static pages generated.
- `npx tsc --noEmit` and `git diff --check`: passed.
- Chromium at 1440 and 390 CSS pixels, both at 2× density: all 15 portfolio images decoded, product/game filters and browser Back restored the correct counts, and the portfolio and homepage had no horizontal overflow. The new hero and its 74% focal point were verified in the built app, and desktop/mobile screenshots were inspected.
- After the production UI clarification, compared the rendered live homepage and portfolio directly with the restarted local production server at 1440 and 390 CSS pixels. Six homepage elements and 70 portfolio elements per viewport had matching text/styles and geometry within one CSS pixel; navigation labels/destinations matched. Live and local product filters and browser Back restored the same counts. No application/image asset failures were observed. The portfolio JSX and its stylesheet/component retain the live composition; only artwork data differs.
- `/games`, `/games/necros-revenge` and `/projects/driven`: the optimizer served the shared images at quality 90.
- Local Vercel Analytics requests return 404 outside Vercel; these were recorded separately from application/image failures.
- With JavaScript disabled, all 15 project entries exist in the server response, but Next's streaming container `S:0` remains hidden. A no-JavaScript browser pass is **not** claimed; that routing/rendering issue was not changed in this image-only update.
- The older static repository has a clean working tree after removing this task's edits.

No source or build result is proof of a live deployment.
