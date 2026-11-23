// The SSA site's texts, word for word from « SSA-FIAME_Textes-Pages-FR-EN
// _2026-10-26_v1.2 » (Drive 02_SSA-FIAME/03_Developpement). Nothing here is
// invented: what SSA has not given yet is marked « à compléter » on the page
// (TODO in the code).
import type { Lang } from "./ssa";
import { enTypo, frTypo } from "./typo";

type T = Record<Lang, string>;
// every text through the typography of its language (non-breaking spaces,
// founder 21/11)
const t = (fr: string, en: string): T => ({ fr: frTypo(fr), en: enTypo(en) });

// ---------------------------------------------------------------- common
export const COMMON = {
  toComplete: t("À compléter", "To be completed"),
  bookStand: t("Réserver mon stand", "Book my stand"),
  becomePartner: t("Devenir partenaire", "Become a partner"),
  // Agenda CM integration (founder 21/11)
  registerVisitor: t("S'inscrire gratuitement", "Register for free"),
  footerRegistration: t("Inscriptions : Agenda CM", "Registration: Agenda CM"),
  buyMagazine: t("Acheter le magazine", "Buy the magazine"),
  buyOnWhatsapp: t("Acheter sur WhatsApp", "Buy on WhatsApp"),
  menu: t("Menu", "Menu"),
  close: t("Fermer", "Close"),
  otherLang: t("English", "Français"),
  skip: t("Aller au contenu", "Skip to content"),
  footerTagline: t(
    "Tous ensemble, pour un environnement salubre, viable et vivable",
    "Together for a clean, viable and liveable environment",
  ),
  footerRights: t("Tous droits réservés.", "All rights reserved."),
  notFoundTitle: t("Page introuvable", "Page not found"),
  notFoundBody: t(
    "Cette page n'existe pas ou a été déplacée.",
    "This page doesn't exist or has been moved.",
  ),
  backHome: t("Retour à l'accueil", "Back to home"),
};

// ---------------------------------------------------------------- 1. home
export const HOME = {
  title: t(
    "Tous ensemble, pour un environnement salubre, viable et vivable",
    "Together for a clean, viable and liveable environment",
  ),
  subtitle: t(
    "Depuis 2022, Sanitation Safety Association (SSA) agit pour l'éducation environnementale, la protection de la nature et le développement durable au Cameroun.",
    "Since 2022, Sanitation Safety Association (SSA) has been working for environmental education, nature protection and sustainable development in Cameroon.",
  ),
  // SSA 21/11: « 4ᵉ édition de la Foire Internationale aux Métiers de
  // l'Environnement »
  fiameTitle: t(
    "FIAME 2027, 4ᵉ édition de la Foire Internationale aux Métiers de l'Environnement",
    "FIAME 2027, 4th edition of the International Fair of Environmental Professions",
  ),
  fiameBody: t(
    "Du 1er au 5 juin 2027 à Douala. Valorisons les métiers verts, stimulons l'innovation et l'entrepreneuriat environnemental, et bâtissons ensemble un avenir durable.",
    "From 1 to 5 June 2027 in Douala. Let's showcase green jobs, boost innovation and environmental entrepreneurship, and build a sustainable future together.",
  ),
  figures: [
    {
      n: t("10 000+", "10,000+"),
      label: t(
        "personnes sensibilisées depuis 2022",
        "people reached through awareness campaigns since 2022",
      ),
    },
    {
      n: t("3", "3"),
      label: t("éditions de la foire déjà organisées", "editions of the fair already held"),
    },
    { n: t("100+", "100+"), label: t("exposants mobilisés", "exhibitors") },
    { n: t("15+", "15+"), label: t("partenaires mobilisés", "partners") },
  ],
  magazine: t(
    "FIAME Magazine n° 1 : innovations vertes, métiers d'avenir et acteurs de l'environnement. 3 000 FCFA, en PDF envoyé sur WhatsApp.",
    "FIAME Magazine No. 1: green innovations, careers of the future and environmental players. 3,000 FCFA, PDF sent via WhatsApp.",
  ),
  closing: t(
    "SSA et la FIAME, ensemble pour l'environnement et l'économie verte.",
    "SSA and FIAME, together for the environment and the green economy.",
  ),
};

