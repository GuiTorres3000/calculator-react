
import './App.css'
import Text from './components/Text'

function App() {

  return (
    <div>
      <main className='py-28 px-4'>
        <div>
        <Text variant="heading" className="text-red-500" onClick={() => console.log('Texto clicado!')}>
          Este é um título
        </Text>
        <br/>

        <Text variant="muted" className="italic">
          Texto com estilo secundário e itálico.
        </Text>
        <br/>
        <span className='text-xl text-red-500'>acho que eu sei o problema guys</span>
    </div>
      </main>

    </div>
  )
}

export default App    