import { Metadata } from "next";
import FeedContent from "./FeedContent";

export const metadata: Metadata = {
  title: "Feed | LinkedIn Clone",
  description: "View your LinkedIn feed",
};

export default function FeedPage() {
  return (
    <div>
      <FeedContent />
    </div>
  );
} 