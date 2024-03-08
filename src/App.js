import React from 'react'
import "./App.css"

import Hero from './components/Hero'
import Featured from './components/Featured'
import Contact from './components/Contact'
import Collection from './components/Collection'
import About from './components/About'
import Navbar from './components/Navbar'

const App = () => {
  return (

<>
<Navbar />

<Hero />
<About />
<Featured  />
<Collection />
<Contact />

  </>
  )
}

export default App
