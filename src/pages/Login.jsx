import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

 const loginHanddle=()=>{
  axios.post("https://reqres.in/api/login",{
      email,password
    }).then((res)=>loginMessage())

 }


 const loginMessage=()=>{
  alert("Login Sucessfuly") 
  
}
  return (
    <div>
    <input type="text" name="" id="" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type="text" name="" id="" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button onClick={loginHanddle}>login</button>
    </div>
  )
}

export default Login