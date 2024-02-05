import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.min.js' 
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css';

import { BrowserRouter } from "react-router-dom"
import {Ruta } from "./Routers/Routers"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Ruta />
    </BrowserRouter>
  </React.StrictMode>,
)
