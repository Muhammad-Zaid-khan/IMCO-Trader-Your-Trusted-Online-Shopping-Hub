import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "sustainable living through cutting-edge prefabricated homes",
      excerpt: "Give2 lady of they such they sure it. Me contained explained my education. Vulgar as hearts by...",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=250&fit=crop",
      date: "2025-03-12"
    },
    {
      id: 2,
      title: "Explore sustainable living through cutting-edge prefabricated homes",
      excerpt: "Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by g...",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop",
      date: "2025-03-12"
    },
    {
      id: 3,
      title: "This prefabrice passive house is highly sustainable",
      excerpt: "Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by g...",
      image: "https://images.unsplash.com/photo-1605902711834-8b11c3e3ef2f?w=400&h=250&fit=crop",
      date: "2025-03-12"
    },
    {
      id: 4,
      title: "This prefabrice passive house is memorable highly sustainable",
      excerpt: "Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by g...",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=250&fit=crop",
      date: "2025-03-12"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">From The Blog</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="relative">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full flex items-center text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                {post.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                {post.excerpt}
              </p>
              
              <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200 mt-auto">
                Read More
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;