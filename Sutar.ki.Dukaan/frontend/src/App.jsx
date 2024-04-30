import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Shop from './components/Shop';
import Loginpage from './components/Loginpage';
import SignupPage from './components/SignupPage';
import Home from './components/Home';
import CartPage from './components/cartpage'; // Corrected file name
import Cards from './components/Cards'; // Assuming this is the correct import statement
import  { cards }  from "./components/data"; // Changed import statement
import ProductDetail from "./components/product_detail"; // Corrected import statement

function App() {
  const [cardData, setData] = useState([...cards]); // const [cartPage,setCartPage] = useState([]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/Login" element={<Loginpage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/Cards" element={<Cards data={cardData} setData={setData} />} />
        <Route path="/product_detail/:id" element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
