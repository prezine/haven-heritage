import React from "react";
// import { useState } from 'react'
import '../../App.css'
import '../../assets/css/font.css'
import HeroImage from './../../assets/images/hero-right.png'

function Hero() {
  return (
    <section className="w-full flex items-center justify-between flex-wrap p-12">
      <div className="lg:w-1/2 w-full lg:text-left text-center">
        <h1 className="text-brandGreen font-PlusJakartaSansExtraBold lg:text-5xl text-3xl leading-tight">A Digital Haven Celebrating African Culture</h1>
        <p className="text-brandGray600 font-avenirRoman pt-5">Dedicated to promoting the uniqueness of African craftsmanship, fostering economic opportunities.</p>
        <button className="text-brandGreen font-PlusJakartaSansBold bg-brandGreenLight px-8 py-3 rounded-md text-sm mt-4"> Explore Products </button>
        <div className="lg:flex block space-y-5 items-center space-x-16 pt-14">
          <div className="flex items-center space-x-3">
            <h3 className="text-brandGray900 lg:text-5xl text-3xl font-PlusJakartaSansMedium">2943</h3>
            <span className="text-brandGray900 lg:text-sm text-xs font-PlusJakartaSansRegular"> Best Selling <br/> Designers </span>
          </div>
          <div className="flex items-center space-x-3">
            <h3 className="text-brandGray900 lg:text-5xl text-3xl font-PlusJakartaSansMedium">$1M+</h3>
            <span className="text-brandGray900 lg:text-sm text-xs font-PlusJakartaSansRegular"> Transaction <br/> Completed </span>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 object-right">
        <img src={HeroImage} className="lg:object-right object-center pt-10" alt="" />
      </div>
    </ section>
  )
}

export default Hero