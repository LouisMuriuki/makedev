import React, { useContext, useState } from 'react'
import './login.scss'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../../context/AuthContext';



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
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
    return (
        <div className="login">
            <div className="container">
            <div className="left">
                <p>Don't have an Account? <span>Create one here</span></p>
                <h2>Welcome To MakeDev</h2>
                <p>Continue where you left to become the next generation Developer</p>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                    {error && <span><i>Wrong email or password</i></span>}
                </form>
            </div>
            <div className="right">
                <h1>We Make Dev Dreams Come True</h1>
                <h2>Makedev</h2>
                <p>powered by CodeAfrica</p>
            </div>
            </div>
            

        </div>
    )
}

export default Login