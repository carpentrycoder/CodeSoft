import { Routes, Route } from 'react-router-dom';
import './App.css';
import Shop from './components/Shop';
import Loginpage from './components/Loginpage';
import SignupPage from './components/SignupPage';
import Home from './components/Home';
import CartPage from './components/cartpage';

function App() {
  return (
    <div className="app">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Login" element={<Loginpage />} />
          <Route path="/SignupPage" element={<SignupPage />} />
          <Route path="/CartPage" element={<CartPage />} />
          
        </Routes>
      
    </div>
  );
}

export default App;
