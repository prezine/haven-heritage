import React from "react";
// import { useState } from 'react'
import Marquee from "react-fast-marquee";
import '../../App.css'
import '../../assets/css/font.css'
import HopeImage from '/images/partners/hope 1.png'
import ChildHopeImage from '/images/partners/download 1.png'
import NgoImage from '/images/partners/images 2.png'
import MamaImage from '/images/partners/3d4c4b3ee72b89c8287779387a15a7bb 1.png'

function Featured() {
  return (
    <section className="w-full flex items-center justify-between flex-wrap p-12">
        <p className="w-full font-avenirRoman text-brandGray900 text-base text-center">We featured your favourites</p>
        <span className="flex border border-zinc-200 w-full rounded-full px-7 mt-8">
            <Marquee>
                <img src={HopeImage} alt="" />
                <img src={ChildHopeImage} alt="" />
                <img src={NgoImage} alt="" />
                <img src={MamaImage} alt="" />
                <img src={HopeImage} alt="" />
                <img src={ChildHopeImage} alt="" />
                <img src={NgoImage} alt="" />
                <img src={MamaImage} alt="" />
            </Marquee>
        </span>
    </ section>
  )
}

export default Featured