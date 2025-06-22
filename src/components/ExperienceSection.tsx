"use client";
import React, { useState } from "react";
import { MapPin, Calendar, Building2, X, GraduationCap } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
interface ExperienceDetails {
  programName: string;
  position: string;
  location: string;
  institution: string;
  date: string;
}

interface Experience {
  id: number;
  title: string;
  organization: string;
  location: string;
  date: string;
  type: string;
  tags: string[];
  details: ExperienceDetails;
}

interface ExperienceSectionProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedCard: Experience | null;
  setSelectedCard: (card: Experience | null) => void;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  activeTab,
  setActiveTab,
  selectedCard,
  setSelectedCard,
}) => {
  // Mock data for experience cards
  const experienceData: {
    Training: Experience[];
    Performance: Experience[];
    All: Experience[];
    [key: string]: Experience[];
  } = {
    Training: [
      {
        id: 1,
        title: "Studio Artist",
        organization: "Sarasota Opera Young Artist Program",
        location: "Sarasota Opera",
        date: "Oct-2017",
        type: "Young Artist Program",
        tags: ["Church Singer", "Rock Singer"],
        details: {
          programName: "Sarasota Opera Young Artist Program",
          position: "Studio Artist",
          location:
            "Sarasota Opera House, North Pineapple Ave, Sarasota, FL, USA",
          institution: "Sarasota Opera Young Artist Program",
          date: "Oct 2020",
        },
      },
      {
        id: 2,
        title: "Creative Director",
        organization: "Sarasota Opera Creative Director Program",
        location: "St. Petersburg Opera",
        date: "Oct-2018 to Nov 2018",
        type: "Young Artist Program",
        tags: ["Creative Director", "Program"],
        details: {
          programName: "Creative Director Development",
          position: "Creative Director",
          location: "St. Petersburg Opera House, FL, USA",
          institution: "Sarasota Opera",
          date: "Oct 2018 - Nov 2018",
        },
      },
    ],
    Performance: [
      {
        id: 3,
        title: "Lead Vocalist",
        organization: "Metropolitan Opera House",
        location: "New York, NY",
        date: "Jan-2019",
        type: "Performance",
        tags: ["Lead Singer", "Opera"],
        details: {
          programName: "La Bohème Production",
          position: "Lead Vocalist",
          location: "Metropolitan Opera House, New York, NY, USA",
          institution: "Metropolitan Opera",
          date: "Jan 2019",
        },
      },
    ],
    All: [],
  };

  // Initialize All tab with all experiences
  experienceData.All = [
    ...experienceData.Training,
    ...experienceData.Performance,
  ];

  const tabs = [
    { name: "All" },
    { name: "Performance" },
    { name: "Training" },
    { name: "Accolades" },
    { name: "Education" },
    { name: "Job Titles" },
    { name: "Commissions" },
    { name: "Masterclass" },
  ];

  const currentExperiences =
    experienceData[activeTab as keyof typeof experienceData] || [];

  const ExperienceCard = ({ experience }: { experience: Experience }) => (
    <div
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => setSelectedCard(experience)}
    >
      <div className="flex justify-around items-start space-x-3">
        <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white font-semibold">
          {experience.title.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {experience.title}
          </h3>
          <p className="text-gray-600 text-sm">{experience.organization}</p>
          <div className="flex items-center text-gray-500 text-sm mt-1">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="mr-4">{experience.location}</span>
            <Calendar className="w-4 h-4 mr-1" />
            <span>{experience.date}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {experience.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const DetailPanel = ({
    experience,
    onClose,
  }: {
    experience: Experience;
    onClose: () => void;
  }) => (
    <div className="bg-gray-800 text-white p-6 rounded-lg">
      <div className="flex justify-between mb-4">
        <div>
          <div className="text-sm text-gray-400 uppercase tracking-wide mb-2">
            {experience.date}
          </div>
          <h2 className="text-2xl font-bold mb-2">{experience.title}</h2>
          <p className="text-gray-300">{experience.details.programName}</p>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {experience.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-700 text-gray-200 text-sm rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-400 mb-1">
            PROGRAM INFO
          </h3>
          <div className="space-y-2">
            <div>
              <p className="text-sm text-gray-400">Name of the Program</p>
              <p className="text-white">{experience.details.programName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Young Artist Program</p>
              <p className="text-white">{experience.details.programName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Location</p>
              <p className="text-white">{experience.details.location}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-400 mb-1">
            INSTITUTION INFO
          </h3>
          <div>
            <p className="text-sm text-gray-400">Name of the Institute</p>
            <p className="text-white">{experience.details.institution}</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-400 mb-1">STUDY INFO</h3>
          <div>
            <p className="text-sm text-gray-400">Position</p>
            <p className="text-white">{experience.details.position}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Experience</h3>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  activeTab === tab.name
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }
              `}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* content area */}

      {/* dialog box */}
      <div className="p-6">
        <div className="space-y-4">
          {currentExperiences.length > 0 ? (
            currentExperiences.map((experience) => (
              <div key={experience.id}>
                <ExperienceCard experience={experience} />
                {selectedCard && selectedCard.id === experience.id && (
                  <div className="mt-4">
                    <DetailPanel
                      experience={selectedCard}
                      onClose={() => setSelectedCard(null)}
                    />
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>No {activeTab.toLowerCase()} experience found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
