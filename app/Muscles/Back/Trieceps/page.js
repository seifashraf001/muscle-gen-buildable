import React from 'react';
import './page.css';

function Trieceps() {
  return (
    <div className="workout-container">
      <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://gymvisual.com/img/p/5/9/1/5/5915.gif"
            className="w-full h-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">Cable Rope Pushdown</h3>
            </a>

            <ol className='mt-2 text-sm text-gray-500 pl-2'>
              <li> The cable should be set all the way at the top of the machine.</li>
              <br></br>
              <li>Make sure to keep your upper arm glued at your side. Extend your elbows until you feel your triceps contract.</li>
              <br></br>
              <li>be set all the way at the top of the machine.</li>
            </ol>
          </div>
        </article>
      </div>
      <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://gymvisual.com/img/p/1/0/0/6/1/10061.gif"
            className="w-full h-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">Barbell Close Grip Bench Press</h3>
            </a>

            <ol className='mt-2 text-sm text-gray-500 pl-2'>
              <li> Lay flat on the bench with your feet on the ground. With a narrow grip on the bar, straighten your arms</li>
              <br></br>
              <li>Lower the bar to your lower-mid chest </li>
              <br></br>
              <li>Slowly raise the bar until you&apos;ve locked your elbows.</li>
            </ol>
          </div>
        </article>
      </div>
      <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://gymvisual.com/img/p/2/1/5/4/3/21543.gif"
            className="w-full h-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">Dumbbell Skullcrusher</h3>
            </a>

            <ol className='mt-2 text-sm text-gray-500 pl-2'>
              <li>Lay flat on the floor or a bench with your fists extended to the ceiling and a neutral grip. </li>
              <br></br>
              <li> Break at the elbows until your fists are by your temples. Then extend your elbows and flex your triceps at the top.</li>
              <br></br>
              <li> Break at the elbows until your fists are by your temples</li>
            </ol>
          </div>
        </article>
      </div>
      <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://gymvisual.com/img/p/6/6/6/2/6662.gif"
            className="w-full h-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">Bench Dips</h3>
            </a>

            <ol className='mt-2 text-sm text-gray-500 pl-2'>
              <li>Grip the edge of the bench with your hands, Keep your feet together and legs straight. </li>
              <br></br>
              <li>Lower your body straight down.</li>
              <br></br>
              <li>Slowly press back up to the starting point.</li>
            </ol>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Trieceps;