// ---------------------------------------------------------------- 2. about
export const ABOUT = {
  whoTitle: t("Qui sommes-nous ?", "Who we are"),
  who: [
    t(
      "Créée en 2022 à Douala, Sanitation Safety Association (SSA) s'engage pour la protection de l'environnement, l'éducation environnementale et la sensibilisation des populations aux enjeux du développement durable au Cameroun.",
      "Founded in 2022 in Douala, Sanitation Safety Association (SSA) works to protect the environment, promote environmental education and raise public awareness of sustainable development issues in Cameroon.",
    ),
    t(
      "En 2024, SSA lance à Douala la Foire Commerciale aux Métiers de l'Environnement (FAME). Elle rapproche populations, entreprises, institutions, jeunes et porteurs de projets autour des opportunités de l'économie verte. Au fil des éditions, la FAME s'ouvre à l'international et devient la Foire Internationale aux Métiers de l'Environnement (FIAME).",
      "In 2024, SSA launched the Trade Fair of Environmental Professions (FAME) in Douala. It brings together communities, companies, institutions, young people and project leaders around the opportunities of the green economy. Edition after edition, FAME opened up internationally and became the International Fair of Environmental Professions (FIAME).",
    ),
  ],
  missionTitle: t("Notre mission", "Our mission"),
  mission: t(
    "Contribuer à la protection de l'environnement et à l'amélioration durable du cadre de vie, par l'éducation, la sensibilisation, la mobilisation citoyenne et la promotion des pratiques responsables. SSA implique les jeunes, les femmes, les entreprises et les institutions dans des solutions concrètes.",
    "To help protect the environment and improve living conditions over the long term, through education, awareness-raising, civic mobilisation and the promotion of responsible practices. SSA involves young people, women, companies and institutions in practical solutions.",
  ),
  visionTitle: t("Notre vision", "Our vision"),
  vision: t(
    "Un Cameroun où chaque citoyen, chaque entreprise et chaque institution est acteur de la préservation de l'environnement. Des communautés plus saines, inclusives et résilientes, où la protection de la nature devient un levier de paix, de cohésion sociale et de prospérité partagée.",
    "A Cameroon where every citizen, company and institution plays a part in protecting the environment. Healthier, more inclusive and resilient communities, where protecting nature drives peace, social cohesion and shared prosperity.",
  ),
  valuesTitle: t("Nos valeurs", "Our values"),
  values: t(
    "responsabilité environnementale, engagement citoyen, solidarité, intégrité, inclusion, innovation et partenariat.",
    "environmental responsibility, civic engagement, solidarity, integrity, inclusion, innovation and partnership.",
  ),
  domainsTitle: t("Nos domaines d'action", "What we do"),
  domains: [
    t(
      "Éducation environnementale et sensibilisation à la salubrité",
      "Environmental education and public health awareness",
    ),
    t(
      "Gestion responsable des déchets et préservation des ressources naturelles",
      "Responsible waste management and conservation of natural resources",
    ),
    t(
      "Économie verte, métiers de l'environnement et entrepreneuriat durable",
      "Green economy, environmental professions and sustainable entrepreneurship",
    ),
    t(
      "Formation des jeunes et participation des femmes aux initiatives environnementales",
      "Youth training and women's participation in environmental initiatives",
    ),
    t(
      "Responsabilité sociétale des organisations, paix et cohésion sociale",
      "Corporate social responsibility, peace and social cohesion",
    ),
  ],
  sdg: t(
    "Nos actions s'inscrivent dans les 17 Objectifs de développement durable (ODD) des Nations unies. Les activités de la FIAME en couvrent spécifiquement 7 : éducation de qualité (ODD 4), égalité entre les sexes (ODD 5), travail décent (ODD 8), villes durables (ODD 11), consommation responsable (ODD 12), action climatique (ODD 13) et partenariats (ODD 17).",
    "Our work is part of the 17 United Nations Sustainable Development Goals (SDGs). FIAME activities specifically address 7 of them: quality education (SDG 4), gender equality (SDG 5), decent work (SDG 8), sustainable cities (SDG 11), responsible consumption (SDG 12), climate action (SDG 13) and partnerships (SDG 17).",
  ),
  sdgShort: t("ODD", "SDG"),
  sdgFiame: [4, 5, 8, 11, 12, 13, 17],
  achievementsTitle: t("Nos réalisations", "Our achievements"),
  achievements: [
    {
      title: t("La FAME, devenue FIAME", "FAME, now FIAME"),
      body: t(
        "depuis 2024, trois éditions d'exposition, de sensibilisation et de rencontres professionnelles autour des métiers de l'environnement, avec des marches écologiques.",
        "since 2024, three editions of exhibitions, awareness activities and business meetings on environmental professions, including eco-walks.",
      ),
    },
    {
      title: t("Miss et Master FIAME", "Miss and Master FIAME"),
      body: t(
        "une élection qui désigne des ambassadeurs de l'éducation environnementale, chargés de relayer les messages de sensibilisation dans leurs communautés.",
        "a contest that selects ambassadors for environmental education, who carry awareness messages into their communities.",
      ),
    },
    {
      title: t("FIAME Magazine", "FIAME Magazine"),
      body: t(
        "une revue qui valorise les acteurs de l'environnement, les innovations vertes, les métiers d'avenir et les opportunités de formation.",
        "a publication showcasing environmental players, green innovations, careers of the future and training opportunities.",
      ),
    },
  ],
  boardTitle: t("Le bureau", "The board"),
  board: [
    {
      role: t("Président", "President"),
      name: t("M. NGONO MBIDA Jules Joël", "Mr NGONO MBIDA Jules Joël"),
    },
    {
      role: t("Secrétaire générale", "Secretary General"),
      name: t("Mme NSEGUE Arielle Flora", "Mrs NSEGUE Arielle Flora"),
    },
    {
      role: t("Trésorier", "Treasurer"),
      name: t("M. MBIDA MBIDA André Boris", "Mr MBIDA MBIDA André Boris"),
    },
    {
      role: t("Commissaire aux comptes", "Auditor"),
      name: t("Mme NKOUMOU Fanny Gladys", "Mrs NKOUMOU Fanny Gladys"),
    },
    { role: t("Censeur", "Censor"), name: t("M. NGUEBE Gabriel", "Mr NGUEBE Gabriel") },
    {
      role: t("Conseillère", "Adviser"),
      name: t("Mme MENIKEU Joséphine épouse NGONO", "Mrs MENIKEU Joséphine, married name NGONO"),
    },
  ],
};

