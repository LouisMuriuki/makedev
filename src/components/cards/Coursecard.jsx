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
                        <div className="same">
                            <p>Course: {course.title}</p>
                            <span>Difficulty: {course.difficulty}</span>
                        </div>
                        <p>Instructor: {course.instructor}</p>
                    </div>
                </div>)

            )}
        </>

    )
}

export default Coursecard