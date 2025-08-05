import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// Define the theme context type
interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

// Create the theme context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Theme provider component
interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Initialize theme state from localStorage or default to 'light'
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    // Return saved theme or default to 'light'
    return savedTheme || 'light'
  })

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    // Save theme preference to localStorage
    localStorage.setItem('theme', newTheme)
  }

  // Effect to apply theme to document when theme changes
  useEffect(() => {
    // Set data-theme attribute on document element
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  // Context value object
  const value: ThemeContextType = {
    theme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook to use theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
} 