import React from 'react'
import "./card.scss"

function Coursecard({ Courses }) {

    return (
        <>
            {Courses && Courses.map(course => (

                        < >
                            {course.courses && course.courses.map(language => (
                                <>
                                {language.trending ? (
                                    <div className="card">
                                    {console.log(language)}
                                        <div className="top">
                                            <img src={language.Img} alt="" className="image" />
                                        </div>
    
                                        <div className="bottom">
    
                                            <div className="add">
                                                <p><b>Course:</b>{language.title}</p>
                                                <span><b>Difficulty:</b> {language.difficulty}</span>
                                            </div>
                                            <p><b>Instructor: </b>{language.instructor}</p>
                                        </div>
                                    </div>
                                 ):null}
                                 </> )
                      
                            )}

                        </>)
            )}    
        </>
        )
}

export default Coursecard