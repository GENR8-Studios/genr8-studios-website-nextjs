import type { Metadata, Viewport } from "next";
import { Karla, Roboto } from "next/font/google";
import { projects } from "@/constants/portfolio";
import PortfolioGallery, { Arrow, type PortfolioItem } from "@/components/portfolio/PortfolioGallery";
import "./portfolio.css";

const karla = Karla({ subsets: ["latin"], variable: "--font-karla", display: "swap" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-roboto", display: "swap" });
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore GENR8 Studios’ work in architectural visualization, 3D advertising, product mockups, games and digital design.",
  alternates: { canonical: "https://genr8studios.com/portfolio" },
};
export const viewport: Viewport = { themeColor: "#101010", width: "device-width", initialScale: 1, maximumScale: 5 };

const projectItems: PortfolioItem[] = projects.map(project => ({
  id: String(project.id), title: project.title,
  category: project.category === "game" ? "game" : project.category === "Advertisement" ? "ad" : "render",
  label: project.category === "game" ? "Game Development" : project.category === "Advertisement" ? "Advertisements" : "3D Renders",
  href: project.url.internal, image: project.images.feature.src,
  width: project.images.feature.width, height: project.images.feature.height,
}));
const driven = projectItems.find(item => item.id === "5")!;
Object.assign(driven, { image: "/portfolio/driven-enhanced.png", width: 1672, height: 941,
  srcSet: "/portfolio/driven-enhanced-960.webp 960w, /portfolio/driven-enhanced.png 1672w",
  sizes: "(max-width: 700px) calc((100vw - 40px) * 1.334), (max-width: 1050px) calc((100vw - 92px) * 0.742), (max-width: 1552px) calc((100vw - 140px) * 0.742), 1047px" });
const mountain = projectItems.find(item => item.id === "6")!;
Object.assign(mountain, { image: "/portfolio/mountain-dew-enhanced.png", width: 1122, height: 1402, portrait: true,
  srcSet: "/portfolio/mountain-dew-enhanced-640.webp 640w, /portfolio/mountain-dew-enhanced.png 1122w",
  sizes: "(max-width: 700px) calc(100vw - 40px), (max-width: 1050px) calc((100vw - 92px) * 0.556), (max-width: 1552px) calc((100vw - 140px) * 0.556), 785px" });
const artwork = (id: string, title: string, category: string, label: string, width: number, height: number, portrait = false): PortfolioItem => ({
  id, title, category, label, width, height, portrait, image: `/portfolio/${id}.webp`, href: `/portfolio/${id}.webp`, artwork: true,
});
const orderedItems: PortfolioItem[] = [
  projectItems.find(item => item.id === "2")!, driven, mountain,
  artwork("moondrip", "Moondrip", "product", "Product Mockups", 488, 610, true),
  projectItems.find(item => item.id === "7")!,
  artwork("cookie-quest", "Cookie Quest", "ui", "UI Designs", 1400, 789),
  artwork("fruity-smoothies", "Fruity Smoothies", "product", "Product Mockups", 1120, 1400, true),
  artwork("rotten-egg", "Rotten Egg", "ui", "UI Designs", 1400, 1019),
  ...projectItems.filter(item => !["2", "5", "6", "7"].includes(item.id)),
];


// Preserve production composition; change only the artwork and its delivery.
const nativePreviews: Record<string, { name: string; width: number; height: number; portrait?: boolean }> = {
  "2": { name: "solar-apartment", width: 1920, height: 1080 },
  "5": { name: "driven", width: 1672, height: 941 },
  "6": { name: "mountain-dew", width: 1122, height: 1402, portrait: true },
  moondrip: { name: "moondrip", width: 1122, height: 1402, portrait: true },
  "7": { name: "office-space", width: 1920, height: 1080 },
  "cookie-quest": { name: "cookie-quest", width: 1775, height: 1000 },
  "fruity-smoothies": { name: "fruity-smoothies", width: 2250, height: 2812, portrait: true },
  "rotten-egg": { name: "rotten-egg", width: 2000, height: 1455 },
};
const items: PortfolioItem[] = orderedItems.map(item => {
  const preview = nativePreviews[item.id];
  if (!preview) return item;
  const { name, width, height, portrait = false } = preview;
  const image = `/portfolio/${name}-v2.webp`;
  const widths = [640, 960, 1400].filter(size => size < width);
  // Filtering may move an item to the wider column. Account for object-fit's
  // crop when choosing enough source pixels for either column.
  const crop = Math.max(1, width / height / (portrait ? 4 / 5 : 4 / 3));
  const column = 5 / 9;
  const calc = (offset: number) => `calc(${(100 * column * crop).toFixed(4)}vw - ${(offset * column * crop).toFixed(4)}px)`;
  return {
    ...item, image, width, height, portrait,
    srcSet: [...widths.map(size => `/portfolio/${name}-v2-${size}.webp ${size}w`), `${image} ${width}w`].join(", "),
    sizes: `(max-width: 700px) calc(${(100 * crop).toFixed(4)}vw - ${(40 * crop).toFixed(4)}px), (max-width: 1050px) ${calc(92)}, (max-width: 1552px) ${calc(140)}, ${Math.ceil(1412 * column * crop)}px`,
    href: item.artwork ? image : item.href,
  };
});

function Brand() { return <a className="brand" href="/" aria-label="GENR8 Studios home"><img src="/portfolio/logo.png" width="160" height="60" alt="GENR8 Studios" /></a>; }

export default function Portfolio() {
  return <div className={`portfolio-page ${karla.variable} ${roboto.variable}`}>
    <a className="skip-link" href="#work">Skip to projects</a>
    <header className="portfolio-header shell"><Brand /><nav aria-label="Main navigation"><a href="/games">Games</a><a href="/portfolio" aria-current="page">Portfolio</a><a href="/about">About</a><a href="/contact">Let’s talk <Arrow /></a></nav></header>
    <main className="shell">
      <section className="portfolio-intro" aria-labelledby="portfolio-title">
        <h1 id="portfolio-title">Ideas made<br /><span>visible.</span><span className="title-dot" aria-hidden="true" /></h1>
        <div className="intro-copy"><p>A selection of our work in 3D,<br />advertising and digital design.</p><a href="#work">Explore the work <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M12 4v16m-6-6 6 6 6-6" /></svg></a></div>
      </section>
      <PortfolioGallery items={items} />
      <section className="contact-strip" aria-labelledby="contact-title"><h2 id="contact-title">Have something<br />in mind?</h2><a href="/contact">Let’s bring it to life <Arrow /></a></section>
    </main>
    <footer className="portfolio-footer shell">
      <div className="footer-top"><Brand /><p>We support programs that create advancement opportunities for people.</p><a href="mailto:contact@genr8studios.com">contact@genr8studios.com</a></div>
      <div className="footer-bottom"><p>© {new Date().getFullYear()} GENR8 Studios</p><nav aria-label="Social links"><a href="https://www.linkedin.com/company/genr8-studios" target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a><a href="https://www.instagram.com/genr8_studios" target="_blank" rel="noopener noreferrer">Instagram <Arrow /></a></nav><a href="tel:+18768018972">+1 876 801 8972</a></div>
      <nav className="collection-links" aria-label="Portfolio collections"><a href="/portfolio?category=render">3D Renders</a><a href="/portfolio?category=ad">Advertisements</a><a href="/portfolio?category=game">Games</a><a href="/portfolio?category=product">Product Mockups</a><a href="/portfolio?category=ui">UI Designs</a></nav>
    </footer>
  </div>;
}
