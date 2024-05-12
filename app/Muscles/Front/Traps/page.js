import React from 'react'
import './page.css'


function Traps() {
  return (
    <div className="workout-container">
      <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
        alt=""
        src="https://gymvisual.com/img/p/4/8/3/1/4831.gif"
        className="w-full h-full object-cover"
        />

  <div className="bg-white p-4 sm:p-6">
    <a href="#">
      <h3 className="mt-0.5 text-lg text-gray-900">Barbell Silverback Shrug</h3>
    </a>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li>Stand with your feet shoulder width apart holding the Barbell with both hands in front just past shoulder width.</li>
      <br></br>
      <li>Bend forward at the hips with a slight bend in your knees, keeping your back straight.</li>
      <br></br>
      <li>Engage your shoulder blades, as if you are trying to touch them together.</li>
    </ol>
  </div>
      </article></div>

      <div className='workout'>
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img
    alt=""
    src="https://gymvisual.com/img/p/1/8/5/9/1/18591.gif"
    className="h-full w-full object-cover"
  />

  <div className="bg-white p-4 sm:p-6">

    <h3 className="mt-0.5 text-lg text-gray-900">Cable 30 Degree Shrug</h3>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li> Use a handle attachment on both sides of crossover. With cable attachment set all the way to the bottom.</li>
      <br></br>
      <li>Grab both handles and make sure you are centered in the machine. Let your arms hang freely.</li>
      <br></br>
      <li>Pull your shoulder blades up and in towards your ears. Let your shoulder blades depress back to the starting position.</li>
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
        src="https://gymvisual.com/img/p/4/8/3/1/4831.gif"
        className="h-full w-full object-cover"
      />

        <div className="bg-white p-4 sm:p-6">

    <h3 className="mt-0.5 text-lg text-gray-900">Dumbbell Shrug</h3>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li>Stand tall with two dumbbells. Pull your shoulder blades up. Give a one second squeeze at the top. </li>
      <br></br>
    
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
    src="https://gymvisual.com/img/p/2/4/7/9/0/24790.gif"
    className="h-full w-full object-cover"
  />

  <div className="bg-white p-4 sm:p-6">

    <h3 className="mt-0.5 text-lg text-gray-900">Barbell Upright Row</h3>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li> Take a double overhand roughly shoulder width grip.</li>
      <br></br>
      <li>Pull your elbows straight up the ceiling. Aim to get the bar to chin level or slightly higher</li>
      <br></br>
      <li></li>
    </ol>
    
    {/* <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      
    </p> */}
  </div>
      </article>
      </div>

      
      
    </div>
  )
}

export default Traps