"use client";

import { useEffect, useRef, useState } from "react";

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  label: string;
  href: string;
  image: string;
  width: number;
  height: number;
  srcSet?: string;
  sizes?: string;
  portrait?: boolean;
  artwork?: boolean;
};

export function Arrow() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg>;
}

const categories = [
  ["all", "All work"], ["render", "3D Renders"], ["ad", "Advertisements"],
  ["product", "Product Mockups"], ["ui", "UI Designs"], ["game", "Games"],
];
const validCategory = (value: string | null) => categories.some(([key]) => key === value) ? value! : "all";

export default function PortfolioGallery({ items }: { items: PortfolioItem[] }) {
  const [category, setCategory] = useState("all");
  const [ready, setReady] = useState(false);
  const grid = useRef<HTMLDivElement>(null);
  const previousRects = useRef(new Map<string, DOMRect>());
  const shouldAnimate = useRef(false);
  const animations = useRef<Animation[]>([]);
  const visible = items.filter(item => category === "all" || item.category === category);

  useEffect(() => {
    const restore = () => {
      shouldAnimate.current = false;
      setCategory(validCategory(new URL(window.location.href).searchParams.get("category")));
    };
    const cancel = () => { animations.current.forEach(animation => animation.cancel()); animations.current = []; };
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    restore();
    setReady(true);
    window.addEventListener("popstate", restore);
    reducedMotion.addEventListener("change", cancel);
    return () => {
      window.removeEventListener("popstate", restore);
      reducedMotion.removeEventListener("change", cancel);
      cancel();
    };
  }, []);

  useEffect(() => {
    animations.current.forEach(animation => animation.cancel());
    animations.current = [];
    if (!shouldAnimate.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    shouldAnimate.current = false;
    grid.current?.querySelectorAll<HTMLElement>(".project:not([hidden])").forEach((element, index) => {
      if (!element.animate) return;
      const old = previousRects.current.get(element.dataset.id!);
      const rect = element.getBoundingClientRect();
      animations.current.push(element.animate([
        { transform: old ? `translate(${old.left - rect.left}px, ${old.top - rect.top}px)` : "translateY(14px)", opacity: old ? 1 : 0 },
        { transform: "translate(0, 0)", opacity: 1 },
      ], { duration: 240, easing: "cubic-bezier(0.23, 1, 0.32, 1)", fill: "backwards", delay: old ? 0 : Math.min(index, 3) * 35 }));
    });
  }, [category]);

  function filter(next: string, pointer: boolean) {
    if (next === category) return;
    animations.current.forEach(animation => animation.cancel());
    previousRects.current = new Map(Array.from(grid.current?.querySelectorAll<HTMLElement>(".project:not([hidden])") ?? []).map(element => [element.dataset.id!, element.getBoundingClientRect()]));
    shouldAnimate.current = pointer;
    const url = new URL(window.location.href);
    if (next === "all") url.searchParams.delete("category"); else url.searchParams.set("category", next);
    window.history.pushState(null, "", url);
    setCategory(next);
  }

  return <section id="work" className="work" aria-label="Portfolio projects" tabIndex={-1}>
    <div className="work-toolbar">
      <div className="filters" role="group" aria-label="Filter projects" hidden={!ready}>
        {categories.map(([key, label]) => <button key={key} type="button" aria-pressed={category === key} onClick={event => filter(key, event.detail !== 0)}>{label}<span>{String(key === "all" ? items.length : items.filter(item => item.category === key).length).padStart(2, "0")}</span></button>)}
      </div>
      <p className="work-count" role="status" aria-live="polite" aria-atomic="true">{visible.length} projects{category !== "all" ? ` · ${categories.find(([key]) => key === category)?.[1]}` : ""}</p>
    </div>
    <div ref={grid} className={`project-grid${category !== "all" ? " is-filtered" : ""}`}>
      {items.map((item, index) => <article key={item.id} data-id={item.id} className={`project${item.portrait ? " is-portrait" : ""}`} hidden={category !== "all" && item.category !== category}>
        <a className="project-link" href={item.href}>
          <div className="project-image">
            {/* Serve source artwork without a second lossy Next.js conversion. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} srcSet={item.srcSet} sizes={item.sizes} width={item.width} height={item.height} alt={`${item.title} — ${item.label}`} loading={index < 2 ? "eager" : "lazy"} decoding="async" />
            <span className="project-action">{item.artwork ? "View artwork" : "View project"}<Arrow /></span>
          </div>
          <div className="project-caption"><div><p>{item.label}</p><h2>{item.title}</h2></div><span className="project-arrow"><Arrow /></span></div>
        </a>
      </article>)}
    </div>
    <noscript><p className="fallback-note">All projects are shown. Enable JavaScript to filter by category.</p></noscript>
  </section>;
}
