import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SistemaBancario from './SistemaBancario.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <SistemaBancario />
      </div>
    </>
  )
}

export default App
