import React, { useState, useEffect } from 'react'
import Trendingcard from '../../components/cards/Trendingcard'
import Hero from '../../components/hero/Hero'
import Navbar from '../../components/navbar/Navbar'
import "./home.scss"
import {motion} from "framer-motion"
import { NavLink } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DoneIcon from '@mui/icons-material/Done';


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
          <li><span><DoneIcon/></span> Access to relevant courses</li>
          <li><span><DoneIcon/></span> Work on projects together with other developers</li>
          <li><span><DoneIcon/></span> Ask relevant questions and get answers Questions </li>
          <li><span><DoneIcon/></span> Engage in coding Challenges</li>
          <li><span><DoneIcon/></span> Attend Webinars</li>
        </ul>
        <p>What are you waiting for join a community today</p>
        <NavLink to="/community" className="navlink">
          <p>Join a Community<ArrowForwardIcon/></p>
        </NavLink>
      </div>
      <div className='cards'>
        <h2>Trending Courses</h2>
        <div className="trending">
          {courses && <Trendingcard Courses={courses} />}
        </div>
      </div>
    </motion.div>
  )
}

export default Home