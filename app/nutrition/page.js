'use client'
import Image from 'next/image';
import './page.css'
import React, { useState, useEffect } from 'react';

const foods = [
  { id: 1, name: 'Grilled Chicken Salad', calories: 350 , image: './Food/Grilled Chicken Salad.jpeg'  },
  { id: 2, name: 'Quinoa & Avocado Bowl', calories: 400, protein: 25, carbs: 30, fats: 18 , image:'./Food/Quinoa & Avocado Bowl.jpeg'},
  { id: 3, name: 'Salmon with Asparagus', calories: 380, protein: 35, carbs: 10, fats: 22,image:'./Food/Salmon with Asparagus.jpeg' },
  { id: 4, name: 'Vegetable Stir-Fry', calories: 320, protein: 15, carbs: 40, fats: 12 ,image:'./Food/Vegetable Stir-Fry.jpeg' },
  { id: 5, name: 'Greek Yogurt Parfait', calories: 250, protein: 20, carbs: 30, fats: 8 ,image:'./Food/Greek Yogurt Parfait.jpeg' },
  { id: 6, name: 'Egg White Omelette', calories: 300, protein: 25, carbs: 5, fats: 18 ,image:'./Food/Egg White Omelette.jpeg '},
  { id: 7, name: 'Tofu and Veggie Rice Bowl', calories: 320, protein: 20, carbs: 45, fats: 10 ,image:'./Food/Tofu and Veggie Rice Bowl.jpeg'},
  { id: 8, name: 'Mixed Bean Salad', calories: 280, protein: 18, carbs: 35, fats: 10 ,image:'./Food/Mixed Bean Salad.jpeg '},
  { id: 9, name: 'Pasta Primavera', calories: 380, protein: 12, carbs: 55, fats: 15  ,image:'./Food/Pasta Primavera.jpeg'},
  { id: 10, name: 'Shrimp and Quinoa Salad', calories: 320, protein: 28, carbs: 25, fats: 14 ,image:'./Food/Shrimp and Quinoa Salad.jpeg' },
  { id: 11, name: 'Hummus and Veggie Wrap', calories: 280, protein: 10, carbs: 30, fats: 15  ,image:'./Food/Hummus and Veggie Wrap.jpeg'},
  { id: 12, name: 'Turkey and Spinach Sandwich', calories: 350, protein: 22, carbs: 30, fats: 16  ,image:'./Food/Turkey and Spinach Sandwich.jpeg'},
  { id: 13, name: 'Roasted Vegetable Bowl', calories: 300, protein: 15, carbs: 40, fats: 12 ,image:'./Food/Roasted Vegetable Bowl.jpeg '},
  { id: 14, name: 'Black Bean and Corn Salad', calories: 260, protein: 16, carbs: 30, fats: 10 ,image:'./Food/Black Bean and Corn Salad.jpeg'},
  { id: 15, name: 'Grilled Fish Tacos', calories: 380, protein: 25, carbs: 35, fats: 18 ,image:'./Food/Grilled Fish Tacos.jpeg'},
  { id: 16, name: 'Mango Chicken Salad', calories: 320, protein: 25, carbs: 20, fats: 15, image: './Food/Mango Chicken Salad.jpeg' },
  { id: 17, name: 'Vegetarian Buddha Bowl', calories: 380, protein: 18, carbs: 45, fats: 12, image: './Food/Vegetarian Buddha Bowl.jpeg' },
  { id: 18, name: 'Teriyaki Salmon Bowl', calories: 420, protein: 35, carbs: 30, fats: 20, image: './Food/Teriyaki Salmon Bowl.jpeg' },
  { id: 19, name: 'Mediterranean Quinoa Salad', calories: 350, protein: 20, carbs: 40, fats: 16, image: './Food/Mediterranean Quinoa Salad.jpeg' },
  { id: 20, name: 'Avocado Toast with Poached Eggs', calories: 300, protein: 15, carbs: 25, fats: 18, image: './Food/Avocado Toast with Poached Eggs.jpeg' },
  { id: 21, name: 'Chicken Tikka Masala', calories: 450, protein: 30, carbs: 35, fats: 22, image: './Food/Chicken Tikka Masal.jpeg' },
  { id: 22, name: 'Spinach and Mushroom Omelette', calories: 280, protein: 18, carbs: 10, fats: 20, image: './Food/Spinach and Mushroom Omelette.jpeg' },
  { id: 23, name: 'Grilled Vegetable Skewers', calories: 220, protein: 8, carbs: 30, fats: 12, image: './Food/Grilled Vegetable Skewers.jpeg' },
  { id: 24, name: 'Salmon with Asparagus', calories: 380, protein: 35, carbs: 10, fats: 22,image:'./Food/Salmon with Asparagus.jpeg' },
];

