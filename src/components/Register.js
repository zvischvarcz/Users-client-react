import React, { useState } from 'react';
import { registerUser } from '../utills';



function Register() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [response, setResponse] = useState("")

    const submitHandler = async (event) => {
        event.preventDefault()
       let register = await registerUser(username, email, password)
       if (register === "Validation error"){
        setResponse("Username already exists")
       } else if (register.message !== undefined) {
        setResponse("Successfully registered")
       } else {
        setResponse(register)
       }

    }

  return (
    <div className='register'>
        <h2>Please register below</h2>
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
            <button className='reg-login-button' type='submit'>Register</button>
            <p>{response}</p>
        </form>
    </div>
  );
}

export default Register;
