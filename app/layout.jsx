import { Geist, Geist_Mono } from "next/font/google";
import { NuqsAdapter } from 'nuqs/adapters/next/app'

 
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Movie Finder",
  description: "Created by Hazem Gherissi",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-gray-800" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
