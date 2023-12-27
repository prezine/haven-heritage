import React from 'react';
import '../../App.css'
import '../../assets/css/font.css'
import ProductCard from './../Element/ProductCard.jsx'

function Products() {
    const productData = [
        { image: '/./../../assets/images/product/product-1.png', title: 'Agbada Attire', amount: 23565.00, rating: 3, reviewscount: 29, category: 'latest', avatar: './../../assets/images/testimonials/Frame 107-2.png', name: 'Precious Tom' },
        { image: '/./../../assets/images/product/product-2.jpg', title: 'Robe Material', amount: 12355.00, rating: 4, reviewscount: 32, category: 'top', avatar: './../../assets/images/testimonials/Frame 107-2.png', name: 'Osas Clement' },
        { image: '/./../../assets/images/product/product-3.jpg', title: 'Native Pope Cap', amount: 12355.00, rating: 4, reviewscount: 32, category: 'top', avatar: './../../assets/images/testimonials/Frame 107-2.png', name: 'Micah Tom' },
        { image: '/./../../assets/images/product/product-4.jpg', title: 'Ankara Gown', amount: 12355.00, rating: 4, reviewscount: 32, category: 'top', avatar: './../../assets/images/testimonials/Frame 107-2.png', name: 'Faith Joseph' },
        { image: '/./../../assets/images/product/product-1.png', title: 'Agbada Attire', amount: 23565.00, rating: 3, reviewscount: 29, category: 'latest', avatar: './../../assets/images/testimonials/Frame 107-2.png', name: 'Selwyn Paul' },
        { image: '/./../../assets/images/product/product-2.jpg', title: 'Robe Material', amount: 12355.00, rating: 4, reviewscount: 32, category: 'top', avatar: './../../assets/images/testimonials/Frame 107-2.png', name: 'John Doe' },
        { image: '/./../../assets/images/product/product-3.jpg', title: 'Native Pope Cap', amount: 12355.00, rating: 4, reviewscount: 32, category: 'top', avatar: './../../assets/images/testimonials/Frame 107-2.png', name: 'Precious Tom' },
        { image: '/./../../assets/images/product/product-4.jpg', title: 'Ankara Gown', amount: 12355.00, rating: 4, reviewscount: 32, category: 'top', avatar: './../../assets/images/testimonials/Frame 107-2.png', name: 'Patience' },
    ];

    return (
        <section className='py-20 p-12'>
            <div className='w-1/4 text-left m-auto space-y-2'>
                <h4 className='text-2xl text-brandGray900 font-PlusJakartaSansBold'>Hot Products</h4>
                <span className="border-2 border-brandYellow text-brandGray10 block w-1/3 h-0"></span>
            </div>
            <div className='grid grid-cols-4 gap-4 pt-12'>
                {productData.map((card, index) => (
                    <ProductCard key={index} image={card.image} title={card.title} amount={card.amount} rating={card.rating} reviewscount={card.reviewscount} category={card.category} avatar={card.avatar} name={card.name}  />
                ))}
            </div>
        </section>
    )
  }
  
  export default Products