import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Send,
  User,
  Bot,
  Mail,
  ArrowRight,
  PhoneCall,
  Loader2,
  CheckCircle2,
  ArrowUpRight,
  MessageSquare,
  Compass,
  ChevronDown,
  ChevronUp
} from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
  category: string;
}

export default function FAQPage({
  onNavigate,
}: {
  onNavigate: (page: "home" | "about" | "work" | "faq" | "contact" | "enquiry") => void;
}) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userQuestion, setUserQuestion] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  // Dialogue threat state for AI dialogue history
  interface ChatMessage {
    id: string;
    role: "user" | "model";
    text: string;
    timestamp: Date;
  }
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

  const faqItems: FAQItem[] = [
    {
      q: "DO YOU ONLY BUILD WEBSITES?",
      a: "No. We design complete business systems based on your goals. Depending on your requirements, the solution may include a mobile web app, CRM, ordering platform, reservation system, AI automation, internal operations software or a customer-facing application.",
      category: "BUSINESS STRATEGY"
    },
    {
      q: "WHAT INDUSTRIES DO YOU SPECIALIZE IN?",
      a: "We primarily work with hospitality businesses, cafés, restaurants, food brands and service-based companies. We also build custom AI products and internal business systems for growing teams.",
      category: "BUSINESS STRATEGY"
    },
    {
      q: "HOW DO I GET STARTED?",
      a: "Simply click 'Launch Your App' or 'Apply For Demo App', submit your requirements and we'll review your business goals before recommending the right solution.",
      category: "BUSINESS STRATEGY"
    },
    {
      q: "WHY CHOOSE A MOBILE WEB APP INSTEAD OF A TRADITIONAL WEBSITE?",
      a: "Most customers discover and interact with businesses from their phones. Mobile web apps provide a faster, more engaging experience and can significantly improve customer interaction, ordering and lead generation.",
      category: "MOBILE WEB APPS"
    },
    {
      q: "CAN YOU REDESIGN AN EXISTING WEBSITE OR SYSTEM?",
      a: "Yes. Existing websites, CRMs, dashboards and business systems can be redesigned, optimized or rebuilt from the ground up.",
      category: "MOBILE WEB APPS"
    },
    {
      q: "DO YOU BUILD CUSTOM RESERVATION OR ORDERING SYSTEMS FOR F&B BRANDS?",
      a: "Yes. We build tailored platforms for hospitality brands, including custom digital menus, localized WhatsApp ordering integrations, POS synchronization, and customized kitchen printer systems to streamline operations and grow sales.",
      category: "HOSPITALITY SYSTEMS"
    },
    {
      q: "WHAT MAKES YOUR LANDING PAGE DESIGNS HIGHLY EFFECTIVE?",
      a: "We build high-converting, premium landing pages specifically optimized for product launches, lead capture, SaaS tools, and local services. We prioritize pixel-perfect typography, rapid load performance, and frictionless conversions.",
      category: "LANDING PAGES"
    },
    {
      q: "DO YOU PROVIDE VISUAL DESIGN OR BRAND DIRECTION SERVICES?",
      a: "Yes. Beyond software code, we design complete creative directions and performance marketing assets, including product ad designs, Instagram campaign systems, launch assets, and high-impact brand visual templates.",
      category: "DESIGN DIRECTION"
    },
    {
      q: "DO YOU PROVIDE AI INTEGRATIONS AND AUTOMATION?",
      a: "Yes. We build AI-powered workflows, content systems, customer support automation, OCR tools and business process automations to eliminate manual bottlenecks.",
      category: "AI AUTOMATION"
    },
    {
      q: "HOW MUCH DOES A PROJECT TYPICALLY COST?",
      a: "Projects usually start from ₹15,000 and scale based on complexity, integrations, automation requirements and business objectives.",
      category: "BUSINESS STRATEGY"
    },
    {
      q: "HOW LONG DOES IT TAKE TO LAUNCH A PROJECT?",
      a: "Most projects are delivered within 1–4 weeks depending on scope, revisions and integrations.",
      category: "BUSINESS STRATEGY"
    },
    {
      q: "WILL I BE ABLE TO MANAGE THE SYSTEM MYSELF?",
      a: "Absolutely. Every project is designed to be simple, maintainable and easy for business owners and teams to operate without needing developer help.",
      category: "BUSINESS STRATEGY"
    },
    {
      q: "DO YOU PROVIDE SUPPORT AFTER LAUNCH?",
      a: "Yes. Ongoing support, updates and optimization services are available after deployment.",
      category: "BUSINESS STRATEGY"
    }
  ];

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuestion.trim()) return;

    const currentQuestion = userQuestion.trim();
    const currentName = userName.trim();
    const currentEmail = userEmail.trim();

    setIsAiLoading(true);
    setErrorMessage("");
    setIsSubmitSuccess(false);

    // Optimistically add user question to history
    const userMessageId = `user-${Date.now()}`;
    const userMessage: ChatMessage = {
      id: userMessageId,
      role: "user",
      text: currentQuestion,
      timestamp: new Date(),
    };
    setChatHistory((prev) => [...prev, userMessage]);
    setUserQuestion(""); // Clear the input

    let aiResponseText = "";

    try {
      // 1. Get Answer from Server-side Gemini AI
      const backendHistory = chatHistory.map(msg => ({
        role: msg.role,
        content: msg.text
      }));

      const res = await fetch("/api/faq/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: currentQuestion,
          name: currentName,
          email: currentEmail,
          chatHistory: backendHistory
        }),
      });

      if (!res.ok) {
        throw new Error("Service returned an unsuccessful status code.");
      }

      const data = await res.json();
      aiResponseText = data.answer || "I'm available to assist you. Let's discuss your project directly.";
      
      // Add model's answer to our local chat state
      const modelMessage: ChatMessage = {
        id: `model-${Date.now()}`,
        role: "model",
        text: aiResponseText,
        timestamp: new Date(),
      };
      setChatHistory((prev) => [...prev, modelMessage]);

    } catch (err: any) {
      console.error("AI Assistant error:", err);
      aiResponseText = "Let's discuss this directly. Book a call or submit your project details and we'll help you choose the best approach.";
      const modelMessage: ChatMessage = {
        id: `model-${Date.now()}`,
        role: "model",
        text: aiResponseText,
        timestamp: new Date(),
      };
      setChatHistory((prev) => [...prev, modelMessage]);
    } finally {
      setIsAiLoading(false);
    }

    // 2. Submit Question, Details, and AI Answer via Formspree
    try {
      await fetch("https://formspree.io/f/mzdqwekz", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          question: currentQuestion,
          name: currentName || "Anonymous User",
          email: currentEmail || "None provided",
          generatedAnswer: aiResponseText,
          timestamp: new Date().toISOString(),
          pageUrl: window.location.href,
          source: "Nitish Kaushal Digital Growth FAQ Page",
          notificationCopy: "Copy sent automatically to nitisshkaushal17@gmail.com"
        }),
      });
      setIsSubmitSuccess(true);
    } catch (e) {
      console.error("Formspree submission error:", e);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-16 py-6 md:py-12 select-none text-left">
      
      {/* HEADER SECTION - Apple Support / Stripe Docs vibe */}
      <div className="space-y-4 max-w-3xl text-left">
        <span className="text-[10px] font-mono uppercase tracking-widest bg-[#111111] text-[#FAF8F4] border border-[#111111] px-3 py-1 rounded inline-block font-black font-mono">
          KNOWLEDGE BASE
        </span>
        <h1 className="text-3xl xs:text-4xl md:text-5xl font-sans font-black text-[#111111] uppercase tracking-tight leading-none">
          Frequently Asked Questions
        </h1>
        <p className="text-sm xs:text-base md:text-lg text-[#111111]/70 leading-relaxed font-sans font-semibold">
          Find simple, direct answers about building mobile web apps, guest reservation layouts, and growth systems for cafes and hospitality brands.
        </p>
      </div>

      {/* FAQ VERTICAL DOCUMENTATION LIST */}
      <div className="border-t-2 border-[#111111] pt-6 space-y-6">
        {/* SLEEK CATEGORY FILTER TABS (PRO-LEVEL COMPACT DESIGN WITH SWIPE SCROLL ON MOBILE) */}
        <div className="flex gap-2 overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-none select-none">
          {[
            { id: "ALL", label: "ALL" },
            { id: "BUSINESS STRATEGY", label: "STRATEGY" },
            { id: "MOBILE WEB APPS", label: "APPS" },
            { id: "HOSPITALITY SYSTEMS", label: "SYSTEMS" },
            { id: "LANDING PAGES", label: "LANDINGS" },
            { id: "DESIGN DIRECTION", label: "DESIGN" },
            { id: "AI AUTOMATION", label: "AI" }
          ].map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setExpandedIndex(null);
                }}
                className={`transition-all duration-150 rounded-xl px-4 py-2 text-[10px] sm:text-xs font-mono font-black tracking-wider uppercase border-2 border-[#111111] shrink-0 active:scale-95 ${
                  isSelected
                    ? "bg-[#D8D12B] text-[#111111] shadow-[2px_2px_0px_0px_#111111]"
                    : "bg-white text-[#111111]/75 hover:text-[#111111] hover:bg-neutral-50"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="space-y-2.5">
          {faqItems
            .filter((item) => selectedCategory === "ALL" || item.category === selectedCategory)
            .map((item, index) => {
              const isOpen = expandedIndex === index;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.02, 0.2), duration: 0.2 }}
                  key={index}
                  className="border-2 border-[#111111] rounded-xl bg-[#FAF8F4] hover:bg-white shadow-[2px_2px_0px_0px_#111111] hover:shadow-[3px_3px_0px_0px_#111111] transition-all overflow-hidden"
                >
                  {/* Header Toggle Row */}
                  <div
                    onClick={() => setExpandedIndex(isOpen ? null : index)}
                    className="flex items-center justify-between gap-3 py-3.5 px-4 sm:py-5 sm:px-6 cursor-pointer select-none"
                  >
                    <div className="flex flex-col gap-1.5 flex-grow text-left">
                      {/* Category pill */}
                      <span className="self-start text-[8px] font-mono font-black uppercase tracking-wider bg-[#111111]/5 text-[#111111]/60 border border-[#111111]/10 px-1.5 py-0.5 rounded leading-none">
                        {item.category}
                      </span>
                      {/* Question */}
                      <h3
                        className="text-[13px] xs:text-[14px] sm:text-[17px] font-sans font-black text-[#111111] uppercase tracking-tight select-text"
                        style={{ lineHeight: "1.3" }}
                      >
                        {item.q}
                      </h3>
                    </div>
  
                    {/* Toggle Caret Icon Box */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white border-2 border-[#111111] rounded-lg flex items-center justify-center shrink-0 shadow-[1.5px_1.5px_0px_0px_#111111] hover:bg-[#D8D12B]/10 active:translate-x-[0.5px] active:translate-y-[0.5px] transition-all">
                      {isOpen ? (
                        <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#111111]" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#111111]" />
                      )}
                    </div>
                  </div>
  
                  {/* Collapsible Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <div className="border-t-2 border-[#111111]/10 px-4 pb-4 pt-3 sm:px-6 sm:pb-6 sm:pt-4 text-left">
                          {/* Separator Accent */}
                          <div className="w-8 h-[2px] bg-[#D8D12B] border-t border-[#111111] mb-2.5" />
                          
                          {/* Answer */}
                          <p
                            className="text-xs xs:text-sm sm:text-[15px] text-[#111111]/85 font-sans font-medium select-text max-w-[75ch]"
                            style={{ lineHeight: "1.6" }}
                          >
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
        </div>
      </div>

      {/* ASK YOUR OWN QUESTION BOX */}
      <section className="bg-[#FAF8F4] border-2 border-[#111111] rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_0px_#111111] space-y-8 relative overflow-hidden">
        
        {/* Absolute branding tag inside background */}
        <div className="absolute right-4 top-4 opacity-5 pointer-events-none hidden md:block">
          <Compass className="w-32 h-32 text-[#111111]" />
        </div>

        {/* Labels & Description */}
        <div className="space-y-3">
          <span className="text-[10px] font-mono uppercase bg-[#D8D12B] text-[#111111] border border-[#111111] px-2.5 py-1 rounded font-black tracking-widest inline-block">
            STILL CURIOUS?
          </span>
          <h2 className="text-2xl sm:text-3.5xl font-sans font-black text-[#111111] uppercase tracking-tight leading-none">
            ASK ANYTHING ABOUT YOUR PROJECT
          </h2>
          <p className="text-xs sm:text-sm text-[#111111]/70 leading-relaxed font-sans font-semibold max-w-2xl">
            If your question isn't listed here, ask directly and receive an instant response from my custom AI virtual companion.
          </p>
        </div>

        {/* Conversation-style Interface Log */}
        {chatHistory.length > 0 && (
          <div className="border-2 border-[#111111] rounded-xl p-4 bg-white space-y-4 max-h-[350px] overflow-y-auto shadow-inner">
            <div className="text-[9px] font-mono tracking-wider text-[#111111]/45 border-b pb-1">
              CONVERSATION LOG
            </div>
            {chatHistory.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-3 items-start select-text ${
                  msg.role === "user" ? "flex-row-reverse text-right" : "text-left"
                }`}
              >
                <div 
                  className={`p-2 rounded-lg border-2 border-[#111111] shrink-0 ${
                    msg.role === "user" ? "bg-[#D8D12B]" : "bg-[#111111] text-white"
                  }`}
                >
                  {msg.role === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                </div>
                <div className="space-y-1 max-w-[85%]">
                  <div className="text-[10px] font-mono text-[#111111]/40 px-1">
                    {msg.role === "user" ? "YOU" : "NITISH.AI"} • {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                  <div 
                    className={`p-3.5 rounded-xl border-2 border-[#111111] text-xs sm:text-sm font-semibold shadow-[2px_2px_0px_0px_#111111] leading-relaxed ${
                      msg.role === "user" ? "bg-white text-[#111111]" : "bg-[#F3F0E6] text-[#111111]"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isAiLoading && (
              <div className="flex gap-3 items-start text-left">
                <div className="p-2 rounded-lg border-2 border-[#111111] bg-[#111111] text-white shrink-0">
                  <Bot className="w-3.5 h-3.5 animate-bounce" />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-[#111111]/40 px-1 uppercase">
                    Nitish.AI is thinking...
                  </div>
                  <div className="bg-[#F3F0E6] p-3.5 rounded-xl border-2 border-[#111111] shadow-[2px_2px_0px_0px_#111111] flex items-center gap-2 text-xs font-mono font-bold text-[#111111]/60">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Analyzing system architectures...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* INPUT FORM */}
        <form onSubmit={handleAskAI} className="space-y-5">
          {/* User Details Grid (Name & Email) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5 text-left">
              <label className="block text-[10px] font-mono uppercase tracking-widest text-[#111111]/70 font-black">
                YOUR NAME (OPTIONAL)
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter name..."
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full bg-white border-2 border-[#111111] rounded-xl px-4 py-3 font-mono text-xs font-bold text-[#111111] focus:outline-none focus:ring-4 focus:ring-[#D8D12B]/40 placeholder-[#111111]/30 shadow-[2px_2px_0px_0px_#111111]"
                />
                <User className="absolute right-3.5 top-3.5 w-3.5 h-3.5 text-[#111111]/40" />
              </div>
            </div>
            
            <div className="space-y-1.5 text-left">
              <label className="block text-[10px] font-mono uppercase tracking-widest text-[#111111]/70 font-black">
                EMAIL ADDRESS (OPTIONAL)
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter email..."
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full bg-white border-2 border-[#111111] rounded-xl px-4 py-3 font-mono text-xs font-bold text-[#111111] focus:outline-none focus:ring-4 focus:ring-[#D8D12B]/40 placeholder-[#111111]/30 shadow-[2px_2px_0px_0px_#111111]"
                />
                <Mail className="absolute right-3.5 top-3.5 w-3.5 h-3.5 text-[#111111]/40" />
              </div>
            </div>
          </div>

          {/* Prompt Question Input */}
          <div className="space-y-1.5 text-left">
            <label className="block text-[10px] font-mono uppercase tracking-widest text-[#111111]/70 font-black">
              YOUR SPECIFIC QUESTION (REQUIRED)
            </label>
            <div className="relative">
              <textarea
                rows={3}
                placeholder="Ask a question about websites, mobile web apps, hospitality systems, landing pages, AI automation or your project idea..."
                value={userQuestion}
                onChange={(e) => setUserQuestion(e.target.value)}
                className="w-full bg-white border-2 border-[#111111] rounded-xl p-4 font-mono text-xs font-bold text-[#111111] focus:outline-none focus:ring-4 focus:ring-[#D8D12B]/40 placeholder-[#111111]/35 shadow-[3px_3px_0px_0px_#111111] resize-none"
                required
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              disabled={isAiLoading || !userQuestion.trim()}
              className="bg-[#D8D12B] hover:bg-[#111111] text-[#111111] hover:text-white disabled:bg-neutral-200 disabled:text-neutral-400 disabled:border-neutral-300 disabled:shadow-none disabled:translate-y-0 border-2 border-[#111111] px-6 py-4 rounded-xl font-mono text-[11px] uppercase tracking-widest font-black shadow-[4px_4px_0px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_#111111] cursor-pointer text-center transition-all flex items-center justify-center gap-2 font-bold"
            >
              {isAiLoading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>ASKING...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>ASK</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Submission success popup state */}
        <AnimatePresence>
          {isSubmitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="p-4 border-2 border-[#111111] bg-emerald-50 rounded-xl flex items-center gap-3 text-emerald-900 border-emerald-700 shadow-[3px_3px_0px_0px_#111111] select-text"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div className="text-xs font-sans font-bold leading-relaxed">
                Your question has been successfully indexed! The AI generated the response above, and the full ticket copy was sent straight to Nitish's review queue.
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {errorMessage && (
          <div className="p-4 border-2 border-[#111111] bg-rose-50 text-rose-900 border-rose-700 rounded-xl font-mono text-xs font-bold leading-relaxed">
            {errorMessage}
          </div>
        )}
      </section>

      {/* BOTTOM CTA - Apple Support, Stripe Docs Vibe */}
      <div className="bg-[#FAF8F4] border-2 border-[#111111] rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_0px_#111111] text-left space-y-6 pt-8 mt-12">
        <div className="space-y-3">
          <span className="text-[9px] font-mono uppercase bg-[#111111] text-white border border-[#111111] px-2.5 py-1 rounded font-black tracking-wider inline-block">
            DIRECT CHANNEL
          </span>
          <h2 className="text-2xl sm:text-3.5xl font-sans font-black text-[#111111] uppercase tracking-tight leading-none">
            READY TO BUILD SOMETHING BETTER?
          </h2>
          <p className="text-xs sm:text-sm text-[#111111]/85 leading-relaxed font-sans font-semibold max-w-3xl">
            Whether you need a mobile web app, hospitality platform, CRM, landing page or custom business system, let's start with understanding the business first.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-1">
          <button
            onClick={() => {
              onNavigate("enquiry");
            }}
            className="bg-[#D8D12B] hover:bg-[#111111] text-[#111111] hover:text-white border-2 border-[#111111] px-6 py-3.5 rounded-xl font-mono text-[11px] uppercase tracking-widest font-black shadow-[4px_4px_0px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_#111111] cursor-pointer text-center transition-all flex items-center justify-center gap-1.5 font-extrabold"
          >
            <span>LAUNCH YOUR APP</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
          
          <button
            onClick={() => {
              window.location.href = "tel:+919816402487";
            }}
            className="bg-[#FAF8F4] hover:bg-neutral-100 border-2 border-[#111111] text-[#111111] px-6 py-3.5 rounded-xl font-mono text-[11px] uppercase tracking-widest font-black cursor-pointer text-center shadow-[4px_4px_0px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_#111111] transition-all flex items-center justify-center gap-1.5 font-extrabold"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#111111]" />
            <span>BOOK A CALL</span>
          </button>
        </div>
      </div>
    </div>
  );
}
