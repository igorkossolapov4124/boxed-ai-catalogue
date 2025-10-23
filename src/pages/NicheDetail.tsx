import { Link, useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
          <h2 className="text-2xl font-bold mb-6">Choose a Department</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {niche.departments.map((department) => (
              <Link
                key={department.id}
                to={`/niche/${nicheId}/department/${department.id}`}
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
                  <CardContent className="p-8">
                    {/* Department Name */}
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {department.name}
                    </h3>

                    {/* Benefit */}
                    <p className="text-sm font-medium text-primary mb-4">
                      {department.benefit}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-6">
                      {department.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm text-muted-foreground">Available Agents</span>
                      <Badge variant="secondary">{department.agents.length}</Badge>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-sm font-medium text-primary group-hover:text-primary-dark transition-colors">
                      View Agents
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NicheDetail;
