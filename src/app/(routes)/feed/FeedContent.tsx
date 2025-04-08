"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import CreatePost from "@/components/CreatePost";
import Post from "@/components/Post";

// Dummy data for development
const DUMMY_USER = {
  id: "1",
  name: "John Doe",
  profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  headline: "Software Engineer at Tech Company",
};

const DUMMY_POSTS = [
  {
    id: "1",
    author: {
      id: "2",
      name: "Jane Smith",
      profilePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      headline: "Product Manager at Innovation Inc.",
    },
    content: "Just launched our new product! So excited to share this with everyone. Check it out and let me know what you think.",
    createdAt: new Date(Date.now() - 3600000), // 1 hour ago
    likes: 42,
    comments: 8,
  },
  {
    id: "2",
    author: {
      id: "3",
      name: "Robert Johnson",
      profilePicture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      headline: "Marketing Director at Big Brand",
    },
    content: "I'm hiring! Looking for talented graphic designers to join our growing marketing team. Remote positions available.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    createdAt: new Date(Date.now() - 86400000), // 1 day ago
    likes: 128,
    comments: 32,
  },
  {
    id: "3",
    author: {
      id: "4",
      name: "Emily Davis",
      profilePicture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      headline: "Freelance UI/UX Designer",
    },
    content: "Just finished this side project I've been working on. A redesign of a popular app. What do you all think?",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    createdAt: new Date(Date.now() - 172800000), // 2 days ago
    likes: 85,
    comments: 14,
  },
];

export default function FeedContent() {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  const [loading, setLoading] = useState(false);

  // Simulating fetching posts from an API
  useEffect(() => {
    // In a real app, you would fetch posts from your API here
    // Example:
    // const fetchPosts = async () => {
    //   setLoading(true);
    //   try {
    //     const response = await fetch('/api/posts');
    //     const data = await response.json();
    //     setPosts(data);
    //   } catch (error) {
    //     console.error('Error fetching posts:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchPosts();
  }, []);

  const handlePostCreated = () => {
    // In a real app, you would fetch the latest posts after a new post is created
    // For now, we'll just simulate it
    setLoading(true);
    setTimeout(() => {
      // Add a dummy new post to the beginning
      const newPost = {
        id: String(Date.now()),
        author: DUMMY_USER,
        content: "This is a new post I just created!",
        createdAt: new Date(),
        likes: 0,
        comments: 0,
      };
      setPosts([newPost, ...posts]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left sidebar */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="bg-blue-800 h-20"></div>
              <div className="p-4 relative">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <div className="h-20 w-20 rounded-full border-4 border-white overflow-hidden">
                    <img
                      src={DUMMY_USER.profilePicture}
                      alt={DUMMY_USER.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-12 text-center">
                  <h2 className="text-xl font-bold">{DUMMY_USER.name}</h2>
                  <p className="text-gray-500 text-sm mt-1">{DUMMY_USER.headline}</p>
                </div>
                <div className="mt-4 border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Who viewed your profile</span>
                    <span className="font-semibold">154</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-gray-500">Views of your post</span>
                    <span className="font-semibold">1,289</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2">
            <CreatePost user={DUMMY_USER} onPostCreated={handlePostCreated} />

            {loading && (
              <div className="text-center py-4">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                <p className="mt-2 text-gray-500">Loading posts...</p>
              </div>
            )}

            {posts.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 