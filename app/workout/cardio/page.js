'use client'
import React, { useState } from 'react';
import './page.css'; 


const card = () => {

    return (
    <div className='flex w-full bg-black justify-center py-11 gap-14 flex-wrap'>
      <div className='rounded-2xl  w-[400px] overflow-hidden shadow-md shadow-white content'>
        <img className='h-[300px] w-[600px]'  src='/beginner.jpg' />

        <div className='p-7 text-xl text-white'> 
          <h1 className='font-extrabold mb-5'>Beginner level</h1>

            <hr></hr>

          <div className='mt-4'>
          <p className='text-gray-300 text-[0.85rem]'>
           20 Min BEGINNER CARDIO Workout For Fat Burn <br />
          (No Equipment, At Home)
            </p>
          </div>

          <div className='mt-4 text-center'>
                <a
                  className="rounded-md transition bg-gradient-to-r 
                  from-red-900 via-red-700 to-orange-700 px-5 py-2.5 text-lg font-bold text-white shadow
                   hover:border-black hover:text-gray-400"
                  href="https://www.youtube.com/embed/vnBXaCsoEPU?si=a45shnw9OBNBZo2b" target='_blank'
                >
                  Enter
                </a>
          </div>

        </div>
      </div>

      <div className='rounded-2xl w-[400px] overflow-hidden shadow-md shadow-white content'>
        <img className='h-[300px] w-[600px]' src='/Intermediate.png' />

        <div className='p-7 text-xl text-white'> 
          <h1 className='font-extrabold mb-5'>intermediate</h1>

            <hr></hr>

          <div className='mt-4'>
          <p className='text-gray-300 text-[0.85rem]'>
            Low impact, high intensity intermediate home cardio workout
            </p>
          </div>

          <div className='mt-4 text-center'>
                <a
                  className="rounded-md transition bg-gradient-to-r 
                  from-red-900 via-red-700 to-orange-700 px-5 py-2.5 text-lg font-bold text-white shadow
                   hover:border-black hover:text-gray-400"
                  href="https://www.youtube.com/embed/Ba3qZjzPonI?si=PFqCDB4KiNnByrTR"
                  target='_blank'
                >
                  Enter
                </a>
          </div>

        </div>
      </div>

      <div className='rounded-2xl w-[400px] overflow-hidden shadow-md shadow-white content'>
        <img className='h-[300px] w-[600px]' src='/advanced.png' />

        <div className='p-7 text-xl text-white'> 
          <h1 className='font-extrabold mb-5'>Advanced</h1>

            <hr></hr>

          <div className='mt-4'>
          <p className='text-gray-300 text-[0.85rem]'>
           40 Min FAT BURNING WORKOUT [Full Body HIIT CARDIO] No Equipment, No Repeats
            </p>
          </div>

          <div className='mt-4 text-center'>
                <a
                  className="rounded-md transition bg-gradient-to-r 
                  from-red-900 via-red-700 to-orange-700 px-5 py-2.5 text-lg font-bold text-white shadow
                   hover:border-black hover:text-gray-400"
                  href="/Header/workout/calthtenics"
                  target='_blank'
                >
                  Enter
                </a>
          </div>

        </div>
      </div>

      <div className='rounded-2xl w-[400px] overflow-hidden shadow-md shadow-white content'>
        <img className='h-[300px] w-[600px]'  src='/hit.png' />

        <div className='p-7 text-xl text-white'> 
          <h1 className='font-extrabold mb-5'>HIT Cardio</h1>

            <hr></hr>

          <div className='mt-4'>
          <p className='text-gray-300 text-[0.85rem]'>
           20 Min Fat Burning HIIT Workout -  No Equipment <br></br>
              No Repeat

            </p>
          </div>

          <div className='mt-4 text-center'>
                <a
                  className="rounded-md transition bg-gradient-to-r 
                  from-red-900 via-red-700 to-orange-700 px-5 py-2.5 text-lg font-bold text-white shadow
                   hover:border-black hover:text-gray-400"
                  href="https://www.youtube.com/embed/XGD9xGR-V-8?si=7PQoO_wMtmdqjII0"
                  target='_blank'
                >
                  Enter
                </a>
          </div>

        </div>
      </div>
    </div>
      
    );
}

export default card;