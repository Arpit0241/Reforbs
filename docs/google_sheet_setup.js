/**
 * ====================================================================
 * REFORBS LEADS — GOOGLE APPS SCRIPT FOR AUTOMATIC GOOGLE SHEET LOGGING
 * ====================================================================
 * 
 * HOW TO SET THIS UP (Takes 60 seconds, 100% Free):
 * 
 * 1. Open Google Sheets (https://sheets.new) and name the spreadsheet:
 *    "Reforbs Website Leads"
 * 
 * 2. In row 1 of the sheet, add these column headers:
 *    A1: Timestamp
 *    B1: Name
 *    C1: Phone Number
 *    D1: Property
 *    E1: Visit Date
 *    F1: Lead Source
 * 
 * 3. In the top menu of Google Sheets, click:
 *    Extensions > Apps Script
 * 
 * 4. Delete any code inside Code.gs, paste this ENTIRE file into it, and click Save (disk icon).
 * 
 * 5. Click the blue "Deploy" button at the top right > "New deployment".
 *    - Click the gear icon next to "Select type" and choose "Web app".
 *    - Description: "Reforbs Lead Webhook"
 *    - Execute as: "Me (your email)"
 *    - Who has access: "Anyone" (IMPORTANT: must be "Anyone" so the website can post to it)
 * 
 * 6. Click "Deploy", approve permissions if prompted, and copy the "Web app URL":
 *    (It looks like: https://script.google.com/macros/s/AKfycb.../exec)
 * 
 * 7. Paste that Web app URL into your `.env.local` file (and Vercel environment variables):
 *    GOOGLE_SHEETS_WEBHOOK_URL="https://script.google.com/macros/s/AKfycb.../exec"
 * 
 * That's it! Every lead submitted on reforbs.com will now instantly appear in your Google Sheet!
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.name || "-",
      data.phone || "-",
      data.property || "-",
      data.visitDate || "-",
      data.source || "Reforbs Website"
    ]);

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Reforbs Google Sheet Webhook is active and running!");
}
