import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Martian Social</h3>
                    <span className="loginDesc">Connect with friends and the world around you on Martian Social</span>
                </div>
                <div className="loginRight">
                    <h2 className="loginTitle">Login</h2>
                    <div className="loginBox">
                        <input type="email" placeholder="Email" className="loginInput" />
                        <input type="password" placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
