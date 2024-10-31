import React from 'react'; 
import axios from 'axios';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Pages/Header/Header';
import Sidebar from './Pages/Sidebar/Sidebar';
import Welcome from './Pages/Welcome/Welcome';
import './index.css';
import About from './Pages/About/About';
import Community from './Pages/Community/Community';
import Installation from './Pages/Installation/Installation';
import DescribingUI from './Pages/DescribingUI/DescribingUI';
import Resources from './Pages/Resources/Resources'; 
import StateHooks from './Pages/StateHookPage/StateHook';
import ErrorPage from './Pages/Error/Error';
import Users from './Pages/Users/Users';
import UserPage from './Pages/Users/UserPage';
import usersData from './data/users.json';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom';



const Root = () => { 

  return (
    <div className='container'>        
      <Header />
      <Sidebar /> 
      <Outlet/> 
    </div>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Welcome />} />
      <Route path='statehooks' element={<StateHooks/>} />
      <Route path='community' element={<Community />} />
      <Route path='installation' element={<Installation />} />
      <Route path='describing' element={<DescribingUI />} />
      <Route path='resources' element={<Resources/>} />
      <Route path='about' element={<About />} />
      <Route path='users' element={<Users />} />
      <Route path='users/:userId' loader={loader} element={<UserPage />} errorElement={<ErrorPage/>} />
      <Route path='*' element={<ErrorPage/>} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={router} />
);




function loader({params}) {
  
  const user = usersData.filter(e => e.id === params.userId);
  
  return user[0];
}



// function loader({ params }) {

// const searchWeather = ()=> {    
//     axios.get("https://jsonplaceholder.typicode.com/users?_limit=5")
//       .then((response) => {         
//         (response.data);             
//     })
//   }

//   console.log(users);
// //     // axios
// //     //   .get("https://jsonplaceholder.typicode.com/users?_limit=5")
// //     // .then(res => res.data);

// //   // console.log(arr); 
// //   // console.log(usersData)
//    const user = usersData.filter(e => e.id === params.userId);

  
//   return user[0]; 
    
// }