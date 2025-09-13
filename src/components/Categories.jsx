
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import { category } from "../assets";

// export default function Categories() {
//   const settings = {
//     dots: false, 
//     arrows: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,  
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768, 
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,  
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="md:m-12 md:ml-[100px] mr-4 sm:mr-0 md:mt-6 relative z-10">
//       <Slider {...settings}>
//         {category.map((item, index) => (
//           <div key={index} className="p-4">
//             <div className="bg-[#F5EFE2] h-[60px] md:w-[230px] w-[160px] rounded-xl flex flex-row items-center shadow-md">
//               <img
//                 className="md:w-24 w-24 md:h-24 h-20 mb-6 p-3 object-cover"
//                 src={item.image}
//                 alt={item.name}
//               />
//               <h3 className="font-semibold text-gray-800 md:text-base text-[11px] sm:text-sm text-start w-full">
//                 {item.title}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </Slider>
//      </div>
//   );
// }



import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { fetchCategories } from "../services/endpoints";

export default function Categories({ onCategorySelect }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories(); // Call the function from the service file
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  const handleCategoryClick = (category) => {
    console.log("Clicked Category:", category.category_category); // Debugging log
    setSelectedCategory(category.category_category);
    if (onCategorySelect) {
      onCategorySelect(category.category_category);
    }
    navigate("/price"); // Redirect to /price page
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="md:m-12 md:ml-[100px] mr-4 sm:mr-0 md:mt-6 relative z-10">
      {loading ? (
        <p className="text-center text-gray-600">Loading categories...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <Slider {...settings}>
          {categories.map((item) => (
            <div key={item.category_id} className="p-4">
              <div
                 className={`bg-[#F5EFE2] h-[60px] md:w-[230px] w-full max-w-[180px] sm:max-w-[230px] rounded-xl flex items-center shadow-md px-4 cursor-pointer ${
                  selectedCategory === item.category_category ? "border-2 border-blue-500" : ""
                }`}
                onClick={() => handleCategoryClick(item)}
              >
                <img
                  className="w-16 h-16 object-cover"
                  src={item.category_image}
                  alt={item.category_name}
                />
                <h3 className="font-semibold text-gray-800 md:text-base text-[11px] sm:text-sm text-start ml-2">
                  {item.category_name}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

