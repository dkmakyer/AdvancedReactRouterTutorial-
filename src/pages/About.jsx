import React from 'react'
import bgImg from "../assets/images/about-hero.png"
import {Link} from "react-router-dom"

const About = () => {
  return (
    <div className='about-page-container'>
      <img src={bgImg} className='about-hero-image' />
      <div className="about-page-content">
        <h1>Don't squeeze in a sedan when you could relax in a van</h1>
        <p>Our mission is to enliven your road trip with the vans are recertified before each trip to ensure your without a hitch. Hitch costs extra</p>
      </div>
      <div className="about-page-cta">
        <h2>your destination is waiting<br/>your van is ready</h2>
        <Link className='link-button' to="/vans">Explore our vans</Link>
      </div>
    </div>
  )
}

export default About