// ---------------------------------------------------------------- 3. FIAME 2027
export const FIAME = {
  // « FIAME 2027 » as the title, the fair's full name below it (founder 21/11)
  title: t("FIAME 2027", "FIAME 2027"),
  subtitle: t(
    "4ᵉ édition de la Foire Internationale aux Métiers de l'Environnement",
    "4th edition of the International Fair of Environmental Professions",
  ),
  themeLabel: t("Thème", "Theme"),
  theme: t(
    "« Économie circulaire, innovation verte et emplois durables : les métiers qui transforment l'avenir »",
    '"Circular economy, green innovation and sustainable jobs: the professions shaping the future"',
  ),
  datesLabel: t("Dates", "Dates"),
  dates: t("du 1er au 5 juin 2027, de 8 h à 18 h", "1 to 5 June 2027, 8 am to 6 pm"),
  venueLabel: t("Lieu", "Venue"),
  // SSA's wording of 21/11 (the centre: Centre d'insertion des jeunes en
  // difficulté de Douala, CIJ)
  venue: t(
    "Esplanade du complexe sportif du CIJ Douala, derrière la mairie de Douala 3ᵉ",
    "Esplanade of the CIJ Douala sports complex, behind Douala 3rd District Council",
  ),
  free: t("Entrée gratuite", "Free admission"),
  whyTitle: t("Pourquoi la FIAME ?", "Why FIAME?"),
  why: t(
    "Changement climatique, gestion des déchets, transition énergétique : le Cameroun doit accélérer les solutions durables. La FIAME 2027 réunit entreprises, institutions, investisseurs, jeunes et porteurs de projets pour stimuler les investissements verts, faciliter les partenariats public-privé et promouvoir les métiers de l'environnement.",
    "Climate change, waste management, energy transition: Cameroon needs to speed up sustainable solutions. FIAME 2027 brings together companies, institutions, investors, young people and project leaders to boost green investment, facilitate public-private partnerships and promote environmental professions.",
  ),
  goalLabel: t("Objectif", "Goal"),
  goal: t(
    "promouvoir une économie verte inclusive par l'innovation, l'entrepreneuriat et les partenariats, pour créer des emplois durables.",
    "to promote an inclusive green economy through innovation, entrepreneurship and partnerships, creating sustainable jobs.",
  ),
  programmeTitle: t("Au programme", "What's on"),
  // SSA's « Programme global » poster of 21/11, its three strands with their
  // points; the details of the former six blocks (texts v1.2) are kept on
  // the matching points, nothing repeated.
  strands: [
    {
      key: "environnement" as const,
      title: t("FIAME Environnement", "FIAME Environment"),
      tagline: t(
        "Innovation verte et économie durable",
        "Green innovation and sustainable economy",
      ),
      points: [
        t(
          "Expositions commerciales, industrielles et technologiques : entreprises, ONG, associations et artisans",
          "Trade, industrial and technology exhibitions: companies, NGOs, associations and artisans",
        ),
        t(
          "Conférences et panels : économie circulaire, finance verte, transition énergétique, emplois durables, santé et sécurité au travail",
          "Conferences and panels: circular economy, green finance, energy transition, sustainable jobs, occupational health and safety",
        ),
        t("Rencontres d'affaires B2B, B2C et C2C", "B2B, B2C and C2C business meetings"),
        t(
          "Formations, démonstrations et ateliers pratiques : pavés à base de déchets plastiques, charbon écologique, produits cosmétiques, sécurité incendie et premiers secours",
          "Training, demonstrations and hands-on workshops: paving stones made from plastic waste, eco-charcoal, cosmetics, fire safety and first aid",
        ),
        t(
          "Ateliers professionnels : montage de projets, recherche de financements (y compris internationaux), gestion des conflits en entreprise, développement personnel",
          "Professional workshops: project design, fundraising (including international funding), conflict management at work, personal development",
        ),
        t(
          "Rencontres avec investisseurs et porteurs de projets verts",
          "Meetings with investors and green project leaders",
        ),
        t("Marche sportive écologique", "Eco-walk"),
        t(
          "Élection de Miss et Master FIAME, ambassadeurs de l'éducation environnementale",
          "Miss and Master FIAME contest, ambassadors for environmental education",
        ),
        t(
          "Campagnes de sensibilisation à la protection de l'environnement",
          "Awareness campaigns on environmental protection",
        ),
      ],
    },
    {
      key: "sante" as const,
      title: t("FIAME Santé", "FIAME Health"),
      tagline: t(
        "Santé et environnement, un même combat",
        "Health and environment, one and the same fight",
      ),
      points: [
        t(
          "Campagne gratuite de dépistage et de consultation médicale pendant les 5 jours de la foire, avec un personnel médical de référence",
          "Free screening and medical consultations throughout the 5 days of the fair, by qualified medical staff",
        ),
        t("Sensibilisation sur la santé environnementale", "Awareness on environmental health"),
        t(
          "Ateliers sur l'hygiène, l'assainissement et la qualité de l'air et de l'eau",
          "Workshops on hygiene, sanitation, and air and water quality",
        ),
        t("Conseils et éducation sanitaire pour tous", "Health advice and education for all"),
        t(
          "Partenariat avec les structures sanitaires et les ONG",
          "Partnership with health facilities and NGOs",
        ),
      ],
    },
    {
      key: "projet" as const,
      title: t("Meilleur projet écologique de la FIAME", "FIAME Best Eco-Project"),
      tagline: t(
        "Innover aujourd'hui, pour un avenir durable",
        "Innovating today for a sustainable future",
      ),
      points: [
        t(
          "Concours national des meilleurs projets écologiques",
          "National contest for the best eco-projects",
        ),
        t(
          "Présentation des innovations et solutions vertes",
          "Showcase of green innovations and solutions",
        ),
        t("Évaluation par un jury d'experts", "Assessment by a panel of experts"),
        t(
          "Prix attractifs : reconnaissance, accompagnement et financement",
          "Attractive prizes: recognition, support and funding",
        ),
      ],
    },
  ],
  highlightsTitle: t("Autres temps forts", "Other highlights"),
  highlights: [
    t("Rencontres B2B et B2C", "B2B and B2C meetings"),
    t("Formations professionnelles", "Professional training"),
    t("Expositions-ventes", "Exhibitions and sales"),
    t("Débats et panels", "Debates and panels"),
    t("Innovations technologiques", "Technological innovations"),
    t("Animations culturelles", "Cultural entertainment"),
  ],
  daysTitle: t("Programme jour par jour", "Day-by-day programme"),
  // The days SSA has given (texts v1.2); the rest is fixed once every
  // speaker has agreed (SSA 21/11): one line instead of « à compléter ».
  days: [
    {
      day: t("Jour 1, mardi 1er juin", "Day 1, Tuesday 1 June"),
      body: t(
        "Accueil et installation des stands, cérémonie d'ouverture officielle, coupure du ruban, visite des stands par les officiels et partenaires, causeries éducatives",
        "Welcome and stand set-up, official opening ceremony, ribbon cutting, stand tour by officials and partners, educational talks",
      ),
    },
    {
      day: t("Jour 2, mercredi 2 juin", "Day 2, Wednesday 2 June"),
      body: t(
        "Ouverture des stands, conférences-débats, causeries éducatives",
        "Stands open, conferences and debates, educational talks",
      ),
    },
  ],
  daysSoon: t(
    "Programme détaillé jour par jour bientôt disponible",
    "Detailed day-by-day programme coming soon",
  ),
  previousTitle: t("Les éditions précédentes", "Previous editions"),
  previous: t(
    "3 éditions depuis 2024, plus de 100 exposants et plus de 15 partenaires mobilisés, plus de 8 000 personnes sensibilisées depuis 2024.",
    "3 editions since 2024, over 100 exhibitors and over 15 partners, over 8,000 people reached since 2024.",
  ),
  openInMaps: t("Ouvrir dans Maps", "Open in Maps"),
};

