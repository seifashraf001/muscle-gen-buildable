import React from 'react';
import './page.css';

function Abdominals() {
  return (
    <div className="workout-container">
      <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://gymvisual.com/img/p/4/8/0/2/4802.gif"
            className="w-full h-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">Barbell Situp</h3>
            </a>

            <ol className='mt-2 text-sm text-gray-500 pl-2'>
              <li>Hold the bar with a slightly wider than shoulder width grip. Push the bar up toward the ceiling and maintain that elbow extension.</li>
              <br></br>
              <li>Flex your abs and sit-up. Aim to get your torso vertical while maintaining the barbell overhead.</li>
              <br></br>
              <li>Pick your knees up off the ground. Hold in this position with a flat back.</li>
            </ol>
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
              <li>Sit on the floor and flex your knees and hips to a 90 degree angle.</li>
              <br></br>
              <li>Your feet should be hovering off the ground. (If that&apos;s too hard start with heels on the floor)</li>
              <br></br>
              <li>Rotate your upper spine to engage your obliques.</li>
            </ol>
          </div>
        </article>
      </div>

      <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://gymvisual.com/img/p/5/8/5/9/5859.gif"
            className="h-full w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <h3 className="mt-0.5 text-lg text-gray-900">Lying Leg Raise </h3>

            <ol className='mt-2 text-sm text-gray-500 pl-2'>
              <li>Lay on your back with your arms palms down on either side. </li>
              <br></br>
              <li>Slowly raise your legs to a 90° angle, pause at this position, or as high as you can reach your legs, and then slowly lower your legs back down.</li>
              <br></br>
              <li>Duration of these movements should be slow so that you do not utilize momentum, enabling you to get the most out of the exercise.</li>
            </ol>
          </div>
        </article>
      </div>

      <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://gymvisual.com/img/p/2/4/0/0/3/24003.gif"
            className="h-full w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <h3 className="mt-0.5 text-lg text-gray-900">Hand Plank</h3>

            <ol className='mt-2 text-sm text-gray-500 pl-2'>
              <li>Start in a kneeling position with your hands planted on the ground.</li>
              <br></br>
              <li>Pick your knees up off the ground. Hold in this position with a flat back.</li>
              <br></br>
              <li>Hold the bar with a slightly wider than shoulder width grip. Push the bar up toward the ceiling and maintain that elbow extension.</li>
            </ol>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Abdominals;
