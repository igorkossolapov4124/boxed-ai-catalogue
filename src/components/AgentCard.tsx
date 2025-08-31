import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { Agent, categories } from '@/data/agents';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard = ({ agent }: AgentCardProps) => {
  const category = categories.find(cat => cat.id === agent.category);

  return (
    <Card className="group h-full transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 bg-card border border-border">
      <CardContent className="p-6 space-y-6">
        {/* Top Section - Hero Block */}
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">{agent.icon}</div>
              <Badge variant="secondary" className="text-xs font-medium">
                {category?.name}
              </Badge>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-semibold">{agent.rating}</span>
              <span className="ml-1">({agent.reviewCount} reviews)</span>
            </div>
          </div>

          {/* Title & Value Proposition */}
          <div className="space-y-2">
            <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
              {agent.name}
            </h3>
            <p className="text-sm font-semibold text-primary">
              {agent.valueProposition}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{agent.problemStatement}</p>
          <p className="text-sm text-muted-foreground">{agent.solution}</p>
          <p className="text-sm font-medium text-foreground">{agent.result}</p>
        </div>

        {/* Business Value Highlights */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-foreground">Key Benefits:</h4>
          <div className="space-y-1">
            {agent.businessHighlights.map((highlight, index) => (
              <div key={index} className="flex items-center text-sm text-muted-foreground">
                <span className="mr-2">{highlight.icon}</span>
                <span>{highlight.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-foreground">Integrates with:</h4>
          <div className="flex flex-wrap gap-1">
            {agent.integrations.map((integration) => (
              <Badge key={integration} variant="outline" className="text-xs">
                {integration}
              </Badge>
            ))}
          </div>
        </div>

        {/* Tags / Use Cases */}
        <div className="flex flex-wrap gap-1">
          {agent.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Pricing Block */}
        <div className="space-y-1">
          <div className="flex items-baseline space-x-1">
            <span className="text-xs text-muted-foreground">Starting from</span>
            <span className="text-2xl font-bold text-foreground">${agent.price}</span>
            <span className="text-sm text-muted-foreground">/month</span>
          </div>
          <p className="text-xs text-muted-foreground">Flat monthly fee. Cancel anytime.</p>
        </div>

        {/* Trust Indicators */}
        <div className="space-y-2 border-t border-border pt-4">
          <p className="text-xs font-medium text-muted-foreground">{agent.trustIndicator}</p>
          <p className="text-xs text-muted-foreground italic">{agent.caseExample}</p>
        </div>

        {/* Call to Action */}
        <Link to={`/agent/${agent.id}`} className="block">
          <Button variant="gradient" className="w-full font-semibold">
            Deploy Agent
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default AgentCard;