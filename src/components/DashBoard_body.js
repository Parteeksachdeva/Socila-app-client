import React, { useState,useEffect } from 'react'
import "./DashBoard_body.css"
import axios from "axios"
import CreatePost from "./CreatePost"
import Posts from "./Posts"
function DashBoard_body() {
    const [PostList, setPostList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/posts")
         .then((res)=>{
             setPostList(res.data);
            console.log(res.data)
         })
     }, [])
    return (
        <div className="body">
            <CreatePost />
            <div className="body__posts">
            {
                PostList.map((data,i)=>{
                    console.log(data)
                    return <Posts key={i} data={data}/>
                })
            }
            </div>
        </div>
    )
}

export default DashBoard_body
