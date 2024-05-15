import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className='flex w-full justify-center py-11 gap-10 flex-wrap bg-black '>
      <div className='rounded-2xl  w-[300px] overflow-hidden shadow-md shadow-white content max-sm:w-[400px] max-sm:ml-5 max-sm:mr-5 max-sm:mx-auto'>
        <img className='h-[250px] w-[450px] max-sm:h-'  src='/img0.png' />

        <div className='p-7 text-xl text-white'> 
          <h1 className='font-extrabold mb-3.5 max-sm:text-[1.1rem]'>Cardio</h1>

            <hr></hr>

          <div>
           <p className='text-gray-200 text-[1rem] max-sm:text-[0.8rem]'>
           Performing cardiovascular exercises on a daily basis can provide 
           many benefits that improve overall health, fitness, and quality of life. Cardiovascular exercises are physical 
           activities that aim to improve the heart and lungs endurance.
            </p>
          </div>

          <div className='mt-5 text-center'>
          <a
                  className="rounded-md transition bg-gradient-to-r mx-sm:px-4 max-sm:py-1.5 max-sm:text-sm
                  from-red-900 via-red-700 to-orange-700 px-5 py-2.5 text-lg font-bold text-white shadow
                   hover:border-black hover:text-gray-400"
                  href="/workout/cardio"
                >
                  Enter
                </a>
          </div>

        </div>
      </div>

      <div className='rounded-2xl  w-[300px] overflow-hidden shadow-md shadow-white content max-sm:w-[400px] max-sm:ml-5 max-sm:mr-5 max-sm:mx-auto'>
        <img className='h-[250px] w-[450px]' src='/img01.png' />

        <div className='p-7 text-xl text-white'> 
          <h1 className='font-extrabold mb-3.5 max-sm:text-[1.1rem]'>Body Building</h1>

            <hr></hr>

          <div >
            <p className='text-gray-300 text-[1rem] max-sm:text-[0.8rem]'>
            Strength training may enhance your quality of life and improve your ability to do everyday activities. 
            Strength training can also protect your joints from injury. 
            Building muscle also can contribute to better balance and may reduce your risk of falls. 
            </p>
          </div>

          <div className='mt-5 text-center'>
          <a
                  className="rounded-md transition bg-gradient-to-r mx-sm:px-4 max-sm:py-1.5 max-sm:text-sm
                  from-red-900 via-red-700 to-orange-700 px-5 py-2.5 text-lg font-bold text-white shadow
                   hover:border-black hover:text-gray-400"
                  href="/Muscles"
                >
                  Enter
                </a>
          </div>

        </div>
      </div>

      <div className='rounded-2xl  w-[300px] overflow-hidden shadow-md shadow-white content max-sm:w-[400px] max-sm:ml-5 max-sm:mr-5 max-sm:mx-auto'>
        <img className='h-[250px] w-[450px]' src='/img02.png' />

        <div className='p-7 text-xl text-white'> 
          <h1 className='font-extrabold mb-3.5 max-sm:text-[1.1rem]'>Calisthenics</h1>

            <hr></hr>

          <div>
           <p className='text-gray-300 text-[1rem] max-sm:text-[0.8rem]'>
           Calisthenics is a form of exercise that uses a person body weight and requires little to no equipment. Examples of calisthenic exercises include pushups, crunches, and burpees. There are many health benefits to calisthenics.
            </p>
          </div>

          <div className='mt-9 text-center'>
          <a
                  className="rounded-md transition bg-gradient-to-r mx-sm:px-4 max-sm:py-1.5 max-sm:text-sm
                  from-red-900 via-red-700 to-orange-700 px-5 py-2.5 text-lg font-bold text-white shadow
                   hover:border-black hover:text-gray-400"
                  href="/workout/calthtenics"
                >
                  Enter
                </a>
          </div>

        </div>
      </div>

      <div className='rounded-2xl  w-[300px] overflow-hidden shadow-md shadow-white content max-sm:w-[400px] max-sm:ml-5 max-sm:mr-5 max-sm:mx-auto'>
        <img className='h-[250px] w-[450px]'  src='/img03.png' />
        <div className='p-7 text-xl text-white'> 
          <h1 className='font-extrabold mb-3.5 max-sm:text-[1.1rem]'>Mobility</h1>

            <hr></hr>

          <div>
           <p className='text-gray-300 text-[1rem] max-sm:text-[0.8rem]'>
           Mobility is the overall range of motion a person has within their body, 
           most notably within the joints. Mobility is incredibly important to everyone health and daily functioning. 
           Increased mobility prevents you from getting injuries.
            </p>
          </div>

          <div className='mt-2 text-center'>
                <a
                  className="rounded-md transition bg-gradient-to-r mx-sm:px-4 max-sm:py-1.5 max-sm:text-sm
                  from-red-900 via-red-700 to-orange-700 px-5 py-2.5 text-lg font-bold text-white shadow
                   hover:border-black hover:text-gray-400"
                  href="/workout/mobility"
                >
                  Enter
                </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;
