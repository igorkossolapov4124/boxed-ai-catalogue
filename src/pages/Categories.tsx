import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Users, 
  Heart, 
  DollarSign, 
  Headphones, 
  Megaphone, 
  Scale, 
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import { categories, agents } from '@/data/agents';

const iconMap = {
  TrendingUp,
  Users,
  Heart,
  DollarSign,
  Headphones,
  Megaphone,
  Scale,
  GraduationCap,
};

const Categories = () => {
  const getCategoryStats = (categoryId: string) => {
    const categoryAgents = agents.filter(agent => agent.category === categoryId);
    const avgPrice = categoryAgents.reduce((sum, agent) => sum + agent.price, 0) / categoryAgents.length;
    const avgRating = categoryAgents.reduce((sum, agent) => sum + agent.rating, 0) / categoryAgents.length;
    
    return {
      count: categoryAgents.length,
      avgPrice: Math.round(avgPrice),
      avgRating: avgRating.toFixed(1),
      totalReviews: categoryAgents.reduce((sum, agent) => sum + agent.reviewCount, 0)
    };
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Browse by Category
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover AI agents organized by industry and use case. Find the perfect solution for your specific needs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            const stats = getCategoryStats(category.id);
            
            return (
              <Link
                key={category.id}
                to={`/marketplace?category=${category.id}`}
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
                  <CardContent className="p-8">
                    {/* Icon */}
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Category Name */}
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>

                    {/* Stats */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Available Agents</span>
                        <Badge variant="secondary">{stats.count}</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Avg. Price</span>
                        <span className="text-sm font-medium">${stats.avgPrice}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Avg. Rating</span>
                        <div className="flex items-center">
                          <span className="text-sm font-medium">{stats.avgRating}</span>
                          <span className="text-xs text-muted-foreground ml-1">★</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-sm font-medium text-primary group-hover:text-primary-dark transition-colors">
                      Explore {category.name}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Popular Categories Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Most Popular Categories</h2>
            <p className="text-muted-foreground">
              Categories with the highest demand and best-rated agents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Sales */}
            <Card className="gradient-card border-none">
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Sales & CRM</h3>
                <p className="text-muted-foreground mb-4">
                  Boost your sales with AI-powered lead generation and customer relationship management
                </p>
                <Badge variant="outline">Most Popular</Badge>
              </CardContent>
            </Card>

            {/* Customer Support */}
            <Card className="gradient-card border-none">
              <CardContent className="p-8 text-center">
                <Headphones className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
                <p className="text-muted-foreground mb-4">
                  Provide 24/7 customer service with intelligent chatbots and support agents
                </p>
                <Badge variant="outline">Highest Rated</Badge>
              </CardContent>
            </Card>

            {/* Marketing */}
            <Card className="gradient-card border-none">
              <CardContent className="p-8 text-center">
                <Megaphone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Marketing</h3>
                <p className="text-muted-foreground mb-4">
                  Create engaging content and optimize campaigns with AI marketing specialists
                </p>
                <Badge variant="outline">Fastest Growing</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;