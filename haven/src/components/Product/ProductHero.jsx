import React from "react";
// import { useState } from 'react'
import '../../App.css'
import ProductHeroImage from '/images/product-hero.jpg'

function ProductHero() {
  return (
    <>
      <img src={ProductHeroImage} className=" h-60 w-full object-cover" alt="" srcset="" />
    </>
  )
}

export default ProductHero