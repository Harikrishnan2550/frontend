
// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { albums } from "../assets";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const album = albums.find((item) => item.id === id);

//   const [selectedImage, setSelectedImage] = useState(album?.image[4]);
//   const [selectedSize, setSelectedSize] = useState(album?.pages?.[""]);

//   if (!album) {
//     return <p>Album not found.</p>;
//   }

//   return (
//     <div className="p-4 md:p-10 flex flex-wrap md:flex-nowrap gap-4 md:gap-6">
//        <div className="flex flex-col w-full md:w-1/2">
//         <img
//           className="w-full max-w-md md:w-[550px] h-auto rounded-lg mx-auto"
//           src={selectedImage}
//           alt="Selected"
//         />

//         <div className="flex gap-2 md:gap-4 mt-4 justify-center md:justify-start">
//           {album.image?.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`Thumbnail ${index + 1}`}
//               className={`w-16 h-16 sm:w-24 sm:h-20 object-cover rounded-lg cursor-pointer ${
//                 selectedImage === img ? "border-2 border-blue-500" : ""
//               }`}
//               onClick={() => setSelectedImage(img)}
//             />
//           ))}
//         </div>
//       </div>

//        <div className="w-full md:w-1/2 text-center md:text-left">
//         <h1 className="text-2xl sm:text-3xl font-semibold">{album.title}</h1>
//         <p className="text-[#666666] text-md mt-2">
//           Starting from{" "}
//           <span className="text-xl font-semibold text-black">
//             ₹{album.new_price}
//           </span>
//           <span className="line-through m-4 text-sm">₹{album.old_price}</span>
//         </p>
//         <p className="text-[#666666] text-lg mt-2">{album.offer}% off</p>

//         <div className="mt-4">
//           <p className="text-gray-600">No. of Pages</p>
//           <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-2">
//             {album.pages?.map((page, index) => (
//               <button
//                 key={index}
//                 className={`py-1 px-2 sm:px-3 rounded-md ${
//                   selectedSize === page
//                     ? "bg-yellow-500 text-white"
//                     : "bg-[#F5EFE2]"
//                 }`}
//                 onClick={() => setSelectedSize(page)}
//               >
//                 {page} pages
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//           <button className="bg-black font-bold text-white px-4 py-2 rounded-lg">
//             Add to Cart
//           </button>
//           <button className="text-black border border-black font-bold px-4 py-2 rounded-lg">
//             Order Now
//           </button>
//         </div>

//         <div className="mt-6">
//           <h3 className="text-lg font-semibold text-[#3A3A3A]">
//             Delivery Details
//           </h3>
//           <p className="text-[#434343] text-sm mt-2">
//             Our products are made to order and are usually dispatched within 5-7
//             business days.
//           </p>
//         </div>

//         <div className="mt-4">
//           <h3 className="text-lg font-semibold text-[#3A3A3A]">
//             Product Highlights
//           </h3>
//           <ul className="list-disc text-sm list-inside mt-2 text-[#434343]">
//             <li>7 x 5 inch in size</li>
//             <li>Our photobooks fit 1 – 4 photos per page</li>
//             <li>Customize the number of pages up to 30</li>
//             <li>Hard cover: We can use Rexine for making cover</li>
//             <li>
//               Inner page: The silkiest paper with a glossy sheet (250gsm) –
//               perfect for your photo
//             </li>
//           </ul>
//         </div>

//         <div className="mt-4">
//           <h3 className="text-lg font-semibold text-[#3A3A3A]">
//             Additional Information
//           </h3>
//           <ul className="list-disc text-sm list-inside text-[#434343] mt-2">
//             <li>
//               We produce your pieces of Shutterbox Albums only upon receiving
//               your order.
//             </li>
//             <li>
//               Once printed and dispatched, tracking details are shared via
//               email.
//             </li>
//             <li>
//               Due to the personalized nature of our products, we don’t accept
//               returns.
//             </li>
//             <li>
//               For issues, email shutterboxalbums@gmail.com with clear
//               photographs.
//             </li>
//             <li>
//               Refer to our Refund & Returns Policy in our Terms & Conditions.
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { fetchAlbumByCategoryId } from "../services/endpoints";

