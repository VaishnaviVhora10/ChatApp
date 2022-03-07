import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Settings from './views/Settings';
import Navbar from './components/Navbar';
import Chat from './views/Chat';

import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className='content-wrapper'>
        <Routes>
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
)
}

// function Settings() {
//     return (
//       <h1>Settings View</h1>
//     )
//   }
   
//   function Login() {
//     return (
//       <h1>Login View</h1>
//     )
//   }
   
//   function Register() {
//     return (
//       <h1>Register View</h1>
//     )
//   }