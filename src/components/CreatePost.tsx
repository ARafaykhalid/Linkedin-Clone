"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/24/outline";

interface CreatePostProps {
  user: {
    id: string;
    name: string;
    profilePicture: string;
  };
  onPostCreated?: () => void;
}

export default function CreatePost({ user, onPostCreated }: CreatePostProps) {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim() && !selectedImage) return;
    
    setIsSubmitting(true);
    
    try {
      // Here you would make an API call to create the post
      // const response = await fetch('/api/posts', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     content,
      //     image: previewImage,
      //   }),
      // });
      
      // if (!response.ok) throw new Error('Failed to create post');
      
      // Clear form
      setContent("");
      setSelectedImage(null);
      setPreviewImage(null);
      
      // Notify parent component
      if (onPostCreated) onPostCreated();
      
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow mb-4 p-4">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full overflow-hidden mr-3">
          <Image
            src={user.profilePicture || "https://via.placeholder.com/150"}
            alt={user.name}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1">
          <button
            className="w-full text-left px-4 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500"
            onClick={() => document.getElementById("post-textarea")?.focus()}
          >
            Start a post
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <textarea
          id="post-textarea"
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="What do you want to talk about?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={3}
        />

        {previewImage && (
          <div className="relative mb-4">
            <img 
              src={previewImage} 
              alt="Selected preview" 
              className="w-full h-40 object-cover rounded-lg"
            />
            <button
              type="button"
              className="absolute top-2 right-2 bg-gray-700 bg-opacity-70 text-white rounded-full p-1"
              onClick={handleRemoveImage}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}

        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageChange}
              id="image-upload"
            />
            <label 
              htmlFor="image-upload"
              className="flex items-center text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <PhotoIcon className="h-6 w-6 mr-1" />
              <span>Photo</span>
            </label>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting || (!content.trim() && !selectedImage)}
            className={`px-4 py-2 rounded-full font-medium ${
              isSubmitting || (!content.trim() && !selectedImage)
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Posting..." : "Post"}
          </button>
        </div>
      </form>
    </div>
  );
} 