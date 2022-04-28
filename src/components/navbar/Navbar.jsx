import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
function Navbar() {

  const [drop, setDrop] = useState(false)

  const toggledrop = () => {
    setDrop(!drop)

  }

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink to="/" className="nav-links">
            <h5 className="nav-link">MakeDev</h5>
          </NavLink>
        </div>
        <div className='links'>
          <ul>
            <li>
              <NavLink to="/courses" className="nav-links">
                Courses
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/community" className="nav-links">
                Community
              </NavLink>
            </li>
          </ul>
          {/* <ul>
            <li>
              <NavLink to="/projects" className="nav-links">
                Projects
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/projects" className="nav-links">
                Space
              </NavLink>
            </li>
          </ul>*/}
          <ul>
            <li>
              <NavLink to="/articles" className="nav-links">
                Articles
              </NavLink>
            </li>
          </ul> 
          <div className="icons">
            <ul>
              <li>
                <NavLink to="" className="nav-links">
                  <NotificationsNoneOutlinedIcon className='notification' />
                  <div className="counter">1</div>
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink to="/profile" className="nav-links">
                  <ChatBubbleOutlineOutlinedIcon className='message' />
                  <div className="counter">2</div>
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <AccountBoxOutlinedIcon className="nav-links" onClick={toggledrop} />
              </li>
            </ul>
          </div>
          {drop && (
            <div className='account'>
              <ul>
                <NavLink to="/profile" className="nav-links">
                  <li>
                    Your profile
                  </li>
                </NavLink>
              </ul>
              <ul>
                <NavLink to="/courses" className="nav-links">
                  <li>
                    Enrolled Courses
                  </li>
                </NavLink>
              </ul >
              <ul>
                <li>
                  Your Projects
                </li>
                <hr />
              </ul >
              <ul>
                <li>
                  Sign out
                </li>
              </ul>
            </div>
          )
          }


        </div >
      </div >

    </div >
  )
}

export default Navbar