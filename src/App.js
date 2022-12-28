import React from 'react';
import {Login, SignUp } from "./Components"
import { Route, Routes ,Navigate} from "react-router-dom";
import { HomePage } from './Components/HomePage';
function App() {
  return (
    <div >
     <Routes>
        <Route path="/" element={<Navigate to="/Login" />} /> 
        <Route path="/login" element={<Login/>} /> 
        
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
