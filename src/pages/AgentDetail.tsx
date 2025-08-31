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

        {/* B2B Product Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              {/* Top Section */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{category?.name}</Badge>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-medium">{agent.rating}</span>
                  <span className="ml-1">({agent.reviewCount} reviews)</span>
                </div>
              </div>

              {/* Agent Info */}
              <div className="mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold mb-3">{agent.name}</h1>
                <p className="text-xl font-semibold text-primary mb-4">
                  {agent.valueProposition}
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>{agent.problemStatement}</p>
                  <p>{agent.solution}</p>
                  <p className="font-medium text-foreground">{agent.result}</p>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {agent.businessHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-2xl">{highlight.icon}</span>
                      <span className="text-foreground font-medium">{highlight.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Integrations */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Integrates with</h3>
                <div className="flex flex-wrap gap-2">
                  {agent.integrations.map((integration) => (
                    <Badge key={integration} variant="outline" className="text-sm py-1 px-3">
                      {integration}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Use Cases</h3>
                <div className="flex flex-wrap gap-2">
                  {agent.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Enterprise Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Enterprise Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-accent" />
                    <span>Quick deployment (within 24h)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-accent" />
                    <span>Enterprise-grade security</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-accent" />
                    <span>24/7 support included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Bot className="w-5 h-5 text-accent" />
                    <span>Regular updates & SLA guarantee</span>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA Section */}
              <div className="grid lg:grid-cols-2 gap-8 pt-6 border-t border-border">
                {/* Pricing */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Pricing</h3>
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-sm text-muted-foreground">Starting from</span>
                      <span className="text-3xl font-bold text-primary">${agent.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Flat monthly fee. Cancel anytime.</p>
                  </div>

                  {/* Trust Indicators */}
                  <div className="space-y-2">
                    <p className="font-medium text-foreground">{agent.trustIndicator}</p>
                    <p className="text-sm text-muted-foreground italic">{agent.caseExample}</p>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="flex flex-col justify-center">
                  <Button size="lg" className="w-full mb-4" variant="gradient">
                    Deploy Agent
                  </Button>
                  <Button variant="outline" className="w-full">
                    Contact Specialist
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default AgentDetail;