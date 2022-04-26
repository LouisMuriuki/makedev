import React from 'react'
import "./card.scss"

function Coursecard({ Courses }) {

    return (
        <>
            {Courses && Courses.map(course => (

                <div className="card" key={course.id}>
                    <div className="top">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg0KizZsbacUiCja9vMoHcTex3XwsVth9Ifw&usqp=CAU" alt="" className="image" />
                    </div>

                    <div className="bottom">
                        <div className="info">
                            <p><b>Course:</b>{course.title}</p>
                            <span><b>Difficulty:</b> {course.difficulty}</span>
                        </div>
                        <div className="add">
                        <p><b>Instructor: </b>{course.instructor}</p>
                        <button>Enroll now</button>
                        </div>
                        
                    </div>
                </div>)

            )}
        </>

    )
}

export default Coursecard