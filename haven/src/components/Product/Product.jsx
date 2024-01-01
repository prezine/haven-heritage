import React from "react";
// import { useState } from 'react'
import Products from './../Home/Products.jsx'
import ProductHero from './ProductHero.jsx'
import ProductControls from './ProductControls.jsx'
import '../../App.css'

function Product() {
  return (
    <>
      <ProductHero />
      <ProductControls />
      <Products />
    </>
  )
}

export default Product