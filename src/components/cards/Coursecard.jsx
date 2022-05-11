import React from 'react'
import "./card.scss"

function Coursecard({ Courses, setEnrolled,setLink }) {

    return (
        <>
            {Courses && Courses.map(course => (
                <>
                    {course.courses && course.courses.map(language => (
                        <div className="card">
                            {console.log(language)}
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
                                    <button  onClick={() => { setEnrolled(prev => [...prev, language.title]);setLink(language.title) }}>Enroll</button>
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