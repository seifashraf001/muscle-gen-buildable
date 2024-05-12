import React from 'react'
import './page.css'


function chest() {
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
        src="https://gymvisual.com/img/p/3/2/4/5/4/32454.gif"
        className="h-full w-full object-cover"
      />

        <div className="bg-white p-4 sm:p-6">

    <h3 className="mt-0.5 text-lg text-gray-900">Machine Leg Extension</h3>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li>Sit on the machine with your back against the cushion and adjust the machine you are using so that your knees are at a 90 degree angle at the starting position. </li>
      <br></br>
      <li>Raise the weight by extending your knees outward, then lower your leg to the starting position. Both movements should be done in a slow, controlled motion.</li>
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
    src="https://gymvisual.com/img/p/2/1/6/6/5/21665.gif"
    className="h-full w-full object-cover"
  />

  <div className="bg-white p-4 sm:p-6">

    <h3 className="mt-0.5 text-lg text-gray-900">Barbell Step Up</h3>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li> Begin by standing in front of a sturdy box or bench that is about knee-height, holding a barbell across your upper back and shoulders, using an overhand grip.</li>
      <br></br>
      <li>Place your right foot on the box and push through the heel to lift your body up and onto the box</li>
      <br></br>
      <li>Step back down with your right foot.</li>
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