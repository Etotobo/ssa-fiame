import type { Lang } from "./ssa";

// The 7 pages and their address in each language. French at the root,
// English under /en.
export type PageKey = "home" | "about" | "fiame" | "stands" | "magazine" | "partners" | "contact";

export const PAGES: Record<PageKey, Record<Lang, string>> = {
  home: { fr: "", en: "" },
  about: { fr: "a-propos", en: "about" },
  fiame: { fr: "fiame-2027", en: "fiame-2027" },
  stands: { fr: "exposants", en: "exhibitors" },
  magazine: { fr: "magazine", en: "magazine" },
  partners: { fr: "partenaires", en: "partners" },
  contact: { fr: "contact", en: "contact" },
};

export const NAV_ORDER: PageKey[] = [
  "home",
  "about",
  "fiame",
  "stands",
  "magazine",
  "partners",
  "contact",
];

export const NAV_LABEL: Record<PageKey, Record<Lang, string>> = {
  home: { fr: "Accueil", en: "Home" },
  about: { fr: "À propos", en: "About" },
  fiame: { fr: "FIAME 2027", en: "FIAME 2027" },
  stands: { fr: "Exposants", en: "Exhibitors" },
  magazine: { fr: "Magazine", en: "Magazine" },
  partners: { fr: "Partenaires", en: "Partners" },
  contact: { fr: "Contact", en: "Contact" },
};

/** The path of a page in a language: « / », « /a-propos », « /en », « /en/about ». */
export function pagePath(key: PageKey, lang: Lang): string {
  const slug = PAGES[key][lang];
  if (lang === "fr") return `/${slug}`;
  return slug ? `/en/${slug}` : "/en";
}

/** The page shown at a slug, or null (404). */
export function pageAt(slug: string, lang: Lang): PageKey | null {
  const key = (Object.keys(PAGES) as PageKey[]).find((k) => PAGES[k][lang] === slug);
  return key ?? null;
}

/** The language of a path. */
export function langOf(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";
}
