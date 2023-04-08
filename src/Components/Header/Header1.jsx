// import Navbar from "../Navbar/Navbar";
import Login from "../Login/Login";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

const Header1 = () => {

    const [login, setLogin] = useState('loggedout');

    const navigate = useNavigate();

    const onLoginHandler = (login) => {
        // setLogin('loggedin');
        setLogin(login);
        // console.log(setLogin);
        navigate('/Login')
    }

    

    const addPostHandler = () =>{
        navigate('/AddPost');
    }

    // console.log(login);
    return (
        <div>
            <div className='header-container'>
                <div className='header-logo'>
                    <img src="https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png" alt="" />
                </div>
                <div className='post-upload'>
                    <button onClick={addPostHandler}>Add New Post</button>
                </div>
                <div className='login-signup-btn'>
                    {login==='loggedout'?
                    <button onClick={onLoginHandler}>SignIn</button>
                    :
                    <button onClick={onLoginHandler}>Logout</button>}
                    {/* <Navbar /> */}
                </div>
            </div>

            <div>
                <Login loginCheck ={onLoginHandler}/>
            </div>
        </div>


    )
};

export default Header1;


// Removed Navbar 