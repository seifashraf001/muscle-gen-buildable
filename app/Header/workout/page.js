import React from 'react';
import './card.css';

const Card = () => {
  return (

    <div className='flex w-full justify-center py-11 gap-8 flex-wrap'>
      <div className='rounded-2xl  w-[600px] overflow-hidden shadow-md shadow-white content'>
        <img className='h-[500px] w-[600px]'  src='/img0.png' />

        <div className='p-7 text-xl text-white'> 
          <h1 className='font-extrabold mb-5'>Cardio</h1>

            <hr></hr>

          <div className='mt-4'>
           <p className='text-gray-300'>
           Performing cardiovascular exercises on a daily basis can provide 
           many benefits that improve overall health, fitness, and quality of life. Cardiovascular exercises are physical 
           activities that aim to improve the heart and lungs endurance.
            </p>
          </div>

          <div className='mt-4 text-center'>
                <a
                  className="rounded-md transition bg-gradient-to-r 
                  from-red-900 via-red-700 to-orange-700 px-5 py-2.5 text-lg font-bold text-white shadow
                   hover:border-black hover:text-gray-400"
                  href="/Header/workout/cardio"
                >
                  Enter
                </a>
          </div>

        </div>
      </div>

      <div className='rounded-2xl w-[600px] overflow-hidden shadow-md shadow-white content'>
        <img className='h-[500px] w-[600px]' src='/img01.png' />

        <div className='p-7 text-xl text-white'> 
          <h1 className='font-extrabold mb-5'>Body Building</h1>

            <hr></hr>

          <div className='mt-4'>
            <p className='text-gray-300'>
            Strength training may enhance your quality of life and improve your ability to do everyday activities. 
            Strength training can also protect your joints from injury. 
            Building muscle also can contribute to better balance and may reduce your risk of falls. 
            </p>
          </div>

          <div className='mt-4 text-center'>
                <a
                  className="rounded-md transition bg-gradient-to-r 
                  from-red-900 via-red-700 to-orange-700 px-5 py-2.5 text-lg font-bold text-white shadow
                   hover:border-black hover:text-gray-400"
                  href="/Muscles"
                >
                  Enter
                </a>
          </div>

        </div>
      </div>

      <div className='rounded-2xl w-[600px] overflow-hidden shadow-md shadow-white content'>
        <img className='h-[500px] w-[600px]' src='/img02.png' />

        <div className='p-7 text-xl text-white'> 
          <h1 className='font-extrabold mb-5'>Calisthenics</h1>

            <hr></hr>

          <div className='mt-4'>
           <p className='text-gray-300'>
            calisthenics are a form of resistance training using your own body weight. 
            They also are an effective way to build strength, agility, and cardiovascular health, 
            as well as improve balance, coordination, and flexibility.
            </p>
          </div>

          <div className='mt-4 text-center'>
                <a
                  className="rounded-md transition bg-gradient-to-r 
                  from-red-900 via-red-700 to-orange-700 px-5 py-2.5 text-lg font-bold text-white shadow
                   hover:border-black hover:text-gray-400"
                  href="/Header/workout/calthtenics"
                >
                  Enter
                </a>
          </div>

        </div>
      </div>

      <div className='rounded-2xl w-[600px] overflow-hidden shadow-md shadow-white content'>
        <img className='h-[500px] w-[600px]'  src='/img03.png' />

        <div className='p-7 text-xl text-white'> 
          <h1 className='font-extrabold mb-5'>Mobility</h1>

            <hr></hr>

          <div className='mt-4'>
           <p className='text-gray-300'>
           Mobility is the overall range of motion a person has within their body, 
           most notably within the joints. Mobility is incredibly important to everyone health and daily functioning. 
           Increased mobility prevents you from getting injuries.
            </p>
          </div>

          <div className='mt-4 text-center'>
                <a
                  className="rounded-md transition bg-gradient-to-r 
                  from-red-900 via-red-700 to-orange-700 px-5 py-2.5 text-lg font-bold text-white shadow
                   hover:border-black hover:text-gray-400"
                  href="/Header/workout/mobility"
                >
                  Enter
                </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Card;
