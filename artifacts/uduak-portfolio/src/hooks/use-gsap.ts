import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const prefersReduced = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Page-level animations. Elements:
 *  [data-intro]  staggered entrance on load
 *  [data-reveal] fade/slide when scrolled into view
 *  [data-type]   typed-out terminal text
 */
export function usePageAnimations<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useLayoutEffect(() => {
    const root = ref.current;
    if (!root || prefersReduced()) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-intro]", { y: 22, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.08, delay: 0.05 });
      gsap.utils.toArray<HTMLElement>("[data-type]").forEach((el) => {
        const text = el.textContent ?? "";
        const obj = { n: 0 };
        el.textContent = "";
        gsap.to(obj, {
          n: text.length, duration: Math.min(1.4, text.length * 0.035), ease: "none", delay: 0.3,
          onUpdate: () => { el.textContent = text.slice(0, Math.round(obj.n)); },
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 36, opacity: 0, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-line]").forEach((el) => {
        gsap.from(el, {
          scaleX: 0, transformOrigin: "left center", duration: 1.1, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);
  return ref;
}

export function nudge(el: HTMLElement, x: number) {
  if (prefersReduced()) return;
  gsap.to(el, { x, duration: 0.35, ease: "power2.out" });
}
