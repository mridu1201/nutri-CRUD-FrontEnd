import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container">
    <div className="drop">
      <div className="content">
        <h2 className="animate__heartBeat">Login</h2>
        <form action>
          <div className="input-box">
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className="input-box">
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="input-box">
            <input type="submit" defaultValue="Login" href="#" />
          </div>
        </form>
      </div>	
      
    </div>
    <Link to='/forgot'><a  className="btn">Forgot Password</a></Link>
    <Link to='/signup'><a className="btn signup">Signup</a></Link>
    </div>
  )
}

export default Login
