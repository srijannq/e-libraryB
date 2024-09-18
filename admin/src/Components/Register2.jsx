import React, { useState } from 'react';
import './reg2.css';
import { useNavigate } from 'react-router-dom';

export default function Register2() {
    const [isLogin, setIsLogin]= useState(true);
    const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/call');
  };
    return(
        <>
          <div className='container'>
          <div className='form-container'>
            <div className='form-toggle'>
                <button className={isLogin ? "active":""} onClick={() => setIsLogin(true)}>Login</button>
                <button className={!isLogin ? "active":""} onClick={()=> setIsLogin(false)}>SignUp</button>
            </div>
            {isLogin ? <>
            <div className='form'>
                <h2>Welcome Admin!!</h2>
                <input type="email" placeholder='Enter your email'></input>
                <input type="password" placeholder='Enter valid password'></input>
                <a href='#'>Forgot Password?</a>
                <button onClick={handleLogin}>Login</button>
                <a href='#' onClick={() => setIsLogin(false)}>Signup Now?</a>
            </div>  
            </>:<>
                <div className='form'>
                <br></br>
                <input type="text" placeholder='Enter your First name'></input>
                <input type="text" placeholder='Enter your Last name'></input>
                <input type="email" placeholder='Enter your email'></input>
                <input type="password" placeholder='Enter valid password'></input>
                <input type="password" placeholder='Confirm password'></input>
                <a href='#'>Forgot Password?</a>
                <button onClick={handleLogin}>SignUp</button>
               <p>Already registered?<a href='#' onClick={() => setIsLogin(true)}>Login</a></p>
                </div>
            </>}
          </div>

          </div>

        </>
    )
}
