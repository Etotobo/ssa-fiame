import { describe, expect, it } from "vitest";
import { errorLang, renderErrorPage, requestLang } from "./error-page";

describe("server error page", () => {
  it("French by default, English under /en", () => {
    expect(errorLang("/")).toBe("fr");
    expect(errorLang("/contact")).toBe("fr");
    expect(errorLang("/en")).toBe("en");
    expect(errorLang("/en/about")).toBe("en");
    expect(errorLang("/english")).toBe("fr");
    expect(requestLang(new Request("https://ssa-fiame.cm/en/partners"))).toBe("en");
    expect(requestLang(null)).toBe("fr");
  });
  it("texts and home link in the page's language", () => {
    const fr = renderErrorPage("fr");
    expect(fr).toContain('<html lang="fr">');
    expect(fr).toContain("Cette page n'a pas pu s'afficher");
    expect(fr).toContain("Réessayer");
    expect(fr).toContain('href="/"');
    expect(fr).not.toContain("didn't load");
    const en = renderErrorPage("en");
    expect(en).toContain('<html lang="en">');
    expect(en).toContain("This page didn't load");
    expect(en).toContain('href="/en"');
  });
});
