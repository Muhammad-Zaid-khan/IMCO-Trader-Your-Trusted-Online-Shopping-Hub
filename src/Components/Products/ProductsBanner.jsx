/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart, Truck, ShoppingBag, ArrowRight, Star, Heart, Eye } from "lucide-react";
// import { useNavigate } from 'react-router-dom'; // Uncomment this in your actual app
const ProductSlider = ({ onNavigateToCategory }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [favorites, setFavorites] = useState(new Set());

  // Updated product data with category mapping for navigation
  const products = [
    {
      id: 1,
      title: "Big saving days sale",
      name: "Apple iPhone 13 128 GB, Pink",
      price: "Rs 35,500.00",
      originalPrice: "Rs 45,000.00",
      discount: "21% OFF",
      rating: 4.5,
      reviews: 245,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
      bgColor: "bg-gradient-to-br from-pink-100 via-pink-50 to-white",
      saleTag: "Big Sale",
      categoryId: "electronics",
      subcategory: "Mobile Phones",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 2,
      title: "Men's Footwear Collection",
      name: "Premium Sports Shoes Collection",
      price: "Rs 1,500",
      originalPrice: "Rs 2,500",
      discount: "40% OFF",
      rating: 4.3,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      bgColor: "bg-gradient-to-br from-blue-100 via-blue-50 to-white",
      saleTag: "Hot Deal",
      categoryId: "footwear",
      subcategory: "Sports Shoes",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 3,
      title: "Premium Electronics",
      name: "Latest iPhone Pro Max Series",
      price: "Rs 45,000",
      originalPrice: "Rs 52,000",
      discount: "13% OFF",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
      bgColor: "bg-gradient-to-br from-green-100 via-green-50 to-white",
      saleTag: "New Arrival",
      categoryId: "electronics",
      subcategory: "Mobile Phones",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 4,
      title: "Smart Watches",
      name: "Premium Smart Watch Collection",
      price: "Rs 8,999",
      originalPrice: "Rs 12,999",
      discount: "31% OFF",
      rating: 4.6,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      bgColor: "bg-gradient-to-br from-purple-100 via-purple-50 to-white",
      saleTag: "Limited Time",
      categoryId: "electronics",
      subcategory: "Smart Watches",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 5,
      title: "Headphones & Audio",
      name: "Wireless Bluetooth Headphones",
      price: "Rs 2,499",
      originalPrice: "Rs 4,999",
      discount: "50% OFF",
      rating: 4.4,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      bgColor: "bg-gradient-to-br from-orange-100 via-orange-50 to-white",
      saleTag: "50% Off",
      categoryId: "electronics",
      subcategory: "Headphones",
      inStock: false,
      fastDelivery: false
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleFavorite = (productId, e) => {
    e.stopPropagation();
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const handleShopNow = (product, e) => {
    e.preventDefault();
    if (onNavigateToCategory) {
      onNavigateToCategory(product.categoryId, product.subcategory);
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, currentSlide]);

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-3 sm:py-6">
      <div className="flex flex-col lg:flex-row gap-2 sm:gap-4 min-h-[420px] sm:min-h-[450px] lg:min-h-[500px]">
        {/* Main Slider */}
        <div className="w-full lg:w-3/4 h-[380px] sm:h-[400px] lg:h-[500px]">
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl h-full">
            <div
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`min-w-full ${product.bgColor} relative h-full cursor-pointer group`}
                  onClick={() => onNavigateToCategory && onNavigateToCategory(product.categoryId, product.subcategory)}
                >
                  <div className="flex flex-col sm:flex-row items-center justify-between p-3 sm:p-6 lg:p-8 xl:p-12 h-full">
                    {/* Left Content */}
                    <div className="flex-1 w-full sm:pr-4 lg:pr-6 xl:pr-8 space-y-2 sm:space-y-3 lg:space-y-4 flex flex-col justify-center text-center sm:text-left">
                      {/* Sale Tag & Stock Status */}
                      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-3">
                        <span className="bg-red-500 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide shadow-lg">
                          {product.saleTag}
                        </span>
                        {product.inStock ? (
                          <span className="bg-green-500 text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                            ✓ In Stock
                          </span>
                        ) : (
                          <span className="bg-orange-500 text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                            ⏰ Limited Stock
                          </span>
                        )}
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <p className="text-gray-600 text-xs sm:text-base lg:text-lg font-medium tracking-wide">
                          {product.title}
                        </p>
                        <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 leading-tight group-hover:text-primary transition-colors duration-300">
                          {product.name}
                        </h1>
                        
                        {/* Rating and Reviews - Better mobile spacing */}
                        <div className="flex items-center justify-center sm:justify-start space-x-2 pt-1">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-3 h-3 sm:w-4 sm:h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <span className="text-xs sm:text-sm font-medium text-gray-600">
                            {product.rating} ({product.reviews} reviews)
                          </span>
                        </div>
                      </div>

                      {/* Price Section - Better mobile spacing */}
                      <div className="space-y-1 pt-2 sm:pt-2">
                        <p className="text-gray-600 text-xs sm:text-base font-medium">
                          Starting At Only
                        </p>
                        <div className="flex flex-col sm:flex-row items-center sm:items-baseline justify-center sm:justify-start space-y-1 sm:space-y-0 sm:space-x-3">
                          <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                            {product.price}
                          </span>
                          <span className="text-xs sm:text-base lg:text-lg text-gray-400 line-through font-medium">
                            {product.originalPrice}
                          </span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
                            {product.discount}
                          </span>
                        </div>
                        
                        {/* Fast Delivery - Better mobile spacing */}
                        {product.fastDelivery && (
                          <div className="flex items-center justify-center sm:justify-start space-x-1 text-primary text-xs sm:text-sm font-medium pt-1">
                            <Truck className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Fast Delivery Available</span>
                          </div>
                        )}
                      </div>

                      {/* Action Buttons - Added proper margin for mobile */}
                      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-3 mt-4 sm:mt-0">
                        <button 
                          className="bg-primary hover:bg-primary-sec text-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 min-w-[140px] sm:min-w-[160px] justify-center"
                          onClick={(e) => handleShopNow(product, e)}
                        >
                          <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>SHOP NOW</span>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                        
                        <button
                          onClick={(e) => toggleFavorite(product.id, e)}
                          className="p-2.5 sm:p-3 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 transition-all duration-300 transform hover:scale-110 shadow-md"
                        >
                          <Heart className={`w-5 h-5 ${favorites.has(product.id) ? 'fill-current text-red-500' : ''}`} />
                        </button>
                      </div>
                    </div>

                    {/* Right Image - Better mobile sizing */}
                    <div className="flex-shrink-0 flex justify-center items-center mt-3 sm:mt-0">
                      <div className="relative">
                        <div className="w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-64 xl:h-64 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                          {!product.inStock && (
                            <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
                              <span className="text-white font-bold text-xs sm:text-sm bg-red-500 px-2 sm:px-3 py-1 rounded-full">
                                Limited Stock
                              </span>
                            </div>
                          )}
                        </div>
                        {/* Decorative background elements */}
                        <div className="absolute -top-1 -right-1 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/20 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/30 rounded-full blur-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-primary p-2 sm:p-3 rounded-full shadow-lg sm:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft size={14} className="sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-primary p-2 sm:p-3 rounded-full shadow-lg sm:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight size={14} className="sm:w-6 sm:h-6" />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-3 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-primary w-6 sm:w-8"
                      : "bg-white/60 hover:bg-white/80 w-2 sm:w-3"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Sidebar Cards */}
        <div className="w-full lg:w-1/4 flex flex-row lg:flex-col gap-2 sm:gap-4 h-auto lg:h-[500px]">
          {/* Premium Watches Card */}
          <div 
            className="bg-gradient-to-br from-purple-50 via-indigo-100 to-purple-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 flex-1 flex flex-col justify-between shadow-lg sm:shadow-xl border border-purple-200 relative overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer"
            onClick={() => onNavigateToCategory && onNavigateToCategory('electronics', 'Smart Watches')}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-12 h-12 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-primary rounded-full -translate-y-6 translate-x-6 sm:-translate-y-12 sm:translate-x-12 lg:-translate-y-16 lg:translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-10 h-10 sm:w-18 sm:h-18 lg:w-24 lg:h-24 bg-indigo-500 rounded-full translate-y-5 -translate-x-5 sm:translate-y-9 sm:-translate-x-9 lg:translate-y-12 lg:-translate-x-12"></div>
            </div>

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row lg:flex-col items-start justify-between mb-2 sm:mb-3 lg:mb-4">
                <div className="w-full">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-bold">
                      TRENDING
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xs sm:text-base lg:text-lg font-bold text-gray-800 mb-1 sm:mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                    Premium Watches <br className="hidden sm:block"/> Collection
                  </h3>
                  <p className="text-sm sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-700 to-primary bg-clip-text text-transparent mb-1 sm:mb-2 lg:mb-3">
                    Rs 8,500
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 lg:mb-4">
                    Luxury timepieces for every occasion
                  </p>
                </div>
              </div>

              <button className="flex items-center gap-1 sm:gap-2 text-primary font-bold hover:text-blue-700 transition-all duration-300 text-xs sm:text-sm group-hover:gap-2 sm:group-hover:gap-3">
                <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4" />
                VIEW COLLECTION
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>

            {/* Watch Image */}
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 transition-transform duration-300 group-hover:scale-110">
              <div className="w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg sm:shadow-xl border-2 border-white/20">
                <svg
                  className="w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                </svg>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6 w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-indigo-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
          </div>

          {/* Wireless Headphones Card */}
          <div 
            className="bg-gradient-to-br from-rose-50 via-pink-100 to-rose-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 flex-1 flex flex-col justify-between shadow-lg sm:shadow-xl border border-rose-200 relative overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer"
            onClick={() => onNavigateToCategory && onNavigateToCategory('electronics', 'Headphones')}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-12 h-12 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-rose-500 rounded-full -translate-y-6 -translate-x-6 sm:-translate-y-10 sm:-translate-x-10 lg:-translate-y-14 lg:-translate-x-14"></div>
              <div className="absolute bottom-0 right-0 w-14 h-14 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-pink-500 rounded-full translate-y-7 translate-x-7 sm:translate-y-12 sm:translate-x-12 lg:translate-y-16 lg:translate-x-16"></div>
            </div>

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row lg:flex-col items-start justify-between mb-2 sm:mb-3 lg:mb-4">
                <div className="w-full">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-rose-100 text-rose-800 px-2 py-1 rounded-full text-xs font-bold">
                      50% OFF
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400 fill-current" />
                      ))}
                      <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-300" />
                    </div>
                  </div>
                  <h3 className="text-xs sm:text-base lg:text-lg font-bold text-gray-800 mb-1 sm:mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                    Wireless <br className="hidden sm:block"/>
                    Headphones
                  </h3>
                  <p className="text-sm sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-700 to-primary bg-clip-text text-transparent mb-1 sm:mb-2 lg:mb-3">
                    Rs 12,000
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 lg:mb-4">
                    Crystal clear sound & comfort
                  </p>
                </div>
              </div>

              <button className="flex items-center gap-1 sm:gap-2 text-primary font-bold hover:text-blue-700 transition-all duration-300 text-xs sm:text-sm group-hover:gap-2 sm:group-hover:gap-3">
                <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4" />
                VIEW COLLECTION
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>

            {/* Headphones Image */}
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 transition-transform duration-300 group-hover:scale-110">
              <div className="w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-indigo-500 via-blue-500 to-primary rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg sm:shadow-xl border-2 border-white/20">
                <svg
                  className="w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z" />
                </svg>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 left-2 sm:top-6 sm:left-3 lg:top-8 lg:left-4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-rose-400 rounded-full opacity-60 animate-pulse delay-500"></div>
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 lg:bottom-6 lg:right-6 w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-pink-400 rounded-full opacity-60 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductBanner = ({ onNavigateToCategory }) => {
  // Updated products with category mapping
  const products = [
    {
      id: 1,
      title: "Buy women products with low price",
      price: "Rs 999",
      originalPrice: "Rs 1,499",
      discount: "33% OFF",
      image: "https://i.pinimg.com/736x/09/8c/68/098c68ef387f3f3950f5b40183468656.jpg",
      bgColor: "bg-purple-100",
      imageAlt: "Woman in floral top",
      categoryId: "fashion",
      subcategory: "Women's Clothing",
      rating: 4.2,
      inStock: true
    },
    {
      id: 2,
      title: "Buy Men's Bags with low price",
      price: "Rs 900",
      originalPrice: "Rs 1,400",
      discount: "36% OFF",
      image: "https://i.pinimg.com/736x/44/43/19/4443192fc5fff307a6d852402a55fd39.jpg",
      bgColor: "bg-orange-50",
      imageAlt: "Blue backpack",
      categoryId: "bags",
      subcategory: "Backpacks",
      rating: 4.5,
      inStock: true
    },
    {
      id: 3,
      title: "Buy Apple iPhone",
      price: "Rs 45,000",
      originalPrice: "Rs 52,000",
      discount: "13% OFF",
      image: "https://i.pinimg.com/736x/27/e3/a7/27e3a7c47436371f495e8aebddf2ce85.jpg",
      bgColor: "bg-green-100",
      imageAlt: "iPhone",
      categoryId: "electronics",
      subcategory: "Mobile Phones", 
      rating: 4.8,
      inStock: true
    },
    {
      id: 4,
      title: "Buy Men's Footwear with low price",
      price: "Rs 1,500",
      originalPrice: "Rs 2,500",
      discount: "40% OFF",
      image: "https://i.pinimg.com/736x/e3/9f/9d/e39f9dadbf52b6d24591a3e29af3350f.jpg",
      bgColor: "bg-blue-100",
      imageAlt: "Black and white slides",
      categoryId: "footwear",
      subcategory: "Men's Shoes",
      rating: 4.1,
      inStock: true
    }
  ];

  const handleProductClick = (product) => {
    onNavigateToCategory(product.categoryId, product.subcategory);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-3 sm:py-6">
      {/* Free Shipping Banner */}
      <div className="border-2 border-primary-sec rounded-lg p-3 sm:p-4 bg-white mb-3 sm:mb-4 hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="bg-red-50 p-2 rounded-full">
              <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-primary">FREE SHIPPING</h2>
              <p className="text-sm sm:text-base text-gray-600">Free Delivery Now On Your First Order and over Rs 1,000</p>
            </div>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-xl sm:text-2xl font-bold text-primary">- Only Rs 1,000*</span>
            <p className="text-xs text-gray-500">*Terms & Conditions Apply</p>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className={`${product.bgColor} rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group border border-gray-200`}
            onClick={() => handleProductClick(product)}
          >
            <div className="p-3 sm:p-4 lg:p-6 h-full flex flex-col">
              {/* Product Image */}
              <div className="flex-1 flex items-center justify-center mb-3 sm:mb-4 relative">
                <div className="w-full h-32 sm:h-36 lg:h-44 rounded-lg overflow-hidden relative group">
                  <img 
                    src={product.image} 
                    alt={product.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay with quick actions */}
                  <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                      <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                        <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="absolute top-2 left-2">
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        {product.discount}
                      </span>
                    </div>
                  )}
                  
                  {/* Stock Status */}
                  <div className="absolute top-2 right-2">
                    {product.inStock ? (
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        ✓ In Stock
                      </span>
                    ) : (
                      <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        ⏰ Limited
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="space-y-2 sm:space-y-3">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 leading-tight group-hover:text-primary transition-colors duration-300">
                  {product.title}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">({product.rating})</span>
                </div>
                
                {/* Price Section */}
                <div className="flex items-baseline space-x-2">
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">
                    {product.price}
                  </p>
                  {product.originalPrice && (
                    <p className="text-sm text-gray-400 line-through">
                      {product.originalPrice}
                    </p>
                  )}
                </div>
                
                {/* Shop Now Button */}
                <button 
                  className="w-full bg-transparent border-2 border-primary text-primary font-semibold py-2 sm:py-3 hover:bg-primary hover:text-white transition-all duration-300 text-sm sm:text-base rounded-lg group-hover:shadow-lg flex items-center justify-center space-x-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProductClick(product);
                  }}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>SHOP NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Additional Features Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Feature 1 */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
          <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-800 mb-2">Fast Delivery</h3>
          <p className="text-gray-600 text-sm">Get your orders delivered within 24-48 hours</p>
        </div>
        
        {/* Feature 2 */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
          <ShoppingCart className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-800 mb-2">Easy Returns</h3>
          <p className="text-gray-600 text-sm">30-day return policy on all products</p>
        </div>
        
        {/* Feature 3 */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center sm:col-span-2 lg:col-span-1">
          <Star className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-800 mb-2">Quality Guaranteed</h3>
          <p className="text-gray-600 text-sm">100% authentic products with warranty</p>
        </div>
      </div>
    </div>
  );
};

// Main Combined Component
export default function ProductsBanner({ onNavigateToCategory = () => {} }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Product Slider Section */}
      <ProductSlider onNavigateToCategory={onNavigateToCategory} />
      
      {/* Product Banner Section */}
      <ProductBanner onNavigateToCategory={onNavigateToCategory} />
    </div>
  );
}