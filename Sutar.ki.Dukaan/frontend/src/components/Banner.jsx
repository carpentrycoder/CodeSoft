import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Banner() {
  const navigate = useNavigate();

  function handleLoginClick() {
    navigate("/login");
  }

  function handleSignupClick() {
    navigate("/SignupPage");
  }

  return (
    <section>
      <div className="bg-black text-white">
        <div className="container  flex flex-col md:flex-row items-center my-9 -mx-10 md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-6">
            <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">Sutar.Ki.Dukaan</h1>
            <h2 className="text-3xl md:text-3xl leading-relaxed md:leading-snug mb-2">Your One-Stop Shop for Products</h2>
            <p className="text-sm md:text-base text-gray-50 mb-4">Explore your favourite clothings and register now and explore your Dressing Sense.</p>
            <div className="flex flex-wrap">
              <button className="transition duration-700 ease-in-out bg-transparent  text-yellow-300 font-bold hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border-5 border-yellow-300 hover:bg-white mb-2 md:mr-2" onClick={handleLoginClick}>Login</button>
              <button className="transition duration-700 ease-in-out bg-transparent  text-yellow-300 font-bold hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border-5 border-yellow-300 hover:bg-white mb-2" onClick={handleSignupClick}>Signup</button>
            </div>
          </div>
          <div className="flex justify-center items-center flex-wrap w-full lg:w-2/3 mt-10 md:mt-0">
            <img className="inline-block mx-auto md:mx-0 p-1 md:p-8 w-80 h-80 transform -rotate-40 rounded-full border-solid border-8 border-#e800ff-500 border-teal-400 hover:border-dotted drop-shadow-2xl" src="https://blenderartists.org/uploads/default/original/4X/f/4/d/f4d966e7afb4eea55e94b3a723e22deb5efba998.jpeg" alt="Banner " />
            <img className="inline-block mt-6 md:mt-0 w-60 h-60 rounded-full border-solid border-8 border-#e800ff-500 border-teal-400 hover:border-dotted" src="https://i.ibb.co/1mJg65B/Untitled-design.png" alt="Image" />
          </div>
        </div>
      </div>
    </section>
  );
}
