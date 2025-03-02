import { useState } from "react";
import { LOGO_URL } from  "../utils/constants"; 
import { Link } from "react-router-dom";

const Header=()=>{
    const [btnName,setbtnName]=useState("LOGIN");
    
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} className="logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About Us</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>
                    <li><Link to="/Cart">Cart </Link></li>
                    <li>
                        <button className="login" onClick={()=>
                        btnName==="LOGIN"?setbtnName("LOGOUT"):setbtnName("LOGIN")} >{btnName}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
} 

export default Header ;