import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login'
import Signup from './components/signup'
import Navbar from './components/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import StateBasic from './components/StateBasic'
import Counter from './components/Counter'
import Nameing from './components/Nameing'
import Api from './components/Api'
import Poke from './components/Poke'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/state' element={<StateBasic />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/namebutton' element={<Nameing />} />
        <Route path='/appi' element={<Api />} />
        <Route path='/poke'element={<Poke/>}/>
      </Routes>

      
      
      
    </>
  )
}

export default App
