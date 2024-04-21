import React from 'react';

export default function Footer() {
  return (
    <footer className="flex flex-col  bg-gray-900 flex-grow">
      
        <div className="text-center">
            <h3 className='font-mono text-teal-300 font-bold'>Developed By Nikhil Sutar</h3>
          <div className="flex flex-col md:flex-row justify-center md:justify-center mt-8">
            <div className="flex items-center border border-white rounded-lg px-4 py-2 md:w-52 md:mx-2 mb-4 md:mb-0">
              <img src="https://i.ibb.co/PgM69Z2/github-1.png" className="w-7 md:w-8 mr-2" alt="Google Play Store" />
              <div className="text-left">
                <p className="text-sm md:text-base text-white">GitHub</p>
              </div>
            </div>
            <div className="flex items-center border border-white rounded-lg px-4  md:w-52 md:mx-2">
              <img src="https://i.ibb.co/3f5gxYr/linkedin.png" className="w-7 md:w-8 mr-2" alt="Apple Store" />
              <div className="text-left">
                <a href=''><p className="text-sm md:text-base text-white">LinkedIn</p></a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-0 flex flex-col pt-4 md:flex-row md:justify-center items-center text-sm text-gray-400">
          <p className="mb-0 md:mb-0">&copy; Sutar 2024.</p>
          <div>
            <span className="px-2">About us</span>
            
            <a href=''><span className="px-2 border-l">Contact us</span></a>
            
            <span className="px-2 border-l">Privacy Policy</span>
          </div>
        </div>
    </footer>
  );
}
