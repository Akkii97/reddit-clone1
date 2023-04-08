// import { useState } from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';


const Header = () => {

    // const [login, setLogin] = useState(false);



    return (
    
        <div className='header-container'>


            <div className='header-logo'>
                <img src="https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png" alt="" />
            </div>
            <div className='post-upload'>
                <button>Add New Post</button>
            </div>
            <div className='login-signup-btn'>
                <button>Logout</button>    
                    {/* <Navbar />         */}
                
            </div>
        </div>
    )
}

export default Header;