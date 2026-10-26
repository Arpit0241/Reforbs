"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  RefreshCw,
  Phone,
  FileCheck,
} from "lucide-react";
import ChatbotMessage, { Message } from "./ChatbotMessage";
import {
  searchKnowledgePDF,
  loadAndIndexPDF,
} from "@/lib/chatbot/pdfKnowledgeEngine";
import {
  WELCOME_MESSAGE,
  QUICK_QUESTIONS,
  PDF_LOAD_ERROR_MESSAGE,
} from "@/lib/chatbot/knowledgeConfig";

export default function ReforbsChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isEngineReady, setIsEngineReady] = useState(false);
  const [engineError, setEngineError] = useState<string | null>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-msg",
      sender: "assistant",
      text: WELCOME_MESSAGE,
      timestamp: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize PDF Knowledge index once per session
  useEffect(() => {
    let mounted = true;
    loadAndIndexPDF()
      .then(() => {
        if (mounted) {
          setIsEngineReady(true);
        }
      })
      .catch((err) => {
        if (mounted) {
          console.error("Failed to load PDF knowledge:", err);
          setEngineError(PDF_LOAD_ERROR_MESSAGE);
        }
      });
    return () => {
      mounted = false;
    };
  }, []);

  // Auto-scroll conversation to latest message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  const handleSendMessage = async (queryToSend?: string) => {
    const rawText = queryToSend || inputQuery;
    const text = rawText.trim();
    if (!text || isProcessing) return;

    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      timestamp: currentTime,
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!queryToSend) {
      setInputQuery("");
    }
    setIsProcessing(true);

    try {
      // Deterministic browser-side PDF search
      const result = await searchKnowledgePDF(text);

      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        sender: "assistant",
        text: result.text,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        searchResult: result,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error("Error retrieving answer:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          sender: "assistant",
          text: "I encountered a problem reading the Reforbs knowledge base. Please call the Reforbs team directly at 7420040241 for assistance.",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <aside
      aria-label="Reforbs Customer Support Assistant"
      className="fixed bottom-20 sm:bottom-6 right-3 sm:right-6 z-50 pointer-events-auto"
    >
      {/* Chat Window Panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="chatbot-title"
          className="absolute bottom-0 right-0 w-[calc(100vw-1.5rem)] sm:w-[400px] h-[550px] max-h-[82vh] bg-white rounded-3xl shadow-[0_12px_45px_rgba(0,0,0,0.22)] border border-[#E1E7E6] flex flex-col overflow-hidden animate-fadeIn z-50 font-sans"
        >
          {/* Header */}
          <div className="bg-[#007A7A] text-white px-4 py-3.5 sm:px-5 sm:py-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-[#FFDE59]">
                  <MessageSquare size={20} />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#FFDE59] rounded-full border-2 border-[#007A7A]" />
              </div>

              <div>
                <h3
                  id="chatbot-title"
                  className="font-heading font-black text-white text-base leading-snug tracking-tight"
                >
                  Reforbs Assistant
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#E6F4F3]">
                  <span className="w-2 h-2 rounded-full bg-[#FFDE59] animate-pulse" />
                  <span className="font-medium">How can we help you?</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 active:bg-white/20 transition-colors"
                aria-label="Close Reforbs Assistant"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Subheader: Concierge Status Badge */}
          <div className="bg-[#F1F4F4] px-4 py-1.5 border-b border-[#E1E7E6] flex items-center justify-between text-[11px] text-[#4A524F]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="font-semibold text-[#005F5F]">
                Reforbs Concierge • Online
              </span>
            </div>
            <a
              href="tel:+917420040241"
              className="text-[#007A7A] hover:underline font-bold flex items-center gap-1"
            >
              <Phone size={10} />
              <span>Host Arpit: 7420040241</span>
            </a>
          </div>

          {/* Messages Scrollable Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FAFAFA] overscroll-contain">
            {messages.map((msg) => (
              <ChatbotMessage key={msg.id} message={msg} />
            ))}

            {/* Quick Questions Chips (Visible when only welcome message exists or on idle) */}
            {messages.length <= 2 && (
              <div className="my-3 pt-2">
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Suggested Questions:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {QUICK_QUESTIONS.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(q)}
                      disabled={isProcessing}
                      className="text-left text-xs bg-white hover:bg-[#E6F4F3] hover:text-[#005F5F] hover:border-[#007A7A] active:scale-95 text-[#1B1D1C] font-semibold px-3 py-1.5 rounded-full border border-[#E1E7E6] shadow-sm transition-all"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Typing / Searching PDF indicator */}
            {isProcessing && (
              <div className="flex items-center gap-2 text-xs text-gray-500 bg-white border border-[#E1E7E6] px-3.5 py-2 rounded-2xl w-fit shadow-sm">
                <RefreshCw size={13} className="animate-spin text-[#007A7A]" />
                <span>Reforbs Concierge is typing...</span>
              </div>
            )}

            {engineError && (
              <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                {engineError}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Composer / Input Area */}
          <div className="p-3 bg-white border-t border-[#E1E7E6]">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about properties, rent, amenities..."
                disabled={isProcessing}
                className="flex-1 min-h-[44px] px-3.5 text-xs sm:text-sm bg-[#FAFAFA] border border-[#E1E7E6] rounded-2xl focus:outline-none focus:border-[#007A7A] focus:ring-1 focus:ring-[#007A7A] placeholder-gray-400 text-[#1B1D1C] transition-all"
                aria-label="Ask a question about Reforbs properties"
              />

              <button
                onClick={() => handleSendMessage()}
                disabled={isProcessing || !inputQuery.trim()}
                className="w-11 h-11 rounded-2xl bg-[#007A7A] hover:bg-[#005F5F] active:bg-[#004848] disabled:opacity-40 disabled:hover:bg-[#007A7A] text-white flex items-center justify-center shrink-0 shadow-sm transition-all"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>

            <div className="mt-1.5 flex items-center justify-between text-[10px] text-gray-400 px-1">
              <span>Direct Support • Viman Nagar, Pune</span>
              <span>Fast Host Response</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 bg-[#007A7A] hover:bg-[#005F5F] active:scale-95 text-white pl-3.5 pr-4 py-2.5 rounded-full shadow-[0_4px_22px_rgba(0,122,122,0.4)] hover:shadow-[0_6px_28px_rgba(0,122,122,0.5)] transition-all duration-300 min-h-[46px]"
          aria-label="Open Reforbs Support Assistant"
          aria-expanded={isOpen}
        >
          <div className="relative">
            <MessageSquare size={19} className="text-[#FFDE59]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FFDE59] rounded-full animate-ping" />
          </div>
          <span className="text-xs font-black tracking-wide font-heading">
            Reforbs Assistant
          </span>
        </button>
      )}
    </aside>
  );
}
