// Card.js
import React from 'react';
import NumberFormat from './../../hooks/NumberFormat'
import RatingComponent from './../../hooks/Rating'

const CartDropdown = ({ thumbnail, title, amount, rating, reviewscount }) => {
    return (
        <>
            <div className="flex space-x-4 mb-2">
                <img src={`${thumbnail}`} className="w-14 h-18 shadow-lg" alt="" />
                <div>
                    <p className='font-PlusJakartaSansMedium text-brandGray900 mt-2 text-xs'>{title}</p>
                    <h2 className="lg:text-sm text-xs font-PlusJakartaSansBold text-brandRed"><NumberFormat amount={amount} /> </h2>
                    <p className='font-PlusJakartaSansMedium flex gap-2 items-center'><RatingComponent rating={rating} size="14" /> 
                        <span className='text-xs font-PlusJakartaSansMedium text-nowrap text-brandGray600'>({reviewscount} reviews)</span> 
                    </p>
                    <div className='flex space-x-3 pt-2'>
                        <span className='cursor-pointer'>
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.291327" y="0.888433" width="14.2208" height="14.2208" rx="1.27622" stroke="black" stroke-width="0.364635"/>
                                <path d="M5.65173 8.3488V7.6488H9.15173V8.3488H5.65173Z" fill="#1E1E1E"/>
                            </svg>
                        </span>
                        <span className=' text-sm text-brandGray900 '>2</span>
                        <span className='cursor-pointer'>
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.379217" y="0.888433" width="14.2208" height="14.2208" rx="1.27622" fill="#0B0B0B"/>
                                <rect x="0.379217" y="0.888433" width="14.2208" height="14.2208" rx="1.27622" stroke="black" stroke-width="0.364635"/>
                                <path d="M7.11962 10.4988V8.36884H4.98962V7.61884H7.11962V5.49884H7.86962V7.61884H9.98962V8.36884H7.86962V10.4988H7.11962Z" fill="white"/>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <hr className='pt-2' />
        </>
    );
};

export default CartDropdown;