export default function ProductDetails() {

  const navigate = useNavigate();

  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null); // Default to 10 pages
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const thumbnailsRef = useRef(null);

  // Static pages array
  const pageOptions = [20, 30, 40, 50, 60, 70, 80, 90, 100]; // You can adjust these values as needed

  // Fetch album data
  useEffect(() => {
    const getAlbum = async () => {
      try {
        const foundAlbum = await fetchAlbumByCategoryId(id); // Fetch album by category ID

        if (foundAlbum) {
          setAlbum(foundAlbum);
          setSelectedImage(foundAlbum.images?.[0] || null); // Set initial image if available
        } else {
          setError("Album not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getAlbum();
  }, [id]);

  // Scroll visibility logic
  const updateArrowVisibility = () => {
    const container = thumbnailsRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    thumbnailsRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    thumbnailsRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  useEffect(() => {
    const container = thumbnailsRef.current;
    if (container) {
      container.addEventListener("scroll", updateArrowVisibility);
      updateArrowVisibility();
      return () => container.removeEventListener("scroll", updateArrowVisibility);
    }
  }, [album?.images]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!album) return <p>Album not found.</p>;

  return (
    <div className="p-4 md:p-10 flex flex-wrap md:flex-nowrap gap-4 md:gap-6">
      <div className="flex flex-col w-full md:w-1/2">
        {/* Main Image */}
        <div className="w-full max-w-md md:w-[550px] h-[300px] mx-auto">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={selectedImage}
            alt={album.name}
          />
        </div>

        {/* Thumbnails */}
        <div className="w-full max-w-md md:w-[550px] mx-auto mt-4 relative">
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 z-10"
            >
              <AiOutlineLeft size={20} />
            </button>
          )}
          <div
            ref={thumbnailsRef}
            className="flex gap-2 md:gap-4 overflow-x-auto pb-2 no-scrollbar scroll-smooth"
          >
            {album.images?.map((img, index) => (
              <div
                key={index}
                className="w-16 h-16 sm:w-[100px] sm:h-20 flex-shrink-0"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-full h-full object-cover rounded-lg cursor-pointer transition-transform transform ${selectedImage === img ? "border-2 border-blue-500" : ""
                    }`}
                />
              </div>
            ))}
          </div>
          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 z-10"
            >
              <AiOutlineRight size={20} />
            </button>
          )}
        </div>
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl font-semibold">{album.name}</h1>
        <p className="text-[#666666] text-md mt-2">
          Starting from{" "}
          <span className="text-xl font-semibold text-black">
            ₹{album.newPrice}
          </span>
          <span className="line-through m-4 text-sm">₹{album.oldPrice}</span>
        </p>
        <p className="text-[#666666] text-lg mt-2">{album.offer}% off</p>

        <div className="mt-4">
          <p className="text-gray-600">No. of Pages</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-2 lg:w-[450px]">
            {pageOptions.map((page) => (
              <button
                key={page}
                className={`py-1 px-2 sm:px-3 rounded-md ${selectedSize === page
                  ? "bg-yellow-500 text-white"
                  : "bg-[#F5EFE2]"
                  }`}
                onClick={() => setSelectedSize(page)}
              >
                {page} pages
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-4 justify-center md:justify-start">
          <button className="bg-black font-bold text-white px-4 py-2 rounded-lg lg:w-[450px]">
            Customize My Album
          </button>
          <button
            className={`text-black border border-black font-bold px-4 py-2 rounded-lg lg:w-[450px] ${!selectedSize ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!selectedSize}
            onClick={() =>
              navigate("/checkout", {
                state: {
                  name: album.name,
                  price: album.newPrice,
                  pages: selectedSize,
                },
              })
            }
          >
            Order Now
          </button>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-[#3A3A3A]">Delivery Details</h3>
          <p className="text-[#434343] text-sm mt-2">
            Our products are made to order and are usually dispatched within 5-7
            business days.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-[#3A3A3A]">Product Highlights</h3>
          <ul className="list-disc text-sm list-inside mt-2 text-[#434343]">
            <li>7 x 5 inch in size</li>
            <li>Our photobooks fit 1 – 4 photos per page</li>
            <li>Customize the number of pages up to 30</li>
            <li>Hard cover: We can use Rexine for making cover</li>
            <li>
              Inner page: The silkiest paper with a glossy sheet (250gsm) –
              perfect for your photo
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-[#3A3A3A]">Additional Information</h3>
          <ul className="list-disc text-sm list-inside text-[#434343] mt-2">
            <li>We produce your pieces of Shutterbox Albums only upon receiving your order.</li>
            <li>Once printed and dispatched, tracking details are shared via email.</li>
            <li>Due to the personalized nature of our products, we don’t accept returns.</li>
            <li>For issues, email shutterboxalbums@gmail.com with clear photographs.</li>
            <li>Refer to our Refund & Returns Policy in our Terms & Conditions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}