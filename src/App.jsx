import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Features from './Components/Features'
import Advantage from './Components/Advantage'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Navbar />
      <Home />
      <Features />
      <Advantage />
    </div>
  )
}

export default App
