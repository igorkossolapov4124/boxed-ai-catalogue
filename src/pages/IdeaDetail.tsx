import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Download, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ideas, categories } from '@/data/ideas';

const IdeaDetail = () => {
  const { slug } = useParams();
  const idea = ideas.find(i => i.slug === slug);

  if (!idea) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Idea not found</h1>
          <Link to="/ideas">
            <Button>Back to Ideas</Button>
          </Link>
        </div>
      </div>
    );
  }

  const category = categories.find(cat => cat.id === idea.category);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-8 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/ideas" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Ideas
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Badge variant="secondary" className="mb-4 bg-blue-50 text-blue-700">
                {category?.name}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                {idea.title}
              </h1>
              <p className="text-xl font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-lg mb-6">
                {idea.outcome}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {idea.description}
              </p>
              
              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="gradient-primary text-white" asChild>
                  <Link to={`/checkout/json/${idea.json.id}`}>
                    <Download className="w-4 h-4 mr-2" />
                    Download JSON — ${idea.json.price}
                  </Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link to={`/integration?idea=${idea.id}`}>
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Request Integration — from ${idea.integration.basePrice}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Demo/Thumbnail */}
            <div className="relative">
              <div className="relative group cursor-pointer">
                <img 
                  src={idea.caseStudy.demo} 
                  alt={`${idea.title} demo`}
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors rounded-lg flex items-center justify-center">
                  <div className="bg-white/90 p-4 rounded-full">
                    <Play className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Case Overview */}
              <Card className="border border-blue-100">
                <CardHeader>
                  <CardTitle className="text-2xl">Case Overview</CardTitle>
                  <Badge variant="outline" className="w-fit bg-green-50 text-green-700 border-green-200">
                    Free
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">The Problem</h4>
                    <p className="text-gray-600">{idea.caseStudy.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Before vs. After</h4>
                    <p className="text-gray-600">{idea.caseStudy.beforeAfter}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Key Benefits</h4>
                    <ul className="space-y-2">
                      {idea.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Stack Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {idea.caseStudy.stackUsed.map(tool => (
                        <Badge key={tool} variant="outline" className="border-blue-200 text-blue-700">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {[...idea.tags, ...idea.stack].map(tag => (
                    <Badge key={tag} variant="outline" className="border-blue-200 text-blue-600">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Premium JSON */}
              <Card className="border border-blue-200">
                <CardHeader>
                  <CardTitle className="text-xl">Premium JSON</CardTitle>
                  <div className="text-2xl font-bold text-blue-600">
                    ${idea.json.price}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">
                    JSON file of the automation/agent configuration (ready for n8n/Make/Zapier). 
                    Includes required env vars, API keys list, and setup notes.
                  </p>
                  <Button className="w-full gradient-primary text-white" asChild>
                    <Link to={`/checkout/json/${idea.json.id}`}>
                      Download JSON — ${idea.json.price}
                    </Link>
                  </Button>
                  <p className="text-xs text-gray-500">
                    Requires listed tools and accounts. No custom data included.
                  </p>
                </CardContent>
              </Card>

              {/* Custom Integration */}
              <Card className="border border-blue-200">
                <CardHeader>
                  <CardTitle className="text-xl">Custom Integration</CardTitle>
                  <div className="text-2xl font-bold text-blue-600">
                    from ${idea.integration.basePrice}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Need us to tailor and deploy this for your stack?
                  </p>
                  <Button className="w-full" variant="secondary" asChild>
                    <Link to={`/integration?idea=${idea.id}`}>
                      Request Integration
                    </Link>
                  </Button>
                  <p className="text-xs text-gray-500">
                    Delivery target: &lt; {idea.integration.deliveryDays} days for standard scope
                  </p>
                </CardContent>
              </Card>

              {/* Related Ideas */}
              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">More {category?.name} Ideas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {ideas
                      .filter(i => i.category === idea.category && i.id !== idea.id)
                      .slice(0, 3)
                      .map(relatedIdea => (
                        <Link 
                          key={relatedIdea.id} 
                          to={`/idea/${relatedIdea.slug}`}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <img 
                              src={relatedIdea.thumbnail} 
                              alt={relatedIdea.title}
                              className="w-10 h-10 rounded object-cover"
                            />
                            <div>
                              <p className="font-medium text-sm">{relatedIdea.title}</p>
                              <p className="text-xs text-blue-600">{relatedIdea.outcome}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IdeaDetail;