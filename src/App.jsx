import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Features from './Components/Features'
import Advantage from './Components/Advantage'
import Customizable from './Components/Customizable'
import UserTestimonails from './Components/UserTestimonails'
import FAQ from './Components/FAQ'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <Advantage />
      <Customizable />
      <UserTestimonails />
      <FAQ />
      <Footer />
    </>
  )
}
const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
