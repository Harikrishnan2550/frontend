import React, { useState } from 'react'
import Categories from '../components/Categories'
import AlbumsList from '../components/AlbumsList'

export default function PriceDetails() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  
    const handleCategorySelect = (categoryId) => {
      console.log("Selected category updated:", categoryId);
      setSelectedCategory(categoryId);
    };
    
  return (
    <div>
      <Categories onCategorySelect={handleCategorySelect} />
       <AlbumsList selectedCategory={selectedCategory} />
    </div>
  )
}
