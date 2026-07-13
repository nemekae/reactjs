import { Header } from './components/Header'
import { Concepts } from './components/Concepts'
import { coreObj } from '../src/data.js'

function App() {
  return (
    <>
      <Header />
      <main>
        <section id='core-concepts'>
            <h2>Core Concepts</h2>
            <ul>
                <Concepts {...coreObj[0]} />
                <Concepts {...coreObj[1]} />
                <Concepts {...coreObj[2]} />
                <Concepts {...coreObj[3]} />   
            </ul>
        </section>
      </main>

    </>
  )
}

export default App
