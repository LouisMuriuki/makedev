import React from 'react'
import "./header.scss"

function Miniheader({setInfo, setProjects}) {
  return (
    <div className='header'>
            <div className='container'>
                    <button onClick={()=>{setInfo(true);setProjects(false)}}>
                        {/* {console.log(prev)} */}
                        Course Details
                    </button>
                    <button onClick={()=>{setProjects(true);setInfo(false)}}>
                        Projects
                    </button>
            </div>
        </div>
  )
}

export default Miniheader