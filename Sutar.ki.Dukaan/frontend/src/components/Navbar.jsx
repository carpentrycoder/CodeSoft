import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick() {
    navigate("/Shop");
  }

  function handleCart() {
    navigate("/CartPage");
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <nav className="justify-center bg-gray  dark:bg-gray-1000 border-b-2  border-teal-400">
        <div className="px-21 max-w-screen-xl flex justify-between flex-wrap items-center  mx-auto">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Link to="/" className="flex items-center space-x-3">
              <img src="https://i.ibb.co/V0ymnXq/logo-removebg-preview.png" alt="logo-removebg-preview" className="h-8" />
              <span className="self-center text-3xl font-mono text-teal-300 font-bold">SUTAR.KI.DUKAAN</span>
            </Link>
          </div>
          
          <div className="flex md:order-2">
            <button type="button" className="inline-flex items-center p-2 w-18 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={toggleMenu} aria-expanded={isMenuOpen}>
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between w-full md:flex md:w-auto ${isMenuOpen ? '' : 'hidden'}`} id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="search-navbar" className="block w-3/4 p-1 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>
            <ul className="flex pt-2 px-3 font-mono text-2xl font-bold">
              <li>
                <button className='py-1 px-8 my-2 mx-1 text-gray-900 bg-cyan-400 rounded-l-lg dark:hover:bg-emerald-400' onClick={handleClick}>Shop</button>
              </li>
              <li>
                <button className='py-1 px-8 my-2 mx-1 text-gray-900 bg-cyan-400 dark:hover:bg-emerald-400'>About</button>
              </li>
              <li>
                <button className="py-1 px-8 my-2 mx-1 text-gray-900 bg-cyan-400 rounded-r-lg dark:hover:bg-emerald-400" onClick={handleCart}>Cart</button>
              </li>
            </ul>
          </div>
          <form className="flex" role="search">
            <input className="form-input border-1 mx-2 mr-3 border-white rounded-lg pl-5 text-white" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
          </form>
          </div>
      </nav>
    </>
  );
}
