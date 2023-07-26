import React from 'react';
import './style.css';
import Navbar from './pages/Navbar';
import Dummy from './pages/Dummy';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Calculator from './pages/Calculator';
import Idcard from './pages/Idcard';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<Signup></Signup>}></Route>
        <Route path="calculator" element={<Calculator></Calculator>}></Route>
        <Route path="dummy" element={<Dummy></Dummy>}></Route>
        <Route path="idcard" element={<Idcard></Idcard>}></Route>
      </Routes>

      {/* <Signup></Signup>
      <Login></Login>
      <Calculator></Calculator> */}
    </div>
  );
}

export default App;
