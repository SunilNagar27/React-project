import React,{useState} from "react";

const Signup = () => {
    const [name,setName] = useState ("");
    const [email,setEmail] = useState ("");
    const [pass,setPass] = useState ("");

    const collectData = () => {
        console.warn(name,email,pass);
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