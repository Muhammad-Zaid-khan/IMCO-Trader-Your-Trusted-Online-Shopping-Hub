import React from "react";
import { useNavigate } from "react-router-dom"; // For React Router navigation
import { assets } from "../../assets/assets";

const ImageBanner = () => {
  const navigate = useNavigate();

  // Define banner data with images and their corresponding routes
  const bannerData = [
    {
      image: assets.Button1,
      route: "/products",
      alt: "Products Banner"
    },
    {
      image: assets.Button2,
      route: "/services",
      alt: "Services Banner"
    },
    {
      image: assets.Button3,
      route: "/about",
      alt: "About Us Banner"
    },
    {
      image: assets.Button4,
      route: "/contact",
      alt: "Contact Banner"
    }
  ];

  const handleImageClick = (route) => {
    navigate(route);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {bannerData.map((banner, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            onClick={() => handleImageClick(banner.route)}
          >
            <img
              src={banner.image}
              alt={banner.alt}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            {/* Optional overlay for better hover effect */}
            <div className="absolute inset-0 bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageBanner;