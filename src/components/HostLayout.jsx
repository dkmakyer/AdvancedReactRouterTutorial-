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
                <NavLink style={({isActive})=>isActive ? activeLink : null} to="." end>Dashboard</NavLink>
                {/* the "." tells the program to use the path of the currnt parent route as the path for the dashboard page. therefore going to the grand parent route can be done with ".." */}
                <NavLink style={({isActive})=>isActive ? activeLink : null} to="income">Income</NavLink>
                <NavLink style={({isActive})=> isActive ? activeLink : null} to="vans">Host</NavLink>
                <NavLink style={({isActive})=>isActive ? activeLink : null} to="reviews">Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default HostLayout
