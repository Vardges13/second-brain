import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Second Brain - Система управления знаниями",
  description: "Персональная система для управления памятью, документами и задачами",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-950 text-gray-100`}
        style={{ margin: 0, padding: 0, fontFamily: 'system-ui, sans-serif', minHeight: '100vh' }}
      >
        <div className="min-h-screen">
          <Sidebar />
          <main className="transition-all duration-300 ease-in-out md:ml-64 ml-0">
            <div className="p-4 pt-20 md:pt-4 md:p-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
