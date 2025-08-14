import React from 'react'
import { Contact, Header, Footer, Home, About, Services, HowWeWork } from './components'
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
    <Header/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/howWeWork" element={<HowWeWork />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App