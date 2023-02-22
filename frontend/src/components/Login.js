import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  /*
  this will stop to load the login page to be loaded from the url  
  */

  useEffect(() => {
    const auth = localStorage.getItem('users');
    if (auth) {
      navigate("/");
    }
  }, [])
  

  const handleLogin = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, pass }),
      headers: {
        "Content-type": "application/JSON"
      }
    })
    result = await result.json();
    console.warn(result);
    if (result.email) {
      localStorage.setItem("users", JSON.stringify(result));
      navigate("/")
    }
    else {
      alert("Please Enter correct details")
    }
  }

  return (
    <div className='login'>
      <h2>Login</h2>
      <input className='inputBox' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
      <input className='inputBox' type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin} className="BUTTON" type="button">Login</button>
    </div>
  )
}

export default Login;

