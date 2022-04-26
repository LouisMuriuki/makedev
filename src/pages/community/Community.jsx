import React from 'react'
import CommunityCard from '../../components/cards/Communitycard'
import Navbar from '../../components/navbar/Navbar'
import './community.scss'
import { community } from '../../Community'
import Hero from '../../components/hero/Hero'


function Community() {
  return (
    <div className='community'>
      <Navbar />
      <Hero />
      <h3>Your Communities:</h3>
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
          {community && <CommunityCard Communities={community} />}
        </div>
      </div>
    </div>
  )
}

export default Community