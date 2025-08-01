
import './App.css'
import { Calculator } from './components/templates/Calculator'
import { HistoryOperations } from './components/templates/HistoryOperations'
import { CalculatorProvider } from './contexts/CalculatorContext'

function App() {

  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="flex flex-col justify-center py-12 gap-8 sm:py-0 sm:gap-16 sm:flex-row sm:items-stretch">
        <CalculatorProvider>
          <Calculator />
          <HistoryOperations />
        </CalculatorProvider>
      </main>
    </div>
  )
}

export default App    