import { META } from "./content";
import { pagePath, type PageKey } from "./pages";
import { SSA, type Lang } from "./ssa";

/** title, description, og:*, hreflang alternates of one page. */
export function pageHead(key: PageKey, lang: Lang) {
  const m = META[key]!;
  const url = (l: Lang) => `https://${SSA.domain}${pagePath(key, l)}`;
  return {
    meta: [
      { title: m.title[lang] },
      { name: "description", content: m.description[lang] },
      { property: "og:title", content: m.title[lang] },
      { property: "og:description", content: m.description[lang] },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: lang === "fr" ? "fr_FR" : "en_GB" },
      { property: "og:image", content: `https://${SSA.domain}/sites/ssa/fiame-affiche.webp` },
    ],
    links: [
      { rel: "canonical", href: url(lang) },
      { rel: "alternate", hrefLang: "fr", href: url("fr") },
      { rel: "alternate", hrefLang: "en", href: url("en") },
      { rel: "alternate", hrefLang: "x-default", href: url("fr") },
    ],
  };
}
