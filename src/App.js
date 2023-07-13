import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import ChangePass from "./ChangePass";
import ForgotPassword from "./ForgotPassword";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import UpdateProfile from "./UpdateProfile";
import Delete from "./Delete";
import Dashboard from "./Dashboard";
 
// import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Link to="/Login">Login</Link>  |
        <Link to="/Dashboard">Dashboard</Link>  |       
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/ChangePass" element={<ChangePass />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/UpdateProfile" element={<UpdateProfile />} />
          <Route path="/Delete" element={<Delete />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;