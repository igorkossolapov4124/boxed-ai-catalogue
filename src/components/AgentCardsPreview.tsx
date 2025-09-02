import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, TrendingUp } from 'lucide-react';
import { agents } from '@/data/agents';
import { Link } from 'react-router-dom';

const AgentCardsPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredAgents = agents.slice(0, 3); // SalesAI Closer, HR Talent Scout, Healthcare Assistant

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredAgents.length);
    }, 4000); // Rotate every 4 seconds

    return () => clearInterval(interval);
  }, [featuredAgents.length]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="relative h-96 overflow-hidden rounded-2xl">
        {featuredAgents.map((agent, index) => (
          <div
            key={agent.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
              index === currentIndex
                ? 'translate-x-0 opacity-100 scale-100'
                : index < currentIndex
                ? '-translate-x-full opacity-0 scale-95'
                : 'translate-x-full opacity-0 scale-95'
            }`}
          >
            <Card className="h-full bg-white/95 backdrop-blur-sm border-0 shadow-2xl hover:shadow-card-hover transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{agent.icon}</div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {agent.category.toUpperCase()}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {agent.name}
                </CardTitle>
                <p className="text-primary font-semibold text-lg">
                  {agent.valueProposition}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {agent.description}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-3xl font-bold text-foreground">
                    ${agent.price}<span className="text-lg text-muted-foreground">/mo</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{agent.rating}</span>
                  </div>
                </div>
                <Button 
                  className="w-full font-semibold" 
                  variant="gradient" 
                  size="lg"
                  asChild
                >
                  <Link to={`/agent/${agent.id}`}>
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Deploy Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      
      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {featuredAgents.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white shadow-neon scale-125' 
                : 'bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AgentCardsPreview;