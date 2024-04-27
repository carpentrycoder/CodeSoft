import React from "react";
import { useNavigate } from 'react-router-dom';
import useBasket from './useBasket';

export default function Cards() {
  const navigate = useNavigate();
  const { addToBasket } = useBasket();

  function handleCart() {
    navigate("/CartPage");
  }

  const cards =  [
    {
      id: 1,
      category: 'mobiles',
      title: "Apple iPhone 14",
      imgSrc: 'https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg',
      amazonLink: 'https://amzn.to/3PuckZp',
      description: 'Apple iPhone 14 (128 GB) - Blue',
      price: '89999',
    },
    {
      id: 5,
      category: 'laptops',
      title: "Xiaomi [Smartchoice] Notebookpro",
      imgSrc: 'https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg',
      amazonLink: 'https://amzn.to/3EzeQaC',
      description: 'Xiaomi [Smartchoice] Notebookpro ',
      price: '49999',
    },
    {
      id: 7,
      category: 'tablets',
      title: "Xiaomi Pad 6",
      imgSrc: 'https://m.media-amazon.com/images/I/51b9LjzmPCL._SL1080_.jpg',
      amazonLink: 'https://amzn.to/3ZeNRdY',
      description: 'Xiaomi Pad 6| Qualcomm Snapdragon 870| ',
      price: '29999',
    },
    {
      id: 2,
      category: 'mobiles',
      title: "Apple iPhone 11",
      imgSrc: 'https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg',
      amazonLink: 'https://amzn.to/44MiYi6',
      description: 'Apple iPhone 11 (64GB) - White',
      price: '79999',
    },
    {
      id: 6,
      category: 'tablets',
      title: "Lenovo Tab P12 Pro AMOLED",
      imgSrc: 'https://m.media-amazon.com/images/I/51b9LjzmPCL._SL1080_.jpg',
      amazonLink: 'https://amzn.to/3RabsdH',
      description: 'Lenovo Tab P12 Pro AMOLED (12.6 inch (32 cm), 8 GB, 256 GB, Wi-fi Only), Storm Grey with Precision Pen 3',
      price: '19999',
    },
    {
      id: 3,
      category: 'mobiles',
      title: "Apple iPhone 13",
      imgSrc: 'https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg',
      amazonLink: 'https://amzn.to/3r6XJtv',
      description: 'Apple iPhone 13 (128GB) - Blue',
      price: '69999',
    },
    {
      id: 4,
      category: 'laptops',
      title: "Lenovo IdeaPad Slim 5 ",
      imgSrc: 'https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg',
      amazonLink: 'https://amzn.to/44JsK4r',
      description: 'Lenovo IdeaPad Slim 5 Intel Core i5 12450H 14" (35.5cm) ',
      price: '29999',
    },
    {
      id: 9,
      category: 'tablets',
      title: "Samsung Galaxy Tab A8",
      imgSrc: 'https://m.media-amazon.com/images/I/51b9LjzmPCL._SL1080_.jpg',
      amazonLink: 'https://amzn.to/3Pdsh4F',
      description: 'Samsung Galaxy Tab A8 26.69cm (10.5 inch) Display, RAM 4 GB, ROM 64 GB Expandable, Wi-Fi Tablet, Gray, (SM-X200NZAEINU)',
      price: '49999',
    },
    {
      id: 8,
      category: 'laptops',
      title: "Apple MacBook Air Laptop",
      imgSrc: 'https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg',
      amazonLink: 'https://amzn.to/3r9rvhm',
      description: 'Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, ',
      price: '89999',
    },
    {
      id: 1,
      category: 'gaming',
      title: 'Cyberpunk wireless Controller',
      imgSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSoeaUNxAfDqKvI1xEiSlsYF_t8V1NHpLaC-CFcUXnb86w6REtAdMPBwNKZMyZ2NB3Po-wiuwJPubJ8alKxrzHnriUB2dBhIQ&usqp=CAE',
      amazonLink: '',
      description: '',
      price: '100Rs'
    },
    {
      id: 2,
      category: 'gaming',
      title: 'Zebronics Gaming Keyboard',
      imgSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTmZHtI3HxjjaeZv_0dv2QRinDOe2rGnKphJFwPmaO9Tu-p7EeEVYNMSspTYczSR8PHsPk_Sntn9ps387stgqD94UMQI62gf8rHLU0RPcrzxaXzKDMCPg88rg&usqp=CAE',
      amazonLink: '',
      description: '',
      price: '100Rs.'
    },
    {
      id: 3,
      category: 'gaming',
      title: 'The EvoFox Elite Ops Wireless Gamepad',
      imgSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTb13TyCBYvODyuemm34w6-vJ1I5WKIhDn_V91akdm_kPEcmeY7HA1_cCl1TdvT_olK1Qw9H7LTrT4AyYDiHbwvGFpJh3Akl5SKDLdzZnUxvk0bozjaChl_&usqp=CAE',
      amazonLink: '',
      description: '',
      price: '100Rs.'
    },
    {
      id: 4,
      category: 'gaming',
      title: 'SAVYA HOME Gaming Chair & Headset',
      imgSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQGSTMVpAp-sdFA83pjQK8765jixawuUZHKXCMS4Xtbbt5SRDWNNp_WQu5lPGNVO8YUw7kld_KHNYspLKhHLNDEZ8Sp4OOfR9t4Oaxh8I3S',
      amazonLink: '',
      description: '',
      price: '100Rs.'
    }
  ];

  return (
    <div className="container mx-auto p-8 my-6">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold text-white mb-4 pt-4 justify-center">Our Products</h1>
        <button className="text-2xl font-semibold rounded-lg w-24 h-12 py-2 px-4 bg-yellow-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50" onClick={handleCart}>
          Cart
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 pt-4">
        {cards.map((card, index) => (
          <div key={index} href="#" className="block rounded-lg p-4 shadow-xl shadow-indigo-500 hover:shadow-[#facc15]">
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
              <button className="bg-yellow-400 text-black p-2 pb-2 m-2 rounded-md font-bold hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" onClick={() => addToBasket(card)}>
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
