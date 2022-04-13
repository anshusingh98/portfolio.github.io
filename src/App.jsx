import React from 'react'
import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Projects from './components/projects/Projects'
import Contacts from './components/contacts/Contacts'
import "./app.scss"

function App() {
  return (
  
    <div className='app'>
      <Topbar />
      <div className='sections'>
        <Intro />
       <Portfolio />
       <Projects />
       <Contacts />
      </div>
    </div>
  )
}

export default App