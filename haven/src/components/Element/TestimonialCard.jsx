// Card.js
import React from 'react';

const TestimonialCard = ({ avatar, name, country, testimonial }) => {
    return (
        <div className="bg-white text-left p-4 space-y-3">
            <p className='text-sm text-brandGray600 font-PlusJakartaSansMediumItalic'>"{testimonial}"</p>
            <hr />
            <div className='flex'>
                <img src={avatar} className='w-10 h-10 rounded-full' alt="" />
                <span className='pl-4'>
                    <p className='text-brandGray900 text-sm font-avenirRoman'>{name}</p>
                    <p className='text-brandGray600 text-xs font-avenirRoman'>{country}</p>
                </span>
            </div>
        </div>
    );
};

export default TestimonialCard;
