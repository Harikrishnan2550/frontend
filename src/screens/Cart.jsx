import React, { useState, useEffect } from "react";
import { assets } from "../assets";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Mini Album", pages: 50, price: 999, subtotal: 1100 },
    { id: 2, name: "Mini Album", pages: 50, price: 999, subtotal: 1100 },
  ]);

  // Function to calculate the subtotal (if needed, currently commented)
  // const calculateSubtotal = () => {
  //   return cartItems.reduce(
  //     (total, item) => total + item.price * item.quantity,
  //     0
  //   );
  // };

  return (
    <div className="p-6 sm:p-10 lg:p-12">
      <h1 className="text-2xl font-semibold mb-6 text-center">Cart</h1>

      <div className="overflow-x-auto m-6 sm:m-12">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="bg-[#F5EFE2]">
            <tr>
              <th className="px-6 py-3 text-left text-gray-600">
                 </th>
              <th className="px-6 py-3 text-left text-gray-600">Product</th>
              <th className="px-6 py-3 text-left text-gray-600">Pages</th>
              <th className="px-6 py-3 text-left text-gray-600">Price</th>
              <th className="px-6 py-3 text-left text-gray-600">Subtotal</th>
              <th className="px-6 py-3 text-left text-gray-600"> </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4">
                  <img
                    src={assets.banner}  
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>
                <td className="px-6 py-4 text-left">{item.name}</td>
                <td className="px-6 py-4 text-left">{item.pages}</td>
                <td className="px-6 py-4 text-left">${item.price}</td>
                <td className="px-6 py-4 text-left">${item.subtotal}</td>
                <td className="px-6 py-4 text-left">
                  <img src={assets.deleteIcon} alt="Delete Icon" className="cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Uncomment this for order summary if needed */}
      {/* <div className="mt-6 bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        <div className="mb-4">
          <p className="flex justify-between">
            <span>Subtotal:</span>
            <span>${calculateSubtotal()}</span>
          </p>
          <p className="flex justify-between">
            <span>Tax:</span>
            <span>$5.00</span>
          </p>
          <p className="flex justify-between font-bold">
            <span>Total:</span>
            <span>${calculateSubtotal() + 5}</span>
          </p>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Proceed to Checkout
        </button>
      </div> */}
    </div>
  );
}
