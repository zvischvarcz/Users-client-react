import React, { useState } from 'react';
import { updateUser } from '../utills';



function Update() {

    const [username, setUsername] = useState("")
    const [key, setKey] = useState("")
    const [value, setValue] = useState("")

    const submitHandler = async (event) => {
        event.preventDefault()
        console.log(await updateUser(username, key, value))
    }

  return (
    <div className='update'>
        <h2>Update User below</h2>
        <form onSubmit={submitHandler}>
        <label> Username:
              <br></br>
              <input onChange={(event) => setUsername(event.target.value)} />
            </label>
            <br></br>
            <br></br>
            <label> Item to change:
              <br></br>
              <label>
                <input onChange={(event) => setKey(event.target.value)} type="radio" id="username" name="column" value="username" />
                &nbsp;Username 
              </label><br/>
              <label>
              <input onChange={(event) => setKey(event.target.value)} type="radio" id="email" name="column" value="email" />
              &nbsp;Email
              </label><br/>
              <label>
                <input onChange={(event) => setKey(event.target.value)} type="radio" id="password" name="column" value="password" />
                &nbsp;Password
              </label>
            </label>
             <br></br>
            <br></br>
            <label> New {`${key}`}:
              <br></br>
              <input type={key !== "password" ? "text" : "password"} onChange={(event) => setValue(event.target.value)} />
            </label>
            <br></br>
            <br></br>
            <button type='submit'>Update</button>
        </form>
    </div>
  );
}

export default Update;