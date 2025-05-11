"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/MainLayout";
import { 
  BellIcon, 
  UserPlusIcon, 
  HandThumbUpIcon, 
  ChatBubbleLeftIcon,
  BriefcaseIcon,
  StarIcon,
  EllipsisHorizontalIcon
} from "@heroicons/react/24/outline";
import { format, formatDistanceToNow } from "date-fns";

// Notification types
type NotificationType = 
  | "connection" 
  | "like" 
  | "comment" 
  | "mention" 
  | "job" 
  | "birthday" 
  | "work_anniversary"
  | "profile_view";

interface Notification {
  id: string;
  type: NotificationType;
  actor: {
    id: string;
    name: string;
    profilePicture: string;
    headline?: string;
  };
  content?: string;
  target?: {
    id: string;
    type: string;
    title?: string;
  };
  createdAt: Date;
  isRead: boolean;
}

// Dummy notifications data
const DUMMY_NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    type: "connection",
    actor: {
      id: "user-1",
      name: "Sarah Johnson",
      profilePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      headline: "Marketing Director at TechCorp"
    },
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    isRead: false
  },
  {
    id: "2",
    type: "like",
    actor: {
      id: "user-2",
      name: "David Chen",
      profilePicture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      headline: "Software Engineer at InnovateTech"
    },
    target: {
      id: "post-1",
      type: "post",
      title: "Your post about the new project launch"
    },
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    isRead: false
  },
  {
    id: "3",
    type: "comment",
    actor: {
      id: "user-3",
      name: "Lena Brown",
      profilePicture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      headline: "Product Manager at DesignFirst"
    },
    content: "Great insights! Would love to discuss further.",
    target: {
      id: "post-2",
      type: "post",
      title: "Your article on design systems"
    },
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    isRead: true
  },
  {
    id: "4",
    type: "job",
    actor: {
      id: "company-1",
      name: "Google",
      profilePicture: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    target: {
      id: "job-1",
      type: "job",
      title: "Senior Software Engineer"
    },
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    isRead: true
  },
  {
    id: "5",
    type: "profile_view",
    actor: {
      id: "user-4",
      name: "Michael Smith",
      profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      headline: "CTO at StartupX"
    },
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    isRead: true
  },
  {
    id: "6",
    type: "birthday",
    actor: {
      id: "user-5",
      name: "Emily White",
      profilePicture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      headline: "Graphic Designer at CreativeCo"
    },
    createdAt: new Date(), // Today
    isRead: false
  },
  {
    id: "7",
    type: "work_anniversary",
    actor: {
      id: "user-6",
      name: "Robert Jones",
      profilePicture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      headline: "Senior Product Manager at BigTech"
    },
    content: "5 years at BigTech",
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    isRead: false
  },
];

export default function NotificationsContent() {
  const [notifications, setNotifications] = useState<Notification[]>(DUMMY_NOTIFICATIONS);
  const [filter, setFilter] = useState<"all" | "unread">("all");
  
  const unreadCount = notifications.filter(n => !n.isRead).length;
  const displayedNotifications = filter === "all" 
    ? notifications 
    : notifications.filter(n => !n.isRead);

  const markAsRead = (id: string) => {
    setNotifications(prevNotifications => 
      prevNotifications.map(notification => 
        notification.id === id 
          ? { ...notification, isRead: true } 
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prevNotifications => 
      prevNotifications.map(notification => ({ ...notification, isRead: true }))
    );
  };

  const getNotificationIcon = (type: NotificationType) => {
    switch (type) {
      case "connection":
        return <UserPlusIcon className="h-6 w-6 text-blue-600" />;
      case "like":
        return <HandThumbUpIcon className="h-6 w-6 text-blue-600" />;
      case "comment":
        return <ChatBubbleLeftIcon className="h-6 w-6 text-green-600" />;
      case "job":
        return <BriefcaseIcon className="h-6 w-6 text-purple-600" />;
      case "birthday":
      case "work_anniversary":
        return <StarIcon className="h-6 w-6 text-yellow-500" />;
      default:
        return <BellIcon className="h-6 w-6 text-gray-600" />;
    }
  };

  const getNotificationText = (notification: Notification) => {
    const { type, actor, target, content } = notification;
    
    switch (type) {
      case "connection":
        return `${actor.name} connected with you`;
      case "like":
        return `${actor.name} liked your ${target?.type}`;
      case "comment":
        return `${actor.name} commented on your ${target?.type}`;
      case "mention":
        return `${actor.name} mentioned you in a ${target?.type}`;
      case "job":
        return `New job: ${target?.title} at ${actor.name}`;
      case "birthday":
        return `Today is ${actor.name}'s birthday`;
      case "work_anniversary":
        return `${actor.name} is celebrating ${content}`;
      case "profile_view":
        return `${actor.name} viewed your profile`;
      default:
        return "New notification";
    }
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-linkedin-darker rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Notifications</h1>
              <p className="text-gray-500 dark:text-gray-400">
                You have {unreadCount} unread notifications
              </p>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={() => setFilter("all")}
                className={`px-3 py-1 rounded-full text-sm ${
                  filter === "all" 
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100" 
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setFilter("unread")}
                className={`px-3 py-1 rounded-full text-sm ${
                  filter === "unread" 
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100" 
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                }`}
              >
                Unread
              </button>
              {unreadCount > 0 && (
                <button 
                  onClick={markAllAsRead}
                  className="px-3 py-1 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Mark all as read
                </button>
              )}
            </div>
          </div>

          <div>
            {displayedNotifications.length === 0 ? (
              <div className="p-10 text-center">
                <BellIcon className="h-12 w-12 mx-auto text-gray-400" />
                <p className="mt-2 text-gray-500 dark:text-gray-400">No notifications to display</p>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {displayedNotifications.map((notification) => (
                  <li 
                    key={notification.id} 
                    className={`flex p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                      !notification.isRead ? "bg-blue-50 dark:bg-blue-900/20" : ""
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex-shrink-0 mr-4">
                      <div className="relative">
                        <Image
                          src={notification.actor.profilePicture}
                          alt={notification.actor.name}
                          width={48}
                          height={48}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-white dark:bg-gray-800">
                          {getNotificationIcon(notification.type)}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium ${!notification.isRead ? "text-blue-800 dark:text-blue-300" : "text-gray-900 dark:text-white"}`}>
                        {getNotificationText(notification)}
                      </p>
                      {notification.content && notification.type === "comment" && (
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 border-l-2 border-gray-300 dark:border-gray-600 pl-2">
                          "{notification.content}"
                        </p>
                      )}
                      <div className="mt-1 flex items-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })}
                        </p>
                        {!notification.isRead && (
                          <span className="ml-2 inline-block h-2 w-2 rounded-full bg-blue-600"></span>
                        )}
                      </div>
                    </div>
                    <div className="flex-shrink-0 self-start ml-2">
                      <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                        <EllipsisHorizontalIcon className="h-5 w-5 text-gray-500" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 