import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Target, Download, Zap } from 'lucide-react';

const Landing = () => {
  const howItWorks = [
    { 
      icon: Target, 
      title: "Answer 3-4 quick questions", 
      description: "Tell us about your business needs" 
    },
    { 
      icon: Download, 
      title: "Get a curated list of AI agent use cases", 
      description: "See proven solutions for your industry" 
    },
    { 
      icon: Zap, 
      title: "Download JSON and integrate", 
      description: "Deploy in minutes with ready configs" 
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section - Block 1 */}
      <section className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Find AI Agents for Your Business in 2 Minutes
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            A catalog of real AI use cases with ready-to-use JSON configs and fast integration.
          </p>
          
          <Button 
            size="lg" 
            className="w-full mb-4 text-lg py-6 font-semibold" 
            asChild
          >
            <Link to="/ideas">Start Case Selection</Link>
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Trusted by 120+ companies
          </p>
        </div>
      </section>

      {/* How It Works - Block 2 */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-12 text-foreground">
            How BoxedAI Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-base font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 font-semibold" 
              asChild
            >
              <Link to="/ideas">Start Case Selection</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;