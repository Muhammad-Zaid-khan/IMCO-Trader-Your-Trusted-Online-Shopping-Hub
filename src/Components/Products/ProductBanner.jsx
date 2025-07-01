import React from 'react';
import { Truck } from 'lucide-react';

export default function ProductBanner() {
  const products = [
    {
      id: 1,
      title: "Buy women products with low price",
      price: "Rs 999",
      image: "https://i.pinimg.com/736x/09/8c/68/098c68ef387f3f3950f5b40183468656.jpg",
      bgColor: "bg-purple-100",
      imageAlt: "Woman in floral top"
    },
    {
      id: 2,
      title: "Buy Men's Bags with low price",
      price: "Rs 900",
      image: "https://i.pinimg.com/736x/44/43/19/4443192fc5fff307a6d852402a55fd39.jpg",
      bgColor: "bg-orange-50",
      imageAlt: "Blue backpack"
    },
    {
      id: 3,
      title: "Buy Apple Iphone",
      price: "Rs 45000",
      image: "https://i.pinimg.com/736x/27/e3/a7/27e3a7c47436371f495e8aebddf2ce85.jpg",
      bgColor: "bg-green-100",
      imageAlt: "iPhone"
    },
    {
      id: 4,
      title: "Buy Men's Footwear with low price",
      price: "Rs 1500",
      image: "https://i.pinimg.com/736x/e3/9f/9d/e39f9dadbf52b6d24591a3e29af3350f.jpg",
      bgColor: "bg-blue-100",
      imageAlt: "Black and white slides"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:px-8">
      {/* Free Shipping Banner */}
      <div className="border-2 border-red-400 rounded-lg p-4 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Truck className="w-8 h-8 text-gray-700" />
            <div>
              <h2 className="text-xl font-bold text-primary">FREE SHIPPING</h2>
              <p className="text-gray-600">Free Delivery Now On Your First Order and over Rs 1,000</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-primary">- Only Rs 1,000*</span>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className={`${product.bgColor} rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>
            <div className="p-6 h-full flex flex-col">
              {/* Product Image */}
              <div className="flex-1 flex items-center justify-center mb-4">
                <div className="w-full h-45 rounded-lg overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Product Info */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-primary leading-tight">
                  {product.title}
                </h3>
                <p className="text-2xl font-bold text-primary-fav">
                  {product.price}
                </p>
                <button className="w-full bg-transparent border-b-2 border-primary text-primary font-semibold py-2 hover:bg-primary hover:text-white transition-colors">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}