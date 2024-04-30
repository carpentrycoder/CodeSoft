import React from "react";
import { Link , useNavigate } from 'react-router-dom';

export default function Cards({ data, setData }) {

  const filterByCategory = (category) => {
    const element = data.filter((card) => card.category === category);
    setData(element);
    console.log(element);
  }

  const navigate = useNavigate();
  
  function handleCart() {
    navigate("/CartPage");
  }
   
  

  return (
    <div className="container mx-auto p-8 my-6">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold text-white mb-4 pt-4 justify-center">Our Products</h1>
        <button className="text-2xl font-semibold rounded-lg w-24 h-12 py-2 px-4 bg-yellow-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50" onClick={handleCart}>
          Cart
        </button>
      </div>

      <div className="flex flex-wrap justify-between border-b-2 border-indigo-500 sm:space-x-4">
        <button className="w-full sm:w-auto bg-indigo-500 text-white px-3 py-2 sm:px-4 sm:py-2 gap-2 rounded-t-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600" onClick={() => filterByCategory('mobiles')}>Mobiles</button>
        {/* Add buttons for other categories */}
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 pt-5 ">
        {data.map((card, index) => (
          <Link to={`/product_detail/${card.id}`} key={card.id} href="#" className="block rounded-lg p-4 shadow-xl shadow-indigo-500 hover:shadow-[#facc15]">
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
              <button className="bg-yellow-400 text-black p-2 pb-2 m-2 rounded-md font-bold hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" onClick={handleCart}>
                Add To Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
