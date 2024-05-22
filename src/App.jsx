import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Vans from './pages/Vans'
import VanDetail from './pages/VanDetail'
import Layout from './components/Layout'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import HostLayout from './components/HostLayout'
import HostVans from './pages/host/HostVans'
import HostVanDetail from './pages/host/HostVanDetail'
import HostVanPricing from './pages/host/HostVanPricing'
import HostVanPhotos from './pages/host/HostVanPhotos'
import HostVanInfo from './pages/host/HostVanInfo'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />}></Route>
                <Route path="pricing" element={<HostVanPricing />}></Route>
                <Route path="photos" element={<HostVanPhotos />}></Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
