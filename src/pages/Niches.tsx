import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { niches, iconMap } from '@/data/niches';

const Niches = () => {
  // Benefit copy for each niche
  const nicheBenefits: Record<string, string> = {
    beauty: 'AI tools for salons and beauty studios',
    education: 'AI tools for schools and courses',
    'real-estate': 'AI tools for real estate businesses',
    fitness: 'AI tools for gyms and trainers',
    dental: 'AI tools for dental practices',
    healthcare: 'AI tools for clinics and medical centers',
    'car-retail': 'AI tools for car dealerships'
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Find the Right AI for Your Business
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select your niche and explore AI agents crafted for your industry
          </p>
        </div>

        {/* Niches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {niches.map((niche) => {
            const IconComponent = iconMap[niche.icon as keyof typeof iconMap];
            
            return (
              <Link
                key={niche.id}
                to={`/niche/${niche.id}`}
                className="group block"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50">
                  <CardContent className="p-8 flex flex-col h-full gap-6">
                    {/* Icon - larger, Apple-style */}
                    <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center">
                      <IconComponent className="w-9 h-9 text-primary" />
                    </div>

                    {/* Title - bolder */}
                    <h3 className="text-xl font-bold leading-tight">
                      {niche.name}
                    </h3>

                    {/* Benefit Line - medium weight */}
                    <p className="text-base font-medium text-foreground/80 leading-relaxed">
                      {nicheBenefits[niche.id]}
                    </p>

                    {/* CTA - minimal, bottom */}
                    <div className="mt-auto flex items-center text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      Explore
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
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
