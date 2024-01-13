import { Routes, Route } from 'react-router-dom'
import AnimatedCursor from "react-animated-cursor"
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Play from './pages/Play'
import Contact from './pages/Contact'

function App() {

  return (
    <>
    <AnimatedCursor
  innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: 'var(--cursor-color)'
  }}
  outerStyle={{
    border: '3px solid var(--cursor-color)'
  }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/play' element={<Play />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
