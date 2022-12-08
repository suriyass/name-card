import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Profile from './components/profile'
import Footer from './components/Footer'
import Content from './components/Content'

function App() {
  return (
    <div className='bg-div'>
      <Profile />
      <Content />
      <Footer />
      </div>
  )
}

export default App
