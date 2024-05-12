import React from 'react'
import './page.css'


function chest() {
  return (
    <div className="workout-container">
      <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
        alt=""
        src="https://fitnessprogramer.com/wp-content/uploads/2022/07/Cross-Crunch.gif"
        className="w-full h-full object-cover"
        />

  <div className="bg-white p-4 sm:p-6">
    <a href="#">
      <h3 className="mt-0.5 text-lg text-gray-900">CROSS CRUNCH</h3>
    </a>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li>Press your hand into the ground and pick up your hip off the ground.</li>
      <br></br>
      <li>Open your chest and maintain this position for the allotted amount of time</li>
      <br></br>
      <li>Open your chest and maintain </li>
    </ol>
  </div>
      </article></div>

      <div className='workout'>
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img
    alt=""
    src="https://fitnessprogramer.com/wp-content/uploads/2021/02/plank.gif"
    className="h-full w-full object-cover"
  />

  <div className="bg-white p-4 sm:p-6">

    <h3 className="mt-0.5 text-lg text-gray-900"> Plank</h3>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li> Press your elbow into the floor.</li>
      <br></br>
      <li>    Pick your hips up off the ground and maintain this position for the allotted amount of time.</li>
      <br></br>
      <li>Make sure you do not let your chest fall forward or backward.</li>
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
        src="https://gymvisual.com/img/p/5/2/6/8/5268.gif"
        className="h-full w-full object-cover"
      />

        <div className="bg-white p-4 sm:p-6">

    <h3 className="mt-0.5 text-lg text-gray-900">Kettlebell Windmill</h3>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li>Stand with feet slightly wider than shoulder width apart. Hold the kettlebell in one hand and extend your arm above your head. </li>
      <br></br>
      <li>Keeping your legs straight and the kettlebell above your head, lower the relaxed arm towards the ground, twisting your body towards the side of the raised arm.</li>
      <br></br>
      <li>    Return to the starting potion, tilt your pelvis forward and repeat.</li>
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
    src="https://gymvisual.com/img/p/2/1/5/4/8/21548.gif"
    className="h-full w-full object-cover"
  />

  <div className="bg-white p-4 sm:p-6">

    <h3 className="mt-0.5 text-lg text-gray-900">Dumbbell Russian Twist</h3>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li>Sit on the floor and flex your knees and hips to a 90 degree angle. </li>
      <br></br>
      <li>    Your feet should be hovering off the ground. (If that is too hard start with heels on the floor)</li>
      <br></br>
      <li>    Rotate your upper spine to engage your obliques.</li>
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