import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Download, MessageCircle, Star } from 'lucide-react';
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
          
          {/* Header Card */}
          <Card className="border border-blue-100 mb-8">
            <CardHeader>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <Badge variant="secondary" className="mb-2 bg-blue-50 text-blue-700">
                    {category?.name}
                  </Badge>
                  <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-gray-900">
                    {idea.title}
                  </h1>
                  <p className="text-lg text-blue-600 mb-4">
                    Case: {idea.outcome}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{idea.rating.score}</span>
                  <span className="text-gray-500">({idea.rating.count} reviews)</span>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Case Overview */}
            <Card className="border border-blue-100">
              <CardHeader>
                <CardTitle className="text-2xl">Case Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Problem</h4>
                  <p className="text-gray-600">{idea.caseStudy.problem}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Solution</h4>
                  <p className="text-gray-600">{idea.caseStudy.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Result</h4>
                  <p className="text-gray-600">{idea.caseStudy.result}</p>
                </div>
              </CardContent>
            </Card>

            {/* Demo & Screenshots */}
            <Card className="border border-blue-100">
              <CardHeader>
                <CardTitle className="text-2xl">Demo & Screenshots</CardTitle>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>

            {/* Key Insights */}
            <Card className="border border-blue-100">
              <CardHeader>
                <CardTitle className="text-2xl">Key Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {idea.caseStudy.keyMetrics.map((metric, index) => (
                    <div key={index} className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-lg font-bold text-blue-600">{metric}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tech Stack */}
            <Card className="border border-blue-100">
              <CardHeader>
                <CardTitle className="text-2xl">Built With</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {idea.caseStudy.stackUsed.map(tool => (
                    <Badge key={tool} variant="outline" className="border-blue-200 text-blue-700 text-sm py-1 px-3">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* JSON Files */}
            <Card className="border border-blue-100">
              <CardHeader>
                <CardTitle className="text-2xl">Download JSON</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border border-gray-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Free Sample JSON</h4>
                      <p className="text-sm text-gray-600 mb-4">Basic workflow skeleton without sensitive data.</p>
                      <Button variant="outline" className="w-full">
                        Download Free
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-blue-200 bg-blue-50/30">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">Premium JSON</h4>
                        <span className="text-lg font-bold text-blue-600">${idea.json.price}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">Full automation workflow with integration and setup notes.</p>
                      <Button className="w-full gradient-primary text-white" asChild>
                        <Link to={`/checkout/json/${idea.json.id}`}>
                          Get Premium JSON
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Custom Integration */}
            <Card className="border border-blue-100">
              <CardHeader>
                <CardTitle className="text-2xl">Custom Integration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Need us to tailor and deploy this workflow into your stack?</p>
                <Button variant="secondary" size="lg" asChild>
                  <Link to={`/integration?idea=${idea.id}`}>
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Request Integration — from ${idea.integration.basePrice}
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card className="border border-blue-100">
              <CardHeader>
                <CardTitle className="text-2xl">What Others Achieved</CardTitle>
              </CardHeader>
              <CardContent>
                {idea.reviews.map((review, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <blockquote className="text-lg italic text-gray-700 mb-4">
                      "{review.quote}"
                    </blockquote>
                    <cite className="text-sm font-medium text-gray-900">
                      — {review.author}
                    </cite>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Related Ideas */}
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl">More {category?.name} Ideas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {ideas
                    .filter(i => i.category === idea.category && i.id !== idea.id)
                    .slice(0, 3)
                    .map(relatedIdea => (
                      <Link 
                        key={relatedIdea.id} 
                        to={`/idea/${relatedIdea.slug}`}
                        className="block p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                      >
                        <img 
                          src={relatedIdea.thumbnail} 
                          alt={relatedIdea.title}
                          className="w-full h-32 rounded object-cover mb-3"
                        />
                        <h4 className="font-medium text-sm mb-1">{relatedIdea.title}</h4>
                        <p className="text-xs text-blue-600">{relatedIdea.outcome}</p>
                      </Link>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IdeaDetail;