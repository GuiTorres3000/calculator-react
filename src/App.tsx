
import './App.css'
import { Calculator } from './components/templates/Calculator'
import { HistoryOperations } from './components/templates/HistoryOperations'

function App() {

  return (
    <div>
      <main className="flex flex-col justify-center gap-16 sm:flex-row sm:items-stretch sm:translate-y-1/5">
        <Calculator />
        <HistoryOperations />
      </main>
    </div>
  )
}

export default App    