import { useEffect } from "react";

function setMeta(attr: "name" | "property", key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const full = `${title} — Uduak Essien`;
    document.title = full;
    setMeta("name", "description", description);
    setMeta("property", "og:title", full);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", window.location.href);
    setMeta("name", "twitter:title", full);
    setMeta("name", "twitter:description", description);
  }, [title, description]);
}
