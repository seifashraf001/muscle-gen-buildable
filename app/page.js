"use client";
import Hero from "./components/Hero";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <Hero />
    </SessionProvider>
  );
}
