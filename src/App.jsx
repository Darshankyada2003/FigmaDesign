import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Features from './Components/Features'
import Advantage from './Components/Advantage'
import Customizable from './Components/Customizable'
import UserTestimonails from './Components/UserTestimonails'
import FAQ from './Components/FAQ'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Navbar />
      <Home />
      <Features />
      <Advantage />
      <Customizable />
      <UserTestimonails />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
