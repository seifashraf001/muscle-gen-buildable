import React from 'react';
import './page.css';

function Chest() {
  return (
    <div className="workout-container">
      <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://gymvisual.com/img/p/6/5/9/2/6592.gif"
            className="w-full h-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">Chin Up</h3>
            </a>

            <ol className='mt-2 text-sm text-gray-500 pl-2'>
              <li> Grab the bar shoulder width apart with a supinated grip (palms facing you)</li>
              <br></br>
              <li>With your body hanging and arms fully extended, pull yourself up until your chin is past the bar.</li>
              <br></br>
              <li>Slowly return to starting position. Repeat.</li>
            </ol>
          </div>
        </article>
      </div>

      <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://gymvisual.com/img/p/2/1/8/3/5/21835.gif"
            className="h-full w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <h3 className="mt-0.5 text-lg text-gray-900">Cable Bayesian Curl</h3>

            <ol className='mt-2 text-sm text-gray-500 pl-2'>
              <li>Use a handle attachment. The cable should be set all the way to the bottom of the machine.</li>
              <br></br>
              <li>Face away from the cable machine.</li>
              <br></br>
              <li>Stagger your stance so you have a better base of support. Face your palm forward. Flex at the elbow and extend.</li>
            </ol>
          </div>
        </article>
      </div>

      <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://gymvisual.com/img/p/5/9/1/6/5916.gif"
            className="h-full w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <h3 className="mt-0.5 text-lg text-gray-900">Dumbbell Curl</h3>

            <ol className='mt-2 text-sm text-gray-500 pl-2'>
              <li> Stand up straight with a dumbbell in each hand at arm&apos;s length.</li>
              <br></br>
              <li>Raise one dumbbell and twist your forearm until it is vertical and your palm faces the shoulder.</li>
              <br></br>
              <li>Lower to original position and repeat with opposite arm</li>
            </ol>
          </div>
        </article>
      </div>

      <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://gymvisual.com/img/p/5/0/4/6/5046.gif"
            className="h-full w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <h3 className="mt-0.5 text-lg text-gray-900">Dumbbell Hammer Curls </h3>

            <ol className='mt-2 text-sm text-gray-500 pl-2'>
              <li> Hold the dumbbells with a neutral grip (thumbs facing the ceiling).</li>
              <br></br>
              <li>    Slowly lift the dumbbell up to chest height</li>
              <br></br>
              <li>Return to starting position and repeat.</li>
            </ol>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Chest;
