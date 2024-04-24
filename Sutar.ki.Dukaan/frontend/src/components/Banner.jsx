import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Banner() {
  const navigate = useNavigate();
  function handleclick() {
    navigate("/login")
  }

  function handleclick_signup() {
    navigate("/SignupPage")
  }
  return (
    <section>
      <div class="bg-black text-white ">
        <div class="container mx-auto flex flex-col md:flex-row items-center my-9 -mx-10 md:my-24">
          <div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-6">
            <h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">Sutar.Ki.Dukaan</h1>
            <h2 class="text-3xl md:text-3xl leading-relaxed md:leading-snug mb-2">Your One-Stop Shop for Products
            </h2>
            <p class="text-sm md:text-base text-gray-50 mb-4">Explore your favourite clothings and
              register now and explore your Dressing Sense.</p>
            <div class="flex">
              <button class="transition duration-700 ease-in-out bg-transparent hover:bg-yellow-300 text-yellow-300 font-bold hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border-5 border-yellow-300 hover:bg-white mr-2" onClick={handleclick}>Login</button>
              <button class="transition duration-700 ease-in-out bg-transparent hover:bg-yellow-300 text-yellow-300 font-bold hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border-5 border-yellow-300 hover:bg-white" onClick={handleclick_signup}>Signup</button>
            </div>

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
  )
}


