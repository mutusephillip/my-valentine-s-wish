import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FloatingHearts } from '@/components/FloatingHearts';
import { Sparkles } from '@/components/Sparkles';
import { Confetti } from '@/components/Confetti';
import { SecretsProgress } from '@/components/SecretsProgress';
import { useSecrets } from '@/context/SecretsContext';
import { ArrowLeft, Heart, Sparkles as SparklesIcon } from 'lucide-react';

const Valentine = () => {
  const [stage, setStage] = useState<'intro' | 'question' | 'yes'>('intro');
  const [showConfetti, setShowConfetti] = useState(false);
  const { saidYes, setSaidYes, unlockAchievement } = useSecrets();

  useEffect(() => {
    if (saidYes) {
      setStage('yes');
    }
  }, [saidYes]);

  const handleYes = () => {
    setStage('yes');
    setSaidYes(true);
    setShowConfetti(true);
    
    unlockAchievement({
      id: 'said-yes',
      name: 'You Said Yes!',
      description: 'Made my heart complete 💕',
      icon: '💍',
    });

    // Stop confetti after animation
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const startQuestion = () => {
    setStage('question');
  };

  return (
    <div className="min-h-screen bg-romantic-gradient relative overflow-hidden">
      <FloatingHearts />
      <Sparkles count={30} />
      <Confetti active={showConfetti} count={150} />
      <SecretsProgress />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Back Button */}
        <div className="absolute top-4 left-4">
          <Link to="/">
            <Button variant="ghost" className="text-burgundy hover:text-burgundy-dark hover:bg-rose-gold/10">
              <ArrowLeft className="mr-2" size={18} />
              Back
            </Button>
          </Link>
        </div>

        {/* Intro Stage */}
        {stage === 'intro' && (
          <div className="text-center animate-fade-in-up">
            <SparklesIcon size={48} className="mx-auto mb-6 text-rose-gold" />
            <h1 className="font-display text-4xl md:text-5xl text-burgundy mb-6">
              My Dearest Fenina...
            </h1>
            <p className="font-body text-xl text-muted-foreground mb-8 max-w-md mx-auto">
              I have something very special to ask you. Are you ready?
            </p>
            <Button 
              size="lg"
              onClick={startQuestion}
              className="px-8 py-6 text-lg font-display bg-burgundy hover:bg-burgundy-dark text-primary-foreground animate-pulse-glow"
            >
              <Heart className="mr-2" />
              I'm Ready
            </Button>
          </div>
        )}

        {/* Question Stage */}
        {stage === 'question' && (
          <div className="text-center animate-fade-in-up">
            <Heart 
              size={80} 
              className="mx-auto mb-8 text-burgundy fill-burgundy animate-heartbeat" 
            />
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-burgundy mb-4">
              Will You Be My
            </h1>
            <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-gradient-romantic mb-8">
              Valentine?
            </h2>
            <p className="font-body text-2xl text-muted-foreground mb-12 italic">
              Fenina, my love...
            </p>
            
            <Button 
              size="lg"
              onClick={handleYes}
              className="px-12 py-8 text-2xl font-display bg-gradient-to-r from-burgundy to-rose-gold hover:from-burgundy-dark hover:to-rose-gold-dark text-white animate-pulse-glow transition-all duration-300 hover:scale-110 shadow-2xl"
            >
              <Heart className="mr-3 animate-heartbeat" size={28} />
              Yes, Forever!
              <Heart className="ml-3 animate-heartbeat" size={28} />
            </Button>
          </div>
        )}

        {/* Yes Stage - Celebration */}
        {stage === 'yes' && (
          <div className="text-center animate-fade-in-up">
            <div className="flex justify-center gap-4 mb-8">
              {[...Array(5)].map((_, i) => (
                <Heart 
                  key={i}
                  size={40 + i * 10} 
                  className="text-burgundy fill-burgundy animate-heartbeat" 
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-gradient-romantic mb-6">
              You Said Yes!
            </h1>
            
            <p className="font-body text-2xl md:text-3xl text-burgundy mb-4">
              💕 I'm the luckiest person in the world! 💕
            </p>
            
            <p className="font-body text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
              Thank you for making my heart complete. 
              I promise to love you more each day.
            </p>

            <div className="glass-romantic px-8 py-6 rounded-2xl inline-block mb-8">
              <p className="font-display text-2xl text-burgundy">
                Happy Valentine's Day, Fenina!
              </p>
              <p className="font-body text-lg text-rose-gold mt-2">
                Forever and always yours ❤️
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/our-story">
                <Button 
                  variant="outline"
                  className="border-2 border-rose-gold text-burgundy hover:bg-rose-gold/10"
                >
                  Revisit Our Story
                </Button>
              </Link>
              <Link to="/">
                <Button 
                  variant="outline"
                  className="border-2 border-burgundy text-burgundy hover:bg-burgundy/10"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Valentine;
