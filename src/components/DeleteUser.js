import React, { useState } from 'react';
import { deleteUser } from '../utills';



function Delete() {

    const [username, setUsername] = useState("")
    console.log(username)
    const submitHandler = async (event) => {
        event.preventDefault()
        console.log(await deleteUser(username))
        
    }

  return (
    <div className='login'>
        <h2>Delete User below</h2>
        <form onSubmit={submitHandler}>
            <label>Username: &nbsp; 
                <input onChange={(e) => {setUsername(e.target.value)}}></input>
            </label>
            <br></br>
            <button type='submit'>Delete</button>
        </form>
    </div>
  );
}

export default Delete;