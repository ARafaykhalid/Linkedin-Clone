import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | LinkedIn Clone",
  description: "Create a new LinkedIn Clone account",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 