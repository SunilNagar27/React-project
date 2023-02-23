import React, { useEffect } from "react";
import Logo from './assets/logo.svg';

/* 
this import Function is used after instaalling react-router-dom package 

which basically provide use to create Link to other pages similar to <a> anchor tag but the page doesn't load 
basically the Link are the routes where we want to go */

import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
    const auth = localStorage.getItem('users');
    const navigate = useNavigate();
    const logout = () => {
        return localStorage.clear('users')
        navigate('/home');
    }
    return (
        <div >
            <Link to="/home" ><img className="Logo" src={Logo} alt="Logo" /></Link>
            {
                auth ?
                    <ul className="nav-ul nav-right">
                        <li><Link to="/home" >Home</Link></li>
                        <li><Link to="/" >List Products</Link></li>
                        <li><Link to="/add" >Add Products</Link></li>
                        <li><Link to="/update" >Update Products</Link></li>
                        <li><Link to="/profile" >Profile</Link></li>
                        <li><Link onClick={logout} to="/signup" >Logout</Link></li>
                    </ul>
                    :
                    <ul className="nav-ul nav-right" >
                        <li><Link to="/home" >Home</Link></li>
                        <li><Link to="/signup" >SignUp</Link></li>
                        <li><Link to="/login" >Login</Link></li>
                    </ul>

            }
        </div>
    )
};

export default Nav;