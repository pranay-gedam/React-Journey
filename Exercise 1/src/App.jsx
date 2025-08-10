import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Card/>
    </>
  )
}

export default App
