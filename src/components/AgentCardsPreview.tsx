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
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative h-[440px] overflow-hidden rounded-2xl">
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
            <Card className="h-full bg-white backdrop-blur-sm border-0 shadow-2xl hover:shadow-card-hover transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-3xl">{agent.icon}</div>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-0 font-medium text-xs px-3 py-1">
                    {agent.category.toUpperCase()}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {agent.name}
                </CardTitle>
                <p className="text-blue-600 font-semibold text-base leading-snug">
                  {agent.valueProposition}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-5 leading-relaxed text-sm">
                  {agent.description}
                </p>
                <div className="flex items-center justify-between mb-5">
                  <div className="text-2xl font-bold text-gray-900">
                    ${agent.price}<span className="text-base text-gray-500 font-medium">/mo</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-sm">{agent.rating}</span>
                  </div>
                </div>
                <Button 
                  className="w-full font-semibold text-base h-11" 
                  variant="gradient" 
                  asChild
                >
                  <Link to={`/agent/${agent.id}`}>
                    Deploy Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      
      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {featuredAgents.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AgentCardsPreview;