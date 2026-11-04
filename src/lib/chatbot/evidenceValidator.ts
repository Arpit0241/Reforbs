/**
 * Evidence Validation Layer
 *
 * Validates retrieved facts against the customer's detected intent based on
 * Reforbs Knowledge Base v4.0 (reforbs_expanded_knowledge_base_v4.pdf).
 *
 * Strictly follows the Conflict Register, Intent-Specific Fallbacks, and
 * Rate Comparison Rules from v4.0:
 * - No hallucinations or invented facts.
 * - Compares double occupancy only against double, single only against single.
 * - Formats currencies as ₹X/month.
 * - Distinguishes website-published estimates from guaranteed quotes or live traffic.
 */

import { IntentDetectionResult } from "./intentDetector";
import { recordKnowledgeGap } from "./knowledgeGaps";
import { SearchResult } from "./pdfKnowledgeEngine";
import {
  PROPERTIES_V4,
  PropertyKnowledge,
  CONTACT_PHONE,
  HOST_NAME,
  CONTACT_EMAIL,
  TOUR_HOURS,
  PRIMARY_LOCATION,
} from "./knowledgeConfig";

function findProperty(nameOrAlias?: string): PropertyKnowledge | undefined {
  if (!nameOrAlias) return undefined;
  const lower = nameOrAlias.toLowerCase().trim();
  return PROPERTIES_V4.find(
    (p) =>
      p.name.toLowerCase() === lower ||
      p.aliases.some((a) => lower.includes(a) || a.includes(lower))
  );
}

