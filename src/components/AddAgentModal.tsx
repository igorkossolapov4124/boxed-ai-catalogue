import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { 
  ChevronLeft, 
  ChevronRight, 
  Save, 
  Eye, 
  Upload, 
  X, 
  Plus,
  Check,
  AlertCircle,
  DollarSign,
  Clock,
  Shield,
  Settings
} from 'lucide-react';

interface AgentData {
  // Basics
  name: string;
  category: string;
  headline: string;
  summary: string;
  tags: string[];
  owner: string;
  visibility: 'public' | 'unlisted';
  
  // Value & ROI
  problem: string;
  solution: string;
  results: string;
  key_benefits: string[];
  kpis: {
    time_saved_hours: number;
    conversion_uplift_pct: number;
    payback_days: number;
  };
  requirements: string;
  
  // Integrations
  integrations: string[];
  custom_api: string;
  oauth_scopes: string[];
  
  // Pricing
  starting_price: number;
  billing_cycle: string;
  tiers: Array<{ name: string; price: number; includes: string }>;
  trial_enabled: boolean;
  trial_duration: number;
  sla_level: string;
  deployment_time: string;
  
  // Media
  cover_image: string;
  gallery: string[];
  demo_url: string;
  docs_url: string;
  icon: string;
  
  // Compliance
  certifications: string[];
  data_residency: string;
  pii_handling: string;
  support_model: string;
  updates_policy: string;
  accept_terms: boolean;
}

interface AddAgentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STEPS = [
  'Basics',
  'Value & ROI', 
  'Integrations',
  'Pricing',
  'Media',
  'Compliance',
  'Review'
];

const CATEGORIES = [
  'Sales', 'HR', 'Healthcare', 'Finance', 'Support', 
  'Operations', 'Marketing', 'Legal', 'Education'
];

const INTEGRATIONS = [
  'Salesforce', 'HubSpot', 'Pipedrive', 'Slack', 'BambooHR', 
  'Workday', 'Greenhouse', 'Zendesk', 'Intercom', 'Epic',
  'Cerner', 'Athenahealth', 'Google Sheets', 'Notion', 'Webhooks'
];

