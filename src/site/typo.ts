// French and English typography for every text of the site (founder 21/11),
// applied once where the texts are written (content.ts t()), not by hand:
// non-breaking spaces so a number never leaves its unit, a date never
// splits, a phone number stays on one line, and French « ; ! ? » » never
// start a line. Only existing spaces are changed; nothing is added.
const NBSP = " "; // before « : », inside dates, number + unit
const NNBSP = " "; // thin: before ; ! ? », after «, thousands

const FR_MONTHS =
  "janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre";
const EN_MONTHS =
  "January|February|March|April|May|June|July|August|September|October|November|December";

function common(s: string): string {
  return (
    s
      // phone numbers: normal-width non-breaking spaces (+237 657 099 795)
      .replace(
        /(\+\d{3}|\b\d{3})((?: \d{3}){2,})\b/g,
        (_m, a: string, b: string) => a + b.replace(/ /g, NBSP),
      )
      // thousands: thin non-breaking spaces (75 000, 5 000 000)
      .replace(/(\d) (?=\d{3}(?!\d))/g, `$1${NNBSP}`)
      // our name never splits
      .replace(/Agenda CM/g, `Agenda${NBSP}CM`)
      // a dash never starts a line
      .replace(/ ([–—|]) /g, `${NBSP}$1 `)
  );
}

export function frTypo(s: string): string {
  return (
    common(s)
      .replace(/ ([;!?»])/g, `${NNBSP}$1`)
      .replace(/« /g, `«${NNBSP}`)
      .replace(/ :/g, `${NBSP}:`)
      .replace(/(\d) (h|min|m²|m2|km|FCFA|%|ans|jours?)(?=$|[\s.,;:!?)·])/g, `$1${NBSP}$2`)
      .replace(/(\d)\u00a0h (\d{2})/g, `$1${NBSP}h${NBSP}$2`)
      .replace(new RegExp(`(\\d{1,2}|1er) (${FR_MONTHS})`, "g"), `$1${NBSP}$2`)
      .replace(new RegExp(`(${FR_MONTHS}) (\\d{4})`, "g"), `$1${NBSP}$2`)
      .replace(/(\d+(?:ᵉ|er|re)) (?=\S)/g, `$1${NBSP}`)
      // « Mairie de Douala 3ᵉ »: the ordinal stays with the word before it
      .replace(/(\S) (\d+ᵉ)(?=$|[\s,.;:)])/g, `$1${NBSP}$2`)
      .replace(/\b(n°|Jour|Type|ODD|Stand) (\d)/g, `$1${NBSP}$2`)
  );
}

export function enTypo(s: string): string {
  return common(s)
    .replace(/(\d) (am|pm|m²|m2|km|FCFA|%)(?=$|[\s.,;:!?)·])/g, `$1${NBSP}$2`)
    .replace(new RegExp(`(\\d{1,2}) (${EN_MONTHS})`, "g"), `$1${NBSP}$2`)
    .replace(new RegExp(`(${EN_MONTHS}) (\\d{4})`, "g"), `$1${NBSP}$2`)
    .replace(/\b(No\.|Day|Type|SDG|Stand) (\d)/g, `$1${NBSP}$2`);
}

/** The typography of one language. */
export const typo = (lang: "fr" | "en", s: string) => (lang === "fr" ? frTypo(s) : enTypo(s));
