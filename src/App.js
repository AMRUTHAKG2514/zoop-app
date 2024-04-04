import React from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Tag from "./components/pages/tag"
function App() {
  return (
    <>
    <Router>
      < Navbar />
      <Routes>
        <Route path='/' exact />
        <Route path='/tag'element={<Tag/>} />
      </Routes>
      < Footer />
    </Router>
        
         
    </>
  )
}

export default App
