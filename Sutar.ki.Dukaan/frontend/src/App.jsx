import { Routes,Route } from 'react-router-dom';
import './App.css';
import Shop from './components/Shop';
import Home from './components/Home';


function App() {
  return (
    <div className="app">
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Shop" element={<Shop/>}/>

    </Routes>
    </div>

  );
}

export default App;