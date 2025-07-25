
import './App.css'
import { Button } from './components/Button'
import { Text } from './components/Text'

function App() {

  return (
    <div>
      <main className='py-28 px-4'>
        <Button>oi</Button>

        <Text as="button" variant="heading" className='bg-red'>
          children
        </Text>
      </main>

    </div>
  )
}

export default App
