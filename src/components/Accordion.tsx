import { useState } from "react"
import type { AccordionItemType } from "../types"
import AccordionItem from "./AccordionItem"

interface Props {
  items: AccordionItemType[]
}

const Accordion = ({ items }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow rounded">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={index === openIndex}
          onClick={() => toggleItem(index)}
        />
      ))}
    </div>
  )
}

export default Accordion
