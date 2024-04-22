import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import  Banner  from './Banner';


export default function Home() {
  return (
    <>
      <Navbar/> {/* Render Navbar component */}
      <Banner/>
      <Footer/>
    </>
  )
}
