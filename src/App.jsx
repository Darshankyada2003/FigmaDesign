import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Features from './Components/Features'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Navbar />
      <Home />
      <Features />
    </div>
  )
}

export default App
