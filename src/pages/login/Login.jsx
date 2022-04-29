import React, { useContext, useState } from 'react'
import './login.scss'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from '../../context/AuthContext';
import {motion} from "framer-motion"


function Login() {

    const [error, setError] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const { dispatch } = useContext(AuthContext)
   

    const handleLogin = (e) => {
        setError(false)
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
                const user = userCredential.user;

                dispatch({ type: "LOGIN", payload: user })
                navigate("/")



            })
            .catch((error) => {
                setError(true)
                setEmail("")
                setPassword("")
                
                // ..
            });
    }
    return (
        <motion.div className="login"
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{duration:0.5}}>
            <div className="container">
            <div className="left">
                <NavLink to='/signup' >
                <p className='one'>Don't have an Account? <span>Create one here</span></p>
                </NavLink>
                <h2 className='one'>Welcome To MakeDev</h2>
                <p className='continue'>Continue where you left to become the next generation Developer</p>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                    {error && <span><i>Wrong email or password</i></span>}
                </form>
            </div>
            <div className="right">
                <h1>We Make Dev Dreams Come True</h1>
                <div className="bottom">
                <h2>Makedev</h2>
                <p>powered by CodeAfrica</p>
                </div>
               
            </div>
            </div>
            

        </motion.div>
    )
}

export default Login