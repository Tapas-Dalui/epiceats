import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'

const Login = ({ setShowLogin }) => {

    const [currentState, setCurrentState] = useState("Login")
    return (
        <>
            <div className="login-popup">
                <form className="login-popup-container">
                    <div className="login-popup-title">
                        <h2>{currentState}</h2>
                        <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                    </div>
                    <div className="login-inputs">
                        {currentState === 'Login' ? <></> : <input type="text" placeholder='Enter your name' required />}

                        <input type="email" placeholder='Enter your email' required />
                        <input type="password" placeholder='Enter password' required />
                    </div>
                    <button>{currentState === "Sign Up" ? "Create account" : 'Login'}</button>
                    <div className="login-condition">
                        <input type="checkbox" required />
                        <p>By continueing, I agree to the terms of use & privacy policy</p>
                    </div>
                    {currentState === "Login" ? <p>Create a new account <span onClick={() => setCurrentState("Sign Up")}>Click Here</span> </p>
                        :
                        <p>Already have an account ? <span onClick={() => setCurrentState("Login")}>Login Here</span></p>}


                </form>
            </div>

        </>
    )
}

export default Login
