import React, { useMemo } from 'react';
import { Heart } from 'lucide-react';

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  type: 'heart' | 'circle' | 'square';
  color: string;
  size: number;
  rotation: number;
}

interface ConfettiProps {
  active: boolean;
  count?: number;
}

const colors = [
  'hsl(345, 60%, 35%)', // burgundy
  'hsl(15, 50%, 70%)',  // rose-gold
  'hsl(350, 60%, 90%)', // blush
  'hsl(345, 50%, 45%)', // burgundy-light
  'hsl(15, 60%, 80%)',  // rose-gold-light
];

export function Confetti({ active, count = 100 }: ConfettiProps) {
  const confetti = useMemo<ConfettiPiece[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
      type: ['heart', 'circle', 'square'][Math.floor(Math.random() * 3)] as ConfettiPiece['type'],
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 8 + Math.random() * 16,
      rotation: Math.random() * 360,
    }));
  }, [count]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        >
          {piece.type === 'heart' ? (
            <Heart
              size={piece.size}
              style={{ color: piece.color, fill: piece.color }}
            />
          ) : piece.type === 'circle' ? (
            <div
              className="rounded-full"
              style={{
                width: piece.size,
                height: piece.size,
                backgroundColor: piece.color,
              }}
            />
          ) : (
            <div
              style={{
                width: piece.size,
                height: piece.size,
                backgroundColor: piece.color,
                transform: `rotate(${piece.rotation}deg)`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
