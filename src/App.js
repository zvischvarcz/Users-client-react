import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Update from './components/updateUser';
import Delete from './components/DeleteUser';

function App() {
  return (
    <div className="App">
      <Register />
      <Login />
      <Update />
      <Delete />
    </div>
  );
}

export default App;
