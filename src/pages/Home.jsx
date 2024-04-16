import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <>
      <div className='home-container'>
        <h1>Welcome back to the home page</h1>
        <p>Add adventure to your life by joining the #vanlife movement</p>
        <Link to="vans">Find your van</Link>
      </div>
    </>
  )
}

export default Home
