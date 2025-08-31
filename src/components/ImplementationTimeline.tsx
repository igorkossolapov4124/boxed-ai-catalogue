import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Users } from 'lucide-react';
import { Agent } from '@/data/agents';

interface ImplementationTimelineProps {
  implementation: Agent['implementation'];
}

const ImplementationTimeline = ({ implementation }: ImplementationTimelineProps) => {
  if (!implementation) return null;

  return (
    <Card>
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Implementation Timeline</h3>
          <Badge variant="outline" className="text-sm">
            <Clock className="w-4 h-4 mr-2" />
            {implementation.timeline}
          </Badge>
        </div>

        <div className="space-y-6 mb-8">
          {implementation.phases.map((phase, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < implementation.phases.length - 1 && (
                <div className="absolute left-3 top-8 w-0.5 h-16 bg-border" />
              )}
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{phase.name}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {phase.duration}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-6">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-accent" />
            <div>
              <p className="font-medium text-foreground">Support Included</p>
              <p className="text-sm text-muted-foreground">{implementation.support}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImplementationTimeline;