/**
 * Global Phone-Number & Arpit Display Protection
 *
 * Ensures NO phone numbers and NO mentions of "Arpit" appear as visible text
 * anywhere in chatbot responses, dynamically rendered passages, or UI components,
 * while strictly preserving legitimate prices (₹15,000, 25,000), deposits, distances,
 * room counts (1BHK, 3BHK), and PIN codes (411014).
 */

export const KNOWN_PHONE_NUMBERS = [
  "7420040241", // General / Nirvana / Moksha / Vipasna / Park Island / Pillar Homes / Suyog
  "7057897430", // Shubh Gateway
  "9637019838", // Brindavan
  "7387614629", // Vairagya
];

export const PROPERTY_PHONE_MAP: Record<string, string> = {
  "shubh-gateway": "7057897430",
  "brindavan": "9637019838",
  "vairagya": "7387614629",
  "nirvana": "7420040241",
  "moksha": "7420040241",
  "vipasna": "7420040241",
  "park-island": "7420040241",
  "pillar-homes": "7420040241",
  "suyog-enclave": "7420040241",
};

/**
 * Determines the target phone number for a specific property query or context
 */
export function getPropertyPhoneTarget(queryOrText: string): string {
  const q = (queryOrText || "").toLowerCase();
  if (q.includes("shubh") || q.includes("gateway")) return "7057897430";
  if (q.includes("brindavan") || q.includes("sakore")) return "9637019838";
  if (q.includes("vairagya") || q.includes("lavale")) return "7387614629";
  return "7420040241";
}

/**
 * Sanitizes any string to remove visible telephone numbers and the name "Arpit"
 */
export function sanitizeVisibleText(text: string): string {
  if (!text) return "";

  let sanitized = text;

  // 1. Remove Arpit references
  sanitized = sanitized.replace(/\bArpit\s+Agarwal\b/gi, "Reforbs Team");
  sanitized = sanitized.replace(/\bArpit\b/gi, "Reforbs Team");

  // 2. Specific phone contact patterns transformed into clean instructions to use Call Us
  sanitized = sanitized.replace(
    /Kindly get in touch with our representative on below number\s*[-:]?\s*(?:\+?91[\s-]?)?74200\s*40241/gi,
    "Please use the Call Us button below to speak directly with our Reforbs representative."
  );
  sanitized = sanitized.replace(
    /contact\s*(?:host|representative|sales|the Reforbs team|team)?\s*(?:at|on)?\s*(?:\+?91[\s-]?)?(?:74200\s*40241|70578\s*97430|96370\s*19838|73876\s*14629)/gi,
    "contact our team using the Call Us button"
  );
  sanitized = sanitized.replace(
    /•\s*Phone\s*\/\s*WhatsApp:\s*(?:\+?91[\s-]?)?74200\s*40241/gi,
    "• Phone: Available via the Call Us button below"
  );
  sanitized = sanitized.replace(
    /•\s*Contact:\s*(?:\+?91[\s-]?)?(?:74200\s*40241|70578\s*97430|96370\s*19838|73876\s*14629)/gi,
    "• Contact: Available via the Call Us button below"
  );
  sanitized = sanitized.replace(
    /call\s*(?:or\s*whatsapp)?\s*(?:the\s*)?(?:sales\s*team|host|sales)?\s*(?:on|at)?\s*(?:\+?91[\s-]?)?(?:74200\s*40241|70578\s*97430|96370\s*19838|73876\s*14629)/gi,
    "use the Call Us button below"
  );
  sanitized = sanitized.replace(
    /call\s*(?:or\s*whatsapp)?\s*(?:\+?91[\s-]?)?(?:74200\s*40241|70578\s*97430|96370\s*19838|73876\s*14629)/gi,
    "use the Call Us button"
  );
  sanitized = sanitized.replace(
    /number\s*[-–:]?\s*(?:\+?91[\s-]?)?(?:74200\s*40241|70578\s*97430|96370\s*19838|73876\s*14629)/gi,
    "the Call Us button"
  );

  // 3. Catch any remaining raw phone numbers (10 digits starting with 6, 7, 8, or 9 with optional +91 and spaces)
  // Ensures prices (₹15,000), 5-digit deposits, 6-digit pin codes (411014) are NOT matched.
  sanitized = sanitized.replace(
    /(?:\+91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}\b/g,
    "our team via the Call Us button"
  );
  sanitized = sanitized.replace(
    /(?:\+91[\s-]?)?[6-9]\d{9}\b/g,
    "our team via the Call Us button"
  );

  // 4. Clean up any duplicated phrases or excessive whitespace
  sanitized = sanitized.replace(/\s{2,}/g, " ").trim();

  return sanitized;
}
