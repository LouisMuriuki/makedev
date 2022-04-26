import React from 'react'
import "./card.scss"

function Coursecard({ Courses }) {

    return (
        <>
            {Courses.map(course => (

                <>
                    {course.trending ? (
                        < div className="card">
                            <div className="top">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg0KizZsbacUiCja9vMoHcTex3XwsVth9Ifw&usqp=CAU" alt="" className="image" />
                            </div>

                            <div className="bottom">
                                <div className="add">
                                    <p><b>Course:</b>{course.title}</p>
                                    <span><b>Difficulty:</b> {course.difficulty}</span>
                                </div>
                                <p><b>Instructor: </b>{course.instructor}</p>
                            </div>
                        </div>)
                        : null}


                </>)

            )}
        </>

    )
}

export default Coursecard