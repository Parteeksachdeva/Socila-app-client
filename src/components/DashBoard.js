import React,{useEffect} from 'react'
import {useHistory } from 'react-router-dom';
import DashBoard_body from './DashBoard_body';
export const DashBoard = ({Authuser}) => {

    useEffect(() => {
        let token = localStorage.getItem('user');
        if(!token) {
            history.push("/login");
        }
    }, [])


    let history = useHistory();
    function Logout(){
        window.localStorage.removeItem("user");
        history.push("/login");
    }
    return (
        <div className="dashboard">
            {/* header */}
            <button onClick={Logout}>Logout</button>
            <DashBoard_body />
        </div>
    )
}
