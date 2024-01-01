import React, { useState }  from "react";
import { NavLink } from 'react-router-dom';
import CartDropdown from './../Element/CartDropdown'
// import { useState } from 'react'
import '../../App.css'
import Logo from './../../assets/images/logo.png'
import userDP from './../../assets/images/avatar.jpg'
import thumbnail from './../../assets/images/product/cart-product-1.png'

function Header() {
  const [isHidden, setIsHidden] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const toggleProfile = () => {
    setIsHidden(!isHidden);
    console.log('Open Profile Modal');
  };

  const toggleCart = () => {
    setIsVisible(!isVisible);
    console.log('Open Cart Modal');
  };

  const cartData = [
    { thumbnail: thumbnail, title: "Agbada Attire", amount: 23565, rating: 3, reviewscount: 16 },
    { thumbnail: thumbnail, title: "Agbada Attire", amount: 23565, rating: 5, reviewscount: 15 },
    { thumbnail: thumbnail, title: "Agbada Attire", amount: 23565, rating: 2, reviewscount: 13 },
  ];

  return (
    <>
        <nav className="w-full flex items-center justify-between flex-wrap p-12">
          <div id="menu" data-mobile-nav-open="no" className="z-50 absolute xl:static h-auto -translate-y-twoHundredPercent xl:-translate-y-0 xl:h-auto opacity-0 xl:opacity-100 xl:py-0 top-24 left-0 bg-white transition-all ease-linear duration-500 shadow-md xl:shadow-none gap-20 xl:bg-transparent flex flex-col xl:flex-row justify-between items-center w-full">
            <div className="flex items-center flex-shrink-0 mr-6">
              <NavLink to="/"><img src={Logo} alt="" /></NavLink>
            </div>

            <div className="flex items-center flex-shrink-0 mr-6">
              <ul className="flex">
                <li className="mr-6">
                  <NavLink to="/" className="hover:text-brandGray900 hover:font-PlusJakartaSansBold text-brandGray400 font-PlusJakartaSansMedium text-sm">Home</NavLink>
                </li>
                <li className="mr-6">
                  <NavLink to="/product" className="hover:text-brandGray900 hover:font-PlusJakartaSansBold text-brandGray400 font-PlusJakartaSansMedium text-sm">Product</NavLink>
                </li>
                <li className="mr-6">
                  <NavLink to="/about" className="hover:text-brandGray900 hover:font-PlusJakartaSansBold text-brandGray400 font-PlusJakartaSansMedium text-sm">About</NavLink>
                </li>
                <li className="mr-6">
                  <NavLink to="/contact" className="hover:text-brandGray900 hover:font-PlusJakartaSansBold text-brandGray400 font-PlusJakartaSansMedium text-sm">Contact</NavLink>
                </li>
              </ul>
            </div>

            {/* <div className="flex items-center flex-shrink-0 mr-6">
              <button className="text-brandGray900 font-PlusJakartaSansMedium mr-5 text-sm"> Sign In </button>
              <button className="text-brandGreenLight  font-PlusJakartaSansMedium bg-brandGreen px-3 py-3 rounded-md text-sm"> Create free account </button>
            </div> */}

            <div className="flex items-center flex-shrink-0 mr-6 space-x-8">
              <div id="trigger-cart-widget" onClick={toggleCart} className="relative cursor-pointer">
                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18.5L18.8101 17.6825C21.8797 17.4268 22.5687 16.7563 22.9089 13.695L23.625 7.25" stroke="black" stroke-width="1.6875" stroke-linecap="round"/>
                  <path d="M6.75 7.25H24.75" stroke="black" stroke-width="1.6875" stroke-linecap="round"/>
                  <path d="M6.75 25.25C7.99264 25.25 9 24.2426 9 23C9 21.7574 7.99264 20.75 6.75 20.75C5.50736 20.75 4.5 21.7574 4.5 23C4.5 24.2426 5.50736 25.25 6.75 25.25Z" stroke="black" stroke-width="1.6875"/>
                  <path d="M19.125 25.25C20.3676 25.25 21.375 24.2426 21.375 23C21.375 21.7574 20.3676 20.75 19.125 20.75C17.8824 20.75 16.875 21.7574 16.875 23C16.875 24.2426 17.8824 25.25 19.125 25.25Z" stroke="black" stroke-width="1.6875"/>
                  <path d="M9 23H16.875" stroke="black" stroke-width="1.6875" stroke-linecap="round"/>
                  <path d="M2.25 2.75H3.33675C4.39952 2.75 5.32591 3.45266 5.58367 4.4543L8.93083 17.4611C9.09998 18.1184 8.95523 18.8147 8.53677 19.3568L7.46115 20.75" stroke="black" stroke-width="1.6875" stroke-linecap="round"/>
                </svg>

                <span class="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center absolute top-0 right-0 -mt-3 -mr-3">
                  <span class="text-xs font-bold">3</span>
                </span>
              </div>

              <img src={userDP} id="trigger-profile-widget" onClick={toggleProfile} className="cursor-pointer" alt="" />
            </div>

            {/* Dropdown Section for Cart */}
            <div id="cart-widget" className={`${isVisible ? 'hidden' : ''} w-72 bg-brandGray50 rounded-md shadow-sm h-460 right-0 top-20 absolute p-5 text-left`}>
              <p className="text-brandGray600 font-PlusJakartaSansMedium text-sm mb-4">My cart</p>
              {cartData.map((cart, index) => (
                <CartDropdown key={index} thumbnail={cart.thumbnail} title={cart.title} amount={cart.amount} rating={cart.rating} reviewscount={cart.reviewscount} />
              ))}
              <div className="flex justify-between mb-3">
                <h4 className="text-sm font-PlusJakartaSansBold text-brandGray900">Total</h4>
                <p className="text-sm font-PlusJakartaSansMedium text-brandGray900">N44,000</p>
              </div>
              <button className="bg-brandGreenLight text-brandGray900 font-PlusJakartaSansMedium text-sm w-full py-2 rounded-sm">Proceed to checkout</button>
            </div>

            {/* Dropdown Section for Profile */}
            <div className={`w-72 bg-brandGray50 rounded-md shadow-sm h-254 right-0 top-20 absolute p-5 text-left ${isHidden ? 'hidden' : ''}`}>
              <p className=" text-brandGray300 font-PlusJakartaSansMedium text-sm mb-4">Logged in as Tom,</p>
              <div className=" space-y-2">
                <span className="flex space-x-2 pb-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z" stroke="#838383" stroke-width="1.5" stroke-linejoin="round"/>
                  <path d="M11.9955 12H12.0045M15.991 12H16M8 12H8.00897" stroke="#838383" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <p className="text-brandGray400 font-sm font-PlusJakartaSansMedium">Profile</p>
                </span>
                
                <span className="flex space-x-2 pb-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#838383" stroke-width="1.5"/>
                  <path d="M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z" stroke="#838383" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                  <p className="text-brandGray400 font-sm font-PlusJakartaSansMedium">Chats</p>
                </span>

                <span className="flex space-x-2 pb-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.06164 15.1933L3.42688 13.1219C3.85856 10.6736 4.0744 9.44952 4.92914 8.72476C5.78389 8 7.01171 8 9.46734 8H14.5327C16.9883 8 18.2161 8 19.0709 8.72476C19.9256 9.44952 20.1414 10.6736 20.5731 13.1219L20.9384 15.1933C21.5357 18.5811 21.8344 20.275 20.9147 21.3875C19.995 22.5 18.2959 22.5 14.8979 22.5H9.1021C5.70406 22.5 4.00504 22.5 3.08533 21.3875C2.16562 20.275 2.4643 18.5811 3.06164 15.1933Z" stroke="#838383" stroke-width="1.5"/>
                  <path d="M7.5 8L7.66782 5.98618C7.85558 3.73306 9.73907 2 12 2C14.2609 2 16.1444 3.73306 16.3322 5.98618L16.5 8" stroke="#838383" stroke-width="1.5"/>
                  <path d="M15 11C14.87 12.4131 13.5657 13.5 12 13.5C10.4343 13.5 9.13002 12.4131 9 11" stroke="#838383" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                  <p className="text-brandGray400 font-sm font-PlusJakartaSansMedium">My purchases</p>
                </span>

                <button className="bg-brandRed text-white font-PlusJakartaSansBold w-full py-2 rounded-sm">Log out</button>
              </div>
            </div>
          </div>
        
          <div class="flex justify-between w-full xl:hidden">
            <div className="flex items-center flex-shrink-0 mr-6">
              <NavLink to="/"><img src={Logo} alt="" /></NavLink>
            </div>

            <button id="hamburger" title="Open Mobile Menu" type="button" className="space-y-1 group cursor-pointer">
                <div class="h-1 w-8 hamburger-line bg-black rounded-lg group-hover:bg-brandBlue transition-all ease-linear duration-300"></div>
                <div class="h-1 w-8 hamburger-line bg-black rounded-lg group-hover:bg-brandBlue transition-all ease-linear duration-300"></div>
                <div class="h-1 w-8 hamburger-line bg-black rounded-lg group-hover:bg-brandBlue transition-all ease-linear duration-300"></div>
                <p class="sr-only">Open Mobile Menu</p>
            </button>
          </div>
        </nav>
    </>
  )
}

export default Header