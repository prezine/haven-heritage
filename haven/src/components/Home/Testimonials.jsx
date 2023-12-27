import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import '../../App.css'
import '../../assets/css/font.css'
import TestimonialCard from './../Element/TestimonialCard.jsx'
import Newsletters from './Newsletters.jsx'

function Testimonials() {
    const testimonialData = [
        { avatar: '/../../assets/images/testimonials/Frame 107-1.png', name: 'Precious Tom', country: "Nigeria 🇳🇬", testimonial: "The quality and beauty of the products exceeded my expectations. HeritageHaven truly captures the essence of African fashion." },
        { avatar: '/../../assets/images/testimonials/Frame 107-2.png', name: 'Micah Tom', country: "Nigeria 🇳🇬", testimonial: "The quality and beauty of the products exceeded my expectations. HeritageHaven truly captures the essence of African fashion." },
        { avatar: '/../../assets/images/testimonials/Frame 107-3.png', name: 'Faith Joseph', country: "Nigeria 🇳🇬", testimonial: "The quality and beauty of the products exceeded my expectations. HeritageHaven truly captures the essence of African fashion." },
        { avatar: '/../../assets/images/testimonials/Frame 107-1.png', name: 'Aavesh Jalani', country: "India 🇮🇳", testimonial: "The quality and beauty of the products exceeded my expectations. HeritageHaven truly captures the essence of African fashion." },
    ];

    return (
        <section className="w-full h-auto bg-brandGray200 text-left p-12">
            <p className="text-brandGray900 text-sm font-PlusJakartaSansMedium pb-2">Testimonials</p>
            <h3 className="text-brandGray900 text-2xl font-PlusJakartaSansBold">What Our Customers Say</h3>
            <div className="relative">
                <div className="px-16">
                    <Swiper
                        modules={[ Navigation ]}
                        navigation={{ prevEl: `#prev-btn`, nextEl: `#next-btn` }}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 10, centeredSlides: false },
                            1024: { slidesPerView: 3, spaceBetween: 20, centeredSlides: false },
                        }}
                    >
                        {
                            testimonialData.map((card, index) => (
                                <SwiperSlide key={index}>
                                    <div className='flex flex-col gap-4 pt-12'>
                                        <TestimonialCard key={index} avatar={card.avatar} name={card.name} country={card.country} testimonial={card.testimonial} />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className="absolute top-2/4 z-10 w-full flex justify-between">
                    <div className="p-2 bg-white rounded-full hover:bg-black hover:fill-slate-50 cursor-pointer" id="prev-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 12H20" stroke="#D1D1D1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.41415 13.6026L6.38058 14.3639C7.94638 15.5974 8.72928 16.2141 9.36464 15.9328C10 15.6515 10 14.6881 10 12.7613V11.2387C10 9.31191 10 8.34853 9.36464 8.06721C8.72928 7.7859 7.94638 8.40264 6.38059 9.63612L5.41415 10.3974C4.47138 11.1401 4 11.5115 4 12C4 12.4885 4.47138 12.8599 5.41415 13.6026Z" stroke="#D1D1D1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="p-2 bg-white rounded-full hover:bg-black hover:fill-slate-50 cursor-pointer" id="next-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 12H4" stroke="#D1D1D1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18.5858 13.6026L17.6194 14.3639C16.0536 15.5974 15.2707 16.2141 14.6354 15.9328C14 15.6515 14 14.6881 14 12.7613V11.2387C14 9.31191 14 8.34853 14.6354 8.06721C15.2707 7.7859 16.0536 8.40264 17.6194 9.63612L18.5858 10.3974C19.5286 11.1401 20 11.5115 20 12C20 12.4885 19.5286 12.8599 18.5858 13.6026Z" stroke="#D1D1D1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
            <Newsletters />
        </ section>
    )
}

export default Testimonials