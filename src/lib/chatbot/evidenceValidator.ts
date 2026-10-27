/**
 * Evidence Validation Layer
 *
 * Validates retrieved facts against the customer's detected intent based on
 * reforbs_knowledge_base_v3.pdf.
 *
 * If evidence is missing, ambiguous, or unconfirmed in the PDF, returns an
 * honest, intent-specific response rather than a misleading or generic fallback.
 *
 * Records knowledge gaps in local diagnostics.
 */

import { IntentDetectionResult } from "./intentDetector";
import { recordKnowledgeGap } from "./knowledgeGaps";
import { SearchResult } from "./pdfKnowledgeEngine";
import {
  CONTACT_PHONE,
  PRIMARY_ADDRESS,
  GOOGLE_MAPS_LINK,
} from "./knowledgeConfig";

export function validateAndGenerateResponse(
  rawQuery: string,
  analysis: IntentDetectionResult
): SearchResult {
  const { intent, entities } = analysis;

  switch (intent) {
    // -------------------------------------------------------------------------
    // 1. Off-Topic Query
    // -------------------------------------------------------------------------
    case "OFF_TOPIC": {
      recordKnowledgeGap("OFF_TOPIC_QUERY", rawQuery);
      return {
        text:
          "I'm dedicated to helping you with Reforbs accommodation, properties, amenities, and living in Pune. If you have any questions about our spaces in Viman Nagar or would like to schedule a visit, feel free to ask or call us at " +
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
    // 2. Full Address of ReForbs Co-Living / Sanjay Park
    // -------------------------------------------------------------------------
    case "FULL_ADDRESS": {
      return {
        text:
          `The primary address supplied for ReForbs Co-Living is: ${PRIMARY_ADDRESS}.\n\n` +
          `Google Maps location: ${GOOGLE_MAPS_LINK}\n\n` +
          `Important scope note: This complete address is specifically provided for the Sanjay Park property. Full street addresses and individual map links for other named properties (such as Shubh Gateway, Reforbs Living Sakore Nagar, Moksha, Vipasana, and Shubh Nirvana) are not detailed in the current knowledge base. For property-specific directions, please contact management at ${CONTACT_PHONE}.`,
        pageNumber: 1,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 1 & 2",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 3. Airport Distance
    // -------------------------------------------------------------------------
    case "AIRPORT_DISTANCE": {
      return {
        text:
          `According to the owner-supplied estimates in the knowledge base, ReForbs Co-Living (Sanjay Park, Lane 3, Viman Nagar) is approximately 2.1 km (around an 11-minute drive via New Airport Road / Symbiosis Road) from Pune International Airport.\n\n` +
          `Please note that this is an approximate owner-supplied estimate and actual journey time is traffic-dependent. For assistance or directions, call ${CONTACT_PHONE}.`,
        pageNumber: 2,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 2",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 4. Nearest PG to Pune Airport
    // -------------------------------------------------------------------------
    case "NEAREST_AIRPORT": {
      return {
        text:
          `For the Sanjay Park property (Lane 3, Viman Nagar), the knowledge base states an approximate road distance of 2.1 km (around an 11-minute drive) to Pune International Airport. Additionally, Moksha, Vipasana, and Shubh Nirvana are located in Viman Nagar.\n\n` +
          `However, the knowledge base does not contain comparable verified location data or distance rankings for every property, so it cannot definitively claim that Sanjay Park is the nearest among all ReForbs properties. Times are estimates, not guarantees. Please contact ${CONTACT_PHONE} for route and property guidance.`,
        pageNumber: 2,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 2",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 5. Symbiosis Law School (SLS) Distance
    // -------------------------------------------------------------------------
    case "SLS_DISTANCE": {
      return {
        text:
          `The knowledge base provides two verified references for Symbiosis Law School (SLS) in Viman Nagar:\n\n` +
          `1. Shubh Gateway student housing is located directly opposite Symbiosis Law School.\n` +
          `2. For ReForbs Co-Living at Sanjay Park, the approximate owner-supplied drive estimate is 1.8 km (around a 10-minute drive), though route and traffic may vary.\n\n` +
          `To check current room vacancies or schedule a visit, call ${CONTACT_PHONE}.`,
        pageNumber: 2,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 2 & 3",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 6. Which ReForbs properties are in Viman Nagar?
    // -------------------------------------------------------------------------
    case "VIMAN_NAGAR_PROPERTIES": {
      return {
        text:
          `The v3 property directory lists the following co-living properties in Viman Nagar:\n` +
          `• Moksha (Viman Nagar)\n` +
          `• Vipasana (Viman Nagar)\n` +
          `• Shubh Nirvana (Viman Nagar)\n` +
          `• ReForbs Co-Living - Sanjay Park (Sanjay Park, Lane 3, Viman Nagar, Pune 411032)\n\n` +
          `In addition, Shubh Gateway student housing is located opposite Symbiosis Law School in Viman Nagar, and Reforbs Living Sakore Nagar is nearby.\n\n` +
          `Please note: Being listed in Viman Nagar does not establish a comparative distance ranking between them. For property-specific details, please call ${CONTACT_PHONE}.`,
        pageNumber: 2,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 2 & 3",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 7. Cheapest PG Comparison
    // -------------------------------------------------------------------------
    case "CHEAPEST_PRICE_COMPARISON": {
      recordKnowledgeGap("CHEAPEST_RENT_COMPARISON", rawQuery);
      return {
        text:
          `The knowledge base does not contain comparable current prices for all properties, so it cannot reliably identify the cheapest PG. Rent varies by property, wing, and by single- or double-occupancy room type.\n\n` +
          `Please call ${CONTACT_PHONE} and ask the management team for current property-wise rates.`,
        pageNumber: 4,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 4",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 8. Security Deposit
    // -------------------------------------------------------------------------
    case "SECURITY_DEPOSIT": {
      recordKnowledgeGap("SECURITY_DEPOSIT_AMOUNT", rawQuery);
      return {
        text:
          `A security deposit is required before move-in according to the supplied notes, but the exact amount, refund conditions, deduction rules, and refund timeline were not provided in the knowledge base.\n\n` +
          `Please confirm the current written terms with management at ${CONTACT_PHONE} before paying.`,
        pageNumber: 4,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 4",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 9. Rent Inclusions: Wi-Fi and Water
    // -------------------------------------------------------------------------
    case "RENT_INCLUSIONS_WIFI_WATER": {
      return {
        text:
          `Yes, the supplied owner notes state that high-speed Wi-Fi, water, and regular maintenance are bundled in standard packages.\n\n` +
          `However, electricity may be variable or sub-metered, and exact inclusions can vary depending on the chosen room and package. Confirm the precise package details for your selected room with management at ${CONTACT_PHONE} before payment.`,
        pageNumber: 4,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 4 & 6",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 10. Electricity Inclusion
    // -------------------------------------------------------------------------
    case "ELECTRICITY_INCLUSION": {
      return {
        text:
          `According to the supplied notes, electricity is not automatically bundled in standard rent and may be variable or sub-metered based on consumption.\n\n` +
          `Please confirm the precise package, utility arrangement, and electricity charges for your chosen room with management at ${CONTACT_PHONE} before payment.`,
        pageNumber: 4,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 4 & 6",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 11. Food Inclusions
    // -------------------------------------------------------------------------
    case "FOOD_INCLUSIONS": {
      recordKnowledgeGap("FOOD_MEAL_PLAN_INCLUSIONS", rawQuery);
      return {
        text:
          `The supplied owner information states that standard rent does not include fully catered daily meals. Instead, functional kitchen facilities are available for residents to cook their own food.\n\n` +
          `Please confirm any optional meal plans or local food arrangements with management at ${CONTACT_PHONE}.`,
        pageNumber: 6,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 6",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 12. Cook My Own Food
    // -------------------------------------------------------------------------
    case "COOK_FOOD": {
      return {
        text:
          `Yes! Functional kitchen spaces are described in the knowledge base so residents can cook their own meals. Standard rent does not force daily meal packages on you.\n\n` +
          `Please confirm whether the kitchen is private or shared for your selected property and room by contacting management at ${CONTACT_PHONE}.`,
        pageNumber: 6,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 6",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 13. Single or Double Occupancy
    // -------------------------------------------------------------------------
    case "OCCUPANCY_SINGLE_DOUBLE": {
      return {
        text:
          `Yes. The supplied owner information describes both single-occupancy and designated double-occupancy room options, depending on the property and room type.\n\n` +
          `Because options, layout availability, and pricing vary by property, please confirm current availability and rates with management at ${CONTACT_PHONE}.`,
        pageNumber: 3,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 3 & 5",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 14. People per Room
    // -------------------------------------------------------------------------
    case "PEOPLE_PER_ROOM": {
      return {
        text:
          `Room capacity depends on the selected room type. The supplied information states that single-occupancy (1 resident) and designated double-occupancy (2 residents) options may exist depending on the room and property.\n\n` +
          `Please confirm the specific room configuration being discussed with management at ${CONTACT_PHONE} before finalizing.`,
        pageNumber: 5,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 5",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 15. People per PG / Building Capacity
    // -------------------------------------------------------------------------
    case "PEOPLE_PER_PG": {
      return {
        text:
          `The supplied notes describe a maximum of 3 residents per 2BHK floor. However, this is not the total capacity of an entire building or PG property.\n\n` +
          `The knowledge base does not specify the overall building capacity for each property (though a 7-room configuration is mentioned for the Moksha wing). Please ask which property or floor you are interested in, and contact management at ${CONTACT_PHONE} to confirm total building capacity.`,
        pageNumber: 3,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 3 & 5",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 16. Couples & Partner Cohabitation Policy
    // -------------------------------------------------------------------------
    case "COUPLES_POLICY": {
      recordKnowledgeGap("COUPLES_SHARED_OCCUPANCY_POLICY", rawQuery, {
        property: entities.property,
      });

      return {
        text:
          `The supplied information states that designated double-occupancy rooms may be available, but it does not confirm the policy for unmarried couples or partner stays.\n\n` +
          `Do not assume couples are automatically allowed or prohibited. Please contact management at ${CONTACT_PHONE} for the current property-specific rule.`,
        pageNumber: 5,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 5",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 17. Co-Ed / Unisex Policy
    // -------------------------------------------------------------------------
    case "CO_ED_POLICY": {
      recordKnowledgeGap("GENDER_ELIGIBILITY_RULES", rawQuery);
      return {
        text:
          `The supplied notes describe a co-ed/unisex arrangement with segregated apartment wings or flat-sharing configurations intended to support privacy.\n\n` +
          `Please confirm the current arrangement and eligibility rules for your specific property with management at ${CONTACT_PHONE}.`,
        pageNumber: 5,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 5",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 18. CCTV & Security
    // -------------------------------------------------------------------------
    case "CCTV_SECURITY": {
      return {
        text:
          `The supplied notes mention CCTV monitoring at common entries and controlled access points. The exact setup at each property should be confirmed.\n\n` +
          `Please note: The knowledge base does not promise complete safety or mention security guards, emergency response systems, or room-level CCTV. Contact ${CONTACT_PHONE} for property-specific security details.`,
        pageNumber: 8,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 8",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 19. Maintenance Resolution Speed
    // -------------------------------------------------------------------------
    case "MAINTENANCE_SPEED": {
      return {
        text:
          `The supplied notes mention regular maintenance and day-to-day support, but no guaranteed response time or ticket resolution timeline was provided in the knowledge base.\n\n` +
          `Please contact the property management team at ${CONTACT_PHONE} to report an issue and confirm response arrangements.`,
        pageNumber: 8,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 8",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 20. Visit Before Booking
    // -------------------------------------------------------------------------
    case "VISIT_BEFORE_BOOKING": {
      return {
        text:
          `Yes. The supplied notes recommend scheduling a physical property visit before paying any booking amount.\n\n` +
          `Please contact ${CONTACT_PHONE} to arrange a walkthrough and confirm the booking process.`,
        pageNumber: 7,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 7",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 21. Documents Required
    // -------------------------------------------------------------------------
    case "DOCUMENTS_REQUIRED": {
      recordKnowledgeGap("DOCUMENT_VERIFICATION_LIST", rawQuery);
      return {
        text:
          `The supplied notes mention Aadhaar, PAN, and a student ID or employment letter as possible requirements for lease processing and verification.\n\n` +
          `Please confirm exactly which documents apply to you and your chosen property with management at ${CONTACT_PHONE}.`,
        pageNumber: 7,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 7",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 22. Live Availability & Immediate Move-In
    // -------------------------------------------------------------------------
    case "AVAILABILITY_VACANCIES": {
      recordKnowledgeGap("LIVE_ROOM_AVAILABILITY", rawQuery, {
        property: entities.property,
      });

      return {
        text:
          `The chatbot does not have access to live room inventory or confirmed move-in dates from this static knowledge base.\n\n` +
          `Please call ${CONTACT_PHONE} with your preferred property, room type, and move-in date to check real-time availability.`,
        pageNumber: 7,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 7",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 23. Minimum Stay & Lease Tenure
    // -------------------------------------------------------------------------
    case "MINIMUM_STAY_LEASE": {
      return {
        text:
          `These terms are described as being set out in the individual rent agreement. The exact minimum stay duration, lock-in period, or notice period were not provided in the knowledge base.\n\n` +
          `Please ask management at ${CONTACT_PHONE} for the agreement applicable to the selected property and review it before paying.`,
        pageNumber: 7,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 7",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 24. Cancellation & Refund Policy
    // -------------------------------------------------------------------------
    case "CANCELLATION_REFUND": {
      recordKnowledgeGap("CANCELLATION_REFUND_POLICY", rawQuery);
      return {
        text:
          `The current cancellation and refund terms were not provided in the knowledge base.\n\n` +
          `Please ask management at ${CONTACT_PHONE} for the written policy, including deposit deductions and refund timelines, before paying.`,
        pageNumber: 7,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 7",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 25. Unspecified College Proximity (Clarification)
    // -------------------------------------------------------------------------
    case "UNSPECIFIED_COLLEGE": {
      return {
        text:
          `Which college or university are you looking to stay near? (For example, Shubh Gateway is located directly opposite Symbiosis Law School in Viman Nagar.)\n\n` +
          `Please let us know your college name or call ${CONTACT_PHONE} for personalized guidance.`,
        pageNumber: 3,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 3",
        confidence: 28.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 26. Unspecified Office Proximity (Clarification)
    // -------------------------------------------------------------------------
    case "UNSPECIFIED_OFFICE": {
      return {
        text:
          `Which office, business park, or company are you looking to stay near? Reforbs properties are located in Viman Nagar and Sakore Nagar, Pune (near Weikfield IT Citi Info Park, Solitaire Business Hub, Sky Vista, and Nyati Unitree).\n\n` +
          `Please let us know your work location or call ${CONTACT_PHONE} for personalized guidance.`,
        pageNumber: 2,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 2 & 3",
        confidence: 28.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 27. Nearest Location Comparison (e.g. Kondhwa)
    // -------------------------------------------------------------------------
    case "NEAREST_LOCATION": {
      const loc = entities.location || "your location";
      recordKnowledgeGap("NEAREST_LOCATION_DISTANCE", rawQuery, {
        location: entities.location,
      });

      return {
        text:
          `Reforbs properties are located in Viman Nagar and Sakore Nagar in East Pune. The knowledge base does not contain verified travel distance calculations from ${loc} to each specific property, nor does Reforbs have a property in ${loc}.\n\n` +
          `For commute recommendations from ${loc} to our Viman Nagar residences, please call ${CONTACT_PHONE}.`,
        pageNumber: 2,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 2 & 3",
        confidence: 28.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 28. General Amenities or Target Amenity
    // -------------------------------------------------------------------------
    case "AMENITIES": {
      if (entities.targetAmenity === "Wi-Fi") {
        return {
          text:
            `High-speed Wi-Fi is advertised across Reforbs properties. The supplied notes say Wi-Fi is bundled with standard packages; please confirm the setup for your selected room and package with management at ${CONTACT_PHONE}.`,
          pageNumber: 6,
          sourceLabel: "Source: Reforbs Knowledge Base v3, page 6",
          confidence: 28.0,
          isFallback: false,
        };
      }

      if (entities.targetAmenity === "Laundry") {
        return {
          text:
            `Laundry facilities are mentioned in the knowledge base. Pricing, self-service vs. service arrangements, and availability at each property need confirmation with management at ${CONTACT_PHONE}.`,
          pageNumber: 6,
          sourceLabel: "Source: Reforbs Knowledge Base v3, page 6",
          confidence: 28.0,
          isFallback: false,
        };
      }

      if (entities.targetAmenity === "Parking") {
        return {
          text:
            `Parking is listed among general amenities in the knowledge base. Please confirm vehicle type (two-wheeler / four-wheeler), availability, and any parking charges with management at ${CONTACT_PHONE}.`,
          pageNumber: 6,
          sourceLabel: "Source: Reforbs Knowledge Base v3, page 6",
          confidence: 28.0,
          isFallback: false,
        };
      }

      if (entities.targetAmenity === "Daily Cleaning") {
        return {
          text:
            `Periodic housekeeping for common spaces and regular housekeeping are mentioned in the knowledge base. Please note: Frequency and room-cleaning scope are not fixed, and daily in-room cleaning is not promised. Confirm housekeeping details with management at ${CONTACT_PHONE}.`,
          pageNumber: 6,
          sourceLabel: "Source: Reforbs Knowledge Base v3, page 6",
          confidence: 28.0,
          isFallback: false,
        };
      }

      if (entities.targetAmenity === "Kitchen") {
        return {
          text:
            `Functional kitchen spaces are described in the knowledge base, and residents can cook their own meals. Confirm whether the kitchen is private or shared at your selected property with management at ${CONTACT_PHONE}.`,
          pageNumber: 6,
          sourceLabel: "Source: Reforbs Knowledge Base v3, page 6",
          confidence: 28.0,
          isFallback: false,
        };
      }

      if (entities.targetAmenity === "AC") {
        return {
          text:
            `AC is mentioned in the supplied notes as a premium amenity. Please confirm whether AC is available in your selected room and whether its use is included in the rent or billed separately by contacting management at ${CONTACT_PHONE}.`,
          pageNumber: 6,
          sourceLabel: "Source: Reforbs Knowledge Base v3, page 6",
          confidence: 28.0,
          isFallback: false,
        };
      }

      return {
        text:
          `The general amenity list in the Reforbs knowledge base includes:\n\n` +
          `• High-speed Wi-Fi\n` +
          `• TV / media setup\n` +
          `• Work desks / study spaces\n` +
          `• Living and dining areas\n` +
          `• Kitchen facilities (residents can cook)\n` +
          `• Housekeeping and periodic common-space cleaning\n` +
          `• Parking facilities\n` +
          `• Laundry facilities\n` +
          `• AC (mentioned as a premium amenity)\n\n` +
          `The supplied notes say Wi-Fi, water, and maintenance are bundled in standard packages, but exact inclusions, conditions, and other charges must be confirmed for the selected property and room package. Please call ${CONTACT_PHONE} for details.`,
        pageNumber: 6,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 6",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 29. Furniture Inventory
    // -------------------------------------------------------------------------
    case "FURNITURE_INVENTORY": {
      recordKnowledgeGap("FURNITURE_INVENTORY", rawQuery);
      return {
        text:
          `The supplied notes mention standard bedding, furnished apartment-style layouts, common living/dining areas, and kitchens.\n\n` +
          `A complete room-by-room furniture and appliance inventory was not supplied in the knowledge base; please confirm the exact setup for your chosen property with management at ${CONTACT_PHONE}.`,
        pageNumber: 5,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 5",
        confidence: 28.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 30. House Rules, Curfew, Visitors, Pets, Smoking
    // -------------------------------------------------------------------------
    case "RULES_RESTRICTIONS": {
      recordKnowledgeGap("CURFEW_HOUSE_RULES", rawQuery);
      return {
        text:
          `Here are the house rules and guidelines noted in the knowledge base:\n\n` +
          `• Visitors & Overnight Guests: The public website describes a social/community environment and says residents can invite friends, but formal visitor hours and overnight-guest rules were not provided.\n` +
          `• Curfew: No specific curfew or gate-closing entry restrictions were supplied in the notes.\n` +
          `• Pets, Smoking & Alcohol: The supplied information does not confirm whether pets, smoking, or alcohol are permitted.\n\n` +
          `Please contact management at ${CONTACT_PHONE} to confirm the current property-specific house rules.`,
        pageNumber: 8,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 8",
        confidence: 28.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 31. Rent Pricing General
    // -------------------------------------------------------------------------
    case "RENT_PRICING": {
      recordKnowledgeGap("PROPERTY_SPECIFIC_RENT", rawQuery);
      return {
        text:
          `Rent varies by property/wing and by single- or double-occupancy room type. Exact current prices must be confirmed with the management team at ${CONTACT_PHONE}.\n\n` +
          `The supplied notes mention that Wi-Fi, water, and maintenance are bundled in standard packages, while electricity may be variable or sub-metered. Please call for current rate cards.`,
        pageNumber: 4,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 4",
        confidence: 28.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 32. Contact Details & Support
    // -------------------------------------------------------------------------
    case "CONTACT_SUPPORT": {
      return {
        text:
          `You can reach Reforbs directly:\n\n` +
          `• Phone / WhatsApp: ${CONTACT_PHONE}\n` +
          `• Primary Address: ${PRIMARY_ADDRESS}\n` +
          `• Google Maps: ${GOOGLE_MAPS_LINK}\n\n` +
          `Call ${CONTACT_PHONE} for property enquiries, current rent, room availability, site visits, and policy questions.`,
        pageNumber: 1,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 1 & 8",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 33. Property Directory
    // -------------------------------------------------------------------------
    case "PROPERTY_DIRECTORY": {
      return {
        text:
          `ReForbs offers accommodation for students and working professionals in Pune:\n\n` +
          `Student Housing:\n` +
          `1. Shubh Gateway — Situated directly opposite Symbiosis Law School (SLS)\n` +
          `2. Reforbs Living Sakore Nagar — Located in Sakore Nagar\n\n` +
          `Co-Living (Professionals & Students):\n` +
          `3. Moksha — Viman Nagar (notes mention a 7-room configuration)\n` +
          `4. Vipasana — Viman Nagar\n` +
          `5. Shubh Nirvana — Viman Nagar\n` +
          `6. ReForbs Co-Living - Sanjay Park — Sanjay Park, Lane 3, Viman Nagar, Pune 411032\n\n` +
          `Single- and double-occupancy options may exist depending on property and room. Which property would you like to explore? Call ${CONTACT_PHONE} to check availability!`,
        pageNumber: 3,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 3",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 34. Property-Specific Query
    // -------------------------------------------------------------------------
    case "PROPERTY_SPECIFIC": {
      const prop = entities.property || "Reforbs property";

      if (prop.includes("Sanjay Park") || prop.includes("ReForbs Co-Living")) {
        return {
          text:
            `ReForbs Co-Living (Sanjay Park) is located at ${PRIMARY_ADDRESS} (Google Maps: ${GOOGLE_MAPS_LINK}).\n\n` +
            `Drive estimates supplied with owner answers:\n` +
            `• Pune International Airport: ~2.1 km (approx. 11 min)\n` +
            `• Symbiosis Law School: ~1.8 km (approx. 10 min)\n` +
            `• IIHM Pune: ~2.4 km (approx. 15 min)\n` +
            `• Christ College: ~6.3 km (approx. 20 min)\n\n` +
            `Layouts feature 2BHK apartment floors (maximum 3 residents per 2BHK floor). To check vacancies or schedule a visit, call ${CONTACT_PHONE}.`,
          pageNumber: 2,
          sourceLabel: "Source: Reforbs Knowledge Base v3, page 2 & 3",
          confidence: 28.0,
          isFallback: false,
        };
      }

      if (prop.includes("Shubh Gateway")) {
        return {
          text:
            `Shubh Gateway is student housing located directly opposite Symbiosis Law School (SLS) in Viman Nagar.\n\n` +
            `Full street address, property-specific prices, and live availability were not detailed in the knowledge base. Please call ${CONTACT_PHONE} to confirm current rates and schedule a walkthrough.`,
          pageNumber: 3,
          sourceLabel: "Source: Reforbs Knowledge Base v3, page 3",
          confidence: 28.0,
          isFallback: false,
        };
      }

      if (prop.includes("Sakore Nagar")) {
        return {
          text:
            `Reforbs Living Sakore Nagar provides student housing referencing Sakore Nagar, Pune.\n\n` +
            `Exact street address and current pricing are not supplied in the knowledge base. Please contact management at ${CONTACT_PHONE} for detailed location and rate information.`,
          pageNumber: 3,
          sourceLabel: "Source: Reforbs Knowledge Base v3, page 3",
          confidence: 28.0,
          isFallback: false,
        };
      }

      if (prop.includes("Moksha")) {
        return {
          text:
            `Moksha is a co-living property in Viman Nagar. Notes mention a 7-room configuration, though the exact scope and capacity should be confirmed.\n\n` +
          `Detailed property-specific inclusions and current rent need confirmation from management. Please call ${CONTACT_PHONE} for current details.`,
          pageNumber: 3,
          sourceLabel: "Source: Reforbs Knowledge Base v3, page 3",
          confidence: 28.0,
          isFallback: false,
        };
      }

      if (prop.includes("Vipasana") || prop.includes("Shubh Nirvana")) {
        return {
          text:
            `${prop} is a co-living residence located in Viman Nagar, Pune.\n\n` +
            `Detailed property-specific inclusions, exact street addresses, and current pricing need confirmation from management. Please call ${CONTACT_PHONE} to check availability and schedule a visit.`,
          pageNumber: 3,
          sourceLabel: "Source: Reforbs Knowledge Base v3, page 3",
          confidence: 28.0,
          isFallback: false,
        };
      }

      return {
        text:
          `${prop} is part of the Reforbs portfolio in Pune. For current property-specific inclusions, address details, and pricing, please contact management at ${CONTACT_PHONE}.`,
        pageNumber: 3,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 3",
        confidence: 25.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 35. Visit / Tour
    // -------------------------------------------------------------------------
    case "VISIT_TOUR": {
      return {
        text:
          `Scheduling a property walkthrough is strongly recommended before paying any booking amount!\n\n` +
          `Please contact host Arpit directly at ${CONTACT_PHONE} to arrange a viewing at your preferred Reforbs residence in Viman Nagar.`,
        pageNumber: 7,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 7",
        confidence: 28.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 36. Difference from Standard Hostel
    // -------------------------------------------------------------------------
    case "DIFFERENCE_FROM_HOSTEL": {
      return {
        text:
          `Reforbs is designed around community, comfort, and flexibility for students and working professionals:\n\n` +
          `• Flexible room choices: Single- and double-occupancy layouts rather than cramped multi-sharing\n` +
          `• Freedom: Zero arbitrary bans, freedom to personalize your space\n` +
          `• Cooking freedom: Functional kitchens provided so you are not forced into rigid mess food\n` +
          `• Bundled utilities: Wi-Fi, water, and maintenance bundled with standard packages\n\n` +
          `To experience Reforbs firsthand, call ${CONTACT_PHONE} to book a free walkthrough!`,
        pageNumber: 2,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 2 & 6",
        confidence: 28.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 37. Default Fallback
    // -------------------------------------------------------------------------
    default: {
      recordKnowledgeGap("UNVERIFIED_GENERAL_DETAIL", rawQuery);
      return {
        text:
          `I don't have a verified answer for that detail in the current ReForbs knowledge base.\n\n` +
          `Please contact the team at ${CONTACT_PHONE} to confirm the latest information.`,
        pageNumber: 8,
        sourceLabel: "Source: Reforbs Knowledge Base v3, page 8",
        confidence: 15.0,
        isFallback: true,
      };
    }
  }
}
