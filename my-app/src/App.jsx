import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Welcome</h1>
        <img src="./src/assets/doctor.webp" alt="doctor"/>
      </div>
      
    </>
  )
}

export default App
