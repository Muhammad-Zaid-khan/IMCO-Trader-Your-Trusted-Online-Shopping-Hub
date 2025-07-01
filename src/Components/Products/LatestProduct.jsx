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
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />);
    }
    
    while (stars.length < 5) {
      stars.push(<Star key={`empty-${stars.length}`} className="w-4 h-4 text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:px-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold text-primary-six">Latest Products</h2>
        <button className="flex items-center text-primary-six hover:text-primary font-medium">
          View All
          <ChevronRight className="w-5 h-5 ml-1" />
        </button>
      </div>

      {/* Products Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border flex items-center justify-center transition-all ${
            currentIndex === 0 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-gray-50 hover:shadow-xl'
          }`}
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          disabled={currentIndex >= displayedProducts.length - productsPerPage}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border flex items-center justify-center transition-all ${
            currentIndex >= displayedProducts.length - productsPerPage
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-primary-bg hover:shadow-xl'
          }`}
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-12">
          {visibleProducts.map((product) => {
            const discountedPrice = calculateDiscountedPrice(product.price, product.discount);
            
            return (
              <div
                key={product._id}
                className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-gray-300 group flex flex-col h-full"
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden rounded-t-lg bg-gray-100">
                  {product.discount > 0 && (
                    <div className="absolute top-2 left-2 z-10">
                      <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                        {product.discount}%
                      </span>
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x300/f3f4f6/9ca3af?text=${product.name.charAt(0)}`;
                    }}
                  />
                </div>

                {/* Product Info - Flex container that grows */}
                <div className="p-3 flex flex-col flex-grow">
                  {/* Brand */}
                  <div className="text-xs text-gray-500 mb-1 font-medium">
                    {product.brand}
                  </div>

                  {/* Product Name */}
                  <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 leading-tight">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {renderStars(product.rating)}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex flex-col">
                      {product.discount > 0 && (
                        <span className="text-xs text-gray-500 line-through">
                          {formatPrice(product.price)}
                        </span>
                      )}
                      <span className="text-sm font-bold text-primary">
                        {formatPrice(discountedPrice)}
                      </span>
                    </div>
                  </div>

                  {/* Add to Cart Button - Push to bottom */}
                  <div className="mt-auto">
                    <button className="w-full bg-white border border-red-200 text-primary py-2 px-3 rounded text-xs font-medium hover:bg-red-50 hover:border-red-300 transition-colors duration-200 flex items-center justify-center gap-2">
                      <ShoppingCart className="w-3 h-3" />
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(displayedProducts.length / productsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * productsPerPage)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              Math.floor(currentIndex / productsPerPage) === index
                ? 'bg-primary'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;