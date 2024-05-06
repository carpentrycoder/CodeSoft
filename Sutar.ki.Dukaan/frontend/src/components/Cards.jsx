import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { cards } from './data';

export default function Cards({ data = cards, setData }) {
  const [filteredData, setFilteredData] = useState(data);
  const [cartCount, setCartCount] = useState(0);
  //const [Cart, setcart] = useState([]);

  const filterByCategory = (category) => {
    if (category === '') {
      setFilteredData(data); // Reset filteredData to the original data array
    } 
    else
    {
    const element = data.filter((card) => card.category === category);
    setFilteredData(element);
    console.log(element);
    }
  }

  const navigate = useNavigate();

  function handleCart() {
    navigate("/CartPage");
  }

  function addToCart() {
    setCartCount(cartCount + 1); // Increment the count when a product is added to the cart
  }

  return (
    <div className="container mx-auto p-8  my-6">
      <div className="flex flex-col sm:flex-row items-center justify-between pb-12">
        <h1 className="text-4xl font-bold text-white mb-4 pt-4">Our Products</h1>
        <button className=" flex text-2xl font-semibold rounded-lg w-24 h-12 py-2 px-4 bg-yellow-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 mt-4 sm:mt-0" onClick={handleCart}>
          Cart 
          <div className="text-xl font-semibold rounded-full w-auto h-auto py-2 px-4 bg-red-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 mt-4 sm:mt-0">
          {cartCount}
          </div>
        </button>
      </div>


      <div className="flex flex-wrap justify-between border-b-2 border-indigo-500 sm:space-x-4">
        <button className="w-full sm:w-auto bg-indigo-500  px-5 py-2 sm:px-4 sm:py-2 gap-2 rounded-t-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 text-neutral-50 font-semibold text-xl " onClick={() => filterByCategory('')}>All Products</button>
        <button className="w-full sm:w-auto bg-indigo-500  px-5 py-2 sm:px-4 sm:py-2 gap-2 rounded-t-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 text-neutral-50 font-semibold text-xl " onClick={() => filterByCategory('mobiles')}>Mobiles</button>
        <button className="w-full sm:w-auto bg-indigo-500  px-5 py-2 sm:px-4 sm:py-2 gap-2 rounded-t-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 text-neutral-50 font-semibold text-xl " onClick={() => filterByCategory('laptops')}>Laptops</button>
        <button className="w-full sm:w-auto bg-indigo-500  px-5 py-2 sm:px-4 sm:py-2 gap-2 rounded-t-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 text-neutral-50 font-semibold text-xl " onClick={() => filterByCategory('tablets')}>Tablets</button>
        <button className="w-full sm:w-auto bg-indigo-500  px-5 py-2 sm:px-4 sm:py-2 gap-2 rounded-t-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 text-neutral-50 font-semibold text-xl " onClick={() => filterByCategory('gaming')}>Gaming</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 pt-5 ">
        {filteredData.map((card, index) => (
          <div to={`/product_detail/${card.id}`} key={card.id} href="#" className="block rounded-lg p-4 shadow-xl shadow-indigo-500 hover:shadow-[#facc15]">
            <img
              src={card.imgSrc}
              alt={card.title}
              className="h-56 w-full rounded-md object-cover"
            />
            <div className="mt-2">
              <dl>
                <div>
                  <dd className="text-lg font-semibold mb-2 text-white bg-[#000000] px-2">{card.title}</dd>
                </div>
                <div>
                  <dt className="sr-only ">Price</dt>
                  <dd className="text-lg font-semibold m-2 text-white bg-[#000000]">{card.price}</dd>
                </div>
              </dl>
              <div className="flex">
              <Link to={`/product_detail/${card.id}`} className="bg-yellow-400 text-black p-2 pb-2 m-2 rounded-md font-bold hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" onClick={handleCart}>
                View Product
              </Link>
              <button className="bg-yellow-400 text-black p-2 pb-2 m-2 rounded-md font-bold hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" onClick={addToCart}>
                Add To Cart
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
