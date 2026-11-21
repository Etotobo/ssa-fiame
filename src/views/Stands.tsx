import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button, ButtonLink, PageHero, Section, Steps } from "@/components/site/ui";
import { AgendaCmMark } from "@/components/site/ui";
import { COMMON, EXHIBIT, fcfa, SECTORS, standMessage, standOption, STANDS } from "@/site/content";
import { registerLink, SSA, waLink, type Lang } from "@/site/ssa";

/** Two lists, no free field; WhatsApp opens on the visitor's phone with the
 *  request ready to send. Nothing is stored by the site (plan v3.1). */
function StandPicker({ lang }: { lang: Lang }) {
  const [type, setType] = useState("");
  const [sector, setSector] = useState("");
  const stand = STANDS.find((s) => String(s.type) === type);
  const sectorName = SECTORS[Number(sector)]?.[lang];
  const ready = !!stand && sector !== "" && !!sectorName;
  const select =
    "mt-1 block min-h-12 w-full rounded-xl border-2 border-line bg-white px-3 text-base focus:border-brand focus:outline-none";
  return (
    <form
      className="mx-auto max-w-xl rounded-2xl bg-white p-5 shadow-md ring-1 ring-line sm:p-6"
      onSubmit={(e) => {
        e.preventDefault();
        if (!ready) return;
        window.open(
          waLink(SSA.whatsapp.wa, standMessage(stand, sectorName, lang)),
          "_blank",
          "noopener",
        );
      }}
    >
      <label className="block font-semibold text-brand-deep">
        {EXHIBIT.standLabel[lang]}
        <select className={select} value={type} onChange={(e) => setType(e.target.value)} required>
          <option value="" disabled>
            {EXHIBIT.choose[lang]}
          </option>
          {STANDS.map((s) => (
            <option key={s.type} value={s.type}>
              {standOption(s, lang)}
            </option>
          ))}
        </select>
      </label>
      <label className="mt-4 block font-semibold text-brand-deep">
        {EXHIBIT.sectorLabel[lang]}
        <select
          className={select}
          value={sector}
          onChange={(e) => setSector(e.target.value)}
          required
        >
          <option value="" disabled>
            {EXHIBIT.choose[lang]}
          </option>
          {SECTORS.map((s, i) => (
            <option key={s.fr} value={i}>
              {s[lang]}
            </option>
          ))}
        </select>
      </label>
      <Button type="submit" disabled={!ready} className="mt-6 w-full">
        <MessageCircle className="h-5 w-5" aria-hidden /> {EXHIBIT.button[lang]}
      </Button>
      <p className="mt-3 text-center text-sm text-muted">{EXHIBIT.noWhatsapp[lang]}</p>
    </form>
  );
}

export function Stands({ lang }: { lang: Lang }) {
  return (
    <>
      <PageHero title={EXHIBIT.title[lang]} intro={EXHIBIT.intro[lang]} />

      <Section>
        {/* Phones: one card per stand; computers: the table */}
        <ul className="grid gap-3 sm:hidden">
          {STANDS.map((s) => (
            <li
              key={s.type}
              className="flex items-center justify-between rounded-2xl p-4 ring-1 ring-line"
            >
              <div>
                <p className="font-bold text-brand-deep">
                  {EXHIBIT.colStand[lang]} Type {s.type} · {s.size} m²
                </p>
                <p className="text-sm text-muted">{s.included[lang]}</p>
              </div>
              <p className="whitespace-nowrap rounded-full bg-yellow px-3 py-1 font-bold text-brand-deep">
                {fcfa(s.price, lang)}
              </p>
            </li>
          ))}
        </ul>
        <table className="hidden w-full overflow-hidden rounded-2xl text-left ring-1 ring-line sm:table">
          <thead className="bg-brand-deep text-white">
            <tr>
              {[EXHIBIT.colStand, EXHIBIT.colSize, EXHIBIT.colIncluded, EXHIBIT.colPrice].map(
                (c) => (
                  <th key={c.fr} className="px-5 py-3 font-semibold">
                    {c[lang]}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {STANDS.map((s, i) => (
              <tr key={s.type} className={i % 2 ? "bg-brand-soft" : "bg-white"}>
                <td className="px-5 py-3 font-bold text-brand-deep">Type {s.type}</td>
                <td className="px-5 py-3">{s.size} m²</td>
                <td className="px-5 py-3">{s.included[lang]}</td>
                <td className="px-5 py-3 font-bold">{fcfa(s.price, lang)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section tone="soft" title={EXHIBIT.howTitle[lang]}>
        <Steps items={EXHIBIT.how.map((s) => s[lang])} />
        <div className="mt-8">
          <StandPicker lang={lang} />
        </div>
      </Section>

      <Section title={EXHIBIT.visitTitle[lang]} intro={EXHIBIT.visit[lang]}>
        <div className="flex flex-col items-center gap-3">
          <ButtonLink href={registerLink("exposants")} look="outline">
            <AgendaCmMark className="h-5 w-5" /> {COMMON.registerVisitor[lang]}
          </ButtonLink>
          <p className="text-sm text-muted">{EXHIBIT.handledBy[lang]}</p>
        </div>
      </Section>
    </>
  );
}
