import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Idea, categories } from '@/data/ideas';

interface IdeaCardProps {
  idea: Idea;
}

const IdeaCard = ({ idea }: IdeaCardProps) => {
  const category = categories.find(cat => cat.id === idea.category);

  return (
    <Card className="group h-full transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 bg-card border border-blue-100">
      <CardContent className="p-6 space-y-4">
        {/* Thumbnail */}
        <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
          <img 
            src={idea.thumbnail} 
            alt={idea.title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>

        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-xs font-medium bg-blue-50 text-blue-700">
              {category?.name}
            </Badge>
          </div>
          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
            {idea.title}
          </h3>
          <p className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {idea.outcome}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {idea.description}
        </p>

        {/* Benefits */}
        <div className="space-y-1">
          {idea.benefits.slice(0, 3).map((benefit, index) => (
            <div key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {[...idea.tags, ...idea.stack].slice(0, 4).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs border-blue-200 text-blue-600">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="space-y-2 pt-2 border-t border-blue-100">
          <Link to={`/idea/${idea.slug}`} className="block">
            <Button variant="outline" className="w-full text-sm border-blue-200 text-blue-700 hover:bg-blue-50">
              View Idea
            </Button>
          </Link>
          <div className="grid grid-cols-1 gap-2">
            <Link to={`/checkout/json/${idea.json.id}`} className="block">
              <Button variant="default" className="w-full text-sm gradient-primary text-white">
                Download JSON — ${idea.json.price}
              </Button>
            </Link>
            <Link to={`/integration?idea=${idea.id}`} className="block">
              <Button variant="secondary" className="w-full text-sm bg-white border border-blue-200 text-blue-700 hover:bg-blue-50">
                Request Integration — from ${idea.integration.basePrice}
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IdeaCard;