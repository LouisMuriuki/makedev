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
                <h1 className='one'>Welcome To MakeDev</h1>
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
                <div><img src="data:image/png;base64,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" alt="" /></div>
                <div className="bottom">
                <h2>Makedev</h2>
                <p>Made by Kinglui</p>
                </div>
               
            </div>
            </div>
            

        </motion.div>
    )
}

export default Login