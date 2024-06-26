import { useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Home } from './pages/Home'
import { Footer } from './components/footer/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
