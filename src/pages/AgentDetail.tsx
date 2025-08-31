import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeft, 
  Star, 
  Users, 
  Check, 
  Bot,
  MessageCircle,
  Shield,
  Zap
} from 'lucide-react';
import { agents, categories } from '@/data/agents';

const AgentDetail = () => {
  const { id } = useParams();
  const agent = agents.find(a => a.id === parseInt(id || '0'));
  const category = agent ? categories.find(cat => cat.id === agent.category) : null;

  if (!agent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="text-center p-8">
          <CardContent>
            <h2 className="text-2xl font-bold mb-4">Agent Not Found</h2>
            <p className="text-muted-foreground mb-6">
              The agent you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/marketplace">Browse All Agents</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/marketplace">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Marketplace
          </Link>
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary">{category?.name}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-medium">{agent.rating}</span>
                  <span className="ml-1">({agent.reviewCount} reviews)</span>
                </div>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">{agent.name}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {agent.description}
              </p>
            </div>

            {/* Agent Preview */}
            <Card>
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-hero rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🤖</div>
                    <p className="text-muted-foreground">Agent Preview</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">About This Agent</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {agent.fullDescription}
                </p>
                
                <Separator className="my-6" />
                
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {agent.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Technologies & Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {agent.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card className="sticky top-8">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-sm text-muted-foreground mb-2">Starting from</div>
                  <div className="text-3xl font-bold text-primary mb-4">
                    ${agent.price}
                  </div>
                  <Button size="lg" className="w-full" variant="gradient">
                    Request Agent
                  </Button>
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-accent" />
                    <span className="text-sm">Quick deployment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-accent" />
                    <span className="text-sm">Enterprise security</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">24/7 support included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Bot className="w-5 h-5 text-accent" />
                    <span className="text-sm">Regular updates</span>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="text-center">
                  <Button variant="outline" className="w-full">
                    Contact Specialist
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Agent Statistics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rating</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-medium">{agent.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Reviews</span>
                    <span className="font-medium">{agent.reviewCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category</span>
                    <span className="font-medium">{category?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Starting Price</span>
                    <span className="font-medium">${agent.price}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetail;