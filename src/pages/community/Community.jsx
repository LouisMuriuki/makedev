import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import CommunityCard from '../../components/cards/Communitycard'
import Enrolledcard from '../../components/cards/Enrolledcard'
import Navbar from '../../components/navbar/Navbar'
import './community.scss'



function Community() {
  const [communities, setCommunities] = useState()
  const [enrolled, setEnrolled] = useState(JSON.parse(localStorage.getItem("enrolled"))||[])
  const [id,setId]=useState()

  useEffect(()=>{

localStorage.setItem("enrolled",JSON.stringify(enrolled))

  },[enrolled])

  useEffect(()=>{
    const check = localStorage.getItem('enrolled')
    setEnrolled(JSON.parse(check))
  },[enrolled])

  useEffect(() => {
    fetch('http://localhost:8000/Community').then(res => {
      return res.json()
    }).then(data => {
console.log(data)
setCommunities(data)


    })

  }, [])
//   const [enrolled , setEnrolled]=useState()

//  const handleClick=()=>{
//     setEnrolled()
//   }
  return (
    <div className='community'>
      <Navbar/>
      <h3>Your Communities:</h3>
      <div className='enrolled'>
        <NavLink to ={`/community/${enrolled[enrolled.length-1]}`} className="navlink">
      {<Enrolledcard Enrolled={enrolled} />}
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
          {communities && <CommunityCard Communities={communities} setEnrolled={setEnrolled} setid={setId}/>}
        </div>
      </div>
    </div>
  )
}

export default Community