import React, { useEffect, useState } from 'react'
import "./card.scss"

function CommunityCard({ Communities }) {

  return (
    <>
      {Communities && Communities.map(course => (

        <div className="card" key={course.id}>
          <div className="top">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg0KizZsbacUiCja9vMoHcTex3XwsVth9Ifw&usqp=CAU" alt="" className="image" />
          </div>

          <div className="bottom">
            <div className="same">
              <p>Community: {course.community}</p>
            </div>
          </div>
        </div>)

      )}
    </>
  )
}
export default CommunityCard