import { useParams, useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { niches, iconMap } from '@/data/niches';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const DepartmentAgents = () => {
  const { nicheId, departmentId } = useParams();
  const navigate = useNavigate();

  const niche = niches.find(n => n.id === nicheId);
  const department = niche?.departments.find(d => d.id === departmentId);

  if (!niche || !department) {
    return (
      <div className="min-h-screen py-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Department not found</h1>
          <Button onClick={() => navigate('/niches')}>Back to Niches</Button>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[niche.icon as keyof typeof iconMap];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/niches">Niches</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={`/niche/${nicheId}`}>{niche.name}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{department.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="mb-12">
          <Button
            variant="ghost"
            onClick={() => navigate(`/niche/${nicheId}`)}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Departments
          </Button>

          <div className="flex items-start gap-6 mb-4">
            <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center shadow-glow flex-shrink-0">
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl lg:text-4xl font-bold">
                  {department.name}
                </h1>
                <Badge variant="secondary" className="text-xs">
                  {niche.name}
                </Badge>
              </div>
              <p className="text-lg font-medium text-primary mb-2">
                {department.benefit}
              </p>
              <p className="text-muted-foreground">
                {department.description}
              </p>
            </div>
          </div>
        </div>

        {/* Agents List */}
        <div>
          <h2 className="text-2xl font-bold mb-8">
            Available AI Agents
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {department.agents.map((agent) => (
              <Card key={agent.id} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50">
                {/* Hero Image Area */}
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="text-7xl opacity-80">{agent.icon}</div>
                </div>

                <CardContent className="p-6 flex flex-col gap-4">
                  {/* Category Tag */}
                  <Badge variant="secondary" className="text-[10px] font-normal uppercase tracking-wide w-fit">
                    {department.name}
                  </Badge>

                  {/* Agent Name */}
                  <h3 className="text-xl font-bold leading-tight">
                    {agent.name}
                  </h3>

                  {/* Value Line - shortened */}
                  <p className="text-sm font-medium text-foreground/80 leading-relaxed">
                    {agent.valueProposition.split('.')[0]}.
                  </p>

                  {/* Micro Highlights (KPIs as pills) */}
                  <div className="flex flex-wrap gap-2">
                    {agent.kpis.slice(0, 3).map((kpi, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs font-normal px-2.5 py-0.5">
                        {kpi}
                      </Badge>
                    ))}
                  </div>

                  {/* Integrations (icons only, grayscale) */}
                  <div className="flex items-center gap-2 pt-2">
                    {agent.integrations.slice(0, 5).map((integration, idx) => (
                      <div 
                        key={idx} 
                        className="w-8 h-8 rounded-md bg-muted/50 flex items-center justify-center text-[9px] font-medium text-muted-foreground grayscale hover:grayscale-0 transition-all"
                        title={integration}
                      >
                        {integration.substring(0, 2).toUpperCase()}
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col gap-3 mt-2">
                    <Button className="w-full" size="default">
                      Install Agent
                    </Button>
                    <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-center">
                      Learn More →
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 p-6 gradient-card rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Need Help Choosing?</h3>
          <p className="text-muted-foreground mb-4">
            Not sure which agents are right for your {niche.name.toLowerCase()} business? 
            Talk to our specialists to get personalized recommendations.
          </p>
          <Button variant="outline">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentAgents;
