import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import SistemaBancario from './components/SistemaBancario.jsx';
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/banco" element={<SistemaBancario/>} />
      </Routes>    
    </BrowserRouter>
    </>
  )
}

export default App
