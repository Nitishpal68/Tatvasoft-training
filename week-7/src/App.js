import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import AddStudent from "./components/AddStudent";
import AddStudentp from "./components/AddStudentp";
import AddMultiplestudents from "./components/AddMultiplestudents";
import AddBooks from "./components/AddBooks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/addstudent" element={<AddStudent />}></Route>
          <Route path="/addstu" element={<AddStudentp />}></Route>
          <Route path="/addmul" element={<AddMultiplestudents />}></Route>
          <Route path="/addbook" element={<AddBooks />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
