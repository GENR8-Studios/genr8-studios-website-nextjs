# Driven and Mountain Dew image edits

The user requested actual image modifications to address blur, especially in Driven and Mountain Dew. The built-in image generation/editing tool produced these versions from repository originals. Original project artwork and the previous thumbnails remain untouched. These are AI-enhanced interpretations: fine texture and edge detail are reconstructed, not recovered original render data.

## Saved assets

- `assets/img/portfolio/driven-enhanced.png`: 1672 × 941, full native generated PNG.
- `assets/img/portfolio/mountain-dew-enhanced.png`: 1122 × 1402, opaque full native generated PNG.
- `driven-enhanced-960.webp`: smaller high-quality responsive export.
- `mountain-dew-enhanced-640.webp`: smaller lossless responsive export.

The tool did not return the requested larger pixel dimensions; these files retain its actual native dimensions without artificial upscaling. The gallery references the edited assets with width-descriptor srcsets and crop-aware size hints. Existing project-detail pages retain their original artwork. Desktop appearance still needs visual browser review; generated outputs were inspected directly. The hosted `/portfolio` has previously served a separate Next.js implementation, so this repository change alone is not proof of a live deployment.

## Prompts (built-in tool)

### Driven

Edit target: the supplied original Driven blue sneaker advertisement render. Restoration only: produce a crisp high resolution 3840x2160 landscape version of this exact image. Preserve exact composition, sneaker silhouette, shoe geometry, blue/white/cream colors, original thin DR monogram, three white panels, eyelets, laces, background, lighting and shadow placement. Improve fine mesh fabric definition and edge clarity; clean JPEG softness and compression. Do not redesign the shoe, add objects, invent text or change branding. No artistic restyling, no aggressive sharpening halos. The output is a faithful restored portfolio image, not a new advertisement.

Input: `assets/img/Projects/DrivenAd/frame-002.jpg`.

### Mountain Dew, first edit

Edit target: supplied portrait Mountain Dew advertisement artwork. Restore and upscale this exact artwork to a crisp high resolution portrait 2048x2560 image with the same 4:5 aspect ratio. Preserve exact Mtn Dew logo lettering, the registered mark, angular black and white outlines, dark green and red fills, original bright lime green background, logo scale/angle/position and all negative space. Reconstruct only crisp clean existing edges to remove pixelation and JPEG blur. Logo must match original exactly; no new typography, no new brand interpretation, no extra words, objects, texture or effects. Output should be visually identical to the original artwork but sharply rendered for a large high-density portfolio display.

Input: `assets/img/Projects/MountainDewAd/frame-003_slice.jpg`.

### Mountain Dew, background correction (final)

Precise correction to IMAGE 1, the enhanced Mountain Dew portrait artwork: replace transparent background with a fully OPAQUE flat bright lime-green background sampled from IMAGE 2 (original advertisement). Preserve IMAGE 1's sharp Mtn Dew logo exactly, including black outlines and registered mark. Output the complete opaque 4:5 portrait poster, with logo at the same scale and position as original IMAGE 2. No transparency anywhere. No black background. No changes to text or logo geometry. Crisp clean edges at the highest available native resolution.

Inputs: the first edit plus the original Mountain Dew artwork. The first transparent edit was not shipped.
