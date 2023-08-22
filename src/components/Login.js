import React, { useState } from 'react';
import { loginUser } from '../utills';



function Login() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = async (event) => {
        event.preventDefault()
        console.log(await loginUser(username, email, password))
    }

  return (
    <div className='login'>
        <h2>Please login below</h2>
        <form onSubmit={submitHandler}>
            <label>Username: &nbsp; 
                <input onChange={(e) => {setUsername(e.target.value)}}></input>
            </label>
            <br></br>
            <label>Email: &nbsp; 
                <input  onChange={(e) => {setEmail(e.target.value)}}></input>
            </label>
            <br></br>
            <label>Password: &nbsp; 
                <input type='password'  onChange={(e) => {setPassword(e.target.value)}}></input>
            </label>
            <br></br>
            <button type='submit'>Login</button>
        </form>
    </div>
  );
}

export default Login;