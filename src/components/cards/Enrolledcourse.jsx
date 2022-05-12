import React, { useContext } from 'react'
import CourseContext from '../../context/CourseContext'

function Enrolledcourse() {
    const{enrolled}=useContext(CourseContext)
  return (
    <>
    {enrolled && enrolled.map(enroll=>(
       <div className="card" key={enroll.id}>
   <div className="top">
       <img src={enroll.Img} alt="" className="image" />
   </div>
   <div className="bottom">
       <div className="add">
           <p><b>Course:</b>{enroll.title}</p>
       </div>
   </div>
</div>
    ))}
   
</>     
  )
}

export default Enrolledcourse