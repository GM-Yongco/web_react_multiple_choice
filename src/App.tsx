// REACT STUFF
import { BrowserRouter, Route, Routes , Link} from 'react-router-dom'
import { useState } from 'react'

// ROUTING
import MultipleChoice from './multiple_choice.tsx'
import Initial from './initial.tsx'
import LayerOne from './layers.tsx'
import LayerThree from './layer3.tsx'

// PAGE SPECIFIC
import './App.css'

function App() {

  // using these on the components is called drilling
  // learn use_context to prevent prop driling for later
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <nav>
          <p>permanent nav bar</p>
          <ul>
            <li><Link to = "/">home</Link></li>
            <li><Link to = "/multiple_choice">multiple_choice</Link></li>
            <li><Link to = "/layers">layers</Link></li>
            <li><Link to = "/layer3">layer3</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="/multiple_choice" element={<MultipleChoice />} />
          <Route path="/layers" element={<LayerOne count={count} setCount={setCount}/>} />
          <Route path="/layer3" element={<LayerThree count={count} setCount={setCount}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
