import { Metadata } from "next";
import NetworkContent from "./NetworkContent";

export const metadata: Metadata = {
  title: "My Network | LinkedIn Clone",
  description: "Manage your LinkedIn network connections",
};

export default function NetworkPage() {
  return (
    <div>
      <NetworkContent />
    </div>
  );
} 