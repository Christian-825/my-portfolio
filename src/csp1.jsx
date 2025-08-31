import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Tools from './components/Tools'
import Contact from './components/Contact'
import FooterComponent from './components/FooterComponent'

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <About />
        
        <Projects />
        <Tools />
        <Contact />
      </main>
      <FooterComponent />
    </div>
  )
}
