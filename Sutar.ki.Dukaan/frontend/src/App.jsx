import { Routes,Route } from 'react-router-dom';
import './App.css';
import Shop from './components/Shop';
import Loginpage from './components/Loginpage';
import Home from './components/Home';


function App() {
  return (
    <div className="app">
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Shop" element={<Shop/>}/>
      <Route path="/Login" element={<Loginpage/>} />
    </Routes>
    </div>

  );
}

export default App;