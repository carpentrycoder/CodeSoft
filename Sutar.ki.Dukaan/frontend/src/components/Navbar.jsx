import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray border-gray-200 dark:bg-gray-1000">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://i.ibb.co/V0ymnXq/logo-removebg-preview.png" alt="logo-removebg-preview" className="h-8" />
            <span className="self-center text-3xl font-mono text-teal-300 font-bold">SUTAR.KI.DUKAAN</span>
          </a>
          <div className="flex md:order-2">
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2 me-1">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:flex ">
              <input type="text" id="search-navbar" className="block w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-11/12 ps-10 text-sm text-gray-900 border-4 border-gray-300 rounded-l-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-9" placeholder='Search' />
              <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-r-lg transition duration-150 ease-in-out">
                Search
              </button>
            </div>
            <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-18 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="search-navbar" className="block w-3/4 p-1 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>
            <ul className="flex pt-2 font-mono text-2xl font-bold">
              <li>
                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section>
        <div class="bg-black text-white ">
          <div class="container mx-auto flex flex-col md:flex-row items-center my-9 -mx-10 md:my-24">
            <div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-6">
              <h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">Sutar.Ki.Dukaan</h1>
              <h2 class="text-3xl md:text-3xl leading-relaxed md:leading-snug mb-2">Your One-Stop Shop for Products
              </h2>
              <p class="text-sm md:text-base text-gray-50 mb-4">Explore your favourite clothings and
                register now and explore your Dressing Sense.</p>
                <button class="transition duration-700 ease-in-out bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border-5 border-yellow-300 hover:bg-white" href="">Button C</button>
            </div>
            <div class="h-48 flex flex-wrap content-center">
              <div class="flex justify-center items-start">
                <div class="flex flex-col items-center mx-2 md:mx-0">
                  <img class="hover: inline-block mx-10 md:mt-0 p-1 md:p-8 w-80 h-80 transform -rotate-40 rounded-full border-solid border-8 border-#e800ff-500 border-teal-400 hover:border-dotted drop-shadow-2xl" src="https://blenderartists.org/uploads/default/original/4X/f/4/d/f4d966e7afb4eea55e94b3a723e22deb5efba998.jpeg" />
                </div>
                <div class="flex flex-col items-center">
                  <img class="inline-block mt-78 xl:block w-60 h-60 rounded-full border-solid border-8 border-#e800ff-500 border-teal-400 hover:border-dotted" src="https://i.ibb.co/1mJg65B/Untitled-design.png" />

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </>
  );
}
