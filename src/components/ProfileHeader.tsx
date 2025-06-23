import React from 'react';
import { MapPin, CheckCircle } from 'lucide-react';
import { ProfileHeaderProps } from '@/types/profile';
import Image from 'next/image';


const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  if (!user) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="animate-pulse">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
            <div className="space-y-2">
              <div className="h-6 bg-gray-300 rounded w-48"></div>
              <div className="h-4 bg-gray-300 rounded w-32"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const displayName = user.name || 'Anthony Fernandes';
  const location = `${user.address.city || 'Danbury'}, CT`;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-6">
        <div className="relative">
          <div className="w-20 h-20 relative flex shrink-0 overflow-hidden rounded-full">
            <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="avatar placeholder" height={100} width={100}/>
          
          </div>
          <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
            <CheckCircle className="h-4 w-4 text-white" />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl font-bold text-gray-900">{displayName}</h2>
            <CheckCircle className="h-5 w-5 text-blue-500" />
          </div>
          <div className="flex items-center space-x-1 text-gray-600 mt-1">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="mt-2">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              Professional Verified
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
