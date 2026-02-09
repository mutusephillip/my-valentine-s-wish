import React from 'react';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { HiddenMessage } from './HiddenMessage';
import { Heart, Camera } from 'lucide-react';

interface Photo {
  id: number;
  caption: string;
  secretMessage?: string;
}

const photos: Photo[] = [
  { id: 1, caption: 'Our first adventure together', secretMessage: 'I knew from this moment...' },
  { id: 2, caption: 'That smile that lights up my world' },
  { id: 3, caption: 'Laughing at everything and nothing', secretMessage: 'Your laugh is my favorite sound' },
  { id: 4, caption: 'Creating memories together' },
  { id: 5, caption: 'Every moment with you is precious', secretMessage: 'I fall more in love every day' },
  { id: 6, caption: 'You and me, always' },
];

export function PhotoGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {photos.map((photo) => {
        const content = (
          <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-rose-gold/20 hover:border-rose-gold/40 transition-all duration-300 hover:shadow-xl hover:shadow-rose-gold/10">
            <AspectRatio ratio={4/3}>
              <div className="w-full h-full bg-gradient-to-br from-blush to-cream-dark flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-romantic-gradient opacity-50" />
                <div className="relative z-10 text-center p-4">
                  <Camera size={48} className="mx-auto mb-2 text-rose-gold/50" />
                  <p className="text-sm text-muted-foreground font-body italic">
                    Add your photo here
                  </p>
                </div>
                <div className="absolute inset-0 bg-burgundy/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </AspectRatio>
            <div className="p-4">
              <p className="text-center font-body text-foreground flex items-center justify-center gap-2">
                <Heart size={14} className="text-rose-gold" />
                {photo.caption}
                <Heart size={14} className="text-rose-gold" />
              </p>
            </div>
          </Card>
        );

        if (photo.secretMessage) {
          return (
            <HiddenMessage
              key={photo.id}
              secretId={`photo-${photo.id}`}
              message={photo.secretMessage}
              trigger="hover"
            >
              {content}
            </HiddenMessage>
          );
        }

        return <div key={photo.id}>{content}</div>;
      })}
    </div>
  );
}