// « Recevez un rappel avant la foire » (founder 21/11): the FIAME page on
// Agenda CM. Agenda CM sends a WhatsApp reminder the day before (17:30
// Douala) to registrants who tick its reminder box -- nothing more is promised.
export const REMINDER = {
  title: t("Recevez un rappel avant la foire", "Get a reminder before the fair"),
  body: t(
    "Inscrivez-vous gratuitement à la FIAME 2027 sur Agenda CM : vous pourrez recevoir un rappel sur WhatsApp la veille de l'ouverture.",
    "Register for FIAME 2027 for free on Agenda CM and you can get a WhatsApp reminder the day before it opens.",
  ),
  button: t("Recevoir un rappel", "Get a reminder"),
};

// ---------------------------------------------------------------- 4. exhibitors
export type Stand = {
  type: number;
  size: number;
  price: number;
  included: T;
  /** not on the site yet (its figures are missing) */
  hidden?: boolean;
};
// v1: stand types, sizes and prices set here; the table, the list and the
// WhatsApp message all read STANDS, the shown ones. Source: SSA's stand
// poster of 28/10 (founder 27/10: the most recent reference wins over texts
// v1.2).
const TABLE_CHAIR = t("Une table, une chaise", "One table, one chair");
export const ALL_STANDS: Stand[] = [
  {
    type: 1,
    size: 9,
    price: 75000,
    included: t("Une table, deux chaises", "One table, two chairs"),
  },
  { type: 2, size: 9, price: 50000, included: t("Sans table ni chaise", "No table or chair") },
  // Type 3: missing from the poster by mistake (SSA 21/11). Its place is
  // ready; it stays hidden until the founder has its size (m²), price
  // (FCFA) and what is included: fill them in, remove « hidden ».
  { type: 3, size: 0, price: 0, included: t("", ""), hidden: true },
  { type: 4, size: 6, price: 50000, included: TABLE_CHAIR },
  { type: 5, size: 4, price: 35000, included: TABLE_CHAIR },
  { type: 6, size: 2, price: 20000, included: TABLE_CHAIR },
];
/** The stands shown on the site (table, list, WhatsApp message). */
export const STANDS: Stand[] = ALL_STANDS.filter((s) => !s.hidden);

