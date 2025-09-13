import axiosInstance from "../services/axios.js";

const CATEGORIES_ENDPOINT = "/categories";
const ALBUMS_ENDPOINT = "/category_product";

// Fetch all categories
export const fetchCategories = async () => {
  try {
    const response = await axiosInstance.get(CATEGORIES_ENDPOINT);
    return response.data;
  } catch (err) {
    throw new Error("Failed to fetch categories");
  }
};

// Fetch all albums
export const fetchAlbums = async () => {
  try {
    const response = await axiosInstance.get(ALBUMS_ENDPOINT);
    return response.data;
  } catch (err) {
    console.error("Error fetching albums:", err.response?.data || err.message);
    throw new Error("Failed to fetch albums");
  }
};

// Fetch a single album by category ID
export const fetchAlbumByCategoryId = async (categoryId) => {
  try {
    const albums = await fetchAlbums(); // Fetch all albums
    return albums.find((item) => item.category_id === parseInt(categoryId));
  } catch (err) {
    console.error("Error fetching album:", err.response?.data || err.message);
    throw new Error("Failed to fetch album details");
  }
};
