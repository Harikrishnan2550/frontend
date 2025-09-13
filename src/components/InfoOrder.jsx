 


import React from "react";
import { assets } from "../assets";

export default function InfoOrder() {
  return (
    <div className="bg-[#FFF6E5] grid grid-cols-1 lg:grid-cols-2 items-center">
       <img
        className="sm:p-8  lg:p-28 w-full object-cover"
        src={assets.banner1}
        alt="Banner"
      />

       <div className="sm:mt-8  lg:mt-12 px-6 py-8 sm:px-10 lg:px-16 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
          Timeless Albums
          <br />
          Endless Memories
        </h1>
        <p className="text-[#8D8D8D] text-sm sm:text-base leading-relaxed mt-4">
          At Shutterbox Albums, we turn your precious memories into beautifully
          crafted photo albums. Simple, elegant, and timeless—perfect for
          gifting or preserving life's most cherished moments. Each album is a
          keepsake that captures the beauty of your story.
        </p>
        <div className="mt-6">
          <button className="bg-[#EEA126] rounded-3xl py-2 px-6 text-white text-sm sm:text-base shadow-md hover:shadow-lg hover:bg-[#d8911f] transition">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
