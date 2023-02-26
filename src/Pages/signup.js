import React from 'react';
import { Link } from 'react-router-dom';
import './login';
import Nav from '../layout/Nav';

const Signup = () => {
  return (
    <div className='body'>
    <div className="container">
    <div className="drop">
      <div className="content">
        <h2 className="animate__heartBeat">Sign Up</h2>
        <form action>
          <div className="input-box">
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className="input-box">
            <input type="email" name="email" placeholder="Email id" />
          </div>
          <div className="input-box">
            <input type="number" name="height" placeholder="Age" />
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
    <Link to='/forgot'><a className="btn">Forgot Password</a></Link>
    <Link to='/login'><a className="btn signup">Login</a></Link>
  </div>
  </div>
  )
}

export default Signup;
