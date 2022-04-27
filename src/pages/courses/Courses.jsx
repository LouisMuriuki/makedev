import React, { useEffect, useState } from 'react'
import Coursecard from '../../components/cards/Coursecard'
import Navbar from '../../components/navbar/Navbar'
import Enrolledcourse from '../../components/cards/Enrolledcourse'
import "./courses.scss"

function Courses() {
  const [all ,setAll]=useState(null)
  const [enrolled, setEnrolled] = useState(JSON.parse(localStorage.getItem("enrolledcourse"))||[])
  useEffect(()=>{

    localStorage.setItem("enrolledcourse",JSON.stringify(enrolled))
    
      },[enrolled])
  useEffect(() => {
    fetch('http://localhost:8000/Community').then(res => {
      return res.json()
    }).then(data => {
      setAll(data)
      // setCommunities(data[0].web.community) 
      // setCommunities(...communities, data[1].mobileDevelopment)
      // setCommunities(...communities, data[2].dataScience)
      
      
    })

  }, [])
  return (
    <div className='courses'>
      <Navbar/>
      <h3>Enrolled Courses</h3>
      <Enrolledcourse Enrolled={enrolled}/>
      <h3>All Courses</h3>
      <div className='all'>
      {all &&<Coursecard Courses={all} setEnrolled={setEnrolled} />}
      </div>
    </div>
  )
}

export default Courses