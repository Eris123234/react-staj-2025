import { Search, SlidersHorizontal } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-3 px-6 py-3">
      {/* Search and Input */}
      <div className="flex-1 relative">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2"
        />
        <input
          type="text"
          placeholder="Search for products"
          className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-green-500 text-black placeholder:text-gray-500"
        />
      </div>
      {/* Filter button */}
      <button className="p-3 bg-gray-50 rounded-xl hover:bg-gray-200 transition-colors">
        <SlidersHorizontal />
      </button>
    </div>
  );
};

export default SearchBar;
