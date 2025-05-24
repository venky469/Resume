import React, { useState } from 'react';
import { Search, Bell, Plus } from 'lucide-react';

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="h-16 bg-white flex items-center justify-between px-4 sm:px-6 shadow-sm z-10">
      {/* Left section with logo */}
      <div className="flex items-center ml-20">
        <h1 className="text-lg sm:text-xl font-semibold text-blue-600">Healthcare</h1>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* Search bar - hidden on mobile unless activated */}
        <div className={`absolute left-0 right-0 top-0 bg-white px-4 sm:px-6 h-16 
          flex items-center
          sm:relative sm:bg-transparent sm:px-0 sm:h-auto
          transition-all duration-300 ease-in-out
          ${isSearchOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 sm:translate-y-0 sm:opacity-100'}
        `}>
          <div className="relative flex-1 sm:w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          {/* Close button for mobile search */}
          <button 
            className="ml-4 p-2 sm:hidden"
            onClick={() => setIsSearchOpen(false)}
          >
            Cancel
          </button>
        </div>

        {/* Mobile search trigger */}
        <button 
          className="sm:hidden"
          onClick={() => setIsSearchOpen(true)}
        >
          <Search className="text-gray-500" size={20} />
        </button>

        {/* Notification */}
        <div className="relative">
          <Bell className="text-gray-500 cursor-pointer" size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </div>

        {/* Add button for desktop */}
        <button className="bg-blue-500 text-white p-1.5 rounded-full hidden sm:block">
          <Plus size={18} />
        </button>

        {/* Profile */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/5935048/pexels-photo-5935048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Profile" 
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-sm font-medium hidden sm:block">Dr. Smith</span>
        </div>

      </div>
    </header>
  );
};

export default Header;
