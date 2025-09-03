import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Bot, Zap, Shield, TrendingUp, Clock, DollarSign, Users, Star, CheckCircle, Target, Sparkles } from 'lucide-react';
import { ideas } from '@/data/ideas';
import IdeaCard from '@/components/IdeaCard';

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

  const featuredIdeas = ideas.slice(0, 3);

  const howItWorks = [
    { icon: Target, title: "Browse real business ideas", description: "Explore 100+ proven AI automation use cases" },
    { icon: Sparkles, title: "Download a JSON or request integration", description: "Get production-ready configs from $19 or custom implementation from $500" },
    { icon: TrendingUp, title: "See ROI within 90 days", description: "Case-proven results with measurable business impact" }
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
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-white"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-left max-w-2xl">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
                Explore 100+ Real{' '}
                <span className="text-blue-highlight">
                  AI Use Cases
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                See how Sales, HR, and Healthcare teams automate workflows with AI.<br />
                <span className="text-gray-900 font-semibold">Download JSONs. Get integration help.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-3 font-semibold gradient-primary text-white hover:opacity-90 shadow-blue-strong" 
                  asChild
                >
                  <Link to="/ideas">
                    Browse Ideas Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="text-lg px-8 py-3 font-medium" 
                  asChild
                >
                  <Link to="/ideas?filter=premium">Get Premium JSON</Link>
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-sm text-gray-500">
                  Trusted by 120+ businesses
                </p>
              </div>
            </div>
            {/* Right Content - Ideas Preview */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-xl p-6 shadow-blue-strong border border-blue-100 max-w-md">
                <h3 className="font-semibold text-lg mb-4 text-gray-900">Featured Ideas</h3>
                <div className="space-y-3">
                  {featuredIdeas.slice(0, 3).map((idea) => (
                    <div key={idea.id} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <img src={idea.thumbnail} alt={idea.title} className="w-12 h-12 rounded object-cover" />
                      <div>
                        <p className="font-medium text-sm text-gray-900">{idea.title}</p>
                        <p className="text-xs text-blue-600">{idea.outcome}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 gradient-primary text-white" asChild>
                  <Link to="/ideas">View All Ideas</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why BoxedAI - Value Proposition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Why BoxedAI?</h2>
            <p className="text-gray-600 text-lg">
              Proven results that transform your business operations
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {valueStats.map((stat, index) => (
              <Card key={index} className="text-center bg-white border border-blue-100 shadow-blue hover:shadow-blue-strong transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-blue-highlight mb-2">{stat.value}</div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Ideas */}
      <section id="featured-agents" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Featured AI Use Cases
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real business automations with proven ROI
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredIdeas.map((idea) => (
              <IdeaCard key={idea.id} idea={idea} />
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

      {/* JSON & Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            JSON & Services
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Production-ready configurations and custom integrations to accelerate your AI automation
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border border-blue-100 shadow-blue">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Premium JSONs</h3>
                <div className="text-3xl font-bold text-primary mb-4">from $19</div>
                <ul className="space-y-3 mb-6 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Production-ready configs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Setup notes & env vars</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>One-seat license</span>
                  </li>
                </ul>
                <Button className="w-full gradient-primary text-white" asChild>
                  <Link to="/ideas">Browse JSONs</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border border-blue-100 shadow-blue">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Custom Integration</h3>
                <div className="text-3xl font-bold text-primary mb-4">from $500</div>
                <ul className="space-y-3 mb-6 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Solution architect + engineer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Tooling: n8n/Make/Zapier + your stack</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Handover & basic docs</span>
                  </li>
                </ul>
                <Button className="w-full" variant="secondary" asChild>
                  <Link to="/integration">Request Integration</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">
            Ready to explore AI automations?
          </h2>
          <Button size="lg" className="text-lg px-8" variant="gradient" asChild>
            <Link to="/ideas">
              Browse Ideas Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
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