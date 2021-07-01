import React, { useState } from 'react'
import "./CreatePost.css"
function CreatePost() {
    const [title,setTitle] = useState();
    function handleChange(e){
        setTitle(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault()
        
    }
    return (
        <div className="post">
            <div></div>
            <form onSubmit={handleSubmit}>
            <textarea rows="4" cols="50" onChange={handleChange}>
                Enter text here...</textarea>
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

export default CreatePost
