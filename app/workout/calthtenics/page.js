import React from 'react';
import './page.css';

function Chest() {
  return (
<div className='flex bg-black w-full justify-center py-11 gap-14 flex-wrap '>
      <div className='rounded-2xl  w-[400px] overflow-hidden shadow-md shadow-white content
      max-sm:w-[400px] max-sm:ml-5 max-sm:mr-5 max-sm:mx-auto
      '>        <img className='h-[300px] w-[600px]'   src='https://fitnessprogramer.com/wp-content/uploads/2022/02/Barbell-Muscle-Snatch.gif' />

        <div className='p-7 text-xl text-white'> 
          <h1 className='font-extrabold mb-5'>MUSCLE SNATCH</h1>

            <hr></hr>

          <div className='mt-4'>
           <ol className='text-gray-200 text-[0.9rem] max-sm:text-[0.8rem]'>
              <li> Establish Your Setup Set up in the starting position of your snatch.</li>
              <br></br>
              <li> Drive With Your Legs Engage your core and push into the floor with your legs.</li>
              <br></br>
              <li>As the barbell approaches your hips, extend your ankles, knees, and hips simultaneously to drive it upward. Do not drop your torso down to catch the bar overhead. Instead, remain in a standing position.</li>
            </ol>
          </div>


        </div>
      </div>

      <div className='rounded-2xl  w-[400px] overflow-hidden shadow-md shadow-white content max-sm:w-[400px] max-sm:ml-5 max-sm:mr-5 max-sm:mx-auto'>
       <img className='h-[300px] w-[600px]' src='https://fitnessprogramer.com/wp-content/uploads/2021/04/Turkish-Get-Up-Squat-style.gif' />

        <div className='p-7 text-xl text-white'> 
          <h1 className='font-extrabold mb-5'>TURKISH GET-UP</h1>

            <hr></hr>

            <div className='mt-4'>
           
           <ol className='text-gray-200 text-[0.9rem] max-sm:text-[0.8rem]'>
           <li> Lie on the floor with your right knee bent and your right foot flat on the ground. Have your left leg straight for the starting position.</li>
              <br></br>
              <li>Hold a kettlebell or dumbbell in your right hand and keep your wrist, elbow, and shoulder in vertical alignment.</li>
              <br></br>
              <li>Engage your abs, take a breath, and raise your torso off the floor, making sure to keep your right arm straight and the kettlebell over your shoulder joint. Push yourself with your left arm until your torso is vertical and you’re in a seated position.</li>
            </ol>

           
          </div>


        </div>
      </div>

      <div className='rounded-2xl  w-[400px] overflow-hidden shadow-md shadow-white content max-sm:w-[400px] max-sm:ml-5 max-sm:mr-5 max-sm:mx-auto'>
        <img className='h-[300px] w-[600px]' src='https://fitnessprogramer.com/wp-content/uploads/2022/02/Rope-Climb.gif' />

        <div className='p-7 text-xl text-white'> 
          <h1 className='font-extrabold mb-5'>LEGLESS ROPE CLIMB</h1>

            <hr></hr>

            <div className='mt-4'>
           
            <ol className='text-gray-200 text-[0.9rem] max-sm:text-[0.8rem]'>
           <li>  Begin by standing facing the rope. Reach up with both hands and grip the rope firmly. Your hands should be about shoulder-width apart, and your palms should face each other.</li>
              <br></br>
              <li> As you lift your legs off the ground, engage your core muscles to create a “hollow body” position</li>
              <br></br>
              <li>Begin the climb by pulling yourself up using your arms and core strength. It’s important to engage your back, shoulders, and arms to initiate the pull.</li>
            </ol>

            
          </div>



        </div>
      </div>

    </div>
  );
}

export default Chest;
