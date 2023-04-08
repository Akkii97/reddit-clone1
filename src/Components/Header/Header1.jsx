// import Navbar from "../Navbar/Navbar";
import Login from "../Login/Login";
import { useNavigate } from "react-router-dom";
import logo from '../../Utils/reddit-logo.png';
import { useState } from "react";

const Header1 = () => {


    const navigate = useNavigate();

    const onLogoutHandler = () =>{
        alert('logout successfuly')
        navigate('/');
    };

    const addPostHandler = () =>{
        navigate('/AddPost');}
    

    // console.log(login);
    return (
        <div>
            <div className='header-container'>
                <div className='header-logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='post-upload'>
                    <button onClick={addPostHandler}>Add New Post</button>
                </div>
                <div className='login-signup-btn'>
                    <button onClick={onLogoutHandler}>Logout</button>
                    
                </div>
            </div>

            
        </div>


    )
};

export default Header1;


// Removed Navbar 