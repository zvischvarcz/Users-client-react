import React, { useState } from 'react';
import { loginUser } from '../utills';
import { useNavigate } from 'react-router-dom';




function Login({newUser}) {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const submitHandler = async (event) => {
        event.preventDefault()
        let login = await loginUser(username, email, password, newUser)
        if (login.message === "Login success"){
            navigate('/loggedIn')
        } else {
            setErrorMessage(login)
        }
    }

  return (
    <div className='login'>
        <h2>Please login below</h2>
        <form onSubmit={submitHandler} className='form'>
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
            <button className='reg-login-button' type='submit'>Login</button>
            <p>{errorMessage}</p>
        </form>
    </div>
  );
}

export default Login;