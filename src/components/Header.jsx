import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
    const active = {
        fontWeight : "bold",
        textDecoration : "underline",
        color: "#161616"
    };
    
    return (
        <div>
            <header>
                <Link to="/">#VANLIFE</Link>
                <nav>
                    <NavLink style={({isActive})=> isActive ? active : null} to="/host">Host</NavLink>
                    <NavLink style={({isActive})=> isActive ? active : null} to="/">Home</NavLink>
                    <NavLink style={({isActive})=> isActive ? active : null} to="/about">About</NavLink>
                    <NavLink style={({isActive})=> isActive ? active : null} to="/vans">Vans</NavLink>
                </nav>
            </header>
        </div>
    )
}

export default Header
