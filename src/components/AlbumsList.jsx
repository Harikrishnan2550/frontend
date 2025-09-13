
// import React from "react";
// import { albums } from "../assets";
// import { useNavigate } from "react-router-dom";

// export default function AlbumsList() {
//   const navigate = useNavigate();
//   const handleAlbumClick = (id) => {
//     navigate(`/product/${id}`);
//   };

//   return (
//     <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-2 sm:p-4 sm:mt-8 mt-2 sm:mt-6 sm:mt-8 mx-2 sm:mx-4 md:mx-8 lg:mx-24">
//       {albums.map((item) => (
//         <div
//           key={item.id}
//           onClick={() => handleAlbumClick(item.id)}
//           className="relative bg-white shadow-custom rounded-xl h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px] p-6 sm:p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow"
//         >
//           {item.offer && (
//             <span className="absolute w-10 sm:w-16 h-6  sm:h-10 text-xs lg:text-[12px] md:px-4 px-2 py-5 top-0 right-0 bg-[#EEA126] rounded-[30%] rounded-tl-[5%] rounded-br-[5%] text-white flex items-center justify-center">
//               {item.offer}% OFF
//             </span>
//           )}

//           <img
//             className="w-24 sm:w-[150px]  h-30 sm:h-30 md:h-40 object-cover rounded-t-lg"
//             src={item.image[0]}
//             alt={item.title}
//           />

//           <h2 className="mt-1 sm:mt-2 font-semibold text-center text-xs sm:text-sm md:text-base">
//             {item.title}
//           </h2>

//           <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm">
//             Starting from
//           </p>
//           <div className="flex flex-wrap items-center gap-2 mt-1 sm:mt-2">
//             <p className="text-gray-400 line-through text-[10px] sm:text-xs md:text-sm">
//               ₹{item.old_price}
//             </p>
//             <p className="font-semibold text-sm sm:text-md md:text-lg text-black">
//               ₹{item.new_price}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAlbums } from "../services/endpoints";

export default function AlbumsList({ selectedCategory }) {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getAlbums = async () => {
      try {
        const data = await fetchAlbums(); // Fetch albums using the service function
        setAlbums(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getAlbums();
  }, []);

  const handleAlbumClick = (id) => {
    navigate(`/product/${id}`);
  };

  const filteredAlbums = selectedCategory
    ? albums.filter(
        (item) =>
          item.category_category.trim().toLowerCase() === selectedCategory.trim().toLowerCase()
      )
    : albums;

  if (loading) return <p className="text-center text-gray-600">Loading albums...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-2 sm:p-4 mt-2 sm:mt-8 mx-2 sm:mx-4 md:mx-8 lg:mx-24">
      {filteredAlbums.map((item) => (
        <div
          key={item.category_id}
          onClick={() => handleAlbumClick(item.category_id)}
          role="button"
          tabIndex={0}
          className="relative bg-white shadow-custom rounded-xl h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px] p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow outline-none focus:ring-2 focus:ring-gray-400"
        >
          {item.offer > 0 && (
            <span className="absolute w-10 sm:w-16 h-6  sm:h-10 text-xs lg:text-[12px] md:px-4 px-2 py-5 top-0 right-0 bg-[#EEA126] rounded-[30%] rounded-tl-[5%] rounded-br-[5%] text-white flex items-center justify-center">
              {item.offer}% OFF
            </span>
          )}

          {item.images && item.images.length > 0 && (
            <img
              className="w-24 sm:w-[150px] h-30 sm:h-40 object-cover rounded-t-lg"
              src={item.images[0]}
              alt={item.name}
            />
          )}

          <h2 className="mt-2 font-semibold text-center text-xs sm:text-sm md:text-base">
            {item.name}
          </h2>

          <p className="text-gray-400 text-xs sm:text-sm">Starting from</p>
          <div className="flex items-center gap-2 mt-2">
            {item.oldPrice && (
              <p className="text-gray-400 line-through text-xs sm:text-sm">
                ₹{item.oldPrice}
              </p>
            )}
            <p className="font-semibold text-sm sm:text-md md:text-lg text-black">
              ₹{item.newPrice}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}