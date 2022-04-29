import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.scss'

function Header({setPosts,setQuestions,setSpaces,setProjects}) {
    
    return (
        <div className='header'>
            <div className='container'>
                    <button onClick={()=>{setPosts(true);setSpaces(false);setQuestions(false)}}>
                        {/* {console.log(prev)} */}
                        Posts
                    </button>
                    <button onClick={()=>{setQuestions(true);setSpaces(false);setPosts(false)}}>
                        Questions
                    </button>

                    <button onClick={()=>{setSpaces(true);setPosts(false);setQuestions(false)}}>
                        Space
                    </button>
            </div>
        </div>
    )
}

export default Header