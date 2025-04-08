"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Image from "next/image";
import { PaperAirplaneIcon, FaceSmileIcon, PaperClipIcon, PhotoIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

// Define the message structure
interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
  isRead: boolean;
}

// Define the conversation structure
interface Conversation {
  id: string;
  participants: {
    id: string;
    name: string;
    profilePicture: string;
    headline: string;
    isOnline: boolean;
  }[];
  lastMessage: {
    text: string;
    timestamp: Date;
    isRead: boolean;
  };
  messages: Message[];
}

// Dummy user data
const CURRENT_USER = {
  id: "current-user",
  name: "John Doe",
  profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

// Dummy conversation data
const CONVERSATIONS: Conversation[] = [
  {
    id: "1",
    participants: [
      {
        id: "2",
        name: "Emily Johnson",
        profilePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        headline: "Product Manager at Tech Innovations",
        isOnline: true,
      },
    ],
    lastMessage: {
      text: "Yes, I'll check the proposal and get back to you!",
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      isRead: true,
    },
    messages: [
      {
        id: "m1",
        senderId: "current-user",
        text: "Hi Emily, I wanted to discuss the new project proposal.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
        isRead: true,
      },
      {
        id: "m2",
        senderId: "2",
        text: "Hi John! Sure, what aspects did you want to discuss?",
        timestamp: new Date(Date.now() - 1000 * 60 * 45), // 45 minutes ago
        isRead: true,
      },
      {
        id: "m3",
        senderId: "current-user",
        text: "I think we should focus on the user experience first. I've attached the proposal document for your review.",
        timestamp: new Date(Date.now() - 1000 * 60 * 35), // 35 minutes ago
        isRead: true,
      },
      {
        id: "m4",
        senderId: "2",
        text: "Yes, I'll check the proposal and get back to you!",
        timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
        isRead: true,
      },
    ],
  },
  {
    id: "2",
    participants: [
      {
        id: "3",
        name: "David Chen",
        profilePicture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        headline: "Software Engineer at DataTech",
        isOnline: false,
      },
    ],
    lastMessage: {
      text: "Let me know if you need any help with the code review.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
      isRead: false,
    },
    messages: [
      {
        id: "m5",
        senderId: "3",
        text: "Hey John, how's the backend implementation going?",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
        isRead: true,
      },
      {
        id: "m6",
        senderId: "current-user",
        text: "Hi David, it's coming along well. I'm working on the database optimizations now.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3.5), // 3.5 hours ago
        isRead: true,
      },
      {
        id: "m7",
        senderId: "3",
        text: "Let me know if you need any help with the code review.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
        isRead: false,
      },
    ],
  },
  {
    id: "3",
    participants: [
      {
        id: "4",
        name: "Sarah Williams",
        profilePicture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        headline: "Marketing Director at Brand Co",
        isOnline: true,
      },
    ],
    lastMessage: {
      text: "I'd love to connect you with our design team for the marketing campaign.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      isRead: true,
    },
    messages: [
      {
        id: "m8",
        senderId: "current-user",
        text: "Hello Sarah, I wanted to discuss potential collaboration opportunities.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 25), // 25 hours ago
        isRead: true,
      },
      {
        id: "m9",
        senderId: "4",
        text: "Hi John, that sounds interesting! What kind of collaboration did you have in mind?",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24.5), // 24.5 hours ago
        isRead: true,
      },
      {
        id: "m10",
        senderId: "current-user",
        text: "I was thinking about cross-promotion for our new product launch. Our audience overlaps significantly.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24.2), // 24.2 hours ago
        isRead: true,
      },
      {
        id: "m11",
        senderId: "4",
        text: "I'd love to connect you with our design team for the marketing campaign.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 24 hours ago
        isRead: true,
      },
    ],
  },
];

