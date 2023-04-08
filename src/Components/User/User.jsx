import Header from '../Header/Header';
import Posts from '../Posts/Posts';
import { useState } from 'react';
import './User.css';
import Header1 from '../Header/Header1';

const User = ()=>{

    return(
        <div>
            <div>
                <Header1/>
            </div>
            <Posts />
        </div>
    )
};

export default User;