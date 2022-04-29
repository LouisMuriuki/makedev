import React, { useEffect, useState } from 'react'
import Coursecard from '../../components/cards/Coursecard'
import Navbar from '../../components/navbar/Navbar'
import Enrolledcourse from '../../components/cards/Enrolledcourse'
import "./courses.scss"
import { NavLink } from 'react-router-dom'
import {motion} from "framer-motion"

function Courses() {
  const [all, setAll] = useState(null)
  const [enrolled, setEnrolled] = useState(JSON.parse(localStorage.getItem("enrolledcourse")) || [])
  useEffect(() => {

    localStorage.setItem("enrolledcourse", JSON.stringify(enrolled))

  }, [enrolled])
  useEffect(() => {
    fetch('http://localhost:8000/Community').then(res => {
      return res.json()
    }).then(data => {
      setAll(data)
    })

  }, [])
  return (
    <motion.div className='courses'
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}>
      <Navbar />
      <h3>Enrolled Courses</h3>
      <div className='enrolled'>
        <NavLink to={`/courses/${enrolled[enrolled.length - 1]}`} className="navlink">
          {<Enrolledcourse Enrolled={enrolled} />}
        </NavLink>
      </div>
      <h3>All Courses</h3>
      <div className='all'>
        {all && <Coursecard Courses={all} setEnrolled={setEnrolled} />}
      </div>
    </motion.div>
  )
}

export default Courses