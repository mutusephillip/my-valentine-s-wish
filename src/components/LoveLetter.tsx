import React from 'react';
import { Card } from '@/components/ui/card';
import { HiddenMessage } from './HiddenMessage';
import { Heart, Feather } from 'lucide-react';

export function LoveLetter() {
  return (
    <Card className="max-w-2xl mx-auto p-8 md:p-12 bg-cream/80 backdrop-blur-sm border-rose-gold/30 shadow-xl">
      <div className="text-center mb-8">
        <Feather className="mx-auto text-rose-gold mb-4" size={32} />
        <h2 className="font-display text-3xl md:text-4xl text-burgundy mb-2">
          A Letter For You
        </h2>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto" />
      </div>

      <div className="font-body text-lg md:text-xl leading-relaxed space-y-6 text-foreground">
        <p className="first-letter:text-5xl first-letter:font-display first-letter:text-burgundy first-letter:float-left first-letter:mr-2">
          My Dearest Fenina,
        </p>

        <p>
          From the moment our paths crossed, my world became infinitely more beautiful. 
          Your smile has the power to turn my ordinary days into 
          <HiddenMessage secretId="letter-1" message="You are my everything" trigger="click">
            <span className="text-burgundy underline decoration-rose-gold/50 cursor-pointer hover:text-burgundy-light transition-colors">
              {" "}extraordinary adventures
            </span>
          </HiddenMessage>
          .
        </p>

        <p>
          Every laugh we share, every quiet moment together, every silly inside joke — 
          they all weave together into something magical that I treasure more than words can say.
        </p>

        <p>
          You have this incredible way of making everything better. 
          <HiddenMessage secretId="letter-2" message="My heart beats for you" trigger="click">
            <span className="text-burgundy underline decoration-rose-gold/50 cursor-pointer hover:text-burgundy-light transition-colors">
              Your kindness
            </span>
          </HiddenMessage>
          , your warmth, your beautiful spirit — they light up my life in ways I never knew possible.
        </p>

        <p>
          I wrote this for you because sometimes "I love you" doesn't feel like enough. 
          I wanted to create something that captures even a fraction of what you mean to me.
        </p>

        <p className="text-right italic">
          Forever yours,<br />
          <span className="font-display text-2xl text-burgundy">With all my love</span>
          <Heart className="inline ml-2 text-rose-gold fill-rose-gold" size={20} />
        </p>

        <div className="text-center pt-4">
          <p className="text-sm text-muted-foreground italic">
            (Psst... click on the highlighted words for surprises)
          </p>
        </div>
      </div>
    </Card>
  );
}
