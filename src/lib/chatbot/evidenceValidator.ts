/**
 * Evidence Validation Layer
 *
 * Validates retrieved facts against the customer's detected intent.
 * If evidence is missing, ambiguous, or unconfirmed in the PDF, returns an
 * honest, intent-specific response rather than a misleading or generic fallback.
 *
 * Records knowledge gaps in local diagnostics.
 */

import { IntentDetectionResult } from "./intentDetector";
import { recordKnowledgeGap } from "./knowledgeGaps";
import { SearchResult } from "./pdfKnowledgeEngine";

export function validateAndGenerateResponse(
  rawQuery: string,
  analysis: IntentDetectionResult
): SearchResult {
  const { intent, entities } = analysis;

  switch (intent) {
    // -------------------------------------------------------------------------
    // A. Amenities (General or Specific)
    // -------------------------------------------------------------------------
    case "AMENITIES": {
      // Check if asking about a specific amenity
      if (entities.targetAmenity === "Wi-Fi") {
        return {
          text: "The homepage lists free high-speed Wi-Fi among its amenities. Please confirm availability and details for the specific property with the team at 7420040241.",
          pageNumber: 4,
          sourceLabel: "Source: Reforbs Knowledge Base, page 4",
          confidence: 25.0,
          isFallback: false,
        };
      }

      if (entities.targetAmenity === "Laundry") {
        return {
          text: "Laundry is listed among the general amenities in the Reforbs knowledge base. The website does not specify whether the service is self-service, paid, or included at every property; please confirm details with Reforbs at 7420040241.",
          pageNumber: 4,
          sourceLabel: "Source: Reforbs Knowledge Base, page 4",
          confidence: 25.0,
          isFallback: false,
        };
      }

      if (entities.targetAmenity === "Parking") {
        return {
          text: "Parking is listed among the general amenities in our knowledge base. Confirm the availability and terms for your chosen property by calling 7420040241.",
          pageNumber: 5,
          sourceLabel: "Source: Reforbs Knowledge Base, page 5",
          confidence: 25.0,
          isFallback: false,
        };
      }

      if (entities.targetAmenity === "Daily Cleaning") {
        return {
          text: "Daily cleaning services are listed on the homepage. The precise scope and schedule for a particular property are not specified; confirm with Reforbs at 7420040241.",
          pageNumber: 4,
          sourceLabel: "Source: Reforbs Knowledge Base, page 4",
          confidence: 25.0,
          isFallback: false,
        };
      }

      if (entities.targetAmenity === "Kitchen") {
        return {
          text: "The homepage mentions a kitchen among the amenities and also describes private kitchen and dining spaces. The exact arrangement may differ by property; please confirm with 7420040241.",
          pageNumber: 6,
          sourceLabel: "Source: Reforbs Knowledge Base, page 6",
          confidence: 25.0,
          isFallback: false,
        };
      }

      // General Amenities query: Return strictly the 8 documented amenities from PDF page 4
      return {
        text:
          "The Reforbs homepage lists the following amenities under 'Everything you need, already included':\n\n" +
          "• Free high-speed Wi-Fi\n" +
          "• TV\n" +
          "• Work desks\n" +
          "• Living area\n" +
          "• Kitchen\n" +
          "• Daily cleaning services\n" +
          "• Parking\n" +
          "• Laundry\n\n" +
          "Please note: Because the homepage does not assign every amenity to each individual property, the chatbot recommends confirming the exact setup and inclusions for your chosen property with the team at 7420040241.",
        pageNumber: 4,
        sourceLabel: "Source: Reforbs Knowledge Base, page 4",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // B. Couples, Boyfriend, Girlfriend and Cohabitation Policy
    // -------------------------------------------------------------------------
    case "COUPLES_POLICY": {
      recordKnowledgeGap("COUPLES_SHARED_OCCUPANCY_POLICY", rawQuery, {
        property: entities.property,
      });

      return {
        text:
          "Our current knowledge base does not specify Reforbs' policy for couples or shared occupancy. " +
          "Please contact the Reforbs team at 7420040241 to confirm the rules for your preferred property.",
        pageNumber: null,
        sourceLabel: null,
        confidence: 0,
        isFallback: true,
      };
    }

    // -------------------------------------------------------------------------
    // C. Nearest Property & Location Comparison
    // -------------------------------------------------------------------------
    case "NEAREST_LOCATION": {
      const loc = entities.location || "your location";

      // If asking specifically about Symbiosis Law School
      if (entities.college && entities.college.includes("Symbiosis")) {
        return {
          text:
            "Shubh Gateway is listed as student housing located directly opposite Symbiosis Law School (SLS). " +
            "For location assistance and viewings, please contact Reforbs at 7420040241.",
          pageNumber: 3,
          sourceLabel: "Source: Reforbs Knowledge Base, page 3",
          confidence: 28.0,
          isFallback: false,
        };
      }

      // If asking about Viman Nagar
      if (loc.toLowerCase() === "viman nagar") {
        return {
          text:
            "The website lists Moksha, Vipasana, and Shubh Nirvana as co-living properties in Viman Nagar, " +
            "as well as Shubh Gateway opposite Symbiosis Law School. Contact 7420040241 for exact locations and availability.",
          pageNumber: 4,
          sourceLabel: "Source: Reforbs Knowledge Base, page 4",
          confidence: 28.0,
          isFallback: false,
        };
      }

      // If asking about Sakore Nagar
      if (loc.toLowerCase() === "sakore nagar") {
        return {
          text:
            "The website lists a student-housing property named Reforbs Living Sakore Nagar. " +
            "Contact 7420040241 for its exact location and current details.",
          pageNumber: 4,
          sourceLabel: "Source: Reforbs Knowledge Base, page 4",
          confidence: 28.0,
          isFallback: false,
        };
      }

      // Other areas (e.g. Kondhwa, Hinjewadi, or general nearest)
      recordKnowledgeGap("NEAREST_LOCATION_DISTANCE", rawQuery, {
        location: loc,
      });

      return {
        text:
          `I can help identify a nearby Reforbs property, but our current knowledge base does not contain enough verified location information to determine which property is closest to ${loc}. Please contact us at 7420040241 for assistance.\n\n` +
          "For reference, the verified property locations in our knowledge base are:\n" +
          "• Shubh Gateway — Opposite Symbiosis Law School, Pune (Student Housing)\n" +
          "• Reforbs Living Sakore Nagar — Sakore Nagar, Pune (Student Housing)\n" +
          "• Moksha — Viman Nagar, Pune (Co-Living)\n" +
          "• Vipasana — Viman Nagar, Pune (Co-Living)\n" +
          "• Shubh Nirvana — Viman Nagar, Pune (Co-Living)",
        pageNumber: null,
        sourceLabel: null,
        confidence: 0,
        isFallback: true,
      };
    }

    // -------------------------------------------------------------------------
    // D. Cheapest Property & Rent Comparison
    // -------------------------------------------------------------------------
    case "CHEAPEST_PRICE_COMPARISON": {
      recordKnowledgeGap("CHEAPEST_RENT_COMPARISON", rawQuery, {
        property: entities.property,
      });

      // Special handling if also asking about college proximity
      if (entities.college || rawQuery.toLowerCase().includes("college")) {
        return {
          text:
            "Shubh Gateway is listed as student housing located directly opposite Symbiosis Law School. " +
            "However, our knowledge base does not contain verified current prices for all Reforbs properties, " +
            "so I cannot reliably identify the cheapest PG. Please contact us at 7420040241 to confirm the latest rent.",
          pageNumber: 3,
          sourceLabel: "Source: Reforbs Knowledge Base, page 3 & 5",
          confidence: 25.0,
          isFallback: false,
        };
      }

      return {
        text:
          "Our knowledge base does not contain verified current prices for all Reforbs properties, " +
          "so I cannot reliably identify the cheapest PG. Please contact us at 7420040241 to confirm the latest rent.",
        pageNumber: null,
        sourceLabel: null,
        confidence: 0,
        isFallback: true,
      };
    }

    // -------------------------------------------------------------------------
    // E. Rent / Pricing
    // -------------------------------------------------------------------------
    case "RENT_PRICING": {
      recordKnowledgeGap("PROPERTY_SPECIFIC_RENT", rawQuery, {
        property: entities.property,
      });

      if (entities.property) {
        return {
          text:
            `Current rent or monthly pricing for ${entities.property} is not published on the reviewed Reforbs homepage. ` +
            "For a current quote, please contact 7420040241 and mention the room type you are interested in.",
          pageNumber: 5,
          sourceLabel: "Source: Reforbs Knowledge Base, page 5",
          confidence: 25.0,
          isFallback: false,
        };
      }

      return {
        text:
          "Current rent or monthly pricing is not published on the reviewed Reforbs homepage. " +
          "For a current quote, contact 7420040241 and mention the property name you are interested in.",
        pageNumber: 5,
        sourceLabel: "Source: Reforbs Knowledge Base, page 5",
        confidence: 25.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // F. Security Deposit
    // -------------------------------------------------------------------------
    case "SECURITY_DEPOSIT": {
      recordKnowledgeGap("SECURITY_DEPOSIT_AMOUNT", rawQuery, {
        property: entities.property,
      });

      return {
        text:
          "The security deposit amount is not specified on the reviewed website. " +
          "Please contact Reforbs at 7420040241 for the current deposit and payment terms.",
        pageNumber: 5,
        sourceLabel: "Source: Reforbs Knowledge Base, page 5",
        confidence: 25.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // G. Availability & Vacancies
    // -------------------------------------------------------------------------
    case "AVAILABILITY_VACANCIES": {
      recordKnowledgeGap("LIVE_ROOM_AVAILABILITY", rawQuery, {
        property: entities.property,
      });

      return {
        text:
          "Live room availability is not shown on the website and can change. " +
          "Call Reforbs at 7420040241 to check current vacancies for your preferred property and move-in date.",
        pageNumber: 5,
        sourceLabel: "Source: Reforbs Knowledge Base, page 5",
        confidence: 25.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // H. Property Specific Overview
    // -------------------------------------------------------------------------
    case "PROPERTY_SPECIFIC": {
      const prop = entities.property;

      if (prop === "Shubh Gateway") {
        return {
          text:
            "Shubh Gateway is listed as student housing located opposite Symbiosis Law School. " +
            "The website does not show a full street address, rent, room availability, or detailed property-specific amenity list. " +
            "Please contact Reforbs at 7420040241 to confirm details.",
          pageNumber: 3,
          sourceLabel: "Source: Reforbs Knowledge Base, page 3",
          confidence: 28.0,
          isFallback: false,
        };
      }

      if (prop === "Moksha") {
        return {
          text:
            "Moksha is listed in the Reforbs knowledge base as a co-living property in Viman Nagar, Pune. " +
            "The website does not show a full street address, rent, room availability, or detailed property-specific amenity list. " +
            "Contact 7420040241 for current details.",
          pageNumber: 3,
          sourceLabel: "Source: Reforbs Knowledge Base, page 3",
          confidence: 28.0,
          isFallback: false,
        };
      }

      if (prop === "Vipasana") {
        return {
          text:
            "Vipasana is listed in the Reforbs knowledge base as a co-living property in Viman Nagar, Pune. " +
            "The homepage does not show a full street address, rent, room availability, or detailed property-specific amenity list. " +
            "Contact 7420040241 for current details.",
          pageNumber: 3,
          sourceLabel: "Source: Reforbs Knowledge Base, page 3",
          confidence: 28.0,
          isFallback: false,
        };
      }

      if (prop === "Shubh Nirvana") {
        return {
          text:
            "Shubh Nirvana is listed in the Reforbs knowledge base as a co-living property in Viman Nagar, Pune. " +
            "The homepage does not show a full street address, rent, room availability, or detailed property-specific amenity list. " +
            "Contact 7420040241 for current details.",
          pageNumber: 3,
          sourceLabel: "Source: Reforbs Knowledge Base, page 3",
          confidence: 28.0,
          isFallback: false,
        };
      }

      if (prop === "Reforbs Living Sakore Nagar") {
        return {
          text:
            "The website lists a student-housing property named Reforbs Living Sakore Nagar. " +
            "The homepage does not state a separate location line, full address, rent, room availability, or detailed property-specific amenity list. " +
            "Contact 7420040241 for its exact location and current details.",
          pageNumber: 3,
          sourceLabel: "Source: Reforbs Knowledge Base, page 3",
          confidence: 28.0,
          isFallback: false,
        };
      }

      // If property name was detected generally
      return {
        text:
          `Information for ${prop || "this property"} is available in the Reforbs knowledge base. ` +
          "Please contact the Reforbs team at 7420040241 to confirm specific details, viewings, and availability.",
        pageNumber: 3,
        sourceLabel: "Source: Reforbs Knowledge Base, page 3",
        confidence: 20.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // I. Property Directory & Pune Listings
    // -------------------------------------------------------------------------
    case "PROPERTY_DIRECTORY": {
      // Check if asking specifically about Viman Nagar
      if (entities.location && entities.location.toLowerCase() === "viman nagar") {
        return {
          text:
            "The website lists Moksha, Vipasana, and Shubh Nirvana as co-living properties in Viman Nagar, " +
            "and Shubh Gateway opposite Symbiosis Law School. For details and tours, call Reforbs at 7420040241.",
          pageNumber: 4,
          sourceLabel: "Source: Reforbs Knowledge Base, page 4",
          confidence: 28.0,
          isFallback: false,
        };
      }

      return {
        text:
          "Reforbs displays five named properties across two categories:\n\n" +
          "Student Housing:\n" +
          "1. Shubh Gateway — Opposite Symbiosis Law School\n" +
          "2. Reforbs Living Sakore Nagar — Sakore Nagar\n\n" +
          "Co-Living:\n" +
          "3. Moksha — Viman Nagar, Pune\n" +
          "4. Vipasana — Viman Nagar, Pune\n" +
          "5. Shubh Nirvana — Viman Nagar, Pune\n\n" +
          "The website does not show full street addresses, rent, room availability, or detailed property-specific amenity lists. For property tours and current vacancies, call 7420040241.",
        pageNumber: 3,
        sourceLabel: "Source: Reforbs Knowledge Base, page 3",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // J. Contact Details & Human Support
    // -------------------------------------------------------------------------
    case "CONTACT_SUPPORT": {
      return {
        text:
          "Location: Viman Nagar, Pune, Maharashtra, India\n" +
          "Owner: Arpit Agarwal\n" +
          "Phone: 7420040241\n" +
          "Website: https://reforbs.com/\n\n" +
          "Note: The reviewed homepage does not display a customer support email address or direct social-media profile URLs in its readable text. Please call 7420040241 directly.",
        pageNumber: 3,
        sourceLabel: "Source: Reforbs Knowledge Base, page 3",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // K. Food & Meal Plans
    // -------------------------------------------------------------------------
    case "FOOD_MEALS": {
      recordKnowledgeGap("FOOD_MEAL_PLAN_INCLUSIONS", rawQuery);

      return {
        text:
          "Food, meals, and meal-plan inclusions are not specified on the reviewed homepage. " +
          "Contact Reforbs at 7420040241 to confirm food arrangements for the property you are considering.",
        pageNumber: 6,
        sourceLabel: "Source: Reforbs Knowledge Base, page 6",
        confidence: 25.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // L. Single Occupancy & Room Privacy
    // -------------------------------------------------------------------------
    case "ROOM_PRIVACY": {
      return {
        text:
          "The Reforbs website states that all rooms are for single occupants, meaning one tenant per room. " +
          "Ask the team to confirm the room type and current options at the property you prefer by calling 7420040241.",
        pageNumber: 5,
        sourceLabel: "Source: Reforbs Knowledge Base, page 5",
        confidence: 25.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // M. House Rules, Curfew, Visitors & Pets
    // -------------------------------------------------------------------------
    case "RULES_RESTRICTIONS": {
      const qLower = rawQuery.toLowerCase();
      if (qLower.includes("pet") || qLower.includes("dog") || qLower.includes("cat")) {
        recordKnowledgeGap("PET_POLICY", rawQuery);
        return {
          text: "The reviewed website does not state a pet policy. Please confirm directly with Reforbs at 7420040241.",
          pageNumber: 6,
          sourceLabel: "Source: Reforbs Knowledge Base, page 6",
          confidence: 25.0,
          isFallback: false,
        };
      }

      if (qLower.includes("visitor") || qLower.includes("guest") || qLower.includes("friend")) {
        return {
          text:
            "The website describes a social, community-oriented environment and says tenants can invite friends over, " +
            "but it does not publish formal visitor rules, hours, or restrictions. Confirm the current visitor policy with Reforbs at 7420040241.",
          pageNumber: 6,
          sourceLabel: "Source: Reforbs Knowledge Base, page 6",
          confidence: 25.0,
          isFallback: false,
        };
      }

      recordKnowledgeGap("CURFEW_HOUSE_RULES", rawQuery);
      return {
        text:
          "Curfew and entry-time rules are not specified on the reviewed website. " +
          "Contact the Reforbs team at 7420040241 to confirm the current house rules.",
        pageNumber: 6,
        sourceLabel: "Source: Reforbs Knowledge Base, page 6",
        confidence: 25.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // N. Visits & Tours
    // -------------------------------------------------------------------------
    case "VISIT_TOUR": {
      return {
        text:
          "The reviewed homepage does not give a specific tour-booking process. " +
          "Contact 7420040241 to ask whether a visit can be arranged for the property you prefer.",
        pageNumber: 6,
        sourceLabel: "Source: Reforbs Knowledge Base, page 6",
        confidence: 25.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // O. Differences / Why Reforbs
    // -------------------------------------------------------------------------
    case "DIFFERENCE_FROM_HOSTEL": {
      return {
        text:
          "Reforbs describes its approach as more than accommodation. Its website emphasizes privacy, " +
          "personalized spaces, comfort, daily support, freedom, social connection, and community building.",
        pageNumber: 7,
        sourceLabel: "Source: Reforbs Knowledge Base, page 7",
        confidence: 25.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // P. Off-Topic
    // -------------------------------------------------------------------------
    case "OFF_TOPIC": {
      recordKnowledgeGap("OFF_TOPIC_QUERY", rawQuery);
      return {
        text:
          "I couldn't find that information in the Reforbs knowledge base. " +
          "I can only assist with verified information about Reforbs properties, amenities, and accommodation in Pune. " +
          "Please contact the Reforbs team at 7420040241 for any accommodation inquiries.",
        pageNumber: null,
        sourceLabel: null,
        confidence: 0,
        isFallback: true,
        isOffTopic: true,
      };
    }

    // -------------------------------------------------------------------------
    // Default / General Inquiries
    // -------------------------------------------------------------------------
    default: {
      recordKnowledgeGap("UNVERIFIED_GENERAL_DETAIL", rawQuery);
      return {
        text:
          "I couldn't verify that detail from the information available on the Reforbs website. " +
          "For the latest details, please contact the Reforbs team at 7420040241. " +
          "The website lists Reforbs in Viman Nagar, Pune, Maharashtra.",
        pageNumber: 2,
        sourceLabel: "Source: Reforbs Knowledge Base, page 2",
        confidence: 10.0,
        isFallback: true,
      };
    }
  }
}
