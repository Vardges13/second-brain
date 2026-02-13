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
      <body 
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ margin: 0, padding: 0, fontFamily: 'system-ui, sans-serif', height: '100vh' }}
      >
        <div style={{ display: 'flex', height: '100vh' }}>
          <Sidebar />
          <main style={{ flex: 1, marginLeft: 256, overflow: 'auto' }}>
            <div style={{ padding: '2rem', paddingTop: '1rem' }}>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
