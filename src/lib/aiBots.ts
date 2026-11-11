/**
 * Configurable crawler & AI agent policy for robots.txt.
 *
 * Flip any bot's `allow` boolean to `false` to change its rule globally.
 * Note: Google-Extended controls Vertex/Gemini training usage and does NOT
 * control Google Search or Google AI Overviews (controlled by Googlebot).
 */
export interface BotPolicyRule {
  userAgent: string;
  allow: boolean;
  role: "search-answer" | "user-fetcher" | "training";
  vendor: string;
}

export const AI_BOT_RULES: BotPolicyRule[] = [
  // Search & Answer Engine Crawlers (allowed for citation & local discovery)
  { userAgent: "Googlebot", allow: true, role: "search-answer", vendor: "Google Search & AI Overviews" },
  { userAgent: "Bingbot", allow: true, role: "search-answer", vendor: "Bing Search & Microsoft Copilot" },
  { userAgent: "Applebot", allow: true, role: "search-answer", vendor: "Apple Search & Siri" },
  { userAgent: "OAI-SearchBot", allow: true, role: "search-answer", vendor: "OpenAI SearchGPT / ChatGPT Search" },
  { userAgent: "PerplexityBot", allow: true, role: "search-answer", vendor: "Perplexity Search Index" },
  { userAgent: "Claude-SearchBot", allow: true, role: "search-answer", vendor: "Anthropic Claude Search" },

  // On-Demand User Fetchers (triggered when a user asks an AI to check Reforbs)
  { userAgent: "ChatGPT-User", allow: true, role: "user-fetcher", vendor: "OpenAI ChatGPT Browsing" },
  { userAgent: "Perplexity-User", allow: true, role: "user-fetcher", vendor: "Perplexity Live Fetcher" },
  { userAgent: "Claude-User", allow: true, role: "user-fetcher", vendor: "Anthropic Claude Live Fetcher" },

  // Foundation Model Training Crawlers (allowed by default for brand discovery; flip to false to opt out)
  { userAgent: "GPTBot", allow: true, role: "training", vendor: "OpenAI Model Training" },
  { userAgent: "ClaudeBot", allow: true, role: "training", vendor: "Anthropic Model Training" },
  { userAgent: "Google-Extended", allow: true, role: "training", vendor: "Google Gemini / Vertex AI Training" },
  { userAgent: "Applebot-Extended", allow: true, role: "training", vendor: "Apple Intelligence Training" },
  { userAgent: "CCBot", allow: true, role: "training", vendor: "Common Crawl" },
];
