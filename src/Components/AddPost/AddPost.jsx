import { useState } from "react";
import Users from "../../Utils/Users";
import post from "../../Utils/posts";

const AddPost = () =>{

    const [text, setText] = useState('');

    const [newPost, setNewPost] = useState({
        name:'',
        text:text,
        upvote:0,
        downvote:0
})

    const onTextChange =(e) =>{
        setText(e.target.value);
    }

    // post = [...post, newPost];

    // console.log(post);
    

    

    const onSubmitHandler =(e) =>{
        e.preventDefault();
        setNewPost(...newPost, newPost.text)

        console.log(newPost)
        
        alert('post submitted successfully');

        
    }
    return(
        <div>
            <div>
                <form action="" onSubmit={onSubmitHandler}>
                    <div>
                        <label htmlFor="post">Post</label><br />
                        <input type="text" name="post" placeholder="enter the text" onChange={onTextChange}/>
                    </div>
                    <div>
                        <button type="submit">Post</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default AddPost;