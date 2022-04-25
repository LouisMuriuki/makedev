import React from 'react'
import './hero.scss'
import Heroimage from '../../images/hero.jpg'

function Hero() {
  return (
    <div className='hero'>
      <img className='hero-image' src={Heroimage} alt="" />
      <div className='text'>
        <h4>Learning That gets you</h4>
        <p>Skills for your present and future.Get started with us </p>
        <button>Explore Courses</button>
      </div>
    </div>
  )
}

export default Hero