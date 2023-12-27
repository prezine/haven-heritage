import React from "react";
// import { useState } from 'react'
import '../../App.css'
import '../../assets/css/font.css'

function  Newsletters() {
  return (
    <section className="w-11/12 m-auto h-60 flex rounded-3xl items-center justify-between flex-wrap mt-8 p-8 bg-brandGray300">
        <div className="w-1/2">
            <h1 className="text-4xl font-PlusJakartaSansBold text-brandGray900">Join our <br /> Newsletter</h1>
        </div>
        <div className="w-1/2">
            <p className="text-sm text-brandGray900 font-PlusJakartaSansLight">Stay connected and informed: Join our newsletter for the latest updates, inspiration, and design insights.</p>
            <form action="" className="py-3 flex space-x-2" method="post">
                <div>
                    <input type="text" className="w-80 h-auto rounded-md bg-white border-2 text-brandGray900 border-black placeholder:text-brandGray100 px-2 py-2" placeholder="Enter email address"/>
                </div>
                <div>
                    <button type="submit" className="text-white bg-black py-2 px-4 rounded-lg text-lg font-PlusJakartaSansRegular">Send Email</button>
                </div>
            </form>
        </div>
    </ section>
  )
}

export default Newsletters