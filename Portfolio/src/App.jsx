import { useState } from 'react'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'
import About from './assets/components/NavElement/About'
import Skills from './assets/components/NavElement/Skills'
import Projects from './assets/components/NavElement/Projects'
import Contact from './assets/components/NavElement/Contact'

function App() {


  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
