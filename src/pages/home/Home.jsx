import React, { useState, useEffect } from 'react'
import Trendingcard from '../../components/cards/Trendingcard'
import Hero from '../../components/hero/Hero'
import Navbar from '../../components/navbar/Navbar'
import "./home.scss"
import {motion} from "framer-motion"
import { NavLink } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Home() {
  const [courses, setCourses] = useState()
  

  useEffect(() => {
    fetch('http://localhost:8000/Community').then(res => {
      return res.json()
    }).then(data => {
console.log(data)
      setCourses(data)


    })

  }, [])
  return (
    <motion.div className='home'
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}>
      <Navbar />
      <Hero title="Learning That gets you" text="Skills for your present and future.Get started with us"/> 
      <div className="details">
        <h3>Communities</h3>
        <p>Join a community today and get access to free resources including but not limited to the below mentioned.</p>
        <ul>
          <li>Access to relevant courses</li>
          <li>Work on projects together with other developers</li>
          <li>Ask relevant questions and get answers Questions </li>
          <li>Engage in coding Challenges</li>
          <li>Attend Webinars</li>
        </ul>
        <p>What are you waiting for join a community today</p>
        <NavLink to="/community" className="navlink">
          <p>Go to Community<ArrowForwardIcon/></p>
        </NavLink>
      </div>
      <div className='cards'>
        <h3>Trending Courses</h3>
        <div className="trending">
          {courses && <Trendingcard Courses={courses} />}
        </div>
      </div>
    </motion.div>
  )
}

export default Home