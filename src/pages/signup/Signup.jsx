import React, { useContext, useState } from 'react'
import './signup.scss'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"
import {NavLink, useNavigate} from "react-router-dom"
import { AuthContext } from '../../context/AuthContext';



function Signup() {

  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")
  const [passwordval, setpasswordval]=useState("")
  const [password, setPassword] = useState("")

  const navigate=useNavigate()
  
  const {dispatch}=useContext(AuthContext)

  const handleSignup = (e) => {
    setError(false)
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
 
        const user = userCredential.user;

        dispatch({type:"LOGIN",payload:user})
        navigate("/")
        
        
        
      })
      .catch((error) => {
        setError(true)
        setEmail("")
        setPassword("") 
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
  return (
    <div className="signup">
      <div className="container">
      <div className="left">
      <h2>Welcome to MakeDev <br/> Create your account below</h2>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
        <input type="password" placeholder="Re-enter password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Signup</button>
        {error && <span><i>password don't match</i></span>}
      </form>
      <NavLink to="/login">
      <p>Already have an account? login here</p>
      </NavLink>
      </div>
      </div>
      
    </div>
  )
}

export default Signup