import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, MessageCircle, Building, Globe, Users, DollarSign, Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ideas } from '@/data/ideas';

const Integration = () => {
  const [searchParams] = useSearchParams();
  const ideaId = searchParams.get('idea');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  const idea = ideaId ? ideas.find(i => i.id === parseInt(ideaId)) : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsComplete(true);
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-gray-900">Request Submitted!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Thanks — an engineer will contact you within 24 hours to discuss your integration needs.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg text-left mb-8">
              <h3 className="font-semibold mb-2">What happens next?</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Our solution architect will review your requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>We'll provide a detailed scope and timeline proposal</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Upon approval, implementation begins within 2-3 business days</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link to="/ideas">Browse More Ideas</Link>
              </Button>
              {idea && (
                <Button variant="secondary" asChild>
                  <Link to={`/idea/${idea.slug}`}>Back to {idea.title}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to={idea ? `/idea/${idea.slug}` : '/ideas'} className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {idea ? `Back to ${idea.title}` : 'Back to Ideas'}
        </Link>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Service Info */}
          <div>
            <h1 className="text-3xl font-bold mb-6 text-gray-900">Custom Integration Service</h1>
            
            {idea && (
              <Card className="mb-6 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <img 
                      src={idea.thumbnail} 
                      alt={idea.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{idea.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{idea.outcome}</p>
                      <p className="text-sm text-blue-600">Selected for integration</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  What We Provide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Dedicated solution architect + engineer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Custom configuration for your specific tech stack</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Integration with n8n, Make, Zapier + your existing tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Complete setup, testing, and handover</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Documentation and team training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>30-day post-implementation support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pricing & Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Starting Price:</span>
                    <span className="text-xl font-bold text-blue-600">
                      ${idea ? idea.integration.basePrice : 500}+
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Typical Timeline:</span>
                    <span className="font-semibold">
                      {idea ? `${idea.integration.deliveryDays} days` : '7-21 days'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Final pricing depends on complexity and scope. Most projects range from $500-$2,500.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Tell Us About Your Project</h2>
            
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company" className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        Company
                      </Label>
                      <Input id="company" placeholder="Acme Corp" required />
                    </div>
                    <div>
                      <Label htmlFor="website" className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Website
                      </Label>
                      <Input id="website" placeholder="https://acme.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="industry">Industry</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="teamSize" className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Team Size
                      </Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-1000">201-1000 employees</SelectItem>
                          <SelectItem value="1000+">1000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="useCase">Use Case</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select use case or choose 'Other'" />
                      </SelectTrigger>
                      <SelectContent>
                        {ideas.map(idea => (
                          <SelectItem key={idea.id} value={idea.slug}>
                            {idea.title}
                          </SelectItem>
                        ))}
                        <SelectItem value="other">Other (describe below)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="description">Project Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Describe your current process, desired automation, and any specific requirements..."
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="toolStack">Current Tool Stack</Label>
                    <Textarea 
                      id="toolStack" 
                      placeholder="List your current tools (CRM, email platform, databases, etc.)"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="budget" className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Budget Range
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                        <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                        <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                        <SelectItem value="5000+">$5,000+</SelectItem>
                        <SelectItem value="discuss">Let's discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email
                      </Label>
                      <Input id="email" type="email" placeholder="john@company.com" required />
                    </div>
                    <div>
                      <Label htmlFor="calendar" className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Calendar Link (optional)
                      </Label>
                      <Input id="calendar" placeholder="https://calendly.com/..." />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full gradient-primary text-white text-lg py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Request Integration
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    We'll get back to you within 24 hours with a detailed proposal.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;