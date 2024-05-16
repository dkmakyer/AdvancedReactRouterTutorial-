import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HostLayout = () => {
    const activeLink = {
        fontWeight: "bold",
        textDecoration : "underline",
        color : "#161616"
    } 
    
    return (
        <>
            <nav className='host-nav'>
                <NavLink style={({isActive})=>isActive ? activeLink : null} to="/host" end>Dashboard</NavLink>
                <NavLink style={({isActive})=>isActive ? activeLink : null} to="/host/income">Income</NavLink>
                <NavLink style={({isActive})=> isActive ? activeLink : null} to="/host/vans">Host</NavLink>
                <NavLink style={({isActive})=>isActive ? activeLink : null} to="/host/reviews">Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default HostLayout
