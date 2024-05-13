'use client';

import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./Providers";
import {SessionProvider} from 'next-auth/react';



const inter = Poppins({ subsets: ["latin"] , weight:"700"});


export default function RootLayout({ children }) {
  return (

<SessionProvider>
     <html lang="en">
      <title>Muscle Generator</title>
      <body className={inter.className}>

        <Header/>

        <AuthProvider>
        {children}
        </AuthProvider>
        <Footer/>
        </body>
     </html>
     </SessionProvider>




  );
}