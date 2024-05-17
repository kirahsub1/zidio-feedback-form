import React from 'react' 6.9k (gzipped:2.7k)

import './register-signup.css'

import user_icon from '../Assests/person.png'

import email_icon from '../Assests/email.png'

import password_icon from '../Assests/password.png'





const registersignup = () => {



    const[action,setAction]= useState("Register");

    return (

        <div className='container'>

            <div className="header">

                <div className="text">signup</div>

                <div className="underline"></div>

            </div>

            <div className="inputs">

                {action==="Register"?<div></div>:<div className="inputs">

                    <img src={user_icon} alt="" />

                    <input type="text" placeholder="Name" />

                </div>}

                

                <div className="inputs">

                    <img src={email_icon} alt="" />

                    <input type="email"  placeholder="email id" />

                </div>

                <div className="inputs">

                    <img src={password_icon} alt="" />

                    <input type="password"  placeholder="password" />

                </div>

            </div>

            {action==="signup"?<div>:<div className="forgot-password">lost password?<span>Click here!</span></div>}            <div className="submit-container">

                <div className={action==="signup"?"submit gray":"submit"}onClick={()=>{setAction("signUp")}}>Sign up</div>

              
