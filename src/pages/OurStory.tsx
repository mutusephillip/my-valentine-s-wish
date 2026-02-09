import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FloatingHearts } from '@/components/FloatingHearts';
import { PhotoGallery } from '@/components/PhotoGallery';
import { LoveLetter } from '@/components/LoveLetter';
import { SecretsProgress } from '@/components/SecretsProgress';
import { useSecrets } from '@/context/SecretsContext';
import { ArrowLeft, Heart, Camera, Feather } from 'lucide-react';

const OurStory = () => {
  const { unlockAchievement } = useSecrets();

  useEffect(() => {
    // Unlock "Memory Explorer" achievement when visiting this page
    const timer = setTimeout(() => {
      unlockAchievement({
        id: 'memory-explorer',
        name: 'Memory Explorer',
        description: 'Explored our beautiful journey together',
        icon: '📸',
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [unlockAchievement]);

  return (
    <div className="min-h-screen bg-romantic-gradient relative">
      <FloatingHearts />
      <SecretsProgress />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Navigation */}
        <Link to="/" className="inline-block mb-8">
          <Button variant="ghost" className="text-burgundy hover:text-burgundy-dark hover:bg-rose-gold/10">
            <ArrowLeft className="mr-2" size={18} />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Heart size={48} className="mx-auto mb-4 text-rose-gold fill-rose-gold" />
          <h1 className="font-display text-4xl md:text-6xl text-burgundy mb-4">
            Our Story Together
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            A collection of moments that make my heart overflow with joy
          </p>
        </div>

        {/* Photo Gallery Section */}
        <section className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-rose-gold/50" />
            <Camera className="text-rose-gold" size={24} />
            <h2 className="font-display text-2xl text-burgundy">Our Memories</h2>
            <Camera className="text-rose-gold" size={24} />
            <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-rose-gold/50" />
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <PhotoGallery />
          </div>

          <p className="text-center mt-6 text-sm text-muted-foreground font-body italic">
            (Hover over photos — some have secret messages!)
          </p>
        </section>

        {/* Love Letter Section */}
        <section className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-rose-gold/50" />
            <Feather className="text-rose-gold" size={24} />
            <h2 className="font-display text-2xl text-burgundy">My Heart's Words</h2>
            <Feather className="text-rose-gold" size={24} />
            <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-rose-gold/50" />
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <LoveLetter />
          </div>
        </section>

        {/* CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="font-body text-lg text-muted-foreground mb-6">
            Ready for a special question?
          </p>
          <Link to="/valentine">
            <Button 
              size="lg"
              className="px-8 py-6 text-lg font-display bg-burgundy hover:bg-burgundy-dark text-primary-foreground animate-pulse-glow"
            >
              <Heart className="mr-2" />
              Take Me There
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
