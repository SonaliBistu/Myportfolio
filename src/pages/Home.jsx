import React from 'react'
import Hero from '../components/hero'
import About from '../components/about'
import Education from '../components/education'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Education />  
      <Skills/> 
      <Projects/> 
      <Contact/> 
      <footer/> {/* ✅ ADD THIS */}
    </div>
  )
}

export default Home