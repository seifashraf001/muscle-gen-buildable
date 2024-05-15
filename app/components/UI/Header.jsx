import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { data: session } = useSession();

  return (
    <header className="bg-black relative">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a href="/">
              <img src="/logo1.png" alt="logo" width={70} height={70} />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm list-none">
                <li className="">
                  <a
                    className="text-white transition hover:opacity-85 "
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:opacity-85 "
                    href="/workout"
                  >
                    Workout
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:opacity-85 "
                    href="/routine"
                  >
                    Routine
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:opacity-85 "
                    href="/tools"
                  >
                    Tools
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:opacity-85 "
                    href="/nutrition "
                  >
                    Nutrition
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:opacity-85 "
                    href="/pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:opacity-85 "
                    href="/Team"
                  >
                    Team
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
            {session ? (
              <div className="relative">
                <button
                  className="flex items-center text-gray-600 focus:outline-none"
                  onClick={toggleDropdown}
                >
                  <img src="https://i.imgur.com/niqMFrk.png" alt="Profile" className="w-8 h-8 rounded-full" />
                  <span className="ml-2 text-white">{session.user.name}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-1 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    )}
                  </svg>
                </button>
                {isOpen && (
                  <div className="absolute mt-2 right-0 left-auto w-max bg-gray-900 rounded-md shadow-lg py-1">
                    <div className="mt-1">
                      <h4 className="m-2 text-white hover:bg-gray-700 transition cursor-pointer rounded p-1">
                        {" "}
                        <span className="text-neutral-400">Name:</span>{" "}
                        <span>{session?.user?.name}</span>
                      </h4>
                      <h4 className="m-2 text-white hover:bg-gray-700 transition cursor-pointer rounded p-1">
                        {" "}
                        <span className="text-neutral-400">Email:</span>{" "}
                        <span>{session?.user?.email}</span>
                      </h4>
                    </div>

                    <hr className="border-gray-200 my-1" />

                    <div className="flex justify-center">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          signOut();
                        }}
                        className="block px-4 py-2 my-1 text-sm text-white w-2/4 transition bg-red-600 hover:bg-red-800 rounded text-center "
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-gradient-to-r px-5 py-2.5 text-sm font-medium text-white transition from-orange-700 via-red-700 to-red-900 hover:opacity-80"
                  href="/login"
                >
                  Login
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-gradient-to-r px-5 py-2.5 text-sm font-medium text-white transition from-orange-700 via-red-700 to-red-900 hover:opacity-80"
                    href="/register"
                  >
                    Register
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Menu items for mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav aria-label="Global" className="my-2 pb-4">
              <hr></hr>
              <ul className="flex flex-col items-center gap-4 text-sm mt-4">
                <li>
                  <a
                    className="text-white transition hover:opacity-85 "
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:opacity-85 "
                    href="/workout"
                  >
                    Workout
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:opacity-85 "
                    href="/routine"
                  >
                    Routine
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:opacity-85 "
                    href="/tools"
                  >
                    Tools
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:opacity-85 "
                    href="/nutrition "
                  >
                    Nutrition
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:opacity-85 "
                    href="/pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:opacity-85 "
                    href="/Team"
                  >
                    Team
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
