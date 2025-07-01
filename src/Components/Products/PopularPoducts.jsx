import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from 'lucide-react';
import { 
  categories, 
  products, 
  getProductsByCategory, 
  formatPrice 
} from '../../assets/assets';

const PopularProducts = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  
  const productsPerPage = 6;
  const categoriesPerPage = 6;

  // Add "All Products" as the first category
  const allCategories = [
    { id: 'all', name: 'All Products', emoji: '🛍️', featured: true },
    ...categories
  ];

  // Get categories to display based on current index
  const displayedCategories = allCategories.slice(
    currentCategoryIndex, 
    currentCategoryIndex + categoriesPerPage
  );

  // Update displayed products when active tab or product index changes
  useEffect(() => {
    let productsToShow;
    if (activeTab === 'all') {
      productsToShow = products;
    } else {
      productsToShow = getProductsByCategory(activeTab);
    }
    
    const startIndex = currentProductIndex;
    const endIndex = startIndex + productsPerPage;
    setDisplayedProducts(productsToShow.slice(startIndex, endIndex));
  }, [activeTab, currentProductIndex]);

  // Reset product index when changing categories
  const handleCategoryChange = (categoryId) => {
    setActiveTab(categoryId);
    setCurrentProductIndex(0);
  };

  // Category navigation functions
  const handlePreviousCategories = () => {
    setCurrentCategoryIndex(Math.max(0, currentCategoryIndex - categoriesPerPage));
  };

  const handleNextCategories = () => {
    const maxIndex = Math.max(0, allCategories.length - categoriesPerPage);
    setCurrentCategoryIndex(Math.min(maxIndex, currentCategoryIndex + categoriesPerPage));
  };

  // Product navigation functions
  const handlePreviousProducts = () => {
    setCurrentProductIndex(Math.max(0, currentProductIndex - productsPerPage));
  };

  const handleNextProducts = () => {
    const totalProducts = activeTab === 'all' ? products.length : getProductsByCategory(activeTab).length;
    const maxIndex = Math.max(0, totalProducts - productsPerPage);
    setCurrentProductIndex(Math.min(maxIndex, currentProductIndex + productsPerPage));
  };

  // Check if navigation buttons should be disabled
  const canGoToPreviousCategories = currentCategoryIndex > 0;
  const canGoToNextCategories = currentCategoryIndex + categoriesPerPage < allCategories.length;

  const getTotalProducts = () => {
    return activeTab === 'all' ? products.length : getProductsByCategory(activeTab).length;
  };

  const canGoToPreviousProducts = currentProductIndex > 0;
  const canGoToNextProducts = currentProductIndex + productsPerPage < getTotalProducts();

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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Popular Products</h1>
        <p className="text-gray-600">Do not miss the current offers until the end of March.</p>
      </div>

      {/* Categories Navigation Section */}
      <div className="mb-8">
        <div className="relative">
          {/* Category Navigation Arrows */}
          <button 
            onClick={handlePreviousCategories}
            disabled={!canGoToPreviousCategories}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 transition-colors ${
              canGoToPreviousCategories 
                ? 'hover:bg-gray-50 cursor-pointer' 
                : 'opacity-50 cursor-not-allowed'
            }`}
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          
          <button 
            onClick={handleNextCategories}
            disabled={!canGoToNextCategories}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 transition-colors ${
              canGoToNextCategories 
                ? 'hover:bg-gray-50 cursor-pointer' 
                : 'opacity-50 cursor-not-allowed'
            }`}
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>

          {/* Navigation Tabs */}
          <div className="flex space-x-8 border-b border-gray-200 overflow-hidden">
            {displayedCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`pb-4 px-1 text-sm font-medium transition-colors flex items-center space-x-2 whitespace-nowrap ${
                  activeTab === category.id
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <span>{category.emoji}</span>
                <span>{category.name.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="relative">
        {/* Product Navigation Arrows */}
        <button 
          onClick={handlePreviousProducts}
          disabled={!canGoToPreviousProducts}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 transition-colors ${
            canGoToPreviousProducts 
              ? 'hover:bg-gray-50 cursor-pointer' 
              : 'opacity-50 cursor-not-allowed'
          }`}
        >
          <ChevronLeft size={20} className="text-gray-600" />
        </button>
        
        <button 
          onClick={handleNextProducts}
          disabled={!canGoToNextProducts}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 transition-colors ${
            canGoToNextProducts 
              ? 'hover:bg-gray-50 cursor-pointer' 
              : 'opacity-50 cursor-not-allowed'
          }`}
        >
          <ChevronRight size={20} className="text-gray-600" />
        </button>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {displayedProducts.map((product) => (
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
        {displayedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}

        {/* Product Navigation Info */}
        <div className="flex justify-center items-center mt-6 space-x-4 text-sm text-gray-600">
          <span>
            Showing {currentProductIndex + 1}-{Math.min(currentProductIndex + productsPerPage, getTotalProducts())} of {getTotalProducts()} products
          </span>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;