import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/Home/Home"
import Error404 from "./components/Error/404"
import Header from "./components/Widgets/Header/Nav"
import Footer from "./components/Widgets/Footer/Footer"

function App() {

  return (
    <>
        <Header />
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/" element={<Home />}>
                <Route path="*" element={<Error404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
        <Footer />
    </>
  )
}

export default App
