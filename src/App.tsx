import Accordion from "./components/Accordion"
import { accordionData } from "./data/accordionData"

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Frequently asked questions</h1>
      <Accordion items={accordionData} />
    </div>
  )
}

export default App
