import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer'; // Assuming Footer is another component you've created

export default function SignupPage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <>
      <nav className='mt-3 pl-9'>
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://i.ibb.co/V0ymnXq/logo-removebg-preview.png" alt="logo-removebg-preview" className="h-8" />
          <span className="self-center text-3xl font-mono text-teal-300 font-bold">SUTAR.KI.DUKAAN</span>
        </Link>
      </nav>
      <div className="flex justify-center items-center py-5 pt-4 bg-black">
        <div className="bg-opacity-80 p-8 rounded-lg shadow-lg z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <h1 className="text-3xl font-bold justify-center text-white mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Sign Up</h1>
          <form className="space-y-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="flex flex-wrap justify-between items-center ">
              <div className='w-1/3 bg-indigo-500'>
                <label htmlFor="username" className="text-white block font-semibold mb-2 text-xl bg-indigo-500 ">Username</label>
                <input type="text" id="username" className="w-full block-incline border-2 px-4 py-2 rounded bg-indigo-900 text-white" />
              </div>
              <div className='w-1/3 bg-gradient-to-r from-indigo-500 to-purple-500 '>
                <label htmlFor="email" className="text-white block font-semibold mb-2 text-xl bg-gradient-to-r from-indigo-500 to-purple-500">Email Address</label>
                <input type="email" id="email" className="w-full block-incline border-2 px-4 py-2 rounded bg-indigo-900 text-white" />
              </div>
              <div className='w-1/3 bg-gradient-to-r from-purple-500 to-pink-500'>
                <label htmlFor="password" className="text-white block font-semibold mb-2 text-xl bg-gradient-to-r from-purple-500 to-pink-500">Password</label>
                <input type="password" id="password" className="w-full block-incline border-2 px-4 py-2 rounded bg-indigo-900 text-white " />
              </div>
            </div>
            {/* Address Field */}
            <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
              <label htmlFor="address" className="text-white block font-semibold mb-2 text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Address</label>
              <input type="text" id="address" className="w-full block-incline border-2 px-10 py-2 rounded text-white bg-indigo-900" />
            </div>
            {/* End of Address Field */}
            <button type="submit" className="w-full bg-blue-900 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-900">Sign Up</button>
          </form>
          <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <p className='text-white font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Already have an account?</p>
            <Link to='/login' className='font-bold text-white bg-gradient-to-r from-indigo-500 to-indigo-500'>Login</Link>
          </div>
        </div>
      </div> 
      <button className="bg-white text-black hover:bg-gray-100 border border-gray-300 py-2 px-4 absolute bottom-0 right-0 mb-20 mr-40 font-bold rounded-lg shadow" onClick={handleClick}>Back</button>
      <Footer className="pb-6"/>
    </>
  );
}
