import React from "react";
// import { useState } from 'react'
import '../../App.css'
import '../../assets/css/font.css'
import EachPieceImage from './../../assets/images/eachpiece.jpg'

function EachPiece() {
    return (
        <section className="w-full h-[352px] bg-contain" style={{backgroundImage: `url(${EachPieceImage})`}}>
            <div class="bg-gradient-to-r from-black via-black to-transparent h-[352px] w-full">
                <div className="w-1/2 p-20 text-left space-y-6">
                    <h3 className="text-3xl font-PlusJakartaSansBold text-left">Each piece you find on our site is meticulously handcrafted.</h3>
                    <span className="border-2 border-brandYellow text-brandGray10 block w-1/3 h-0"></span>
                    <p className="font-avenirRoman text-left text-brandGray100">Discover the beauty of artisanal craftsmanship as you explore our unique selection, where tradition meets the hands of skilled artisans, creating a tapestry of elegance and cultural richness.</p>
                </div>
            </div>
        </ section>
    )
}

export default EachPiece