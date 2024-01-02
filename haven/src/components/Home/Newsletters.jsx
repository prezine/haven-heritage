import React from "react";
// import { useState } from 'react'
import '../../App.css'
import '../../assets/css/font.css'

function  Newsletters() {
  return (
    <section className="lg:w-11/12 w-full m-auto min-h-60 h-auto flex rounded-3xl items-center justify-between flex-wrap mt-8 p-8 bg-brandGray300">
        <div className="lg:w-1/2">
            <h1 className="text-4xl font-PlusJakartaSansBold text-brandGray900">Join our <br /> Newsletter</h1>
        </div>
        <div className="lg:w-1/2">
            <p className="text-sm w-ninetyPercent text-brandGray900 font-PlusJakartaSansLight">Stay connected and informed: <br /> Join our newsletter for the latest updates, inspiration, and design insights.</p>
            <form action="" className="py-3 lg:flex lg:space-x-2" method="post">
                <div>
                    <input type="text" className="lg:w-72 w-full h-auto rounded-md bg-white border-2 text-brandGray900 border-black placeholder:text-brandGray100 lg:text-base text-sm px-2 py-2" placeholder="Enter email address"/>
                </div>
                <div>
                    <button type="submit" className="text-white w-full bg-black py-2 px-4 rounded-lg lg:text-base text-sm font-PlusJakartaSansRegular">Send Email</button>
                </div>
            </form>
        </div>
    </ section>
  )
}

export default Newsletters