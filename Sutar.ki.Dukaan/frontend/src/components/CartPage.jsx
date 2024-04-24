import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CartPage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/Shop");
  }

  function handleCart() {
    navigate("/CartPage");
  }

  return (
    <>
    <nav className="bg-gray border-gray-200 dark:bg-gray-1000 flex justify-start items-center px-6 py-2">
      <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://i.ibb.co/V0ymnXq/logo-removebg-preview.png" alt="logo-removebg-preview" className="h-8" />
          <span className="self-center text-3xl font-mono text-teal-300 font-bold">SUTAR.KI.DUKAAN</span>
        </Link>
      </div>
      
        <ul className="flex space-x-3 mx-56 font-mono text-2xl font-bold justify-center">
          <li>
            <button className='py-1 px-8 my-2 mx-1 text-gray-900 bg-cyan-400 rounded-l-lg dark:md:hover:bg-emerald-400' onClick={handleClick}>Shop</button>
          </li>
          <li>
            <button className='py-1 px-8 my-2 mx-1 text-gray-900 bg-cyan-400 dark:md:hover:bg-emerald-400'>About</button>
          </li>
          <li>
            <button className="py-1 px-8 my-2 mx-1 text-gray-900 bg-cyan-400 rounded-r-lg dark:md:hover:bg-emerald-400" onClick={handleCart}>Cart</button>
          </li>
        </ul>
      </nav>
      </>
  );
}
