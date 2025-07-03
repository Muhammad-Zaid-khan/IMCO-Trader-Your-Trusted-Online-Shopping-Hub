/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from 'lucide-react';
import { 
  categories, 
  products, 
  newArrivals,
  getProductsByCategory, 
  formatPrice,
  calculateDiscountedPrice 
} from '../../assets/assets';

const LatestProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  
  const productsPerPage = 6;

  useEffect(() => {
    // Get the latest products (last 20 products from the array)
    const latestProducts = products.slice(-20);
    setDisplayedProducts(latestProducts);
  }, []);

  const nextSlide = () => {
    if (currentIndex < displayedProducts.length - productsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleProducts = displayedProducts.slice(currentIndex, currentIndex + productsPerPage);

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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Latest Products</h1>
        <p className="text-gray-600">Discover our newest collection of premium products.</p>
      </div>

      {/* Products Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 transition-colors ${
            currentIndex === 0 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-gray-50 cursor-pointer'
          }`}
        >
          <ChevronLeft size={20} className="text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          disabled={currentIndex >= displayedProducts.length - productsPerPage}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 transition-colors ${
            currentIndex >= displayedProducts.length - productsPerPage
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-gray-50 cursor-pointer'
          }`}
        >
          <ChevronRight size={20} className="text-gray-600" />
        </button>

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
            <p className="text-gray-500">No latest products available.</p>
          </div>
        )}

        {/* Product Navigation Info */}
        <div className="flex justify-center items-center mt-6 space-x-4 text-sm text-gray-600">
          <span>
            Showing {currentIndex + 1}-{Math.min(currentIndex + productsPerPage, displayedProducts.length)} of {displayedProducts.length} products
          </span>
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;