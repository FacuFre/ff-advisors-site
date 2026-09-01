export const BRAND = {
  ink: "#121212",
  amber: "#b45309",
  accent: "#a8874a",
  bg: "#faf9f6",
  fonts: {
    sans: "Josefin Sans",
    serif: "Source Serif 4",
  },
} as const;

export const CONTACT = {
  email: "contacto@ffadvisors.com.ar",
  phoneDisplay: "+54 11 3239-7427",
  phoneTel: "+541132397427",
  hours: "Lun a Vie · 9 a 18 hs",
  calendly: "https://calendly.com/facundo-ffadvisors/30min",
  whatsapp: "https://wa.me/541132397427",
} as const;

export const REGULATORY = {
  figure: "Agente Productor CNV",
  license: "Matrícula N° 2016",
  short: "Agente Productor CNV · Matrícula N° 2016",
} as const;

export const ALYC_PARTNERS = ["INVIU", "Balanz"] as const;
export const CUSTODY_PARTNERS = [
  "INVIU",
  "Balanz",
  "Interactive Brokers",
  "StoneX",
  "Pershing",
] as const;

export const SITE_ORIGIN = "https://ffadvisors.com.ar";

export const mailto = (subject: string, body: string) =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
