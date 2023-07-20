import React from 'react';
import './style.css';

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Calculator from './pages/Calculator';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <Signup></Signup>
      <Login></Login>
      <Calculator></Calculator>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
