import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, property, visitDate, source, timestamp } = body;

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name || "-",
            phone: phone || "-",
            property: property || "-",
            visitDate: visitDate || "-",
            source: source || "Reforbs Website",
            timestamp: timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          }),
        });
      } catch (webhookErr) {
        console.error("Failed to post to Google Sheets webhook:", webhookErr);
      }
    } else {
      console.log("[Reforbs New Lead Received]:", {
        name,
        phone,
        property,
        visitDate,
        source,
        timestamp,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("API /api/lead error:", err);
    const message = err instanceof Error ? err.message : "Failed to submit lead";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
