import React, { useState} from 'react'
import axios from "axios"
import "./CreatePost.css"
function CreatePost() {
    const [title,setTitle] = useState();
    function handleChange(e){
        setTitle(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const username=localStorage.getItem('username');
        axios.post(`http://localhost:8000/posts`, {title:title,username})
            .then(res => {
                window.location.reload();
                console.log(res);
            })
            .catch((err)=>console.log(err))
        
    }
    return (
        <div className="post">
            <form onSubmit={handleSubmit}>
            <textarea rows="4" cols="50" onChange={handleChange} placeholder="Enter text here...">
                </textarea>
                <button type="submit">Post</button>
            </form>
            
        </div>
    )
}

export default CreatePost
