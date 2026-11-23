import { describe, expect, it } from "vitest";
import { langOf, pageAt, pagePath, NAV_ORDER } from "./pages";
import {
  ALL_STANDS,
  BOOK,
  COMMON,
  EXHIBIT,
  FIAME,
  MAGAZINE,
  PACK_ROWS,
  fcfa,
  PARTNER_LIST,
  partnerMessage,
  REMINDER,
  standMessage,
  STANDS,
  SECTORS,
} from "./content";
import { registerLink, waLink, SSA } from "./ssa";
import { frTypo } from "./typo";

describe("SSA site settings", () => {
  it("page addresses: French at the root, English under /en, both ways", () => {
    expect(pagePath("home", "fr")).toBe("/");
    expect(pagePath("home", "en")).toBe("/en");
    expect(pagePath("stands", "fr")).toBe("/exposants");
    expect(pagePath("stands", "en")).toBe("/en/exhibitors");
    for (const k of NAV_ORDER) {
      if (k === "home") continue;
      for (const l of ["fr", "en"] as const) {
        const slug: string = pagePath(k, l).split("/").pop()!;
        expect(pageAt(slug, l)).toBe(k);
      }
    }
    expect(pageAt("nope", "fr")).toBeNull();
    expect(langOf("/en/about")).toBe("en");
    expect(langOf("/english")).toBe("fr");
  });

  it("stands: the 28/10 poster, Type 3 ready but hidden; message as in the texts", () => {
    expect(STANDS.map((x) => x.type)).toEqual([1, 2, 4, 5, 6]);
    // Type 3 (SSA 21/11) between 2 and 4, hidden while its figures are missing
    expect(ALL_STANDS.map((x) => x.type)).toEqual([1, 2, 3, 4, 5, 6]);
    for (const s of ALL_STANDS) {
      if (s.price === 0 || s.size === 0) expect(s.hidden).toBe(true);
    }
    for (const s of STANDS) expect(s.price > 0 && s.size > 0 && s.included.fr !== "").toBe(true);
    expect(fcfa(35000, "en")).toBe("35,000 FCFA");
    expect(fcfa(35000, "fr")).toBe("35 000 FCFA");
    const s = STANDS.find((x) => x.type === 4)!;
    expect(standMessage(s, SECTORS[1]!.fr, "fr")).toBe(
      "Bonjour, je souhaite réserver un stand pour la FIAME 2027. Type de stand : Type 4 (6 m², 50 000 FCFA). Secteur : Énergie. Mon entreprise ou organisation : ",
    );
    expect(standMessage(s, SECTORS[1]!.en, "en")).toMatch(
      /^Hello, I would like to book a stand at FIAME 2027\. Stand type: Type 4 \(6 m², 50,000 FCFA\)\. Sector: Energy\./,
    );
  });

  it("WhatsApp, catalogue and registration links; no map link until SSA sends one", () => {
    expect(waLink(SSA.whatsapp.wa, partnerMessage("Or", "fr"))).toMatch(
      /^https:\/\/wa\.me\/237621034348\?text=Bonjour%2C%20je%20souhaite%20devenir%20partenaire/,
    );
    expect(SSA.catalogue).toBe("https://wa.me/c/102736238506012");
    expect(registerLink("fiame")).toMatch(/^https:\/\/agenda\.cm\/events\/fiame-2027-/);
    // every Agenda CM link: the FIAME page only, with the campaign (21/11)
    for (const place of ["fiame", "exposants", "rappel", "pied"] as const) {
      const u = new URL(registerLink(place));
      expect(`${u.origin}${u.pathname}`).toBe(SSA.fiameEvent);
      expect(Object.fromEntries(u.searchParams)).toEqual({
        utm_source: "ssa-fiame",
        utm_medium: "site",
        utm_campaign: "fiame2027",
        utm_content: place,
      });
    }
    expect(SSA.mapsUrl).toBeNull();
    // SSA's LinkedIn link of 21/11, no tracking parameter
    expect(SSA.linkedinUrl).toBe(
      "https://www.linkedin.com/in/foire-internationale-aux-m%C3%A9tiers-de-l-environnemen-fiame-1a4567416/",
    );
    expect(decodeURI(SSA.linkedinUrl)).toContain("aux-métiers-de-l-environnemen");
  });

  it("Agenda CM in the texts (21/11), never « agenda.cm »; its partner line", () => {
    const texts = [
      COMMON.registerVisitor,
      COMMON.footerRegistration,
      EXHIBIT.handledBy,
      REMINDER.title,
      REMINDER.body,
      REMINDER.button,
    ];
    for (const t of texts) {
      for (const l of ["fr", "en"] as const) expect(t[l]).not.toMatch(/agenda\.cm/i);
    }
    expect(COMMON.registerVisitor.fr).toBe("S'inscrire gratuitement");
    expect(COMMON.registerVisitor.en).toBe("Register for free");
    const ag = PARTNER_LIST.find((p) => p.logo === null)!;
    expect(ag.name.fr).toBe("Agenda\u00a0CM");
    expect(ag.description?.fr).toBe(
      frTypo(
        "Partenaire digital : inscriptions des visiteurs et diffusion du FIAME auprès des professionnels au Cameroun",
      ),
    );
    expect(ag.description?.en).toBe(
      "Digital partner: visitor registration and promotion of FIAME to professionals in Cameroon",
    );
  });

  it("SSA's corrections of 21/11 (FR and EN)", () => {
    const nb = (x: string) => x.replace(/[\u00a0\u202f]/g, " ");
    expect(nb(FIAME.venue.fr)).toBe(
      "Esplanade du complexe sportif du CIJ Douala, derrière la mairie de Douala 3ᵉ",
    );
    expect(FIAME.venue.en).not.toMatch(/Logbaba/);
    expect(nb(FIAME.subtitle.fr)).toBe(
      "4ᵉ édition de la Foire Internationale aux Métiers de l'Environnement",
    );
    const logo = PACK_ROWS.find((r) => r.label.fr === "Logo")!;
    expect(logo.values.platine.fr).toBe("Première position sur tous les supports");
    expect(logo.values.platine.en).toBe("Top position on all materials");
    expect(nb(EXHIBIT.noWhatsapp.fr)).toBe(
      "Pas de WhatsApp ? Appelez-nous au +237 657 099 795 ou au +237 621 034 348, ou écrivez à lafame2024@gmail.com.",
    );
    // the three strands of the « Programme global » poster, then the days
    expect(FIAME.strands.map((s) => s.title.fr)).toEqual([
      "FIAME Environnement",
      "FIAME Santé",
      "Meilleur projet écologique de la FIAME",
    ]);
    expect(FIAME.highlights).toHaveLength(6);
    expect(nb(FIAME.daysSoon.fr)).toBe("Programme détaillé jour par jour bientôt disponible");
  });

  it("magazine extracts in page order; the book stays hidden until SSA agrees", () => {
    expect(MAGAZINE.extracts.map((e) => e.page)).toEqual([6, 7, 33, 37]);
    expect(SSA.showBook).toBe(false);
    expect(waLink(SSA.whatsapp.wa, BOOK.message.fr)).toMatch(
      /^https:\/\/wa\.me\/237621034348\?text=Bonjour%2C%20je%20souhaite%20%C3%AAtre%20pr%C3%A9venu/,
    );
  });
});
