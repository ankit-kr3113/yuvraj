import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

type Theme = 'cyberpunk' | 'ocean-depth' | 'midnight' | 'cosmic' | 'cosmic-white' | 'cosmic-white-cyan' | 'cosmic-white-pink' | 'cosmic-white-purple' | 'cosmic-white-silver' | 'cosmic-white-aurora' | 'cosmic-white-meteor';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: Array<{
    id: Theme;
    name: string;
    color: string;
    description: string;
  }>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Revolutionary theme system with unique visual identities
export const themes = [
  {
    id: 'cyberpunk' as Theme,
    name: 'Cyberpunk',
    color: 'hsl(180, 100%, 50%)',
    description: 'Futuristic hacker aesthetic with neon grids'
  },
  {
    id: 'ocean-depth' as Theme,
    name: 'Ocean Depth',
    color: 'hsl(205, 100%, 45%)',
    description: 'Deep blue ocean with aquatic vibes'
  },
  {
    id: 'midnight' as Theme,
    name: 'Midnight',
    color: 'hsl(0, 0%, 8%)',
    description: 'True dark theme with striking neon accents'
  },
  {
    id: 'cosmic' as Theme,
    name: 'Cosmic',
    color: 'hsl(200, 100%, 50%)',
    description: 'Pitch black universe with stars and nebula'
  },
  {
    id: 'cosmic-white' as Theme,
    name: 'Cosmic White (Golden)',
    color: 'hsl(45, 100%, 65%)',
    description: 'Black night sky with white moon and golden accents'
  },
  {
    id: 'cosmic-white-cyan' as Theme,
    name: 'Cosmic White (Cyan)',
    color: 'hsl(180, 100%, 60%)',
    description: 'Black night sky with white moon and cyan aurora accents'
  },
  {
    id: 'cosmic-white-pink' as Theme,
    name: 'Cosmic White (Pink)',
    color: 'hsl(320, 100%, 60%)',
    description: 'Black night sky with white moon and pink nebula accents'
  },
  {
    id: 'cosmic-white-purple' as Theme,
    name: 'Cosmic White (Purple)',
    color: 'hsl(270, 100%, 65%)',
    description: 'Black night sky with white moon and purple cosmic accents'
  },
  {
    id: 'cosmic-white-silver' as Theme,
    name: 'Cosmic White (Silver)',
    color: 'hsl(0, 0%, 80%)',
    description: 'Black night sky with white moon and subtle silver accents'
  },
  {
    id: 'cosmic-white-aurora' as Theme,
    name: 'Cosmic White (Aurora)',
    color: 'hsl(150, 100%, 50%)',
    description: 'Black night sky with white moon and green aurora accents'
  },
  {
    id: 'cosmic-white-meteor' as Theme,
    name: 'Cosmic White (Meteor)',
    color: 'hsl(15, 100%, 60%)',
    description: 'Black night sky with white moon and red meteor accents'
  }
];

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('cyberpunk');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    if (savedTheme && themes.find(t => t.id === savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);

    // Remove all theme classes
    document.documentElement.removeAttribute('data-theme');

    // Apply new theme
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const value = {
    theme,
    setTheme,
    themes
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
