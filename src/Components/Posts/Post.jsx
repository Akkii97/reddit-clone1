import { useEffect, useState } from "react";
import post from "../../Utils/posts";

const Post = ({name,text,upvote,downvote}) => {

    const [post, setPost] = useState({
        name: "",
        text: '',
        upvote: 0,
        downvote: 0,
    })

    useEffect(() => {
        setPost({
            name: name,
            text: text,
            upvote:upvote,
            downvote:downvote
        })
      },[]);

    const onClickHandler= (e) =>{
        if(e.target.name==='upvote'){
            console.log('upvote clicked');
            let upvote = post.upvote+1;
            setPost(prev=>{
                return{
                    ...prev, upvote:upvote,
                }
            })
            

        }
        else{
            console.log('downvote clicked');
            let downvote = post.downvote-1;
            setPost(prev=>{
                return{
                    ...prev, downvote:downvote,
                }
            })

            
        }
    }



    

    return (
        <div>
            <tr key={post.name}>
                <td>{post.name}</td>
                <td>{post.text}</td>
                <img name='upvote' src="https://cdn-icons-png.flaticon.com/512/670/670092.png" alt="up arrow" onClick={onClickHandler} />
                <td>{post.upvote}</td>
                <img src="https://cdn-icons-png.flaticon.com/512/10024/10024701.png" alt="donwvote" onClick={onClickHandler} />
                <td>{post.downvote}</td>
            </tr>
        </div>
    )
};

export default Post;