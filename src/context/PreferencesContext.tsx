import React, { createContext, useState, useContext, ReactNode } from 'react';
import { UserPreferences, ThemeSettings, AnimationSettings } from '../types';

interface PreferencesContextType {
  preferences: UserPreferences;
  updateTheme: (theme: Partial<ThemeSettings>) => void;
  updateAnimations: (animations: Partial<AnimationSettings>) => void;
  toggleDarkMode: () => void;
  toggleAnimations: () => void;
}

const defaultPreferences: UserPreferences = {
  theme: {
    darkMode: true,
    primaryColor: '#1e90ff',
    secondaryColor: '#ff6a88',
    accentColor: '#00fff7'
  },
  animations: {
    enabled: true,
    intensity: 'medium'
  }
};

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

export const PreferencesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [preferences, setPreferences] = useState<UserPreferences>(() => {
    // Try to load preferences from localStorage
    const savedPreferences = localStorage.getItem('userPreferences');
    return savedPreferences ? JSON.parse(savedPreferences) : defaultPreferences;
  });

  // Save preferences to localStorage whenever they change
  React.useEffect(() => {
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
  }, [preferences]);

  const updateTheme = (theme: Partial<ThemeSettings>) => {
    setPreferences(prev => ({
      ...prev,
      theme: { ...prev.theme, ...theme }
    }));
  };

  const updateAnimations = (animations: Partial<AnimationSettings>) => {
    setPreferences(prev => ({
      ...prev,
      animations: { ...prev.animations, ...animations }
    }));
  };

  const toggleDarkMode = () => {
    setPreferences(prev => ({
      ...prev,
      theme: { ...prev.theme, darkMode: !prev.theme.darkMode }
    }));
  };

  const toggleAnimations = () => {
    setPreferences(prev => ({
      ...prev,
      animations: { ...prev.animations, enabled: !prev.animations.enabled }
    }));
  };

  return (
    <PreferencesContext.Provider
      value={{
        preferences,
        updateTheme,
        updateAnimations,
        toggleDarkMode,
        toggleAnimations
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferences = (): PreferencesContextType => {
  const context = useContext(PreferencesContext);
  if (context === undefined) {
    throw new Error('usePreferences must be used within a PreferencesProvider');
  }
  return context;
};