export const AddAgentModal = ({ isOpen, onClose }: AddAgentModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<AgentData>({
    name: '',
    category: '',
    headline: '',
    summary: '',
    tags: [],
    owner: '',
    visibility: 'public',
    problem: '',
    solution: '',
    results: '',
    key_benefits: [''],
    kpis: { time_saved_hours: 0, conversion_uplift_pct: 0, payback_days: 0 },
    requirements: '',
    integrations: [],
    custom_api: '',
    oauth_scopes: [],
    starting_price: 0,
    billing_cycle: 'per_month',
    tiers: [{ name: 'Basic', price: 0, includes: '' }],
    trial_enabled: false,
    trial_duration: 14,
    sla_level: 'Standard',
    deployment_time: '<24h',
    cover_image: '',
    gallery: [],
    demo_url: '',
    docs_url: '',
    icon: '',
    certifications: [],
    data_residency: 'US',
    pii_handling: '',
    support_model: 'Business',
    updates_policy: '',
    accept_terms: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPublishing, setIsPublishing] = useState(false);
  const { toast } = useToast();

  // Auto-save simulation
  useEffect(() => {
    if (!isOpen) return;
    
    const saveTimer = setInterval(() => {
      // Simulate autosave
      console.log('Auto-saving draft...', data);
    }, 3000);

    return () => clearInterval(saveTimer);
  }, [data, isOpen]);

  const updateData = (updates: Partial<AgentData>) => {
    setData(prev => ({ ...prev, ...updates }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};
    
    switch (step) {
      case 0: // Basics
        if (!data.name) newErrors.name = 'Agent name is required';
        if (!data.category) newErrors.category = 'Category is required';
        if (!data.headline) newErrors.headline = 'Headline is required';
        if (!data.summary) newErrors.summary = 'Summary is required';
        break;
      case 1: // Value & ROI
        if (!data.problem) newErrors.problem = 'Problem description is required';
        if (!data.solution) newErrors.solution = 'Solution description is required';
        if (!data.results) newErrors.results = 'Results/Impact is required';
        break;
      case 3: // Pricing
        if (!data.starting_price) newErrors.starting_price = 'Starting price is required';
        break;
      case 4: // Media
        if (!data.cover_image) newErrors.cover_image = 'Cover image is required';
        break;
      case 5: // Compliance
        if (!data.accept_terms) newErrors.accept_terms = 'You must accept the terms';
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handlePublish = async () => {
    if (!validateStep(currentStep)) return;
    
    setIsPublishing(true);
    
    // Simulate publishing
    setTimeout(() => {
      setIsPublishing(false);
      toast({
        title: "Agent Submitted!",
        description: "Your agent has been submitted for review. You'll be notified within 24-48 hours.",
      });
      onClose();
    }, 2000);
  };

  const canPublish = () => {
    return data.name && data.category && data.headline && data.summary && 
           data.problem && data.solution && data.results && 
           data.starting_price > 0 && data.cover_image && data.accept_terms;
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Basics
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Agent Name *</Label>
              <Input
                id="name"
                value={data.name}
                onChange={(e) => updateData({ name: e.target.value })}
                placeholder="e.g., Sales Assistant Pro"
                maxLength={70}
                className={errors.name ? 'border-destructive' : ''}
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select value={data.category} onValueChange={(value) => updateData({ category: value })}>
                <SelectTrigger className={errors.category ? 'border-destructive' : ''}>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.category && <p className="text-sm text-destructive">{errors.category}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="headline">Short Headline *</Label>
              <Input
                id="headline"
                value={data.headline}
                onChange={(e) => updateData({ headline: e.target.value })}
                placeholder="e.g., Close deals 30% faster. Save 40+ hours per rep."
                maxLength={120}
                className={errors.headline ? 'border-destructive' : ''}
              />
              <p className="text-xs text-muted-foreground">
                Include metrics or business outcomes for best results
              </p>
              {errors.headline && <p className="text-sm text-destructive">{errors.headline}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="summary">One-sentence Summary *</Label>
              <Textarea
                id="summary"
                value={data.summary}
                onChange={(e) => updateData({ summary: e.target.value })}
                placeholder="Brief description of what this agent does..."
                maxLength={160}
                className={errors.summary ? 'border-destructive' : ''}
              />
              {errors.summary && <p className="text-sm text-destructive">{errors.summary}</p>}
            </div>

            <div className="space-y-2">
              <Label>Visibility</Label>
              <RadioGroup 
                value={data.visibility} 
                onValueChange={(value: 'public' | 'unlisted') => updateData({ visibility: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="public" id="public" />
                  <Label htmlFor="public">Public (visible in marketplace)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="unlisted" id="unlisted" />
                  <Label htmlFor="unlisted">Unlisted (direct link only)</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      case 1: // Value & ROI
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="problem">Problem *</Label>
              <Textarea
                id="problem"
                value={data.problem}
                onChange={(e) => updateData({ problem: e.target.value })}
                placeholder="What business problem does this agent solve? (2-3 sentences)"
                className={errors.problem ? 'border-destructive' : ''}
              />
              {errors.problem && <p className="text-sm text-destructive">{errors.problem}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="solution">Solution *</Label>
              <Textarea
                id="solution"
                value={data.solution}
                onChange={(e) => updateData({ solution: e.target.value })}
                placeholder="How does your agent solve this problem? (2-3 sentences)"
                className={errors.solution ? 'border-destructive' : ''}
              />
              {errors.solution && <p className="text-sm text-destructive">{errors.solution}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="results">Results/Impact *</Label>
              <Textarea
                id="results"
                value={data.results}
                onChange={(e) => updateData({ results: e.target.value })}
                placeholder="What quantifiable results can users expect? Include specific metrics."
                className={errors.results ? 'border-destructive' : ''}
              />
              {errors.results && <p className="text-sm text-destructive">{errors.results}</p>}
            </div>

            <div className="space-y-2">
              <Label>Key Benefits</Label>
              {data.key_benefits.map((benefit, index) => (
                <div key={index} className="flex space-x-2">
                  <Input
                    value={benefit}
                    onChange={(e) => {
                      const newBenefits = [...data.key_benefits];
                      newBenefits[index] = e.target.value;
                      updateData({ key_benefits: newBenefits });
                    }}
                    placeholder="Key benefit (max 80 characters)"
                    maxLength={80}
                  />
                  {data.key_benefits.length > 1 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const newBenefits = data.key_benefits.filter((_, i) => i !== index);
                        updateData({ key_benefits: newBenefits });
                      }}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
              {data.key_benefits.length < 5 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateData({ key_benefits: [...data.key_benefits, ''] })}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Benefit
                </Button>
              )}
            </div>
          </div>
        );

      case 2: // Integrations
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Built-in Integrations</Label>
              <div className="grid grid-cols-2 gap-3">
                {INTEGRATIONS.map(integration => (
                  <div key={integration} className="flex items-center space-x-2">
                    <Checkbox
                      id={integration}
                      checked={data.integrations.includes(integration)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          updateData({ integrations: [...data.integrations, integration] });
                        } else {
                          updateData({ 
                            integrations: data.integrations.filter(i => i !== integration) 
                          });
                        }
                      }}
                    />
                    <Label htmlFor={integration} className="text-sm">{integration}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="custom_api">Custom API/Webhook URL</Label>
              <Input
                id="custom_api"
                value={data.custom_api}
                onChange={(e) => updateData({ custom_api: e.target.value })}
                placeholder="https://api.example.com/webhook"
              />
            </div>
          </div>
        );

      case 3: // Pricing
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="starting_price">Starting Price (USD) *</Label>
                <Input
                  id="starting_price"
                  type="number"
                  value={data.starting_price}
                  onChange={(e) => updateData({ starting_price: Number(e.target.value) })}
                  placeholder="99"
                  className={errors.starting_price ? 'border-destructive' : ''}
                />
                {errors.starting_price && <p className="text-sm text-destructive">{errors.starting_price}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="billing_cycle">Billing Cycle</Label>
                <Select value={data.billing_cycle} onValueChange={(value) => updateData({ billing_cycle: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="per_month">Per Month</SelectItem>
                    <SelectItem value="per_seat">Per Seat</SelectItem>
                    <SelectItem value="one_time">One Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>SLA Level</Label>
              <Select value={data.sla_level} onValueChange={(value) => updateData({ sla_level: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Standard">Standard</SelectItem>
                  <SelectItem value="Priority">Priority</SelectItem>
                  <SelectItem value="Enterprise">Enterprise</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Deployment Time</Label>
              <Select value={data.deployment_time} onValueChange={(value) => updateData({ deployment_time: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="<24h">Less than 24 hours</SelectItem>
                  <SelectItem value="2-5d">2-5 days</SelectItem>
                  <SelectItem value="1-2w">1-2 weeks</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 4: // Media
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Cover Image (1200×630) *</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Click to upload or drag and drop
                </p>
                <Button variant="outline" size="sm" className="mt-2">
                  Choose File
                </Button>
              </div>
              {errors.cover_image && <p className="text-sm text-destructive">{errors.cover_image}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="demo_url">Demo URL</Label>
              <Input
                id="demo_url"
                value={data.demo_url}
                onChange={(e) => updateData({ demo_url: e.target.value })}
                placeholder="https://demo.example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="docs_url">Documentation URL</Label>
              <Input
                id="docs_url"
                value={data.docs_url}
                onChange={(e) => updateData({ docs_url: e.target.value })}
                placeholder="https://docs.example.com"
              />
            </div>
          </div>
        );

      case 5: // Compliance
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Security & Compliance</Label>
              <div className="grid grid-cols-2 gap-3">
                {['SOC 2', 'ISO 27001', 'GDPR', 'HIPAA'].map(cert => (
                  <div key={cert} className="flex items-center space-x-2">
                    <Checkbox
                      id={cert}
                      checked={data.certifications.includes(cert)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          updateData({ certifications: [...data.certifications, cert] });
                        } else {
                          updateData({ 
                            certifications: data.certifications.filter(c => c !== cert) 
                          });
                        }
                      }}
                    />
                    <Label htmlFor={cert} className="text-sm">{cert}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Data Residency</Label>
              <Select value={data.data_residency} onValueChange={(value) => updateData({ data_residency: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="US">United States</SelectItem>
                  <SelectItem value="EU">European Union</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="accept_terms"
                checked={data.accept_terms}
                onCheckedChange={(checked) => updateData({ accept_terms: !!checked })}
                className={errors.accept_terms ? 'border-destructive' : ''}
              />
              <Label htmlFor="accept_terms" className="text-sm">
                I accept the Developer Terms and Marketplace Policy *
              </Label>
            </div>
            {errors.accept_terms && <p className="text-sm text-destructive">{errors.accept_terms}</p>}
          </div>
        );

      case 6: // Review
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Ready to Publish?</h3>
              <p className="text-muted-foreground">
                Review your agent details before submitting for review.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {data.name}
                  <Badge variant="secondary">{data.category}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">{data.headline}</p>
                <p className="text-sm text-muted-foreground">{data.summary}</p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    Starting from ${data.starting_price}/{data.billing_cycle.replace('_', ' ')}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {data.deployment_time} deployment
                  </span>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <h4 className="font-medium">Pre-publish Checklist</h4>
              <div className="space-y-2">
                {[
                  { label: 'Required fields completed', check: data.name && data.category && data.headline },
                  { label: 'Cover image uploaded', check: data.cover_image },
                  { label: 'ROI statement present', check: data.results },
                  { label: 'Price set', check: data.starting_price > 0 },
                  { label: 'Terms accepted', check: data.accept_terms }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    {item.check ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-yellow-500" />
                    )}
                    <span className={`text-sm ${item.check ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderPreview = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="font-semibold mb-2">Live Preview</h3>
        <p className="text-sm text-muted-foreground">
          See how your agent will appear in the marketplace
        </p>
      </div>

      {/* Marketplace Card Preview */}
      <Card className="border-2">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="space-y-1 flex-1">
              <CardTitle className="text-lg">
                {data.name || 'Agent Name'}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {data.headline || 'Your compelling headline will appear here...'}
              </p>
            </div>
            {data.category && (
              <Badge variant="secondary" className="ml-2">
                {data.category}
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            {data.cover_image ? (
              <img src={data.cover_image} alt="Cover" className="w-full h-full object-cover rounded-lg" />
            ) : (
              <div className="text-center">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Cover image preview</p>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <p className="text-sm">
              {data.summary || 'Your one-sentence summary will appear here...'}
            </p>
            
            {data.key_benefits.filter(b => b.trim()).length > 0 && (
              <div className="space-y-1">
                <p className="text-sm font-medium">Key Benefits:</p>
                <ul className="text-sm space-y-1">
                  {data.key_benefits.filter(b => b.trim()).map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-3 h-3 mr-2 text-green-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="font-semibold">
                {data.starting_price > 0 ? `$${data.starting_price}` : '$--'}
                <span className="text-sm font-normal text-muted-foreground">
                  /{data.billing_cycle.replace('_', ' ')}
                </span>
              </p>
              <p className="text-xs text-muted-foreground">
                {data.deployment_time} deployment
              </p>
            </div>
            <Button variant="gradient" size="sm">
              Deploy Agent
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Integration badges */}
      {data.integrations.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium">Integrations:</p>
          <div className="flex flex-wrap gap-1">
            {data.integrations.slice(0, 6).map(integration => (
              <Badge key={integration} variant="outline" className="text-xs">
                {integration}
              </Badge>
            ))}
            {data.integrations.length > 6 && (
              <Badge variant="outline" className="text-xs">
                +{data.integrations.length - 6} more
              </Badge>
            )}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[95vh] p-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div>
              <h1 className="text-xl font-bold">Add Agent</h1>
              <p className="text-sm text-muted-foreground">
                Step {currentStep + 1} of {STEPS.length}: {STEPS[currentStep]}
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
              <Button 
                variant="gradient" 
                size="sm"
                disabled={!canPublish() || isPublishing}
                onClick={handlePublish}
              >
                {isPublishing ? 'Publishing...' : 'Publish Agent'}
              </Button>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Progress */}
          <div className="px-6 py-3 border-b">
            <Progress value={(currentStep / (STEPS.length - 1)) * 100} className="h-2" />
            <div className="flex justify-between mt-2">
              {STEPS.map((step, index) => (
                <div 
                  key={step}
                  className={`text-xs ${
                    index <= currentStep ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex overflow-hidden">
            {/* Left Panel - Form */}
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="max-w-2xl">
                {renderStepContent()}
              </div>
            </div>

            {/* Right Panel - Preview */}
            <div className="w-80 border-l bg-muted/20 p-6 overflow-y-auto">
              {renderPreview()}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-6 border-t">
            <Button 
              variant="outline" 
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <div className="flex space-x-2">
              {currentStep < STEPS.length - 1 ? (
                <Button onClick={nextStep}>
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button 
                  variant="gradient"
                  onClick={handlePublish}
                  disabled={!canPublish() || isPublishing}
                >
                  {isPublishing ? 'Publishing...' : 'Publish Agent'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddAgentModal;