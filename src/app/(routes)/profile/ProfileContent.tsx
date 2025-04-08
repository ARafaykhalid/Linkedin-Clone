"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import { PencilIcon, BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

// Dummy user data for development
const DUMMY_USER = {
  id: "1",
  name: "John Doe",
  profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  headline: "Software Engineer at Tech Company",
  bio: "Passionate software engineer with 5+ years of experience in web development. Specialized in React, Node.js, and cloud technologies.",
  location: "San Francisco, CA",
  connections: 500,
  skills: ["JavaScript", "React", "Node.js", "TypeScript", "AWS", "MongoDB", "GraphQL"],
  experience: [
    {
      id: "1",
      title: "Senior Software Engineer",
      company: "Tech Company",
      location: "San Francisco, CA",
      startDate: new Date("2020-01-01"),
      endDate: null,
      description: "Leading the development of our main product. Building scalable web applications using React, Node.js, and AWS.",
    },
    {
      id: "2",
      title: "Software Engineer",
      company: "Previous Corp",
      location: "Seattle, WA",
      startDate: new Date("2017-03-01"),
      endDate: new Date("2019-12-31"),
      description: "Developed and maintained multiple web applications. Implemented new features and improved performance.",
    },
  ],
  education: [
    {
      id: "1",
      school: "University of Technology",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: new Date("2013-09-01"),
      endDate: new Date("2017-05-31"),
    },
  ],
};

export default function ProfileContent() {
  const [user, setUser] = useState(DUMMY_USER);
  const [editMode, setEditMode] = useState(false);

  const formatDate = (date: Date | null, isOngoing = false) => {
    if (!date && isOngoing) return "Present";
    if (!date) return "";
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
          <div className="bg-blue-800 h-40 relative">
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100"
              onClick={() => setEditMode(!editMode)}
            >
              <PencilIcon className="h-5 w-5 text-gray-700" />
            </button>
          </div>
          <div className="px-4 py-5 sm:px-6 relative">
            <div className="absolute -top-16 left-6">
              <div className="h-32 w-32 rounded-full border-4 border-white overflow-hidden">
                <img
                  src={user.profilePicture}
                  alt={user.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="mt-16 sm:mt-0 sm:ml-40">
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-600">{user.headline}</p>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <span>{user.location}</span>
                <span className="mx-2">•</span>
                <span>{user.connections}+ connections</span>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-8 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">About</h2>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <PencilIcon className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          <p className="text-gray-700">{user.bio}</p>
        </div>

        {/* Experience Section */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-8 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Experience</h2>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <PencilIcon className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          <div className="space-y-6">
            {user.experience.map((exp) => (
              <div key={exp.id} className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="h-12 w-12 rounded bg-gray-200 flex items-center justify-center">
                    <BriefcaseIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">
                    {formatDate(exp.startDate)} - {formatDate(exp.endDate, !exp.endDate)}
                    {exp.location && ` · ${exp.location}`}
                  </p>
                  <p className="mt-2 text-gray-700">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-8 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Education</h2>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <PencilIcon className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          <div className="space-y-6">
            {user.education.map((edu) => (
              <div key={edu.id} className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="h-12 w-12 rounded bg-gray-200 flex items-center justify-center">
                    <AcademicCapIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{edu.school}</h3>
                  <p className="text-gray-600">
                    {edu.degree}{edu.field && `, ${edu.field}`}
                  </p>
                  <p className="text-sm text-gray-500">
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-8 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Skills</h2>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <PencilIcon className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 