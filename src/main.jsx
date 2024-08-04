import React from 'react'
import ReactDOM from 'react-dom/client'
import {GlobalSyles} from './styles/GlobalStyles.js'
import  router from "./routes.jsx";
import {RouterProvider} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalSyles/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
