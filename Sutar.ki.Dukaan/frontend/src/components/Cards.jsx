import React from "react";

function Cards() {
  const cards = [
    { title: 'Cyberpunk wireless Controller', imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSoeaUNxAfDqKvI1xEiSlsYF_t8V1NHpLaC-CFcUXnb86w6REtAdMPBwNKZMyZ2NB3Po-wiuwJPubJ8alKxrzHnriUB2dBhIQ&usqp=CAE', price:'100Rs' },
    { title: 'Zebronics Gaming Keyboard', imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTmZHtI3HxjjaeZv_0dv2QRinDOe2rGnKphJFwPmaO9Tu-p7EeEVYNMSspTYczSR8PHsPk_Sntn9ps387stgqD94UMQI62gf8rHLU0RPcrzxaXzKDMCPg88rg&usqp=CAE', price:'100Rs.' },
    { title: 'The EvoFox Elite Ops Wireless Gamepad', imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTb13TyCBYvODyuemm34w6-vJ1I5WKIhDn_V91akdm_kPEcmeY7HA1_cCl1TdvT_olK1Qw9H7LTrT4AyYDiHbwvGFpJh3Akl5SKDLdzZnUxvk0bozjaChl_&usqp=CAE', price:'100Rs.' },
    { title: 'SAVYA HOME Gaming Chair & Headset', imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQGSTMVpAp-sdFA83pjQK8765jixawuUZHKXCMS4Xtbbt5SRDWNNp_WQu5lPGNVO8YUw7kld_KHNYspLKhHLNDEZ8Sp4OOfR9t4Oaxh8I3S', price:'100Rs.' },
  ];

  return (
    <div className="container mx-auto p-8 my-6">
      <div>
      <h1 className="text-4xl font-bold text-white mb-4 pt-4 justify-center">Our Products</h1>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 pt-4">
        {cards.map((card, index) => (
          <div key={index} href="#" className="block rounded-lg p-4 shadow-xl shadow-indigo-500 hover:shadow-[#facc15]">
            <img
              src={card.imageUrl}
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
              <button className="bg-yellow-400 text-black p-2 pb-2 m-2 rounded-md font-bold hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
