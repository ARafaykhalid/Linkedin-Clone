import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Post from "@/models/Post";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(request: Request) {
  try {
    await dbConnect();
    
    const posts = await Post.find({})
      .sort({ createdAt: -1 })
      .populate("author", "name profilePicture headline")
      .limit(20);
    
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    
    const { content, image } = await request.json();
    
    if (!content && !image) {
      return NextResponse.json(
        { error: "Post content or image is required" },
        { status: 400 }
      );
    }
    
    await dbConnect();
    
    const newPost = await Post.create({
      content,
      image: image || "",
      author: session.user.id,
    });
    
    const populatedPost = await Post.findById(newPost._id)
      .populate("author", "name profilePicture headline");
    
    return NextResponse.json(populatedPost, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
} 