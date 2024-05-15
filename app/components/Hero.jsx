import React from "react";
import "./Hero.css";
import Link from "next/link";

function Hero() {
  return (
    <section
      className="bg-cover bg-center h-screen relative"
      style={{ backgroundImage: `url("background.jpg")` }}
    >
<div class="absolute inset-0 text-center mt-5">
  <div class="mx-auto max-w-xl">
    <div>
      <h1 class="text-5xl font-extrabold sm:text-6xl text-white">Muscle Generator</h1>
    </div>
    <div class="mt-3">
      <h2 class="text-5xl font-extrabold sm:text-6xl text-transparent bg-gradient-to-r from-gray-900 via-gray-300 to-gray-500 bg-clip-text">Make It Pump</h2>
    </div>
  </div>
</div>


      <div className="absolute bottom-0 left-0 mb-8 ml-8">
        <a
          className="block rounded px-12 py-3 font-medium text-white shadow hover:text-red-700 transition active:text-red-500"
          href="/learnmore"
        >
          Learn More
        </a>
      </div>

      <div className="absolute bottom-0 right-0 mb-8 mr-8">
        <Link
          className="group relative inline-flex items-center overflow-hidden rounded bg-gradient-to-r from-black via-gray-700 to-white px-8 py-3 text-white focus:outline-none focus:ring active:bg-red-500"
          href="/Muscles"
        >
          <span className="absolute -end-full transition-all group-hover:end-4">
            <svg
              className="size-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
          <span className="text-sm font-medium transition-all group-hover:me-4">
            {" "}
            Get Started{" "}
          </span>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
