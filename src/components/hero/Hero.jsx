import React from 'react'
import './hero.scss'
import Heroimage from '../../images/hero.jpg'
import { NavLink } from 'react-router-dom'

function Hero({title,text}) {
  return (
    <div className='hero'>
      <img className='hero-image' src={Heroimage} alt="" />
      <div className='text'>
        <h4>{title}</h4>
        <p>{text}</p>
        <NavLink to="/courses" className="navlink">
        <button>Explore Courses</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Hero