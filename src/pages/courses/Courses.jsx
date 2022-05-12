import React, { useEffect, useState,useContext } from 'react'
import Coursecard from '../../components/cards/Coursecard'
import Navbar from '../../components/navbar/Navbar'
import Enrolledcourse from '../../components/cards/Enrolledcourse'
import "./courses.scss"
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion"
import CourseContext from '../../context/CourseContext'

function Courses() {
  const [all, setAll] = useState(null)

  const{link}=useContext(CourseContext)

  useEffect(() => {
    fetch('http://localhost:8000/Community').then(res => {
      return res.json()
    }).then(data => {
      setAll(data)
    })

  }, [])
  return (
    <motion.div className='courses'
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <Navbar />
      <h3>Enrolled Courses</h3>
      <div className='enrolled'>
        <NavLink to={`/courses/${link}`} className="navlink">
          {<Enrolledcourse />}
        </NavLink>
      </div>
      <h3>All Courses</h3>
      <div className='all'>
        {/* <NavLink to={`/courses/${link}`} className="navlink"> */}
          {all && <Coursecard Courses={all}/>}
        {/* </NavLink> */}
      </div>
    </motion.div>
  )
}

export default Courses