import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Goals from './components/Goals'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
    <main className="text-gray-400 bg-gray-900 body-font">
    <Navbar/>
    <About/>
    <Projects/>
    <Skills/>
    <Goals/>
    <Contact/>
    </main>
     </>
  )
}

export default App
