import React from 'react';
import './page.css';

function Lats() {
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
              <h3 className="mt-0.5 text-lg text-gray-900">Chin Ups</h3>
            </a>

            <ol className='mt-2 text-sm text-gray-500 pl-2'>
              <li>Grab the bar shoulder width apart with a supinated grip (palms facing you) </li>
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
            className="w-full h-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">Dumbbell Row Unilateral</h3>
            </a>

            <ol className='mt-2 text-sm text-gray-500 pl-2'>
              <li> Brace your off arm against something stable (bench, box). Stagger your stance so your leg on the side of your working arm is back.</li>
              <br></br>
              <li>Try to get your torso to parallel with the ground. That will extend your range of motion.</li>
              <br></br>
              <li>Let your arm hang freely and then pull your elbow back. Imagine you&apos;ve got a tennis ball in your armpit and squeeze it each rep. </li>
            </ol>
          </div>
        </article>
      </div>
      <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://gymvisual.com/img/p/1/3/1/4/2/13142.gif"
            className="w-full h-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">Pull Up </h3>
            </a>

            <ol className='mt-2 text-sm text-gray-500 pl-2'>
              <li>Grasp the bar with an overhand grip, arms and shoulders fully extended. </li>
              <br></br>
              <li> Pull your body up until your chin is above the bar.</li>
              <br></br>
              <li>Lower your body back to starting position.</li>
            </ol>
          </div>
        </article>
      </div>
      <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://gymvisual.com/img/p/1/8/4/1/3/18413.gif"
            className="w-full h-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">Cable Bent Over Bar Pullover</h3>
            </a>

            <ol className='mt-2 text-sm text-gray-500 pl-2'>
              <li> You can use any attachment. Cable should be set all the way to the top of the machine.</li>
              <br></br>
              <li>Grab your attachment and walk a few steps back. Push your butt back to where you are leaning forward somewhat. </li>
              <br></br>
              <li>Initiate the movement with your shoulders and not your elbows. Imagine trying to pull the attachment through your thighs at the bottom.</li>
            </ol>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Lats;
