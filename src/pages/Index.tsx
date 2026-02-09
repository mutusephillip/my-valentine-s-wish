import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FloatingHearts } from '@/components/FloatingHearts';
import { Sparkles } from '@/components/Sparkles';
import { HiddenMessage } from '@/components/HiddenMessage';
import { SecretsProgress } from '@/components/SecretsProgress';
import { Heart, BookHeart, Sparkles as SparklesIcon } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-romantic-gradient relative overflow-hidden">
      <FloatingHearts />
      <Sparkles count={20} />
      <SecretsProgress />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <HiddenMessage secretId="hero-heart" message="You make my heart flutter" trigger="click">
            <Heart 
              size={64} 
              className="mx-auto mb-6 text-burgundy fill-burgundy animate-heartbeat cursor-pointer" 
            />
          </HiddenMessage>
          
          <p className="font-body text-lg md:text-xl text-rose-gold mb-4 tracking-wider uppercase">
            Something special awaits...
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-burgundy mb-4">
            For{' '}
            <HiddenMessage secretId="name-secret" message="The love of my life" trigger="hover">
              <span className="text-gradient-romantic cursor-pointer">Fenina</span>
            </HiddenMessage>
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto italic">
            "In all the world, there is no heart for me like yours."
          </p>
        </div>

        {/* Path Selection */}
        <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Link to="/our-story">
            <Button 
              size="lg" 
              className="group relative px-8 py-6 text-lg font-display bg-burgundy hover:bg-burgundy-dark text-primary-foreground animate-pulse-glow transition-all duration-300 hover:scale-105"
            >
              <BookHeart className="mr-2 group-hover:animate-heartbeat" />
              Our Love Story
            </Button>
          </Link>
          
          <Link to="/valentine">
            <Button 
              size="lg" 
              variant="outline"
              className="group relative px-8 py-6 text-lg font-display border-2 border-rose-gold text-burgundy hover:bg-rose-gold/10 transition-all duration-300 hover:scale-105"
            >
              <SparklesIcon className="mr-2 group-hover:animate-sparkle" />
              A Special Question
            </Button>
          </Link>
        </div>

        {/* Hint */}
        <p className="mt-12 text-sm text-muted-foreground font-body animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          ✨ Psst... there are hidden surprises waiting to be discovered ✨
        </p>
      </div>
    </div>
  );
};

export default Index;
