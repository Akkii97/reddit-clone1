import { useState } from "react";
import post from "../../Utils/posts";
import Header from "../Header/Header";
import Header1 from "../Header/Header1";
import Post from "./Post";
import './Posts.css';

const Posts = () => {

    
    
    return (
        <div>
            
            
            <table>
                <thead>
                <tr>
                <th>Name</th>
                    <th>Post</th>
                    <th>Upvotes</th>
                    <th>DownVotes</th>
                </tr>
                </thead>
                
                <tbody>
                    {post.map((post) => {
                        return (<Post 
                            name={post.name} 
                            text={post.text} 
                            upvote={post.upvote} 
                            downvote={post.downvote}/>)
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Posts;