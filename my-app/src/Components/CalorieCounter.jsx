import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CalorieCalendar from './CalorieCalendar';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CalorieCounter() {
  const [items, setItems] = useState([]);
  const [food, setFood] = useState('');
  const [calories, setCalories] = useState('');
  const [calorieLog, setCalorieLog] = useState({});
  const [ounces, setOunces] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  const addItem = () => {
    if (food && calories && ounces) {
      const formattedDate = formatDate(selectedDate);
      console.log(formattedDate)
      const newItem = { 
        food, 
        calories: Number(calories), 
        ounces: Number(ounces),
        date: formattedDate 
      };

      setItems([...items, newItem]);
      addCaloriesForSelectedDate(calories);
      setFood('');
      setCalories('');
    }
  };

  const totalCalories = items
  .filter(item => item.date === formatDate(selectedDate))
  .reduce((total, item) => total + item.calories, 0);


  const addCaloriesForSelectedDate = (calories) => {
    const formattedDate = formatDate(selectedDate);
    setCalorieLog({
      ...calorieLog,
      [formattedDate]: (calorieLog[formattedDate] || 0) + Number(calories),
    });
  };  

  const handleOuncesChange = (e) => {
    setOunces(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full px-6 py-4 bg-white dark:bg-gray-800">
        <nav className="flex items-center justify-between">
          <Link to="/weight-equalizer" className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl" href="#">
            Body & Weight Equalizer
          </Link>
          <div className="space-x-4">
          <Link to="/" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300" href="#">
              Home
            </Link>
            <Link to="/weight-equalizer" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300" href="#">
              BWE App
            </Link>
            <Link to="/calorie-counter" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300" href="#">
              Calorie Counter
            </Link>
          </div>
        </nav>
      </header>
      <div className="max-w-xl mx-auto p-5 bg-gray-700 rounded-lg shadow-md flex justify-between gap-5 text-black">
  <div className="flex-1 p-2.5 flex flex-col items-center max-w-md">
    <h2 className="text-lg font-semibold">Calorie Counter</h2>
    <input 
      className="w-full my-2.5 rounded-md p-2.5" 
      type="text" 
      placeholder="Food item" 
      value={food} 
      onChange={(e) => setFood(e.target.value)} 
    />
    <input
      className="w-full my-2.5 rounded-md p-2.5" 
      type="number" 
      placeholder="Calories" 
      value={calories} 
      onChange={(e) => setCalories(e.target.value)} 
    />
    <input 
      className="w-full my-2.5 rounded-md p-2.5" 
      type="text" 
      placeholder="oz" 
      value={ounces}
      onChange={handleOuncesChange} 
    />
    <button className="mt-5 px-5 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg w-full hover:bg-[#b1c4bc]" onClick={addItem}>
      Add Item
    </button>

    <h3>Total Calories: {totalCalories}</h3>
    <ul className="list-none pl-0">
      {items
      .filter(item => item.date === formatDate(selectedDate))
      .map((item, index) => (
        <li key={index} className="bg-[#e9ecef] p-2.5 mt-1.5 rounded-md w-full">
          {item.food
          }: {item.calories} calories, {item.ounces} oz
        </li>
      ))}
    </ul>

    </div>
        <div className="flex-1 p-2.5 flex flex-col items-center max-w-md">
          <CalorieCalendar 
            calorieLog={calorieLog} 
            selectedDate={selectedDate} 
            onSelectDate={setSelectedDate} 
          />
        </div> 
      </div>
    </div>
  );  
}

export default CalorieCounter;
