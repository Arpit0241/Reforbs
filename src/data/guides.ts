import type { FaqSchemaInput } from "@/lib/schema";

export interface LocalGuideComparisonRow {
  feature: string;
  col1: string;
  col2: string;
  col3: string;
}

export interface LocalGuidePage {
  slug: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  h1: string;
  heroSubtitle: string;
  answerFirstSummary: string;
  propertyIds: string[];
  comparisonTable?: {
    heading: string;
    headers: [string, string, string, string];
    rows: LocalGuideComparisonRow[];
  };
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  faqs: FaqSchemaInput[];
  relatedGuideSlugs: string[];
  ctaText: string;
  lastUpdated: string;
}

export const LOCAL_GUIDES: LocalGuidePage[] = [
  {
    slug: "/student-housing-near-symbiosis-law-school-pune",
    navLabel: "Student Housing Near SLS Pune",
    eyebrow: "Symbiosis Law School Guide",
    title: "Student Housing Near Symbiosis Law School Pune | Reforbs",
    description:
      "Reforbs Shubh Gateway sits 150m opposite Symbiosis Law School, Viman Nagar. Girls Twin ₹25k & Boys Twin ₹27k with meals, laundry & AC.",
    h1: "Student Housing Near Symbiosis Law School (SLS) Pune",
    heroSubtitle:
      "Walk to morning lectures in 2 minutes. Dedicated student residences on New Airport Road & Symbiosis Road with daily meals, laundry, and transparent direct-host pricing.",
    answerFirstSummary:
      "Shubh Gateway by Reforbs Living sits directly opposite Symbiosis Law School (SLS) Gate—just 150 metres on New Airport Road, Viman Nagar, Pune 411032. Girls' Twin sharing is ₹25,000/month and Boys' Twin sharing is ₹27,000/month (refundable deposit ₹40,000), including breakfast, dinner, twice-weekly laundry, AC, attached washrooms, and Wi-Fi on an annual academic term.",
    propertyIds: ["shubh-gateway", "brindavan", "nirvana"],
    sections: [
      {
        heading: "Why SLS Students Choose Shubh Gateway Opposite Campus Gate",
        paragraphs: [
          "Unlike hostels located kilometres away in outer lanes requiring daily auto commutes, Shubh Gateway sits 150 metres directly across from the SLS Viman Nagar gate. Across four gated-society towers (A, B, C, and D) with Boys-only and Girls-only wings, students get structured academic focus without losing comfort.",
          "Every room includes air conditioning, an attached ensuite washroom, high-speed Wi-Fi, daily housekeeping, breakfast and dinner, plus twice-weekly laundry (up to 5 kg). Students looking for SCMS/SID proximity 1.2 km away can also compare Brindavan on Symbiosis Road.",
        ],
      },
      {
        heading: "Rules, Lock-In & Parent-Trust Transparency",
        paragraphs: [
          "Shubh Gateway follows an annual academic lock-in period aligned with the SLS academic calendar, payable in annual or semi-annual fee instalments. For complete family peace of mind, Boys and Girls towers are strictly gender-segregated and opposite-gender visitors are not allowed.",
          "Heavy appliances (AC, geyser) are sub-metered at ₹11/unit. There is zero brokerage and zero pushy sales follow-up.",
        ],
      },
    ],
    faqs: [
      {
        question: "How far is Shubh Gateway from Symbiosis Law School (SLS) Pune?",
        answer: "Shubh Gateway is 150 metres (a 1–2 minute walk) directly opposite the SLS Campus Gate on New Airport Road, Viman Nagar.",
      },
      {
        question: "What is the monthly rent and deposit near SLS Viman Nagar?",
        answer: "Girls' Twin sharing is ₹25,000/month and Boys' Twin sharing is ₹27,000/month, with a refundable ₹40,000 security deposit.",
      },
      {
        question: "Are meals and laundry included at Shubh Gateway?",
        answer: "Yes. Daily breakfast and dinner plus twice-weekly laundry (up to 5 kg) are included in the listed monthly rent.",
      },
    ],
    relatedGuideSlugs: [
      "/student-housing-near-scms-sid-viman-nagar-pune",
      "/coliving-viman-nagar-pune",
      "/pg-vs-coliving-vs-hostel-pune",
    ],
    ctaText: "Schedule an SLS Campus Walkthrough",
    lastUpdated: "2026-11-11",
  },
  {
    slug: "/student-housing-near-scms-sid-viman-nagar-pune",
    navLabel: "Student Housing Near SCMS & SID",
    eyebrow: "Viman Nagar Campus Guide",
    title: "Student Housing Near SCMS & SID Viman Nagar | Reforbs",
    description:
      "Walk 150m to Symbiosis SCMS & SID from Brindavan on Symbiosis Rd, Sakore Nagar, Pune. Twin ₹27k & Private ₹32k with all 3 meals & AC.",
    h1: "Student Housing Near SCMS & SID Viman Nagar, Pune",
    heroSubtitle:
      "Boutique student stays in Sakore Nagar and New Airport Road — 150 metres to Symbiosis Centre for Management Studies (SCMS) & Symbiosis Institute of Design (SID).",
    answerFirstSummary:
      "Brindavan by Reforbs Living sits 150 metres from SCMS and SID behind Dr Lal Path Lab on Symbiosis Road, Sakore Nagar, Viman Nagar, Pune 411014. Monthly rent is ₹27,000 for Twin sharing and ₹32,000 for Private rooms (₹30,000 refundable deposit), covering all three daily meals, AC, attached washrooms, Wi-Fi, and twice-weekly laundry on an annual academic term.",
    propertyIds: ["brindavan", "shubh-gateway", "moksha"],
    sections: [
      {
        heading: "Built for Design, Management & Law Students in Sakore Nagar",
        paragraphs: [
          "SID and SCMS schedules mean studio critiques, group projects, and odd-hour deadlines. Living 150 metres away on Symbiosis Road at Brindavan eliminates daily transit fatigue while putting all three meals (breakfast, lunch, and dinner) and housekeeping on autopilot.",
          "With bohemian warm interiors, natural lighting, high-speed Wi-Fi, and laundry included twice weekly, students have both quiet study space and Viman Nagar cafes a few minutes away.",
        ],
      },
      {
        heading: "Comparing Brindavan (SCMS/SID) vs Shubh Gateway (SLS)",
        paragraphs: [
          "Brindavan includes all 3 meals daily and offers both Twin (₹27,000) and Private (₹32,000) rooms right next to SCMS/SID. Shubh Gateway specializes in SLS proximity (150m from SLS gate) with gender-segregated towers and breakfast + dinner at ₹25,000–₹27,000.",
        ],
      },
    ],
    faqs: [
      {
        question: "How close is Brindavan to SCMS and SID Viman Nagar?",
        answer: "Brindavan is approximately 150 metres (a 2-minute walk) from Symbiosis Viman Nagar Campus (SCMS & SID) on Symbiosis Road, Sakore Nagar.",
      },
      {
        question: "Does Brindavan include all three meals in the rent?",
        answer: "Yes. Listed rent (₹27,000 Twin / ₹32,000 Private) includes all 3 daily meals plus twice-weekly laundry and daily housekeeping.",
      },
      {
        question: "Can seniors seeking zero lock-in stay in Viman Nagar Co-Living instead?",
        answer: "Yes. Working professionals or seniors wanting zero lock-in and private kitchens can explore Nirvana, Moksha, and Vipasna in adjacent Sanjay Park.",
      },
    ],
    relatedGuideSlugs: [
      "/student-housing-near-symbiosis-law-school-pune",
      "/coliving-viman-nagar-pune",
      "/coliving-cost-in-pune",
    ],
    ctaText: "Book a Free Visit Near SCMS / SID",
    lastUpdated: "2026-11-11",
  },
  {
    slug: "/student-housing-near-symbiosis-lavale-pune",
    navLabel: "Student Housing Near Symbiosis Lavale",
    eyebrow: "Lavale & ISBM Hill Campus",
    title: "Student Housing Near Symbiosis Lavale Pune | Reforbs",
    description:
      "Reforbs Vairagya sits 500m from Symbiosis University Lavale & ISBM Pune. Triple ₹15,000 & Twin ₹17,000/month with daily mess meals included.",
    h1: "Student Housing Near Symbiosis University Lavale & ISBM Pune",
    heroSubtitle:
      "Scenic, hill-view student residences 500 metres from Symbiosis International University Lavale Campus and ISBM — with running mess meals included from ₹15,000/month.",
    answerFirstSummary:
      "Vairagya by Reforbs Living is located at Hill View Society, 500 metres from Symbiosis University (SIU) and ISBM on Sus–Pashan Road, Lavale, Pune 412115. Triple sharing is ₹15,000/month and Twin sharing is ₹17,000/month (₹20,000 refundable deposit), with daily breakfast & dinner in the running mess, attached washrooms, Wi-Fi, and housekeeping included on an annual academic term.",
    propertyIds: ["vairagya", "brindavan", "shubh-gateway"],
    sections: [
      {
        heading: "Affordability & Walkability on the Lavale Hilltop",
        paragraphs: [
          "Students at SIU Lavale (SIBM, SIT, SIMC, SSBF) and ISBM often struggle with isolated PGs down the hill that force long bus rides. Vairagya puts you 500 metres from campus gates at Reforbs' most accessible rate — ₹15,000/month for Triple sharing and ₹17,000/month for Twin sharing.",
          "With natural ventilation and hillside climate, Vairagya features non-AC rooms with attached washrooms, hot-water geysers, balcony spaces, high-speed internet, and a dedicated running mess included in rent.",
        ],
      },
      {
        heading: "Key Terms for Vairagya Residents",
        paragraphs: [
          "Security deposit is ₹20,000 (refundable within 20 days of exit subject to terms). An annual academic lock-in applies, opposite-gender visitors are not allowed, and residents pay ₹0 brokerage when booking directly with Reforbs.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the starting monthly rent at Vairagya near Symbiosis Lavale?",
        answer: "Triple sharing is ₹15,000/month and Twin sharing is ₹17,000/month with running mess breakfast and dinner included.",
      },
      {
        question: "Does Vairagya have air conditioning?",
        answer: "No. Located on the breezy Lavale hilltops at Hill View Society, Vairagya rooms are naturally ventilated non-AC rooms with attached washrooms.",
      },
      {
        question: "How far is Vairagya from ISBM and Symbiosis Lavale campus?",
        answer: "Vairagya is approximately 500 metres (around a 5-minute walk) from both Symbiosis University Lavale and ISBM.",
      },
    ],
    relatedGuideSlugs: [
      "/student-housing-near-symbiosis-law-school-pune",
      "/pg-vs-coliving-vs-hostel-pune",
      "/coliving-cost-in-pune",
    ],
    ctaText: "Schedule a Vairagya Lavale Tour",
    lastUpdated: "2026-11-11",
  },
  {
    slug: "/coliving-viman-nagar-pune",
    navLabel: "Co-Living in Viman Nagar Pune",
    eyebrow: "Viman Nagar & Sanjay Park",
    title: "Co-Living in Viman Nagar Pune, Zero Lock-In | Reforbs",
    description:
      "Furnished co-living in Sanjay Park near Viman Nagar, Pune. Zero lock-in, private kitchens, couple-friendly & daily meals from ₹17,000/month.",
    h1: "Co-Living Spaces in & Around Viman Nagar, Pune",
    heroSubtitle:
      "Quiet residential lanes in Sanjay Park just 1.5 km from Viman Nagar cafes, Phoenix Marketcity & Pune Airport — built for working professionals and couples with zero lock-in.",
    answerFirstSummary:
      "Reforbs Living operates three public Co-Living residences—Nirvana, Moksha, and Vipasna—in Sanjay Park directly adjacent to Viman Nagar, Pune (~1.5 km from Viman Nagar center and Pune Airport). Twin sharing starts at ₹17,000/month and private rooms / 1RK studios range from ₹24,000 to ₹29,000/month with a 1-month refundable deposit, daily meals included, couple-friendly rules, and zero lock-in.",
    propertyIds: ["nirvana", "moksha", "vipasna"],
    sections: [
      {
        heading: "Three Distinct Co-Living Styles 1.5 km from Viman Nagar Hub",
        paragraphs: [
          "Rather than squeezing tiny beds into noisy highway buildings, Reforbs places its Co-Living homes inside leafy residential lanes of Sanjay Park right next to Viman Nagar:",
          "1) Nirvana: Independent 1RKs with attached private kitchens inside every unit (Twin ₹17,000 | Private ₹29,000). 2) Moksha: Boutique 3BHK layouts capped at 4 residents per floor (Twin ₹17,000 | Private ₹24,000). 3) Vipasna: Hotel-style ensuite rooms capped at 4 rooms per floor with shared floor kitchen (Twin ₹17,000 | Private ₹27,000).",
        ],
      },
      {
        heading: "Zero Lock-In Flexibility for IT & Aviation Professionals",
        paragraphs: [
          "Every Co-Living residence has zero lock-in period—residents only provide a standard 30-day calendar notice by the 5th of the month. The ₹1,000 move-out charge is waived after 6 months of stay.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does Co-Living near Viman Nagar cost at Reforbs?",
        answer: "Twin sharing is ₹17,000/month across Nirvana, Moksha, and Vipasna. Private rooms start at ₹24,000 (Moksha), ₹27,000 (Vipasna), and ₹29,000 (Nirvana 1RK with private kitchen).",
      },
      {
        question: "Is there any lock-in period in Reforbs Viman Nagar Co-Living?",
        answer: "No. Co-Living residences carry zero lock-in with a standard 30-day calendar notice served by the 5th of the month.",
      },
      {
        question: "Are Park Island, Pillar Homes, and Suyog Enclave open for public booking in Viman Nagar?",
        answer: "No. Those three properties operate strictly as contracted corporate guesthouses. Public retail guests book Nirvana, Moksha, or Vipasna.",
      },
    ],
    relatedGuideSlugs: [
      "/coliving-sanjay-park-yerwada-pune",
      "/couple-friendly-coliving-pune",
      "/coliving-with-private-kitchen-pune",
    ],
    ctaText: "Tour Viman Nagar Co-Living",
    lastUpdated: "2026-11-11",
  },
  {
    slug: "/coliving-sanjay-park-yerwada-pune",
    navLabel: "Co-Living in Sanjay Park & Yerwada",
    eyebrow: "Sanjay Park Micro-Market",
    title: "Co-Living in Sanjay Park & Yerwada Pune | Reforbs",
    description:
      "Verified co-living in Sanjay Park Lanes 2A & 3 near Yerwada & Pune Airport: Nirvana, Moksha & Vipasna from ₹17k/mo. Zero lock-in & AC rooms.",
    h1: "Co-Living in Sanjay Park & Yerwada, Pune",
    heroSubtitle:
      "Lane 2A & Lane 3 residences in Sanjay Park — peaceful residential living bordering Viman Nagar, Yerwada IT corridors, and Pune International Airport.",
    answerFirstSummary:
      "Sanjay Park is Reforbs Living's flagship Co-Living neighbourhood in Pune. Nirvana (Plot 34, Lane 2A), Moksha (Plot 61, Lane 2A), and Vipasna (Plot 36, Lane 3) offer Twin rooms at ₹17,000/month and Private rooms from ₹24,000 to ₹29,000/month with daily meals, AC, attached washrooms, Wi-Fi, couple-friendly freedom, and zero lock-in.",
    propertyIds: ["nirvana", "moksha", "vipasna"],
    sections: [
      {
        heading: "Why Working Professionals Prefer Sanjay Park Over Crowded Main Roads",
        paragraphs: [
          "Bordering both Viman Nagar and Yerwada, Sanjay Park offers tree-lined lanes without highway traffic noise while keeping Pune Airport, Business Bay / Commerzone Yerwada, and Phoenix Marketcity within effortless daily reach.",
          "With Reforbs operating three adjacent buildings (Nirvana, Moksha, and Vipasna) within walking distance of each other, residents join a built-in community for rooftop yoga, festival nights, and peer mixers while choosing the exact room layout they want.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which Reforbs buildings are in Sanjay Park?",
        answer: "Nirvana (Plot 34, Lane 2A), Moksha (Plot 61, Lane 2A), and Vipasna (Plot 36, Lane 3) are all situated in Sanjay Park, Pune 411032.",
      },
      {
        question: "Are all Sanjay Park residences air-conditioned with attached bathrooms?",
        answer: "Yes. All three Sanjay Park Co-Living properties include split ACs and attached ensuite washrooms in every twin and private unit.",
      },
    ],
    relatedGuideSlugs: [
      "/coliving-near-airport-pune",
      "/coliving-near-commerzone-it-park-pune",
      "/coliving-with-private-kitchen-pune",
    ],
    ctaText: "Schedule a Sanjay Park Visit",
    lastUpdated: "2026-11-11",
  },
  {
    slug: "/couple-friendly-coliving-pune",
    navLabel: "Couple-Friendly Co-Living in Pune",
    eyebrow: "Zero Moral Policing",
    title: "Couple-Friendly Co-Living in Pune, Zero Lock-In | Reforbs",
    description:
      "Private couple-friendly 1RK & ensuite co-living in Sanjay Park near Viman Nagar, Pune. Zero moral policing, zero lock-in, daily meals included.",
    h1: "Couple-Friendly Co-Living in Pune — Zero Moral Policing",
    heroSubtitle:
      "Respectful, independent living for couples and young professionals in Sanjay Park near Viman Nagar. Private 1RK kitchens or ensuite suites with zero lock-in.",
    answerFirstSummary:
      "Reforbs Co-Living properties—Nirvana (private 1RKs with attached kitchen, ₹29,000 Private / ₹17,000 Twin), Moksha (3BHK private rooms, ₹24,000), and Vipasna (hotel-style ensuite private rooms, ₹27,000)—are couple-friendly residences in Sanjay Park, Pune with zero moral policing and zero lock-in. Note that Reforbs' Student Housing properties (Shubh Gateway, Brindavan, Vairagya) follow stricter campus discipline rules.",
    propertyIds: ["nirvana", "vipasna", "moksha"],
    sections: [
      {
        heading: "Honest Distinction: Co-Living Freedom vs Student Housing Policy",
        paragraphs: [
          "At Reforbs Co-Living (Nirvana, Moksha, and Vipasna), we treat adult professionals and couples with maturity: mutual compatibility, clean community norms, zero moral policing, and full privacy in private rooms or 1RK studios.",
          "Meanwhile, parents and students looking for academic housing opposite Symbiosis can rest assured that Shubh Gateway, Brindavan, and Vairagya enforce separate student visitor policies and gated-tower rules.",
        ],
      },
      {
        heading: "Best Couple Pick: Nirvana Private 1RK vs Vipasna Private Ensuite",
        paragraphs: [
          "Couples who love cooking independently in a self-contained flat choose Nirvana's private 1RK units (₹29,000/month, attached private kitchen & washroom). Those who prefer hotel-style suites with a shared floor kitchen at ₹27,000 choose Vipasna, and budget-minded residents choose Moksha's ₹24,000 private room.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which Reforbs residences in Pune are couple-friendly?",
        answer: "All three Co-Living properties in Sanjay Park—Nirvana, Moksha, and Vipasna—are explicitly couple-friendly with zero moral policing.",
      },
      {
        question: "Are Student Housing buildings also couple-friendly?",
        answer: "No. Student Housing properties (Shubh Gateway, Brindavan, Vairagya) are structured for Symbiosis/ISBM students with campus safety norms; Shubh Gateway has strictly gender-segregated towers.",
      },
      {
        question: "What deposit is required for couples in Co-Living?",
        answer: "The refundable security deposit equals 1 month's rent (e.g., ₹24,000 at Moksha, ₹27,000 at Vipasna, or ₹29,000 at Nirvana Private 1RK), refunded within 7 working days subject to 30 days' notice.",
      },
    ],
    relatedGuideSlugs: [
      "/coliving-with-private-kitchen-pune",
      "/coliving-viman-nagar-pune",
      "/pg-vs-coliving-vs-hostel-pune",
    ],
    ctaText: "Book a Private Room Tour",
    lastUpdated: "2026-11-11",
  },
  {
    slug: "/coliving-with-private-kitchen-pune",
    navLabel: "Co-Living With Private Kitchen",
    eyebrow: "24/7 Cooking Independence",
    title: "Co-Living With Private Kitchen in Pune | Reforbs Living",
    description:
      "Self-contained 1RK co-living flats with attached private kitchens at Reforbs Nirvana in Sanjay Park, Pune. 24/7 cooking & zero lock-in.",
    h1: "Co-Living With Private & Floor Kitchens in Pune",
    heroSubtitle:
      "Cook midnight pasta, brew filter coffee, or customize meal prep without leaving your unit — featuring attached private kitchens in every 1RK at Reforbs Nirvana.",
    answerFirstSummary:
      "Reforbs Nirvana in Sanjay Park (1.5 km from Viman Nagar, Pune) provides an attached private kitchen inside every independent 1RK studio (Twin ₹17,000/month | Private ₹29,000/month). For lower-density apartment or floor-level kitchen setups, Moksha offers comfort 3BHK shared kitchens (from ₹17,000 Twin / ₹24,000 Private) and Vipasna provides a shared kitchen per 4-room floor (from ₹17,000 Twin / ₹27,000 Private), all with daily meals included and 24/7 cooking access.",
    propertyIds: ["nirvana", "moksha", "vipasna"],
    sections: [
      {
        heading: "Why a Private Kitchen Matters Inside Co-Living",
        paragraphs: [
          "Standard PGs ban cooking appliances or confine 40 tenants to a cramped pantry. Nirvana gives every 1RK flat its own kitchen counter alongside Reforbs' daily meal arrangements, inverter backup, AC, and daily housekeeping.",
          "Residents enjoy complete dietary autonomy—high-protein fitness prep, late-night snacks, or hosting weekend dinner for friends—while keeping zero lock-in flexibility.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which Reforbs property has a private kitchen inside each unit?",
        answer: "Nirvana in Sanjay Park features attached private kitchens inside every independent 1RK unit (Twin ₹17,000/month, Private 1RK ₹29,000/month).",
      },
      {
        question: "Are daily meals still included if my unit has a kitchen?",
        answer: "Yes. Listed Co-Living rents include daily meal arrangements plus 24/7 private/floor kitchen access, and electricity for heavy appliances is sub-metered at ₹11/unit.",
      },
    ],
    relatedGuideSlugs: [
      "/couple-friendly-coliving-pune",
      "/coliving-viman-nagar-pune",
      "/coliving-cost-in-pune",
    ],
    ctaText: "Inspect Nirvana 1RK Kitchens",
    lastUpdated: "2026-11-11",
  },
  {
    slug: "/coliving-near-airport-pune",
    navLabel: "Co-Living Near Pune Airport",
    eyebrow: "Airport Road & Lohegaon Border",
    title: "Co-Living Near Pune International Airport | Reforbs",
    description:
      "Stay 1 to 1.5 km from Pune International Airport at Reforbs Nirvana, Moksha & Vipasna in Sanjay Park. Zero lock-in, AC, meals & Wi-Fi.",
    h1: "Co-Living & Student Stays Near Pune International Airport",
    heroSubtitle:
      "Quick access to Pune International Airport (PNQ) from Sanjay Park and New Airport Road, Viman Nagar — ideal for aviation crew, consultants, and frequent flyers.",
    answerFirstSummary:
      "Reforbs Living operates three zero-lock-in Co-Living residences in Sanjay Park—Nirvana, Moksha, and Vipasna (~1–1.5 km from Pune International Airport)—plus Shubh Gateway Student Housing on New Airport Road (~1.5 km from PNQ). Monthly Co-Living rents start at ₹17,000 (Twin) and ₹24,000–₹29,000 (Private) with daily meals, AC, housekeeping, and high-speed Wi-Fi included.",
    propertyIds: ["nirvana", "moksha", "vipasna", "shubh-gateway"],
    sections: [
      {
        heading: "Designed for Aviation Teams, Consultants & Frequent Flyers",
        paragraphs: [
          "Quiet residential streets in Sanjay Park sit approximately 1 to 1.5 km from Pune International Airport terminals, saving early-morning flyers from long cross-city cab rides.",
          "Zero lock-in period with a 30-day notice period makes Reforbs Co-Living effortless for project consultants, airline crew rotations, and hybrid corporate travelers.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which Reforbs residences are closest to Pune Airport?",
        answer: "Nirvana, Moksha, and Vipasna in Sanjay Park (~1 to 1.5 km from Pune Airport) and Shubh Gateway on New Airport Road (~1.5 km).",
      },
      {
        question: "Can project consultants stay short-term without a 12-month lock-in?",
        answer: "Yes. All Sanjay Park Co-Living properties have zero lock-in period—just a standard 30-day calendar notice served by the 5th of the month.",
      },
    ],
    relatedGuideSlugs: [
      "/coliving-sanjay-park-yerwada-pune",
      "/coliving-near-commerzone-it-park-pune",
      "/coliving-viman-nagar-pune",
    ],
    ctaText: "Schedule an Airport-Corridor Visit",
    lastUpdated: "2026-11-11",
  },
  {
    slug: "/coliving-near-commerzone-it-park-pune",
    navLabel: "Co-Living Near Commerzone & EON",
    eyebrow: "East Pune Tech Corridor",
    title: "Co-Living Near Commerzone Yerwada & IT Parks Pune | Reforbs",
    description:
      "Furnished co-living in Sanjay Park serving Commerzone Yerwada, Business Bay, Viman Nagar & Kharadi IT commuters. Zero lock-in from ₹17k/mo.",
    h1: "Co-Living Near Commerzone Yerwada & East Pune IT Parks",
    heroSubtitle:
      "Work in Yerwada, Commerzone, Business Bay, Viman Nagar, or EON IT Park Kharadi while living in peaceful, zero-lock-in Co-Living homes at Sanjay Park.",
    answerFirstSummary:
      "Located in the Sanjay Park – Viman Nagar – Yerwada corridor in East Pune, Reforbs Nirvana, Moksha, and Vipasna give IT and finance professionals quick access to Commerzone Yerwada, Business Bay, Bajaj Finserv Viman Nagar, and Kharadi/Kalyani Nagar tech hubs. Rents start at ₹17,000/month (Twin) and ₹24,000–₹29,000/month (Private) with zero lock-in, high-speed fiber Wi-Fi, AC, and daily meals.",
    propertyIds: ["moksha", "nirvana", "vipasna"],
    sections: [
      {
        heading: "Remote-Work & Hybrid-Office Ready Infrastructure",
        paragraphs: [
          "Whether commuting to Commerzone Yerwada / Business Bay or working remote days from your suite, Moksha (max 4 per floor 3BHK), Nirvana (1RK studios), and Vipasna (4 rooms per floor) combine high-speed Wi-Fi, study tables, inverter backup, and peaceful residential lanes.",
          "With daily housekeeping, twice-weekly washroom sanitization, and included meals + private/floor kitchens, you spend weekends recharging with the community instead of managing domestic chores.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which Reforbs residences fit professionals working in Yerwada or Viman Nagar IT parks?",
        answer: "Moksha, Nirvana, and Vipasna in Sanjay Park sit directly along the Viman Nagar–Yerwada corridor, making commutes to Commerzone, Business Bay, and Viman Nagar hubs straightforward.",
      },
      {
        question: "What if my company switches my city or office?",
        answer: "All three Co-Living properties carry zero lock-in, so you only serve a 30-day calendar notice by the 5th of the month.",
      },
    ],
    relatedGuideSlugs: [
      "/coliving-sanjay-park-yerwada-pune",
      "/coliving-viman-nagar-pune",
      "/coliving-cost-in-pune",
    ],
    ctaText: "Tour East Pune Co-Living",
    lastUpdated: "2026-11-11",
  },
  {
    slug: "/pg-vs-coliving-vs-hostel-pune",
    navLabel: "PG vs Co-Living vs Hostel Guide",
    eyebrow: "Accommodation Comparison",
    title: "PG vs Co-Living vs Student Hostel in Pune | Reforbs",
    description:
      "Compare Co-Living, Student Housing, traditional PGs & hostels in Pune across lock-in, private kitchens, meals, visitor rules & total cost.",
    h1: "PG vs Co-Living vs Student Housing in Pune: What Fits You?",
    heroSubtitle:
      "An honest side-by-side comparison of traditional hostels, local PGs, Reforbs Co-Living (Sanjay Park), and Reforbs Student Housing (Symbiosis campuses).",
    answerFirstSummary:
      "In Pune, traditional hostels enforce curfews and shared dorms, while local PGs vary widely in hygiene and hidden rules. Reforbs solves both needs through two clear categories: Co-Living (Nirvana, Moksha, Vipasna in Sanjay Park — zero lock-in, couple-friendly, private/floor kitchens, ₹17k–₹29k) for professionals, and Student Housing (Shubh Gateway, Brindavan, Vairagya near Symbiosis — annual academic term, meals & laundry, ₹15k–₹32k) for students.",
    propertyIds: ["nirvana", "shubh-gateway", "brindavan"],
    comparisonTable: {
      heading: "Side-by-Side Comparison Across Living Models",
      headers: ["Factor", "Reforbs Co-Living", "Reforbs Student Housing", "Traditional Hostel / Local PG"],
      rows: [
        {
          feature: "Lock-In Period",
          col1: "Zero lock-in (30 days calendar notice)",
          col2: "Annual academic lock-in (college calendar)",
          col3: "Often 6–11 months rigid or unclear",
        },
        {
          feature: "Monthly Rent Range",
          col1: "₹17,000 Twin | ₹24,000–₹29,000 Private",
          col2: "₹15,000 Triple | ₹17,000–₹32,000 Twin/Private",
          col3: "Varies; brokerage & extra fees common",
        },
        {
          feature: "Kitchen & Food",
          col1: "Meals included + private 1RK / floor kitchens (24/7)",
          col2: "Daily meals included (2 or 3 meals by property)",
          col3: "Canteen timings only or no self-cooking",
        },
        {
          feature: "Visitor & Lifestyle",
          col1: "Couple-friendly, zero moral policing",
          col2: "Parent-trusted campus discipline / segregated towers (SLS)",
          col3: "Strict curfews & gate-closing fines",
        },
        {
          feature: "Brokerage",
          col1: "₹0 (Direct host booking)",
          col2: "₹0 (Direct host booking)",
          col3: "Often 1 month brokerage via agents",
        },
      ],
    },
    sections: [
      {
        heading: "How to Choose Between Reforbs Co-Living and Student Housing",
        paragraphs: [
          "If you are a first-year student at Symbiosis Law School, SCMS, SID, or SIU Lavale whose family wants walking-distance safety, structured academic terms, daily meals, and laundry included, Student Housing (Shubh Gateway, Brindavan, Vairagya) is tailor-made.",
          "If you are a working professional, remote creator, entrepreneur, or couple prioritizing zero lock-in, couple-friendly privacy, and a private 1RK kitchen, choose Sanjay Park Co-Living (Nirvana, Moksha, Vipasna).",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I pay brokerage at Reforbs Living?",
        answer: "No. Reforbs charges zero brokerage—every booking happens directly with our Pune host team.",
      },
      {
        question: "Why does Reforbs separate Co-Living and Student Housing policies?",
        answer: "Working professionals and couples need zero lock-in and private cooking freedom, whereas university students and parents typically prefer campus-adjacent academic terms with all meals, laundry, and structured tower safety.",
      },
    ],
    relatedGuideSlugs: [
      "/coliving-cost-in-pune",
      "/couple-friendly-coliving-pune",
      "/student-housing-near-symbiosis-law-school-pune",
    ],
    ctaText: "Compare All Reforbs Pune Properties",
    lastUpdated: "2026-11-11",
  },
  {
    slug: "/coliving-cost-in-pune",
    navLabel: "Co-Living & Hostel Cost in Pune",
    eyebrow: "Transparent Pricing Breakdown",
    title: "Co-Living & Student Housing Cost in Pune | Reforbs Living",
    description:
      "Full 2026 monthly rent, deposit, electricity (₹11/unit), food & exit fee breakdown for Reforbs residences in Viman Nagar, Sanjay Park & Lavale.",
    h1: "Co-Living & Student Housing Cost in Pune: Full Breakdown",
    heroSubtitle:
      "Zero hidden brokerage. Compare verified monthly rents, refundable security deposits, sub-metered electricity rates, and move-out terms across all 6 public Reforbs properties.",
    answerFirstSummary:
      "Public monthly rents at Reforbs Living in Pune span ₹15,000 to ₹32,000 per month with ₹0 brokerage. Co-Living in Sanjay Park (Nirvana, Moksha, Vipasna) costs ₹17,000/month for Twin sharing and ₹24,000–₹29,000/month for Private rooms with a 1-month refundable deposit. Student Housing starts at ₹15,000/month in Lavale (Vairagya) and ₹25,000–₹32,000/month in Viman Nagar (Shubh Gateway, Brindavan).",
    propertyIds: ["moksha", "nirvana", "vipasna", "shubh-gateway", "brindavan", "vairagya"],
    comparisonTable: {
      heading: "Verified Rent & Deposit Matrix Across All 6 Public Residences",
      headers: ["Property & Locality", "Monthly Rent (Twin / Triple)", "Monthly Rent (Private)", "Refundable Deposit & Notice"],
      rows: [
        {
          feature: "Nirvana (Sanjay Park • Co-Living)",
          col1: "₹17,000 / mo (Twin 1RK)",
          col2: "₹29,000 / mo (Private 1RK + Kitchen)",
          col3: "1 month deposit • Zero lock-in (30d notice)",
        },
        {
          feature: "Moksha (Sanjay Park • Co-Living)",
          col1: "₹17,000 / mo (Twin)",
          col2: "₹24,000 / mo (Private)",
          col3: "1 month deposit • Zero lock-in (30d notice)",
        },
        {
          feature: "Vipasna (Sanjay Park • Co-Living)",
          col1: "₹17,000 / mo (Twin Ensuite)",
          col2: "₹27,000 / mo (Private Ensuite)",
          col3: "1 month deposit • Zero lock-in (30d notice)",
        },
        {
          feature: "Shubh Gateway (Opp. SLS • Student)",
          col1: "₹25k Girls Twin | ₹27k Boys Twin",
          col2: "N/A (Twin sharing towers)",
          col3: "₹40,000 deposit • Annual lock-in",
        },
        {
          feature: "Brindavan (Symbiosis Rd • Student)",
          col1: "₹27,000 / mo (Twin)",
          col2: "₹32,000 / mo (Private)",
          col3: "₹30,000 deposit • Annual lock-in",
        },
        {
          feature: "Vairagya (Lavale / ISBM • Student)",
          col1: "₹15,000 Triple | ₹17,000 Twin",
          col2: "N/A",
          col3: "₹20,000 deposit • Annual lock-in",
        },
      ],
    },
    sections: [
      {
        heading: "What Is Included vs Sub-Metered Extra",
        paragraphs: [
          "Included in your listed monthly rent: furnished room furniture, attached washroom, daily housekeeping, water charges, Wi-Fi, and daily meal plans (plus private/floor kitchens in Co-Living and twice-weekly laundry in Viman Nagar Student Housing).",
          "Sub-metered electricity: heavy appliances (air conditioning, geysers, inductions, refrigerators) are metered transparently at ₹11 per unit (or applicable government tariff slabs). No hidden maintenance fees or surprise water charges.",
        ],
      },
      {
        heading: "Move-Out & Agreement Fees Explained Upfront",
        paragraphs: [
          "In Co-Living, exit charges are ₹1,000 (completely waived if you stay longer than 6 months), and security deposits are refunded within 7 working days of checkout after 30 days' calendar notice served by the 5th of the month.",
          "In Student Housing, a ₹5,000 move-out charge and ₹800–₹1,600 one-time agreement charge apply per academic housing terms.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are there any brokerage or hidden maintenance charges?",
        answer: "No. There is zero brokerage, zero monthly maintenance fee, and zero water bill fee.",
      },
      {
        question: "How is electricity billed across Reforbs residences?",
        answer: "Heavy appliances (AC, geyser, kitchen induction, fridge) are sub-metered at ₹11 per unit so residents pay only for actual consumption.",
      },
    ],
    relatedGuideSlugs: [
      "/pg-vs-coliving-vs-hostel-pune",
      "/coliving-viman-nagar-pune",
      "/student-housing-near-symbiosis-lavale-pune",
    ],
    ctaText: "Schedule a Zero-Pressure Tour",
    lastUpdated: "2026-11-11",
  },
];

export function getLocalGuideBySlug(slug: string): LocalGuidePage | undefined {
  const normalized = slug.startsWith("/") ? slug : `/${slug}`;
  return LOCAL_GUIDES.find((g) => g.slug === normalized);
}
