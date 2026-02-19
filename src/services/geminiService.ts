import OpenAI from 'openai';
import { COMPANY_DESCRIPTION } from "../constants";

let conversationHistory: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [];

const getClient = () => {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("NEXT_PUBLIC_OPENAI_API_KEY is not defined");
  }

  return new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true // Required for client-side usage
  });
};

const SYSTEM_PROMPT = `You are the Royal Advisor for Empire Offshore. 
Your tone is professional, sophisticated, slightly futuristic, and helpful. 
You represent a premium, high-performance offshore partner.

Here is the company knowledge base:
${COMPANY_DESCRIPTION}

IMPORTANT INSTRUCTIONS:
- Answer questions specifically about Empire Offshore's services.
- If asked about pricing, suggest scheduling a consultation.
- Keep responses concise (under 100 words) unless asked for details.
- When users ask about contact, meetings, scheduling, consultation, or want to talk to someone, respond with:
  "You can schedule a meeting with our team here: https://www.empireoffshore.com/#contact"
- NEVER use placeholder text like [Contact Empire Offshore] or brackets. Always use the actual URL directly.
- Format the link naturally in your response without any markdown or special formatting.
- Be proactive about offering the contact link when discussing services, pricing, or next steps.`;

export const initializeChat = async (): Promise<void> => {
  conversationHistory = [
    { role: "system", content: SYSTEM_PROMPT }
  ];
  console.log("✅ Chat initialized with OpenAI");
};

export const sendMessageToOpenAI = async (message: string): Promise<string> => {
  try {
    if (conversationHistory.length === 0) {
      await initializeChat();
    }

    const client = getClient();

    // Add user message to history
    conversationHistory.push({ role: "user", content: message });

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini", // Fast and affordable ($0.150 per 1M tokens)
      // OR use: "gpt-4o" for highest quality ($2.50 per 1M tokens)
      // OR use: "gpt-3.5-turbo" for cheapest option ($0.50 per 1M tokens)
      messages: conversationHistory,
      temperature: 0.7,
      max_tokens: 500,
    });

    const assistantMessage = response.choices[0]?.message?.content || "I processed the request but received no audible response.";

    // Add assistant response to history
    conversationHistory.push({ role: "assistant", content: assistantMessage });

    // Keep only last 20 messages to manage context window
    if (conversationHistory.length > 21) { // 1 system + 20 messages
      conversationHistory = [
        conversationHistory[0], // Keep system message
        ...conversationHistory.slice(-20)
      ];
    }

    console.log("✅ Response received from OpenAI");
    return assistantMessage;

  } catch (error: any) {
    console.error("❌ OpenAI Error:", error);

    if (error.message?.includes('quota') || error.message?.includes('insufficient_quota')) {
      return "My neural pathways are temporarily overloaded. Please check your API credits and try again.";
    }

    if (error.message?.includes('API key') || error.message?.includes('Unauthorized')) {
      return "Authentication failed. Please check the API key configuration.";
    }

    if (error.message?.includes('rate_limit')) {
      return "Too many requests. Please wait a moment and try again.";
    }

    return "A communications disruption occurred. Please restate your query.";
  }
};