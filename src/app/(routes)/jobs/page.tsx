import { Metadata } from "next";
import JobsContent from "./JobsContent";

export const metadata: Metadata = {
  title: "Jobs | LinkedIn Clone",
  description: "Find and apply for jobs on LinkedIn",
};

export default function JobsPage() {
  return (
    <div>
      <JobsContent />
    </div>
  );
} 