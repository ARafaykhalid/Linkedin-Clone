"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { UserPlusIcon, UserMinusIcon } from "@heroicons/react/24/outline";

// Dummy connection suggestions data
const CONNECTION_SUGGESTIONS = [
  {
    id: "1",
    name: "Emily Johnson",
    headline: "Product Manager at Tech Innovations",
    profilePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    mutualConnections: 12,
  },
  {
    id: "2",
    name: "David Chen",
    headline: "Software Engineer at DataTech",
    profilePicture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    mutualConnections: 8,
  },
  {
    id: "3",
    name: "Sarah Williams",
    headline: "Marketing Director at Brand Co",
    profilePicture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    mutualConnections: 5,
  },
  {
    id: "4",
    name: "Michael Rodriguez",
    headline: "UX Designer at Creative Agency",
    profilePicture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    mutualConnections: 3,
  },
  {
    id: "5",
    name: "Jennifer Lee",
    headline: "Data Scientist at Analytics Inc",
    profilePicture: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    mutualConnections: 15,
  },
];

// Dummy sent invitations data
const SENT_INVITATIONS = [
  {
    id: "1",
    name: "Robert Smith",
    headline: "Frontend Developer at Web Solutions",
    profilePicture: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    sentAt: "2 days ago",
  },
  {
    id: "2",
    name: "Amanda Parker",
    headline: "Project Manager at Innovative Tech",
    profilePicture: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    sentAt: "1 week ago",
  },
];

// Dummy connections data
const CONNECTIONS = [
  {
    id: "1",
    name: "James Wilson",
    headline: "CTO at StartupX",
    profilePicture: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    connectedSince: "2 years ago",
  },
  {
    id: "2",
    name: "Lisa Brown",
    headline: "HR Manager at Corporate Inc",
    profilePicture: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    connectedSince: "1 year ago",
  },
  {
    id: "3",
    name: "Thomas Anderson",
    headline: "Backend Developer at Matrix Systems",
    profilePicture: "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    connectedSince: "6 months ago",
  },
];

