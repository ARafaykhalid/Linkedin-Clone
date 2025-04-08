import { Metadata } from "next";
import ProfileContent from "./ProfileContent";

export const metadata: Metadata = {
  title: "Profile | LinkedIn Clone",
  description: "View and edit your LinkedIn profile",
};

export default function ProfilePage() {
  return (
    <div>
      <ProfileContent />
    </div>
  );
} 