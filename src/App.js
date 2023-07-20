import React from 'react';
import './style.css';
import Navbar from './pages/Navbar';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Calculator from './pages/Calculator';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Signup></Signup>
      <Login></Login>
      <Calculator></Calculator>
    </div>
  );
}

export default App;
