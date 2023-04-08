import './Login.css';
import Users from '../../Utils/Users';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Posts from '../Posts/Posts';

const Login = (props) => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onFormSubmitHandler = (e) => {
        e.preventDefault();

        Users.map((user) => {
            if (email === user.email && password === user.password) {
                alert('login Successfully');
                // props.loginCheck('loggedIn');
                navigate('/User');   
            }
            else if (email !== user.email) {
                alert('wrong email')
            }
            else {
                alert('wrong password');
            }
        })


    }




    const handlerEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        
        <div className='login-container'>
            <div className='login-form'>
                <form onSubmit={onFormSubmitHandler}>
                    <div>
                        <label htmlFor="email">Email</label><br />
                        <input onChange={handlerEmailChange} type="email" placeholder="Enter your Email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label><br />
                        <input onChange={handlePasswordChange} type="password" placeholder="Enter your Password" name="password" />
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
            
        </div>
    )
};

export default Login;