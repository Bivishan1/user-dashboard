'use client';
import React, { useState } from 'react';
import { MapPin, Calendar, Building2 } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface Experience {
  id: number;
  title: string;
  organization: string;
  location: string;
  date: string;
  type: string;
  role: string;
  description: string;
  badge: string;
  programName: string;
  institutionName: string;
  position: string;
}

interface ExperienceSectionProps {
  posts: Post[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ posts }) => {
  const [activeTab, setActiveTab] = useState('Training');
  
  const tabs = ['All', 'Performance', 'Training', 'Accolades', 'Education', 'Job Titles', 'Commissions', 'Masterclass'];

  const experienceData: Experience[] = posts.map((post, index) => ({
    id: post.id,
    title: post.title.charAt(0).toUpperCase() + post.title.slice(1),
    organization: ['Sarasota Opera', 'Metropolitan Opera House', 'Lincoln Center', 'Carnegie Hall', 'Boston Symphony'][index % 5],
    location: ['Sarasota, FL', 'New York, NY', 'New York, NY', 'New York, NY', 'Boston, MA'][index % 5],
    date: 'Oct 2020',
    type: tabs[Math.floor(Math.random() * tabs.length)],
    role: 'Church Singer',
    description: post.body,
    badge: ['S', 'M', 'L', 'C', 'B'][index % 5],
    programName: 'Young Artist Program',
    institutionName: ['Sarasota Opera', 'Metropolitan Opera House', 'Lincoln Center', 'Carnegie Hall', 'Boston Symphony'][index % 5],
    position: ['Studio Artist', 'Creative Director', 'Lead Vocalist', 'Featured Soloist', 'Principal Singer'][index % 5]
  }));

  const filteredExperiences = activeTab === 'All' 
    ? experienceData 
    : experienceData.filter(exp => exp.type === activeTab);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Experience</h3>
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${activeTab === tab 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {filteredExperiences.map((experience) => (
            <Dialog.Root key={experience.id}>
              <Dialog.Trigger asChild>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm cursor-pointer hover:shadow-md transition-shadow border-gray-200 p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-700 font-semibold">{experience.badge}</span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 truncate">
                        {experience.position}
                      </h4>
                      <div className="flex items-center space-x-1 text-sm text-gray-600 mt-1">
                        <Building2 className="h-3 w-3" />
                        <span>{experience.organization}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 mt-1">
                        <MapPin className="h-3 w-3" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 mt-1">
                        <Calendar className="h-3 w-3" />
                        <span>{experience.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
                <Dialog.Content className="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto">
                  {/* Dark header section */}
                  <Dialog.Title className="m-0 text-[17px] font-medium text-center p-2 border-b">
					Details of {experience.position} at {experience.organization}
				</Dialog.Title>
                  <div className="bg-gray-800 text-white p-6">
                    <div className="flex items-start justify-between">

                      
                      <div className="flex items-center space-x-3">

                        
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-700 font-semibold">{experience.badge}</span>
                    </div>
                        <div>
                          <div className="text-sm text-gray-300 uppercase tracking-wide">
                            {experience.programName} | PROGRAM
                          </div>
                          <h3 className="text-2xl font-semibold">{experience.position}</h3>
                          <p className="text-gray-300">{experience.organization}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span className="text-sm">{experience.date}</span>
                            </div>
                          </div>
                          <div className="flex space-x-2 mt-3">
                            <span className="inline-flex h-6 select-none items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-gray-600 text-white hover:bg-gray-700">
                              {experience.role}
                            </span>
                            <span className="inline-flex h-6 select-none items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-gray-600 text-white hover:bg-gray-700">
                              Rock Singer
                            </span>
                          </div>
                        </div>
                      </div>
                      <Dialog.Close asChild>
                        <button className="text-gray-400 hover:text-white">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </Dialog.Close>
                    </div>
                  </div>
                  
                  {/* White content section */}
                  <div className="p-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3 text-sm uppercase tracking-wide text-gray-500">
                          PROGRAM INFO
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-gray-500">Name of the Program</p>
                            <p className="font-medium text-gray-900">{experience.organization}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Young Artist Program</p>
                            <p className="font-medium text-gray-900">{experience.organization}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Location</p>
                            <p className="font-medium text-gray-900">{experience.organization} House, North Pineapple Ave, {experience.location}, USA</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3 text-sm uppercase tracking-wide text-gray-500">
                          INSTITUTION INFO
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-gray-500">Name of the Institute</p>
                            <p className="font-medium text-gray-900">{experience.organization}</p>
                          </div>
                        </div>
                        
                        <h4 className="font-medium text-gray-900 mb-3 mt-6 text-sm uppercase tracking-wide text-gray-500">
                          STUDY INFO
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-gray-500">Position</p>
                            <p className="font-medium text-gray-900">{experience.position}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
