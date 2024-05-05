import React from 'react';
import Navbar from './Navbar';
import Cards from './Cards';
//import Banner from './Banner'
import Footer from './Footer';

function Shop() {
  return (
    <>
      <Navbar/>
      <img src="https://i.postimg.cc/R0r34TTj/sutarkidukan-1.png" alt="sutarkidukan" className="pt-3 bg-clip-border mx-auto object-fill h-1000 w-3000 " />
      <Cards />
      <Footer />
    </>
  );
}

export default Shop;
