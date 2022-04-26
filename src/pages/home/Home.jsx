import React, { useState, useEffect } from 'react'
import Communitycard from '../../components/cards/Communitycard'
import Trendingcard from '../../components/cards/Trendingcard'
import Hero from '../../components/hero/Hero'
import Navbar from '../../components/navbar/Navbar'
import "./home.scss"
import { community } from '../../Community'

function Home() {
  const [courses, setCourses] = useState()
  const [communities, setCommunities] = useState(community)

  useEffect(() => {
    fetch('http://localhost:8000/Courses').then(res => {
      return res.json()
    }).then(data => {

      setCourses(data)


    })

  }, [])
  return (
    <div className='home'>
      <Navbar />
      <Hero />
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
          {community && <Communitycard Communities={community} />}
        </div>
        <h3>Trending Courses</h3>
        <div className="trending">
          {courses && <Trendingcard Courses={courses} />}
        </div>
      </div>
    </div>
  )
}

export default Home