import React,{useState} from 'react'

function Register() {
    const[user,setUser]= useState({username:"",password:""});
    return (
        <div className="register">
            <h1>Log In</h1>
           <form onSubmit={handleSubmit}>
               <input placeholder="Username" onChange={(e)=>{setUser({...user, username:e.target.value})}}/>
               <input placeholder="password" type="password" onChange={(e)=>{setUser({...user, password:e.target.value})}}/>
               <input type="submit"/>
               <p>{error}</p>
           </form>
          <div><small>New User? <div>Regester</div></small></div>
        </div>
    )
}

export default Register
