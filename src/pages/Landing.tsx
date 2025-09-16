import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag, MessageSquare, Users, TrendingUp } from 'lucide-react';

const Landing = () => {
  const exampleAgents = [
    {
      title: "AI Sales Assistant for Clothing Stores",
      result: "+35% more sales",
      icon: ShoppingBag,
      description: "Recommends products, handles inquiries"
    },
    {
      title: "AI Instagram Responder", 
      result: "Auto-replies to customers",
      icon: MessageSquare,
      description: "Manages DMs and comments 24/7"
    },
    {
      title: "AI HR Scout",
      result: "2x faster hiring", 
      icon: Users,
      description: "Screens resumes and schedules interviews"
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
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                  Enter Your Business Type,
                  <br />
                  <span className="text-primary">Get AI Agents Instantly</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  If you sell clothes, type <span className="font-semibold text-foreground">'clothing store'</span> and see the best AI agents for that niche. Download and install them for free.
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
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Popular AI Agents:
              </h3>
              
              <div className="space-y-4">
                {exampleAgents.map((agent, index) => (
                  <Card 
                    key={index} 
                    className="border border-border hover:shadow-md transition-all duration-300 hover-scale animate-fade-in cursor-pointer group bg-card/50 backdrop-blur-sm"
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                          <agent.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-base leading-tight">
                            {agent.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                            {agent.description}
                          </p>
                          <p className="text-sm font-medium text-green-600 mt-2">
                            {agent.result}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="pt-4">
                <Button 
                  variant="outline" 
                  size="default" 
                  className="w-full hover-scale border-primary/20 hover:border-primary hover:bg-primary/5" 
                  asChild
                >
                  <Link to="/ideas">View All AI Agents</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;