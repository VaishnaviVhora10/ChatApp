import React from 'react';
import { Link, useNavigate} from 'react-router-dom';

export default function Navbar() {
const navigate = useNavigate();
// history.goBack

  return (
    <div className="chat-navbar">
      <nav className="chat-navbar-inner">
        <div className="chat-navbar-inner-left">
        <button
            onClick={() => navigate(-1)}
            className="btn  btn-outline-primary ml-2">Back</button>
           <Link
            to="/settings"
            className="btn btn-outline-success ml-2">Settings</Link>
        </div>
        <div className="chat-navbar-inner-right">
          <span className="logged-in-user">Hi User</span>
          
           <button
            onClick={() => navigate('/register')}
            className="btn  btn-outline-danger ml-2">Register</button>
          <Link
            to="/login"
            className="btn  btn-outline-success ml-2">Login</Link>
        </div>
      </nav>
    </div>
  )}