export default function MessagingContent() {
  const searchParams = useSearchParams();
  const initialContactId = searchParams.get("id");
  
  const [conversations, setConversations] = useState<Conversation[]>(CONVERSATIONS);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Set initial selected conversation based on URL parameter
  useEffect(() => {
    if (initialContactId) {
      const conversation = conversations.find(conv => 
        conv.participants.some(p => p.id === initialContactId)
      );
      
      if (conversation) {
        setSelectedConversation(conversation);
      }
    } else if (conversations.length > 0) {
      setSelectedConversation(conversations[0]);
    }
  }, [initialContactId, conversations]);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedConversation]);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return;

    const newMessageObj: Message = {
      id: `m${Date.now()}`,
      senderId: CURRENT_USER.id,
      text: newMessage.trim(),
      timestamp: new Date(),
      isRead: false,
    };

    // Update the selected conversation with the new message
    const updatedConversation = {
      ...selectedConversation,
      messages: [...selectedConversation.messages, newMessageObj],
      lastMessage: {
        text: newMessage.trim(),
        timestamp: new Date(),
        isRead: false,
      },
    };

    // Update the conversations list
    const updatedConversations = conversations.map(conv => 
      conv.id === selectedConversation.id ? updatedConversation : conv
    );

    setConversations(updatedConversations);
    setSelectedConversation(updatedConversation);
    setNewMessage("");
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffHours = Math.abs(now.getTime() - date.getTime()) / 36e5;
    
    if (diffHours < 24) {
      return formatTime(date);
    } else if (diffHours < 48) {
      return "Yesterday";
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };

  return (
    <div className="min-h-screen bg-linkedin-gray dark:bg-linkedin-dark">
      <Header />
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[calc(100vh-150px)]">
          {/* Conversation list */}
          <div className="md:col-span-1 linkedin-card overflow-hidden flex flex-col">
            <div className="p-4 border-b border-linkedin-border dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-linkedin-text dark:text-linkedin-textDark">Messaging</h2>
              <button className="text-linkedin-blue dark:text-linkedin-lightBlue hover:bg-linkedin-hoverBg dark:hover:bg-linkedin-hoverBgDark p-2 rounded-full">
                <EllipsisHorizontalIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto linkedin-scrollbar">
              {conversations.map((conversation) => {
                const participant = conversation.participants[0];
                const isSelected = selectedConversation?.id === conversation.id;
                const hasUnread = !conversation.lastMessage.isRead && conversation.lastMessage.senderId !== CURRENT_USER.id;
                
                return (
                  <div 
                    key={conversation.id}
                    className={`p-4 hover:bg-linkedin-hoverBg dark:hover:bg-linkedin-hoverBgDark cursor-pointer ${
                      isSelected ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                    }`}
                    onClick={() => setSelectedConversation(conversation)}
                  >
                    <div className="flex items-start">
                      <div className="relative mr-3 flex-shrink-0">
                        <div className="h-12 w-12 rounded-full overflow-hidden">
                          <Image
                            src={participant.profilePicture}
                            alt={participant.name}
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        {participant.isOnline && (
                          <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-400 border-2 border-white dark:border-linkedin-dark" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between">
                          <h3 className={`font-medium truncate ${hasUnread ? 'font-bold text-linkedin-text dark:text-linkedin-textDark' : 'text-linkedin-text dark:text-linkedin-textDark'}`}>
                            {participant.name}
                          </h3>
                          <span className="text-xs text-linkedin-darkGray dark:text-gray-400 whitespace-nowrap ml-2">
                            {formatDate(conversation.lastMessage.timestamp)}
                          </span>
                        </div>
                        <p className={`text-sm truncate mt-1 ${hasUnread ? 'font-semibold text-linkedin-text dark:text-linkedin-textDark' : 'text-linkedin-darkGray dark:text-gray-400'}`}>
                          {conversation.lastMessage.senderId === CURRENT_USER.id ? 'You: ' : ''}
                          {conversation.lastMessage.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Message area */}
          <div className="md:col-span-2 linkedin-card overflow-hidden flex flex-col">
            {selectedConversation ? (
              <>
                {/* Conversation header */}
                <div className="p-4 border-b border-linkedin-border dark:border-gray-700 flex items-center">
                  <div className="relative mr-3">
                    <div className="h-10 w-10 rounded-full overflow-hidden">
                      <Image
                        src={selectedConversation.participants[0].profilePicture}
                        alt={selectedConversation.participants[0].name}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    {selectedConversation.participants[0].isOnline && (
                      <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 border-2 border-white dark:border-linkedin-dark" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-linkedin-text dark:text-linkedin-textDark">
                      {selectedConversation.participants[0].name}
                    </h3>
                    <p className="text-xs text-linkedin-darkGray dark:text-gray-400">
                      {selectedConversation.participants[0].headline}
                    </p>
                  </div>
                </div>
                
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 linkedin-scrollbar">
                  {selectedConversation.messages.map((message) => {
                    const isCurrentUser = message.senderId === CURRENT_USER.id;
                    return (
                      <div key={message.id} className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[75%] rounded-lg px-4 py-2 ${
                          isCurrentUser 
                            ? 'bg-linkedin-blue text-white rounded-br-none' 
                            : 'bg-gray-100 dark:bg-gray-700 text-linkedin-text dark:text-linkedin-textDark rounded-bl-none'
                        }`}>
                          <p>{message.text}</p>
                          <p className={`text-xs mt-1 text-right ${
                            isCurrentUser ? 'text-blue-100' : 'text-linkedin-darkGray dark:text-gray-400'
                          }`}>
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                  <div ref={messagesEndRef} />
                </div>
                
                {/* Message input */}
                <div className="p-4 border-t border-linkedin-border dark:border-gray-700">
                  <div className="flex items-end space-x-2">
                    <div className="flex-1 rounded-lg border border-linkedin-border dark:border-gray-700 bg-white dark:bg-linkedin-dark p-2">
                      <textarea
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Write a message..."
                        className="w-full resize-none focus:outline-none bg-transparent text-linkedin-text dark:text-linkedin-textDark"
                        rows={2}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage();
                          }
                        }}
                      />
                      <div className="flex justify-between pt-2">
                        <div className="flex space-x-2">
                          <button className="text-linkedin-darkGray dark:text-gray-400 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">
                            <PaperClipIcon className="h-5 w-5" />
                          </button>
                          <button className="text-linkedin-darkGray dark:text-gray-400 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">
                            <PhotoIcon className="h-5 w-5" />
                          </button>
                          <button className="text-linkedin-darkGray dark:text-gray-400 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">
                            <FaceSmileIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={handleSendMessage}
                      disabled={!newMessage.trim()}
                      className={`p-2 rounded-full ${
                        newMessage.trim() 
                          ? 'bg-linkedin-blue text-white hover:bg-linkedin-darkBlue' 
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700'
                      }`}
                    >
                      <PaperAirplaneIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center p-8">
                <div className="w-16 h-16 bg-linkedin-hoverBg dark:bg-linkedin-hoverBgDark rounded-full flex items-center justify-center mb-4">
                  <PaperAirplaneIcon className="h-8 w-8 text-linkedin-darkGray dark:text-gray-400" />
                </div>
                <h3 className="text-xl font-medium text-linkedin-text dark:text-linkedin-textDark">Your messages</h3>
                <p className="text-linkedin-darkGray dark:text-gray-400 mt-2 max-w-md">
                  Connect with your network through private messages.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
} 