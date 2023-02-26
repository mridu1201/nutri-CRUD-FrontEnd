import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams,Link} from 'react-router-dom'
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ViewUser = () => {

    const [user,setUser]=useState({
        name:"",
        calories:"",
        ingridients:"",
        receipe:""
    })
    const {foodID}=useParams();

    useEffect(()=>{
      loadUser()
    },[])


    const loadUser=async ()=>{
      const result=await axios.get(`http://localhost:8080/getfood/${foodID}`);
      setUser(result.data);
    };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Dish Recipe</h2>

          <div className="card">
            <div className="card-header">
              Details of Food id : {user.foodID}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Food:</b> {user.name}
                </li>
                <li className="list-group-item">
                  <b>Calories:</b> {user.calories}
                </li>
                <li className="list-group-item">
                  <b>Ingridients:</b> {user.ingridients}
                </li>
                <li className="list-group-item">
                  <b>Recipe:</b> {user.receipe}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-info my-2" to={"/"}>
            <ArrowBackIcon style={{color:'white'}}/><HomeIcon style={{color:'white'}}/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ViewUser
