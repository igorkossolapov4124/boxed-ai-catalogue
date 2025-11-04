import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SYSTEM_PROMPT = `You are an AI Navigator for BoxedAI, a smart consultant helping businesses find the right AI automation solutions.

Available AI Use Cases (with real results):
1. AI Sales Closer (Category: sales, Pain Points: lead qualification, slow follow-ups, low conversion)
   - Result: +27% closed deals in 2 months, saves 40+ hours/rep monthly
   - Key Metric: "72% close rate (from 45%)"

2. HR Talent Scout (Category: hr, Pain Points: too many CVs, slow screening, delayed hiring)
   - Result: -60% time-to-hire, 3× candidate throughput
   - Key Metric: "Cut hiring time from 6 weeks to 2.4 weeks"

3. Healthcare Assistant (Category: healthcare, Pain Points: patient overload, long wait times, scheduling chaos)
   - Result: 3× more patient inquiries processed, -50% wait times
   - Key Metric: "300 calls/day handled (from 100)"

4. Operations Reporter (Category: operations, Pain Points: manual reporting, data silos, slow insights)
   - Result: -90% manual reporting time, real-time dashboards
   - Key Metric: "12 hours/week reporting → 1.2 hours"

Conversation Rules:
1. GREETING (Turn 0): "Hey! I'm your AI Navigator. What do you want to improve right now — sales, marketing, HR, or something else?"

2. CLARIFY (Turn 1): Ask ONE specific question based on their category:
   - If sales: "Got it. What's your main challenge — too many unqualified leads, slow follow-ups, or low conversion rates?"
   - If HR: "Got it. What's slowing you down — too many CVs to review, scheduling chaos, or finding the right talent?"
   - If healthcare: "Got it. What's your biggest pain point — patient overload, long wait times, or scheduling inefficiency?"
   - If operations: "Got it. What takes the most time — manual reporting, collecting data from multiple systems, or creating dashboards?"
   - If other/unclear: "Got it. Can you describe your main challenge in one sentence?"

3. RECOMMEND (Turn 2): After their second response, IMMEDIATELY recommend 2-3 relevant use cases based on:
   - Their category (sales, hr, healthcare, operations)
   - Their specific pain point keywords
   
Match logic:
- "lead" or "conversion" or "follow-up" or "qualification" → AI Sales Closer
- "cv" or "resume" or "screening" or "hiring" or "recruiting" → HR Talent Scout
- "patient" or "wait time" or "scheduling" or "appointment" → Healthcare Assistant
- "reporting" or "dashboard" or "data collection" or "manual process" → Operations Reporter

Response Format (JSON):
{
  "message": "your conversational response (2-3 sentences max)",
  "stage": "greeting" | "clarifying" | "recommendations",
  "recommendedCases": [1, 2, 3] or null,
  "showCTA": true/false,
  "turnCount": 0 | 1 | 2
}

CRITICAL RULES:
- Keep responses under 3 sentences
- Ask ONLY ONE question per turn
- After turn 2, ALWAYS provide recommendations (even if info is incomplete)
- Sound like a real consultant, not a bot
- Focus on business outcomes, not technical features`;

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

    // Count user turns
    const userTurnCount = messages.filter((m: any) => m.role === 'user').length;

    // Try to parse as JSON, if not, create structured response
    let structuredResponse;
    try {
      structuredResponse = JSON.parse(assistantMessage);
    } catch {
      // If not JSON, create a structured response based on turn count and content
      const lowerMessage = assistantMessage.toLowerCase();
      const isGreeting = userTurnCount === 0 || lowerMessage.includes('navigator');
      
      // Detect recommendations based on keywords
      const hasSalesMatch = lowerMessage.includes('sales closer') || lowerMessage.includes('lead');
      const hasHRMatch = lowerMessage.includes('hr talent') || lowerMessage.includes('screening');
      const hasHealthMatch = lowerMessage.includes('healthcare') || lowerMessage.includes('patient');
      const hasOpsMatch = lowerMessage.includes('operations') || lowerMessage.includes('reporting');
      const hasRecommendation = hasSalesMatch || hasHRMatch || hasHealthMatch || hasOpsMatch;
      
      // Determine which cases to recommend
      let recommendedCases = null;
      if (hasRecommendation || userTurnCount >= 2) {
        recommendedCases = [];
        if (hasSalesMatch) recommendedCases.push(1);
        if (hasHRMatch) recommendedCases.push(2);
        if (hasHealthMatch) recommendedCases.push(3);
        if (hasOpsMatch) recommendedCases.push(4);
        
        // If no specific match but user has provided enough info, recommend based on last message
        if (recommendedCases.length === 0) {
          const lastUserMsg = messages[messages.length - 1]?.content?.toLowerCase() || '';
          if (lastUserMsg.includes('cv') || lastUserMsg.includes('hire') || lastUserMsg.includes('recruit')) {
            recommendedCases = [2, 1]; // HR + Sales
          } else if (lastUserMsg.includes('patient') || lastUserMsg.includes('wait')) {
            recommendedCases = [3]; // Healthcare
          } else if (lastUserMsg.includes('report') || lastUserMsg.includes('dashboard')) {
            recommendedCases = [4]; // Operations
          } else {
            recommendedCases = [1, 2]; // Default to Sales + HR
          }
        }
      }
      
      structuredResponse = {
        message: assistantMessage,
        stage: isGreeting ? 'greeting' : (hasRecommendation || userTurnCount >= 2) ? 'recommendations' : 'clarifying',
        recommendedCases: recommendedCases,
        showCTA: hasRecommendation || userTurnCount >= 2,
        turnCount: userTurnCount
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
