import React from "react";
import Header from "../hedaer/Header";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Detail from "../../pages/Detail";
import Cart from "../../pages/Cart";

const Layout = () => {
  return (
    <div> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </div>
  );
};

export default Layout;
