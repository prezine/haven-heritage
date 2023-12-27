import React from "react";
// import { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../../../App.css'
import Logo from './../../../assets/images/logo.png'

function Header() {
  return (
    <>
      <Router>
        <nav className="w-full flex items-center justify-between flex-wrap p-12">
          <div className="flex items-center flex-shrink-0 mr-6">
          <Link to="/"><img src={Logo} alt="" /></Link>
          </div>

          <div className="flex items-center flex-shrink-0 mr-6">
            <ul className="flex">
              <li className="mr-6">
                <Link to="/" className="text-brandGray900 font-PlusJakartaSansBold text-sm">Home</Link>
              </li>
              <li className="mr-6">
                <Link to="/product" className="hover:text-brandGray900 hover:font-PlusJakartaSansBold text-brandGray400 font-PlusJakartaSansMedium text-sm">Product</Link>
              </li>
              <li className="mr-6">
                <Link to="/about" className="hover:text-brandGray900 hover:font-PlusJakartaSansBold text-brandGray400 font-PlusJakartaSansMedium text-sm">About</Link>
              </li>
              <li className="mr-6">
                <Link to="/contact" className="hover:text-brandGray900 hover:font-PlusJakartaSansBold text-brandGray400 font-PlusJakartaSansMedium text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center flex-shrink-0 mr-6">
            <button className="text-brandGray900 font-PlusJakartaSansMedium mr-5 text-sm"> Sign In </button>
            <button className="text-brandGreenLight  font-PlusJakartaSansMedium bg-brandGreen px-3 py-3 rounded-md text-sm"> Create free account </button>
          </div>
        </nav>
      </Router>
    </>
  )
}

export default Header