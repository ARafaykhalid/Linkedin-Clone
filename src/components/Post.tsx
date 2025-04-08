"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { ChatBubbleLeftIcon, HandThumbUpIcon, ShareIcon } from "@heroicons/react/24/outline";
import { HandThumbUpIcon as SolidThumbUpIcon } from "@heroicons/react/24/solid";

interface PostProps {
  id: string;
  author: {
    id: string;
    name: string;
    profilePicture: string;
    headline: string;
  };
  content: string;
  image?: string;
  createdAt: Date;
  likes: number;
  comments: number;
  isLiked?: boolean;
}

export default function Post({
  id,
  author,
  content,
  image,
  createdAt,
  likes,
  comments,
  isLiked = false,
}: PostProps) {
  const [liked, setLiked] = useState(isLiked);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setLiked((prev) => !prev);
    // Here you would also make a request to your API to update the like status
  };

  return (
    <div className="bg-white rounded-lg shadow mb-4 overflow-hidden">
      <div className="p-4">
        <div className="flex items-center">
          <Link href={`/profile/${author.id}`}>
            <div className="h-12 w-12 rounded-full overflow-hidden mr-3">
              <Image
                src={author.profilePicture || "https://via.placeholder.com/150"}
                alt={author.name}
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
          </Link>
          <div>
            <Link
              href={`/profile/${author.id}`}
              className="font-semibold text-gray-900 hover:underline"
            >
              {author.name}
            </Link>
            <p className="text-gray-500 text-sm">{author.headline}</p>
            <p className="text-gray-400 text-xs">
              {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
            </p>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-gray-800">{content}</p>
        </div>
      </div>

      {image && (
        <div className="w-full aspect-video relative">
          <Image
            src={image}
            alt="Post image"
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="px-4 py-2 border-t border-gray-100">
        <div className="flex text-sm text-gray-500">
          {likeCount > 0 && (
            <div className="flex items-center">
              <span className="bg-blue-500 text-white p-1 rounded-full mr-1">
                <HandThumbUpIcon className="h-3 w-3" />
              </span>
              <span>{likeCount}</span>
            </div>
          )}
          {comments > 0 && (
            <div className="ml-auto">
              <span>{comments} comments</span>
            </div>
          )}
        </div>
      </div>

      <div className="px-4 py-1 border-t border-gray-100 flex justify-between">
        <button
          className={`flex items-center justify-center p-2 rounded-md flex-1 hover:bg-gray-100 ${
            liked ? "text-blue-500" : "text-gray-500"
          }`}
          onClick={handleLike}
        >
          {liked ? (
            <SolidThumbUpIcon className="h-5 w-5 mr-1" />
          ) : (
            <HandThumbUpIcon className="h-5 w-5 mr-1" />
          )}
          <span>Like</span>
        </button>
        <button className="flex items-center justify-center p-2 rounded-md flex-1 text-gray-500 hover:bg-gray-100">
          <ChatBubbleLeftIcon className="h-5 w-5 mr-1" />
          <span>Comment</span>
        </button>
        <button className="flex items-center justify-center p-2 rounded-md flex-1 text-gray-500 hover:bg-gray-100">
          <ShareIcon className="h-5 w-5 mr-1" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
} 