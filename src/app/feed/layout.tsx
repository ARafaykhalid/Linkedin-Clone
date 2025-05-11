import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feed | LinkedIn Clone",
  description: "Your LinkedIn feed with updates from your network",
};

export default function FeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 