"use client";
import { Cinzel, Rajdhani } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { usePathname } from "next/navigation";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel"
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-rajdhani"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Check if current path is step1, step2, or step3
  const hideHeaderFooter = pathname === "/step1" || pathname === "/step2" || pathname === "/step3";

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cinzel.variable} ${rajdhani.variable} font-sans antialiased`}>
        {!hideHeaderFooter && <Navbar />}
        <main>
          {children}
        </main>
        {!hideHeaderFooter && <Footer />}
      </body>
    </html>
  );
}