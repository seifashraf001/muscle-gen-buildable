import React from 'react';
import './page.css';

function Forearms() {
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
            src="https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif"
            className="h-full w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <h3 className="mt-0.5 text-lg text-gray-900">Dumbbell Row Unilateral</h3>

            <ol className='mt-2 text-sm text-gray-500 pl-2'>
              <li> Brace your off arm against something stable (bench, box). Stagger your stance so your leg on the side of your working arm is back.</li>
              <br></br>
              <li>Try to get your torso to parallel with the ground. That will extend your range of motion.</li>
              <br></br>
              <li>Let your arm hang freely and then pull your elbow back. Imagine you&apos;ve got a tennis ball in your armpit and squeeze it each rep.</li>
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
            src="https://gymvisual.com/img/p/5/1/7/0/5170.gif"
            className="h-full w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <h3 className="mt-0.5 text-lg text-gray-900">Dumbbell Reverse Curl</h3>

            <ol className='mt-2 text-sm text-gray-500 pl-2'>
              <li> Grab the dumbbells with a pronated (overhand) grip. You can do this exercise thumbless if it&apos;s more comfortable on your wrists.</li>
              <br></br>
              <li>   Flex at the elbows until your biceps touch your forearms. Try not to let your elbows flair outward.</li>
              <br></br>
              <li>Return to starting position and repeat.</li>
            </ol>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Forearms;
