import React from 'react'
import './page.css'


function Glutes() {
  return (
    <div className="workout-container">
   <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
        alt=""
        src="https://gymvisual.com/img/p/2/0/2/6/8/20268.gif"
        className="w-full h-full object-cover"
        />

  <div className="bg-white p-4 sm:p-6">
    <a href="#">
      <h3 className="mt-0.5 text-lg text-gray-900">Barbell Box Squat</h3>
    </a>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li>Stand with your feet shoulder-width apart. Maintain the natural arch in your back, squeezing your shoulder blades and raising your chest.</li>
      <br></br>
      <li>Grip the bar across your shoulders and support it on your upper back. Unwrack the bar by straightening your legs, and take a step back</li>
      <br></br>
      <li>Bend your knees as you lower the weight without altering the form of your back until your hips are below your knees.</li>
    </ol>
  </div>
      </article></div>
    
      <div className='workout'>
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img
    alt=""
    src="https://gymvisual.com/img/p/1/0/2/8/3/10283.gif"
    className="h-full w-full object-cover"
  />

  <div className="bg-white p-4 sm:p-6">

    <h3 className="mt-0.5 text-lg text-gray-900">Dumbbell Goblet Squat</h3>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li> Hold the weight tucked into your upper chest area, keeping your elbows in. Your feet should be slightly wider than shoulder width.</li>
      <br></br>
      <li>Sink down into the squat, keeping your elbows inside the track of your knees.</li>
      <br></br>
      <li>Push through your heels while keeping your chest up and return to starting position.</li>
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
        src="https://gymvisual.com/img/p/4/8/5/4/4854.gif"
        className="w-full h-full object-cover"
        />

  <div className="bg-white p-4 sm:p-6">
    <a href="#">
      <h3 className="mt-0.5 text-lg text-gray-900">Barbell Stiff Leg Deadlifts</h3>
    </a>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li>Stand with a barbell at your shins with your feet shoulder width apart. </li>
      <br></br>
      <li>Bend forward at your hips and keep your knees as fully extended as possible</li>
      <br></br>
      <li>Grab the barbell and then extend your hips while maintaining a straight back.</li>
    </ol>
  </div>
      </article></div>
      <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
        alt=""
        src="https://www.inspireusafoundation.org/wp-content/uploads/2022/09/barbell-hip-thrust.gif"
        className="w-full h-full object-cover"
        />

  <div className="bg-white p-4 sm:p-6">
    <a href="#">
      <h3 className="mt-0.5 text-lg text-gray-900">Barbell Hip Thrust</h3>
    </a>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li> Sit on the ground with a bench behind you. Have the barbell over your legs just above your hips.</li>
      <br></br>
      <li>Lean back against the bench so that your shoulders are resting upon it, stretch your arms out to either side using the bench as support.</li>
      <br></br>
      <li>Raise the weight by driving through your feet and extending your hips upwards. Support the weight with your shoulders and feet.</li>
    </ol>
  </div>
      </article></div>

    
      
     
    </div>
  )
}

export default Glutes