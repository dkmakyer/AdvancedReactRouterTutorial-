import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HostVanLayout = () => {
  return (
    <div>
        <nav>
            <Link to=".">Details</Link>
            <Link to="pricing">Pricing</Link>
            <Link to="photos">Photos</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default HostVanLayout