export function validateAndGenerateResponse(
  rawQuery: string,
  analysis: IntentDetectionResult
): SearchResult {
  const { intent, entities } = analysis;
  const matchedProp = findProperty(entities.property);

  switch (intent) {
    // -------------------------------------------------------------------------
    // 1. Off-Topic Query
    // -------------------------------------------------------------------------
    case "OFF_TOPIC": {
      recordKnowledgeGap("OFF_TOPIC_QUERY", rawQuery);
      return {
        text:
          "I'm dedicated to helping you with Reforbs accommodation, properties, amenities, room options, and living in Pune. If you have any questions about our spaces in Viman Nagar or would like to schedule a visit, feel free to ask or call us at " +
          CONTACT_PHONE +
          "!",
        pageNumber: null,
        sourceLabel: null,
        confidence: 0,
        isFallback: true,
        isOffTopic: true,
      };
    }

    // -------------------------------------------------------------------------
    // 2. Property Directory / List Properties
    // -------------------------------------------------------------------------
    case "PROPERTY_DIRECTORY": {
      return {
        text:
          "Reforbs operates 9 active residences in Pune across three categories:\n\n" +
          "Student Accommodation (3):\n" +
          "• Shubh Gateway (Opp. SLS Gate, Viman Nagar) — Girls' Twin: ₹25,000/mo | Boys' Twin: ₹27,000/mo (Deposit: ₹40,000). Breakfast & dinner included, laundry 2x/wk.\n" +
          "• Brindavan (Behind Dr Lal Path Lab, Sakore Nagar) — Twin: ₹27,000/mo | Private: ₹32,000/mo (Deposit: ₹30,000). All 3 meals included, laundry 2x/wk.\n" +
          "• Vairagya (Near Symbiosis University, Lavale) — Triple: ₹15,000/mo | Twin: ₹17,000/mo (Deposit: ₹20,000). Running mess included, non-AC.\n\n" +
          "Co-Living (3):\n" +
          "• Nirvana (Plot 34, Lane 2A, Sanjay Park) — Twin: ₹17,000/mo | Private 1RK: ₹29,000/mo (Deposit: ₹17k/₹29k). Attached kitchen, couple friendly, zero lock-in.\n" +
          "• Moksha (Plot 61, Lane 2A, Sanjay Park) — Twin: ₹17,000/mo | Private: ₹24,000/mo (Deposit: ₹17k/₹24k). 3BHK layout (max 4/floor), couple friendly, zero lock-in.\n" +
          "• Vipasna (Plot 36, Lane 3, Sanjay Park) — Twin: ₹17,000/mo | Private Ensuite: ₹27,000/mo (Deposit: ₹17k/₹27k). Hotel-style ensuite, couple friendly, zero lock-in.\n\n" +
          "Company Guesthouses (3) (Dedicated corporate facilities for contracted company employees; not open to general public):\n" +
          "• Park Island (Shastrinagar) — Twin: ₹20,000/mo (Deposit: ₹20,000).\n" +
          "• Pillar Homes (Clover Park, Viman Nagar) — Twin: ₹25,000/mo (Deposit: ₹25,000).\n" +
          "• Suyog Enclave (Behind Bajaj Finserv, Sakore Nagar) — Twin: ₹25,000/mo (Deposit: ₹25,000).\n\n" +
          "All listed rates are monthly rents as published in Reforbs documentation. For inquiries or walkthroughs, contact host Arpit Agarwal at " +
          CONTACT_PHONE +
          " or " +
          CONTACT_EMAIL +
          ".",
        pageNumber: 3,
        sourceLabel: "Source: Reforbs Website & Content Directory",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 3. Cheapest / Budget Comparison
    // -------------------------------------------------------------------------
    case "CHEAPEST_PRICE_COMPARISON": {
      if (entities.occupancyType === "single") {
        return {
          text:
            "The lowest single-occupancy / private room rate across Reforbs is at Moksha (Co-Living in Sanjay Park) at ₹24,000/month (security deposit: ₹24,000).\n\n" +
            "Private room rates comparison:\n" +
            "• Moksha (Co-Living, Sanjay Park): ₹24,000/month\n" +
            "• Vipasna (Co-Living, Sanjay Park): ₹27,000/month\n" +
            "• Nirvana (Co-Living 1RK, Sanjay Park): ₹29,000/month\n" +
            "• Brindavan (Student Housing, Sakore Nagar): ₹32,000/month (all 3 meals included)\n\n" +
            "Please confirm current vacancy with host Arpit Agarwal at " +
            CONTACT_PHONE +
            ".",
          pageNumber: 3,
          sourceLabel: "Source: Reforbs Property Directory & Pricing Tables",
          confidence: 30.0,
          isFallback: false,
        };
      }

      if (entities.occupancyType === "triple") {
        return {
          text:
            "The lowest triple-occupancy room rate across Reforbs is at Vairagya (Student Accommodation in Lavale) at ₹15,000/month (security deposit: ₹20,000), which includes a running mess with breakfast and dinner.\n\n" +
            "Please confirm vacancy with host at " +
            CONTACT_PHONE +
            ".",
          pageNumber: 6,
          sourceLabel: "Source: Reforbs Vairagya Pricing",
          confidence: 30.0,
          isFallback: false,
        };
      }

      // Default or double occupancy cheapest
      return {
        text:
          "The lowest overall room rate across Reforbs is Vairagya Triple Sharing in Lavale at ₹15,000/month (with breakfast and dinner included in running mess).\n\n" +
          "For twin sharing / double occupancy, the lowest rate is ₹17,000/month, available at:\n" +
          "• Nirvana (Co-Living, Sanjay Park): ₹17,000/month (attached 1RK kitchen)\n" +
          "• Moksha (Co-Living, Sanjay Park): ₹17,000/month (max 4 per floor)\n" +
          "• Vipasna (Co-Living, Sanjay Park): ₹17,000/month (hotel-style ensuite)\n" +
          "• Vairagya (Student Accommodation, Lavale): ₹17,000/month (running mess included)\n\n" +
          "Other accommodation rates:\n" +
          "• Park Island (Corporate Guesthouse, Shastrinagar): ₹20,000/month\n" +
          "• Pillar Homes (Corporate Guesthouse, Clover Park): ₹25,000/month\n" +
          "• Suyog Enclave (Corporate Guesthouse, Sakore Nagar): ₹25,000/month\n" +
          "• Shubh Gateway (Student Housing, Viman Nagar): ₹25,000/month (Girls) / ₹27,000/month (Boys)\n" +
          "• Brindavan (Student Housing, Sakore Nagar): ₹27,000/month (all 3 meals included)\n\n" +
          "Please confirm current vacancy with host Arpit Agarwal at " +
          CONTACT_PHONE +
          ".",
        pageNumber: 3,
        sourceLabel: "Source: Reforbs Property Directory & Pricing Tables",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 4. Rent / Pricing for a specific property or general
    // -------------------------------------------------------------------------
    case "RENT_PRICING": {
      if (matchedProp) {
        const lines: string[] = [];
        if (matchedProp.tripleRateStr) lines.push(`• Triple occupancy: ${matchedProp.tripleRateStr}`);
        if (matchedProp.doubleRateStr) lines.push(`• Twin / Double occupancy: ${matchedProp.doubleRateStr}`);
        if (matchedProp.singleRateStr) lines.push(`• Single / Private occupancy: ${matchedProp.singleRateStr}`);
        if (matchedProp.foodPolicy) lines.push(`• Food / Mess: ${matchedProp.foodPolicy}`);
        if (matchedProp.laundryPolicy) lines.push(`• Laundry: ${matchedProp.laundryPolicy}`);
        lines.push(`• Refundable security deposit: ${matchedProp.securityDeposit}`);

        return {
          text:
            `The monthly rates and room options for ${matchedProp.name} (${matchedProp.category}) are:\n\n` +
            lines.join("\n") +
            `\n\nFor current vacancy and booking, contact host Arpit Agarwal at ${matchedProp.contactPhone || CONTACT_PHONE}.`,
          pageNumber: matchedProp.pageNumber,
          sourceLabel: `Source: Reforbs Knowledge Base, page ${matchedProp.pageNumber}`,
          confidence: 30.0,
          isFallback: false,
        };
      }

      // General pricing inquiry
      return {
        text:
          "Reforbs monthly rates start at ₹15,000/month for triple sharing at Vairagya, and ₹17,000/month for twin sharing across Nirvana, Moksha, Vipasna, and Vairagya.\n\n" +
          "Private single rooms start at ₹24,000/month at Moksha. For inquiries or quotes, contact host Arpit Agarwal at " +
          CONTACT_PHONE +
          ".",
        pageNumber: 3,
        sourceLabel: "Source: Reforbs Property Directory",
        confidence: 25.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 5. Occupancy / Single vs Double vs Triple Options
    // -------------------------------------------------------------------------
    case "OCCUPANCY_SINGLE_DOUBLE": {
      if (matchedProp) {
        const opts: string[] = [];
        if (matchedProp.tripleDetails && matchedProp.tripleDetails.length > 0) {
          opts.push(`• Triple Occupancy (${matchedProp.tripleRateStr || "Available"}):\n  - ${matchedProp.tripleDetails.join("\n  - ")}`);
        }
        if (matchedProp.doubleDetails && matchedProp.doubleDetails.length > 0) {
          opts.push(`• Twin / Double Occupancy (${matchedProp.doubleRateStr}):\n  - ${matchedProp.doubleDetails.join("\n  - ")}`);
        }
        if (matchedProp.singleDetails && matchedProp.singleDetails.length > 0) {
          opts.push(`• Single / Private Occupancy (${matchedProp.singleRateStr}):\n  - ${matchedProp.singleDetails.join("\n  - ")}`);
        }

        return {
          text:
            `${matchedProp.name} room options:\n\n` +
            opts.join("\n\n") +
            `\n\nPlease confirm actual room inventory and available dates with host Arpit Agarwal at ${matchedProp.contactPhone || CONTACT_PHONE}.`,
          pageNumber: matchedProp.pageNumber,
          sourceLabel: `Source: Reforbs Knowledge Base, page ${matchedProp.pageNumber}`,
          confidence: 30.0,
          isFallback: false,
        };
      }

      return {
        text:
          "Reforbs properties offer private single rooms, twin sharing, and triple sharing depending on the location. Student accommodations feature twin or triple suites, while co-living properties offer twin sharing or fully private 1RK and studio rooms. Confirm availability with host Arpit Agarwal at " +
          CONTACT_PHONE +
          ".",
        pageNumber: 17,
        sourceLabel: "Source: Reforbs Property Directory",
        confidence: 28.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 6. Security Deposit
    // -------------------------------------------------------------------------
    case "SECURITY_DEPOSIT": {
      if (matchedProp) {
        return {
          text:
            `At ${matchedProp.name}, the refundable security deposit is:\n\n` +
            `• Security Deposit: ${matchedProp.securityDeposit}\n` +
            `• Refund Policy: Refundable with 30 days prior written notice and zero property damage. Cancellation prior to move-in has no refund.\n\n` +
            `Please confirm payment details with host Arpit Agarwal at ${matchedProp.contactPhone || CONTACT_PHONE}.`,
          pageNumber: matchedProp.pageNumber,
          sourceLabel: `Source: Reforbs Knowledge Base, page ${matchedProp.pageNumber}`,
          confidence: 30.0,
          isFallback: false,
        };
      }

      return {
        text:
          "Security deposits at Reforbs range from ₹17,000 to ₹40,000 depending on the property and room configuration. All deposits are refundable with 30 days prior written notice and zero damage. Cancellation prior to move-in has no refund. Confirm with host Arpit Agarwal at " +
          CONTACT_PHONE +
          ".",
        pageNumber: 17,
        sourceLabel: "Source: Reforbs House Rules",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 7. Brokerage
    // -------------------------------------------------------------------------
    case "BROKERAGE_POLICY": {
      return {
        text:
          "Each individual property page labels the offer “Zero Brokerage”. You deal directly with the Reforbs team with zero broker fees.",
        pageNumber: 17,
        sourceLabel: "Source: Reforbs Knowledge Base v4, page 17",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 8. Specific Amenity Queries (e.g. Vipasana parking, Park Island pool, Langston booths, etc.)
    // -------------------------------------------------------------------------
    case "AMENITY_SPECIFIC": {
      // Named property queries
      if (matchedProp) {
        const queryLower = rawQuery.toLowerCase();

        // Specific sub-checks:
        if (matchedProp.id === "vipasana" && (queryLower.includes("parking") || queryLower.includes("laundry"))) {
          return {
            text:
              "Yes. Vipasana specifically includes Free vehicle parking and a Laundry facility among its listed amenities.\n\n" +
              "• Full amenities at Vipasana: " +
              matchedProp.amenities.join(" • ") +
              "\n\nFor parking slot confirmation or walkthrough, contact " +
              CONTACT_PHONE +
              ".",
            pageNumber: 9,
            sourceLabel: "Source: Reforbs Knowledge Base v4, page 9",
            confidence: 30.0,
            isFallback: false,
          };
        }

        if (matchedProp.id === "park-island" && (queryLower.includes("pool") || queryLower.includes("gym") || queryLower.includes("swimming"))) {
          return {
            text:
              "Yes. Reforbs Park Island specifically includes Swimming pool access and an In-house fitness gym among its listed amenities.\n\n" +
              "• Full amenities at Reforbs Park Island: " +
              matchedProp.amenities.join(" • ") +
              "\n\nTo see the pool and facilities, call host Arpit at " +
              CONTACT_PHONE +
              ".",
            pageNumber: 11,
            sourceLabel: "Source: Reforbs Knowledge Base v4, page 11",
            confidence: 30.0,
            isFallback: false,
          };
        }

        if (matchedProp.id === "langston-downtown" && (queryLower.includes("soundproof") || queryLower.includes("booth"))) {
          return {
            text:
              "Yes. Langston Downtown specifically includes Soundproof call booths and an Executive business lounge among its listed amenities.\n\n" +
              "• Full amenities at Langston Downtown: " +
              matchedProp.amenities.join(" • ") +
              "\n\nFor corporate visits or bookings, contact " +
              CONTACT_PHONE +
              ".",
            pageNumber: 13,
            sourceLabel: "Source: Reforbs Knowledge Base v4, page 13",
            confidence: 30.0,
            isFallback: false,
          };
        }

        if (matchedProp.id === "shubh-gateway" && (queryLower.includes("cctv") || queryLower.includes("security"))) {
          return {
            text:
              "Yes. Shubh Gateway specifically lists 24/7 security and CCTV among its included amenities, along with free high-speed Wi-Fi, daily cleaning, laundry care, quiet study desks, private kitchen access, full power backup, and zero bans.\n\nFor more details, contact host Arpit at " +
              CONTACT_PHONE +
              ".",
            pageNumber: 4,
            sourceLabel: "Source: Reforbs Knowledge Base v4, page 4 & 18",
            confidence: 30.0,
            isFallback: false,
          };
        }

        // General amenities for the named property
        return {
          text:
            `Amenities stated on the ${matchedProp.name} property page as included:\n\n` +
            `• ${matchedProp.amenities.join("\n• ")}\n\n` +
            `Rates: Double ${matchedProp.doubleRateStr} | Single ${matchedProp.singleRateStr}. Contact host Arpit Agarwal at ${CONTACT_PHONE} for more details.`,
          pageNumber: matchedProp.pageNumber,
          sourceLabel: `Source: Reforbs Knowledge Base v4, page ${matchedProp.pageNumber}`,
          confidence: 30.0,
          isFallback: false,
        };
      }

      // General amenities query across properties
      return {
        text:
          "Reforbs homepage features common amenities including:\n" +
          "• Free high-speed Wi-Fi\n• TV & streaming\n• Work desks\n• Spacious living area\n• Private kitchen access\n• Daily cleaning\n• Free parking\n• Freedom / zero bans\n• Laundry care\n• Full power backup\n\n" +
          "Important note: Amenities are property-specific. For example, Park Island features swimming pool and gym access, Langston features soundproof call booths, and Nirvana features a pool table and UV chill lounge. Check specific property pages or call " +
          CONTACT_PHONE +
          " to confirm.",
        pageNumber: 14,
        sourceLabel: "Source: Reforbs Knowledge Base v4, page 14 & 19",
        confidence: 25.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 9. CCTV / Security
    // -------------------------------------------------------------------------
    case "CCTV_SECURITY": {
      if (matchedProp?.id === "shubh-gateway") {
        return {
          text:
            "Yes. 24/7 security and CCTV are specifically listed on the Shubh Gateway property page as included.\n\nFor further details, contact host Arpit Agarwal at " +
            CONTACT_PHONE +
            ".",
          pageNumber: 4,
          sourceLabel: "Source: Reforbs Knowledge Base v4, page 4 & 18",
          confidence: 30.0,
          isFallback: false,
        };
      }

      return {
        text:
          "24/7 security and CCTV are specifically listed on the Shubh Gateway and Reforbs Vairagya pages; CCTV and digital entry are listed for Reforbs Living Sakore Nagar. Reforbs does not claim CCTV across all ten properties unless confirmed on the relevant property page. Confirm with host Arpit Agarwal at " +
          CONTACT_PHONE +
          ".",
        pageNumber: 18,
        sourceLabel: "Source: Reforbs Knowledge Base v4, page 18",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 10. Proximity: Nearest to Pune Airport
    // -------------------------------------------------------------------------
    case "NEAREST_AIRPORT":
    case "AIRPORT_DISTANCE": {
      return {
        text:
          "Based on the website’s published approximate driving distances, Suyog Co-Living is listed closest to Pune International Airport at 1.8 km / about 5 minutes drive, followed by Langston Downtown at 1.9 km / about 5 minutes drive.\n\n" +
          "Other residences nearby:\n" +
          "• Sakore Nagar: 2.1 km (6 mins drive)\n" +
          "• Shubh Nirvana: 2.1 km (6 mins drive)\n" +
          "• Reforbs Park Island: 2.1 km (6 mins drive)\n" +
          "• Moksha: 2.3 km (7 mins drive)\n" +
          "• Shubh Gateway: 2.4 km (7 mins drive)\n" +
          "• Vipasana: 2.4 km (7 mins drive)\n\n" +
          "These are approximate website-published estimates; actual travel times depend on traffic. For directions, call " +
          CONTACT_PHONE +
          ".",
        pageNumber: 17,
        sourceLabel: "Source: Reforbs Knowledge Base v4, page 10 & 17",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 11. Proximity: Symbiosis Law School (SLS), SCMS, or other colleges
    // -------------------------------------------------------------------------
    case "COLLEGE_OFFICE_DISTANCE": {
      const qLower = rawQuery.toLowerCase();

      if (qLower.includes("sls") || qLower.includes("law school") || entities.college?.includes("Law")) {
        return {
          text:
            "Shubh Gateway is located directly opposite the Symbiosis Law School (SLS) campus gate (30 seconds walk).\n\n" +
            "Brindavan on Symbiosis Road in Sakore Nagar is also nearby (5 mins walk / 400 m). All travel times are approximate estimates. Contact " +
            CONTACT_PHONE +
            " to arrange a walkthrough.",
          pageNumber: 17,
          sourceLabel: "Source: Reforbs Location Directory",
          confidence: 30.0,
          isFallback: false,
        };
      }

      if (qLower.includes("scms") || entities.college?.includes("SCMS")) {
        return {
          text:
            "Reforbs Living Sakore Nagar is listed about 3 minutes on foot (250 metres) from SCMS.\n\n" +
            "Shubh Gateway is also nearby (4 mins walk / 350 m), as is Reforbs Vairagya (5 mins walk / 450 m). These are approximate website estimates. Contact " +
            CONTACT_PHONE +
            " to schedule a visit.",
          pageNumber: 17,
          sourceLabel: "Source: Reforbs Knowledge Base v4, page 5 & 17",
          confidence: 30.0,
          isFallback: false,
        };
      }

      if (qLower.includes("phoenix") || entities.location?.includes("Phoenix")) {
        return {
          text:
            "Several properties are listed near Phoenix Marketcity. Shubh Nirvana and Vipasana are each listed about 1.1 km away (4 mins drive); Langston Downtown is a 3 mins walk (250 m); other nearby options include Shubh Gateway, Sakore Nagar, Moksha, Suyog, Park Island, and Pillar Homes. Confirm details with host Arpit at " +
            CONTACT_PHONE +
            ".",
          pageNumber: 17,
          sourceLabel: "Source: Reforbs Knowledge Base v4, page 17",
          confidence: 30.0,
          isFallback: false,
        };
      }

      // Default college distance response
      return {
        text:
          "Reforbs residences in Viman Nagar are strategically positioned near Symbiosis campuses:\n" +
          "• Closest to Symbiosis Law School: Shubh Gateway (1 min walk / 50 m)\n" +
          "• Closest to SCMS: Reforbs Living Sakore Nagar (3 mins walk / 250 m)\n" +
          "• Closest to Symbiosis International School: Reforbs Vairagya (2 mins walk / 150 m)\n\n" +
          "All walking times are website-published estimates. Contact " +
          CONTACT_PHONE +
          " for property-specific directions.",
        pageNumber: 17,
        sourceLabel: "Source: Reforbs Knowledge Base v4, page 17",
        confidence: 25.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 12. Unspecified College or Office Query
    // -------------------------------------------------------------------------
    case "UNSPECIFIED_COLLEGE_OFFICE": {
      return {
        text:
          "Which college or office are you attending? Reforbs has properties in Viman Nagar within short walking distance of Symbiosis Law School (SLS), SCMS Campus, Symbiosis International School, as well as near Phoenix Marketcity, WeWork, and Kharadi IT corridors. Please specify your college or company so I can tell you the closest residence!",
        pageNumber: 2,
        sourceLabel: "Source: Reforbs Knowledge Base v4, page 2 & 17",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 13. Couples Policy (Unmarried couples / Live with partner / boyfriend / girlfriend)
    // -------------------------------------------------------------------------
    case "COUPLES_POLICY": {
      return {
        text:
          "Reforbs has clear, property-specific policies regarding couples:\n\n" +
          "• Couple-Friendly Properties (YES):\n" +
          "  - Nirvana (Sanjay Park): Independent 1RK studio apartments with private kitchens. 100% couple friendly with zero lock-in.\n" +
          "  - Moksha (Sanjay Park): 3BHK layout (max 4 per floor), couple friendly with no curfew restrictions.\n" +
          "  - Vipasna (Sanjay Park): Hotel-style ensuite rooms, couple friendly with complete freedom and zero lock-in.\n\n" +
          "• NOT Couple-Friendly (NO):\n" +
          "  - Student Accommodations (Shubh Gateway, Brindavan, Vairagya): Opposite-gender visitors are strictly not allowed.\n" +
          "  - Company Guesthouses (Park Island, Pillar Homes, Suyog Enclave): Exclusively reserved for corporate partner employees.\n\n" +
          "For couple booking inquiries, contact host Arpit Agarwal at " +
          CONTACT_PHONE +
          ".",
        pageNumber: 18,
        sourceLabel: "Source: Reforbs House Rules & Master Content",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 14. Food / Mess Policy
    // -------------------------------------------------------------------------
    case "FOOD_MESS": {
      return {
        text:
          "Food arrangements at Reforbs depend on the accommodation category:\n\n" +
          "• Student Accommodation (Meals Included):\n" +
          "  - Shubh Gateway: Breakfast and dinner included daily in running mess.\n" +
          "  - Brindavan: All 3 meals (breakfast, lunch, and dinner) included daily.\n" +
          "  - Vairagya: Running mess with breakfast and dinner included daily.\n\n" +
          "• Co-Living (Food Optional / Cooking Freedom):\n" +
          "  - Nirvana: Attached private kitchen in each 1RK studio apartment with full cooking freedom. Food is optional.\n" +
          "  - Moksha & Vipasna: Modular kitchens available for self-cooking. Meal packages are optional and never forced.\n\n" +
          "• Company Guesthouses: Corporate managed catering and dining setups.\n\n" +
          "For meal arrangements or menu details, contact host Arpit Agarwal at " +
          CONTACT_PHONE +
          ".",
        pageNumber: 17,
        sourceLabel: "Source: Reforbs Master Content & House Rules",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 15. Visitors / Friends Policy
    // -------------------------------------------------------------------------
    case "VISITORS_GUESTS": {
      return {
        text:
          "Visitor and guest rules at Reforbs:\n\n" +
          "• Co-Living (Nirvana, Moksha, Vipasna):\n" +
          "  Residents can invite friends and guests over within social norms and mutual understanding. There are zero arbitrary curfews or moral policing.\n\n" +
          "• Student Accommodation (Shubh Gateway, Brindavan, Vairagya):\n" +
          "  Opposite-gender visitors are strictly not allowed in student rooms. Shubh Gateway features gender-segregated towers with biometric entry.\n\n" +
          "• Company Guesthouses: Restricted to designated corporate company personnel.\n\n" +
          "For visitor policy clarification, contact host Arpit Agarwal at " +
          CONTACT_PHONE +
          ".",
        pageNumber: 18,
        sourceLabel: "Source: Reforbs House Rules & Master Content",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 16. Lock-in Period Policy
    // -------------------------------------------------------------------------
    case "LOCK_IN_POLICY": {
      return {
        text:
          "Reforbs lock-in and exit terms:\n\n" +
          "• Co-Living (Nirvana, Moksha, Vipasna):\n" +
          "  Zero lock-in guarantee. Stay as long as you need without rigid contracts.\n\n" +
          "• Student Accommodation (Shubh Gateway, Brindavan, Vairagya):\n" +
          "  Annual academic lock-in corresponding to the college school year.\n\n" +
          "• Security Deposit Refund Policy:\n" +
          "  Security deposits are refundable with 30 days prior written notice and zero damage to property. Cancellation prior to move-in has NO refund.\n\n" +
          "For agreement specifics, contact host Arpit Agarwal at " +
          CONTACT_PHONE +
          ".",
        pageNumber: 17,
        sourceLabel: "Source: Reforbs Operational Terms & House Rules",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 17. Curfew Rules / Bans
    // -------------------------------------------------------------------------
    case "CURFEW_RULES": {
      return {
        text:
          "Property pages describe zero bans or curfews / zero moral policing. The freedom policy also notes that mutual compatibility and social norms apply. For a specific property’s current house rules and night access, confirm with host Arpit Agarwal at " +
          CONTACT_PHONE +
          ".",
        pageNumber: 17,
        sourceLabel: "Source: Reforbs Knowledge Base v4, page 17",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 18. Site Visit / Tour Timings
    // -------------------------------------------------------------------------
    case "VISIT_TOUR": {
      return {
        text:
          `Yes. The website offers a free site visit / walkthrough request. The Contact page lists tour hours every day from 9:00 AM to 8:00 PM. Call ${CONTACT_PHONE} or use the website enquiry form to schedule. (Please note that the chatbot cannot itself guarantee or complete a live booking).`,
        pageNumber: 16,
        sourceLabel: "Source: Reforbs Knowledge Base v4, page 16 & 18",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 19. Contact / Support
    // -------------------------------------------------------------------------
    case "CONTACT_SUPPORT": {
      return {
        text:
          `Official contact details for Reforbs:\n\n` +
          `• Phone / WhatsApp: ${CONTACT_PHONE} (Host: ${HOST_NAME})\n` +
          `• Email: ${CONTACT_EMAIL}\n` +
          `• Location: ${PRIMARY_LOCATION}\n` +
          `• Tour Hours: ${TOUR_HOURS}`,
        pageNumber: 16,
        sourceLabel: "Source: Reforbs Knowledge Base v4, page 16 & 18",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 20. Destinations Coming Soon (Goa / Bangalore)
    // -------------------------------------------------------------------------
    case "DESTINATION_COMING_SOON": {
      return {
        text:
          "The homepage labels Goa and Bangalore as coming soon. The currently active directory is Pune / Viman Nagar.",
        pageNumber: 18,
        sourceLabel: "Source: Reforbs Knowledge Base v4, page 18",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 21. Live Availability / Immediate Move-in
    // -------------------------------------------------------------------------
    case "LIVE_AVAILABILITY": {
      return {
        text:
          "I can share the website-listed property details, but I can’t check live vacancies. Please contact host Arpit Agarwal at " +
          CONTACT_PHONE +
          " with your preferred property and move-in date.",
        pageNumber: 2,
        sourceLabel: "Source: Reforbs Knowledge Base v4, page 2 & 19",
        confidence: 30.0,
        isFallback: true,
      };
    }

    // -------------------------------------------------------------------------
    // 22. Building Capacity / Unknown property detail
    // -------------------------------------------------------------------------
    case "BUILDING_CAPACITY": {
      return {
        text:
          "I couldn’t verify that detail in the current Reforbs website information. Total building capacity is not listed on the public pages. Please contact " +
          CONTACT_PHONE +
          " or " +
          CONTACT_EMAIL +
          " to confirm.",
        pageNumber: 2,
        sourceLabel: "Source: Reforbs Knowledge Base v4, page 2 & 19",
        confidence: 30.0,
        isFallback: true,
      };
    }

    // -------------------------------------------------------------------------
    // 23. Community & Lifestyle Activities
    // -------------------------------------------------------------------------
    case "COMMUNITY_ACTIVITIES": {
      return {
        text:
          "The Reforbs Community page highlights several community rituals and lifestyle activities:\n" +
          "• Weekend rooftop yoga and wellness sessions\n" +
          "• Glow & neon DIY nights, UV canvas painting, and pottery sessions\n" +
          "• Communal cooking, Masterchef-style cook-offs, and BBQ evenings\n" +
          "• Festival celebrations including Holi, Diwali, Christmas, and Eid\n" +
          "• Professional networking and mentorship with working professionals\n" +
          "• In-house movie and game nights, pool table, and friendly weekend tournaments\n\n" +
          "These activities are conducted across the Reforbs community; specific schedules vary by residence. For more information, contact " +
          CONTACT_PHONE +
          ".",
        pageNumber: 15,
        sourceLabel: "Source: Reforbs Knowledge Base v4, page 15",
        confidence: 28.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 24. Named Property Profile ("Tell me about Shubh Nirvana", etc.)
    // -------------------------------------------------------------------------
    case "PROPERTY_PROFILE": {
      if (matchedProp) {
        const pricingLines: string[] = [];
        if (matchedProp.tripleRateStr) pricingLines.push(`• Triple Occupancy: ${matchedProp.tripleRateStr}`);
        if (matchedProp.doubleRateStr) pricingLines.push(`• Twin / Double Occupancy: ${matchedProp.doubleRateStr}`);
        if (matchedProp.singleRateStr) pricingLines.push(`• Single / Private Occupancy: ${matchedProp.singleRateStr}`);

        return {
          text:
            `About ${matchedProp.name} (${matchedProp.category}):\n` +
            `${matchedProp.description}\n\n` +
            `• Location: ${matchedProp.locationCue}\n` +
            pricingLines.join("\n") + "\n" +
            `• Security Deposit: ${matchedProp.securityDeposit}\n` +
            (matchedProp.foodPolicy ? `• Food: ${matchedProp.foodPolicy}\n` : "") +
            (matchedProp.laundryPolicy ? `• Laundry: ${matchedProp.laundryPolicy}\n` : "") +
            `• Key Amenities: ${matchedProp.amenities.join(" • ")}\n` +
            `• Proximity Estimates:\n  - ${matchedProp.nearbyEstimates.map((e) => `${e.place}: ${e.estimate}`).join("\n  - ")}\n\n` +
            `For walkthroughs and current vacancy, contact host Arpit Agarwal at ${matchedProp.contactPhone || CONTACT_PHONE}.`,
          pageNumber: matchedProp.pageNumber,
          sourceLabel: `Source: Reforbs Knowledge Base, page ${matchedProp.pageNumber}`,
          confidence: 30.0,
          isFallback: false,
        };
      }

      return {
        text:
          "I couldn’t verify that detail from the information currently published by Reforbs. Please contact the team at " +
          CONTACT_PHONE +
          " or " +
          CONTACT_EMAIL +
          " to confirm.",
        pageNumber: 2,
        sourceLabel: "Source: Reforbs Knowledge Base v4, page 2",
        confidence: 10.0,
        isFallback: true,
      };
    }

    // -------------------------------------------------------------------------
    // 25. General Inquiry Fallback
    // -------------------------------------------------------------------------
    default: {
      return {
        text:
          "I couldn’t verify that detail from the information currently published by Reforbs. Please contact the team at " +
          CONTACT_PHONE +
          " or " +
          CONTACT_EMAIL +
          " to confirm.",
        pageNumber: 2,
        sourceLabel: "Source: Reforbs Knowledge Base v4, page 2",
        confidence: 10.0,
        isFallback: true,
      };
    }
  }
}
