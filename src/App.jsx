import { useState } from 'react'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/home"
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import Projects from "./pages/Projects"


function App() {
 

  return (
    
      <Routes>
        <Route path="/" element={<Landing />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />}/>
        
      </Routes>
    
  )
    
}

export default App
