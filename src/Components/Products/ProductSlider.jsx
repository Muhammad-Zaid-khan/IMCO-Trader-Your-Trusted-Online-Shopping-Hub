/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { ShoppingBag, ArrowRight } from "lucide-react";

const ProductSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample product data matching the reference design
  const products = [
    {
      id: 1,
      title: "Big saving days sale",
      name: "Apple iPhone 13 128 GB, Pink",
      price: "Rs 35,500.00",
      originalPrice: "Rs 45,000.00",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
      bgColor: "bg-gradient-to-br from-pink-100 via-pink-50 to-white",
      saleTag: "Big Sale",
    },
    {
      id: 2,
      title: "Men's Footwear Collection",
      name: "Premium Sports Shoes Collection",
      price: "Rs 1,500",
      originalPrice: "Rs 2,500",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      bgColor: "bg-gradient-to-br from-blue-100 via-blue-50 to-white",
      saleTag: "Hot Deal",
    },
    {
      id: 3,
      title: "Premium Electronics",
      name: "Latest iPhone Pro Max Series",
      price: "Rs 45,000",
      originalPrice: "Rs 52,000",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
      bgColor: "bg-gradient-to-br from-green-100 via-green-50 to-white",
      saleTag: "New Arrival",
    },
    {
      id: 4,
      title: "Smart Watches",
      name: "Premium Smart Watch Collection",
      price: "Rs 8,999",
      originalPrice: "Rs 12,999",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      bgColor: "bg-gradient-to-br from-purple-100 via-purple-50 to-white",
      saleTag: "Limited Time",
    },
    {
      id: 5,
      title: "Headphones & Audio",
      name: "Wireless Bluetooth Headphones",
      price: "Rs 2,499",
      originalPrice: "Rs 4,999",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      bgColor: "bg-gradient-to-br from-orange-100 via-orange-50 to-white",
      saleTag: "50% Off",
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

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, currentSlide]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-[500px]">
        {/* Main Slider */}
        <div className="lg:col-span-3 h-full">
          <div className="relative overflow-hidden rounded-2xl shadow-xl h-full">
            <div
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`min-w-full ${product.bgColor} relative h-full`}
                >
                  <div className="flex items-center justify-between p-8 lg:p-12 h-full">
                    {/* Left Content */}
                    <div className="flex-1 pr-8 space-y-6 flex flex-col justify-center">
                      <div>
                        <p className="text-gray-600 text-lg font-medium mb-2 tracking-wide">
                          {product.title}
                        </p>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                          {product.name}
                        </h1>
                      </div>

                      <div className="space-y-2">
                        <p className="text-gray-600 text-lg font-medium">
                          Starting At Only
                        </p>
                        <div className="flex items-baseline space-x-3">
                          <span className="text-4xl lg:text-5xl font-bold text-primary">
                            {product.price}
                          </span>
                          <span className="text-xl text-gray-400 line-through font-medium">
                            {product.originalPrice}
                          </span>
                        </div>
                      </div>

                      <button className="bg-primary hover:bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                        SHOP NOW
                      </button>
                    </div>

                    {/* Right Image */}
                    <div className="flex-shrink-0 flex justify-center items-center">
                      <div className="relative">
                        <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Decorative background elements */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/30 rounded-full blur-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-primary p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-primary p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dot IndicatoRs */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-primary w-8"
                      : "bg-white/60 hover:bg-white/80 w-3"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Cards */}
        <div className="lg:col-span-1 flex flex-col gap-4 h-full">
          {/* Premium Watches Card */}
          <div className="bg-gradient-to-br from-purple-50 via-indigo-100 to-purple-100 rounded-2xl p-6 flex-1 flex flex-col justify-between shadow-xl border border-purple-200 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-500 rounded-full translate-y-12 -translate-x-12"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                    Premium Watches Collection
                  </h3>
                  <p className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-fav bg-clip-text text-transparent mb-3">
                    Rs 8,500
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Luxury timepieces for every occasion
                  </p>
                </div>
              </div>

              <button className="flex items-center gap-2 text-primary font-bold hover:text-primary-fav transition-all duration-300 text-sm group-hover:gap-3">
                <ShoppingBag className="w-4 h-4" />
                SHOP NOW
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Watch Image */}
            <div className="absolute top-4 right-4 transition-transform duration-300 group-hover:scale-110">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl border-2 border-white/20">
                <svg
                  className="w-10 h-10 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                </svg>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-6 left-6 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute bottom-8 right-8 w-1 h-1 bg-indigo-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
          </div>

          {/* Wireless Headphones Card */}
          <div className="bg-gradient-to-br from-rose-50 via-pink-100 to-rose-100 rounded-2xl p-6 flex-1 flex flex-col justify-between shadow-xl border border-rose-200 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-28 h-28 bg-rose-500 rounded-full -translate-y-14 -translate-x-14"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500 rounded-full translate-y-16 translate-x-16"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                    Wireless  <br/>
                    Headphones
                  </h3>
                  <p className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-fav bg-clip-text text-transparent mb-3">
                    Rs 12,000
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Crystal clear sound & comfort
                  </p>
                </div>
              </div>

              <button className="flex items-center gap-2 text-primary font-bold hover:text-primary-fav transition-all duration-300 text-sm group-hover:gap-3">
                <ShoppingBag className="w-4 h-4" />
                SHOP NOW
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Headphones Image */}
            <div className="absolute top-4 right-4 transition-transform duration-300 group-hover:scale-110">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 via-blue-500 to-primary rounded-2xl flex items-center justify-center shadow-xl border-2 border-white/20">
                <svg
                  className="w-10 h-10 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z" />
                </svg>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-8 left-4 w-1.5 h-1.5 bg-rose-400 rounded-full opacity-60 animate-pulse delay-500"></div>
            <div className="absolute bottom-6 right-6 w-2 h-2 bg-pink-400 rounded-full opacity-60 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;