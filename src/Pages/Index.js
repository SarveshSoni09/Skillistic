import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Index = () => {
  return (
    <div id='index-body'>
      <Navbar />
      <div id="index-hero">
        <div class="landing">
          <div id="hero-content">
            <p>You have amazing skills but...</p>
            <p>Are they verified ?</p>
            <p>Here's your one stop to get the Skills Verified.</p>
            <p>Now get Job Offers quicker than ever.</p>
            <p>Only with Skillistic</p>
          </div>   
          <div id="hero-links">
            <Link to="/Login" className='glass-btn'>
              Sign In
            </Link>
            <Link to="/Signup" className='glass-btn'>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index