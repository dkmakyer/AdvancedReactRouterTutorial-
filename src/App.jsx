import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Vans from './pages/Vans'
import VanDetail from './pages/VanDetail'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Link to="/">#VANLIFE</Link>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans/>}/>
          <Route path="/vans/:id" element={<VanDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