export const SECTORS: T[] = [
  t("Déchets et recyclage", "Waste and recycling"),
  t("Énergie", "Energy"),
  t("Agriculture et agroalimentaire", "Agriculture and food processing"),
  t("Cosmétique et artisanat", "Cosmetics and crafts"),
  t("Conseil et formation", "Consulting and training"),
  t("Institution ou ONG", "Institution or NGO"),
  t("Autre", "Other"),
];

export const EXHIBIT = {
  title: t("Exposez à la FIAME 2027", "Exhibit at FIAME 2027"),
  intro: t(
    "Entreprises, ONG, associations, artisans : présentez vos produits et services aux visiteurs, institutions et partenaires de la foire.",
    "Companies, NGOs, associations, artisans: showcase your products and services to the fair's visitors, institutions and partners.",
  ),
  colStand: t("Stand", "Stand"),
  colSize: t("Surface", "Size"),
  colIncluded: t("Inclus", "Included"),
  colPrice: t("Prix", "Price"),
  howTitle: t("Comment réserver ?", "How to book"),
  how: [
    t(
      "Choisissez votre type de stand et votre secteur d'activité.",
      "Choose your stand type and business sector.",
    ),
    t(
      "Touchez « Réserver sur WhatsApp » : votre demande s'ouvre dans WhatsApp, prête à envoyer.",
      'Tap "Book on WhatsApp": your request opens in WhatsApp, ready to send.',
    ),
    t(
      "Notre équipe vous recontacte pour confirmer votre stand.",
      "Our team contacts you to confirm your stand.",
    ),
    t(
      "Réglez votre stand par Mobile Money, virement ou en espèces.",
      "Pay for your stand by Mobile Money, bank transfer or cash.",
    ),
    t(
      "Envoyez votre logo et votre présentation au plus tard le 10 mai 2027.",
      "Send your logo and description by 10 May 2027.",
    ),
  ],
  standLabel: t("Type de stand", "Stand type"),
  sectorLabel: t("Secteur d'activité", "Business sector"),
  choose: t("Choisir…", "Choose…"),
  button: t("Réserver sur WhatsApp", "Book on WhatsApp"),
  noWhatsapp: t(
    "Pas de WhatsApp ? Appelez-nous au +237 657 099 795 ou au +237 621 034 348, ou écrivez à lafame2024@gmail.com.",
    "No WhatsApp? Call us on +237 657 099 795 or +237 621 034 348, or write to lafame2024@gmail.com.",
  ),
  visitTitle: t("Visitez la FIAME 2027", "Visit FIAME 2027"),
  visit: t(
    "L'entrée est gratuite. Inscrivez-vous avec votre nom et votre e-mail ou votre numéro WhatsApp.",
    "Admission is free. Register with your name and your email or WhatsApp number.",
  ),
  handledBy: t("Agenda CM, partenaire digital du FIAME", "Agenda CM, digital partner of FIAME"),
};

/** « Type 3 – 9 m² – 35 000 FCFA » (FR) / « Type 3 – 9 m² – 35,000 FCFA » (EN). */
export function fcfa(n: number, lang: Lang): string {
  const s = String(n).replace(/\B(?=(\d{3})+(?!\d))/g, lang === "fr" ? " " : ",");
  return `${s} FCFA`;
}
export function standOption(s: Stand, lang: Lang): string {
  // the list's options too (founder 21/11): unit and number stay together
  return `Type\u00a0${s.type} – ${s.size}\u00a0m² – ${fcfa(s.price, lang).replace(" FCFA", "\u00a0FCFA")}`;
}

