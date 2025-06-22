'use client';
import React, { useState, useEffect } from 'react';
import TopNavigation from './TopNavigation';
import SidebarNavigation from './SidebarNavigation';
import ProfileHeader from './ProfileHeader';
import ExperienceSection from './ExperienceSection';
// import { ToastMessage } from './ui/toast';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Separate section components
const AboutSection = () => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">About</h3>
    <p className="text-gray-700 leading-relaxed">
      Professional vocalist and performance coach with over 10 years of experience...
    </p>
  </div>
);

const MediaSection = () => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">Media</h3>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Media {item}</span>
        </div>
      ))}
    </div>
  </div>
);

const HighlightsSection = () => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">Highlights</h3>
    <div className="space-y-4">
      {[
        'Featured soloist at Carnegie Hall',
        'Winner of National Vocal Competition 2022',
        'Lead vocalist for Metropolitan Opera',
        'Master class instructor at Julliard',
      ].map((highlight, index) => (
        <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <span className="text-gray-800">{highlight}</span>
        </div>
      ))}
    </div>
  </div>
);

const LoadingSkeleton = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
    </div>
  </div>
);

const ProfileDashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeSection, setActiveSection] = useState('experience');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch data with cleanup
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const [userData, postsData] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json()),
          fetch('https://jsonplaceholder.typicode.com/posts?userId=1').then(res => res.json())
        ]);

        setUser(userData);
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Section mapping
  const sectionMap: Record<string, React.ReactElement> = {
    about: <AboutSection />,
    media: <MediaSection />,
    highlights: <HighlightsSection />,
    experience: <ExperienceSection posts={posts} />,
  };

  // Get current section content
  const currentSection = sectionMap[activeSection] || sectionMap.experience;

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation onMenuToggle={() => setSidebarOpen(true)} />
      
      <div className="flex">
        <SidebarNavigation
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        
        <main className="flex-1 p-4 lg:p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <ProfileHeader user={user} />
            {loading ? <LoadingSkeleton /> : currentSection}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfileDashboard;
