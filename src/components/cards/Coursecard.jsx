import React, { useContext } from 'react'
import "./card.scss"
import { nanoid } from 'nanoid'
import CourseContext from '../../context/CourseContext'

function Coursecard({ Courses }) {
    const {enrolled}=useContext(CourseContext)
    const {setEnrolled}=useContext(CourseContext)
    const {setLink}=useContext(CourseContext)
   console.log(enrolled)
    return (
        <>
            {Courses && Courses.map(course => (
                <>
                    {course.courses && course.courses.filter(language=>!language.title.includes(enrolled.map(enroll=>enroll.title))).map(language => (

                        <div className="card">
                            <div className="top">
                                <img src={language.Img} alt="" className="image" />
                            </div>
                            <div className="bottom">
                                <div className="info">
                                    <p><b>Course:</b>{language.title}</p>
                                    <span><b>Difficulty:</b> {language.difficulty}</span>
                                </div>
                                <div className='add'>
                                    <p><b>Instructor: </b>{language.instructor}</p>
                                    <button  onClick={() => { setEnrolled(prev => [...prev,{id:nanoid(),title:language.title,Img:language.Img} ]);setLink(language.title) }}>Enroll</button>
                                </div>
                            </div>
                        </div>)
                    )}

                </>)
            )}
        </>

    )
}

export default Coursecard