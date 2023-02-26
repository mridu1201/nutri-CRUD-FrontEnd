import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';

function App() {
  return (
    <div className='login'>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/adduser' element={<AddUser/>}></Route>
      <Route path='/viewuser/:foodID' element={<ViewUser/>}></Route>
      <Route path='/edit/:foodID' element={<EditUser/>}></Route>
  </Routes>
      
    </div>
  );
}

export default App;