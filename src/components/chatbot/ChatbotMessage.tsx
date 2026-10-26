"use client";

import React from "react";
import { FileText, Phone, Bot, User } from "lucide-react";
import { SearchResult } from "@/lib/chatbot/pdfKnowledgeEngine";

export interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: string;
  searchResult?: SearchResult;
}

interface ChatbotMessageProps {
  message: Message;
  onCallClick?: () => void;
}

export default function ChatbotMessage({ message }: ChatbotMessageProps) {
  const isUser = message.sender === "user";

  // Formatter for plain text lines into clean structured React elements
  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split("\n");
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) {
        return <div key={idx} className="h-2" />;
      }

      // Check if bullet point
      if (trimmed.startsWith("•") || trimmed.startsWith("-")) {
        const bulletText = trimmed.replace(/^[•\-]\s*/, "");
        return (
          <div key={idx} className="flex items-start gap-2 my-1 text-xs sm:text-[13px] leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#007A7A] mt-1.5 shrink-0" />
            <span>{bulletText}</span>
          </div>
        );
      }

      // Check if numbered item (e.g., "1.", "2.")
      const numberedMatch = trimmed.match(/^(\d+)\.\s*(.*)$/);
      if (numberedMatch) {
        return (
          <div key={idx} className="flex items-start gap-2 my-1 text-xs sm:text-[13px] leading-relaxed">
            <span className="font-bold text-[#007A7A] shrink-0">{numberedMatch[1]}.</span>
            <span>{numberedMatch[2]}</span>
          </div>
        );
      }

      return (
        <p key={idx} className="my-1 text-xs sm:text-[13px] leading-relaxed">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div
      className={`flex items-start gap-2.5 my-2.5 transition-all ${
        isUser ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Avatar Icon */}
      <div
        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 text-white shadow-sm ${
          isUser
            ? "bg-[#1B1D1C] text-white"
            : "bg-[#007A7A] text-[#FFDE59]"
        }`}
        aria-hidden="true"
      >
        {isUser ? <User size={15} /> : <Bot size={16} />}
      </div>

      {/* Bubble Container */}
      <div
        className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-3 sm:p-3.5 shadow-sm text-left ${
          isUser
            ? "bg-[#007A7A] text-white rounded-tr-none font-medium"
            : "bg-white text-[#1B1D1C] border border-[#E1E7E6] rounded-tl-none font-normal"
        }`}
      >
        {/* Message Text Content */}
        <div className="font-sans break-words">{renderFormattedText(message.text)}</div>

        {/* Source Citation Badge (Deterministic Ground Truth) */}
        {!isUser && message.searchResult?.sourceLabel && (
          <div className="mt-2.5 pt-2 border-t border-[#F1F4F4] flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#F1F4F4] text-[#005F5F] text-[11px] font-semibold">
              <FileText size={12} className="text-[#007A7A]" />
              <span>{message.searchResult.sourceLabel}</span>
            </span>

            {/* Direct Call Button if Contact is Mentioned or in Fallback */}
            {message.text.includes("7420040241") && (
              <a
                href="tel:+917420040241"
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#007A7A]/10 hover:bg-[#007A7A]/20 text-[#007A7A] text-[11px] font-bold transition-colors"
                aria-label="Call 7420040241"
              >
                <Phone size={11} />
                <span>Call 7420040241</span>
              </a>
            )}
          </div>
        )}

        {/* Fallback Notice */}
        {!isUser && message.searchResult?.isFallback && !message.searchResult.isOffTopic && (
          <div className="mt-2 pt-2 border-t border-[#F1F4F4] flex items-center justify-between">
            <span className="text-[10px] text-gray-500 font-medium">
              Verified with Reforbs Knowledge Base
            </span>
            <a
              href="tel:+917420040241"
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#007A7A] text-white text-[11px] font-bold hover:bg-[#005F5F] transition-colors"
            >
              <Phone size={11} />
              <span>Call Helpline</span>
            </a>
          </div>
        )}

        {/* Timestamp */}
        <div
          className={`text-[10px] mt-1.5 text-right ${
            isUser ? "text-white/70" : "text-gray-400"
          }`}
        >
          {message.timestamp}
        </div>
      </div>
    </div>
  );
}
