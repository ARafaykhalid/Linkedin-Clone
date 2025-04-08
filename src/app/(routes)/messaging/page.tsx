import { Metadata } from "next";
import MessagingContent from "./MessagingContent";

export const metadata: Metadata = {
  title: "Messaging | LinkedIn Clone",
  description: "Chat with your connections on LinkedIn",
};

export default function MessagingPage() {
  return (
    <div>
      <MessagingContent />
    </div>
  );
} 