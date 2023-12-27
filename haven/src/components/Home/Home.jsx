import React from "react";
// import { useState } from 'react'
import Hero from "./Hero.jsx"
import Featured from "./Featured.jsx"
import FeaturedProduct from "./FeaturedProduct.jsx"
import EachPiece from "./EachPiece.jsx"
import Products from "./Products.jsx"
import Testimonials from "./Testimonials.jsx"
import '../../App.css'

function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <FeaturedProduct />
      <EachPiece />
      <Products />
      <Testimonials />
    </>
  )
}

export default Home