import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Signup from "../pages/Signup";
import Forgotpass from "../pages/Forgotpass";
import IT from "../pages/IT";
import Form from "../pages/Form";
import Form2 from "../pages/Form2";
import LoginForm from '../pages/LoginForm';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/IT" element={<IT/>}/>
      <Route path="/Form" element={<Form />} />
      <Route path="/Form2" element={<Form2 />} />
      <Route path="/Forgotpass" element={<Forgotpass />} />
      <Route path="/LoginForm" exact component={<LoginForm/>} />
      <Route path="/Form" component={Form} />
    </Routes>
  );
};

export default Routers;
