"use client";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Chatbot from "./components/Chatbot";

import { AuthProvider } from "./Providers";
import { SessionProvider } from "next-auth/react";

const inter = Poppins({ subsets: ["latin"], weight: "700" });

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />

          <AuthProvider>{children}</AuthProvider>
          <Chatbot/>
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}
