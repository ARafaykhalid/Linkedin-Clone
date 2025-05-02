"use client";

import { useState } from "react";
import Image from "next/image";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import {
  UserIcon,
  LockClosedIcon,
  BellIcon,
  ShieldCheckIcon,
  LanguageIcon,
  CircleStackIcon,
  Cog8ToothIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

// Dummy user data
const USER_DATA = {
  id: "current-user",
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  headline: "Software Engineer at Tech Company",
};

type SettingsSection = "account" | "privacy" | "notifications" | "communications" | "data" | "display" | "help" | "language";

export default function SettingsContent() {
  const [activeSection, setActiveSection] = useState<SettingsSection>("account");
  
  const sections = [
    { id: "account", name: "Account Preferences", icon: UserIcon },
    { id: "privacy", name: "Privacy", icon: LockClosedIcon },
    { id: "notifications", name: "Notifications", icon: BellIcon },
    { id: "communications", name: "Communications", icon: ShieldCheckIcon },
    { id: "data", name: "Data Privacy", icon: CircleStackIcon },
    { id: "display", name: "Display", icon: Cog8ToothIcon },
    { id: "language", name: "Language", icon: LanguageIcon },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Settings</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="col-span-1">
          <div className="bg-white dark:bg-linkedin-darker rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-3">
                  <Image
                    src={USER_DATA.profilePicture}
                    alt={USER_DATA.name}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{USER_DATA.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{USER_DATA.headline}</p>
                </div>
              </div>
            </div>
            
            <nav className="p-2">
              <ul className="space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <li key={section.id}>
                      <button
                        onClick={() => setActiveSection(section.id as SettingsSection)}
                        className={`w-full flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                          activeSection === section.id
                            ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        <Icon className="h-5 w-5 mr-3" />
                        <span>{section.name}</span>
                      </button>
                    </li>
                  );
                })}
                
                <li className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">
                  <button className="w-full flex items-center px-3 py-2 text-sm rounded-md text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                    <ArrowRightOnRectangleIcon className="h-5 w-5 mr-3" />
                    <span>Sign Out</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="col-span-1 lg:col-span-3">
          <div className="bg-white dark:bg-linkedin-darker rounded-lg shadow-sm overflow-hidden">
            {activeSection === "account" && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Account Preferences</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Profile Information</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                          <input 
                            type="text" 
                            value={USER_DATA.name}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-linkedin-darker text-gray-900 dark:text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Headline</label>
                          <input 
                            type="text" 
                            value={USER_DATA.headline}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-linkedin-darker text-gray-900 dark:text-white"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                          <input 
                            type="email" 
                            value={USER_DATA.email}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-linkedin-darker text-gray-900 dark:text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                          <input 
                            type="tel" 
                            value={USER_DATA.phone}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-linkedin-darker text-gray-900 dark:text-white"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Location</label>
                        <input 
                          type="text" 
                          value={USER_DATA.location}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-linkedin-darker text-gray-900 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Profile Photo</h3>
                    <div className="flex items-center">
                      <div className="h-24 w-24 rounded-full overflow-hidden mr-6">
                        <Image
                          src={USER_DATA.profilePicture}
                          alt={USER_DATA.name}
                          width={96}
                          height={96}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 mr-3">
                          Change Photo
                        </button>
                        <button className="px-4 py-2 border border-transparent text-sm font-medium text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button className="px-4 py-2 bg-linkedin-blue text-white rounded-md hover:bg-linkedin-darkBlue">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeSection === "privacy" && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Privacy Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Profile Visibility</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">Who can see your profile</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Choose who can view your profile information</p>
                        </div>
                        <select className="bg-white dark:bg-linkedin-darker border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white px-3 py-2 text-sm">
                          <option>Everyone</option>
                          <option>Connections only</option>
                          <option>Only you</option>
                        </select>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">Profile photo visibility</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Choose who can see your profile photo</p>
                        </div>
                        <select className="bg-white dark:bg-linkedin-darker border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white px-3 py-2 text-sm">
                          <option>Everyone</option>
                          <option>Connections only</option>
                          <option>Only you</option>
                        </select>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">Connections visibility</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Choose who can see your connections</p>
                        </div>
                        <select className="bg-white dark:bg-linkedin-darker border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white px-3 py-2 text-sm">
                          <option>Everyone</option>
                          <option>Connections only</option>
                          <option>Only you</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Activity Broadcasts</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="notify-network"
                            name="notify-network"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-linkedin-blue focus:ring-linkedin-blue border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="notify-network" className="font-medium text-gray-700 dark:text-gray-200">Share profile changes with network</label>
                          <p className="text-gray-500 dark:text-gray-400">Your connections will be notified when you update your profile</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="job-preferences"
                            name="job-preferences"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-linkedin-blue focus:ring-linkedin-blue border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="job-preferences" className="font-medium text-gray-700 dark:text-gray-200">Let recruiters know you're open to work</label>
                          <p className="text-gray-500 dark:text-gray-400">Recruiters will be able to discover your profile in searches</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button className="px-4 py-2 bg-linkedin-blue text-white rounded-md hover:bg-linkedin-darkBlue">
                      Save Privacy Settings
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeSection === "notifications" && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Notification Preferences</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Email Notifications</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="messages"
                            name="messages"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-linkedin-blue focus:ring-linkedin-blue border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="messages" className="font-medium text-gray-700 dark:text-gray-200">Messages</label>
                          <p className="text-gray-500 dark:text-gray-400">Email me when someone sends me a message</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="connections"
                            name="connections"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-linkedin-blue focus:ring-linkedin-blue border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="connections" className="font-medium text-gray-700 dark:text-gray-200">Connection requests</label>
                          <p className="text-gray-500 dark:text-gray-400">Email me when someone sends me a connection request</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="post-reactions"
                            name="post-reactions"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-linkedin-blue focus:ring-linkedin-blue border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="post-reactions" className="font-medium text-gray-700 dark:text-gray-200">Post reactions and comments</label>
                          <p className="text-gray-500 dark:text-gray-400">Email me when someone reacts or comments on my posts</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="job-updates"
                            name="job-updates"
                            type="checkbox"
                            className="h-4 w-4 text-linkedin-blue focus:ring-linkedin-blue border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="job-updates" className="font-medium text-gray-700 dark:text-gray-200">Job recommendations</label>
                          <p className="text-gray-500 dark:text-gray-400">Email me about job recommendations based on my profile</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Push Notifications</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">Push notification settings</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Control how you receive push notifications on your device</p>
                        </div>
                        <select className="bg-white dark:bg-linkedin-darker border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white px-3 py-2 text-sm">
                          <option>All notifications</option>
                          <option>Important notifications only</option>
                          <option>No notifications</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button className="px-4 py-2 bg-linkedin-blue text-white rounded-md hover:bg-linkedin-darkBlue">
                      Save Notification Preferences
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeSection === "display" && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Display Preferences</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Theme Settings</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">Dark/Light Mode</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Choose your preferred theme for the interface</p>
                        </div>
                        <ThemeSwitcher />
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Feed Preferences</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">Default feed view</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Choose how posts are sorted in your feed</p>
                        </div>
                        <select className="bg-white dark:bg-linkedin-darker border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white px-3 py-2 text-sm">
                          <option>Top posts</option>
                          <option>Recent posts</option>
                          <option>Balanced</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button className="px-4 py-2 bg-linkedin-blue text-white rounded-md hover:bg-linkedin-darkBlue">
                      Save Display Preferences
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Add other sections as needed */}
            {(activeSection === "communications" || activeSection === "data" || activeSection === "language" || activeSection === "help") && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  {sections.find(s => s.id === activeSection)?.name} Settings
                </h2>
                <p className="text-gray-600 dark:text-gray-400">This section is coming soon. Stay tuned for updates!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 