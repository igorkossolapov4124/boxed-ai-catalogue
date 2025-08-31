import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Play, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Agent } from '@/data/agents';

interface MediaPreviewProps {
  media: Agent['media'];
}

const MediaPreview = ({ media }: MediaPreviewProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  if (!media) return null;
  
  const allMedia = [
    ...media.images.map(img => ({ type: 'image', src: img, title: 'Agent Screenshot' })),
    ...media.demos.map(demo => ({ type: 'video', src: demo.thumbnail, title: demo.title, videoUrl: demo.url }))
  ];
  
  if (allMedia.length === 0) return null;
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % allMedia.length);
  };
  
  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + allMedia.length) % allMedia.length);
  };

  const previewItem = allMedia[0];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Agent Demo & Screenshots</h3>
      
      <Dialog>
        <DialogTrigger asChild>
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src={previewItem.src} 
                  alt={previewItem.title}
                  className="w-full h-full object-cover"
                />
                
                {previewItem.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Button size="lg" variant="secondary" className="rounded-full">
                      <Play className="w-6 h-6 ml-1" />
                    </Button>
                  </div>
                )}
                
                {/* Preview Overlay */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity">
                    <Button variant="secondary" className="rounded-full">
                      View All ({allMedia.length})
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-4 text-center">
                <p className="text-sm font-medium">{previewItem.title}</p>
                <p className="text-xs text-muted-foreground">
                  Click to view all {allMedia.length} media files
                </p>
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        
        <DialogContent className="max-w-4xl w-full h-[80vh]">
          <div className="relative h-full flex flex-col">
            {/* Main Display */}
            <div className="relative flex-1 bg-muted rounded-lg overflow-hidden mb-4">
              <img 
                src={allMedia[activeIndex].src} 
                alt={allMedia[activeIndex].title}
                className="w-full h-full object-contain"
              />
              
              {allMedia[activeIndex].type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <Button size="lg" variant="secondary" className="rounded-full">
                    <Play className="w-6 h-6 ml-1" />
                  </Button>
                </div>
              )}
              
              {/* Navigation Arrows */}
              {allMedia.length > 1 && (
                <>
                  <Button
                    variant="secondary" 
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                    onClick={prevSlide}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon" 
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    onClick={nextSlide}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </>
              )}
            </div>
            
            {/* Thumbnail Strip */}
            {allMedia.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {allMedia.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`flex-shrink-0 w-20 h-12 rounded-md overflow-hidden border-2 transition-colors ${
                      index === activeIndex ? 'border-primary' : 'border-border'
                    }`}
                  >
                    <img 
                      src={item.src} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
            
            {/* Current Media Title */}
            <div className="text-center">
              <p className="text-sm font-medium">{allMedia[activeIndex].title}</p>
              <p className="text-xs text-muted-foreground">
                {activeIndex + 1} of {allMedia.length}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MediaPreview;