export default function NetworkContent() {
  const [pendingInvitations, setPendingInvitations] = useState(SENT_INVITATIONS);
  const [connections, setConnections] = useState(CONNECTIONS);
  const [suggestedConnections, setSuggestedConnections] = useState(CONNECTION_SUGGESTIONS);

  const handleConnect = (id: string) => {
    // Simulate connecting with a user
    setSuggestedConnections(prev => prev.filter(conn => conn.id !== id));
    setPendingInvitations(prev => [
      {
        id,
        name: suggestedConnections.find(conn => conn.id === id)?.name || "",
        headline: suggestedConnections.find(conn => conn.id === id)?.headline || "",
        profilePicture: suggestedConnections.find(conn => conn.id === id)?.profilePicture || "",
        sentAt: "just now",
      },
      ...prev
    ]);
  };

  const handleWithdrawInvitation = (id: string) => {
    // Simulate withdrawing a connection invitation
    setPendingInvitations(prev => prev.filter(inv => inv.id !== id));
  };

  const handleRemoveConnection = (id: string) => {
    // Simulate removing a connection
    setConnections(prev => prev.filter(conn => conn.id !== id));
  };

  return (
    <div className="min-h-screen bg-linkedin-gray dark:bg-linkedin-dark">
      <Header />
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left sidebar */}
          <div className="lg:col-span-1">
            <div className="linkedin-card mb-8">
              <div className="p-4 border-b border-linkedin-border dark:border-gray-700">
                <h2 className="text-lg font-semibold text-linkedin-text dark:text-linkedin-textDark">Manage my network</h2>
              </div>
              <div className="p-2">
                <nav>
                  <ul className="space-y-1">
                    <li>
                      <Link href="/network" className="flex items-center px-3 py-2 rounded-md hover:bg-linkedin-hoverBg dark:hover:bg-linkedin-hoverBgDark text-linkedin-text dark:text-linkedin-textDark font-medium">
                        <span className="mr-2">Connections</span>
                        <span className="ml-auto text-linkedin-darkGray dark:text-gray-400">{connections.length}</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/network" className="flex items-center px-3 py-2 rounded-md hover:bg-linkedin-hoverBg dark:hover:bg-linkedin-hoverBgDark text-linkedin-text dark:text-linkedin-textDark font-medium">
                        <span className="mr-2">People I Follow</span>
                        <span className="ml-auto text-linkedin-darkGray dark:text-gray-400">8</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/network" className="flex items-center px-3 py-2 rounded-md hover:bg-linkedin-hoverBg dark:hover:bg-linkedin-hoverBgDark text-linkedin-text dark:text-linkedin-textDark font-medium">
                        <span className="mr-2">Groups</span>
                        <span className="ml-auto text-linkedin-darkGray dark:text-gray-400">4</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/network" className="flex items-center px-3 py-2 rounded-md hover:bg-linkedin-hoverBg dark:hover:bg-linkedin-hoverBgDark text-linkedin-text dark:text-linkedin-textDark font-medium">
                        <span className="mr-2">Events</span>
                        <span className="ml-auto text-linkedin-darkGray dark:text-gray-400">2</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/network" className="flex items-center px-3 py-2 rounded-md hover:bg-linkedin-hoverBg dark:hover:bg-linkedin-hoverBgDark text-linkedin-text dark:text-linkedin-textDark font-medium">
                        <span className="mr-2">Pages</span>
                        <span className="ml-auto text-linkedin-darkGray dark:text-gray-400">12</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/network" className="flex items-center px-3 py-2 rounded-md hover:bg-linkedin-hoverBg dark:hover:bg-linkedin-hoverBgDark text-linkedin-text dark:text-linkedin-textDark font-medium">
                        <span className="mr-2">Newsletter</span>
                        <span className="ml-auto text-linkedin-darkGray dark:text-gray-400">5</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="linkedin-card">
              <div className="p-4 border-b border-linkedin-border dark:border-gray-700">
                <h2 className="text-lg font-semibold text-linkedin-text dark:text-linkedin-textDark">Invitations</h2>
              </div>
              <div className="p-2">
                {pendingInvitations.length > 0 ? (
                  <div className="space-y-4">
                    {pendingInvitations.map((invitation) => (
                      <div key={invitation.id} className="flex items-start p-3 hover:bg-linkedin-hoverBg dark:hover:bg-linkedin-hoverBgDark rounded-md">
                        <div className="h-12 w-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                          <Image
                            src={invitation.profilePicture}
                            alt={invitation.name}
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-linkedin-text dark:text-linkedin-textDark">{invitation.name}</h3>
                          <p className="text-sm text-linkedin-darkGray dark:text-gray-400">{invitation.headline}</p>
                          <p className="text-xs text-linkedin-darkGray dark:text-gray-400 mt-1">Sent {invitation.sentAt}</p>
                          <div className="mt-2 flex">
                            <button
                              onClick={() => handleWithdrawInvitation(invitation.id)}
                              className="text-sm text-linkedin-blue dark:text-linkedin-lightBlue font-medium hover:underline"
                            >
                              Withdraw
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="p-3 text-center text-linkedin-darkGray dark:text-gray-400">No pending invitations</p>
                )}
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Connection suggestions */}
            <div className="linkedin-card mb-8">
              <div className="p-4 border-b border-linkedin-border dark:border-gray-700">
                <h2 className="text-lg font-semibold text-linkedin-text dark:text-linkedin-textDark">People you may know</h2>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {suggestedConnections.map((suggestion) => (
                    <div key={suggestion.id} className="linkedin-card p-4">
                      <div className="flex flex-col items-center text-center">
                        <div className="h-20 w-20 rounded-full overflow-hidden mb-3">
                          <Image
                            src={suggestion.profilePicture}
                            alt={suggestion.name}
                            width={80}
                            height={80}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <h3 className="font-medium text-linkedin-text dark:text-linkedin-textDark">{suggestion.name}</h3>
                        <p className="text-sm text-linkedin-darkGray dark:text-gray-400 mt-1">{suggestion.headline}</p>
                        <p className="text-xs text-linkedin-darkGray dark:text-gray-400 mt-1">{suggestion.mutualConnections} mutual connections</p>
                        <button
                          onClick={() => handleConnect(suggestion.id)}
                          className="mt-3 flex items-center justify-center w-full py-1.5 border border-linkedin-blue dark:border-linkedin-lightBlue rounded-full text-linkedin-blue dark:text-linkedin-lightBlue font-medium hover:bg-blue-50 dark:hover:bg-opacity-10"
                        >
                          <UserPlusIcon className="h-4 w-4 mr-1" />
                          Connect
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Connections */}
            <div className="linkedin-card">
              <div className="p-4 border-b border-linkedin-border dark:border-gray-700">
                <h2 className="text-lg font-semibold text-linkedin-text dark:text-linkedin-textDark">Your connections ({connections.length})</h2>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  {connections.map((connection) => (
                    <div key={connection.id} className="flex items-start p-3 hover:bg-linkedin-hoverBg dark:hover:bg-linkedin-hoverBgDark rounded-md">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                        <Image
                          src={connection.profilePicture}
                          alt={connection.name}
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-linkedin-text dark:text-linkedin-textDark">{connection.name}</h3>
                        <p className="text-sm text-linkedin-darkGray dark:text-gray-400">{connection.headline}</p>
                        <p className="text-xs text-linkedin-darkGray dark:text-gray-400 mt-1">Connected {connection.connectedSince}</p>
                        <div className="mt-2 flex">
                          <button
                            onClick={() => handleRemoveConnection(connection.id)}
                            className="flex items-center text-sm text-linkedin-blue dark:text-linkedin-lightBlue font-medium hover:underline"
                          >
                            <UserMinusIcon className="h-4 w-4 mr-1" />
                            Remove connection
                          </button>
                          <Link 
                            href={`/messaging?id=${connection.id}`}
                            className="ml-4 text-sm text-linkedin-blue dark:text-linkedin-lightBlue font-medium hover:underline"
                          >
                            Message
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 