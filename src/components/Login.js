import React,{useState,useEffect} from 'react'
import "./Login.css"
import axios from 'axios';
import {useHistory } from 'react-router-dom';

export const Login = ({type}) => {
    let history = useHistory();
    const[user,setUser]= useState({username:"",password:""});
    const [error,setError]=useState("")
    const [register,setRegister]=useState(false)
    useEffect(() => {
        let token = localStorage.getItem('user');
        if(token) {
            history.push("/dashboard");
        }
        if(type==="register") setRegister(true)
        else setRegister(false)
    }, [type])

    function handleComponent(){
        console.log(type)
        if(type==="register") setRegister(true)
        else setRegister(false)
        // if(type==="register") setRegister(true)
        if(type==="register") history.push("/login");
        else history.push("/register");
    }

    function handleSubmit(e){
        e.preventDefault();
        if(register){
            axios.post(`http://localhost:8000/register`, user)
            .then(res => { 
                history.push("/login");
            })
            .catch((err)=>{setError("User Already Exists")})
        }
        else{
            axios.post(`http://localhost:8000/login`, user)
            .then(res => {
                localStorage.setItem('user', res.data.token); 
                localStorage.setItem('username', user.username); 
                history.push("/dashboard");
                console.log(res.data);
            })
            .catch((err)=>{setError("Invalid Credantials")})
        }
       
        
    }
    return (
        <div className="login">
            <h1>{`${register ? "Sign In" : "Log In"}`}</h1>
           <form onSubmit={handleSubmit}>
               <input placeholder="Username" onChange={(e)=>{setUser({...user, username:e.target.value})}}/>
               <input placeholder="password" type="password" onChange={(e)=>{setUser({...user, password:e.target.value})}}/>
               {/* <input type="submit"/> */}
               <button type="submit">{`${register ? "Register" : "LogIn"}`}</button>
               <p>{error}</p>
           </form>
          <div className="login__sub"><p>{`${register ? "Already Registered?" : "New User? "}`}</p>  <div onClick={handleComponent}>{`${register ? "LogIn" : "SignIn"}`}</div></div>
        </div>
    )
}
