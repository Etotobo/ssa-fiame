// The SSA site's settings (plan v3.1 § 6): colours, contacts, links. In v1
// they live here, in the code; SSA asks Accept IT to change them. Every
// later organiser site gets a file like this one.

export type Lang = "fr" | "en";

export const SSA = {
  name: "Sanitation Safety Association",
  short: "SSA",
  domain: "ssa-fiame.cm",
  // Colours read on SSA's round logo (green) and the FIAME 2027 posters
  // (deep green, yellow, orange), 21/11. No colour chart from SSA yet.
  colors: {
    brand: "#12801f", // logo green: buttons, links, headings
    brandDeep: "#0b3f18", // poster green: dark bands, footer
    brandSoft: "#e8f4e6", // light band behind sections
    yellow: "#f5c518", // poster yellow: highlights, never text on white
    orange: "#e8731e", // poster orange: small accents only
  },
  // Numbers and addresses confirmed by SSA on 20/10 (texts v1.2).
  phone: { display: "+237 657 099 795", tel: "+237657099795" },
  whatsapp: { display: "+237 621 034 348", wa: "237621034348" },
  emails: ["sanitationsafetyinfos@gmail.com", "lafame2024@gmail.com"],
  fairEmail: "lafame2024@gmail.com",
  instagram: { handle: "@fiame_ssa", url: "https://www.instagram.com/fiame_ssa/" },
  // SSA's WhatsApp Business catalogue (the magazine is sold there; the PDF is
  // never on the site).
  catalogue: "https://wa.me/c/102736238506012",
  // Visitors register on agenda.cm, on the event's own page (v1, 21/11).
  fiameEvent:
    "https://agenda.cm/events/fiame-2027-foire-internationale-aux-metiers-de-l-environnement-no91",
  // Founder 21/11. Facebook: the questionnaire's share link
  // (facebook.com/share/1CBFxSPYdT) leads to this page, linked directly.
  facebookUrl: "https://www.facebook.com/sanitationsafety",
  // SSA's link of 21/11 (« métiers » with é, written encoded), replacing
  // the questionnaire's one of 19/10 (« metiers »)
  linkedinUrl:
    "https://www.linkedin.com/in/foire-internationale-aux-m%C3%A9tiers-de-l-environnemen-fiame-1a4567416/",
  // The venue on a map: null = no « Ouvrir dans Maps » at all, only the
  // address in text (founder 21/11). When SSA sends its location, put the
  // link here and the button comes back on FIAME 2027 and Contact.
  mapsUrl: null as string | null,
  // YouTube videos (founder 21/11): a still and a link, no embedded player
  // (page weight). Titles as on YouTube.
  videos: [
    {
      id: "CLvPZ_TBLeQ",
      title:
        "Moments d'étirements avant le début de la marche sportive écologique de ce 6 juin 2026 | Foire aux Métiers de l'Environnement FAME",
    },
    {
      id: "aEz5vT0S_fc",
      title: "Merci au top management de Access Bank | Foire aux Métiers de l'Environnement FAME",
    },
  ],
} as const;

/** wa.me link with a pre-filled message. */
export function waLink(number: string, text: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/** mailto: link with a pre-filled subject. */
export function mailLink(address: string, subject: string): string {
  return `mailto:${address}?subject=${encodeURIComponent(subject)}`;
}

/**
 * Every link to Agenda CM goes to the FIAME 2027 page only (never another
 * event, founder 21/11), tagged utm_source=ssa-fiame, utm_medium=site,
 * utm_campaign=fiame2027 and one utm_content per place.
 */
export type AgendaCmPlace = "fiame" | "exposants" | "rappel" | "pied";
export function registerLink(place: AgendaCmPlace): string {
  return `${SSA.fiameEvent}?utm_source=ssa-fiame&utm_medium=site&utm_campaign=fiame2027&utm_content=${place}`;
}
