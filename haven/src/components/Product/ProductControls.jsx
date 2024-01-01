import React from "react";
// import { useState } from 'react'
import '../../App.css'

function ProductControls() {
  return (
    <section className="w-full items-center justify-between p-12 text-left">
        <div className="lg:flex flex-auto space-y-4 items-center justify-between">
            <h3 className="font-PlusJakartaSansBold text-brandGray900 text-2xl">All Products</h3>
            <form action="" className="relative">
                <input type="search" name="" className="border border-brandGray200 text-brandGray900 bg-white py-2 px-12 w-[300px] text-sm rounded-md" placeholder="Search products..." id="" />
                <div className="absolute left-0 top-0 mt-3 ml-4">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M9.33325 9.33333L10.9999 11" stroke="#838383" stroke-width="1.5" stroke-linejoin="round"/>
                        <path d="M10.9556 12.3501C10.5705 11.965 10.5705 11.3406 10.9556 10.9555C11.3407 10.5704 11.9651 10.5704 12.3502 10.9555L14.3779 12.9832C14.763 13.3683 14.763 13.9927 14.3779 14.3778C13.9928 14.7629 13.3684 14.7629 12.9833 14.3778L10.9556 12.3501Z" stroke="#838383" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M10.6666 5.99999C10.6666 3.42267 8.57725 1.33333 5.99992 1.33333C3.42259 1.33333 1.33325 3.42267 1.33325 5.99999C1.33325 8.57733 3.42259 10.6667 5.99992 10.6667C8.57725 10.6667 10.6666 8.57733 10.6666 5.99999Z" stroke="#838383" stroke-width="1.5" stroke-linejoin="round"/>
                    </svg>
                </div>
            </form>
        </div>
        <div className="flex flex-auto items-center justify-between pt-8">
            <select name="country" className="border border-brandGray200 text-brandGray900 bg-white py-2 px-4 w-98 text-sm rounded-md" id="country-selector">
                <option disabled selected>Country</option>
                <option value="Nigeria">Nigeria 🇳🇬</option>
                <option value="India">India 🇮🇳</option>
            </select>

            <select name="country" className="border border-brandGray200 text-brandGray900 bg-white py-2 px-4 w-98 text-sm rounded-md" id="country-selector">
                <option disabled selected>All categories</option>
                <option value="Fashion">Fashion</option>
                <option value="Food">Food</option>
            </select>
        </div>
    </ section>
  )
}

export default ProductControls