import React, { useContext, useState } from 'react'
import './signup.scss'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"
import {useNavigate} from "react-router-dom"
import { AuthContext } from '../../context/AuthContext';



function Login() {

  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")
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
    <div className="login">
      <h2>Welcome to the Dashboard <br/> Enter your Credentials to log in</h2>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        {error && <span><i>Wrong email or password</i></span>}
      </form>
    </div>
  )
}

export default Login