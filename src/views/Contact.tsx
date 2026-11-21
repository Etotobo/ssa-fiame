import { Clock, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ButtonLink, PageHero, Section } from "@/components/site/ui";
import { CONTACT, FIAME } from "@/site/content";
import { mailLink, SSA, waLink, type Lang } from "@/site/ssa";

export function Contact({ lang }: { lang: Lang }) {
  const row = "flex gap-4 rounded-2xl p-5 ring-1 ring-line";
  const label = "text-sm font-bold uppercase tracking-wide text-brand";
  return (
    <>
      <PageHero title={CONTACT.title[lang]} intro={CONTACT.intro[lang]} />

      <Section>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <ButtonLink
            href={waLink(SSA.whatsapp.wa, CONTACT.waMessage[lang])}
            className="w-full max-w-xs sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" aria-hidden /> {CONTACT.waButton[lang]}
          </ButtonLink>
          <a
            href={`tel:${SSA.phone.tel}`}
            className="inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-2 rounded-full border-2 border-brand bg-white px-6 py-3 font-semibold text-brand hover:bg-brand-soft sm:w-auto"
          >
            <Phone className="h-5 w-5" aria-hidden /> {CONTACT.callButton[lang]}
          </a>
          <a
            href={mailLink(SSA.fairEmail, CONTACT.emailSubject[lang])}
            className="inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-2 rounded-full border-2 border-brand bg-white px-6 py-3 font-semibold text-brand hover:bg-brand-soft sm:w-auto"
          >
            <Mail className="h-5 w-5" aria-hidden /> {CONTACT.emailButton[lang]}
          </a>
        </div>

        <ul className="mx-auto mt-10 grid max-w-4xl gap-3 md:grid-cols-2">
          <li className={row}>
            <MapPin className="h-6 w-6 shrink-0 text-brand" aria-hidden />
            <div>
              <p className={label}>{CONTACT.officeLabel[lang]}</p>
              <p>{CONTACT.office[lang]}</p>
            </div>
          </li>
          <li className={row}>
            <Clock className="h-6 w-6 shrink-0 text-brand" aria-hidden />
            <div>
              <p className={label}>{CONTACT.hoursLabel[lang]}</p>
              <p>{CONTACT.hours[lang]}</p>
            </div>
          </li>
          <li className={row}>
            <Phone className="h-6 w-6 shrink-0 text-brand" aria-hidden />
            <div>
              <p className={label}>{CONTACT.phoneLabel[lang]}</p>
              <a className="font-semibold hover:text-brand" href={`tel:${SSA.phone.tel}`}>
                {SSA.phone.display}
              </a>
            </div>
          </li>
          <li className={row}>
            <MessageCircle className="h-6 w-6 shrink-0 text-brand" aria-hidden />
            <div>
              <p className={label}>{CONTACT.whatsappLabel[lang]}</p>
              <a
                className="font-semibold hover:text-brand"
                href={`https://wa.me/${SSA.whatsapp.wa}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {SSA.whatsapp.display}
              </a>
            </div>
          </li>
          <li className={row}>
            <Mail className="h-6 w-6 shrink-0 text-brand" aria-hidden />
            <div className="min-w-0">
              <p className={label}>{CONTACT.emailLabel[lang]}</p>
              {SSA.emails.map((e) => (
                <a
                  key={e}
                  className="block text-[14px] font-semibold hover:text-brand sm:text-base"
                  href={`mailto:${e}`}
                >
                  {e}
                </a>
              ))}
            </div>
          </li>
          <li className={row}>
            <Instagram className="h-6 w-6 shrink-0 text-brand" aria-hidden />
            <div>
              <p className={label}>{CONTACT.followLabel[lang]}</p>
              <a
                className="font-semibold hover:text-brand"
                href={SSA.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram ({SSA.instagram.handle})
              </a>
              <a
                className="block font-semibold hover:text-brand"
                href={SSA.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                className="block font-semibold hover:text-brand"
                href={SSA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </li>
        </ul>
      </Section>

      <Section tone="soft" title={CONTACT.venueTitle[lang]} intro={FIAME.venue[lang]}>
        {/* « Ouvrir dans Maps » (founder 21/11): hidden until SSA sends its
            location; set SSA.mapsUrl (src/site/ssa.ts) to show it again. */}
        {SSA.mapsUrl && (
          <p className="text-center">
            <ButtonLink href={SSA.mapsUrl} look="outline">
              {FIAME.openInMaps[lang]}
            </ButtonLink>
          </p>
        )}
      </Section>
    </>
  );
}
