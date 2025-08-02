import type { AccordionItemType } from "../types"

interface Props {
  item: AccordionItemType
  isOpen: boolean
  onClick: () => void
}

const AccordionItem = ({ item, isOpen, onClick }: Props) => {
  return (
    <div className="border-b border-gray-300">
      <button
        className="w-full text-left p-4 font-semibold bg-gray-100 hover:bg-gray-200 transition"
        onClick={onClick}
      >
        {item.title}
      </button>
      {isOpen && (
        <div className="p-4 bg-white text-gray-700">
          {item.content}
        </div>
      )}
    </div>
  )
}

export default AccordionItem
