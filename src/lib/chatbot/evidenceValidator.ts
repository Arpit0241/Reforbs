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
          "The homepage currently shows 10 active Pune spaces in Viman Nagar:\n\n" +
          "• Shubh Gateway (Student Housing) — Double: ₹12,500/month | Single: ₹18,000/month\n" +
          "• Reforbs Living Sakore Nagar (Student Housing) — Double: ₹12,000/month | Single: ₹17,500/month\n" +
          "• Reforbs Vairagya (Student Housing) — Double: ₹13,000/month | Single: ₹19,000/month\n" +
          "• Moksha (Co-Living) — Double: ₹14,500/month | Single: ₹22,000/month\n" +
          "• Shubh Nirvana (Co-Living) — Double: ₹15,000/month | Single: ₹22,500/month\n" +
          "• Vipasana (Co-Living) — Double: ₹14,000/month | Single: ₹21,000/month\n" +
          "• Suyog Co-Living (Co-Living) — Double: ₹14,500/month | Single: ₹21,500/month\n" +
          "• Reforbs Park Island (Co-Living) — Double: ₹15,500/month | Single: ₹23,000/month\n" +
          "• Pillar Homes Co-Living (Co-Living) — Double: ₹15,000/month | Single: ₹22,000/month\n" +
          "• Langston Downtown (Co-Living) — Double: ₹16,000/month | Single: ₹24,000/month\n\n" +
          "All listed rates are website-published monthly rates reviewed on 3 November 2026. Please confirm current availability and final quote with host Arpit Agarwal at " +
          CONTACT_PHONE +
          ".",
        pageNumber: 3,
        sourceLabel: "Source: Reforbs Knowledge Base v4, page 3",
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
            "Reforbs Living Sakore Nagar is listed at ₹17,500/month for single occupancy, which is the lowest single-occupancy rate among the ten property pages reviewed.\n\n" +
            "Please note that these rates are website-displayed prices reviewed on 3 November 2026, not a final guarantee of current vacancy. Please confirm latest vacancy and pricing with host Arpit Agarwal at " +
            CONTACT_PHONE +
            ".",
          pageNumber: 3,
          sourceLabel: "Source: Reforbs Knowledge Base v4, page 3 & 17",
          confidence: 30.0,
          isFallback: false,
        };
      }

      // Default or double occupancy cheapest
      return {
        text:
          "The lowest monthly rate currently shown on the property pages is Reforbs Living Sakore Nagar at ₹12,000/month for double occupancy. Its listed single-occupancy rate is ₹17,500/month.\n\n" +
          "For double sharing:\n" +
          "• Reforbs Living Sakore Nagar: ₹12,000/month (lowest double rate)\n" +
          "• Shubh Gateway: ₹12,500/month\n" +
          "• Reforbs Vairagya: ₹13,000/month\n\n" +
          "These are website-published monthly rates reviewed on 3 November 2026. Please confirm current availability and final pricing with the host at " +
          CONTACT_PHONE +
          ".",
        pageNumber: 3,
        sourceLabel: "Source: Reforbs Knowledge Base v4, page 3 & 17",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 4. Rent / Pricing for a specific property or general
    // -------------------------------------------------------------------------
    case "RENT_PRICING": {
      if (matchedProp) {
        return {
          text:
            `The website-listed monthly rates for ${matchedProp.name} are:\n\n` +
            `• Double occupancy: ${matchedProp.doubleRateStr}\n` +
            `• Single occupancy: ${matchedProp.singleRateStr}\n` +
            `• Refundable security deposit: ${matchedProp.securityDeposit}\n\n` +
            `Rates are as published on the website on 3 November 2026. Please confirm current vacancy and final quote with host Arpit Agarwal at ${CONTACT_PHONE}.`,
          pageNumber: matchedProp.pageNumber,
          sourceLabel: `Source: Reforbs Knowledge Base v4, page ${matchedProp.pageNumber}`,
          confidence: 30.0,
          isFallback: false,
        };
      }

      // General pricing inquiry
      return {
        text:
          "Website-listed monthly rates across Reforbs residences in Viman Nagar start at ₹12,000/month for double occupancy and ₹17,500/month for single occupancy (at Reforbs Living Sakore Nagar).\n\n" +
          "Rates range from ₹12,000/month to ₹16,000/month for double sharing, and ₹17,500/month to ₹24,000/month for single private suites, depending on the property and amenities. For a specific quote, contact host Arpit Agarwal at " +
          CONTACT_PHONE +
          ".",
        pageNumber: 3,
        sourceLabel: "Source: Reforbs Knowledge Base v4, page 3",
        confidence: 25.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 5. Occupancy / Single vs Double Options
    // -------------------------------------------------------------------------
    case "OCCUPANCY_SINGLE_DOUBLE": {
      if (matchedProp) {
        return {
          text:
            `${matchedProp.name} detail page lists both Single Occupancy and Double Occupancy options:\n\n` +
            `• Double Occupancy (${matchedProp.doubleRateStr}):\n  - ${matchedProp.doubleDetails.join("\n  - ")}\n\n` +
            `• Single Occupancy (${matchedProp.singleRateStr}):\n  - ${matchedProp.singleDetails.join("\n  - ")}\n\n` +
            `Please confirm actual room inventory and available dates with host Arpit Agarwal at ${CONTACT_PHONE}.`,
          pageNumber: matchedProp.pageNumber,
          sourceLabel: `Source: Reforbs Knowledge Base v4, page ${matchedProp.pageNumber}`,
          confidence: 30.0,
          isFallback: false,
        };
      }

      return {
        text:
          "The individual property detail pages list both single- and double-occupancy room options for all ten residences. Confirm the actual room inventory for your preferred property and dates with the host at " +
          CONTACT_PHONE +
          ". (Note: The site also contains general privacy copy stating rooms are single-occupant; however, each property page explicitly provides both single and double options with separate pricing).",
        pageNumber: 17,
        sourceLabel: "Source: Reforbs Knowledge Base v4, page 17 & 19",
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
            `At ${matchedProp.name}, the refundable security deposit is 1 month rent for each listed room option:\n\n` +
            `• Double occupancy deposit: ${matchedProp.doubleRateStr} (1 month)\n` +
            `• Single occupancy deposit: ${matchedProp.singleRateStr} (1 month)\n\n` +
            `Please confirm the exact payable amount and written refund conditions with the host at ${CONTACT_PHONE} before paying.`,
          pageNumber: matchedProp.pageNumber,
          sourceLabel: `Source: Reforbs Knowledge Base v4, page ${matchedProp.pageNumber} & 17`,
          confidence: 30.0,
          isFallback: false,
        };
      }

      return {
        text:
          "Each property room-option section states a refundable security deposit equal to one month’s rent. Confirm the exact payable amount and written refund conditions with host Arpit Agarwal at " +
          CONTACT_PHONE +
          " before paying.",
        pageNumber: 17,
        sourceLabel: "Source: Reforbs Knowledge Base v4, page 17",
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
            "Shubh Gateway is listed directly opposite the Symbiosis Law School campus gate, about a 1-minute walk (50 metres).\n\n" +
            "Other close properties to SLS include Sakore Nagar (5 mins walk / 400 m) and Reforbs Vairagya (6 mins walk / 500 m). All travel times are approximate website estimates. Contact " +
            CONTACT_PHONE +
            " to arrange a walkthrough.",
          pageNumber: 17,
          sourceLabel: "Source: Reforbs Knowledge Base v4, page 4 & 17",
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
          "The website lists single- and double-occupancy room options, but it does not clearly confirm an unmarried-couples policy. Double occupancy is a room type, not proof of couples eligibility. Please check directly with the host at " +
          CONTACT_PHONE +
          " to confirm property-specific house rules.",
        pageNumber: 18,
        sourceLabel: "Source: Reforbs Knowledge Base v4, page 18 & 19",
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
          "The website says “No Mess Lock”, “zero forced food packages” and freedom to choose meal plans. It does not clearly specify a universal included-food arrangement. Meals are not automatically included in standard rent; please ask the host at " +
          CONTACT_PHONE +
          " about optional meal arrangements or private kitchen facilities.",
        pageNumber: 17,
        sourceLabel: "Source: Reforbs Knowledge Base v4, page 17 & 19",
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
          "Reforbs encourages a social environment and inviting friends, but the full guest and overnight-visitor rules are not listed. The About page says residents should be able to invite friends over and spend quality time, but complete visitor hours and overnight restrictions are not published on the website. Please confirm with host Arpit Agarwal at " +
          CONTACT_PHONE +
          ".",
        pageNumber: 18,
        sourceLabel: "Source: Reforbs Knowledge Base v4, page 18 & 19",
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
          "The website advertises zero lock-ins / no lock-in guarantee. It does not publish a complete notice-period, exit or refund-deduction schedule in the reviewed pages. Please confirm your specific agreement terms with host Arpit Agarwal at " +
          CONTACT_PHONE +
          ".",
        pageNumber: 17,
        sourceLabel: "Source: Reforbs Knowledge Base v4, page 17 & 19",
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
        return {
          text:
            `About ${matchedProp.name} (${matchedProp.category}):\n` +
            `${matchedProp.description}\n\n` +
            `• Location: ${matchedProp.locationCue}\n` +
            `• Double Occupancy: ${matchedProp.doubleRateStr}\n` +
            `• Single Occupancy: ${matchedProp.singleRateStr}\n` +
            `• Security Deposit: ${matchedProp.securityDeposit}\n` +
            `• Key Amenities: ${matchedProp.amenities.join(" • ")}\n` +
            `• Proximity Estimates:\n  - ${matchedProp.nearbyEstimates.map((e) => `${e.place}: ${e.estimate}`).join("\n  - ")}\n\n` +
            `Rates and distances are website-published estimates reviewed on 3 November 2026. Please confirm current vacancy and final quote with host Arpit Agarwal at ${CONTACT_PHONE}.`,
          pageNumber: matchedProp.pageNumber,
          sourceLabel: `Source: Reforbs Knowledge Base v4, page ${matchedProp.pageNumber}`,
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
