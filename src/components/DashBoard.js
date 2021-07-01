import React,{useEffect} from 'react'
import {useHistory } from 'react-router-dom';
export const DashBoard = () => {

    
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
            <button onClick={Logout}>Logout</button>
        </div>
    )
}
