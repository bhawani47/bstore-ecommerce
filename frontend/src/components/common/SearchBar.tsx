import React, { useState } from 'react';
import { BiMicrophone, BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ className }: { className: string }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const value = (e.target as HTMLInputElement).value;
      setSearchQuery(value);
      navigate('/products?search=' + value);
    }
  };

  return (
    <div
      className={`flex items-center border pr-3 gap-2 bg-bg border-border h-10 rounded-md overflow-hidden max-w-md w-full ${className}`}
    >
      <input
        type="text"
        placeholder="Search for products"
        className="w-full h-full pl-5 outline-none text-text placeholder-text-secondary text-sm"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleSearch}
      />
      <button
        type="button"
        className="hover:scale-110 transition-all duration-300"
      >
        <BiSearch size={18} />
      </button>
      <div className="h-6 w-px bg-gray-500/50"></div>
      <button type="button" className="hover:scale-110">
        <BiMicrophone size={18} />
      </button>
    </div>
  );
};
export default SearchBar;
