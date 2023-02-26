import React, { useEffect, useState } from 'react'
import Nav from '../layout/Nav'
import axios from 'axios'
import { Link,useParams } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

const Home = () => {
    const [users,setUsers]=useState([])

    const { foodID } = useParams();

    useEffect(()=>{
        loadUsers();
    },[])

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/gfood");
        setUsers(result.data);
    }

    const deleteUser = async (foodID) => {
        await axios.delete(`http://localhost:8080/delfood/${foodID}`);
        loadUsers();
      };

  return (
    <div className='bodyy'>
        <Nav/>
      <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Food item</th>
      <th scope="col">Calories</th>
      <th scope="col">Ingridients</th>
      <th scope="col">Recipe</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>


{
    users.map((user,index)=>(
        <tr>
        <th scope="row" key={index}>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.calories}</td>
        <td>{user.ingridients}</td>
        <td>{user.receipe}</td>
        <td>
            <Link className='btn btn mx' to={`/viewuser/${user.foodID}`}><VisibilityOutlinedIcon style={{ color: "purple" }}/></Link>
            <Link  className='btn btn-outline mx-2' to={`/edit/${user.foodID}`}><ModeEditOutlineOutlinedIcon style={{ color: "blue" }}/></Link>
            <button className='btn btn mx-2' color='red'
            onClick={()=>deleteUser(user.foodID)}
            ><DeleteOutlineIcon style={{ color: "red" }}/></button>
        </td>
      </tr>
    ))
}

   
   
  </tbody>
</table>


    </div>
  )
}

export default Home
