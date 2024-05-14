'use client'
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './page.css'

export default function DeveloperPage() {
    const { data: session } = useSession();
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      // Fetch user data from MongoDB
      async function fetchUserData() {
        try {
          const response = await axios.get('/api/user', {
            headers: {
              Authorization: `Bearer ${session?.accessToken}`,
            },
          });
          setUserData(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
  
      if (session) {
        fetchUserData();
      }
    }, [session]);
  
    return (
      <div className="bg-black min-h-screen flex flex-col justify-center items-center">
        <div className="container mx-auto p-10">
          <div className="title text-white text-4xl mb-8 text-center">
            Welcome to Developer Page
          </div>
          <div className="about bg-opacity-70 bg-black content rounded-lg p-8 shadow-md">
            {session ? (
              <div>
                <p className="neon text-white text-lg font-bold mb-4">
                  Hello, {session.user.name}!
                </p>
                
        
           
  
                {/* Functionality of the Site (displayed only when signed in) */}
                <div className="functionality mt-8 text-white">
                  <h2 className="text-2xl mb-4">Functionality of the Site:</h2>
                  <p>
                    This site is built using Next.js, a React framework that enables server-side rendering and static site generation.
                  </p>
                  <br></br>
                  <p>
                    Tailwind CSS is used for styling, providing utility classes for fast and responsive UI development.
                  </p>
                  <br></br>
                  <p>
                    MongoDB serves as the database, storing user data and enabling efficient data management.
                  </p>
                  <br></br>
                  <p>
                    Express.js is utilized for backend server development, providing a robust and flexible Node.js web application framework.
                  </p>
                  <br></br>
                  <p>
                    Together, these technologies create a powerful platform for building modern web applications with ease.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-white mb-4 ">
                  Please sign in to access developer features.
                </p>
                <button
                  className="rounded bg-gradient-to-r from-red-900 via-red-700 to-orange-600 px-5 py-3 text-sm font-medium text-white hover:opacity-90 transition"
                  onClick={() => signIn()}
                >
                  Sign in
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
