import { useState } from "react"
import type { AccordionItemType } from "../types"
import AccordionItem from "./AccordionItem"

// Props interface for Accordion component
interface Props {
  items: AccordionItemType[] // Array of accordion items to display
}

// Main Accordion component with multiple open items support
const Accordion = ({ items }: Props) => {
  // State to track which accordion items are currently open
  // Using Set for efficient add/remove operations
  // Initialize with items 0 and 2 open (matching the design image)
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0, 2]))

  // Function to toggle accordion item open/closed state
  const toggleItem = (index: number) => {
    // Create a new Set to avoid mutating state directly
    const newOpenItems = new Set(openItems)
    
    // If item is already open, remove it from the set
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      // If item is closed, add it to the set
      newOpenItems.add(index)
    }
    
    // Update state with new set of open items
    setOpenItems(newOpenItems)
  }

  return (
    // Main accordion container with responsive styling
    <div className="accordion-container">
      {/* Map through all accordion items */}
      {items.map((item, index) => (
        <AccordionItem
          key={item.id} // Unique key for React rendering optimization
          item={item} // Pass the accordion item data
          isOpen={openItems.has(index)} // Check if this item is currently open
          onClick={() => toggleItem(index)} // Pass toggle function with item index
        />
      ))}
    </div>
  )
}

export default Accordion
