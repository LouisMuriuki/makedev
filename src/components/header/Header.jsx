import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.scss'

function Header() {
  return (
    <div className='header'>
        <div className='container'>
            <ul>
                <NavLink to="" className="navlink">
                <li>
                    posts
                </li>
                </NavLink>
            </ul>
            <ul>
                <NavLink to="" className="navlink">
                <li>
                    Questions
                </li>
                </NavLink>
            </ul>
            <ul>
                <NavLink to="" className="navlink">
                <li>
                    Articles
                </li>
                </NavLink>
            </ul>
            <ul>
                <NavLink to="" className="navlink">
                <li>
                    Projects
                </li>
                </NavLink>
            </ul>
        </div>
    </div>
  )
}

export default Header