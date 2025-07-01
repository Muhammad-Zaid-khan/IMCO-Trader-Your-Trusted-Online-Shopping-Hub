import  { useState } from 'react';
import { Search } from 'lucide-react';

export default function SimpleSearchInput() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim()) {
      console.log('Searching for:', searchTerm);
      // Add your search logic here
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center gap-3">
        {/* Search Input */}
        <div className="relative flex items-center bg-gray-200 rounded-lg overflow-hidden flex-1">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search for products..."
            className="flex-1 px-4 py-3 bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="flex items-center justify-center p-3 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Material UI Style Button */}
        <button
          onClick={handleSearch}
          className="px-6 py-3 bg-primary hover:bg-primary-sec text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 uppercase text-sm tracking-wide"
        >
          Search
        </button>
      </div>
    </div>
  );
}