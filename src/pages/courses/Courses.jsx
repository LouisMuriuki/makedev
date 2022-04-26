import React, { useEffect, useState } from 'react'
import Coursecard from '../../components/cards/Coursecard'
import Navbar from '../../components/navbar/Navbar'
import "./courses.scss"

function Courses() {
  const [all ,setAll]=useState(null)
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
      <h3>Courses</h3>
      <div className='all'>
      <Coursecard Courses={all}/>
      </div>
    </div>
  )
}

export default Courses