import React from 'react';

export default function Footer() {
  return (
    <footer className="flex flex-col  bg-gray-900 flex-grow">
      
        <div className="text-center">
            <h3 className='font-sans text-teal-300 font-bold'>Developed By Sutar</h3>
        </div>
        <div className="mt-0 flex flex-col pt-4 pb-4 md:flex-row md:justify-center items-center text-sm text-gray-400">
          <p className="mb-0 md:mb-0">&copy; Sutar 2024.</p>
          <div className='flex'>
            <a href="https://carpentrycoder.github.io/Resume/"><span className="px-2">Contact us</span></a>
            <a href="https://www.linkedin.com/in/nikhil-sutar-2nd-year-b5471b2b7/?trk=public-profile-join-page" ><span className="px-2">LinkedIn</span></a>
            <a href="https://github.com/carpentrycoder" ><span className="px-2">GitHub</span></a>
          </div>
        </div>
    </footer>
  );
}