/** The pre-filled stand request (texts v1.2). */
export function standMessage(s: Stand, sector: string, lang: Lang): string {
  const type = `Type ${s.type} (${s.size} m², ${fcfa(s.price, lang)})`;
  return lang === "fr"
    ? `Bonjour, je souhaite réserver un stand pour la FIAME 2027. Type de stand : ${type}. Secteur : ${sector}. Mon entreprise ou organisation : `
    : `Hello, I would like to book a stand at FIAME 2027. Stand type: ${type}. Sector: ${sector}. My company or organisation: `;
}

// ---------------------------------------------------------------- 5. magazine
export const MAGAZINE = {
  title: t("FIAME Magazine n° 1", "FIAME Magazine No. 1"),
  body: t(
    "La revue de la Foire Internationale aux Métiers de l'Environnement. Innovation verte, protection de l'environnement, métiers durables : le magazine donne la parole aux acteurs qui font avancer la transition écologique au Cameroun et en Afrique, et présente les opportunités de formation et d'emploi de l'économie verte.",
    "The magazine of the International Fair of Environmental Professions. Green innovation, environmental protection, sustainable careers: the magazine gives a voice to those driving the ecological transition in Cameroon and Africa, and presents training and job opportunities in the green economy.",
  ),
  priceLabel: t("Prix", "Price"),
  price: t("3 000 FCFA, en PDF", "3,000 FCFA, PDF format"),
  howTitle: t("Comment l'obtenir ?", "How to get it"),
  how: [
    t("Touchez « Acheter sur WhatsApp ».", 'Tap "Buy on WhatsApp".'),
    t("Commandez le magazine depuis notre catalogue.", "Order the magazine from our catalogue."),
    t(
      "Payez par Mobile Money : vous recevez le PDF sur WhatsApp dès réception du paiement.",
      "Pay by Mobile Money: you receive the PDF on WhatsApp as soon as payment is received.",
    ),
  ],
  coverAlt: t("Couverture du FIAME Magazine n° 1", "Cover of FIAME Magazine No. 1"),
  extractsTitle: t("Extraits", "Extracts"),
  extractsIntro: t("Touchez une page pour l'agrandir.", "Tap a page to enlarge it."),
  page: t("Page", "Page"),
  // SSA's pages of 21/11, in the magazine's order; images
  // public/sites/ssa/magazine-n01-p<NN>(-mini).webp
  extracts: [
    { page: 6, caption: t("Présentation de la FIAME", "Introducing FIAME") },
    {
      page: 7,
      caption: t("Dossier spécial : le réchauffement climatique", "Special report: global warming"),
    },
    { page: 33, caption: t("Salubrité à domicile", "Keeping homes clean") },
    {
      page: 37,
      caption: t("FIAME Business : l'économie circulaire", "FIAME Business: the circular economy"),
    },
  ],
};

// « À paraître » (founder 23/11): the book of SSA's president, on the
// Magazine page, HIDDEN until SSA agrees (SSA.showBook in ssa.ts).
export const BOOK = {
  label: t("À paraître", "Coming soon"),
  title: t(
    "QHSE : le choc du terrain – Guide de survie pour jeunes diplômés en Afrique",
    "QHSE\u00a0: le choc du terrain – Guide de survie pour jeunes diplômés en Afrique",
  ),
  // the book is in French: said in English
  inFrench: t("", "Book in French: a survival guide for young graduates in Africa."),
  author: t("M. Ngono Mbida Jules Joël", "Mr Ngono Mbida Jules Joël"),
  publisher: t("Les éditions NJJ", "Les éditions NJJ"),
  prices: [
    { label: t("Numérique", "Digital"), price: t("5 000 FCFA", "5,000 FCFA") },
    { label: t("Papier", "Print"), price: t("7 500 FCFA", "7,500 FCFA") },
  ],
  release: t("Sortie prévue mi-décembre 2026", "Expected mid-December 2026"),
  button: t("Être prévenu sur WhatsApp", "Get notified on WhatsApp"),
  message: t(
    "Bonjour, je souhaite être prévenu(e) de la sortie du livre « QHSE : le choc du terrain ».",
    'Hello, I would like to be notified when the book "QHSE : le choc du terrain" is released.',
  ),
  coverAlt: t(
    "Couverture du livre « QHSE : le choc du terrain »",
    'Cover of the book "QHSE : le choc du terrain"',
  ),
};

