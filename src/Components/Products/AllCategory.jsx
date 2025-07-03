/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from 'lucide-react';
import { 
  categories,
  getProductsByCategory, 
  formatPrice,
  calculateDiscountedPrice 
} from '../../assets/assets';

const AllCategory = () => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [currentCategoryName, setCurrentCategoryName] = useState('');
  
  const productsPerPage = 6;
  const categoryRotationInterval = 5000; // 5 seconds

  // Get all categories with subcategories
  const categoriesWithSubcategories = categories.filter(cat => cat.subcategories && cat.subcategories.length > 0);

  useEffect(() => {
    // Auto-rotate categories
    const categoryInterval = setInterval(() => {
      setCurrentCategoryIndex(prev => (prev + 1) % categoriesWithSubcategories.length);
      setCurrentProductIndex(0); // Reset product index when category changes
    }, categoryRotationInterval);

    return () => clearInterval(categoryInterval);
  }, [categoriesWithSubcategories.length]);

  useEffect(() => {
    // Update displayed products when category changes
    const currentCategory = categoriesWithSubcategories[currentCategoryIndex];
    if (currentCategory) {
      const categoryProducts = getProductsByCategory(currentCategory.id);
      setDisplayedProducts(categoryProducts);
      setCurrentCategoryName(currentCategory.name);
    }
  }, [currentCategoryIndex]);

  const nextProducts = () => {
    const maxIndex = Math.max(0, displayedProducts.length - productsPerPage);
    setCurrentProductIndex(Math.min(maxIndex, currentProductIndex + productsPerPage));
  };

  const prevProducts = () => {
    setCurrentProductIndex(Math.max(0, currentProductIndex - productsPerPage));
  };

  // Check if navigation buttons should be disabled
  const canGoToPrevious = currentProductIndex > 0;
  const canGoToNext = currentProductIndex + productsPerPage < displayedProducts.length;

  const visibleProducts = displayedProducts.slice(currentProductIndex, currentProductIndex + productsPerPage);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={12}
        className={`${
          index < Math.floor(rating) 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{currentCategoryName}</h1>
        <p className="text-gray-600">Discover our handpicked selection from {currentCategoryName.toLowerCase()}.</p>
      </div>

      {/* Products Section */}
      <div className="relative">
        {/* Product Navigation Arrows */}
        {displayedProducts.length > productsPerPage && (
          <>
            <button 
              onClick={prevProducts}
              disabled={!canGoToPrevious}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 transition-colors ${
                canGoToPrevious 
                  ? 'hover:bg-gray-50 cursor-pointer' 
                  : 'opacity-50 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            
            <button 
              onClick={nextProducts}
              disabled={!canGoToNext}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 transition-colors ${
                canGoToNext 
                  ? 'hover:bg-gray-50 cursor-pointer' 
                  : 'opacity-50 cursor-not-allowed'
              }`}
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {visibleProducts.map((product) => {
            const discountedPrice = calculateDiscountedPrice(product.price, product.discount);
            
            return (
              <div key={product._id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
                {/* Product Image */}
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x300/f3f4f6/9ca3af?text=${product.name.charAt(0)}`;
                    }}
                  />
                  {/* Discount Badge */}
                  {product.discount > 0 && (
                    <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                      -{product.discount}%
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-4 flex flex-col flex-grow">
                  {/* Brand */}
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                    {product.brand}
                  </p>

                  {/* Product Name */}
                  <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 flex-grow">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex space-x-1">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-xs text-gray-500 ml-2">
                      ({product.reviews || 0})
                    </span>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center space-x-2 mb-4">
                    {product.discount > 0 && (
                      <span className="text-xs text-gray-500 line-through">
                        {formatPrice(product.price)}
                      </span>
                    )}
                    <span className="text-sm font-bold text-primary">
                      {formatPrice(discountedPrice)}
                    </span>
                  </div>

                  {/* Add to Cart Button - Always at bottom */}
                  <div className="mt-auto">
                    <button className="w-full bg-white border border-primary text-primary py-2 px-4 rounded text-sm font-medium hover:bg-red-50 transition-colors flex items-center justify-center space-x-2">
                      <ShoppingCart size={16} />
                      <span>ADD TO CART</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show message if no products */}
        {visibleProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products available for this category.</p>
          </div>
        )}

        {/* Product Navigation Info */}
        <div className="flex justify-center items-center mt-6 space-x-4 text-sm text-gray-600">
          <span>
            Showing {currentProductIndex + 1}-{Math.min(currentProductIndex + productsPerPage, displayedProducts.length)} of {displayedProducts.length} products
          </span>
        </div>
      </div>

      {/* Category Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {categoriesWithSubcategories.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentCategoryIndex(index);
              setCurrentProductIndex(0);
            }}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentCategoryIndex ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCategory;