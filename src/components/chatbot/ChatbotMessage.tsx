/**
 * Chatbot Message Component
 * Renders user and assistant bubbles with Markdown formatting, clickable links,
 * and direct contact actions (Phone & Email).
 */

"use client";

import React from "react";
import { Phone, Bot, User, MapPin, Mail } from "lucide-react";
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

  // Formatter for bold text markdown (**text**), URLs, emails, and phone numbers
  const formatContent = (text: string) => {
    const tokenRegex = /(https?:\/\/[^\s)]+|hello@reforbs\.com|\+91\s*74200\s*40241|7420040241|\*\*[^*]+\*\*)/g;
    const parts = text.split(tokenRegex);
    return parts.map((part, i) => {
      if (part.startsWith("http://") || part.startsWith("https://")) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className={
              isUser
                ? "underline font-bold text-white hover:text-white/80 break-all"
                : "underline font-bold text-[#007A7A] hover:text-[#005F5F] break-all"
            }
          >
            {part}
          </a>
        );
      }
      if (part === "hello@reforbs.com") {
        return (
          <a
            key={i}
            href="mailto:hello@reforbs.com"
            className={
              isUser
                ? "underline font-bold text-white hover:text-white/80"
                : "underline font-bold text-[#007A7A] hover:text-[#005F5F]"
            }
          >
            {part}
          </a>
        );
      }
      if (part === "+91 74200 40241" || part === "7420040241") {
        return (
          <a
            key={i}
            href="tel:+917420040241"
            className={
              isUser
                ? "underline font-bold text-white hover:text-white/80"
                : "underline font-bold text-[#007A7A] hover:text-[#005F5F]"
            }
          >
            {part}
          </a>
        );
      }
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className={isUser ? "font-bold text-white" : "font-bold text-[#005F5F]"}>
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  // Formatter for plain text lines into clean structured React elements
  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split("\n");
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) {
        return <div key={idx} className="h-1.5" />;
      }

      // Check if bullet point
      if (trimmed.startsWith("•") || trimmed.startsWith("-")) {
        const bulletText = trimmed.replace(/^[•\-]\s*/, "");
        return (
          <div key={idx} className="flex items-start gap-2 my-1 text-xs sm:text-[13px] leading-relaxed">
            <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${isUser ? "bg-white" : "bg-[#007A7A]"}`} />
            <span>{formatContent(bulletText)}</span>
          </div>
        );
      }

      // Check if numbered item (e.g., "1.", "2.")
      const numberedMatch = trimmed.match(/^(\d+)\.\s*(.*)$/);
      if (numberedMatch) {
        return (
          <div key={idx} className="flex items-start gap-2 my-1 text-xs sm:text-[13px] leading-relaxed">
            <span className={`font-bold shrink-0 ${isUser ? "text-white" : "text-[#007A7A]"}`}>
              {numberedMatch[1]}.
            </span>
            <span>{formatContent(numberedMatch[2])}</span>
          </div>
        );
      }

      return (
        <p key={idx} className="my-1 text-xs sm:text-[13px] leading-relaxed">
          {formatContent(trimmed)}
        </p>
      );
    });
  };

  const hasPhone = message.text.includes("74200") || message.text.includes("7420040241");
  const hasEmail = message.text.includes("hello@reforbs.com");
  const hasMapLink = message.text.includes("share.google");

  return (
    <div
      className={`flex items-start gap-2.5 my-2.5 transition-all ${
        isUser ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Avatar Icon */}
      <div
        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
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

        {/* Source citation if available */}
        {!isUser && message.searchResult?.sourceLabel && (
          <div className="mt-2 text-[10px] text-gray-400 font-semibold italic border-t border-gray-100 pt-1">
            {message.searchResult.sourceLabel}
          </div>
        )}

        {/* Action Buttons: Direct Call Hotline & Email */}
        {!isUser && (hasPhone || hasEmail || hasMapLink) && (
          <div className="mt-2.5 pt-2 border-t border-[#F1F4F4] flex flex-wrap items-center gap-2 justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {hasMapLink && (
                <a
                  href="https://share.google/UomLxgr596c1a1TVf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#007A7A] hover:bg-[#005F5F] text-white text-xs font-bold transition-all shadow-sm active:scale-95"
                  aria-label="Open Google Maps location"
                >
                  <MapPin size={12} className="text-[#FFDE59]" />
                  <span>Google Maps</span>
                </a>
              )}
              {hasPhone && (
                <a
                  href="tel:+917420040241"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F4F3] hover:bg-[#007A7A] text-[#007A7A] hover:text-white text-xs font-bold transition-all shadow-sm active:scale-95"
                  aria-label="Call host directly"
                >
                  <Phone size={12} />
                  <span>Call Us (+91 74200 40241)</span>
                </a>
              )}
              {hasEmail && (
                <a
                  href="mailto:hello@reforbs.com"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9D4] hover:bg-[#FFDE59] text-[#1B1D1C] text-xs font-bold transition-all shadow-sm active:scale-95"
                  aria-label="Send email"
                >
                  <Mail size={12} />
                  <span>Email Reforbs</span>
                </a>
              )}
            </div>
            <span className="text-[10px] text-gray-400 font-medium">Reforbs Concierge</span>
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
