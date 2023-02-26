import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../layout/Nav";
import './AddUser.css';

/*import React, { useState } from 'react'
import './AddUser.css'

const AddUser = () => {

    const[user,setUser]=useState({
        name:"",
        calories: "",
        Ingridients:"",
        Recipe:""
    })

    const{name,calories,Ingridients,Recipe}=user

    const onInputChange=(e)=>{

        setUser({...user,[e.target.name]: e.target.value});

    }

  return (
    <form action="index.html" method="post">
        <h1>Sign Up</h1>
        <fieldset>
          
          <label name="name">Name:</label>
          <input type="text" id="name" name="user_name" value={name} onChange={(e)=>onInputChange(e)} />
          <label name="mail">Calories:</label>
          <input type="text" id="cal" name="user_email" value={calories} onChange={(e)=>onInputChange(e)}/>
          <label name="name">Ingridients:</label>
          <input type="text" id="name" name="user_name" value={Ingridients} onChange={(e)=>onInputChange(e)}/>
          <label name="bio">Recipe:</label>
          <input type="text" id="name" name="user_name" value={Recipe} onChange={(e)=>onInputChange(e)}/>
        </fieldset>
        
        <button type="submit">Add dish</button>
      </form>
  )
}

export default AddUser;*/



export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    caloies:"",
    ingridients:"",
    receipe:""
  });

  const { name, calories, ingridients, receipe } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/pfood", user);
    navigate("/");
  };

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add a Dish</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label name="Name" className="form-label">
                Food item
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Food name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label name="Name" className="form-label">
                Calories
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Calories in KCal"
                name="calories"
                value={calories}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label name="Name" className="form-label">
                Ingridients
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Ingridients"
                name="ingridients"
                value={ingridients}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label name="Name" className="form-label">
                Recipe
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Your recipe"
                name="receipe"
                value={receipe}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
            
            <button type="submit" className="btn btn-outline-info">
              Submit
            </button>
            <Link className="btn btn-outline-secondary mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
  </div>
  </>

  );
}
