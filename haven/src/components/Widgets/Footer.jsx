import React from "react";
// import { useState } from 'react'
import '../../App.css'
import Logo from '/images/footer-logo.png'

function Footer() {
  return (
    <section className="bg-black w-full h-auto h-min-96 p-16">
      <div>
        <a href="./"><img src={Logo} className=" w-40" alt="" /></a>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2">
        <div className="text-left space-y-10 pt-8">
          <ul className="text-left space-y-4 font-PlusJakartaSansMedium lg:text-base text-sm">
            <li><a href=""> About Us </a></li>
            <li><a href=""> Contact Us </a></li>
            <li><a href=""> Partners </a></li>
            <li><a href=""> Blogs </a></li>
          </ul>
        </div>
        <div className="text-left space-y-4 pt-8">
          <p className="text-sm font-PlusJakartaSansBold text-brandGray600">Useful Links</p>
          <ul className="text-left space-y-4 font-PlusJakartaSansMedium lg:text-base text-sm">
            <li><a href=""> Products </a></li>
            <li><a href=""> Show Room </a></li>
            <li><a href=""> Top Ratings </a></li>
            <li><a href=""> Best Sellers </a></li>
            <li><a href=""> Latest Products </a></li>
          </ul>
        </div>
        <div className="text-left space-y-4 pt-8">
          <p className="text-sm font-PlusJakartaSansBold text-brandGray600">Social Media</p>
          <ul className="text-left space-y-4 font-PlusJakartaSansMedium lg:text-base text-sm">
            <li><a href=""> Instagram </a></li>
            <li><a href=""> Twitter (X) </a></li>
            <li><a href=""> Facebook </a></li>
            <li><a href=""> Youtube </a></li>
            <li><a href=""> Medium </a></li>
          </ul>
        </div>
        <div className="text-left space-y-4 pt-8">
          <p className="text-sm font-PlusJakartaSansBold text-brandGray600">Regulations</p>
          <ul className="text-left space-y-4 font-PlusJakartaSansMedium lg:text-base text-sm">
            <li><a href=""> Privacy Policy </a></li>
            <li><a href=""> Terms of Use </a></li>
            <li><a href=""> Refund Policy </a></li>
          </ul>
        </div>
      </div>
      <div className="lg:text-center text-left text-sm text-brandGray600 pt-12">
        <p>© All Rights Reserved. 2023, Heritage-Haven</p>
      </div>
    </section>
  )
}

export default Footer