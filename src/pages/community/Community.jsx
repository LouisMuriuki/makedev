import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import CommunityCard from '../../components/cards/Communitycard'
import Enrolledcommunity from '../../components/cards/Enrolledcommunity'
import Navbar from '../../components/navbar/Navbar'
import './community.scss'
import { motion } from "framer-motion"


function Community() {
  const [communities, setCommunities] = useState()
  const [enrolled, setEnrolled] = useState(JSON.parse(localStorage.getItem("enrolledcommunity")) || [])
  let params = useParams()
  console.log(params)
  useEffect(() => {

    localStorage.setItem("enrolledcommunity", JSON.stringify(enrolled))

  }, [enrolled])

  const [link, setLink] = useState(JSON.parse(localStorage.getItem("communitylink")) || [])
  useEffect(() => {

    localStorage.setItem("communitylink", JSON.stringify(link))

  }, [link])

  useEffect(() => {
    fetch('http://localhost:8000/Community').then(res => {
      return res.json()
    }).then(data => {
      console.log(data)
      setCommunities(data)


    })

  }, [])

  return (
    <motion.div className='community'
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <Navbar />
      <h3>Your Communities:</h3>
      <div className='enrolled'>
        <NavLink to={`/community/${link}`} className="navlink">
          {<Enrolledcommunity Enrolled={enrolled} />}
        </NavLink>
      </div>
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
      </div>
      <div className='cards'>
        <h3>Join a community:</h3>
        <div className='communitycard'>
          {communities && <CommunityCard Communities={communities} setEnrolled={setEnrolled} setLink={setLink} />}
        </div>
      </div>
    </motion.div>
  )
}

export default Community