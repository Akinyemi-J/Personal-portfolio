import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import BeyondTheCode from './components/BeyondTheCode'
import Footer from './components/Footer'
import Contact from './components/Contact'


function App() {

  return (
    <div className="bg-[#0B0A0F] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <BeyondTheCode/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
