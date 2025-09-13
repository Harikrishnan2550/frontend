import React from "react";
import { assets } from "../assets";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-10 mt-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
         <div className="flex flex-col items-center md:items-start">
          <img
            className="max-w-full h-auto object-contain"
            src={assets.logo}
            alt="Logo"
          />
          <div>
            <p className="text-[#9F9F9F] text-sm mt-3 text-center md:text-left">
              Shutterbox Albums<br></br>
              Mini Civil Station Road, Kuttippuram<br></br>
              Malappuram, Kerala 679571
            </p>
          </div>
          <div className="flex mt-4 space-x-4">
            <img className="w-4 h-4 " src={assets.insta} alt="Instagram" />
            <img className="w-2 h-4 " src={assets.fb} alt="Facebook" />
            <img className="w-4 h-4" src={assets.utube} alt="YouTube" />
          </div>
        </div>

         <div className="flex flex-col text-center md:text-start">
          <h3 className="text-md font-semibold mb-4 text-[#9F9F9F]">Links</h3>
          <ul className="space-y-2 text-sm text-[#686565]">
            <li>
              <a href="#home" className="hover:text-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="#categories" className="hover:text-gray-700">
                Categories
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-700">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-700">
                Contact
              </a>
            </li>
          </ul>
        </div>

         <div className="flex flex-col text-center md:text-start">
          <h3 className="text-md font-semibold mb-4 text-[#9F9F9F]">More</h3>
          <ul className="space-y-2 text-sm text-[#686565]">
            <li>
              <a href="#account" className="hover:text-gray-700">
                My Account
              </a>
            </li>
            <li>
              <a href="#address" className="hover:text-gray-700">
                Address
              </a>
            </li>
            <li>
              <a href="#orders" className="hover:text-gray-700">
                Orders
              </a>
            </li>
            <li>
              <a href="#cart" className="hover:text-gray-700">
                Cart
              </a>
            </li>
          </ul>
        </div>

         <div className="flex flex-col text-center  sm:ml-12 md:text-start">
          <h3 className="text-md font-semibold mb-4  text-[#9F9F9F]">Help</h3>
          <ul className="space-y-2 text-sm md:ml-0 sm:ml-8 text-[#686565]">
            <li>
              <a href="#privacy" className=" ">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className=" ">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#refund" className=" ">
                Returns and Refund Policy
              </a>
            </li>
            <li>
              <a href="#shipping" className=" ">
                Shipping Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-300 mt-8 w-[90%] mx-auto" />

      <div className="text-center text-sm text-gray-500 mt-6">
        2024 Shutterbox Albums. All rights reserved
      </div>
    </footer>
  );
}
