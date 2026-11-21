import { describe, expect, it } from "vitest";
import { langOf, pageAt, pagePath, NAV_ORDER } from "./pages";
import {
  COMMON,
  EXHIBIT,
  fcfa,
  PARTNER_LIST,
  partnerMessage,
  REMINDER,
  standMessage,
  STANDS,
  SECTORS,
} from "./content";
import { registerLink, waLink, SSA } from "./ssa";

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

  it("stands: the 28/10 poster (no Type 3), message as in the texts", () => {
    expect(STANDS.map((x) => x.type)).toEqual([1, 2, 4, 5, 6]);
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
    expect(COMMON.registerVisitor.fr).toBe("Inscription gratuite via Agenda CM");
    expect(COMMON.registerVisitor.en).toBe("Free registration via Agenda CM");
    const ag = PARTNER_LIST.find((p) => p.name.fr === "Agenda CM")!;
    expect(ag.description?.fr).toBe(
      "Partenaire digital : inscriptions des visiteurs et diffusion du FIAME auprès des professionnels au Cameroun",
    );
    expect(ag.description?.en).toBe(
      "Digital partner: visitor registration and promotion of FIAME to professionals in Cameroon",
    );
  });
});
