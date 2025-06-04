// File: src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Google Fonts (leave these as-is if you still want Geist/Geist Mono)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VUUR Social",                           // ← change page title here
  description: "VUUR Social – Ignite Your Brand Online", 
  icons: {
    icon: "/favicon.png",                         // ← Next.js will emit a <link rel="icon" href="/favicon.png" /> 
    apple: "/favicon.png",                        // ← Optional: same file for Apple Touch if desired
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
