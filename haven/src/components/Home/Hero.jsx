import React from "react";
// import { useState } from 'react'
import '../../App.css'
import '../../assets/css/font.css'
import HeroImage from './../../assets/images/hero-right.png'

function Hero() {
  return (
    <section className="w-full flex items-center justify-between flex-wrap p-12">
      <div className="w-1/2 text-left">
        <h1 className="text-brandGreen font-PlusJakartaSansExtraBold text-5xl leading-tight">A Digital Haven Celebrating African Culture</h1>
        <p className="text-brandGray600 font-avenirRoman pt-5">Dedicated to promoting the uniqueness of African craftsmanship, fostering economic opportunities.</p>
        <button className="text-brandGreen font-PlusJakartaSansBold bg-brandGreenLight px-8 py-3 rounded-md text-sm mt-4"> Explore Products </button>
        <div className="flex items-center space-x-16 pt-14">
          <div className="flex items-center space-x-3">
            <h3 className="text-brandGray900 text-5xl font-PlusJakartaSansMedium">2943</h3>
            <span className="text-brandGray900 text-sm font-PlusJakartaSansRegular"> Best Selling <br/> Designers </span>
          </div>
          <div className="flex items-center space-x-3">
            <h3 className="text-brandGray900 text-5xl font-PlusJakartaSansMedium">$1M+</h3>
            <span className="text-brandGray900 text-sm font-PlusJakartaSansRegular"> Transaction <br/> Completed </span>
          </div>
        </div>
      </div>

      <div className="w-1/2 object-right">
        <img src={HeroImage} className="object-right" alt="" />
      </div>
    </ section>
  )
}

export default Hero