import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users } from 'lucide-react';
import { Agent, categories } from '@/data/agents';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard = ({ agent }: AgentCardProps) => {
  const category = categories.find(cat => cat.id === agent.category);

  return (
    <Link to={`/agent/${agent.id}`}>
      <Card className="group h-full transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 cursor-pointer">
        <CardContent className="p-6">
          {/* Agent Image Placeholder */}
          <div className="aspect-video bg-gradient-hero rounded-lg mb-4 flex items-center justify-center">
            <div className="text-4xl">🤖</div>
          </div>

          {/* Category Badge */}
          <div className="flex items-center justify-between mb-3">
            <Badge variant="secondary" className="text-xs">
              {category?.name}
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-medium">{agent.rating}</span>
              <span className="ml-1">({agent.reviewCount})</span>
            </div>
          </div>

          {/* Agent Name */}
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {agent.name}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {agent.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {agent.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs text-muted-foreground">Starting from</span>
              <div className="text-xl font-bold text-primary">
                ${agent.price}
              </div>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Users className="w-4 h-4 mr-1" />
              <span>{agent.reviewCount} reviews</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default AgentCard;