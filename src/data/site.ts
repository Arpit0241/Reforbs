/**
 * Single Source of Truth for Reforbs Living Brand, Policies, Contacts & Standards.
 */

export interface VerifiedPressArticle {
  publication: string;
  title: string;
  url: string;
  datePublished?: string;
}

export interface EditorialReviewer {
  name: string;
  role: string;
}

export const SITE_CONFIG = {
  brandName: "Reforbs Living",
  legalName: "Reforbs Living",
  tagline: "#LIVETHEVIBES",
  description:
    "Curated co-living residences for professionals and couples, plus dedicated student housing near Symbiosis campuses in Pune.",
  email: "hello@reforbs.com",
  supportEmail: "reforbsar@gmail.com",
  primaryPhoneDisplay: "+91 74200 40241",
  primaryPhoneE164: "+917420040241",
  primaryWhatsappDigits: "917420040241",
  foundersWhatsappDigits: "917391919163",
  tourHours: "Every day, 10:00 AM to 10:00 PM",
  instagramUrl: "https://www.instagram.com/reforbscoliving?mdxt=ZWtoY3oweTJjbGs3",
  instagramHandle: "@reforbscoliving",
  headquarters: {
    streetAddress: "Viman Nagar & Sanjay Park",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411014",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.instagram.com/reforbscoliving",
  ],
  policiesSummary: {
    colivingLockIn: "Zero lock-in period with a standard 30-day calendar notice period (must be served by the 5th of the month for month-end move-out).",
    studentHousingLockIn: "Annual academic lock-in period aligned with the university calendar (annual or semi-annual fee instalments).",
    securityDeposit: "Co-Living: 1 month rent (refundable within 7 working days subject to 30 days notice & zero damage; ₹1,000 exit fee waived after 6 months). Student Housing: ₹20,000–₹40,000 depending on property.",
    foodPolicy: "Daily meals are included in listed plans across residences; Co-Living residents also enjoy private or floor kitchens with 24/7 cooking access and may discuss meal preferences with our team.",
    visitorPolicy: "Co-Living (Nirvana, Moksha, Vipasna) is couple-friendly with zero moral policing while respecting neighbours. Student Housing enforces campus discipline rules; Shubh Gateway has gender-segregated towers where opposite-gender visitors are strictly not allowed.",
    electricityPolicy: "Heavy appliances (AC, geysers, inductions, refrigerators, microwaves) are sub-metered at ₹11 per unit or applicable government tariff slabs.",
  },
  livingStandard3P3D: {
    threePillars: [
      {
        title: "PRIVACY",
        summary:
          "Private 1RK studios and single-occupancy rooms alongside spacious twin-sharing and floor-limited layouts, giving every resident breathing room and control over their personal sanctuary.",
      },
      {
        title: "PERSONALIZATION",
        summary:
          "Warm bohemian-inspired interiors, balconies, dedicated study desks, and full kitchen setups where you can rearrange your space and cook on your own schedule.",
      },
      {
        title: "POSITIVITY",
        summary:
          "Light-filled communal terraces and curated community events—yoga, BBQs, festivals, movie nights, and peer mentorship—so nobody feels isolated in a new city.",
      },
    ],
    threeCommitments: [
      {
        title: "DAILY SUPPORT",
        summary:
          "Dedicated property managers, daily housekeeping (brooming, mopping, dusting), twice-weekly washroom sanitization, and quick TAT issue resolution.",
      },
      {
        title: "DECOR",
        summary:
          "Backpacker-inspired lounges, fairy-lit terraces, ergonomic furniture, and bright natural lighting instead of cramped concrete hostels.",
      },
      {
        title: "DETAILS",
        summary:
          "High-speed Wi-Fi, inverter backup, biometric/CCTV entry, washing machines, and zero pushy follow-up calls—'Take it only if you like it!!'",
      },
    ],
  },
  // Verified review aggregates & press links remain empty until confirmed by owner (see FACTS_TO_CONFIRM.md)
  verifiedGoogleRating: null as { ratingValue: number; reviewCount: number; sourceUrl: string } | null,
  verifiedPressArticles: [] as VerifiedPressArticle[],
  editorialMethodology:
    "Every rent, security deposit, lock-in rule, food inclusion, and campus distance published on Reforbs Living is synced directly from our internal property operations registry and verified before updates.",
  lastSiteUpdated: "2026-11-11",
};
