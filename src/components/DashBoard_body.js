import React from 'react'
import "./DashBoard_body.css"
import CreatePost from "./CreatePost"
function DashBoard_body({Authuser}) {
    return (
        <div className="body">
            <CreatePost />
        </div>
    )
}

export default DashBoard_body
