import React from 'react';
import '../../App.css'
import '../../assets/css/font.css'
import ProductCard from './../Element/ProductCard.jsx'
import ProductData from './../../data/product.json'
// import Image1 from './../../assets/images/product/product-1.png';
// import Image2 from './../../assets/images/product/product-2.jpg';
// import Image3 from './../../assets/images/product/product-3.jpg';
// import Image4 from './../../assets/images/product/product-4.png';
// import Avatar from './../../assets/images/testimonials/Frame 107-2.png';


function Products() {
    // const productData = [
    //     { image: Image1, title: 'Agbada Attire', amount: 23565.00, rating: 3, reviewscount: 29, category: 'latest', avatar: Avatar, name: 'Precious Tom' },
    //     { image: Image2, title: 'Robe Material', amount: 12355.00, rating: 4, reviewscount: 32, category: 'top', avatar: Avatar, name: 'Osas Clement' },
    //     { image: Image3, title: 'Native Pope Cap', amount: 12355.00, rating: 4, reviewscount: 32, category: 'top', avatar: Avatar, name: 'Micah Tom' },
    //     { image: Image4, title: 'Ankara Gown', amount: 12355.00, rating: 4, reviewscount: 32, category: 'top', avatar: Avatar, name: 'Faith Joseph' },
    //     { image: Image1, title: 'Agbada Attire', amount: 23565.00, rating: 3, reviewscount: 29, category: 'latest', avatar: Avatar, name: 'Selwyn Paul' },
    //     { image: Image2, title: 'Robe Material', amount: 12355.00, rating: 4, reviewscount: 32, category: 'top', avatar: Avatar, name: 'John Doe' },
    //     { image: Image3, title: 'Native Pope Cap', amount: 12355.00, rating: 4, reviewscount: 32, category: 'top', avatar: Avatar, name: 'Precious Tom' },
    //     { image: Image4, title: 'Ankara Gown', amount: 12355.00, rating: 4, reviewscount: 32, category: 'top', avatar: Avatar, name: 'Patience' },
    // ];
    
    return (
        <section className='px-12'>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-4 pt-12'>
                {ProductData.map((card, index) => (
                    <ProductCard key={index} slug={card.slug} image={card.image} title={card.title} amount={card.amount} rating={card.rating} reviewscount={card.reviewscount} category={card.category} avatar={card.avatar} name={card.name}  />
                ))}
            </div>
        </section>
    )
  }
  
  export default Products