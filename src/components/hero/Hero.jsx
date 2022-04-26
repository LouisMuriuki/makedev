import React from 'react'
import './hero.scss'
import Heroimage from '../../images/hero.jpg'
import { NavLink } from 'react-router-dom'

function Hero() {
  return (
    <div className='hero'>
      <img className='hero-image' src={Heroimage} alt="" />
      <div className='text'>
        <h4>Learning That gets you</h4>
        <p>Skills for your present and future.Get started with us </p>
        <NavLink to="/courses">
        <button>Explore Courses</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Hero