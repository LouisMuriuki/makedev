import React, { useState, useEffect } from 'react'
import Communitycard from '../../components/cards/Communitycard'
import Coursecard from '../../components/cards/Coursecard'
import Hero from '../../components/hero/Hero'
import Navbar from '../../components/navbar/Navbar'
import "./home.scss"

function Home() {
  const [courses, setCourses] = useState()
  const [communities,setCommunities]=useState()

  useEffect(() => {
    fetch('http://localhost:8000/courses').then(res => {
      return res.json()
    }).then(data => {
      console.log(data)
      setCourses(data[0].web)
      setCommunities(data[0].web.community) 
      // setCommunities(...communities, data[1].mobileDevelopment)
      // setCommunities(...communities, data[2].dataScience)
      console.log(communities)
      
    })

  }, [])
  return (
    <div className='home'>
      <Navbar />
      <Hero />
      <div className="communities">
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
      {communities && <Communitycard Communities={communities} />}
      <div className="trending">
        <h3>Trending Courses</h3>
        <div className="courses">
          {courses && <Coursecard Courses={courses} />}
        </div>
      </div>
    </div>
  )
}

export default Home