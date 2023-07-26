import React from 'react';
import './style.css';
import Navbar from './pages/Navbar';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Calculator from './pages/Calculator';
import { Route, Routes } from 'react-router-dom';
import Dummy from './pages/Dummy';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="Login" element={<Login></Login>}></Route>
        <Route path="Signup" element={<Signup></Signup>}></Route>
        <Route path="Calculator" element={<Calculator></Calculator>}></Route>
        <Route path="Dummy" element={<Dummy></Dummy>}></Route>
      </Routes>

      <Signup></Signup>
      <Login></Login>
      <Calculator></Calculator>
    </div>
  );
}

export default App;