const CalorieCalculator = () => {
  const [calories, setCalories] = useState('');
  const [goal, setGoal] = useState('');
  const [selectedFood, setSelectedFood] = useState(null);
  const [grams, setGrams] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFoodEntries, setSelectedFoodEntries] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [calorieDifference, setCalorieDifference] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    calculateTotalCalories();
    calculateCalorieDifference();
  }, [selectedFoodEntries, calories, goal]);

  const calculateTotalCalories = () => {
    let currentCalories = 0;

    selectedFoodEntries.forEach((entry) => {
      currentCalories += entry.grams * (entry.food.calories / 100); // Divide calories by 100 to get calories per gram
    });

    setTotalCalories(currentCalories);
  };

  const calculateCalorieDifference = () => {
    if (calories && goal) {
      const goalCalories = goal === 'loseWeight' ? calories : calories * 1.2; // Adjust calorie intake based on goal
      const currentCalories = totalCalories;
      setCalorieDifference(goalCalories - currentCalories);
    }
  };

  const handleAddFood = () => {
    if (!selectedFood || !grams || isNaN(grams) || grams <= 0) {
      setError('Please select a food item and enter a valid number of grams.');
      return;
    }

    const entry = { food: selectedFood, grams: parseInt(grams) };
    setSelectedFoodEntries([...selectedFoodEntries, entry]);
    setGrams('');
    setSelectedFood(null);
    setError('');
  };

  const handleRemoveFood = (index) => {
    const updatedEntries = [...selectedFoodEntries];
    updatedEntries.splice(index, 1);
    setSelectedFoodEntries(updatedEntries);
  };

  const handleCaloriesChange = (e) => {
    setCalories(e.target.value);
    setError(''); // Clear any previous errors when calories are updated
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 text-white bg-black">
      <h1 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-red-900 via-red-500 to-orange-500 bg-clip-text  text-transparent sm:text-5xl">Meals Calories</h1>
      <div class='flex gap-6 justify-center flex-wrap max-sm:gap-2'>
      <div class="flex flex-col sm:flex-row items-center">
        <input
          type="number"
          placeholder="Enter your daily calorie intake"
          value={calories}
          onChange={handleCaloriesChange}
          class="p-2 border border-none rounded bg-white text-black hover:bg-gray-200 transition"
        />
      </div>
      <div class="flex flex-col sm:flex-row items-center">
        <select
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          class="p-2 border border-gray-300 rounded white text-black hover:bg-gray-200 transition"
        >
          <option value="">Select goal</option>
          <option value="loseWeight">Lose Weight</option>
          <option value="gainWeight">Gain Weight</option>
        </select>
      </div>
  <div class="flex flex-col sm:flex-row items-center">
    <div className='flex max-md:justify-center'>
    <input type="text" placeholder="Search..." value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-l-lg border-gray-300 text-black focus:outline-none w-[50%]"
          />
    <button className="bg-primary2 text-white px-4 py-2  rounded-r-lg hover:opacity-90" onClick={() => setSearchTerm('')}> Clear </button>
    </div>
  </div>
</div>

<div className='flex justify-center mt-12'>
<div class='w-full md:w-[30%] overflow-x-auto'>
  <table class="min-w-full text-left text-sm font-light">
    <thead class="border-b font-medium dark:border-neutral-500">
      <tr>
        <th scope="col" class="px-3 py-4">Selected Food</th>
        <th scope="col" class="px-3 py-4">Total Calories</th>
        <th scope="col" class="px-3 py-4">Remaining Calories</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
        <td class="whitespace-nowrap px-4 py-5">
          <ul style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            {selectedFoodEntries.map((entry, index) => (
              <li key={index} class="mb-2 md:mb-0 md:mr-4" style={{ flex: '1 1 auto' }}>
                <button onClick={() => handleRemoveFood(index)}>
                  <Image src='/cross.png' class='mr-2' width={18} height={18} />
                </button>
                <span>{entry.food.name} - {entry.grams} grams</span>
              </li>
            ))}
          </ul>
        </td>
        <td class="whitespace-nowrap px-4">
          {totalCalories > 0 && (
            <p>{totalCalories}</p>
          )}
        </td>
        <td class="whitespace-nowrap px-4 py-4">
          {calorieDifference !== 0 && (
            <p>{calorieDifference}</p>
          )}
        </td>
      </tr>
    </tbody>
  </table>
</div>


</div>
<div >
      {error && <p className="text-red-500">{error}</p>}
      </div>

      <h2 className="text-2xl font-semibold text-center my-5">Meals</h2>
      <div className="mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {filteredFoods.map((food) => (
            <div key={food.id} className="bg-black content rounded-lg overflow-hidden">
              <img src={food.image} alt={food.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{food.name}</h3>
                <p>Calories: {food.calories}</p>
                {selectedFood && selectedFood.id === food.id && (
                  <div className="flex items-center mt-2">
                    <input
                      type="number"
                      placeholder="Enter grams"
                      value={grams}
                      onChange={(e) => setGrams(e.target.value)}
                      className="p-2 border border-gray-300 rounded bg-white text-black w-[50%] max-md:placeholder:text-[0.8rem] "
                    />
                    <button onClick={handleAddFood} className="ml-2 px-2 py-2 bg-green-700 text-white rounded hover:opacity-90 transition max-sm:text-sm max-sm:px-2 max-sm:p-2">
                      Add
                    </button>
                  </div>
                )}
                {!selectedFood && (
                  <button onClick={() => setSelectedFood(food)} className="mt-2 px-4 py-2 bg-red-600 text-white rounded">
                    Select
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CalorieCalculator;