// ---------------------------------------------------------------- 6. partners
export type Pack = "platine" | "or" | "argent" | "bronze";
export const PACK_NAME: Record<Pack, T> = {
  platine: t("Platine", "Platinum"),
  or: t("Or", "Gold"),
  argent: t("Argent", "Silver"),
  bronze: t("Bronze", "Bronze"),
};
export const PACK_ORDER: Pack[] = ["platine", "or", "argent", "bronze"];
const DASH = t("—", "—");
export const PACK_ROWS: { label: T; values: Record<Pack, T> }[] = [
  {
    label: t("Prix", "Price"),
    values: {
      platine: t("5 000 000 FCFA", "5,000,000 FCFA"),
      or: t("3 000 000 FCFA", "3,000,000 FCFA"),
      argent: t("1 500 000 FCFA", "1,500,000 FCFA"),
      bronze: t("700 000 FCFA", "700,000 FCFA"),
    },
  },
  {
    label: t("Logo", "Logo"),
    values: {
      // SSA 21/11: no « 1re »; « Deuxième » to match « Première »
      platine: t("Première position sur tous les supports", "Top position on all materials"),
      or: t("Deuxième position sur tous les supports", "Second position on all materials"),
      argent: t("Sur les supports de communication", "On communication materials"),
      bronze: t("Sur les supports numériques", "On digital materials"),
    },
  },
  {
    label: t("Bannière", "Banner"),
    values: {
      platine: t("Bannière géante sur le site", "Large banner on the website"),
      or: t("Bannière sur le site", "Banner on the website"),
      argent: DASH,
      bronze: DASH,
    },
  },
  {
    label: t("Allocutions et programme", "Speeches and programme"),
    values: {
      platine: t(
        "Présentation dans toutes les allocutions officielles",
        "Featured in all official speeches",
      ),
      or: t("Mention dans les allocutions officielles", "Mentioned in official speeches"),
      argent: t("Mention dans le programme officiel", "Listed in the official programme"),
      bronze: t("Mention dans le programme officiel", "Listed in the official programme"),
    },
  },
  {
    label: t("Réseaux sociaux", "Social media"),
    values: {
      platine: t("Publication dédiée sur tous les réseaux", "Dedicated post on all networks"),
      or: t("Publications régulières", "Regular posts"),
      argent: t("Publication", "One post"),
      bronze: DASH,
    },
  },
  {
    label: t("Stand", "Stand"),
    values: {
      platine: t(
        "Premium 6 × 6 m (36 m²), emplacement VIP",
        "Premium 6 × 6 m (36 m²), VIP location",
      ),
      or: t("4 × 4 m (16 m²), bien situé", "4 × 4 m (16 m²), prime location"),
      argent: t("3 × 3 m (9 m²)", "3 × 3 m (9 m²)"),
      bronze: t("2 × 3 m (6 m²)", "2 × 3 m (6 m²)"),
    },
  },
  {
    label: t("Invitations VIP", "VIP invitations"),
    values: {
      platine: t("10, toutes activités", "10, all activities"),
      or: t("6", "6"),
      argent: t("3", "3"),
      bronze: t("2", "2"),
    },
  },
  {
    label: t("Prise de parole", "Speaking slot"),
    values: {
      platine: t("Cérémonie d'ouverture", "Opening ceremony"),
      or: t("Panel thématique", "Thematic panel"),
      argent: DASH,
      bronze: DASH,
    },
  },
  {
    label: t("T-shirts de la marche", "Eco-walk T-shirts"),
    values: {
      platine: t("Co-branding", "Co-branding"),
      or: t("Logo", "Logo"),
      argent: DASH,
      bronze: DASH,
    },
  },
  {
    label: t("Autres avantages", "Other benefits"),
    values: {
      platine: t(
        "Spot sur les écrans LED, rapport d'impact personnalisé, accès aux conférences",
        "LED screen ad, tailored impact report, conference access",
      ),
      or: t("Accès aux conférences", "Conference access"),
      argent: t("Accès aux sessions B2B et aux conférences", "B2B sessions and conference access"),
      bronze: t("Accès aux conférences", "Conference access"),
    },
  },
];

export const PARTNERS = {
  title: t("Devenez partenaire de la FIAME 2027", "Become a FIAME 2027 partner"),
  intro: t(
    "Associez votre marque à l'économie verte et rencontrez entreprises, institutions et jeunes talents engagés pour l'environnement.",
    "Associate your brand with the green economy and meet companies, institutions and young talent committed to the environment.",
  ),
  choose: t("Choisir ce pack", "Choose package"),
  howTitle: t("Comment devenir partenaire ?", "How to become a partner"),
  how: [
    t(
      "Contactez notre équipe sur WhatsApp ou par e-mail.",
      "Contact our team on WhatsApp or by email.",
    ),
    t("Choisissez votre pack.", "Choose your package."),
    t("Signez la convention de partenariat.", "Sign the partnership agreement."),
    t("Effectuez votre contribution.", "Make your contribution."),
    t(
      "Transmettez votre logo HD et votre présentation au plus tard le 10 mai 2027.",
      "Send your HD logo and description by 10 May 2027.",
    ),
  ],
  contactWa: t("Écrire sur WhatsApp", "Message on WhatsApp"),
  email: t("Envoyer un e-mail", "Send an email"),
  emailSubject: t("Partenariat FIAME 2027", "FIAME 2027 partnership"),
  listTitle: t("Ils nous accompagnent", "Our partners"),
  undefinedPack: t("à définir", "to be defined"),
};

