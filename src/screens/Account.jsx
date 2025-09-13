import React from 'react';
import { assets } from '../assets';
import { Link } from 'react-router-dom';

export default function Account() {
  return (
    <div className="p-10 sm:m-8 ">
      <h1 className="text-2xl font-bold mb-6 text-center">My Account</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 mt-8 ">
        <div className="grid w-[300px] h-[200px] grid-cols-1 gap-6  md:ml-14">


          <Link className="  bg-[#F5EFE2] border border-gray-300 rounded-2xl text-center flex flex-col justify-center items-center" to='/my_orders'>
            <img src={assets.orders} alt="Orders Icon" className="" />
            <h3 className="text-lg font-semibold">Orders</h3>
          </Link>

          <div className="  bg-[#F5EFE2] border border-gray-300 rounded-2xl text-center flex flex-col justify-center items-center">
            <img src={assets.profile} alt="Address Icon" className=" " />
            <h3 className="text-lg font-semibold">Profile</h3>
          </div>
        </div>

        <div className="grid w-[300px] h-[200px] grid-cols-1  gap-6 mt-6 sm:mt-0 ">
          <div className="  bg-[#F5EFE2] border border-gray-300 rounded-2xl text-center flex flex-col justify-center items-center md:mt-0">
            <img src={assets.address} alt="Profile Icon" className=" " />
            <h3 className="text-lg font-semibold">Address</h3>
          </div>
          <div className="  bg-[#F5EFE2] border border-gray-300 rounded-2xl text-center flex flex-col justify-center items-center">
            <img src={assets.contact} alt="Contact Us Icon" className=" " />
            <h3 className="text-lg font-semibold">Contact Us</h3>
          </div>
        </div>

        <div className="w-[300px]  h-[300px] bg-[#F5EFE2] border border-gray-300 mt-4 lg:mt-0  sm:ml-[150px] sm:mt-6 md:ml-0 rounded-lg flex flex-col justify-center items-center">
          <img src={assets.photo} alt="User Photo" className="mb-2 w-24 h-24 rounded-full" />
          <h3 className="text-lg font-semibold text-center">Josepf Vijay</h3>
          <p className="text-center">234567890</p>
          <p className="text-center">vijay@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
