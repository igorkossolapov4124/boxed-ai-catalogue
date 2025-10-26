import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { niches, iconMap } from '@/data/niches';
import { CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type Step = 'greeting' | 'niche' | 'role' | 'agents' | 'booking';

interface Message {
  id: string;
  role: 'assistant' | 'user';
  content: string;
}

interface SelectedAgent {
  id: number;
  name: string;
  value: string;
  kpis: string[];
}

const OnboardingHero = () => {
  const { toast } = useToast();
  const [step, setStep] = useState<Step>('greeting');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hey! I'll help you assemble a personalized AI team that strengthens your employees without hiring more staff. Ready to start?"
    }
  ]);
  const [selectedNiche, setSelectedNiche] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedAgents, setSelectedAgents] = useState<SelectedAgent[]>([]);
  const [bookingData, setBookingData] = useState({ name: '', email: '', phone: '' });

  const addMessage = (role: 'assistant' | 'user', content: string) => {
    setMessages(prev => [...prev, { id: Date.now().toString(), role, content }]);
  };

  const handleStart = () => {
    addMessage('user', 'Yes, Start');
    setTimeout(() => {
      addMessage('assistant', 'Which field is your business in?');
      setStep('niche');
    }, 500);
  };

  const handleNicheSelect = (nicheId: string, nicheName: string) => {
    setSelectedNiche(nicheId);
    addMessage('user', nicheName);
    setTimeout(() => {
      addMessage('assistant', 'Great. I have AI team members already working in this industry.');
      setTimeout(() => {
        addMessage('assistant', 'Who do you want to empower first with AI?');
        setStep('role');
      }, 800);
    }, 500);
  };

  const handleRoleSelect = (departmentName: string) => {
    setSelectedRole(departmentName);
    addMessage('user', departmentName);
    
    // Get recommended agents from selected niche and role
    const niche = niches.find(n => n.id === selectedNiche);
    const department = niche?.departments.find(d => d.name === departmentName);
    
    if (department && department.agents.length > 0) {
      const recommendedAgents: SelectedAgent[] = department.agents.slice(0, 3).map(agent => ({
        id: agent.id,
        name: agent.name,
        value: agent.valueProposition,
        kpis: agent.kpis
      }));
      setSelectedAgents(recommendedAgents);
    }

    setTimeout(() => {
      addMessage('assistant', `Perfect. I'll recommend a few AI team members that can support your ${departmentName} right away.`);
      setTimeout(() => {
        setStep('agents');
      }, 800);
    }, 500);
  };

  const handleAgentToggle = (agent: SelectedAgent) => {
    setSelectedAgents(prev => {
      const exists = prev.find(a => a.id === agent.id);
      if (exists) {
        return prev.filter(a => a.id !== agent.id);
      }
      return [...prev, agent];
    });
  };

  const handleProceedToBooking = () => {
    const roleName = selectedRole || 'team';
    addMessage('user', 'Book Integration Call');
    setTimeout(() => {
      addMessage('assistant', `Great choices — these AI team members will save your ${roleName} 20+ hours/month.`);
      setTimeout(() => {
        addMessage('assistant', 'Want us to connect this AI team to your business with your current tools in 48 hours?');
        setStep('booking');
      }, 800);
    }, 500);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Requested!",
      description: "We'll contact you within 24 hours to schedule your integration call.",
    });
    addMessage('user', `Booked consultation (${bookingData.name})`);
    setTimeout(() => {
      addMessage('assistant', "Perfect! We'll contact you within 24 hours to schedule your integration call. Looking forward to building your AI team!");
    }, 500);
  };

  const renderStepContent = () => {
    switch (step) {
      case 'greeting':
        return (
          <div className="flex flex-col gap-3 mt-4">
            <Button 
              size="lg"
              onClick={handleStart}
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-medium"
            >
              Yes, Start
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="border-border hover:bg-accent"
            >
              <Link to="/niches">Browse AI Agents</Link>
            </Button>
          </div>
        );

      case 'niche':
        return (
          <div className="grid grid-cols-2 gap-3 mt-4">
            {niches.map((niche) => {
              const IconComponent = iconMap[niche.icon as keyof typeof iconMap];
              return (
                <Button
                  key={niche.id}
                  variant="outline"
                  onClick={() => handleNicheSelect(niche.id, niche.name)}
                  className="h-auto py-4 flex flex-col items-center gap-2 border-border hover:bg-accent hover:border-primary transition-all"
                >
                  <IconComponent className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{niche.name}</span>
                </Button>
              );
            })}
          </div>
        );

      case 'role':
        const niche = niches.find(n => n.id === selectedNiche);
        return (
          <div className="flex flex-col gap-3 mt-4">
            {niche?.departments.slice(0, 5).map((dept) => {
              const IconComponent = iconMap[dept.icon as keyof typeof iconMap];
              return (
                <Button
                  key={dept.id}
                  variant="outline"
                  onClick={() => handleRoleSelect(dept.name)}
                  className="h-auto py-3 justify-start gap-3 border-border hover:bg-accent hover:border-primary transition-all"
                >
                  <IconComponent className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{dept.name}</span>
                </Button>
              );
            })}
          </div>
        );

      case 'agents':
        return (
          <div className="space-y-4 mt-4">
            {selectedAgents.map((agent) => {
              const isSelected = selectedAgents.some(a => a.id === agent.id);
              return (
                <Card
                  key={agent.id}
                  className={`border transition-all ${
                    isSelected ? 'border-primary bg-accent' : 'border-border hover:border-primary'
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div 
                        className="flex-1 cursor-pointer"
                        onClick={() => handleAgentToggle(agent)}
                      >
                        <h4 className="font-semibold text-base mb-2">{agent.name}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{agent.value}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {agent.kpis.map((kpi, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {kpi}
                            </Badge>
                          ))}
                        </div>
                        <Link 
                          to={`/agent/${agent.id}`}
                          className="text-xs text-primary hover:underline flex items-center gap-1 w-fit"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Details <ExternalLink className="w-3 h-3" />
                        </Link>
                      </div>
                      <div className="flex-shrink-0 cursor-pointer" onClick={() => handleAgentToggle(agent)}>
                        {isSelected ? (
                          <CheckCircle2 className="w-6 h-6 text-primary" />
                        ) : (
                          <div className="w-6 h-6 rounded-full border-2 border-muted-foreground/30" />
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
            <Button 
              size="lg" 
              onClick={handleProceedToBooking}
              className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-medium"
              disabled={selectedAgents.length === 0}
            >
              Continue to Integration Call
            </Button>
          </div>
        );

      case 'booking':
        return (
          <div className="space-y-4 mt-4">
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={bookingData.name}
                  onChange={(e) => setBookingData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => setBookingData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone / Telegram</Label>
                <Input
                  id="phone"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData(prev => ({ ...prev, phone: e.target.value }))}
                  required
                  className="mt-1"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-medium"
              >
                Book Integration Call
              </Button>
              <Button 
                type="button"
                variant="outline" 
                size="lg" 
                className="w-full"
                asChild
              >
                <Link to="/niches">I'll try myself first</Link>
              </Button>
            </form>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-4">
            Build Your AI Team in <span className="text-primary">60 Seconds</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Answer a few questions and get a personalized AI team for your company.
          </p>
        </div>

        {/* Chat Interface */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Conversation */}
          <div className="order-2 lg:order-1">
            <Card className="border-border shadow-card">
              <CardContent className="p-6">
                {/* Messages */}
                <div className="space-y-4 mb-6 max-h-[500px] overflow-y-auto">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {message.role === 'assistant' && (
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-4 h-4 text-primary" />
                        </div>
                      )}
                      <div
                        className={`px-4 py-3 rounded-2xl max-w-[80%] ${
                          message.role === 'assistant'
                            ? 'bg-muted text-foreground'
                            : 'bg-primary text-primary-foreground'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive Options */}
                {renderStepContent()}
              </CardContent>
            </Card>
          </div>

          {/* Right: Preview */}
          <div className="order-1 lg:order-2 animate-fade-in animation-delay-200">
            <Card className="border-border shadow-card bg-gradient-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Your AI Team Progress
                </h3>
                
                <div className="space-y-4">
                  {/* Niche */}
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      selectedNiche ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      {selectedNiche ? '✓' : '1'}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Business Field</p>
                      {selectedNiche && (
                        <p className="text-xs text-muted-foreground">
                          {niches.find(n => n.id === selectedNiche)?.name}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Role */}
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      selectedRole ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      {selectedRole ? '✓' : '2'}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Role to Empower</p>
                      {selectedRole && (
                        <p className="text-xs text-muted-foreground">{selectedRole}</p>
                      )}
                    </div>
                  </div>

                  {/* Agents */}
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      selectedAgents.length > 0 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      {selectedAgents.length > 0 ? '✓' : '3'}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">AI Team Members</p>
                      {selectedAgents.length > 0 && (
                        <p className="text-xs text-muted-foreground">
                          {selectedAgents.length} selected
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {selectedAgents.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm font-semibold mb-2">Selected AI Team:</p>
                    <ul className="space-y-1">
                      {selectedAgents.map(agent => (
                        <li key={agent.id} className="text-xs text-muted-foreground flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-primary" />
                          {agent.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingHero;
