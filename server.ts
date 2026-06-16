import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const PORT = 3000;

// Lazy initialization of GoogleGenAI client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not defined.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // API router/routes FIRST before Vite middleware handles routing
  app.post("/api/faq/chat", async (req, res) => {
    try {
      const { question, name, email, chatHistory } = req.body;
      if (!question || typeof question !== "string") {
        res.status(400).json({ error: "Missing or invalid 'question' in body" });
        return;
      }

      // Check for Gemini API key lazy-load availability
      if (!process.env.GEMINI_API_KEY) {
        // Graceful fallback response when API key is not configured yet
        res.json({
          answer: "Let's discuss this directly. Book a call or submit your project details and we'll help you choose the best approach.",
          fallback: true
        });
        return;
      }

      const client = getGeminiClient();

      const systemInstruction = `You are a professional virtual AI FAQ Assistant representing Nitish Kaushal.
Nitish is a high-end Digital Growth Systems architect and professional developer/designer.
You must answer questions strictly and elegantly based on Nitish's expertise, offerings, pricing, and timelines:

1. Expertise & Services:
   - Hospitality platforms (tailored F&B websites, digital menus, Localized WhatsApp ordering, POS synchronization, custom kitchen printer systems).
   - Mobile web apps (faster, engaging, offline-capable, phone-optimized, high customer interaction).
   - Custom CRM/ERP and Business systems (custom administration boards, client relationship systems, operations portals).
   - High-converting Landing pages (pixel-perfect typography, rapid load performance, product launches, SaaS optimization).
   - AI automation & workflows (content generation systems, support automation, WhatsApp/Email autoresponders, OCR document tools, eliminating manual bottlenecks).
2. Project Pricing:
   - Starts of ₹15,000 and scales based on complexity, workflows, database needs, and active integrations.
3. Timelines:
   - Delivers standard projects between 1 to 4 weeks depending on the size and iterations.
4. Business Philosophy:
   - We don't start with just templates or simple code. We analyze user journeys, business flow, sales channels, and operations first.

CRITICAL INSTRUCTIONS:
- Keep your answers extremely compact, brief, clear, and highly focused. Do NOT give lengthy answers. Use NO MORE than 2 sentences (or max 45 words) per response.
- Deliver responses in a highly condensed summary format. Avoid any long paragraphs, generic preambles, or unrequested explanations.
- Use a friendly, expert, and reassuring tone.
- Do NOT use self-praising or marketing buzzwords. Speak objectively.
- IF the user asks an unrelated question (e.g. general math, unrelated history, coding trivia, or high-level personal questions not related to digital growth systems, services, or projects) OR IF your confidence in providing an accurate response is low, you MUST respond EXACTLY with:
  "Let's discuss this directly. Book a call or submit your project details and we'll help you choose the best approach."
- Do not output any preamble like "Sure, I can answer that:" or extra markdown fluff. Just produce the direct elegant answer.`;

      const contents = [];
      
      // Inject prior conversation context if provided in standard chatHistory
      if (Array.isArray(chatHistory)) {
        for (const turn of chatHistory) {
          if (turn.role && turn.content) {
            contents.push({
              role: turn.role,
              parts: [{ text: turn.content }]
            });
          }
        }
      }

      // Append current user query
      contents.push({
        role: "user",
        parts: [{ text: `${question}${name ? ` (My name is ${name}${email ? ` and my email is ${email}` : ""})` : ""}` }]
      });

      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const text = response.text || "";
      res.json({ answer: text.trim() });
    } catch (err: any) {
      console.error("Gemini API error in backend:", err);
      res.status(500).json({ error: "Failed to generate AI response. Let's discuss this directly." });
    }
  });

  // Vite middleware for asset serving in development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static asset serving
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Web server listening on port ${PORT}`);
  });
}

startServer();
