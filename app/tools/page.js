'use client'
import React, { useState, useEffect  } from 'react';
import './page.css'
// import axios from 'axios';

function CalorieCalculator() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activity, setActivity] = useState('1');
  const [totalCalories, setTotalCalories] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [BMI, setBMI] = useState('');
  const [status, setStatus] = useState('');
  const [fatLossCalories, setFatLossCalories] = useState('');
  const [muscleGainCalories, setMuscleGainCalories] = useState('');
  const [ activityCalories,setActivityCalories] = useState('')
  

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://account.snatchbot.me/script.js';
    script.async = true;
    script.onload = () => {
      window.sntchChat.Init(395908);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateCalories();
    calculateBMI();
  };

  const validateInputs = () => {
    let hasError = false;

    if (!age || age > 80 || age < 15) {
      setAgeError('Please enter a valid age between 15 and 80.');
      hasError = true;
    } else {
      setAgeError('');
    }

    if (!weight || weight > 200 || weight < 30) {
      setWeightError('Please enter a valid weight between 30 and 200 kilograms.');
      hasError = true;
    } else {
      setWeightError('');
    }

    if (!height || height > 280 || height < 90) {
      setHeightError('Please enter a valid height between 90 and 280 centimeters.');
      hasError = true;
    } else {
      setHeightError('');
    }

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
    <div className="container mx-auto mt-10">
      <div className="max-w-md mx-auto">
        <div className="content bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-white text-3xl font-bold text-center mb-4">Calorie Calculator </h1>


          <form onSubmit={handleSubmit}>
            
        
            <div className="mb-4">
              <label htmlFor="age" className="block text-white text-sm font-bold mb-2">Age</label>
              <input type="number" id="age" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Ages 15-80" value={age} onChange={(e) => setAge(e.target.value)} />
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
            </div>


            <div className="mb-4">
              <label htmlFor="height" className="block text-white text-sm font-bold mb-2">Height (cm)</label>
              <input type="number" id="height" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="In centimeters" value={height} onChange={(e) => setHeight(e.target.value)} />
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
                    <th scope="col" className="px-6 py-4">BMI</th>
                    <th scope="col" className="px-6 py-4">Maintain Weight</th>
                    <th scope="col" className="px-6 py-4">Weight Loss</th>
                    <th scope="col" className="px-6 py-4">Muscle Gain</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{BMI}</td>
                    <td className="whitespace-nowrap px-6 py-4">{totalCalories}</td>
                    <td className="whitespace-nowrap px-6 py-4">{fatLossCalories}</td>
                    <td className="whitespace-nowrap px-6 py-4">{muscleGainCalories}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            


            {error && <div className="text-red-500 text-xs italic">{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalorieCalculator;

