import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, TrendingUp, Users, Heart, Settings, MessageCircle, DollarSign, Loader2 } from 'lucide-react';
import { useOnboarding, BusinessGoal, CompanySize } from '@/hooks/useOnboarding';
import { agents } from '@/data/agents';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentStep: number;
  data: any;
  isLoading: boolean;
  nextStep: () => void;
  prevStep: () => void;
  updateData: (data: any) => void;
  simulateLoading: () => void;
}

const businessGoals = [
  { id: 'sales', label: '📈 Increase Sales', icon: TrendingUp },
  { id: 'hr', label: '👥 Hire & Manage Talent (HR)', icon: Users },
  { id: 'healthcare', label: '🏥 Healthcare / Patient Support', icon: Heart },
  { id: 'operations', label: '📊 Automate Operations', icon: Settings },
  { id: 'support', label: '💬 Customer Support', icon: MessageCircle },
  { id: 'finance', label: '💰 Finance & Analytics', icon: DollarSign }
];

const companySizes = [
  '1–10 employees',
  '11–50 employees', 
  '51–200 employees',
  '200+ employees'
];

const integrationOptions = [
  'Salesforce', 'HubSpot', 'Slack', 'BambooHR', 'Workday', 'Epic', 'Cerner'
];

export const OnboardingModal = ({
  isOpen,
  onClose,
  currentStep,
  data,
  isLoading,
  nextStep,
  prevStep,
  updateData,
  simulateLoading
}: OnboardingModalProps) => {
  const [otherIntegration, setOtherIntegration] = useState('');

  const getProgress = () => (currentStep / 6) * 100;

  const handleGoalSelect = (goal: BusinessGoal) => {
    updateData({ businessGoal: goal });
    setTimeout(nextStep, 300);
  };

  const handleSizeSelect = (size: CompanySize) => {
    updateData({ companySize: size });
    setTimeout(nextStep, 300);
  };

  const handleIntegrationChange = (integration: string, checked: boolean) => {
    const current = data.integrations || [];
    if (checked) {
      updateData({ integrations: [...current, integration] });
    } else {
      updateData({ integrations: current.filter((i: string) => i !== integration) });
    }
  };

  const handleAddOtherIntegration = () => {
    if (otherIntegration.trim()) {
      const current = data.integrations || [];
      updateData({ integrations: [...current, otherIntegration.trim()] });
      setOtherIntegration('');
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (data.email) {
      nextStep();
    }
  };

  const getRecommendedAgents = () => {
    return agents.slice(0, 4).map(agent => ({
      ...agent,
      recommended: true
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="text-center space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                What do you want to achieve with AI?
              </h2>
              <p className="text-muted-foreground">
                Choose your primary business goal to get personalized recommendations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {businessGoals.map((goal) => (
                <Button
                  key={goal.id}
                  variant="outline"
                  className="h-16 text-left justify-start hover:bg-accent hover:border-primary transition-smooth"
                  onClick={() => handleGoalSelect(goal.id as BusinessGoal)}
                >
                  <goal.icon className="mr-3 h-5 w-5" />
                  {goal.label}
                </Button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="text-center space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                How big is your team?
              </h2>
              <p className="text-muted-foreground">
                This helps us recommend the right scale of AI solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
              {companySizes.map((size) => (
                <Button
                  key={size}
                  variant="outline"
                  className="h-16 hover:bg-accent hover:border-primary transition-smooth"
                  onClick={() => handleSizeSelect(size.replace('–', '-').replace('+ employees', '+') as CompanySize)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-center space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Which tools do you already use?
              </h2>
              <p className="text-muted-foreground">
                Select all that apply to find AI agents with seamless integrations
              </p>
            </div>
            
            <div className="max-w-md mx-auto space-y-4">
              {integrationOptions.map((integration) => (
                <div key={integration} className="flex items-center space-x-3">
                  <Checkbox
                    id={integration}
                    checked={(data.integrations || []).includes(integration)}
                    onCheckedChange={(checked) => 
                      handleIntegrationChange(integration, checked as boolean)
                    }
                  />
                  <Label htmlFor={integration} className="text-base">
                    {integration}
                  </Label>
                </div>
              ))}
              
              <div className="flex items-center space-x-3 pt-4">
                <Input
                  placeholder="Other tool..."
                  value={otherIntegration}
                  onChange={(e) => setOtherIntegration(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddOtherIntegration()}
                />
                <Button
                  variant="outline"
                  onClick={handleAddOtherIntegration}
                  disabled={!otherIntegration.trim()}
                >
                  Add
                </Button>
              </div>
            </div>
            
            <Button onClick={nextStep} className="mt-8">
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        );

      case 4:
        // Auto-trigger loading animation when step 4 is reached
        if (!isLoading) {
          setTimeout(() => simulateLoading(), 100);
        }
        return (
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Loader2 className="mx-auto h-16 w-16 animate-spin text-primary" />
              <h2 className="text-3xl font-bold text-foreground">
                Analyzing your answers...
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Matching the best AI agents for your business based on your requirements
              </p>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="text-center space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Get your tailored AI agent recommendations
              </h2>
              <p className="text-muted-foreground">
                Enter your business email to see the results
              </p>
            </div>
            
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="your-email@company.com"
                  value={data.email || ''}
                  onChange={(e) => updateData({ email: e.target.value })}
                  required
                  className="h-12 text-center"
                />
              </div>
              
              <Button type="submit" className="w-full h-12" variant="gradient">
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        );

      case 6:
        const recommendedAgents = getRecommendedAgents();
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Here are the AI Agents tailored for your business
              </h2>
              <p className="text-muted-foreground">
                Based on your requirements, we recommend these solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {recommendedAgents.map((agent) => (
                <Card key={agent.id} className="relative hover:shadow-card-hover transition-smooth">
                  <Badge className="absolute -top-2 left-4 bg-accent text-accent-foreground">
                    Recommended for you
                  </Badge>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{agent.name}</CardTitle>
                      <Badge variant="outline">${agent.price}/month</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {agent.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="text-sm text-accent font-medium">
                      ROI: {agent.valueProposition}
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <Button variant="gradient" className="w-full">
                        Deploy Agent
                      </Button>
                      <Button variant="outline" className="w-full">
                        Talk to Specialist
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="relative min-h-[600px]">
          {/* Header with Progress */}
          <div className="sticky top-0 bg-background border-b border-border px-8 py-6 z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                {currentStep > 1 && currentStep < 4 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevStep}
                    className="p-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                )}
                <span className="text-sm text-muted-foreground">
                  Step {currentStep} of 6
                </span>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground"
              >
                ✕
              </Button>
            </div>
            
            <Progress value={getProgress()} className="h-2" />
          </div>

          {/* Content */}
          <div className="px-8 py-12">
            {renderStep()}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OnboardingModal;