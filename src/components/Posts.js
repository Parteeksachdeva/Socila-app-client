import React,{useEffect,useState} from 'react'
import axios from "axios"
import "./Posts.css"
function Posts({data}) {
    const[like,setLike] = useState(0)
    const[changelike,setchanelike] = useState(false)
    const[comments,setcomments] = useState(false)
    console.log(data)
    useEffect(() => {
        setLike(data.likeCount)
    }, [])
    function LikeUpdate(){
        let a=like;
        if(changelike) a=a-1
        else a=a+1
        setchanelike(!changelike)
        axios.post(`http://localhost:8000/posts/like`, {id:data._id,likeCount:a})
        .then(res => {
            setLike(a)
            console.log(res);
        })
        .catch((err)=>console.log(err))
        setLike(a)
        
    }
    return (
        <div className="posts">
            <div className="posts__header">
                <p>Avatar</p>
                <p>{data.username}</p>
            </div>
            <div className="posts__title">
            <p>{data.title}</p>
            </div>
            <div className="posts__bottom">
                <div onClick={LikeUpdate} className="like">{like} Likes</div>
                <div onClick={()=>{setcomments(true)}} className="comments">Comments</div>
            </div>
            {comments &&(<div>
               vwevwe
            </div>)}
        </div>
    )
}

export default Posts
