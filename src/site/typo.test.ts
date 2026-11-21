import { describe, expect, it } from "vitest";
import { enTypo, frTypo } from "./typo";

const N = " "; // non-breaking space
const T = " "; // thin non-breaking space

describe("typography (founder 21/11)", () => {
  it("French: punctuation, quotes, units, dates, ordinals, phones, thousands", () => {
    expect(frTypo("Pourquoi la FIAME ?")).toBe(`Pourquoi la FIAME${T}?`);
    expect(frTypo("Objectif : promouvoir")).toBe(`Objectif${N}: promouvoir`);
    expect(frTypo("Touchez « Réserver sur WhatsApp » : votre")).toBe(
      `Touchez «${T}Réserver sur WhatsApp${T}»${N}: votre`,
    );
    expect(frTypo("de 8 h à 18 h")).toBe(`de 8${N}h à 18${N}h`);
    expect(frTypo("de 7 h 30 à 20 h")).toBe(`de 7${N}h${N}30 à 20${N}h`);
    expect(frTypo("Stand de 9 m², 75 000 FCFA")).toBe(`Stand de 9${N}m², 75${T}000${N}FCFA`);
    expect(frTypo("5 000 000 FCFA")).toBe(`5${T}000${T}000${N}FCFA`);
    expect(frTypo("au plus tard le 10 mai 2027.")).toBe(`au plus tard le 10${N}mai${N}2027.`);
    expect(frTypo("du 1er au 5 juin 2027")).toBe(`du 1er${N}au 5${N}juin${N}2027`);
    expect(frTypo("4ᵉ Foire, Mairie de Douala 3ᵉ")).toBe(`4ᵉ${N}Foire, Mairie de Douala${N}3ᵉ`);
    expect(frTypo("Appelez le +237 657 099 795.")).toBe(`Appelez le +237${N}657${N}099${N}795.`);
    expect(frTypo("FIAME Magazine n° 1 ; ODD 4 ; Agenda CM")).toBe(
      `FIAME Magazine n°${N}1${T}; ODD${N}4${T}; Agenda${N}CM`,
    );
    expect(frTypo("FIAME 2027 – Douala")).toBe(`FIAME 2027${N}– Douala`);
  });
  it("English: units, dates, phones, numbering; no French spaces before ? :", () => {
    expect(enTypo("Why FIAME?")).toBe("Why FIAME?");
    expect(enTypo("8 am to 6 pm")).toBe(`8${N}am to 6${N}pm`);
    expect(enTypo("by 10 May 2027.")).toBe(`by 10${N}May${N}2027.`);
    expect(enTypo("FIAME Magazine No. 1, Day 2, SDG 17")).toBe(
      `FIAME Magazine No.${N}1, Day${N}2, SDG${N}17`,
    );
    expect(enTypo("Call us on +237 657 099 795")).toBe(`Call us on +237${N}657${N}099${N}795`);
  });
  it("leaves e-mail addresses, URLs and plain text alone", () => {
    expect(frTypo("écrivez à lafame2024@gmail.com.")).toBe("écrivez à lafame2024@gmail.com.");
    expect(frTypo("https://wa.me/c/102736238506012")).toBe("https://wa.me/c/102736238506012");
  });
});
