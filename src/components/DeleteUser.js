import React from 'react';
import { deleteUser } from '../utills';
import { useNavigate } from 'react-router-dom';
import { deleteCookie } from '../common';



function Delete(props) {
    const navigate = useNavigate()
        
    const submitHandler = async (event) => {
        event.preventDefault()
        console.log(await deleteUser(props.user))
        deleteCookie("jwt-token")
        navigate('/')
     }   

  return (
    <div className='login'>
        <h2>Delete</h2>
        <form onSubmit={submitHandler} className='form'>
            <label>Username: {props.user}
            </label>
            <br></br>
            <button type='submit'>Delete</button>
        </form>
    </div>
  );
}

export default Delete;