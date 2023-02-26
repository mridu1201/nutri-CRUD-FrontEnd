import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
    let navigate = useNavigate();

    const {foodID}=useParams();
  
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
  
    useEffect(()=>{
        loadUser();
    },[])

    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:8080/upfood/${foodID}`, user);
      navigate("/");
    };

    const loadUser =async()=>{
        const result =await axios.get(`http://localhost:8080/upfood/${foodID}`);
        setUser(result.data);
    }
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Change this Dish</h2>
  
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
              
              
              <button type="submit" className="btn btn-outline-primary">
                Make Changes
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/">
                Cancel
              </Link>
            </form>
          </div>
        </div>
    </div>
  
  
    );
  }
  