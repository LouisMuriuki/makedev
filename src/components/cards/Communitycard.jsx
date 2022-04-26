import React, { useEffect, useState } from 'react'
import "./card.scss"

function CommunityCard({ Communities }) {
console.log(Communities)
  return (
    <>
      {Communities && Communities.map(community=> (

        <div className="card" key={community.id}>
          <div className="top">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg0KizZsbacUiCja9vMoHcTex3XwsVth9Ifw&usqp=CAU" alt="" className="image" />
          </div>
          <div className="bottom">
            <div className="add">
              <p>Community:{community.communityname}</p>
              <button>Join</button>
            </div>
          </div>
        </div>)

      )}
    </>
  )
}
export default CommunityCard