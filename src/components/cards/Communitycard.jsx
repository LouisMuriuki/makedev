import React from 'react'
import "./card.scss"

function CommunityCard({ Communities, setEnrolled,setLink}) {
console.log(Communities)

  return (
    <>
      {Communities && Communities.map(community=> (

        <div className="card" key={community.id}>
          <div className="top">
            <img src={community.Img} alt="" className="image" />
          </div>
          <div className="bottom">
            <div className="add">
              <p><b>Community:</b>{community.communityname}</p>
              <button  onClick={()=>{setEnrolled(prev=>[...prev,community.communityname]);setLink(community.communityname)}}>Join</button>
              {console.log(community.id)}
            </div>
          </div>
        </div>)

      )}
    </>
  )
}
export default CommunityCard