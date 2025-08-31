import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Shield } from 'lucide-react';
import { Agent } from '@/data/agents';

interface ReviewsSectionProps {
  reviews: Agent['reviews'];
  rating: number;
  reviewCount: number;
}

const ReviewsSection = ({ reviews, rating, reviewCount }: ReviewsSectionProps) => {
  if (!reviews || reviews.length === 0) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card>
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Customer Reviews</h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-semibold text-lg">{rating}</span>
            </div>
            <span className="text-muted-foreground">({reviewCount} reviews)</span>
          </div>
        </div>

        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-border last:border-0 pb-6 last:pb-0">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">{review.author}</span>
                    {review.verified && (
                      <Badge variant="secondary" className="text-xs">
                        <Shield className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{review.company}</p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground mt-1">
                    {formatDate(review.date)}
                  </span>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewsSection;