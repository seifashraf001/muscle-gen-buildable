'use client'
import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './page.css'

function CalorieCalculator() {
  const [age, setAge] = useState('');
  const [ageError, setAgeError] = useState('');

  const [gender, setGender] = useState('male');

  const [weight, setWeight] = useState('');
  const [weightError, setWeightError] = useState('');

  const [height, setHeight] = useState('');
  const [heightError, setHeightError] = useState('');


  const [totalCalories, setTotalCalories] = useState('');
  const [BMI, setBMI] = useState('');
  const [fatLossCalories, setFatLossCalories] = useState('');
  const [muscleGainCalories, setMuscleGainCalories] = useState('');


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');
  const [activity, setActivity] = useState('1');
  const [ activityCalories,setActivityCalories] = useState('');
  const chartRef = useRef(null);
  
  useEffect(() => {
    const ctx = document.getElementById('bmiChart')?.getContext('2d');
    if (ctx && BMI) {
      if (chartRef.current) {
        // Destroy existing chart
        chartRef.current.destroy();
      }
      const bmiChartData = {
        labels: ['Your BMI'],
        datasets: [
          {
            label: 'BMI',
            data: [BMI],
            backgroundColor: getColorBasedOnBMI(BMI),
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      };

      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: bmiChartData,
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    }
  }, [BMI]);

  const handleSubmit = (e) => {
    e.preventDefault();
    validateInputs();
    calculateCalories();
    calculateBMI();
    
  };


  const validateInputs = () => {
    let ageError = '';
    let weightError = '';
    let heightError = '';
    let hasError = false;
  
    if (!age || age > 80 || age < 15) {
      ageError = 'Please enter a valid age between 15 and 80.';
      hasError = true;
    }
  
    if (!weight || weight > 200 || weight < 30) {
      weightError = 'Please enter a valid weight between 30 and 200 kilograms.';
      hasError = true;
    }
  
    if (!height || height > 280 || height < 90) {
      heightError = 'Please enter a valid height between 90 and 280 centimeters.';
      hasError = true;
    }
  
    setAgeError(ageError);
    setWeightError(weightError);
    setHeightError(heightError);
  
    if (!hasError) {
      calculateCalories();
      calculateBMI();
    }
  };


  const calculateCalories = () => {

    setLoading(true);
    if (age === '' || weight === '' || height === '' || age > 80 || age < 15 || weight > 200 || weight < 30 || height > 280 || height < 90) {
      setError('Please make sure the values you entered are correct');
      setLoading(false);
      setTotalCalories('');
      setBMI('');
      setStatus('');
    } else {
      const baseCaloriesMale = 66.5 + (13.75 * parseFloat(weight)) + (5.003 * parseFloat(height)) - (6.755 * parseFloat(age));
      const baseCaloriesFemale = 655 + (9.563 * parseFloat(weight)) + (1.850 * parseFloat(height)) - (4.676 * parseFloat(age));
  
      const maintainCaloriesMale = Math.round(baseCaloriesMale * activityFactors[activity]);
      const maintainCaloriesFemale = Math.round(baseCaloriesFemale * activityFactors[activity]);
  
      const fatLossCaloriesMale = Math.round(maintainCaloriesMale * 0.8);
      const fatLossCaloriesFemale = Math.round(maintainCaloriesFemale * 0.8);
  
      const muscleGainCaloriesMale = Math.round(maintainCaloriesMale * 1.1);
      const muscleGainCaloriesFemale = Math.round(maintainCaloriesFemale * 1.1);
  
      setTotalCalories(gender === 'male' ? maintainCaloriesMale : maintainCaloriesFemale);
      setFatLossCalories(gender === 'male' ? fatLossCaloriesMale : fatLossCaloriesFemale);
      setMuscleGainCalories(gender === 'male' ? muscleGainCaloriesMale : muscleGainCaloriesFemale);
      setError('');
    }
  };
  
  

  const calculateBMI = () => {
    const weightBMI = parseFloat(weight);
    const heightBMI = parseFloat(height) / 100;

    if (isNaN(weightBMI) || isNaN(heightBMI) || weightBMI <= 0 || heightBMI <= 0) {
      setBMI('');
      setStatus('Please enter valid weight and height.');
    } else {
      const bmiValue = Math.round(weightBMI / (heightBMI * heightBMI));
      setBMI(bmiValue);

      if (bmiValue < 18.5) {
        setStatus('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setStatus('Normal weight');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setStatus('Overweight');
      } else {
        setStatus('Obese');
      }
    }
  };

  
  function getColorBasedOnBMI(bmi) {
    if (bmi < 18.5) {
      return 'lightcoral'; // Underweight
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'lightgreen'; // Normal weight
    } else if (bmi >= 25 && bmi < 30) {
      return 'orange'; // Overweight
    } else {
      return 'red'; // Obese
    }
  }
  

  const handleReset = () => {
    setAge('');
    setGender('male');
    setWeight('');
    setHeight('');
    setActivity('1');
    setTotalCalories('');
    setBMI('');
    setStatus('');
    setError('');
  };

  const activityFactors = {
    '1': 1.2,
    '2': 1.375,
    '3': 1.55,
    '4': 1.725,
    '5': 1.9,
  };

  return (
    <section className='bg-black'>
          <div className="container mx-auto mt-10 bg-black">
      <div className="max-w-md mx-auto bg-black">
        <div className="content bg-black shadow-md rounded px-8 pt-6 pb-10 mb-4">
          <h1 className="antialiased font-semibold relative text-center text-3xl bg-gradient-to-r from-red-600 via-red-500 to-orange-400 text-transparent bg-clip-text"> Calorie Calculator </h1>


          <form onSubmit={handleSubmit}>
            
          

            <div className="mb-4">
              <label htmlFor="age" className="block text-white text-sm font-bold mb-2">Age</label>
              <input type="number" id="age" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Ages 15-80" value={age} onChange={(e) => setAge(e.target.value)} />
              {ageError && <p className="text-red-500 text-xs italic">{ageError}</p>}
            </div>


            <div className="mb-4">
              <label htmlFor="gender" className="block text-white text-sm font-bold mb-2">Gender</label>
              <select id="gender" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>


            <div className="mb-4">
              <label htmlFor="weight" className="block text-white text-sm font-bold mb-2">Weight (kg)</label>
              <input type="number" id="weight" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="In kilograms" value={weight} onChange={(e) => setWeight(e.target.value)} />
              {weightError && <p className="text-red-500 text-xs italic">{weightError}</p>}

            </div>


            <div className="mb-4">
              <label htmlFor="height" className="block text-white text-sm font-bold mb-2">Height (cm)</label>
              <input type="number" id="height" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="In centimeters" value={height} onChange={(e) => setHeight(e.target.value)} />
              {heightError && <p className="text-red-500 text-xs italic">{heightError}</p>}

            </div>


            <div className="mb-4">
              <label htmlFor="activity" className="block text-white text-sm font-bold mb-2">Activity</label>
              <select id="activity" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={activity} onChange={(e) => setActivity(e.target.value)}>
                <option value="1">Sedentary (little or no exercise)</option>
                <option value="2">Lightly active (light exercise/sports 1-3 days/week)</option>
                <option value="3">Moderately active (moderate exercise/sports 3-5 days/week)</option>
                <option value="4">Very active (hard exercise/sports 6-7 days a week)</option>
                <option value="5">Extra active (very hard exercise/sports & physical job or 2x training)</option>
              </select>
            </div>


            <div className="mb-6">
              <button type="submit" className="bg-gradient-to-r from-red-900 via-red-700 to-orange-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Calculate</button>
            </div>

            
          </form>




          <div id="results" className="pt-4 text-white" style={{ display: totalCalories ? 'block' : 'none' }}>
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">

                  <tr>
                    <th scope="col" className="px-3 py-4">goal</th>
                    <th scope="col" className="px-3 py-4">Maintain Weight</th>
                    <th scope="col" className="px-3 py-4">Weight Loss</th>
                    <th scope="col" className="px-3 py-4">Muscle Gain</th>
                  </tr>
                 

                </thead>
                <tbody>

                  <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-4 py-4 font-medium">calories/ <br></br>day</td>
                    <td className="whitespace-nowrap px-4 py-10">{totalCalories}</td>
                    <td className="whitespace-nowrap px-4 py-4">{fatLossCalories}</td>
                    <td className="whitespace-nowrap px-4 py-4">{muscleGainCalories}</td>
                  </tr>
                 
                  
                </tbody>
              </table>
            






            {BMI && (
              <div className="bmi-chart-container mt-10">
                <h2>BMI  ({BMI} )</h2>
                <canvas id="bmiChart" width="400" height="200"></canvas>
                <p className="mt-4">Status: {status}</p> 
              </div>
            )}


          </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};



  

export default CalorieCalculator;

