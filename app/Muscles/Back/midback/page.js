import React from 'react';
import './page.css'
function MidBack() {
  return (
    <div className="workout-container">
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
              <li>Brace your off arm against something stable (bench, box). Stagger your stance so your leg on the side of your working arm is back. </li>
              <br></br>
              <li>Try to get your torso to parallel with the ground. That will extend your range of motion.</li>
              <br></br>
              <li>Let your arm hang freely and then pull your elbow back. Imagine you have got a tennis ball in your armpit and squeeze it each rep.</li>
            </ol>
          </div>
        </article>
      </div>
      <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://homeworkouts.org/wp-content/uploads/anim-pull-ups.gif"
            className="w-full h-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">Pull Ups</h3>
            </a>

            <ol className='mt-2 text-sm text-gray-500 pl-2'>
              <li>Grasp the bar with an overhand grip, arms and shoulders fully extended</li>
              <br></br>
              <li>Pull your body up until your chin is above the bar</li>
              <br></br>
              <li>Lower your body back to starting position</li>
            </ol>
          </div>
        </article>
      </div>
      <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Deadlift.gif"
            className="w-full h-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900"> Barbell Deadlift</h3>
            </a>

            <ol className='mt-2 text-sm text-gray-500 pl-2'>
              <li>    Stand with your mid-foot under the bar and grip the bar with your hands, about a shoulder width apart.</li>
              <br></br>
              <li>    Bend your knees, then lift the bar by straightening your back. It is important to keep your back straight. </li>
              <br></br>
              <li>    Stand to your full height and hold.</li>
            </ol>
          </div>
        </article>
      </div>
      <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Decline-Shrug.gif"
            className="w-full h-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">Kettlebell Incline Shrug</h3>
            </a>

            <ol className='mt-2 text-sm text-gray-500 pl-2'>
              <li>Leaning across the back section of the bench, with feet firmly on the floor and with arms hanging to the sides.</li>
              <br></br>
              <li>Holding the kettlebell in both hands engage your shoulder blades, as if you are trying to touch them together. Release the shrug. </li>
              <br></br>
              <li></li>
            </ol>
          </div>
        </article>
      </div>
    </div>
  );
}

export default MidBack;
