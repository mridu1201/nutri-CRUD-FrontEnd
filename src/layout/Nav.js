import React from 'react'
import './Nav.css';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div className='topnav'>
        <img src="https://res.cloudinary.com/dqpyrzzw7/image/upload/v1677414063/Recipeee___2_-removebg-preview_owjntg.png" className='logo'></img>
        <br></br>
        <Link to='/adduser'><button className='add-btn'>Add item</button></Link>
    </div>
  );
}

export default Nav
