/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Menu, ChevronDown, ChevronRight, Sparkles, X, ArrowRight } from 'lucide-react';
import { categories  } from '../../assets/assets'; 

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredSidebarCategory, setHoveredSidebarCategory] = useState(null);
  const [sidebarActiveCategory, setSidebarActiveCategory] = useState(null);

  // Create main categories for the top navigation from your assets
  const mainCategories = [
    {
      name: 'Home',
      icon: '🏠',
      subcategories: []
    },
    // Get specific categories from your assets data
    ...categories.filter(cat => ['fashion', 'electronics', 'bags', 'footwear'].includes(cat.id))
      .map(cat => ({
        name: cat.name,
        icon: cat.emoji,
        subcategories: cat.subcategories
      }))
  ];

  // Use all categories from your assets file
  const allCategories = categories.map(category => ({
    name: category.name,
    emoji: category.emoji,
    subcategories: category.subcategories,
    featured: category.featured
  }));

  const handleSidebarCategoryClick = (index) => {
    setSidebarActiveCategory(sidebarActiveCategory === index ? null : index);
  };

  return (
    <>
      <header className="bg-primary-bg shadow-sm border-b border-gray-200 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <div className="flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-600 hover:text-primary-six hover:bg-gray-100 transition-all duration-200"
              >
                <Menu className="h-5 w-5" />
              </button>
              
              {/* Shop by Categories - Desktop */}
              <div className="hidden md:flex items-center space-x-2">
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-primary-fav text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <Menu className="h-4 w-4" />
                  <span className="text-sm font-semibold uppercase tracking-wide">Shop by</span>
                  <span className="text-sm font-bold uppercase tracking-wide">Categories</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isSidebarOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            {/* Navigation Categories */}
            <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center relative">
              {mainCategories.map((category, index) => (
                <div key={category.name} className="relative">
                  <a
                    href="#"
                    onMouseEnter={() => setActiveCategory(index)}
                    onMouseLeave={() => setActiveCategory(null)}
                    className={`flex items-center space-x-2 text-sm font-semibold transition-all duration-300 relative py-4 px-3 rounded-lg
                      ${activeCategory === index 
                        ? 'text-primary bg-purple-50 scale-105 shadow-md' 
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                      }`}
                  >
                    <span className="text-lg filter drop-shadow-sm">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                    {activeCategory === index && (
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-purple-500 to-primary-fav rounded-full" />
                    )}
                  </a>

                  {/* Dropdown for categories with subcategories */}
                  {activeCategory === index && category.subcategories.length > 0 && (
                    <div 
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-72 bg-white shadow-2xl border border-gray-100 rounded-xl z-60 overflow-hidden"
                      onMouseEnter={() => setActiveCategory(index)}
                      onMouseLeave={() => setActiveCategory(null)}
                    >
                      <div className="p-6">
                        <h3 className="text-sm font-bold text-primary-six mb-4 border-b border-gray-100 pb-3 flex items-center space-x-2">
                          <span className="text-lg">{category.icon}</span>
                          <span>{category.name}</span>
                          <div className="ml-auto w-2 h-2 bg-gradient-to-r from-purple-500 to-primary-fav rounded-full"></div>
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {category.subcategories.map((subcategory) => (
                            <a
                              key={subcategory}
                              href="#"
                              className="block text-sm text-gray-700 hover:text-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 px-4 py-3 rounded-lg transition-all duration-200 font-medium border border-transparent hover:border-purple-100"
                            >
                              {subcategory}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Free International Delivery */}
            <div className="flex items-center space-x-3 bg-gradient-to-r from-green-50 to-blue-50 px-4 py-2 rounded-lg border border-green-100">
              <Sparkles className="h-5 w-5 text-primary-four animate-pulse" />
              <div className="text-right">
                <div className="font-bold text-primary-six text-sm">Free International</div>
                <div className="text-emerald-600 text-xs font-semibold">Delivery Available</div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 bg-gradient-to-b from-white to-gray-50">
              <div className="py-6 space-y-2">
                <div className="flex items-center space-x-2 px-4 py-3 text-sm font-bold text-primary-six bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg mx-4">
                  <Menu className="h-4 w-4 text-primary" />
                  <span className="uppercase tracking-wide">Shop by Categories</span>
                </div>
                {allCategories.slice(0, 6).map((category) => (
                  <a
                    key={category.name}
                    href="#"
                    className="flex items-center justify-between mx-4 px-4 py-4 text-sm font-medium text-gray-700 hover:text-primary hover:bg-white rounded-lg transition-all duration-200 border border-transparent hover:border-purple-100 hover:shadow-md"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{category.emoji}</span>
                      <span>{category.name}</span>
                      {category.featured && (
                        <span className="px-2 py-1 text-xs font-semibold text-primary bg-purple-100 rounded-full">Featured</span>
                      )}
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </a>
                ))}
                <div className="px-4 py-4 border-t border-gray-200 mt-6 mx-4">
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-green-50 to-blue-50 px-4 py-3 rounded-lg">
                    <Sparkles className="h-4 w-4 text-emerald-600" />
                    <span className="font-semibold text-primary-fav text-sm">Free International Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-300 backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <div className={`fixed top-0 left-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-all duration-300 ease-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="bg-gradient-to-r from-primary to-pink-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">All Categories</h2>
              <p className="text-purple-100 text-sm mt-1">Discover our complete collection</p>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 rounded-lg text-white hover:bg-primary hover:bg-opacity-20 transition-all duration-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto h-full pb-32 bg-gray-50">
          {allCategories.map((category, index) => (
            <div key={category.name} className="relative bg-white mb-2 mx-4 mt-4 rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div 
                className={`flex items-center justify-between p-4 cursor-pointer transition-all duration-200 ${
                  sidebarActiveCategory === index ? 'bg-gradient-to-r from-purple-50 to-pink-50' : 'hover:bg-gray-50'
                }`}
                onClick={() => handleSidebarCategoryClick(index)}
                onMouseEnter={() => setHoveredSidebarCategory(index)}
                onMouseLeave={() => setHoveredSidebarCategory(null)}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl filter drop-shadow-sm">{category.emoji}</span>
                  </div>
                  <div>
                    <span className="text-base font-semibold text-primary-third">{category.name}</span>
                    {category.featured && (
                      <div className="flex items-center space-x-1 mt-1">
                        <Sparkles className="h-3 w-3 text-primary" />
                        <span className="text-xs font-semibold text-primary">Featured</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">
                    {category.subcategories.length}
                  </div>
                  <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                    sidebarActiveCategory === index ? 'rotate-90 text-primary' : 'group-hover:text-primary'
                  }`} />
                </div>
              </div>

              {/* Subcategories - Always visible when clicked */}
              {sidebarActiveCategory === index && (
                <div className="bg-gradient-to-r from-gray-50 to-white border-t border-gray-100 p-4 space-y-2">
                  <div className="grid gap-2">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <a
                        key={subcategory}
                        href="#"
                        className="flex items-center justify-between text-sm text-gray-700 hover:text-primary hover:bg-white px-4 py-3 rounded-lg transition-all duration-200 font-medium border border-transparent hover:border-purple-100 hover:shadow-sm group"
                      >
                        <span>{subcategory}</span>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary transform group-hover:translate-x-1 transition-all duration-200" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Hover overlay for additional subcategories */}
              {hoveredSidebarCategory === index && sidebarActiveCategory !== index && (
                <div className="absolute left-full top-0 w-80 bg-white shadow-2xl border border-gray-200 rounded-xl ml-4 z-60 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-pink-600 p-4 text-white">
                    <h3 className="text-lg font-bold flex items-center space-x-2">
                      <span className="text-xl">{category.emoji}</span>
                      <span>{category.name}</span>
                    </h3>
                    <p className="text-purple-100 text-sm mt-1">{category.subcategories.length} subcategories available</p>
                  </div>
                  <div className="p-4 max-h-80 overflow-y-auto">
                    <div className="space-y-2">
                      {category.subcategories.map((subcategory) => (
                        <a
                          key={subcategory}
                          href="#"
                          className="flex items-center justify-between text-sm text-gray-700 hover:text-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 px-4 py-3 rounded-lg transition-all duration-200 font-medium border border-transparent hover:border-purple-100 group"
                        >
                          <span>{subcategory}</span>
                          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary transform group-hover:translate-x-1 transition-all duration-200" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;