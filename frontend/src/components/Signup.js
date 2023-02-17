import React from "react";

const Signup = () => {
    return(
        <div className="signup">
            <h3>Signup Page</h3>
            <input className="inputBox" type="text" placeholder="Enter Name"></input>
            <input className="inputBox" type="email" placeholder="Enter EMail"></input>
            <input className="inputBox" type="password" placeholder="password"></input>
        </div>
    )
};

export default Signup;