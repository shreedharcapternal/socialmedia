import React from 'react'
import './Register.css'

function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Martian Social</h3>
                    <span className="loginDesc">Connect with friends and the world around you on Martian Social</span>
                </div>
                <div className="loginRight">
                    <h2 className="loginTitle">Sign Up</h2>
                    <div className="loginBox">
                        
                        <input type="text" placeholder="UserName" className="loginInput" />
                        <input type="email" placeholder="Email" className="loginInput" />
                        <input type="password" placeholder="Password" className="loginInput" />
                        <input type="password" placeholder="Password Again" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
