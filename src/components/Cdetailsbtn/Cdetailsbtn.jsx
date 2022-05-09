import React from 'react'
import "./cdetailsbtn.scss"
import Cdetailscontext from "../../Cdetailscontext"
import {useContext} from 'react'

function Cdetailsbtn() {
  const{overviewClick}=useContext(Cdetailscontext)
    const{curriculumClick}=useContext(Cdetailscontext)
    const{instructorClick}=useContext(Cdetailscontext)
    const{reviewClick}=useContext(Cdetailscontext)
  return (
    <div className="cdetailsbtn">
        <div className="buttons">
            <button onClick={()=>{overviewClick()}}>Overview</button>
            <button onClick={()=>{curriculumClick()}}>Curriculum</button>
            <button onClick={()=>{instructorClick()}}>Instructor</button>
            <button onClick={()=>{reviewClick()}}>Reviews</button>
        </div>
    </div>
  )
}

export default Cdetailsbtn