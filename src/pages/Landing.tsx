import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Bot, Zap, Shield, TrendingUp, Clock, DollarSign, Users, Star, CheckCircle, Target, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-ai-marketplace.jpg';
import { agents } from '@/data/agents';
import AgentCardsPreview from '@/components/AgentCardsPreview';

const Landing = () => {
  const scrollToFeaturedAgents = () => {
    document.getElementById('featured-agents')?.scrollIntoView({ behavior: 'smooth' });
  };

  const valueStats = [
    { icon: Clock, value: "40+", label: "hours saved per employee per month" },
    { icon: TrendingUp, value: "20-30%", label: "revenue increase in first 3 months" },
    { icon: Shield, value: "Enterprise", label: "ready (SOC2, GDPR, HIPAA)" },
    { icon: Zap, value: "<24h", label: "deployment time" }
  ];

  const featuredAgents = agents.slice(0, 3);

  const howItWorks = [
    { icon: Target, title: "Choose an Agent", description: "Browse our marketplace of pre-built AI agents" },
    { icon: Sparkles, title: "Customize & Deploy in <24h", description: "Quick setup with our expert team" },
    { icon: TrendingUp, title: "See ROI within 90 days", description: "Guaranteed results or money back" }
  ];

  const testimonials = [
    { quote: "BoxedAI's SalesAI Closer increased our conversion rate by 35% in just 2 months.", company: "TechFlow Solutions", author: "Sarah Chen, VP Sales" },
    { quote: "We saved 45 hours per week on HR tasks with their HR Talent Scout agent.", company: "GrowthCorp", author: "Mike Rodriguez, HR Director" },
    { quote: "The healthcare assistant helped us process 3x more patient inquiries efficiently.", company: "MedCare Plus", author: "Dr. Lisa Park, Operations" }
  ];

  const companyLogos = ["Salesforce", "HubSpot", "Slack", "Microsoft", "Google", "Zoom"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 gradient-hero-dark text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8 neon-glow">
                Deploy AI Agents.{' '}
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Cut Costs by 30%.
                </span>
              </h1>
              <p className="text-2xl text-blue-100 mb-10 leading-relaxed font-medium">
                Pre-built AI agents for Sales, HR, and Healthcare. Ready to launch in &lt;24h.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mb-8 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="text-xl px-10 py-4 font-bold shadow-2xl hover:scale-105 transition-all duration-300" 
                  variant="gradient" 
                  onClick={scrollToFeaturedAgents}
                >
                  Deploy Your First Agent
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-xl px-10 py-4 font-semibold border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300" 
                  asChild
                >
                  <Link to="/marketplace">Explore Marketplace</Link>
                </Button>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Sparkles className="w-5 h-5 text-yellow-300" />
                <p className="text-lg text-blue-100 font-medium">
                  Trusted by 120+ companies worldwide
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <AgentCardsPreview />
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </section>

      {/* Why BoxedAI - Value Proposition */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why BoxedAI?</h2>
            <p className="text-muted-foreground text-lg">
              Proven results that transform your business operations
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {valueStats.map((stat, index) => (
              <Card key={index} className="text-center border-none shadow-card">
                <CardContent className="p-6">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Agents */}
      <section id="featured-agents" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Featured AI Agents
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready-to-deploy solutions that deliver immediate ROI
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAgents.map((agent) => (
              <Card key={agent.id} className="border-none shadow-card hover:shadow-card-hover transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{agent.icon}</div>
                    <Badge variant="secondary">{agent.category}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{agent.name}</CardTitle>
                  <p className="text-primary font-semibold">{agent.valueProposition}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{agent.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold">${agent.price}/mo</div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{agent.rating}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4 italic">
                    "{agent.caseExample}"
                  </p>
                  <Button className="w-full" variant="gradient" asChild>
                    <Link to={`/agent/${agent.id}`}>Deploy Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to transform your business
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <Card key={index} className="text-center border-none shadow-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join 120+ businesses worldwide that trust BoxedAI
            </p>
          </div>
          
          {/* Company Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-60">
            {companyLogos.map((company) => (
              <div key={company} className="text-lg font-semibold text-muted-foreground">
                {company}
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-card">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Flat monthly fee. Cancel anytime.
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transparent pricing with no hidden costs. Start transforming your business today.
          </p>
          <div className="mb-8">
            <div className="text-4xl lg:text-6xl font-bold text-primary mb-2">
              Starting from $299<span className="text-xl text-muted-foreground">/month</span>
            </div>
            <p className="text-muted-foreground">Per AI agent • Cancel anytime • 30-day guarantee</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" variant="gradient" onClick={scrollToFeaturedAgents}>
              Deploy Agent
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Talk to Specialist
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">
            Ready to deploy your first AI agent?
          </h2>
          <Button size="lg" className="text-lg px-8" variant="gradient" onClick={scrollToFeaturedAgents}>
            Deploy Agent Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">BoxedAI</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Deploy AI agents that transform your business operations and drive real ROI.
              </p>
              <p className="text-sm text-muted-foreground">
                24/7 Support • Enterprise Ready • SOC2 Compliant
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/marketplace" className="hover:text-primary transition-colors">Marketplace</Link></li>
                <li><Link to="/categories" className="hover:text-primary transition-colors">Categories</Link></li>
                <li>Pricing</li>
                <li>Enterprise</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Developers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Developer Portal</li>
                <li>API Documentation</li>
                <li>SDK</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About</li>
                <li>Contact</li>
                <li>Privacy</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 BoxedAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;