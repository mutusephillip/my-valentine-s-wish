import React from 'react';
import { useSecrets } from '@/context/SecretsContext';
import { Progress } from '@/components/ui/progress';
import { Heart, Trophy } from 'lucide-react';

export function SecretsProgress() {
  const { discoveredSecrets, totalSecrets, achievements } = useSecrets();
  const progress = (discoveredSecrets.length / totalSecrets) * 100;

  return (
    <div className="fixed bottom-4 left-4 z-40">
      <div className="glass-romantic px-4 py-3 rounded-2xl shadow-lg">
        <div className="flex items-center gap-3">
          <Heart size={18} className="text-burgundy fill-burgundy" />
          <div className="w-24">
            <Progress value={progress} className="h-2 bg-cream-dark" />
          </div>
          <span className="text-xs font-body text-burgundy">
            {discoveredSecrets.length}/{totalSecrets}
          </span>
          {achievements.length > 0 && (
            <div className="flex items-center gap-1 ml-2 pl-2 border-l border-rose-gold/30">
              <Trophy size={14} className="text-rose-gold" />
              <span className="text-xs font-body text-rose-gold">{achievements.length}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
