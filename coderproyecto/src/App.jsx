import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from './components/ItemlistContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>comida rapida</h1>
      <Navbar/>
      <ItemListContainer />
    </>
  )
}

export default App
