"use client";

import { useState } from "react";
import MainLayout from "@/components/MainLayout";
import Image from "next/image";
import { MagnifyingGlassIcon, BriefcaseIcon, BookmarkIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as SolidBookmarkIcon } from "@heroicons/react/24/solid";

// Sample job data
const JOBS = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA (Remote)",
    salary: "$120,000 - $150,000",
    type: "Full-time",
    posted: "2 days ago",
    description: "We're looking for a skilled Frontend Developer with experience in React, TypeScript, and modern CSS frameworks.",
    logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaCUyMGNvbXBhbnl8ZW58MHx8MHx8&auto=format&fit=crop&w=100&q=60",
  },
  {
    id: "2",
    title: "Backend Engineer",
    company: "DataStack",
    location: "New York, NY (Hybrid)",
    salary: "$130,000 - $160,000",
    type: "Full-time",
    posted: "1 week ago",
    description: "Join our team to build scalable backend services using Node.js, MongoDB, and AWS.",
    logo: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRlY2glMjBjb21wYW55fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=100&q=60",
  },
  {
    id: "3",
    title: "Full Stack Developer",
    company: "Web Solutions",
    location: "Austin, TX (Onsite)",
    salary: "$115,000 - $140,000",
    type: "Full-time",
    posted: "3 days ago",
    description: "Looking for a versatile developer who can work on both frontend and backend technologies.",
    logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaCUyMGNvbXBhbnl8ZW58MHx8MHx8&auto=format&fit=crop&w=100&q=60",
  },
  {
    id: "4",
    title: "UX/UI Designer",
    company: "Creative Design Agency",
    location: "Los Angeles, CA (Remote)",
    salary: "$100,000 - $130,000",
    type: "Full-time",
    posted: "5 days ago",
    description: "We need a talented designer to create beautiful and intuitive user interfaces for our clients.",
    logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRlc2lnbiUyMGFnZW5jeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=100&q=60",
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "Cloud Systems",
    location: "Seattle, WA (Hybrid)",
    salary: "$140,000 - $170,000",
    type: "Full-time",
    posted: "1 day ago",
    description: "Help us build and maintain our cloud infrastructure using Kubernetes, Docker, and CI/CD pipelines.",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=100&q=60",
  },
];

export default function JobsContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [savedJobs, setSavedJobs] = useState<string[]>([]);
  const [selectedJob, setSelectedJob] = useState(JOBS[0]);

  const handleSaveJob = (jobId: string) => {
    setSavedJobs((prev) => 
      prev.includes(jobId) ? prev.filter(id => id !== jobId) : [...prev, jobId]
    );
  };

  const filteredJobs = JOBS.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Search bar */}
        <div className="mb-8">
          <div className="flex items-center max-w-3xl mx-auto bg-white rounded-lg shadow p-2">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 ml-2" />
            <input
              type="text"
              placeholder="Search jobs by title, company, or keywords"
              className="flex-1 p-2 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Search</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Job listings */}
          <div className="md:col-span-1 bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Job Listings</h2>
              <p className="text-sm text-gray-500">{filteredJobs.length} jobs found</p>
            </div>
            <div className="overflow-y-auto h-[calc(100vh-270px)]">
              {filteredJobs.map((job) => (
                <div 
                  key={job.id}
                  className={`p-4 border-b border-gray-200 cursor-pointer ${selectedJob.id === job.id ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                  onClick={() => setSelectedJob(job)}
                >
                  <div className="flex justify-between">
                    <div className="flex">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{job.title}</h3>
                        <p className="text-sm text-gray-500">{job.company}</p>
                        <p className="text-xs text-gray-400">{job.location}</p>
                      </div>
                    </div>
                    <button
                      className="text-gray-400 hover:text-gray-500"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSaveJob(job.id);
                      }}
                    >
                      {savedJobs.includes(job.id) ? (
                        <SolidBookmarkIcon className="h-5 w-5 text-blue-500" />
                      ) : (
                        <BookmarkIcon className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  <div className="mt-2 flex text-xs text-gray-500">
                    <span className="mr-2">{job.type}</span>
                    <span className="mr-2">•</span>
                    <span>{job.posted}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Job details */}
          <div className="md:col-span-2 bg-white rounded-lg shadow overflow-hidden">
            {selectedJob && (
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{selectedJob.title}</h1>
                    <p className="text-lg text-gray-600">{selectedJob.company}</p>
                    <p className="text-sm text-gray-500">{selectedJob.location}</p>
                    <p className="text-sm text-gray-500 mt-1">Posted {selectedJob.posted}</p>
                  </div>
                  <button
                    className="flex items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
                    onClick={() => handleSaveJob(selectedJob.id)}
                  >
                    {savedJobs.includes(selectedJob.id) ? (
                      <>
                        <SolidBookmarkIcon className="h-5 w-5 mr-1" />
                        Saved
                      </>
                    ) : (
                      <>
                        <BookmarkIcon className="h-5 w-5 mr-1" />
                        Save
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-6">
                  <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                    <div className="mr-4">
                      <BriefcaseIcon className="h-8 w-8 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Job Details</h3>
                      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-500">
                        <div>
                          <span className="font-medium">Salary:</span> {selectedJob.salary}
                        </div>
                        <div>
                          <span className="font-medium">Job Type:</span> {selectedJob.type}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h2 className="text-lg font-semibold text-gray-900">Job Description</h2>
                  <div className="mt-2 text-gray-700">
                    <p>{selectedJob.description}</p>
                    
                    <div className="mt-4">
                      <h3 className="font-medium">Responsibilities:</h3>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Design and develop new features for our product</li>
                        <li>Collaborate with design team to implement UI/UX designs</li>
                        <li>Write clean, maintainable, and efficient code</li>
                        <li>Optimize applications for maximum speed and scalability</li>
                        <li>Participate in code reviews and provide constructive feedback</li>
                      </ul>
                    </div>
                    
                    <div className="mt-4">
                      <h3 className="font-medium">Requirements:</h3>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>3+ years of professional development experience</li>
                        <li>Strong knowledge of modern web technologies</li>
                        <li>Experience with version control systems (Git)</li>
                        <li>Excellent problem-solving and communication skills</li>
                        <li>BS/MS in Computer Science or related field (or equivalent experience)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
                    Apply Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 