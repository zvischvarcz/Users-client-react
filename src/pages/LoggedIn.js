import React, { useEffect, useState } from 'react';
import Update from '../components/updateUser';
import Delete from '../components/DeleteUser';
import { deleteCookie } from '../common';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../common';
import AddBooks from '../components/AddBooks';

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
      }, [])

    const logOut = () => {
       deleteCookie("jwt-token")
       navigate('/')
    }

  return (
    <div>
        
        <h2>Welcome {user}</h2>
        <div className="update-delete-wrap">
        <AddBooks user={user} />
        <Update user={user}/>
        <Delete user={user} />
        </div>
        <form onSubmit={logOut}>
        <button type='submit'>Log Out</button>
        </form>
    </div>
  );
}

export default LoggedIn;
