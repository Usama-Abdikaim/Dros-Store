import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DroStore",
  description: "DroStore is a modern e-commerce platform built with Next.js, Tailwind CSS, and Shadcn UI.",
};

const RootLayout = async ({children,}: {children: ReactNode;}) => {

  const session = await auth();
  
  return (
    <html lang="en">
      <SessionProvider session={session}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-right" />
        <main className="root-container">
          {children}
        </main>
      </body>
      </SessionProvider>
    </html>
  );
}

export default RootLayout;
