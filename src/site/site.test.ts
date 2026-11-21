import { describe, expect, it } from "vitest";
import { langOf, pageAt, pagePath, NAV_ORDER } from "./pages";
import { fcfa, partnerMessage, standMessage, STANDS, SECTORS } from "./content";
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
    expect(registerLink("fiame")).toMatch(
      /utm_source=ssa-fiame\.cm&utm_medium=site&utm_content=fiame$/,
    );
    expect(SSA.mapsUrl).toBeNull();
    // SSA's LinkedIn link of 21/11, no tracking parameter
    expect(SSA.linkedinUrl).toBe(
      "https://www.linkedin.com/in/foire-internationale-aux-m%C3%A9tiers-de-l-environnemen-fiame-1a4567416/",
    );
    expect(decodeURI(SSA.linkedinUrl)).toContain("aux-métiers-de-l-environnemen");
  });
});