export function partnerMessage(pack: string, lang: Lang): string {
  return lang === "fr"
    ? `Bonjour, je souhaite devenir partenaire de la FIAME 2027. Pack qui m'intéresse : ${pack}. Mon entreprise ou organisation : `
    : `Hello, I would like to become a FIAME 2027 partner. Package I am interested in: ${pack}. My company or organisation: `;
}

export const PARTNER_LIST: { name: T; logo: string | null; description?: T }[] = [
  {
    name: t("Délégation régionale du MINEPDED", "Regional Delegation of MINEPDED"),
    logo: "minepded",
  },
  { name: t("Délégation régionale du MINJEC", "Regional Delegation of MINJEC"), logo: "minjec" },
  {
    name: t("Délégation départementale du MINCOMMERCE", "Divisional Delegation of MINCOMMERCE"),
    logo: "mincommerce",
  },
  {
    name: t("Délégation départementale du MINPMEESA", "Divisional Delegation of MINPMEESA"),
    logo: "minpmeesa",
  },
  { name: t("Safety Engineering SARL", "Safety Engineering SARL"), logo: "safety-engineering" },
  { name: t("IFPI-SE", "IFPI-SE"), logo: "ifpi-se" },
  {
    name: t(
      "Centre d'insertion des jeunes en difficulté de Douala",
      "Douala Centre for the Integration of Young People in Difficulty",
    ),
    logo: "cij-douala",
  },
  {
    name: t("Agenda CM", "Agenda CM"),
    logo: null,
    description: t(
      "Partenaire digital : inscriptions des visiteurs et diffusion du FIAME auprès des professionnels au Cameroun",
      "Digital partner: visitor registration and promotion of FIAME to professionals in Cameroon",
    ),
  },
];

// ---------------------------------------------------------------- 7. contact
export const CONTACT = {
  title: t("Contactez-nous", "Contact us"),
  intro: t(
    "Une question sur la FIAME, un stand, un partenariat ou le magazine ? Le plus rapide est WhatsApp : nous vous répondons rapidement.",
    "A question about FIAME, a stand, a partnership or the magazine? WhatsApp is the fastest way: we will get back to you quickly.",
  ),
  officeLabel: t("Siège", "Head office"),
  office: t(
    "Douala, derrière l'hôtel ZZ, en face de la station-service Multi Oil, après le lycée bilingue de Nyalla",
    "Douala, behind Hotel ZZ, opposite the Multi Oil service station, past the Nyalla bilingual high school",
  ),
  phoneLabel: t("Téléphone", "Phone"),
  whatsappLabel: t("WhatsApp", "WhatsApp"),
  emailLabel: t("E-mail", "Email"),
  hoursLabel: t("Joignables", "Available"),
  hours: t("de 7 h 30 à 20 h", "7:30 am to 8 pm"),
  followLabel: t("Suivez-nous", "Follow us"),
  waButton: t("Écrire sur WhatsApp", "Message on WhatsApp"),
  callButton: t("Appeler", "Call"),
  emailButton: t("Envoyer un e-mail", "Send an email"),
  waMessage: t(
    "Bonjour SSA, j'ai une question au sujet de : ",
    "Hello SSA, I have a question about: ",
  ),
  emailSubject: t("Demande d'information – FIAME 2027", "Information request – FIAME 2027"),
  venueTitle: t("Lieu de la FIAME 2027", "FIAME 2027 venue"),
};

// ---------------------------------------------------------------- page meta
export const META: Record<string, { title: T; description: T }> = {
  home: {
    title: t(
      "SSA – Sanitation Safety Association · FIAME 2027",
      "SSA – Sanitation Safety Association · FIAME 2027",
    ),
    description: HOME.subtitle,
  },
  about: { title: t("À propos de SSA", "About SSA"), description: ABOUT.who[0]! },
  fiame: {
    title: t("FIAME 2027 · 1er–5 juin 2027, Douala", "FIAME 2027 · 1–5 June 2027, Douala"),
    description: HOME.fiameBody,
  },
  stands: {
    title: t("Exposants · FIAME 2027", "Exhibitors · FIAME 2027"),
    description: EXHIBIT.intro,
  },
  magazine: { title: t("FIAME Magazine n° 1", "FIAME Magazine No. 1"), description: HOME.magazine },
  partners: {
    title: t("Partenaires · FIAME 2027", "Partners · FIAME 2027"),
    description: PARTNERS.intro,
  },
  contact: { title: t("Contact · SSA", "Contact · SSA"), description: CONTACT.intro },
};
