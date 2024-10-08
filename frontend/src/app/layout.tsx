// RootLayout.tsx
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Ensure this file includes Tailwind imports
import Navbar from "@/components/Navbar"; // Adjust import path as necessary

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkyLine",
  description: "App for airline usage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <Navbar />
        <div className="pt-4">{children}</div>
      </body>
    </html>
  );
}
