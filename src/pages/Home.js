import Register from '../components/Register';
import Login from '../components/Login';
import { useEffect } from 'react';
import { getCookie } from '../common';
import { authCheck } from '../utills';
import { useNavigate } from 'react-router-dom';

function Home({setUser}) {
    const navigate = useNavigate()
    
    const loginWithToken = async (cookie) => {
        setUser(await authCheck(cookie))
        navigate('/loggedIn')
      }

  useEffect(() => {
    let cookie = getCookie("jwt-token")
    if (cookie !== false) {
      loginWithToken(cookie)
    }
  })

  

  return (
    <div className="Home">
      <Register />
      <div>
        <Login newUser={setUser} />
      </div>
    </div>
  );
}

export default Home;
