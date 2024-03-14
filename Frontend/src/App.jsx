import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import Home from './Home/Home';
import CreateBlog from './CreateBlog/CreateBlog';
import Headers from './NavBar/Headers';

const App = () => {
  return (
    <BrowserRouter>
    <Headers/>
      <Routes>
        <Route path='' element = {<Home/>} />
        <Route path='/createblog'  element = {<CreateBlog/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App