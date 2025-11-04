import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Send, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ideas } from '@/data/ideas';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatResponse {
  message: string;
  stage: 'greeting' | 'clarifying' | 'recommendations' | 'error';
  recommendedCases: number[] | null;
  showCTA: boolean;
  turnCount?: number;
}

const HeroChat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recommendedCases, setRecommendedCases] = useState<number[]>([]);
  const [showCTA, setShowCTA] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [userTurnCount, setUserTurnCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isAnalyzing]);

  useEffect(() => {
    // Initial greeting
    const greet = async () => {
      setIsTyping(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      setMessages([{
        role: 'assistant',
        content: "Hey! I'm your AI Navigator. What do you want to improve right now — sales, marketing, HR, or something else?"
      }]);
      setIsTyping(false);
    };
    greet();
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);
    setUserTurnCount(prev => prev + 1);
    
    const currentTurnCount = userTurnCount + 1;

    try {
      // Show analyzing animation after the second user message
      if (currentTurnCount >= 2) {
        setIsAnalyzing(true);
        await new Promise(resolve => setTimeout(resolve, 2500));
        setIsAnalyzing(false);
      }

      setIsTyping(true);

      const { data, error } = await supabase.functions.invoke('hero-chat', {
        body: { 
          messages: newMessages.map(m => ({ role: m.role, content: m.content }))
        }
      });

      if (error) throw error;

      const response: ChatResponse = data;
      
      // Simulate typing delay
      await new Promise(resolve => setTimeout(resolve, 600));
      
      setMessages([...newMessages, {
        role: 'assistant',
        content: response.message
      }]);

      if (response.recommendedCases && response.recommendedCases.length > 0) {
        setRecommendedCases(response.recommendedCases);
      }
      
      if (response.showCTA) {
        setShowCTA(true);
      }

    } catch (error) {
      console.error('Error sending message:', error);
      setMessages([...newMessages, {
        role: 'assistant',
        content: "I'm having trouble connecting right now. Please try again in a moment."
      }]);
    } finally {
      setIsLoading(false);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const getRecommendedCaseData = () => {
    return recommendedCases
      .map(id => ideas.find(i => i.id === id))
      .filter(Boolean)
      .slice(0, 3);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Build Your AI Team
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Tell us your challenge, and we'll show you real solutions in 60 seconds
          </p>
        </div>

        {/* Chat Container */}
        <Card className="backdrop-blur-sm bg-background/95 border-primary/10 shadow-2xl rounded-2xl overflow-hidden">
          {/* Messages */}
          <div className="h-[400px] overflow-y-auto p-6 space-y-4 scroll-smooth">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground ml-auto'
                      : 'bg-muted/50 text-foreground'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Analyzing Animation */}
            {isAnalyzing && (
              <div className="flex justify-center items-center py-6 animate-fade-in">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary animate-pulse" />
                    <span className="text-sm font-medium text-primary">
                      Analyzing 200+ AI use cases
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            
            {/* Typing Indicator */}
            {isTyping && !isAnalyzing && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-muted/50 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-primary/10 p-4 bg-background/50">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your answer..."
                disabled={isLoading}
                className="flex-1 bg-background border-primary/20 focus:border-primary"
              />
              <Button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                size="icon"
                className="bg-primary hover:bg-primary/90"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Recommended Case Cards */}
        {recommendedCases.length > 0 && (
          <div className="mt-8 space-y-4 animate-fade-in">
            <h3 className="text-xl font-semibold text-center">Here's what we found for you</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {getRecommendedCaseData().map((idea) => (
                <Card
                  key={idea.id}
                  className="group p-5 hover:shadow-xl transition-all cursor-pointer hover:scale-105 border-primary/20 bg-background/80 backdrop-blur-sm"
                  onClick={() => navigate(`/idea/${idea.slug}`)}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">
                        {idea.title}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                        {idea.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 rounded-lg p-3 mb-3">
                    <p className="text-xs font-medium text-primary">
                      {idea.outcome}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {idea.caseStudy.keyMetrics.slice(0, 2).map((metric, i) => (
                      <span key={i} className="text-xs bg-muted/50 px-2 py-1 rounded">
                        {metric}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-primary/10 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      View case study
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* CTAs */}
        {showCTA && (
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              onClick={() => navigate('/ideas')}
            >
              Explore more solutions
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/5"
              onClick={() => navigate('/integration')}
            >
              Build my own solution
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroChat;
