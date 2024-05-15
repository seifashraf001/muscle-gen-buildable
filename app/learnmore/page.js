'use client';
import {React,useState} from 'react';

const LearnMorePage = () => {

    
  return (
    <div className="min-h-screen py-10 bg-black">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-red-600 via-red-500 to-orange-400 text-transparent bg-clip-text italic">Learn More</h1>
        <div className="flex flex-col items-center justify-center sm:flow-col md:space-x-6">
          <div className="">
            <img src="gym.jpg" alt="Gym Interior" className="rounded-lg shadow-lg" />
          </div>

          
          <div className=" my-5 lg:w-1/2 md:w-1/2">
            <p className="text-lg text-white mb-4">
              Our gym offers state-of-the-art equipment and personalized training programs
              tailored to your fitness goals. Whether you are a beginner or an experienced
              athlete, our certified trainers are here to help you achieve your best self.
            </p>
            <p className="text-lg text-white mb-4">
              We also provide nutritional guidance and meal planning services to complement
              your workouts and optimize your results. Our holistic approach ensures that
              you receive comprehensive support on your journey to a healthier lifestyle.
            </p>
            <p className="text-lg text-white">
              Join our fitness community today and experience a supportive environment
              that motivates you to reach new heights. From group classes to one-on-one
              coaching, we have everything you need to succeed on your fitness journey.
            </p>
          </div>
         
        </div>
        <div className="mt-10 text-center">
        
        <a
    href="/"
    className="rounded-md bg-gradient-to-r px-5 py-2.5 text-sm mr-2 transition from-orange-700 via-red-700 to-red-900 hover:opacity-80 text-white"
         >
    Back to Home
     </a>
        </div>
      </div>
    </div>
  );
};

export default LearnMorePage;
