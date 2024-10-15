"use client";
import { useState } from "react";
import localFont from "next/font/local";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [headerOption, setHeaderOption] = useState<string>("");
  const [sideBarOption, setSideBarOption] = useState<string>("");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        <Navbar headerOption={headerOption} setHeaderOption={setHeaderOption}/>
        <div className="flex">
          <SideBar sideBarOption={sideBarOption} headerOption={headerOption} setSideBarOption={setSideBarOption}/>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
