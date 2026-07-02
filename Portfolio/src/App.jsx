import { useState } from 'react'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'
import About from './assets/components/NavElement/About'
import Skills from './assets/components/NavElement/skills'
import Project from './assets/components/NavElement/Project'
import Contact from './assets/components/NavElement/Contact'
import Home from './assets/components/NavElement/Home'

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
