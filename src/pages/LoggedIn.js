import React, { useEffect, useState } from 'react';
import Update from '../components/updateUser';
import Delete from '../components/DeleteUser';
import { deleteCookie } from '../common';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../common';
import AddBooks from '../components/AddBooks';
import Books from '../components/Books';

function LoggedIn() {
    const navigate = useNavigate()

    const [user, setUser] = useState()

    useEffect(() => {
        let cookie = getCookie("jwt-token")
        if (cookie === false) {
          navigate('/')
        } else {
            setUser(localStorage.getItem("username"))
        }
      }, [navigate])

    const logOut = () => {
       deleteCookie("jwt-token")
       navigate('/')
    }

  return (
    <div>
        <div className='head-logged-in'>
            <h2>Welcome {user}</h2>
            <form onSubmit={logOut}>
            <button type='submit'>Log Out</button>
            </form>
        </div>
        <div className="update-delete-wrap">
          <AddBooks user={user}/>
        </div>
        <div> 
          <Books user={user}/>
        </div>
        <div className='edit-user'>
          <h3>Edit {user}</h3>
        </div>
        <div className="update-delete-wrap">
          <Update user={user}/>
          <Delete user={user} />
        </div>
        
    </div>
  );
}

export default LoggedIn;
