import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MasterLayout from "../MasterLayout/MasterLayout";
import Shop from '../Shop/Shop'
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import Article from '../Article/Article'
import Fqs from '../Fqs/Fqs'


export default function App() {
  let routes = createBrowserRouter([{
    path:'/' , element:<MasterLayout/> ,
    children:[
      {index:true , element:<Home/> },
      {path:'shop' , element:<Shop/>},
      {path:'contact' , element:<Contact/>},
      {path:'article' , element:<Article/>},
      {path:'shop' , element:<Shop/>},
      {path:'fqs' , element:<Fqs/>},


    ]
  }])
  return (
    <>
      
      <RouterProvider router={routes}/>
     
    </>
  )
}
