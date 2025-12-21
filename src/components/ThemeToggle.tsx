import { useTheme } from '@/contexts/ThemeContext'
import { HiMoon, HiSun } from 'react-icons/hi2'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-lg bg-muted hover:bg-primary/10 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <HiSun className="w-5 h-5 text-foreground" />
      ) : (
        <HiMoon className="w-5 h-5 text-foreground" />
      )}
    </button>
  )
}
