import React from "react";
import { Login, SignUp, HomePage,Forgetpassword } from "./Components";
import { Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";
function App() {
  const loggedIn = useSelector((state) => state.signUp.loggedIn);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/homepage" 
        element={
          <ProtectedRoute loggedIn={loggedIn}>
            <HomePage/>
          </ProtectedRoute>
      } />
        <Route path="/forgetpassword" element= {<Forgetpassword/>} />
      </Routes>
    </div>
  );
}

export default App;
