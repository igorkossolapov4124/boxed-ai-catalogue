import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Code } from 'lucide-react';

interface RoleSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectEntrepreneur: () => void;
  onSelectDeveloper: () => void;
}

export const RoleSelectionModal = ({
  isOpen,
  onClose,
  onSelectEntrepreneur,
  onSelectDeveloper
}: RoleSelectionModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="relative min-h-[600px] flex items-center justify-center">
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 bg-background border-b border-border px-8 py-6 z-10">
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Join BoxedAI – Who are you?
                </h1>
                <p className="text-muted-foreground">
                  Choose your role to continue
                </p>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground"
              >
                ✕
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 py-12 pt-32 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Entrepreneur Card */}
              <Card 
                className="relative group cursor-pointer hover:shadow-card-hover transition-smooth border-2 hover:border-primary"
                onClick={onSelectEntrepreneur}
              >
                <CardHeader className="text-center space-y-4 pb-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">I'm an Entrepreneur</CardTitle>
                </CardHeader>
                
                <CardContent className="text-center space-y-6">
                  <p className="text-muted-foreground text-lg">
                    Discover and deploy AI agents to scale your business.
                  </p>
                  
                  <Button 
                    variant="gradient" 
                    className="w-full h-12"
                    onClick={onSelectEntrepreneur}
                  >
                    Continue as Entrepreneur
                  </Button>
                </CardContent>
              </Card>

              {/* Developer Card */}
              <Card 
                className="relative group cursor-pointer hover:shadow-card-hover transition-smooth border-2 hover:border-primary"
                onClick={onSelectDeveloper}
              >
                <CardHeader className="text-center space-y-4 pb-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-smooth">
                    <Code className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">I'm a Developer</CardTitle>
                </CardHeader>
                
                <CardContent className="text-center space-y-6">
                  <p className="text-muted-foreground text-lg">
                    Publish your AI agents and earn by helping businesses.
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="w-full h-12 hover:bg-secondary hover:text-secondary-foreground"
                    onClick={onSelectDeveloper}
                  >
                    Continue as Developer
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RoleSelectionModal;