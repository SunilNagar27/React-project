import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";


const Signup = () => {
    const [name,setName] = useState ("");
    const [email,setEmail] = useState ("");
    const [pass,setPass] = useState ("");
    const navigate = useNavigate();

    useEffect( ()=>{
        const auth= localStorage.getItem('users');
        if(auth)
        {
            navigate("/");
        }
    })

    const collectData = async () => {
        console.warn(name,email,pass);
        /* API integrate krne ka tarika fetchI() function is used to get the api 
            This function two things as a parameter 
            1) URL of the api which we created in Node 
            2) method{matlab konsa method use kiya h api k liye} , body{api kya data store krwa rha h ya retirve krwa rha h databse se }, headers { jiske anadar content type by default application/json dete h 
            if not mentioned by the backend devloper } */ 

        let result = await fetch('http://localhost:5000/register', { 
            method:'post',
            body:JSON.stringify({name,email,pass}),    // API ko direct objects smj nhi aata isliye object ko stringify krke bhejte h 
            headers:{
                'Content-type': 'application/JSON'
            },  
        })
        result = await result.json();
        console.warn(result);
        navigate('/');
        localStorage.setItem("users",JSON.stringify(result));  // saving data to localstorage so it doesn't get lost after refresh or browser close data will be save their for a long time 
    };

    return(
        <div className="signup">
            <h3>Signup Page</h3>
            <input className="inputBox" type="text" value={name} onChange={(e)=>setName(e.target.value) } placeholder="Enter Name"></input>
            <input className="inputBox" type="email" value={email} onChange={(e)=>setEmail(e.target.value) } placeholder="Enter EMail"></input>
            <input className="inputBox" type="password" value={pass} onChange={(e)=>setPass(e.target.value) } placeholder="password"></input>
            <button onClick={collectData} type="button">Singup</button>
        </div>
    )
};

export default Signup;