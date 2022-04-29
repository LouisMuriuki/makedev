import React, {  useState } from 'react'
import './signup.scss'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"
import { NavLink, useNavigate } from "react-router-dom"
import {motion} from "framer-motion"


function Signup() {

  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")
  const [passwordval, setPasswordval] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSignup = (e) => {
    if (passwordval===password) {
      setError(false)
      e.preventDefault()
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigate("/login")
        })
        .catch((error) => {
          setError(true)
          setEmail("")
          setPassword("")
          setPasswordval("")

          // ..
        });
    } 
    else {
        setEmail("")
        setPassword("")
        setPasswordval("")
        setError(true)
      

      } 

  }
  return (
    <motion.div className="signup"
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}>
      <div className="container">
        <div className="left">
          <h2>Welcome to MakeDev <br /> Create your account below</h2>
          <form onSubmit={handleSignup}>
            <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
            <input type="password" placeholder="Re-enter password" value={passwordval} onChange={e => setPasswordval(e.target.value)} />
            <button type="submit">Signup</button>
            {error && <span><i>Passwords don't match</i></span>}
          </form>
          <NavLink to="/login">
            <p>Already have an account? login here</p>
          </NavLink>
        </div>
      </div>

    </motion.div>
  )
}

export default Signup