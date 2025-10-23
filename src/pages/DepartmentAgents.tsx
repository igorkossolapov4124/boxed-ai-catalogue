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
          <h2 className="text-2xl font-bold mb-6">
            Available AI Agents ({department.agents.length})
          </h2>
          <div className="space-y-6">
            {department.agents.map((agent) => (
              <Card key={agent.id} className="hover:shadow-card-hover transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="text-4xl">{agent.icon}</div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{agent.name}</CardTitle>
                        <p className="text-muted-foreground mb-4">
                          {agent.valueProposition}
                        </p>

                        {/* KPIs */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {agent.kpis.map((kpi, idx) => (
                            <Badge key={idx} variant="outline" className="flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" />
                              {kpi}
                            </Badge>
                          ))}
                        </div>

                        {/* Integrations */}
                        <div className="mb-4">
                          <p className="text-sm font-medium mb-2">Integrations:</p>
                          <div className="flex flex-wrap gap-2">
                            {agent.integrations.map((integration, idx) => (
                              <Badge key={idx} variant="secondary">
                                {integration}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="flex flex-col gap-2">
                      <Button className="gradient-button">
                        Install Agent
                      </Button>
                      <Button variant="outline" size="sm">
                        Schedule Implementation
                      </Button>
                    </div>
                  </div>
                </CardHeader>
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
