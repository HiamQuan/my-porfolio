import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={HomePage}/>
        <Route path='/about' element={AboutPage}/>
      </Routes>
    </div>
  )
}

export default App
