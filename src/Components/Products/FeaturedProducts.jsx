/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from 'lucide-react';
import { featuredProducts, formatPrice } from '../../assets/assets';

const FeaturedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 6;

  const nextProducts = () => {
    const maxIndex = Math.max(0, featuredProducts.length - productsPerPage);
    setCurrentIndex(Math.min(maxIndex, currentIndex + productsPerPage));
  };

  const prevProducts = () => {
    setCurrentIndex(Math.max(0, currentIndex - productsPerPage));
  };

  // Check if navigation buttons should be disabled
  const canGoToPrevious = currentIndex > 0;
  const canGoToNext = currentIndex + productsPerPage < featuredProducts.length;

  const visibleProducts = featuredProducts.slice(currentIndex, currentIndex + productsPerPage);

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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h1>
        <p className="text-gray-600">Discover our handpicked selection of premium products.</p>
      </div>

      {/* Products Section */}
      <div className="relative">
        {/* Product Navigation Arrows */}
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {visibleProducts.map((product) => (
            <div key={product._id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
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
                    ({product.reviews})
                  </span>
                </div>

                {/* Pricing */}
                <div className="flex items-center space-x-2 mb-4">
                  {product.discount > 0 && (
                    <span className="text-xs text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                  <span className="text-sm font-bold text-primary">
                    {formatPrice(product.price)}
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
          ))}
        </div>

        {/* Show message if no products */}
        {visibleProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No featured products available.</p>
          </div>
        )}

        {/* Product Navigation Info */}
        <div className="flex justify-center items-center mt-6 space-x-4 text-sm text-gray-600">
          <span>
            Showing {currentIndex + 1}-{Math.min(currentIndex + productsPerPage, featuredProducts.length)} of {featuredProducts.length} products
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;