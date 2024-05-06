import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CartPage({ cart }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/Shop");
  }

  return (
    <>
      <nav className="bg-gray dark:bg-gray-1000 flex justify-between items-center px-6 py-1 pb-2 border-b-2 border-teal-400">
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-3">
            <img src="https://i.ibb.co/V0ymnXq/logo-removebg-preview.png" alt="logo-removebg-preview" className="h-8" />
            <span className="self-center text-3xl font-mono text-teal-300 font-bold">SUTAR.KI.DUKAAN</span>
          </Link>
        </div>

        <div className='flex flex-row items-center  px-4'>
          <img src="https://i.ibb.co/KyC2sm2/Untitled-design-1.png" alt="Untitled-design-1" className="w-12 h-12 mr-4" />
          <h2 className="text-4xl mt-2 text-teal-400 font-mono font-bold">Your Cart</h2>
        </div>

        <ul className="flex space-x-3 pt-2 font-mono text-2xl font-bold">
          <li>
            <button className='py-1 px-4 my-2 text-gray-900 bg-cyan-400 rounded-l-lg dark:hover:bg-emerald-400' onClick={handleClick}>Shop</button>
          </li>
          <li>
            <button className='py-1 px-4 my-2 text-gray-900 bg-cyan-400 dark:hover:bg-emerald-400'>About</button>
          </li>
          <li>
            <button className="py-1 px-4 my-2 text-gray-900 bg-cyan-400 rounded-r-lg dark:hover:bg-emerald-400">Cart</button>
          </li>
        </ul>
      </nav>

      <div className="container mx-auto p-8 my-6">
        <div className="flex flex-col items-center justify-center">
          {cart.length === 0 ? (
           <>
           <img src="https://i.ibb.co/DbNPtFJ/9650074-7612-removebg-preview.png" alt="9650074-7612-removebg-preview" className='w-auto h-64' border="0" />
           <p className="text-4xl font-semibold text-white">Your cart is empty</p>
           </>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {cart.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                  <img src={item.imgSrc} alt={item.title} className="h-48 w-full object-cover rounded-md mb-4" />
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-gray-800 mt-2 font-semibold">{item.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
