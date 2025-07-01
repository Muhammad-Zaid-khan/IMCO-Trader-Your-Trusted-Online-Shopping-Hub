import { Link } from "react-router-dom";

const TopNavigationBar = () => {
  return (
    <div className="w-full bg-primary-bg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between min-h-12 py-2 sm:py-0">
          {/* Left side - Promotional message */}
          <div className="flex-1 text-center sm:text-left mb-2 sm:mb-0">
            <p className="text-xs sm:text-sm text-primary-six font-medium">
              <span className="hidden sm:inline">Get up to 50% off new season styles, limited time only</span>
              <span className="sm:hidden">Up to 50% off new styles!</span>
            </p>
          </div>

          {/* Right side - Navigation links */}
          <div className="flex justify-center sm:justify-end">
            <ul className="list-none flex items-center space-x-4 sm:space-x-6">
              <li>
                <Link
                  to="#help"
                  className="text-xs sm:text-sm text-primary-six hover:text-primary transition-colors duration-200 whitespace-nowrap"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="#tracking"
                  className="text-xs sm:text-sm text-gray-600 hover:text-primary transition-colors duration-200 whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Order Tracking</span>
                  <span className="sm:hidden">Track Order</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/account"
                  className="text-xs sm:text-sm text-gray-600 hover:text-primary transition-colors duration-200 whitespace-nowrap"
                >
                  <span className="hidden sm:inline">My Account</span>
                  <span className="sm:hidden">Account</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-xs sm:text-sm text-gray-600 hover:text-primary transition-colors duration-200 whitespace-nowrap"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigationBar;