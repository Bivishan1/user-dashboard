'use client';
import React, { useState } from 'react';
import {  Menu } from 'lucide-react';
import { SelectDropdown } from './ui/SelectDropDown';

interface TopNavigationProps {
  onMenuToggle: () => void;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ onMenuToggle }) => {
//   const [selectedRole, setSelectedRole] = useState('Church Singer');
const [selectedRole, setSelectedRole] = useState('Church Singer')

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button
          className="lg:hidden inline-flex items-center justify-center h-9 cursor-pointer text-black w-9 rounded-md hover:bg-gray-100"
          onClick={onMenuToggle}
        >
          <Menu className="h-5 w-5" />
        </button>
        
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-semibold text-gray-900">Profile Dashboard</h1>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <SelectDropdown
        label="Select a role"
        value={selectedRole}
        onChange={setSelectedRole}
        options={[
          { label: 'Church Singer', value: 'CS' },
          { label: 'Studio Artist', value: 'SA' },
          { label: 'Performance Coach', value: 'PC' },
          { label: 'Music Director', value: 'MD' },
        ]}
      />

        <div className="hidden sm:flex items-center space-x-3 bg-gray-50 p-3 rounded-lg border">
       
          <div className="hidden sm:block">
          <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
            $100 - $400 / per group workshop
          </span>
        </div>
        </div>

        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white">
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default TopNavigation;
