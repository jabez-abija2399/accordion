import { useState } from "react"
import Accordion from "./components/Accordion"
import CoverPage from "./components/CoverPage"
import ThemeToggle from "./components/ThemeToggle"
import { ThemeProvider } from "./contexts/ThemeContext"
import { accordionData } from "./data/accordionData"
import "./App.css"

// Main App component with cover page and accordion navigation
const App = () => {
  // State to control which page to show
  const [currentPage, setCurrentPage] = useState<'cover' | 'accordion'>('cover')

  // Function to navigate to accordion
  const navigateToAccordion = () => {
    setCurrentPage('accordion')
  }

  // Function to navigate back to cover
  const navigateToCover = () => {
    setCurrentPage('cover')
  }

  return (
    // Wrap entire app with ThemeProvider for theme context
    <ThemeProvider>
      {currentPage === 'cover' ? (
        // Show cover page with navigation to accordion
        <CoverPage onNavigate={navigateToAccordion} />
      ) : (
        // Show accordion page with back navigation
        <div className="app-container">
          <div className="app-content">
            {/* Navigation header */}
            <div className="navigation-header">
              <button 
                className="back-button"
                onClick={navigateToCover}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Back to Cover</span>
              </button>
              
              {/* Theme toggle button in top-right corner */}
              <div className="theme-toggle-container">
                <ThemeToggle />
              </div>
            </div>
            
            {/* Main heading */}
            <h1 className="main-heading">
              Frequently asked questions
            </h1>
            
            {/* Accordion component */}
            <Accordion items={accordionData} />
          </div>
        </div>
      )}
    </ThemeProvider>
  )
}

export default App
