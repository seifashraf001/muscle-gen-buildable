import React from 'react';
import './page.css';

function Hamstrings() {
  return (
    <div className="workout-container">
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
              <li> Stand with a barbell at your shins with your feet shoulder width apart.</li>
              <br></br>
              <li> Bend forward at your hips and keep your knees as fully extended as possible.</li>
              <br></br>
              <li>Grab the barbell and then extend your hips while maintaining a straight back</li>
            </ol>
          </div>
        </article>
      </div>
      <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://gymvisual.com/img/p/2/0/8/9/7/20897.gif"
            className="w-full h-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">Glute Ham Raise</h3>
            </a>

            <ol className='mt-2 text-sm text-gray-500 pl-2'>
              <li> Position yourself on a glute ham raise machine or find a suitable substitute like a stability ball or bench.</li>
              <br></br>
              <li>Adjust the equipment to fit your body by setting the footplate at an appropriate height and making sure your feet are securely anchored. </li>
              <br></br>
              <li> Begin the movement by slowly lowering your upper body towards the ground while keeping your torso and legs aligned.</li>
            </ol>
          </div>
        </article>
      </div>
      <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://gymvisual.com/img/p/1/0/4/8/2/10482.gif"
            className="w-full h-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">Machine Hamstring Curl</h3>
            </a>

            <ol className='mt-2 text-sm text-gray-500 pl-2'>
              <li>Lay down on the machine, placing your legs beneath the padded lever. Position your legs so that the padded lever is below your calve muscles. </li>
              <br></br>
              <li>Support yourself by grabbing the side handles of the machine, and slowly raise the weight with your legs, toes pointed straight.</li>
              <br></br>
              <li>Pause at the apex of the motion, then slowly return to starting position.</li>
            </ol>
          </div>
        </article>
      </div>
      <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://gymvisual.com/img/p/4/7/7/5/4775.gif"
            className="w-full h-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">Barbell Low Bar Good Morning</h3>
            </a>

            <ol className='mt-2 text-sm text-gray-500 pl-2'>
              <li>Place the bar between your traps and rear delts. Pull your shoulder blades back to give the bar a shelf to sit on. </li>
              <br></br>
              <li>Push your hips back until you feel a stretch in your hamstrings. This means you&apos;re nearing the end of your Range of Motion without rounding your spine.</li>
              <br></br>
              <li>When you feel the stretch push your hips forward until you&apos;re in a standing position.</li>
            </ol>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Hamstrings;
