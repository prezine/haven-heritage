// import React from "react";
import { Routes, Route } from 'react-router-dom';
// import UniqueId from 'react-html-id';
import './App.css'
import Home from './components/Home/Home'
import Product from './components/Product/Product'
import ProductDetail from './components/Product/ProductDetails/ProductDetails'
import Error404 from './components/Error/404'
import Header from './components/Widgets/Nav'
import Footer from './components/Widgets/Footer'

function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/product' >
            <Route path='' element={<Product />} />
            <Route path=':slug' element={<ProductDetail />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      <Footer />
        
    </>
  )
}

export default App
