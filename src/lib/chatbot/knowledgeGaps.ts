/**
 * Knowledge Gap Diagnostic Tracker
 * Records in-memory diagnostics when customer questions ask for information
 * not published in the Reforbs knowledge base.
 *
 * NOTE: As per security & privacy requirements, this runs 100% in local memory.
 * No data is ever transmitted to any external server or analytics service.
 * Diagnostics are not exposed to customers in the UI.
 */

export type KnowledgeGapCategory =
  | "COUPLES_SHARED_OCCUPANCY_POLICY"
  | "CHEAPEST_RENT_COMPARISON"
  | "PROPERTY_SPECIFIC_RENT"
  | "SECURITY_DEPOSIT_AMOUNT"
  | "LIVE_ROOM_AVAILABILITY"
  | "NEAREST_LOCATION_DISTANCE"
  | "FOOD_MEAL_PLAN_INCLUSIONS"
  | "FURNITURE_INVENTORY"
  | "PET_POLICY"
  | "CURFEW_HOUSE_RULES"
  | "GENDER_ELIGIBILITY_RULES"
  | "DOCUMENT_VERIFICATION_LIST"
  | "CANCELLATION_REFUND_POLICY"
  | "OFF_TOPIC_QUERY"
  | "UNVERIFIED_GENERAL_DETAIL";

export interface KnowledgeGapRecord {
  category: KnowledgeGapCategory;
  question: string;
  detectedEntities?: {
    property?: string;
    location?: string;
  };
  timestamp: string;
}

// In-memory diagnostic log
const gapLog: KnowledgeGapRecord[] = [];

export function recordKnowledgeGap(
  category: KnowledgeGapCategory,
  question: string,
  entities?: { property?: string; location?: string }
): void {
  gapLog.push({
    category,
    question,
    detectedEntities: entities,
    timestamp: new Date().toISOString(),
  });

  if (process.env.NODE_ENV !== "production") {
    // Development-only diagnostic logging
    // eslint-disable-next-line no-console
    console.debug(`[Reforbs Knowledge Gap Recorded]: ${category} for "${question}"`);
  }
}

export function getDiagnosticGapRecords(): readonly KnowledgeGapRecord[] {
  return gapLog;
}

export function clearDiagnosticGaps(): void {
  gapLog.length = 0;
}
