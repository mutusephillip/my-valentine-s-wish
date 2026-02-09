import React, { useState } from 'react';
import { useSecrets } from '@/context/SecretsContext';
import { Heart } from 'lucide-react';

interface HiddenMessageProps {
  secretId: string;
  message: string;
  children: React.ReactNode;
  trigger?: 'hover' | 'click';
}

export function HiddenMessage({ secretId, message, children, trigger = 'hover' }: HiddenMessageProps) {
  const [revealed, setRevealed] = useState(false);
  const { discoverSecret, hasDiscoveredSecret, unlockAchievement } = useSecrets();
  const wasDiscovered = hasDiscoveredSecret(secretId);

  const handleReveal = () => {
    if (!wasDiscovered) {
      discoverSecret(secretId);
      unlockAchievement({
        id: 'secret-hunter',
        name: 'Secret Hunter',
        description: 'Found a hidden message of love',
        icon: '💝',
      });
    }
    setRevealed(true);
  };

  const handleHide = () => {
    if (trigger === 'hover') {
      setRevealed(false);
    }
  };

  const interactionProps = trigger === 'hover' 
    ? { onMouseEnter: handleReveal, onMouseLeave: handleHide }
    : { onClick: handleReveal };

  return (
    <div className="relative inline-block cursor-pointer" {...interactionProps}>
      {children}
      
      {(revealed || wasDiscovered) && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up">
          <div className="glass-romantic px-4 py-2 rounded-full whitespace-nowrap flex items-center gap-2 shadow-lg">
            <Heart size={14} className="text-burgundy fill-burgundy" />
            <span className="text-sm font-body text-burgundy">{message}</span>
            <Heart size={14} className="text-burgundy fill-burgundy" />
          </div>
        </div>
      )}
    </div>
  );
}
