import { useState } from 'react'
import { Header } from './components/Header'
import { Concepts } from './components/Concepts'
import { TabButton } from './components/TabButton'
import { coreObj, responses } from '../src/data.js'

function App() {

  const [choice, setChoice] = useState('components')

  const handleClick = (selectedBtn) => {
        setChoice(selectedBtn)
  }

  return (
    <>
      <Header />
      <main>
        <section id='core-concepts'>
            <h2>Core Concepts</h2>
            <ul>
              {coreObj.map((item) => 
                <Concepts key={item.title} {...item}/>
              )}  
            </ul>
        </section>
        <section id='examples'>
            <h2>Examples</h2>
            <menu>
                <TabButton 
                  isSelected={choice === 'components'} 
                  onSelect={() => handleClick('components')}
                >
                    Components
                </TabButton>

                <TabButton 
                  isSelected={choice === 'jsx'} 
                  onSelect={() => handleClick('jsx')}
                >
                    JSX
                </TabButton>

                <TabButton 
                  isSelected={choice === 'props'} 
                  onSelect={() => handleClick('props')}
                >
                    Props
                </TabButton>
                
                <TabButton 
                  isSelected={choice === 'state'} 
                  onSelect={() => handleClick('state')}
                >
                    State
                </TabButton>
            </menu>

            {!choice ? <p>Please select a topic:</p> :
            (
                <div id="tab-content">
                  <h3>{responses[choice].title}</h3>
                  <p>{responses[choice].description}</p>
                  <pre>
                    <code>{responses[choice].code}</code>
                  </pre>
                </div>
            )}
            
        </section>
      </main>
    </>
  )
}

export default App
