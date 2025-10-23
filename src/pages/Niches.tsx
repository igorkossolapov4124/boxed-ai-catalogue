import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { niches, iconMap } from '@/data/niches';

const Niches = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Choose Your Business Niche
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select your industry to discover AI agents designed specifically for your business needs
          </p>
        </div>

        {/* Niches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {niches.map((niche) => {
            const IconComponent = iconMap[niche.icon as keyof typeof iconMap];
            const totalAgents = niche.departments.reduce((sum, dept) => sum + dept.agents.length, 0);
            
            return (
              <Link
                key={niche.id}
                to={`/niche/${niche.id}`}
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
                  <CardContent className="p-8">
                    {/* Icon */}
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Niche Name */}
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {niche.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-6">
                      {niche.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm text-muted-foreground">Available Agents</span>
                      <span className="text-sm font-medium">{totalAgents}</span>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-sm font-medium text-primary group-hover:text-primary-dark transition-colors">
                      Explore {niche.name}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Niches;
