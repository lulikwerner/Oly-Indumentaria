import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './components/Item/Item'
import CustomContainer from './components/Container/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <CustomContainer/>
   
    </>
  )
}

export default App
