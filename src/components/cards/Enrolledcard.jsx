import React from 'react'
import "./card.scss"

function Enrolledcard({Enrolled}) {
    return (
        <>
         {Enrolled && Enrolled.map(enroll=>(
            <div className="card" >
        <div className="top">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg0KizZsbacUiCja9vMoHcTex3XwsVth9Ifw&usqp=CAU" alt="" className="image" />
        </div>
        <div className="bottom">
            <div className="add">
                <p>Community:{enroll}</p>
            </div>
        </div>
    </div>
         ))}
        
    </>     
    )}
                        
               
    


export default Enrolledcard