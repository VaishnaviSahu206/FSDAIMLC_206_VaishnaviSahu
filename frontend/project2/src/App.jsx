import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  // convert to uppercase
  const handleUppercase = () => {
    setText(text.toUpperCase())
  }

  // convert to lowercase
  const handleLowercase = () => {
    setText(text.toLowerCase())
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <div>
          <h1>Text Converter</h1>

          {/* TEXTBOX */}
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your text here..."
            rows="4"
            cols="40"
          />

          <br /><br />

          {/* BUTTONS */}
          <button onClick={handleUppercase}>UPPERCASE</button>
          <button onClick={handleLowercase} style={{ marginLeft: "10px" }}>
            lowercase
          </button>

          <p>Preview: {text}</p>
        </div>

        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  )
}

export default App