import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Zap, Cloud } from 'lucide-react';
import { Agent } from '@/data/agents';

interface TechStackDisplayProps {
  techStack: Agent['techStack'];
}

const TechStackDisplay = ({ techStack }: TechStackDisplayProps) => {
  if (!techStack) return null;

  const sections = [
    {
      title: 'AI Models',
      icon: <Cpu className="w-5 h-5" />,
      items: techStack.primary,
      variant: 'default' as const
    },
    {
      title: 'Automation Platforms',
      icon: <Zap className="w-5 h-5" />,
      items: techStack.integrations,
      variant: 'secondary' as const
    },
    {
      title: 'Infrastructure',
      icon: <Cloud className="w-5 h-5" />,
      items: techStack.infrastructure,
      variant: 'outline' as const
    }
  ];

  return (
    <Card>
      <CardContent className="p-8">
        <h3 className="text-xl font-semibold mb-6">Technology Stack</h3>
        
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-accent">{section.icon}</div>
                <h4 className="font-semibold text-foreground">{section.title}</h4>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {section.items.map((item) => (
                  <Badge 
                    key={item} 
                    variant={section.variant}
                    className="text-sm py-1 px-3"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Built with enterprise-grade AI models and automation platforms for maximum reliability and performance.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TechStackDisplay;