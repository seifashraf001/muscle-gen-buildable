import React from 'react'
import './page.css'


function chest() {
  return (
    <div className="workout-container">
      <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
        alt=""
        src="https://gymvisual.com/img/p/5/3/4/2/5342.gif"
        className="w-full h-full object-cover"
        />

  <div className="bg-white p-4 sm:p-6">
    <a href="#">
      <h3 className="mt-0.5 text-lg text-gray-900">Machine Standing Calf Raises </h3>
    </a>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li>Adjust the machine in accordance with your height and place your shoulders underneath the padded lever.</li>
      <br></br>
      <li>The balls of your feet should be supporting your weight on the calve block, your heels extending off of it.</li>
      <br></br>
      <li>Extend your heels upwards while keeping your knees stationary, and pause at the contracted position.</li>
    </ol>
  </div>
      </article></div>

      <div className='workout'>
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img
    alt=""
    src="https://gymvisual.com/img/p/1/2/5/8/0/12580.gif"
    className="h-full w-full object-cover"
  />

  <div className="bg-white p-4 sm:p-6">

    <h3 className="mt-0.5 text-lg text-gray-900">Machine Seated Calf Raises</h3>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li> Get comfortable on the machine, then place your lower thighs beneath the padded lever. Place your toes and the balls of your feet onto the foot supports.</li>
      <br></br>
      <li>Prevent the weight from slipping forward by gripping the handles, and release the safety bar. Lower the weight until your calves are extended.</li>
      <br></br>
      <li>Push your heels up to lift the padded lever and hold the contracted position, then slowly lower back down to the starting position. Repeat.</li>
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
        src="https://gymvisual.com/img/p/6/6/3/5/6635.gif"
        className="h-full w-full object-cover"
      />

        <div className="bg-white p-4 sm:p-6">

    <h3 className="mt-0.5 text-lg text-gray-900">Barbell Calf Raises</h3>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li>    Place the bar on your back
Start with feet flat on the ground </li>
      <br></br>
      <li>Extend your heels upwards while keeping your knees stationary, and pause at the contracted position.</li>
      <br></br>
      <li>Slowly return to the starting position. Repeat.</li>
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
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0nePZf9ETamZAaWPwdavWN4U08LEBB8IISAkdPFFrm45w9YW0yElh&usqp=CAE&s"
    className="h-full w-full object-cover"
  />

  <div className="bg-white p-4 sm:p-6">

    <h3 className="mt-0.5 text-lg text-gray-900">Calves Stretch Variation One</h3>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li>Place the ball of your foot against the wall with your heel on the ground. Place your hands on the wall in front of your shoulders. </li>
      <br></br>
      <li>Keeping your knee straight, slowly lean towards the wall, pause for a few seconds when you feel the stretch extending through your calf muscle.</li>
      <br></br>
      <li>Return to the starting position, and repeat the stretch with your other leg.</li>
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