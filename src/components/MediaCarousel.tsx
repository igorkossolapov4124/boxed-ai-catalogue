import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Agent } from '@/data/agents';

interface MediaCarouselProps {
  media: Agent['media'];
}

const MediaCarousel = ({ media }: MediaCarouselProps) => {
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

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Agent Demo & Screenshots</h3>
        
        {/* Main Display */}
        <div className="relative aspect-video bg-muted rounded-lg overflow-hidden mb-4">
          <img 
            src={allMedia[activeIndex].src} 
            alt={allMedia[activeIndex].title}
            className="w-full h-full object-cover"
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
                className="absolute left-2 top-1/2 -translate-y-1/2"
                onClick={prevSlide}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon" 
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={nextSlide}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </>
          )}
        </div>
        
        {/* Thumbnail Strip */}
        {allMedia.length > 1 && (
          <div className="flex gap-2 overflow-x-auto">
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
        <div className="mt-3 text-center">
          <p className="text-sm font-medium">{allMedia[activeIndex].title}</p>
          <p className="text-xs text-muted-foreground">
            {activeIndex + 1} of {allMedia.length}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MediaCarousel;