// Card.js
import React from 'react';
import NumberFormat from './../../hooks/NumberFormat'
import RatingComponent from './../../hooks/Rating'
import { Link } from 'react-router-dom';

const ProductCard = ({ slug, image, title, amount, rating, reviewscount, category, avatar, name }) => {
    return (
        <Link to={`${slug}`}>
            <div className="bg-white text-left pb-8" data-category={category}>
                <img src={`${image}`} className='w-full lg:h-60 h-44 object-cover' alt="" />
                <p className='font-PlusJakartaSansMedium text-brandGray900 mt-2 text-sm'>{title}</p>
                <h2 className="lg:text-xl text-lg font-PlusJakartaSansBold mb-2 text-brandRed"><NumberFormat amount={amount} /> </h2>
                <p className='font-PlusJakartaSansMedium flex gap-2 items-center'><RatingComponent rating={rating} /> </p>
                <span className='lg:text-sm text-nowrap text-brandGray600 text-xs'>({reviewscount} reviews)</span>
                <div className='flex items-center pt-4 space-x-3'>
                <img src={`${avatar}`} className='h-6 w-6 rounded-full' alt="" />
                <p className='text-sm font-avenirRoman text-brandGray600'>{name}</p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
