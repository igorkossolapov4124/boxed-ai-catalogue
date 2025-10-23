import { Link, useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { niches, iconMap } from '@/data/niches';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const NicheDetail = () => {
  const { nicheId } = useParams();
  const navigate = useNavigate();
  const niche = niches.find(n => n.id === nicheId);

  if (!niche) {
    return (
      <div className="min-h-screen py-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Niche not found</h1>
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
              <BreadcrumbPage>{niche.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="mb-12">
              <Button
                variant="ghost"
                onClick={() => navigate('/niches')}
                className="mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Niches
              </Button>

              <div className="flex items-center gap-6 mb-4">
                <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center shadow-glow">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                    {niche.name}
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    {niche.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Departments Grid */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Choose a Department</h2>
              <TooltipProvider>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {niche.departments.map((department) => {
                    const DeptIcon = iconMap[department.icon as keyof typeof iconMap];
                    
                    return (
                      <Tooltip key={department.id}>
                        <TooltipTrigger asChild>
                          <Link
                            to={`/niche/${nicheId}/department/${department.id}`}
                            className="group block"
                          >
                            <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50">
                              <CardContent className="p-8 flex flex-col h-full gap-6">
                                {/* Icon - larger, Apple-style */}
                                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center">
                                  <DeptIcon className="w-9 h-9 text-primary" />
                                </div>

                                {/* Title - bolder */}
                                <h3 className="text-xl font-bold leading-tight">
                                  {department.name}
                                </h3>

                                {/* Benefit Line - medium weight */}
                                <p className="text-base font-medium text-foreground/80 leading-relaxed">
                                  {department.benefit}
                                </p>

                                {/* KPI Chips - subtle, max 2 */}
                                <div className="flex flex-wrap gap-2">
                                  {department.kpis.slice(0, 2).map((kpi, idx) => (
                                    <Badge key={idx} variant="secondary" className="text-xs font-normal px-3 py-1">
                                      {kpi}
                                    </Badge>
                                  ))}
                                </div>

                                {/* CTA - minimal, bottom */}
                                <div className="mt-auto flex items-center text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                                  Explore
                                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                                </div>
                              </CardContent>
                            </Card>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs p-4">
                          <div className="space-y-3">
                            <p className="font-semibold text-sm">What this covers:</p>
                            <ul className="text-xs space-y-2 text-muted-foreground">
                              {department.tooltip.map((item, idx) => (
                                <li key={idx}>• {item}</li>
                              ))}
                            </ul>
                            <p className="text-[10px] text-muted-foreground pt-2 border-t border-border/50">
                              {department.agents.length} solution{department.agents.length !== 1 ? 's' : ''} available
                            </p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>
              </TooltipProvider>
            </div>
          </div>

          {/* Right Rail - Consultation (Desktop Only) */}
          <div className="hidden xl:block w-80">
            <div className="sticky top-24">
              <Card className="gradient-card border-none">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Not sure where to start?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Talk to our specialists to get personalized recommendations for your {niche.name.toLowerCase()} business.
                  </p>
                  <Button className="w-full gradient-button">
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Mobile Consultation Section */}
        <div className="xl:hidden mt-12">
          <Card className="gradient-card border-none">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">
                Not sure where to start?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Talk to our specialists to get personalized recommendations for your {niche.name.toLowerCase()} business.
              </p>
              <Button className="w-full gradient-button">
                Schedule Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NicheDetail;
