/**
 * Evidence Validation Layer
 * Authoritative Operational Source: reforbs_chatbot_owner_qa_knowledge.pdf
 * (public/knowledge/reforbs-owner-qa.pdf)
 *
 * Validates retrieved facts against the customer's detected intent.
 * Strict rules:
 * - No hallucinations or invented facts.
 * - Always honor owner document constraints, omissions, and conflict registers.
 * - For missing data, state clearly that it is not provided in the owner document
 *   and route to sales: "Kindly get in touch with our representative on below number - 7420040241".
 * - All availability, vacancy, move-in, and booking requests hand off to human sales on 7420040241.
 */

import { IntentDetectionResult } from "./intentDetector";
import { recordKnowledgeGap } from "./knowledgeGaps";
import { SearchResult } from "./pdfKnowledgeEngine";
import {
  PROPERTIES_V4,
  PropertyKnowledge,
  CONTACT_PHONE,
  CONTACT_EMAIL,
  APPROVED_FALLBACK,
} from "./knowledgeConfig";
import { sanitizeVisibleText } from "./phoneSanitizer";

function findProperty(nameOrAlias?: string): PropertyKnowledge | undefined {
  if (!nameOrAlias) return undefined;
  const lower = nameOrAlias.toLowerCase().trim();
  return PROPERTIES_V4.find(
    (p) =>
      p.name.toLowerCase() === lower ||
      p.aliases.some((a) => lower.includes(a) || a.includes(lower))
  );
}

function cleanPhoneTarget(phone?: string): string {
  if (!phone) return "7420040241";
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 ? digits.slice(-10) : "7420040241";
}

export function validateAndGenerateResponse(
  rawQuery: string,
  analysis: IntentDetectionResult
): SearchResult {
  const innerResult = _validateAndGenerateResponseInner(rawQuery, analysis);
  return {
    ...innerResult,
    text: sanitizeVisibleText(innerResult.text),
    phoneTarget: cleanPhoneTarget(innerResult.phoneTarget),
  };
}

