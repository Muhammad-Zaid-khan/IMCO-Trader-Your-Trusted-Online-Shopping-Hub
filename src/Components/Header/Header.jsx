import { assets } from "../../assets/assets";
import Navigation from "./Navigation";
import SimpleSearchInput from "./Search";
import { Heart, ShoppingCart, GitCompare, Menu, X, Search } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileSearchOpen(false);
  };

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="w-full border-b border-gray-200 bg-primary-bg">
        <div className="max-w-7xl mx-auto px-4 py-3">
          {/* Main Header Row */}
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <section className="flex-shrink-0">
              <img
                alt="Company Logo"
                onClick={() => {
                  /* Navigate to home */
                }}
                src={assets.logo}
                className="w-32 h-10 sm:w-40 sm:h-12 lg:w-52 lg:h-16 cursor-pointer"
              />
            </section>

            {/* Desktop Search Section */}
            <section className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <SimpleSearchInput />
            </section>

            {/* Desktop Icons Section */}
            <section className="hidden lg:flex flex-shrink-0 pr-7">
              <div className="flex items-center space-x-6">
                {/* Auth Buttons */}
                <div className="flex items-center space-x-2 text-primary-six">
                  <button className="hover:text-primary text-sm font-medium cursor-pointer transition-colors">
                    Login
                  </button>
                  <span className="text-primary-six">|</span>
                  <button className="hover:text-primary text-sm font-medium text-primary-six cursor-pointer transition-colors">
                    Register
                  </button>
                </div>

                {/* Action Icons */}
                <div className="flex items-center space-x-4">
                  <button
                    className="text-gray-600 hover:text-primary transition-colors relative"
                    aria-label="Compare products"
                  >
                    <GitCompare size={24} />
                    <span className="absolute -top-2 -right-2 bg-primary-third text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      2
                    </span>
                  </button>
                  <button
                    className="text-gray-600 hover:text-primary transition-colors relative"
                    aria-label="View wishlist"
                  >
                    <Heart size={24} />
                    <span className="absolute -top-2 -right-2 bg-primary-third text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      5
                    </span>
                  </button>
                  <button
                    className="text-gray-600 hover:text-primary transition-colors relative"
                    aria-label="View shopping cart"
                  >
                    <ShoppingCart size={24} />
                    <span className="absolute -top-2 -right-2 bg-primary-third text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      3
                    </span>
                  </button>
                </div>
              </div>
            </section>

            {/* Mobile Icons Section */}
            <section className="flex lg:hidden items-center space-x-3">
              {/* Mobile Action Icons */}
              <div className="flex items-center space-x-2">
                <button
                  className="text-gray-600 hover:text-primary transition-colors relative"
                  aria-label="Compare products"
                >
                  <GitCompare size={20} />
                  <span className="absolute -top-1 -right-1 bg-primary-third text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                    2
                  </span>
                </button>
                <button
                  className="text-gray-600 hover:text-primary transition-colors relative"
                  aria-label="View wishlist"
                >
                  <Heart size={20} />
                  <span className="absolute -top-1 -right-1 bg-primary-third text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                    5
                  </span>
                </button>
                <button
                  className="text-gray-600 hover:text-primary transition-colors relative"
                  aria-label="View shopping cart"
                >
                  <ShoppingCart size={20} />
                  <span className="absolute -top-1 -right-1 bg-primary-third text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                    3
                  </span>
                </button>
              </div>

              {/* Mobile Search Toggle */}
              <button
                onClick={toggleMobileSearch}
                className="text-gray-600 hover:text-primary transition-colors p-1"
                aria-label="Toggle search"
              >
                <Search size={20} />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-primary transition-colors p-1"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </section>
          </div>

          {/* Mobile Search Row */}
          {isMobileSearchOpen && (
            <div className="lg:hidden mt-4 pb-2">
              <SimpleSearchInput />
            </div>
          )}

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-4">
                {/* Mobile Auth Buttons */}
                <div className="flex items-center justify-center space-x-4">
                  <button className="hover:text-primary text-sm font-medium cursor-pointer transition-colors text-primary-six">
                    Login
                  </button>
                  <span className="text-primary-six">|</span>
                  <button className="hover:text-primary text-sm font-medium text-primary-six cursor-pointer transition-colors">
                    Register
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div>
        <Navigation />
      </div>
    </>
  );
};

export default Header;