import React, { useContext, useState } from 'react'
// import { Context } from '../../index';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Login.css'
import a from '../../images/apple.png'
import b from '../../images/google.png'
import c from '../../images/facebook.png'
import d from '../../images/social.png'
import { Context } from '../..';
// import a from '../../images/train.avif'

function Login() {
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigateTo = useNavigate();

    const handleLogin=async(e)=>{
        e.preventDefault();
        try {
            await axios
                .post("http://localhost:8000/api/users/login",{email,password},
                    {
                        withCredentials: true,
                        headers: { "Content-Type": "application/json" },
                    }
                )
                .then((res)=>{
                    toast.success(res.data.message||"Login Successful");
                    console.log('Token:', res.data);
                    setIsAuthenticated(true);
                    navigateTo("/");
                    setEmail("");
                    setPassword("");
                })
        } catch (error) {
            toast.error("error");

        }
    }
    if (isAuthenticated) {
        return <Navigate to={"/"} />;
      }
    const reg=()=>{
        navigateTo("/register")
    }

  return (
    <div className="login">
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleLogin} className='form'>
                <div className="i">
                    <label >Email Id</label>
                    <input type="email"  className='inputh' placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="i">
                    <label >Password</label>
                    <input type="password" className='inputh' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='enter password'/>
                </div>

                <div className="other">
                    <span onClick={reg}>Not Register??</span>
                    <span>Forgot Password</span>
                </div>
                <button type='submit'>Login</button>

                <div className="lines">
                    <div className="line"></div>
                    <span>or</span>
                    <div className="line"></div>
                </div>
                <div className="icons">
                    <img src={a} alt="" />
                    <img src={d} alt="" />
                    <img src={c} alt="" />
                    <img src={b} alt="" />
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default Login