function _validateAndGenerateResponseInner(
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
          "I'm dedicated to helping you with Reforbs accommodation, properties, amenities, room options, and living in Pune. Please use the Call Us button below to speak directly with our team!",
        pageNumber: null,
        sourceLabel: null,
        confidence: 0,
        isFallback: true,
        isOffTopic: true,
      };
    }

    // -------------------------------------------------------------------------
    // 2. Property Directory / Category Listing
    // -------------------------------------------------------------------------
    case "PROPERTY_DIRECTORY": {
      if (entities.targetCategory === "coliving") {
        return {
          text:
            "Reforbs co-living properties in Pune (Page 2 & 7–9):\n\n" +
            "• Nirvana (Plot 34, Lane 2A, Sanjay Park) — Twin: ₹17,000/month | Private 1RK: ₹29,000/month. Attached kitchen, AC, couple-friendly, zero lock-in.\n" +
            "• Moksha (Plot 61, Lane 2A, Sanjay Park) — Twin: ₹17,000/month | Private: ₹24,000/month. 3BHK layout (max 4/floor), AC, couple-friendly, zero lock-in.\n" +
            "• Vipasna (Plot 36, Lane 3, Sanjay Park) — Twin: ₹17,000/month | Private Ensuite: ₹27,000/month. Hotel-style ensuite, AC, couple-friendly, zero lock-in.\n\n" +
            "For inquiries, please use the Call Us button below.",
          pageNumber: 2,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 2",
          confidence: 30.0,
          isFallback: false,
          phoneTarget: "7420040241",
        };
      }

      if (entities.targetCategory === "student") {
        return {
          text:
            "Reforbs student accommodation properties in Pune (Page 2 & 13–15):\n\n" +
            "• Shubh Gateway (Opp. SLS Gate, Viman Nagar) — Girls' Twin: ₹25,000/month | Boys' Twin: ₹27,000/month (Deposit: ₹40,000). Breakfast & dinner included, laundry 2x/wk. Opposite-gender visitors not allowed. Annual lock-in.\n" +
            "• Brindavan (Behind Dr Lal Path Lab, Sakore Nagar) — Twin: ₹27,000/month | Private: ₹32,000/month (Deposit: ₹30,000). All 3 meals included, laundry 2x/wk. Opposite-gender visitors not allowed. Annual lock-in.\n" +
            "• Vairagya (Near Symbiosis University, Lavale) — Triple: ₹15,000/month | Twin: ₹17,000/month (Deposit: ₹20,000). Running mess included, non-AC. Opposite-gender visitors not allowed. Annual lock-in.\n\n" +
            "For inquiries, please use the Call Us button below.",
          pageNumber: 2,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 2",
          confidence: 30.0,
          isFallback: false,
          phoneTarget: "7420040241",
        };
      }

      return {
        text:
          "Reforbs operates 9 active residences in Pune across three categories:\n\n" +
          "Co-Living (3):\n" +
          "• Nirvana (Plot 34, Lane 2A, Sanjay Park) — Twin: ₹17,000/month | Private 1RK: ₹29,000/month. Attached kitchen, couple-friendly, zero lock-in.\n" +
          "• Moksha (Plot 61, Lane 2A, Sanjay Park) — Twin: ₹17,000/month | Private: ₹24,000/month. 3BHK layout (max 4/floor), couple-friendly, zero lock-in.\n" +
          "• Vipasna (Plot 36, Lane 3, Sanjay Park) — Twin: ₹17,000/month | Private Ensuite: ₹27,000/month. Hotel-style ensuite, couple-friendly, zero lock-in.\n\n" +
          "Student Accommodation (3):\n" +
          "• Shubh Gateway (Opp. SLS Gate, Viman Nagar) — Girls' Twin: ₹25,000/month | Boys' Twin: ₹27,000/month. Meals & laundry included. Annual lock-in.\n" +
          "• Brindavan (Behind Dr Lal Path Lab, Sakore Nagar) — Twin: ₹27,000/month | Private: ₹32,000/month. All 3 meals & laundry included. Annual lock-in.\n" +
          "• Vairagya (Near Symbiosis University, Lavale) — Triple: ₹15,000/month | Twin: ₹17,000/month. Running mess included, non-AC. Annual lock-in.\n\n" +
          "Company Guesthouses (3) (Dedicated corporate facilities for contracted company employees; not available as regular PGs):\n" +
          "• Park Island (Shastrinagar) — Twin: ₹20,000/month (Deposit: ₹20,000).\n" +
          "• Pillar Homes (Clover Park, Viman Nagar) — Twin: ₹25,000/month (Deposit: ₹25,000).\n" +
          "• Suyog Enclave (Behind Bajaj Finserv, Sakore Nagar) — Twin: ₹25,000/month (Deposit: ₹25,000).\n\n" +
          "For inquiries, please use the Call Us button below or email " +
          CONTACT_EMAIL +
          ".",
        pageNumber: 2,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 2",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 3. Regular PG vs Company Guesthouse Eligibility
    // -------------------------------------------------------------------------
    case "PROPERTY_ELIGIBILITY": {
      return {
        text:
          "No. Park Island, Pillar Homes, and Suyog Enclave are dedicated company guesthouses, not regular PG accommodation. The owner document states that employees of one dedicated company are allowed to stay. They are not open to the general public or available as regular PG options.",
        pageNumber: 2,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 2, 10 & 11",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 4. Cheapest Price Comparison
    // -------------------------------------------------------------------------
    case "CHEAPEST_PRICE_COMPARISON": {
      if (entities.occupancyType === "single") {
        return {
          text:
            "Among the private-room rates listed, Moksha is lowest at ₹24,000 per month (security deposit: ₹24,000). Private room comparison:\n" +
            "• Moksha (Co-Living, Sanjay Park): ₹24,000/month\n" +
            "• Vipasna (Co-Living, Sanjay Park): ₹27,000/month\n" +
            "• Nirvana (Co-Living 1RK, Sanjay Park): ₹29,000/month\n" +
            "• Brindavan (Student Accommodation, Sakore Nagar): ₹32,000/month (all 3 meals included)\n\n" +
            "These are document comparisons, not a live availability guarantee. Please confirm with sales using the Call Us button below.",
          pageNumber: 4,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 4",
          confidence: 30.0,
          isFallback: false,
          phoneTarget: "7420040241",
        };
      }

      if (entities.occupancyType === "double") {
        return {
          text:
            "The lowest listed twin-sharing rent is ₹17,000 per month at Nirvana, Moksha, Vipasna, and Vairagya. Confirm the preferred property’s current availability with sales using the Call Us button below.",
          pageNumber: 4,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 4",
          confidence: 30.0,
          isFallback: false,
          phoneTarget: "7420040241",
        };
      }

      return {
        text:
          "The lowest listed room rate in the owner table is Vairagya triple sharing at ₹15,000 per month (with breakfast and dinner included in running mess). This is a listed starting rate, not confirmation of current availability.\n\n" +
          "Lowest twin-sharing rate: ₹17,000/month at Nirvana, Moksha, Vipasna, and Vairagya.\n" +
          "Lowest private-room rate: ₹24,000/month at Moksha.\n\n" +
          "To check live vacancies, please contact sales using the Call Us button below.",
        pageNumber: 4,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 4",
        confidence: 30.0,
        isFallback: false,
        phoneTarget: "7420040241",
      };
    }

    // -------------------------------------------------------------------------
    // 5. Rent & Pricing
    // -------------------------------------------------------------------------
    case "RENT_PRICING": {
      if (matchedProp) {
        // Shubh Gateway Private check
        if (
          matchedProp.id === "shubh-gateway" &&
          (entities.occupancyType === "single" || rawQuery.toLowerCase().includes("private"))
        ) {
          return {
            text:
              "For Shubh Gateway, the owner table lists 0 beds and rent as NA for private rows, while the deposit column shows ₹40,000. Private occupancy is not listed as available and must not be inferred as an available offer. Please contact sales using the Call Us button below for inquiries.",
            pageNumber: 13,
            sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 13",
            confidence: 30.0,
            isFallback: false,
            phoneTarget: matchedProp.contactPhone || "7057897430",
          };
        }

        // Shubh Gateway Gender-specific Twin check
        if (matchedProp.id === "shubh-gateway") {
          if (entities.targetGender === "girls") {
            return {
              text:
                "At Shubh Gateway (Student Accommodation), girls' twin sharing is ₹25,000/month (security deposit: ₹40,000; 42 beds listed). Includes breakfast and dinner, and laundry twice weekly (up to 5 kg). Opposite-gender visitors are not allowed. Please use the Call Us button below to connect with the management team.",
              pageNumber: 13,
              sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 13",
              confidence: 30.0,
              isFallback: false,
              phoneTarget: matchedProp.contactPhone || "7057897430",
            };
          }
          if (entities.targetGender === "boys") {
            return {
              text:
                "At Shubh Gateway (Student Accommodation), boys' twin sharing is ₹27,000/month (security deposit: ₹40,000; 24 beds listed). Includes breakfast and dinner, and laundry twice weekly (up to 5 kg). Opposite-gender visitors are not allowed. Please use the Call Us button below to connect with the management team.",
              pageNumber: 13,
              sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 13",
              confidence: 30.0,
              isFallback: false,
              phoneTarget: matchedProp.contactPhone || "7057897430",
            };
          }
        }

        // Vairagya Triple check
        if (matchedProp.id === "vairagya" && entities.occupancyType === "triple") {
          return {
            text:
              "At Vairagya (Student Accommodation in Lavale), triple sharing is ₹15,000/month (security deposit: ₹20,000; 27 beds listed). This is the lowest listed rate across Reforbs. Includes breakfast and dinner in running mess; non-AC. Please use the Call Us button below to connect with the management team.",
            pageNumber: 15,
            sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 15",
            confidence: 30.0,
            isFallback: false,
            phoneTarget: matchedProp.contactPhone || "7387614629",
          };
        }

        // Nirvana Twin check
        if (matchedProp.id === "nirvana" && (entities.occupancyType === "double" || rawQuery.toLowerCase().includes("twin"))) {
          return {
            text:
              "At Nirvana (Co-Living), twin sharing is ₹17,000/month (security deposit: ₹17,000; 26 beds listed). Units are independent 1RKs with attached private kitchen, attached washroom, AC, couple-friendly, zero lock-in. Please use the Call Us button below to connect with the host.",
            pageNumber: 7,
            sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 7",
            confidence: 30.0,
            isFallback: false,
            phoneTarget: matchedProp.contactPhone || "7420040241",
          };
        }

        // Moksha Private check
        if (matchedProp.id === "moksha" && (entities.occupancyType === "single" || rawQuery.toLowerCase().includes("private"))) {
          return {
            text:
              "At Moksha (Co-Living), private room rent is ₹24,000/month (security deposit: ₹24,000; 11 beds listed). This is the lowest private room rate in Reforbs. Twin sharing is ₹17,000/month (deposit: ₹17,000; 18 beds listed). AC, attached washrooms, max 4 residents per floor, couple-friendly, zero lock-in. Please use the Call Us button below to connect with the host.",
            pageNumber: 8,
            sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 8",
            confidence: 30.0,
            isFallback: false,
            phoneTarget: matchedProp.contactPhone || "7420040241",
          };
        }

        // General property rent breakdown
        let rentDetails = `Monthly rent at ${matchedProp.name} (${matchedProp.category}):\n`;
        if (matchedProp.doubleRateStr) {
          rentDetails += `• Twin sharing: ${matchedProp.doubleRateStr}\n`;
        }
        if (matchedProp.singleRateStr) {
          rentDetails += `• Private room: ${matchedProp.singleRateStr}\n`;
        }
        if (matchedProp.tripleRateStr) {
          rentDetails += `• Triple sharing: ${matchedProp.tripleRateStr}\n`;
        }
        rentDetails += `• Security deposit: ${matchedProp.securityDeposit}\n`;
        rentDetails += `• Lock-in: ${matchedProp.annualLockIn ? "Annual" : "No"}\n`;
        if (matchedProp.foodPolicy) {
          rentDetails += `• Food: ${matchedProp.foodPolicy}\n`;
        }
        rentDetails += `For inquiries, please use the Call Us button below.`;

        return {
          text: rentDetails,
          pageNumber: matchedProp.pageNumber,
          sourceLabel: `Source: Reforbs Owner Q&A Knowledge, page ${matchedProp.pageNumber}`,
          confidence: 30.0,
          isFallback: false,
          phoneTarget: matchedProp.contactPhone || "7420040241",
        };
      }

      // If no property specified, show lowest listed rates
      return {
        text:
          "Lowest listed rate across the room options in Table 1: Vairagya triple sharing at ₹15,000 per month. Lowest listed twin-sharing rate: ₹17,000 at Nirvana, Moksha, Vipasna, and Vairagya. Lowest listed private-room rate: Moksha at ₹24,000. These are document comparisons, not a live availability or final-quote guarantee. Please specify a property or use the Call Us button below.",
        pageNumber: 3,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 3",
        confidence: 25.0,
        isFallback: false,
        phoneTarget: "7420040241",
      };
    }

    // -------------------------------------------------------------------------
    // 6. Couples Eligibility
    // -------------------------------------------------------------------------
    case "COUPLES_POLICY": {
      if (matchedProp) {
        if (matchedProp.coupleFriendly) {
          return {
            text:
              `Yes. The owner table marks ${matchedProp.name} as Yes for couple-friendly eligibility. Confirm any individual arrangement with the property manager using the Call Us button below.`,
            pageNumber: matchedProp.pageNumber,
            sourceLabel: `Source: Reforbs Owner Q&A Knowledge, page ${matchedProp.pageNumber}`,
            confidence: 30.0,
            isFallback: false,
            phoneTarget: matchedProp.contactPhone || "7420040241",
          };
        } else {
          return {
            text:
              `No. The owner table marks ${matchedProp.name} as No for couple-friendly eligibility. Couple-friendly co-living options are available at Nirvana, Moksha, and Vipasna.`,
            pageNumber: matchedProp.pageNumber,
            sourceLabel: `Source: Reforbs Owner Q&A Knowledge, page ${matchedProp.pageNumber}`,
            confidence: 30.0,
            isFallback: false,
          };
        }
      }

      return {
        text:
          "Couples are welcome at Reforbs Co-Living properties (Nirvana, Moksha, and Vipasna). Student accommodations and company guesthouses are not couple-friendly.",
        pageNumber: 4,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 4",
        confidence: 30.0,
        isFallback: false,
        phoneTarget: "7420040241",
      };
    }

    // -------------------------------------------------------------------------
    // 7. Amenities (AC, Wi-Fi, Cleaning, Parking, Washrooms, Power Backup, CCTV)
    // -------------------------------------------------------------------------
    case "AMENITY_SPECIFIC": {
      const q = rawQuery.toLowerCase();

      // AC
      if (q.includes("ac") || q.includes("air condition") || q.includes("cooling")) {
        if (matchedProp) {
          if (matchedProp.airConditioning) {
            return {
              text: `Yes. ${matchedProp.name} has air conditioning (AC) available for residents.`,
              pageNumber: matchedProp.pageNumber,
              sourceLabel: `Source: Reforbs Owner Q&A Knowledge, page ${matchedProp.pageNumber}`,
              confidence: 30.0,
              isFallback: false,
            };
          } else {
            return {
              text: `No. ${matchedProp.name} is marked as non-AC (No AC) with natural ventilation.`,
              pageNumber: matchedProp.pageNumber,
              sourceLabel: `Source: Reforbs Owner Q&A Knowledge, page ${matchedProp.pageNumber}`,
              confidence: 30.0,
              isFallback: false,
            };
          }
        }
        return {
          text: "The table marks AC rooms as available at Nirvana, Moksha, Vipasna, Park Island, Pillar Homes, Suyog Enclave, Shubh Gateway, and Brindavan. Vairagya is marked as non-AC.",
          pageNumber: 4,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 4",
          confidence: 30.0,
          isFallback: false,
        };
      }

      // Wi-Fi
      if (q.includes("wifi") || q.includes("wi-fi") || q.includes("internet") || q.includes("broadband")) {
        return {
          text: "The table lists free unlimited Wi-Fi for all nine properties.",
          pageNumber: 4,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 4",
          confidence: 30.0,
          isFallback: false,
        };
      }

      // Housekeeping
      if (q.includes("clean") || q.includes("housekeeping") || q.includes("broom") || q.includes("mop") || q.includes("dust")) {
        return {
          text: "Daily cleaning is listed. The owner questionnaire says housekeeping covers brooming, mopping, and dusting.",
          pageNumber: 4,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 4",
          confidence: 30.0,
          isFallback: false,
        };
      }

      // Parking
      if (q.includes("parking") || q.includes("bike") || q.includes("car") || q.includes("vehicle")) {
        return {
          text: "The owner questionnaire says bike and car parking are available. Confirm the parking arrangement at the selected property.",
          pageNumber: 4,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 4",
          confidence: 30.0,
          isFallback: false,
        };
      }

      // Washrooms
      if (q.includes("washroom") || q.includes("bathroom") || q.includes("attached")) {
        return {
          text: "The questionnaire answers yes, and Table 1 marks washrooms as attached for the listed room options. Refer to the property page for the exact room arrangement.",
          pageNumber: 4,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 4",
          confidence: 30.0,
          isFallback: false,
        };
      }

      // Power Backup
      if (q.includes("power") || q.includes("backup") || q.includes("inverter") || q.includes("generator") || q.includes("electricity")) {
        return {
          text: "One light and one fan in each room are on power backup. The common area is also on power backup. The document does not specify broader backup coverage.",
          pageNumber: 16,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 16",
          confidence: 30.0,
          isFallback: false,
        };
      }

      // CCTV & Security
      if (q.includes("cctv") || q.includes("security") || q.includes("guard")) {
        return {
          text: "The owner questionnaire says CCTV and security staff are provided.",
          pageNumber: 16,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 16",
          confidence: 30.0,
          isFallback: false,
        };
      }

      // Default property amenities
      if (matchedProp) {
        return {
          text: `Amenities at ${matchedProp.name}:\n• ${matchedProp.amenities.join("\n• ")}`,
          pageNumber: matchedProp.pageNumber,
          sourceLabel: `Source: Reforbs Owner Q&A Knowledge, page ${matchedProp.pageNumber}`,
          confidence: 25.0,
          isFallback: false,
        };
      }

      return {
        text: "Reforbs properties include free unlimited Wi-Fi, daily housekeeping (brooming, mopping, dusting), attached washrooms, and bike/car parking. AC is available at 8 properties (Vairagya is non-AC).",
        pageNumber: 4,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 4",
        confidence: 25.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 8. Food / Meals / Cooking
    // -------------------------------------------------------------------------
    case "FOOD_MESS": {
      const q = rawQuery.toLowerCase();

      // Can residents cook their own food
      if (q.includes("cook their own food") || q.includes("cook my own food") || q.includes("can residents cook") || q.includes("cooking allowed")) {
        return {
          text: "Yes. The owner questionnaire says residents are allowed to cook their own food. Kitchen arrangements vary by property; see the property-specific details.",
          pageNumber: 4,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 4",
          confidence: 30.0,
          isFallback: false,
        };
      }

      // Brindavan meals query
      if (matchedProp && matchedProp.id === "brindavan") {
        return {
          text: "Yes. At Brindavan, all 3 daily meals (breakfast, lunch, and dinner) are included in the monthly rent.",
          pageNumber: 14,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 14",
          confidence: 30.0,
          isFallback: false,
        };
      }

      // Moksha food query
      if (matchedProp && matchedProp.id === "moksha") {
        return {
          text: "Yes. At Moksha, food is available and optional; call for further details. Each floor has a common kitchen shared by 3 rooms.",
          pageNumber: 8,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 8",
          confidence: 30.0,
          isFallback: false,
        };
      }

      // Nirvana food query
      if (matchedProp && matchedProp.id === "nirvana") {
        return {
          text: "At Nirvana, food is available and optional; call for further details. Each 1RK has an attached private kitchen for self-cooking.",
          pageNumber: 7,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 7",
          confidence: 30.0,
          isFallback: false,
        };
      }

      // Vipasna food query
      if (matchedProp && matchedProp.id === "vipasna") {
        return {
          text: "At Vipasna, food is available and optional; call for further details. Each floor has a common kitchen shared by 4 rooms.",
          pageNumber: 9,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 9",
          confidence: 30.0,
          isFallback: false,
        };
      }

      // Shubh Gateway food query
      if (matchedProp && matchedProp.id === "shubh-gateway") {
        return {
          text: "At Shubh Gateway, breakfast and dinner are included in the monthly rent in the running mess.",
          pageNumber: 13,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 13",
          confidence: 30.0,
          isFallback: false,
        };
      }

      // Vairagya food query
      if (matchedProp && matchedProp.id === "vairagya") {
        return {
          text: "At Vairagya, breakfast and dinner are included in the running mess with in-house cooking.",
          pageNumber: 15,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 15",
          confidence: 30.0,
          isFallback: false,
        };
      }

      if (matchedProp && matchedProp.foodPolicy) {
        return {
          text: `Food arrangement at ${matchedProp.name}: ${matchedProp.foodPolicy}`,
          pageNumber: matchedProp.pageNumber,
          sourceLabel: `Source: Reforbs Owner Q&A Knowledge, page ${matchedProp.pageNumber}`,
          confidence: 25.0,
          isFallback: false,
        };
      }

      return {
        text:
          "Food arrangements vary by property category:\n• Student accommodations: Brindavan includes all 3 meals (breakfast, lunch, dinner); Shubh Gateway and Vairagya include breakfast and dinner.\n• Co-living properties (Nirvana, Moksha, Vipasna): Food is available and optional, and kitchen facilities are provided for self-cooking.",
        pageNumber: 4,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 4",
        confidence: 25.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 9. Laundry Arrangements
    // -------------------------------------------------------------------------
    case "LAUNDRY_ARRANGEMENT": {
      if (matchedProp && matchedProp.id === "shubh-gateway") {
        return {
          text: "At Shubh Gateway, laundry is included twice weekly, up to 5 kg, in the monthly rent.",
          pageNumber: 13,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 13",
          confidence: 30.0,
          isFallback: false,
        };
      }

      if (matchedProp && matchedProp.id === "brindavan") {
        return {
          text: "At Brindavan, laundry is included twice weekly, up to 5 kg, in the monthly rent.",
          pageNumber: 14,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 14",
          confidence: 30.0,
          isFallback: false,
        };
      }

      if (matchedProp && matchedProp.id === "nirvana") {
        return {
          text: "Nirvana provides self-use multiple washing machines for residents; a paid laundry service is also separately available as an optional service.",
          pageNumber: 7,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 7",
          confidence: 30.0,
          isFallback: false,
        };
      }

      if (matchedProp && matchedProp.laundryPolicy) {
        return {
          text: `Laundry arrangement at ${matchedProp.name}: ${matchedProp.laundryPolicy}`,
          pageNumber: matchedProp.pageNumber,
          sourceLabel: `Source: Reforbs Owner Q&A Knowledge, page ${matchedProp.pageNumber}`,
          confidence: 25.0,
          isFallback: false,
        };
      }

      return {
        text:
          "Laundry policies at Reforbs:\n• Student Accommodation (Shubh Gateway, Brindavan): Laundry included twice weekly, up to 5 kg.\n• Co-Living & Guesthouses (Nirvana, Moksha, Vipasna, Vairagya, Park Island, Pillar Homes, Suyog Enclave): Self-use multiple washing machines available; paid laundry service also available as an optional service.",
        pageNumber: 4,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 4 & 5",
        confidence: 25.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 10. Lock-in Period
    // -------------------------------------------------------------------------
    case "LOCK_IN_POLICY": {
      if (matchedProp) {
        if (matchedProp.annualLockIn) {
          return {
            text: `Yes. ${matchedProp.name} has an annual lock-in period (Lock-in: Annual) corresponding to the academic student year.`,
            pageNumber: matchedProp.pageNumber,
            sourceLabel: `Source: Reforbs Owner Q&A Knowledge, page ${matchedProp.pageNumber}`,
            confidence: 30.0,
            isFallback: false,
          };
        } else {
          return {
            text: `No. There is no lock-in period at ${matchedProp.name} (Lock-in: No).`,
            pageNumber: matchedProp.pageNumber,
            sourceLabel: `Source: Reforbs Owner Q&A Knowledge, page ${matchedProp.pageNumber}`,
            confidence: 30.0,
            isFallback: false,
          };
        }
      }

      return {
        text:
          "Lock-in rules at Reforbs:\n• Co-Living (Nirvana, Moksha, Vipasna) and Company Guesthouses: Zero lock-in period (Lock-in: No).\n• Student Accommodation (Shubh Gateway, Brindavan, Vairagya): Annual lock-in (Lock-in: Annual).",
        pageNumber: 3,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 3",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 11. Opposite-Gender Visitors & Guest Rules
    // -------------------------------------------------------------------------
    case "GENDER_VISITOR_RESTRICTIONS": {
      if (matchedProp && (matchedProp.id === "shubh-gateway" || matchedProp.id === "brindavan" || matchedProp.id === "vairagya")) {
        return {
          text:
            `Visitors of opposite genders are strictly not allowed at ${matchedProp.name}. ` +
            (matchedProp.id === "shubh-gateway"
              ? "Accommodations are in gender-specific boys-only and girls-only towers/apartments."
              : ""),
          pageNumber: matchedProp.pageNumber,
          sourceLabel: `Source: Reforbs Owner Q&A Knowledge, page ${matchedProp.pageNumber}`,
          confidence: 30.0,
          isFallback: false,
        };
      }

      if (matchedProp && matchedProp.category === "Co-Living") {
        return {
          text:
            `At ${matchedProp.name} (Co-Living), there are no restrictions listed in the restrictions field. Residents can invite friends and guests within social norms and mutual understanding, with zero arbitrary curfews or moral policing.`,
          pageNumber: matchedProp.pageNumber,
          sourceLabel: `Source: Reforbs Owner Q&A Knowledge, page ${matchedProp.pageNumber}`,
          confidence: 30.0,
          isFallback: false,
        };
      }

      return {
        text:
          "Visitor and guest rules:\n• Student Accommodation (Shubh Gateway, Brindavan, Vairagya): Visitors of opposite genders are strictly not allowed.\n• Co-Living (Nirvana, Moksha, Vipasna): Residents can invite friends and guests within social norms and mutual understanding; no arbitrary curfews.",
        pageNumber: 17,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 17",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 12. Curfew
    // -------------------------------------------------------------------------
    case "CURFEW_RULES": {
      return {
        text: "The owner questionnaire says there are no curfew or entry-time restrictions.",
        pageNumber: 4,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 4",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 13. Pets Policy
    // -------------------------------------------------------------------------
    case "PETS_POLICY": {
      return {
        text: "No. The owner questionnaire says pets are not allowed.",
        pageNumber: 4,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 4",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 14. Smoking & Alcohol Policy
    // -------------------------------------------------------------------------
    case "SMOKING_ALCOHOL_POLICY": {
      return {
        text: "Yes, with the consent of flatmates, according to the owner questionnaire.",
        pageNumber: 4,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 4",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 15. Security Deposit & Refund
    // -------------------------------------------------------------------------
    case "SECURITY_DEPOSIT": {
      const q = rawQuery.toLowerCase();
      if (q.includes("refundable") || q.includes("refund") || q.includes("notice period")) {
        return {
          text: "Yes. The security deposit is fully refundable if the resident serves a 30-day notice period and no damage has occurred.",
          pageNumber: 5,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 5",
          confidence: 30.0,
          isFallback: false,
        };
      }

      if (matchedProp) {
        return {
          text: `The security deposit for ${matchedProp.name} is ${matchedProp.securityDeposit}. It is fully refundable if a 30-day notice period is served and no damage has occurred.`,
          pageNumber: matchedProp.pageNumber,
          sourceLabel: `Source: Reforbs Owner Q&A Knowledge, page ${matchedProp.pageNumber}`,
          confidence: 30.0,
          isFallback: false,
        };
      }

      return {
        text: "The security deposit is fully refundable if the resident serves a 30-day notice period and no damage has occurred. Deposit amounts vary by property (e.g. ₹17k/₹29k at Nirvana, ₹40k at Shubh Gateway, ₹30k at Brindavan, ₹20k at Vairagya).",
        pageNumber: 5,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 5",
        confidence: 25.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 16. Cancellation Policy
    // -------------------------------------------------------------------------
    case "CANCELLATION_POLICY": {
      return {
        text: "The owner document states: no refund in case of cancellation. This is separate from the security-deposit refund condition.",
        pageNumber: 5,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 5",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 17. Payment Methods Accepted / Rent Due Date
    // -------------------------------------------------------------------------
    case "PAYMENT_METHODS": {
      return {
        text: "UPI, credit card, NEFT/IMPS, and cash are listed as accepted payment methods. A rent due date is not provided in the document.",
        pageNumber: 5,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 5",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 18. Address, Location & Google Maps
    // -------------------------------------------------------------------------
    case "ADDRESS_LOCATION": {
      if (matchedProp && matchedProp.id === "suyog-enclave") {
        return {
          text:
            "Suyog Enclave address: 64P, behind Bajaj Finserv, Sakore Nagar Road, Sakore Nagar, Viman Nagar, Pune, Maharashtra 411014.\n" +
            "Google Maps: https://maps.app.goo.gl/2vLb3jCP81qCEZuL9",
          pageNumber: 12,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 12",
          confidence: 30.0,
          isFallback: false,
        };
      }

      if (matchedProp && matchedProp.id === "vairagya") {
        return {
          text:
            "Vairagya is located near Symbiosis University (500 m) and ISBM College (500 m) in Lavale, Pune. Note: A complete street address and Google Maps link are not provided in the owner document.",
          pageNumber: 15,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 15",
          confidence: 30.0,
          isFallback: false,
        };
      }

      if (matchedProp) {
        return {
          text:
            `${matchedProp.name} Address: ${matchedProp.locationCue}\n` +
            (matchedProp.googleMapsUrl ? `Google Maps: ${matchedProp.googleMapsUrl}` : "Google Maps: Not supplied in owner document.") +
            (matchedProp.id === "nirvana" || matchedProp.id === "moksha" || matchedProp.id === "vipasna"
              ? "\n(Note: The same Google Maps URL was supplied for Nirvana, Moksha, and Vipasna in the source document; flagged for owner verification)."
              : ""),
          pageNumber: matchedProp.pageNumber,
          sourceLabel: `Source: Reforbs Owner Q&A Knowledge, page ${matchedProp.pageNumber}`,
          confidence: 30.0,
          isFallback: false,
        };
      }

      return {
        text: "Reforbs properties are located in Viman Nagar and Lavale, Pune. Please specify a property to view its exact address and Google Maps link.",
        pageNumber: 2,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 2",
        confidence: 25.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 19. College / Office Proximity
    // -------------------------------------------------------------------------
    case "COLLEGE_OFFICE_DISTANCE": {
      if (matchedProp && matchedProp.id === "brindavan") {
        return {
          text: "Symbiosis Management College is closest to Brindavan at 400 m. Other landmarks include: Airport 1.5 km; Phoenix Mall 1.5 km; Symbiosis Law School 2 km; Allen 1.2 km; IIHM 1 km; Metro 1.5 km.",
          pageNumber: 14,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 14",
          confidence: 30.0,
          isFallback: false,
        };
      }

      if (matchedProp && matchedProp.id === "shubh-gateway") {
        return {
          text: "Symbiosis Law School (SLS) is directly opposite Shubh Gateway at 150 m walk. Other landmarks: Airport 400 m; Symbiosis Management College 1.2 km; Phoenix Mall 2.5 km.",
          pageNumber: 13,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 13",
          confidence: 30.0,
          isFallback: false,
        };
      }

      if (matchedProp && matchedProp.id === "vairagya") {
        return {
          text: "Symbiosis University Lavale Campus is 500 m walk from Vairagya; ISBM College is 500 m walk.",
          pageNumber: 15,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 15",
          confidence: 30.0,
          isFallback: false,
        };
      }

      return {
        text:
          "Which college or office are you attending? Reforbs has properties close to:\n• Symbiosis Law School: Shubh Gateway (150 m)\n• Symbiosis Management College: Brindavan (400 m)\n• Symbiosis Lavale & ISBM: Vairagya (500 m)\n• Phoenix Mall & WeWork: Nirvana, Moksha, Vipasna (1–3 km)\nPlease specify your campus so I can recommend the closest option!",
        pageNumber: 2,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 2",
        confidence: 25.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 20. Live Availability & Move-in Date -> Human Handoff
    // -------------------------------------------------------------------------
    case "LIVE_AVAILABILITY": {
      recordKnowledgeGap("LIVE_ROOM_AVAILABILITY", rawQuery, { property: matchedProp?.name });
      return {
        text:
          "Live availability is not supplied in this knowledge document. Move-in dates depend on current availability. " +
          APPROVED_FALLBACK,
        pageNumber: 6,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 6",
        confidence: 30.0,
        isFallback: false,
        phoneTarget: matchedProp?.contactPhone || "7420040241",
      };
    }

    // -------------------------------------------------------------------------
    // 21. Site Visit & Walkthrough -> Human Handoff
    // -------------------------------------------------------------------------
    case "VISIT_TOUR": {
      const q = rawQuery.toLowerCase();
      if (q.includes("visit before paying") || q.includes("payment before visit")) {
        return {
          text:
            "The owner document does not explicitly answer whether a visit before payment is required or permitted. Please confirm with the sales team using the Call Us button below.",
          pageNumber: 6,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 6",
          confidence: 30.0,
          isFallback: false,
          phoneTarget: matchedProp?.contactPhone || "7420040241",
        };
      }

      return {
        text:
          "To schedule a visit or property walkthrough, please use the Call Us button below to connect with our team. Working hours are 10 AM to 10 PM. (The chatbot cannot schedule or complete a booking).",
        pageNumber: 6,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 6",
        confidence: 30.0,
        isFallback: false,
        phoneTarget: matchedProp?.contactPhone || "7420040241",
      };
    }

    // -------------------------------------------------------------------------
    // 22. Booking, Documents & Reservation -> Human Handoff
    // -------------------------------------------------------------------------
    case "BOOKING_RESERVATION": {
      const q = rawQuery.toLowerCase();
      if (q.includes("documents") || q.includes("aadhaar") || q.includes("kyc")) {
        return {
          text:
            "Required booking documents are not specified in the owner document. Please confirm with the sales team using the Call Us button below.",
          pageNumber: 6,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 6",
          confidence: 30.0,
          isFallback: false,
          phoneTarget: matchedProp?.contactPhone || "7420040241",
        };
      }

      if (q.includes("confirm") || q.includes("reserve") || q.includes("hold")) {
        return {
          text:
            "No. The chatbot can answer from the knowledge document but cannot check live availability or confirm a booking. Please use the Call Us button below to speak directly with our team.",
          pageNumber: 6,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 6",
          confidence: 30.0,
          isFallback: false,
          phoneTarget: matchedProp?.contactPhone || "7420040241",
        };
      }

      return {
        text:
          "Booking questions must be handled by Reforbs personnel. " +
          APPROVED_FALLBACK,
        pageNumber: 6,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 6",
        confidence: 30.0,
        isFallback: false,
        phoneTarget: matchedProp?.contactPhone || "7420040241",
      };
    }

    // -------------------------------------------------------------------------
    // 23. Maintenance Helpline Number
    // -------------------------------------------------------------------------
    case "MAINTENANCE_HELPLINE": {
      return {
        text:
          "Report maintenance issues through the common helpline. The actual helpline number is not included in the document; do not invent it. For assistance, contact the Reforbs team using the Call Us button below or by email at " +
          CONTACT_EMAIL +
          ".",
        pageNumber: 16,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 16",
        confidence: 30.0,
        isFallback: false,
        phoneTarget: "7420040241",
      };
    }

    // -------------------------------------------------------------------------
    // 24. Room Occupancy & Two People Sharing
    // -------------------------------------------------------------------------
    case "ROOM_OCCUPANCY": {
      const q = rawQuery.toLowerCase();
      if (q.includes("two people") || q.includes("sharing") || q.includes("share a room")) {
        return {
          text: "Yes. The owner questionnaire says two people can share a room. The actual room type and availability depend on the property.",
          pageNumber: 4,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 4",
          confidence: 30.0,
          isFallback: false,
        };
      }

      if (q.includes("total beds") || q.includes("capacity")) {
        return {
          text: "Table 1 uses 'Total Beds' for bed counts by room type (e.g. Nirvana 26 twin, 7 private; Moksha 18 twin, 11 private). The owner document emphasizes that Total Beds must not be interpreted as room counts or live vacant beds.",
          pageNumber: 3,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 3 & 16",
          confidence: 30.0,
          isFallback: false,
        };
      }

      return {
        text: "Reforbs properties offer twin sharing, private rooms, and triple sharing depending on the location. Student accommodations feature twin or triple suites, while co-living properties offer twin sharing or fully private 1RK and studio rooms.",
        pageNumber: 3,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 3",
        confidence: 25.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 25. Discounts / Special Offers
    // -------------------------------------------------------------------------
    case "DISCOUNTS_OFFERS": {
      return {
        text: "Discounts and special offers are to be discussed upon a property visit, according to the owner document.",
        pageNumber: 5,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 5",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 26. Contact & Working Hours
    // -------------------------------------------------------------------------
    case "CONTACT_SUPPORT": {
      const q = rawQuery.toLowerCase();
      if (q.includes("arpit")) {
        return {
          text: "Reforbs properties are managed by our dedicated property management teams. You can speak directly with our Reforbs team by using the Call Us button.",
          pageNumber: 5,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 5",
          confidence: 30.0,
          isFallback: false,
          phoneTarget: "7420040241",
        };
      }

      if (q.includes("manager") || q.includes("host") || q.includes("caretaker")) {
        return {
          text: "Each Reforbs property has its own management team. Please use the Call Us button to connect with the relevant team.",
          pageNumber: 5,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 5",
          confidence: 30.0,
          isFallback: false,
          phoneTarget: matchedProp?.contactPhone || "7420040241",
        };
      }

      if (q.includes("who updates") || q.includes("policy update") || q.includes("price update")) {
        return {
          text: "The owner document notes that the property management team is responsible for updating prices, vacancies, and policies. It says rates and deposits should be reviewed annually.",
          pageNumber: 5,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 5",
          confidence: 30.0,
          isFallback: false,
        };
      }

      if (q.includes("working hours") || q.includes("timing") || q.includes("opening hours")) {
        return {
          text: "The owner document lists working hours as 10 AM to 10 PM.",
          pageNumber: 5,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 5",
          confidence: 30.0,
          isFallback: false,
        };
      }

      if (q.includes("email")) {
        return {
          text: "The owner-provided support email is reforbsar@gmail.com.",
          pageNumber: 5,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 5",
          confidence: 30.0,
          isFallback: false,
        };
      }

      if (q.includes("phone") || q.includes("number") || q.includes("call") || q.includes("contact")) {
        const teamLabel = matchedProp ? `the ${matchedProp.name} team` : "our Reforbs team";
        return {
          text: `You can speak directly with ${teamLabel} by using the Call Us button. Our team will be happy to assist you.`,
          pageNumber: 5,
          sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 5",
          confidence: 30.0,
          isFallback: false,
          phoneTarget: matchedProp?.contactPhone || "7420040241",
        };
      }

      return {
        text:
          "Official contact details for Reforbs:\n" +
          "• Telephone: Available via the Call Us button below\n" +
          "• Email: reforbsar@gmail.com\n" +
          "• Working Hours: 10 AM to 10 PM",
        pageNumber: 5,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 5",
        confidence: 30.0,
        isFallback: false,
        phoneTarget: matchedProp?.contactPhone || "7420040241",
      };
    }

    // -------------------------------------------------------------------------
    // 27. Goa / Bangalore Coming Soon
    // -------------------------------------------------------------------------
    case "DESTINATION_COMING_SOON": {
      return {
        text: "The homepage labels Goa and Bangalore as coming soon. The currently active directory is Pune / Viman Nagar.",
        pageNumber: 2,
        sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 2",
        confidence: 30.0,
        isFallback: false,
      };
    }

    // -------------------------------------------------------------------------
    // 28. Named Property Profile
    // -------------------------------------------------------------------------
    case "PROPERTY_PROFILE": {
      if (matchedProp) {
        return {
          text:
            `${matchedProp.name} (${matchedProp.category})\n` +
            `• Location: ${matchedProp.locationCue}\n` +
            `• Twin sharing: ${matchedProp.doubleRateStr}\n` +
            (matchedProp.singleRateStr ? `• Private room: ${matchedProp.singleRateStr}\n` : "") +
            (matchedProp.tripleRateStr ? `• Triple sharing: ${matchedProp.tripleRateStr}\n` : "") +
            `• Security deposit: ${matchedProp.securityDeposit}\n` +
            `• AC: ${matchedProp.airConditioning ? "Yes" : "No"}\n` +
            `• Couple-friendly: ${matchedProp.coupleFriendly ? "Yes" : "No"}\n` +
            `• Lock-in: ${matchedProp.annualLockIn ? "Annual" : "No"}\n` +
            (matchedProp.foodPolicy ? `• Food: ${matchedProp.foodPolicy}\n` : "") +
            (matchedProp.laundryPolicy ? `• Laundry: ${matchedProp.laundryPolicy}\n` : "") +
            `• Contact: Available via the Call Us button below`,
          pageNumber: matchedProp.pageNumber,
          sourceLabel: `Source: Reforbs Owner Q&A Knowledge, page ${matchedProp.pageNumber}`,
          confidence: 30.0,
          isFallback: false,
          phoneTarget: matchedProp.contactPhone || "7420040241",
        };
      }
      break;
    }

    // -------------------------------------------------------------------------
    // 29. General Inquiry / Fallback
    // -------------------------------------------------------------------------
    default:
      break;
  }

  // Honest fallback when no factual claim is found
  recordKnowledgeGap("UNVERIFIED_GENERAL_DETAIL", rawQuery);
  return {
    text: APPROVED_FALLBACK,
    pageNumber: 2,
    sourceLabel: "Source: Reforbs Owner Q&A Knowledge, page 2",
    confidence: 10.0,
    isFallback: true,
    phoneTarget: "7420040241",
  };
}
