import React, { useState } from 'react';
import { updateUser } from '../utills';



function Update(props) {

    const [key, setKey] = useState("")
    const [value, setValue] = useState("")
    const [response, setResponse] = useState("")


    const submitHandler = async (event) => {
        event.preventDefault()
        let res = (await updateUser(props.user, key, value))
        if(res.message){
          setResponse(res.message)
        } else {
          setResponse(res.errorMessage)
        }
    }

  return (
    <div className='update'>
        <form onSubmit={submitHandler} className='form'>
        <h2>Update</h2>
        <label> Username: {props.user}
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
            <p>{response}</p>
        </form>
    </div>
  );
}

export default Update;