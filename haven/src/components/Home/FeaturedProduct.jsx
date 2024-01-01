import React from "react";
// import { useState } from 'react'
import '../../App.css'
import '../../assets/css/font.css'
import ClothingImage from './../../assets/images/product/product.jpg'
import AccessoriesImage from './../../assets/images/product/product-2.jpg'
import FootwareImage from './../../assets/images/product/product-3.jpg'

function FeaturedProduct() {
    return (
        <section className="w-full grid lg:grid-cols-4 gap-4 p-12 items-center">
            <div>
                <p className="text-brandGray900 font-PlusJakartaSansRegular text-left">Over 500+ <br /> unique products</p>
            </div>
            <div className="overflow-hidden">
                <div className="w-full h-52 flex items-end transition-transform transform-gpu hover:scale-110" style={{backgroundImage: `url(${ClothingImage})`}}>
                    <span className="card-title flex items-center justify-between">
                        <p className="text-center text-white font-avenirRoman">Clothing</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 11L6 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.541 6.08278L14.2992 6.19567C12.2873 6.37857 11.2814 6.47002 11.0447 7.12388C10.8079 7.77774 11.5222 8.49198 12.9507 9.92046L14.0795 11.0493C15.508 12.4778 16.2223 13.1921 16.8761 12.9553C17.53 12.7186 17.6214 11.7127 17.8043 9.70078L17.9172 8.45902C18.0273 7.24766 18.0824 6.64198 17.7202 6.27979C17.358 5.9176 16.7523 5.97266 15.541 6.08278Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </div>
            </div>
            <div className="overflow-hidden">
                <div className="w-full h-52 flex items-end transition-transform transform-gpu hover:scale-110" style={{backgroundImage: `url(${AccessoriesImage})`}}>
                    <span className="card-title flex items-center justify-between">
                        <p className="text-center text-white font-avenirRoman">Accessories</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 11L6 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.541 6.08278L14.2992 6.19567C12.2873 6.37857 11.2814 6.47002 11.0447 7.12388C10.8079 7.77774 11.5222 8.49198 12.9507 9.92046L14.0795 11.0493C15.508 12.4778 16.2223 13.1921 16.8761 12.9553C17.53 12.7186 17.6214 11.7127 17.8043 9.70078L17.9172 8.45902C18.0273 7.24766 18.0824 6.64198 17.7202 6.27979C17.358 5.9176 16.7523 5.97266 15.541 6.08278Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </div>
            </div>
            <div className="overflow-hidden">
                <div className="w-full h-52 flex items-end transition-transform transform-gpu hover:scale-110" style={{backgroundImage: `url(${FootwareImage})`}}>
                    <span className="card-title flex items-center justify-between">
                        <p className="text-center text-white font-avenirRoman">Footwears</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 11L6 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.541 6.08278L14.2992 6.19567C12.2873 6.37857 11.2814 6.47002 11.0447 7.12388C10.8079 7.77774 11.5222 8.49198 12.9507 9.92046L14.0795 11.0493C15.508 12.4778 16.2223 13.1921 16.8761 12.9553C17.53 12.7186 17.6214 11.7127 17.8043 9.70078L17.9172 8.45902C18.0273 7.24766 18.0824 6.64198 17.7202 6.27979C17.358 5.9176 16.7523 5.97266 15.541 6.08278Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </div>
            </div>
        </ section>
    )
}

export default FeaturedProduct