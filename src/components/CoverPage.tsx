import React from 'react'
import './CoverPage.css'

// Cover page component with promotional design and navigation
interface CoverPageProps {
  onNavigate: () => void // Function to navigate to accordion
}

const CoverPage: React.FC<CoverPageProps> = ({ onNavigate }) => {
  // Get theme state for responsive design (currently unused but available for future use)
  // const { theme } = useTheme()

  return (
    <div className="cover-page">
      {/* Background with grid pattern and geometric shapes */}
      <div className="cover-background">
        <div className="grid-pattern"></div>
        <div className="geometric-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      {/* Main content container */}
      <div className="cover-content">
        {/* Left side - Text content */}
        <div className="cover-text">
          <div className="category-badge">UI / UX DESIGN SYSTEM</div>
          <h1 className="main-title">Interactive UI Accordion</h1>
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">🎨</div>
              <span>Prototype with auto layout</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <span>Easy style change</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📱</div>
              <span>Responsive sizes</span>
            </div>
          </div>
        </div>

        {/* Right side - Interactive accordion preview */}
        <div className="accordion-preview">
          <div className="preview-accordion">
            {/* Closed accordion item */}
            <div className="preview-item closed">
              <div className="preview-header">
                <span className="preview-title">Interactive Accordion</span>
                <div className="preview-icon plus">+</div>
              </div>
            </div>

            {/* Open accordion item */}
            <div className="preview-item open">
              <div className="preview-header">
                <span className="preview-title">Interactive Accordion</span>
                <div className="preview-icon minus">−</div>
              </div>
              <div className="preview-content">
                <p>This accordion block is designed to expand and collapse in prototype mode. Set up with auto layout for easy size change, also using text and colour styles for quick editing. Made with components to easily match your branding.</p>
              </div>
            </div>

            {/* Partially visible item */}
            <div className="preview-item closed partial">
              <div className="preview-header">
                <span className="preview-title">Interactive Accordion</span>
                <div className="preview-icon plus">+</div>
              </div>
            </div>
          </div>

          {/* Cursor pointer */}
          <div className="cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Navigation button */}
      <button className="navigate-button" onClick={onNavigate}>
        <span>Explore Accordion</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}

export default CoverPage 
