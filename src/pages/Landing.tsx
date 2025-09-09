import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Download, Zap, TrendingUp, Users, Heart } from 'lucide-react';

const Landing = () => {
  const exampleAgents = [
    {
      title: "AI Sales Closer",
      result: "+27% more closed deals in 2 months",
      icon: TrendingUp,
      link: "/idea/ai-sales-closer"
    },
    {
      title: "HR Talent Scout", 
      result: "60% faster hiring, 3× candidate throughput",
      icon: Users,
      link: "/idea/hr-talent-scout"
    },
    {
      title: "Healthcare Assistant",
      result: "3× more patient requests processed", 
      icon: Heart,
      link: "/idea/healthcare-assistant"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Examples - Single Block */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Content */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground leading-tight animate-fade-in">
              Find AI Agents for Your Business in 2 Minutes
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in animation-delay-100">
              Real AI use cases with ready-to-use JSON configs and fast integration.
            </p>
            
            <div className="animate-fade-in animation-delay-200">
              <Button 
                size="lg" 
                className="text-lg px-10 py-6 font-semibold mb-4 hover-scale" 
                asChild
              >
                <Link to="/ideas">Start Case Selection</Link>
              </Button>
              
              <p className="text-sm text-muted-foreground">
                Trusted by 120+ companies
              </p>
            </div>
          </div>

          {/* Examples Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-10 text-foreground animate-fade-in animation-delay-300">
              Examples of AI Agents you'll get:
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {exampleAgents.map((agent, index) => (
                <Card 
                  key={index} 
                  className="border border-border hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in cursor-pointer group"
                  style={{ animationDelay: `${400 + index * 150}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <agent.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {agent.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {agent.result}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-sm hover-scale group-hover:border-primary group-hover:text-primary transition-all duration-300" 
                      asChild
                    >
                      <Link to={agent.link}>View Case</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center animate-fade-in animation-delay-700">
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-8 py-3 hover-scale" 
                asChild
              >
                <Link to="/ideas">See All Cases</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;