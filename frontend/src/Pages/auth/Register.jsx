import React, { useContext, useState } from 'react'
import { Context } from '../../index';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Register.css'
import a from '../../images/apple.png'
import b from '../../images/google.png'
import c from '../../images/facebook.png'
import d from '../../images/social.png'

function Register() {
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const [name,SetName]=useState("");
    const[email,SetEmail]=useState("");
    const[password,SetPassword]=useState("");
    const[Password2,SetPassword2]=useState("");
    const[Phone,Setphone]=useState();
    const navigate=useNavigate();


    const register = async (e) => {
        e.preventDefault();
    
        if (!name || !email || !password) {
          return toast.error("All fields are required");
        }
        if (password.length < 6) {
          return toast.error("Passwords must be up to 6 characters");
        }
        if (password !== Password2) {
          return toast.error("Passwords do not match");
        }
        try {
            await axios
                .post("http://localhost:8000/api/users/register",
                    {name,email,password,Phone},
                    {
                    withCredentials:true,
                    headers:{"Content-Type":"application/json"},
                })
                .then((res)=>{
                    toast.success(res.data.message||"successfully Resgistered")
                    navigate('/')
                    setIsAuthenticated(true)
                    SetEmail("")
                    Setphone()
                    SetPassword("")
                    SetPassword2("")
                    SetName("")
                })
                
              
        } catch (error) {
            toast.error(error||"not successful")
        }

        if (isAuthenticated) {
            return <Navigate to={"/"} />;
        }
    }
    const login=()=>{
      navigate("/login")
    }
  return (
    <div className="register">
      <div className="container">
        <h1>Register</h1>
          <form className='form' onSubmit={register}>
            <div className="i">
              <label >Name</label>
              <input type="text"  className='inputh' placeholder='enter name' value={name} onChange={(e) => SetName(e.target.value)} />
            </div>
            <div className="i">
              <label >Email Id</label>
              <input type="email"  className='inputh' placeholder='enter email' value={email} onChange={(e) => SetEmail(e.target.value)} />
            </div>
            <div className="i">
              <label >Password</label>
              <input type="password" className='inputh' value={password} onChange={(e) => SetPassword(e.target.value)} placeholder='enter password'/>
            </div>
            <div className="i">
              <label >Re-Enter Password</label>
              <input type="password" className='inputh' value={Password2} onChange={(e) => SetPassword2(e.target.value)} placeholder='Re-enter password'/>
            </div>
            <div className="i">
              <label>Phone Number</label>
              <input type="phone" className='inputh' value={Phone} onChange={(e) => Setphone(e.target.value)} placeholder='enter phone-no'/>
            </div>
            <div className="other">
              <span onClick={login}>Not Login??</span>
              <span>Forgot Password</span>
            </div>
            <button type='submit'>Register</button>

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

export default Register