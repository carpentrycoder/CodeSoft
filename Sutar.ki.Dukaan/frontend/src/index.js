import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>    
    <App />
</BrowserRouter>
  </React.StrictMode>
);

export default function Home() {
  return (
      <div className="min-h-[200vw]">
          <img className="fixed top-1/2 left-1/4 w-96"
              src=
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/logo-new-2.svg"
              alt="" />
      </div>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
