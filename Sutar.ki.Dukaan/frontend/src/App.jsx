import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Shop from './components/Shop';
import Loginpage from './components/Loginpage';
import SignupPage from './components/SignupPage';
import Home from './components/Home';
import CartPage from './components/cartpage';
import Cards from './components/Cards';

function App() {
  const [basket,setBasket] = useState([])
  return (
    <div className="app">
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Shop" element={<Shop basket={basket}/>} />
          <Route path="/Login" element={<Loginpage />} />
          <Route path="/SignupPage" element={<SignupPage />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/Cards" element={<Cards basket={basket} setBasket={setBasket}/>}></Route>
          
        </Routes>
      
    </div>
  );
}

export default App;
