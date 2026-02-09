import React, { useMemo } from 'react';
import { Sparkles as SparkleIcon } from 'lucide-react';

interface Sparkle {
  id: number;
  top: number;
  left: number;
  delay: number;
  size: number;
}

interface SparklesProps {
  count?: number;
  className?: string;
}

export function Sparkles({ count = 15, className = '' }: SparklesProps) {
  const sparkles = useMemo<Sparkle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      size: 8 + Math.random() * 16,
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle"
          style={{
            top: `${sparkle.top}%`,
            left: `${sparkle.left}%`,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          <SparkleIcon
            size={sparkle.size}
            className="text-rose-gold-light"
          />
        </div>
      ))}
    </div>
  );
}
