import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Bot, Zap, Shield, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/hero-ai-marketplace.jpg';

const Landing = () => {
  const features = [
    {
      icon: Bot,
      title: "Ready-to-Deploy AI Agents",
      description: "Browse hundreds of pre-built AI agents across industries, ready to integrate into your workflow."
    },
    {
      icon: Zap,
      title: "Instant Integration",
      description: "Get your AI agent up and running in minutes with our simple integration process."
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "All agents are tested, verified, and built with security and compliance in mind."
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "From startups to enterprises, find AI agents that grow with your business needs."
    }
  ];

  const categories = [
    { name: "Sales & CRM", count: 45, color: "bg-blue-100 text-blue-700" },
    { name: "Customer Support", count: 38, color: "bg-green-100 text-green-700" },
    { name: "Marketing", count: 42, color: "bg-purple-100 text-purple-700" },
    { name: "HR & Recruiting", count: 29, color: "bg-orange-100 text-orange-700" },
    { name: "Finance", count: 35, color: "bg-red-100 text-red-700" },
    { name: "Healthcare", count: 24, color: "bg-pink-100 text-pink-700" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Marketplace for{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  AI Agents
                </span>
                <br />
                Ready to Deploy
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover, customize, and deploy powerful AI agents across industries. 
                From sales automation to customer support, find the perfect AI solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8" variant="gradient" asChild>
              <Link to="/marketplace">
                Browse Agents
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="lg:order-first order-last">
              <img 
                src={heroImage} 
                alt="AI Marketplace Dashboard" 
                className="rounded-xl shadow-card-hover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore by Category</h2>
            <p className="text-muted-foreground text-lg">
              Find AI agents tailored to your industry and use case
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Card key={category.name} className="text-center hover:shadow-card-hover transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mx-auto mb-3`}>
                    <Bot className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.count} agents</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose BoxedAI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The most comprehensive marketplace for enterprise-ready AI agents
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center border-none shadow-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using BoxedAI agents to automate workflows and boost productivity.
          </p>
          <Button size="lg" className="text-lg px-8" variant="gradient" asChild>
            <Link to="/marketplace">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;