"use client";

import Header from "@/components/Header";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gray-100 dark:bg-gray-900">
        {children}
      </main>
    </>
  );
} 