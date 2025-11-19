import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import LoginCandidato from "./pages/LoginCandidato";
import LoginRecrutador from "./pages/LoginRecrutador";



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cursos" element={<Cursos />} />
      <Route path="/loginCandidato" element={<LoginCandidato />} />
      <Route path="/loginRecrutador" element={<LoginRecrutador />} />
     
      
      
    </Routes>
  );
}



