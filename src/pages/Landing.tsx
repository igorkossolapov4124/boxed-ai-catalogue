import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag, MessageSquare, Users, TrendingUp } from 'lucide-react';

const Landing = () => {
  const exampleAgents = [
    {
      title: "AI Sales Assistant",
      result: "+35% more sales",
      icon: ShoppingBag
    },
    {
      title: "AI Instagram Responder", 
      result: "Auto-replies to customers",
      icon: MessageSquare
    },
    {
      title: "AI HR Scout",
      result: "2x faster hiring", 
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Main Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                  BoxedAI: Free Catalog of 
                  <span className="text-primary"> AI Agents</span> for Any Business
                </h1>
                
                <p className="text-lg lg:text-xl text-muted-foreground">
                  Type your business, get the best AI agents instantly — free to download and use.
                </p>
              </div>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="text-lg px-12 py-6 font-semibold bg-blue-600 hover:bg-blue-700 text-white border-0 hover-scale" 
                  asChild
                >
                  <Link to="/ideas">Find My AI Agents</Link>
                </Button>
                
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Already used by 120+ businesses
                </p>
              </div>
            </div>

            {/* Right Side - Example Cards */}
            <div className="space-y-6 animate-fade-in animation-delay-200">
              <div className="space-y-4">
                {exampleAgents.map((agent, index) => (
                  <Card 
                    key={index} 
                    className="border border-border hover:shadow-md transition-all duration-300 hover-scale animate-fade-in cursor-pointer group bg-card/50 backdrop-blur-sm"
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                          <agent.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground text-sm">
                            {agent.title}
                          </h4>
                          <p className="text-sm font-medium text-green-600">
                            {agent.result}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;