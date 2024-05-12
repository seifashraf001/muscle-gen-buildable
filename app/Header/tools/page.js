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

  const calculateCalories = () => {
    setLoading(true);
    if (age === '' || weight === '' || height === '' || age > 80 || age < 15 || weight >200 || weight <30 || height > 280 || height < 90 ) {
      setError('Please make sure the values you entered are correct');
      setLoading(false);
      setTotalCalories('');
      setBMI('');
      setStatus('');
    } else {
      let result;
      if (gender === 'male') {
        const baseCalories = 66.5 + (13.75 * parseFloat(weight)) + (5.003 * parseFloat(height)) - (6.755 * parseFloat(age));
        switch (activity) {
          case '1':
            result = Math.round(1.2 * baseCalories);
            break;
          case '2':
            result = Math.round(1.375 * baseCalories);
            break;
          case '3':
            result = Math.round(1.55 * baseCalories);
            break;
          case '4':
            result = Math.round(1.725 * baseCalories);
            break;
          case '5':
            result = Math.round(1.9 * baseCalories);
            break;
          default:
            break;
        }
      } else {
        const baseCalories = 655 + (9.563 * parseFloat(weight)) + (1.850 * parseFloat(height)) - (4.676 * parseFloat(age));
        switch (activity) {
          case '1':
            result = Math.round(1.2 * baseCalories);
            break;
          case '2':
            result = Math.round(1.375 * baseCalories);
            break;
          case '3':
            result = Math.round(1.55 * baseCalories);
            break;
          case '4':
            result = Math.round(1.725 * baseCalories);
            break;
          case '5':
            result = Math.round(1.9 * baseCalories);
            break;
          default:
            break;
        }
      }
      setTotalCalories(result);
      setError('');
      setLoading(false);
    }
  };

  const calculateBMI = () => {
    const weightBMI = parseFloat(weight);
    const heightBMI = parseFloat(height) / 100;

    if (isNaN(weightBMI) || isNaN(heightBMI) || weightBMI <= 0 || heightBMI <= 0) {
      setBMI('');
      setStatus('Please enter valid weight and height.');
      setTotalCalories('');
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


  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-md mx-auto">
        <div className="content bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-white text-3xl font-bold text-center mb-4">Calorie Calculator App</h1>
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
            <h5>Maintain weight</h5>
            <div className="form-group">
              <div className="input-group">
                <input type="number" className="form-control bg-black" id="total-calories" value={totalCalories} disabled />
              </div>
            </div>
            <div className='text-white'>
              <h5>BMI</h5>
              <div className="form-group text-white ">
                <div className="input-group text-white ">
                  <input type="number" className="form-control text-white bg-black" id="bmi" value={BMI} disabled />
                </div>
              </div>
              <p>Status: {status}</p>
            </div>
            {error && <div className="text-red-500 text-xs italic">{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalorieCalculator;
