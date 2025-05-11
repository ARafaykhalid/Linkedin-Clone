"use client";

import React from "react";
import MainLayout from "@/components/MainLayout";
import Link from "next/link";
import Image from "next/image";

export default function FeedPage() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 py-6">
        {/* Left sidebar */}
        <div className="md:col-span-1 hidden md:block">
          <div className="bg-white dark:bg-linkedin-darker shadow rounded-lg overflow-hidden mb-4">
            <div className="h-16 bg-linkedin-blue dark:bg-linkedin-darkBlue"></div>
            <div className="p-4 relative">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="h-24 w-24 rounded-full border-4 border-white dark:border-linkedin-darker overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Profile picture"
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-12 text-center">
                <h3 className="font-semibold text-gray-900 dark:text-white">John Doe</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer at Tech Company</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Profile views</span>
                  <span className="font-semibold text-linkedin-blue dark:text-linkedin-lightBlue">143</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-500 dark:text-gray-400">Connections</span>
                  <span className="font-semibold text-linkedin-blue dark:text-linkedin-lightBlue">452</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-linkedin-darker shadow rounded-lg p-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Recent</h4>
            <ul className="space-y-2">
              {["Product Management", "UX Design", "JavaScript", "React", "Web Development"].map((tag, i) => (
                <li key={i}>
                  <Link href="#" className="flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">
                    <span className="mr-2">#</span>
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Main content */}
        <div className="md:col-span-2">
          {/* Create post */}
          <div className="bg-white dark:bg-linkedin-darker shadow rounded-lg p-4 mb-4">
            <div className="flex space-x-4">
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <button className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full px-4 text-left text-gray-500 dark:text-gray-400">
                Start a post
              </button>
            </div>
            <div className="flex justify-between mt-4 pt-2 border-t border-gray-100 dark:border-gray-800">
              <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Photo
              </button>
              <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Video
              </button>
              <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Event
              </button>
              <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Article
              </button>
            </div>
          </div>
          
          {/* Feed posts */}
          <div className="space-y-4">
            {/* Sample post 1 */}
            <div className="bg-white dark:bg-linkedin-darker shadow rounded-lg overflow-hidden">
              <div className="p-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-2">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="Sarah Chen"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Sarah Chen</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Product Manager at Innovation Inc.</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">2h</p>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-gray-800 dark:text-gray-200">Just launched our new product! So excited to share this with everyone. Check it out and let me know what you think.</p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-3 flex justify-between">
                <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  Like
                </button>
                <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                  </svg>
                  Comment
                </button>
                <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                  Share
                </button>
              </div>
            </div>
            
            {/* Sample post 2 */}
            <div className="bg-white dark:bg-linkedin-darker shadow rounded-lg overflow-hidden">
              <div className="p-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-2">
                    <Image
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="Michael Johnson"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Michael Johnson</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">UX Designer at Creative Solutions</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">1d</p>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-gray-800 dark:text-gray-200">Just finished this side project I've been working on. A redesign of a popular app. What do you all think?</p>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800">
                <Image
                  src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  alt="Project screenshot"
                  width={700}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-3 flex justify-between">
                <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  Like
                </button>
                <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                  </svg>
                  Comment
                </button>
                <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right sidebar */}
        <div className="md:col-span-1 hidden md:block">
          <div className="bg-white dark:bg-linkedin-darker shadow rounded-lg p-4 mb-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Add to your feed</h4>
            <div className="space-y-4">
              {[
                {
                  name: "TechCrunch",
                  desc: "Company • Technology",
                  img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
                },
                {
                  name: "Harvard Business Review",
                  desc: "Company • Business",
                  img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
                },
                {
                  name: "AI Summit",
                  desc: "Event • Technology",
                  img: "https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-3 bg-gray-200 dark:bg-gray-700 flex-shrink-0">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-900 dark:text-white text-sm">{item.name}</h5>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{item.desc}</p>
                    <button className="px-3 py-1 border border-gray-400 dark:border-gray-600 rounded-full text-gray-600 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
                      + Follow
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-linkedin-darker shadow rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">LinkedIn News</h4>
              <span className="h-5 w-5 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 text-xs">i</span>
            </div>
            <ul className="space-y-3">
              {[
                "Remote work accelerates worldwide",
                "Top skills employers look for in 2023",
                "AI reshaping job market: report",
                "Green jobs on the rise: study",
                "Tech layoffs slow in Q3 2023"
              ].map((news, i) => (
                <li key={i} className="text-sm">
                  <h5 className="font-medium text-gray-900 dark:text-white">• {news}</h5>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {Math.floor(Math.random() * 5) + 1}h ago • {Math.floor(Math.random() * 900) + 100} readers
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 