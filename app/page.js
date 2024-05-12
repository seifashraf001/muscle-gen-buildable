'use client';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Image from "next/image";
import Hero from "./components/Hero";
import { SessionProvider } from "next-auth/react";


export default function Home() {
  return (
 <SessionProvider> <div>
<Hero/>
  </div>
  </SessionProvider>
  );
}