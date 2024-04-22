import React from "react";

function Cards() {
  const cards = [
    { title: 'Cyberpunk wireless Controller', description: 'Description for Card 1', imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSoeaUNxAfDqKvI1xEiSlsYF_t8V1NHpLaC-CFcUXnb86w6REtAdMPBwNKZMyZ2NB3Po-wiuwJPubJ8alKxrzHnriUB2dBhIQ&usqp=CAE',price:'100Rs'},
    { title: 'Zebronics Gaming Keyboard', description: 'Description for Card 2', imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTmZHtI3HxjjaeZv_0dv2QRinDOe2rGnKphJFwPmaO9Tu-p7EeEVYNMSspTYczSR8PHsPk_Sntn9ps387stgqD94UMQI62gf8rHLU0RPcrzxaXzKDMCPg88rg&usqp=CAE',price:'100Rs.'},
    { title: 'The EvoFox Elite Ops Wireless Gamepad', description: 'Description for Card 3', imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTb13TyCBYvODyuemm34w6-vJ1I5WKIhDn_V91akdm_kPEcmeY7HA1_cCl1TdvT_olK1Qw9H7LTrT4AyYDiHbwvGFpJh3Akl5SKDLdzZnUxvk0bozjaChl_&usqp=CAE',price:'100Rs.'},
    { title: 'SAVYA HOME Gaming Chair & Headset', description: 'Description for Card 4', imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQGSTMVpAp-sdFA83pjQK8765jixawuUZHKXCMS4Xtbbt5SRDWNNp_WQu5lPGNVO8YUw7kld_KHNYspLKhHLNDEZ8Sp4OOfR9t4Oaxh8I3S',price:'100Rs.'},
  ];

  const types = [
    {}
  ];

  return (
    <div className="container mx-auto p-8 my-6">
      <h1 className="text-2xl font-bold mb-4"></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="bg-gradient-to-r from-[#24ff5e] to-blue-500 rounded-lg shadow-md p-1">
            <img src={card.imageUrl} alt={card.title} className="mb- border-solid border-8 border-[#000000] rounded-t-lg outline-2" style={{ maxHeight: '300px' }} />
            <div className="bg-[#000000]  rounded-md outline-2">
              <h2 className="text-lg font-semibold mb-2 text-white bg-[#000000] px-2">{card.title}</h2>
              <p className="text-white bg-[#000000] px-2">{card.description}</p>
              <h2 className="text-lg font-semibold m-2 text-white bg-[#000000]">{card.price}</h2>
              <button className="bg-yellow-400 p-2 pb-2 m-2 rounded-md font-bold hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
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
