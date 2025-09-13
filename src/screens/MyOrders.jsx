 
import React from "react";
import { assets } from "../assets";

export default function MyOrders() {
  const orders = [
    {
      id: 1,
      productName: "Mini Album",
      pages: 50,
      price: 999,
      subtotal: 999,
      status: "Placed",
      date: "18 Nov 2024",
    },
    {
      id: 2,
      productName: "Photo Book",
      pages: 50,
      price: 1499,
      subtotal: 2998,
      status: "Printing",
      date: "18 Nov 2024",
    },
    {
      id: 3,
      productName: "Canvas Print",
      pages: 50,
      price: 1999,
      subtotal: 1999,
      status: "Delivered",
      date: "18 Nov 2024",
    },
    {
      id: 4,
      productName: "Mini Album",
      pages: 50,
      price: 999,
      subtotal: 999,
      status: "Placed",
      date: "18 Nov 2024",
    },
    {
      id: 5,
      productName: "Photo Book",
      pages: 50,
      price: 1499,
      subtotal: 2998,
      status: "Printing",
      date: "18 Nov 2024",
    },
    {
      id: 6,
      productName: "Canvas Print",
      pages: 50,
      price: 1999,
      subtotal: 1999,
      status: "Dispatched",
      date: "18 Nov 2024",
    },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-16">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
        My Orders
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 lg:m-8">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-[#F5EFE2] border border-[#DBCDBB] rounded-2xl p-4 flex  sm:flex-row items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={assets.banner1}
              alt={order.productName}
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
            />
            <div className="flex flex-col flex-grow">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                {order.productName}
              </h3>
              <p className="text-sm text-gray-600">Pages: {order.pages}</p>
              <p className="text-sm text-gray-600">₹{order.subtotal}</p>
              <p className="text-sm text-gray-600">{order.date}</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <span
                className={`flex items-center justify-center w-24 h-8 text-center rounded-lg text-sm font-medium ${
                  order.status === "Dispatched"
                    ? "bg-blue-500 text-white"
                    : order.status === "Printing"
                    ? "bg-[#EF6000] text-white"
                    : order.status === "Delivered"
                    ? "bg-[#003DE4] text-white"
                    : order.status === "Placed"
                    ? "bg-[#59DA2A] text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
