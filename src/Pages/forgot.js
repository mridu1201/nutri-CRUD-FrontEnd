import React from 'react'
import './login.css'

const Forgot = () => {
  return (
    <div className="container">
    <div className="drop">
      <div className="content">
        <h2 className="animate__heartBeat1">Forgot Password</h2>
        <form action>
          <div className="input-box">
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className="input-box">
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="input-box">
            <input type="password" name="password" placeholder="Confirm password" />
          </div>
          <div className="input-box">
            <input type="submit" defaultValue="Login" href="#" />
          </div>
        </form>
      </div>	
    </div>
  </div>
  )
}

export default Forgot


