import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
}

interface SecretsContextType {
  discoveredSecrets: string[];
  achievements: Achievement[];
  discoverSecret: (secretId: string) => void;
  unlockAchievement: (achievement: Omit<Achievement, 'unlockedAt'>) => void;
  hasDiscoveredSecret: (secretId: string) => boolean;
  hasAchievement: (achievementId: string) => boolean;
  totalSecrets: number;
  saidYes: boolean;
  setSaidYes: (value: boolean) => void;
}

const SecretsContext = createContext<SecretsContextType | undefined>(undefined);

const STORAGE_KEY = 'fenina-valentine-secrets';
const TOTAL_SECRETS = 7;

export function SecretsProvider({ children }: { children: ReactNode }) {
  const [discoveredSecrets, setDiscoveredSecrets] = useState<string[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [saidYes, setSaidYes] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setDiscoveredSecrets(data.discoveredSecrets || []);
        setAchievements(data.achievements || []);
        setSaidYes(data.saidYes || false);
      } catch (e) {
        console.error('Failed to load secrets from storage', e);
      }
    }
  }, []);

  // Save to localStorage on changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      discoveredSecrets,
      achievements,
      saidYes,
    }));
  }, [discoveredSecrets, achievements, saidYes]);

  const discoverSecret = (secretId: string) => {
    if (!discoveredSecrets.includes(secretId)) {
      setDiscoveredSecrets(prev => [...prev, secretId]);
    }
  };

  const unlockAchievement = (achievement: Omit<Achievement, 'unlockedAt'>) => {
    if (!achievements.find(a => a.id === achievement.id)) {
      setAchievements(prev => [...prev, { ...achievement, unlockedAt: new Date() }]);
    }
  };

  const hasDiscoveredSecret = (secretId: string) => discoveredSecrets.includes(secretId);
  const hasAchievement = (achievementId: string) => achievements.some(a => a.id === achievementId);

  return (
    <SecretsContext.Provider value={{
      discoveredSecrets,
      achievements,
      discoverSecret,
      unlockAchievement,
      hasDiscoveredSecret,
      hasAchievement,
      totalSecrets: TOTAL_SECRETS,
      saidYes,
      setSaidYes,
    }}>
      {children}
    </SecretsContext.Provider>
  );
}

export function useSecrets() {
  const context = useContext(SecretsContext);
  if (context === undefined) {
    throw new Error('useSecrets must be used within a SecretsProvider');
  }
  return context;
}
