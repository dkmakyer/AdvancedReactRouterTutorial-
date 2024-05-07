import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Vans from './pages/Vans'
import VanDetail from './pages/VanDetail'
import Layout from './components/Layout'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
            <Route path="/host" element={<Dashboard/>}/>
            <Route path="/host/income" element={<Income/>}/>
            <Route path="/host/reviews" element={<Reviews/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
