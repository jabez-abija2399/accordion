import type { AccordionItemType } from "../types"

// Props interface for AccordionItem component
interface Props {
  item: AccordionItemType // Individual accordion item data
  isOpen: boolean // Whether this item is currently expanded
  onClick: () => void // Function to handle click events
}

// Individual accordion item component with expand/collapse functionality
const AccordionItem = ({ item, isOpen, onClick }: Props) => {
  return (
    // Container for individual accordion item with border styling
    <div className="accordion-item">
      {/* Clickable button that toggles accordion item */}
      <button
        // Apply different styles based on open/closed state
        className={`accordion-button ${isOpen ? 'open' : ''}`}
        onClick={onClick} // Handle click to toggle state
        aria-expanded={isOpen} // Accessibility attribute
        aria-controls={`accordion-content-${item.id}`} // Accessibility attribute
      >
        {/* Question text with responsive typography */}
        <span className="question-text">{item.title}</span>
        
        {/* Icon container that changes based on state */}
        <span className="accordion-icon">
          {isOpen ? (
            // Minus icon for expanded state
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            // Plus icon for collapsed state
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          )}
        </span>
      </button>
      
      {/* Expandable content area - only rendered when open */}
      {isOpen && (
        <div 
          className="accordion-content"
          id={`accordion-content-${item.id}`} // Accessibility ID
        >
          {/* Answer text with proper typography and spacing */}
          <p className="answer-text">{item.content}</p>
        </div>
      )}
    </div>
  )
}

export default AccordionItem
