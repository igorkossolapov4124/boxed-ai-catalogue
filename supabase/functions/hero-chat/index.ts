import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SYSTEM_PROMPT = `You are an AI Navigator for BoxedAI, helping businesses find the right AI agents.

Available AI Agents:
1. SalesAI Closer (Category: sales)
   - Description: Automates lead qualification, analyzes client responses, and generates personalized closing scripts
   - Tags: automation, lead-generation, CRM
   - Key Result: 20-30% increase in revenue, saves 40+ hours/month
   - Integrations: Salesforce, HubSpot, Pipedrive, Slack

2. HR Talent Scout (Category: hr)
   - Description: AI-powered recruitment agent that screens candidates, schedules interviews, and matches skills
   - Tags: recruitment, HR, automation
   - Key Result: 60% faster hiring, 10x more candidates screened
   - Integrations: LinkedIn, Indeed, BambooHR, Workday

3. Healthcare Assistant (Category: healthcare)
   - Description: Handles patient inquiries, schedules appointments, and provides medical guidance 24/7
   - Tags: healthcare, patient-care, scheduling
   - Key Result: 50% reduced wait times, 3x more patients served
   - Integrations: Epic, Cerner, Allscripts, NextGen

Your conversation flow:
1. GREETING: Start with: "Hey! I'm your AI Navigator. What do you want to improve in your business today? (e.g. sales, marketing, HR, support)"
2. CLARIFYING QUESTIONS: Ask 1-2 specific questions based on their answer to understand:
   - What tools/platforms they currently use
   - What their biggest challenge is
   - Their team size or scale
3. RECOMMENDATIONS: Based on their responses, recommend 2-3 specific agents with:
   - Agent name and brief description
   - Why it's a good fit for their specific situation
   - Key metrics/results they can expect
4. CTA: End with presenting two options:
   - "Show me these agents" - to view full agent details
   - "Build my own solution" - for custom requirements

Important guidelines:
- Keep responses concise (2-3 sentences max per message)
- Be conversational and friendly
- Only recommend agents that truly match their needs
- Focus on business outcomes, not technical features
- Ask ONE question at a time
- After understanding their needs (usually after 1-2 clarifying questions), provide recommendations

Track the conversation state:
- If this is the first message: greet them
- If they've answered the initial question: ask 1-2 clarifying questions
- If you have enough context: provide recommendations and CTAs

Return your response in this JSON format:
{
  "message": "your conversational response",
  "stage": "greeting" | "clarifying" | "recommendations",
  "recommendedAgents": [1, 2, 3] or null,
  "showCTA": true/false
}`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const OPENAI_API_KEY = Deno.env.get('openaiapi');
    
    if (!OPENAI_API_KEY) {
      throw new Error('OpenAI API key not configured');
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 300,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', response.status, errorText);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    let assistantMessage = data.choices[0].message.content;

    // Try to parse as JSON, if not, create structured response
    let structuredResponse;
    try {
      structuredResponse = JSON.parse(assistantMessage);
    } catch {
      // If not JSON, create a structured response
      const lowerMessage = assistantMessage.toLowerCase();
      const isGreeting = lowerMessage.includes('hey') || lowerMessage.includes('hi') || lowerMessage.includes('navigator');
      const hasRecommendation = lowerMessage.includes('salesai') || lowerMessage.includes('hr talent') || lowerMessage.includes('healthcare');
      
      structuredResponse = {
        message: assistantMessage,
        stage: isGreeting ? 'greeting' : hasRecommendation ? 'recommendations' : 'clarifying',
        recommendedAgents: hasRecommendation ? [1, 2, 3] : null,
        showCTA: hasRecommendation
      };
    }

    return new Response(JSON.stringify(structuredResponse), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in hero-chat function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        message: "I'm having trouble connecting right now. Please try again.",
        stage: "error",
        recommendedAgents: null,
        showCTA: false
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
