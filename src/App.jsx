import { useState } from 'react'
import React from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
        <h1>Hello, Bootstrap with Vite!</h1>
        <button className="btn btn-primary">Click Me</button>
      </div>
  )
}

export default App
