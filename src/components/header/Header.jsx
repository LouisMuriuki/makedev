import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.scss'

function Header({setPosts,setQuestions,setArticles,setProjects}) {
    
    return (
        <div className='header'>
            <div className='container'>
                    <button onClick={()=>{setPosts(true);setQuestions(false);setProjects(false)}}>
                        {/* {console.log(prev)} */}
                        Posts
                    </button>
                    <button onClick={()=>{setQuestions(true);setPosts(false);setProjects(false)}}>
                        Questions
                    </button>

                    <button onClick={()=>{setProjects(true);setPosts(false);setQuestions(false)}}>
                        Projects
                    </button>
            </div>
        </div>
    )
}

export default Header