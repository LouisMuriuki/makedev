import React, { useContext} from 'react'
import "./card.scss"
import { nanoid } from 'nanoid'
import CourseContext from '../../context/CourseContext'

function Coursecard({ Courses }) {
    const { enrolled } = useContext(CourseContext)
    const { setEnrolled } = useContext(CourseContext)
    const { setLink } = useContext(CourseContext)
    console.log(enrolled)

    const{title}=useContext(CourseContext)
    
    return (
        <>
            {Courses && Courses.map(course => (
                <>
                    {course.courses && course.courses.map(language => (

                        <div className="card" key={language.id}>
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
                                    {language.title.includes(title)?<button disabled>Enrolled</button>:<button onClick={() => {setEnrolled(prev => [...prev, { id: nanoid(), title: language.title, Img: language.Img }]); setLink(language.title)}}>Enroll</button>}
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