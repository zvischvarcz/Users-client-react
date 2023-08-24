import React, { useState } from 'react';
import { addBook } from '../utills';



function AddBooks(props) {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [response, setResponse] = useState("")

    const submitHandler = async (event) => {
        event.preventDefault()
       let res = await addBook(title, author, props.user)
       console.log(res)
       if (res.message === "Validation error"){
        setResponse("Book already exists")
       } else {
        setResponse(res.message)
       }

    }

  return (
    <div className='register'>
        <h2>Add your books Below</h2>
        <form onSubmit={submitHandler}>
            <label>Title: &nbsp; 
                <input onChange={(e) => {setTitle(e.target.value)}}></input>
            </label>
            <br></br>
            <label>Author: &nbsp; 
                <input  onChange={(e) => {setAuthor(e.target.value)}}></input>
            </label>
            
            <br></br>
            <button type='submit'>Add</button>
            <p>{response}</p>
        </form>
    </div>
  );
}

export default AddBooks;
