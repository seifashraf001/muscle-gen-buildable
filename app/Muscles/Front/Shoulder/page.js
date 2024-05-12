import React from 'react'
import './page.css'


function chest() {
  return (
    <div className="workout-container">
      <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
        alt=""
        src="https://gymvisual.com/img/p/2/0/2/8/9/20289.gif"
        className="w-full h-full object-cover"
        />

  <div className="bg-white p-4 sm:p-6">
    <a href="#">
      <h3 className="mt-0.5 text-lg text-gray-900">Barbell Overhead Press</h3>
    </a>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</li>
      <br></br>
      <li>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</li>
      <br></br>
      <li>Press until your elbows are extended and push your head forward slightly</li>
    </ol>
  </div>
      </article></div>

      <div className='workout'>
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img
    alt=""
    src="https://gymvisual.com/img/p/5/1/4/6/5146.gif"
    className="h-full w-full object-cover"
  />

  <div className="bg-white p-4 sm:p-6">

    <h3 className="mt-0.5 text-lg text-gray-900">Dumbbell Seated Overhead Press</h3>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward. </li>
      <br></br>
      <li>Raise the dumbbells upwards and pause at the contracted position</li>
      <br></br>
      <li>Lower the weights back to starting position.</li>
    </ol>
    
    {/* <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      
    </p> */}
  </div>
      </article>
      </div>

      <div className='workout'>
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <img
        alt=""
        src="https://gymvisual.com/img/p/1/8/4/5/7/18457.gif"
        className="h-full w-full object-cover"
      />

        <div className="bg-white p-4 sm:p-6">

    <h3 className="mt-0.5 text-lg text-gray-900">Cable Low Single Arm Lateral Raise</h3>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li> Use a handle attachment with the cable set all the way to the bottom of the machine.</li>
      <br></br>
      <li>You should vertically abduct at the shoulder raising your arm straight out to the side.</li>
      <br></br>
      <li>Raise until your arm is parallel with the ground and then back to the starting position.</li>
    </ol>
    
    {/* <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      
    </p> */}
  </div>
      </article>
      </div>

      <div className='workout'>
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img
    alt=""
    src="https://gymvisual.com/img/p/2/4/9/6/2/24962.gif"
    className="h-full w-full object-cover"
  />

  <div className="bg-white p-4 sm:p-6">

    <h3 className="mt-0.5 text-lg text-gray-900">Barbell Upright Row</h3>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li> Take a double overhand roughly shoulder width grip.</li>
      <br></br>
      <li>Pull your elbows straight up the ceiling. Aim to get the bar to chin level or slightly higher.</li>
      <br></br>
      
    </ol>
    
    {/* <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      
    </p> */}
  </div>
      </article>
      </div>

      
      
    </div>
  )
}

export default chest