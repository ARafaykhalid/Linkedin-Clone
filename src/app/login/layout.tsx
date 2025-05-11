import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | LinkedIn Clone",
  description: "Login to your LinkedIn Clone account",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 