import React, { useEffect, useState } from 'react';
import { useSecrets } from '@/context/SecretsContext';

interface AchievementBadgeProps {
  achievement: {
    id: string;
    name: string;
    description: string;
    icon: string;
  };
}

export function AchievementBadge({ achievement }: AchievementBadgeProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-fade-in-up">
      <div className="glass-romantic px-6 py-4 rounded-2xl shadow-xl border border-rose-gold/30">
        <div className="flex items-center gap-4">
          <span className="text-4xl">{achievement.icon}</span>
          <div>
            <p className="text-xs text-rose-gold uppercase tracking-wider font-body">Achievement Unlocked!</p>
            <h3 className="font-display text-lg text-burgundy font-semibold">{achievement.name}</h3>
            <p className="text-sm text-muted-foreground font-body">{achievement.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AchievementNotifications() {
  const { achievements } = useSecrets();
  const [shownAchievements, setShownAchievements] = useState<string[]>([]);
  const [currentAchievement, setCurrentAchievement] = useState<typeof achievements[0] | null>(null);

  useEffect(() => {
    const newAchievement = achievements.find(a => !shownAchievements.includes(a.id));
    if (newAchievement) {
      setCurrentAchievement(newAchievement);
      setShownAchievements(prev => [...prev, newAchievement.id]);
      
      const timer = setTimeout(() => setCurrentAchievement(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [achievements, shownAchievements]);

  if (!currentAchievement) return null;

  return <AchievementBadge achievement={currentAchievement} />;
}
