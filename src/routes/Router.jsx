import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PriceDetails from "../screens/PriceDetails";
import Contact from "../screens/Contact";
import Home from "../screens/Home";
import ProductDetails from "../screens/ProductDetails";
import Account from "../screens/Account";
import Cart from "../screens/Cart";
import MyOrders from "../screens/MyOrders";
import Checkout from "../screens/Checkout";
import WhatsAppRedirect from "../components/WhatsAppRedirect";
import Login from "../screens/Login";
 

const Router = () => {
  return (
    <div>
         <Routes>
          <Route path="/" element={<Navigate to ="/home"/>} />
           <Route path="/home" element={<Home/>}/>
          <Route path="/price" element={<PriceDetails/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/my_orders" element={<MyOrders/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/whatsapp-redirect" element={<WhatsAppRedirect/>}/>
          <Route path="/login" element={<Login/>}/>
           
        </Routes>
     </div>
  );
};

export default Router;
