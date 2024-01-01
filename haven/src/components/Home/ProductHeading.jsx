import React from "react";
// import { useState } from 'react'
import '../../App.css'
import '../../assets/css/font.css'

function ProductHeader() {
    return (
        <>
            <div className='w-[180px] text-left m-auto items-center justify-center space-y-2 py-10'>
                <h4 className='text-2xl text-brandGray900 font-PlusJakartaSansBold'>Hot Products</h4>
                <span className="border-2 border-brandYellow text-brandGray10 block w-20 h-0"></span>
            </div>
        </>
    )
}

export default ProductHeader