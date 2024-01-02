import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './../../../App.css'
import Products from './../../../data/product.json'

function ProductDetail() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const productDetail = () => {
    // let singleBlog = [];
    {Products && Products.map((product, index) => (
      product.slug === slug ? product : null
    ))}
  }

  return (
    <>
      <h1 className="text-brandGray900">
        {productDetail.slug}
      </h1>
    </>
  )
}

export default ProductDetail