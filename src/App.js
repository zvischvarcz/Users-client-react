import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import LoggedIn from './pages/LoggedIn';

function App() {

  const [username, setUsername] = useState()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home setUser={setUsername}/>}></Route>
        <Route path="/LoggedIn" element={<LoggedIn username={username}/>}></Route>
      </Routes>
    </BrowserRouter>
        
  )  
  
}

export default App; 
