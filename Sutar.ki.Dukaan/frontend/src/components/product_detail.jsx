import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { cards } from "./data";
import Footer from './Footer';

export default function Product_Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = cards.find(card => card.id === parseInt(id));

  function handleClick() {
    navigate("/Shop");
  }

  return (
    <div>
      <nav className="bg-gray border-teal-500 border-b-2 dark:bg-gray-1000 flex justify-start items-center px-6 ">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Link to={``} className="flex items-center space-x-5 space-y-0 rtl:space-x-reverse">
            <img src="https://i.ibb.co/V0ymnXq/logo-removebg-preview.png" alt="logo-removebg-preview" className="h-8" />
            <span className="self-center text-3xl font-mono text-teal-300 font-bold">SUTAR.KI.DUKAAN</span>
          </Link>
        </div>

        <ul className="flex space-x-3 mx-56 font-mono mt-2 text-2xl font-bold justify-center">
          <li>
            <button className='py-1 px-8 my-1 mx-1 text-gray-900 bg-cyan-400 rounded-l-lg dark:md:hover:bg-emerald-400' onClick={handleClick}>Shop</button>
          </li>
          <li>
            <button className='py-1 px-8 my-1 mx-1 text-gray-900 bg-cyan-400 dark:md:hover:bg-emerald-400'>About</button>
          </li>
          <li>
            <button className="py-1 px-8 my-1 mx-1 text-gray-900 bg-cyan-400 rounded-r-lg dark:md:hover:bg-emerald-400">Cart</button>
          </li>
        </ul>
      </nav>
      <div className="p-10">
  <div className="max-w-xl w-full space-x-1  lg:max-w-full lg:flex">
    <div className="h-80 lg:h-auto lg:w-80 flex-none bg-cover rounded lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
      <img src={product.imgSrc} alt={product.title} className="h-full w-full object-cover" />
    </div>
    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div className="mb-8 text-black bg-white">
        <div className="text-black bg-white font-bold text-xl mb-2">{product.title}</div>
        <dl>
          <div className="text-black bg-white">
            <div className="text-xl font-bold pb-2 text-black bg-white">{product.description}</div>
          </div>
          <div className="text-black bg-white">
            <div className="text-xl font-bold pb-2 text-black bg-white">Category : {product.category}</div>
          </div>
          <div className="text-black bg-white">
            <dt className="sr-only text-black bg-white">Price</dt>
            <dd className="text-2xl font-semibold p-2 text-black bg-white">{product.price}</dd>
          </div>
        </dl>
        <div className="text-black bg-white">
            <dt className="sr-only text-black bg-white"></dt>
            <dd className="text-xl font-semibold p-2 text-black bg-white">
                <a href={product.amazonLink} className='text-black bg-white'>Amazon link</a>
                </dd>
          </div>
      </div>
      <button className="bg-yellow-400 text-black p-2 pb-2 m-2 rounded-md font-bold hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" onClick={handleClick}>
        Add To Cart
      </button>
    </div>
  </div>
</div>
<Footer/>
</div>
  );
}
