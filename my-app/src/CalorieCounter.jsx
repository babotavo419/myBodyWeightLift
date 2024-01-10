// src/CalorieCounter.js
import React, { useState } from 'react';
import './CalorieCounter.css';
import NavBar from './NavBar';
import CalorieCalendar from './CalorieCalendar';

function CalorieCounter() {
  const [items, setItems] = useState([]);
  const [food, setFood] = useState('');
  const [calories, setCalories] = useState('');
  const [calorieLog, setCalorieLog] = useState({});
  const [ounces, setOunces] = useState('');

  const addItem = () => {
    if (food && calories) {
      setItems([...items, { food, calories: Number(calories) }]);
      addCaloriesForDate(new Date(), Number(calories)); // Add calories to the current date
      setFood('');
      setCalories('');
    }
  };

  const totalCalories = items.reduce((total, item) => total + item.calories, 0);
  const addCaloriesForDate = (date, calories) => {
    const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    setCalorieLog({
      ...calorieLog,
      [formattedDate]: (calorieLog[formattedDate] || 0) + calories,
    });
  };

  const handleOuncesChange = (e) => {
    setOunces(e.target.value);
  };

  return (
    <>
    <NavBar />
    <div className="calorie-container">
      <div className="calorie-input-section">
        <h2>Calorie Counter</h2>
        <input 
          className="calorie-input" 
          type="text" 
          placeholder="Food item" 
          value={food} 
          onChange={(e) => setFood(e.target.value)} 
        />
        <input
          className="calorie-input" 
          type="number" 
          placeholder="Calories" 
          value={calories} 
          onChange={(e) => setCalories(e.target.value)} 
        />
        <input 
          className="calorie-input" 
          type="text" 
          placeholder="oz" 
          // Value should correspond to a state that represents the oz, not 'food'
          value={ounces}
          onChange={handleOuncesChange} 
        />
        <button className="calorie-button" onClick={addItem}>Add Item</button>
  
        <h3>Total Calories: {totalCalories}</h3>
        <ul className="calorie-list">
          {items.map((item, index) => (
            <li key={index} className="calorie-list-item">{item.food}: {item.calories} calories</li>
          ))}
        </ul>
      </div>
      <div className="calorie-calendar-section">
        <CalorieCalendar calorieLog={calorieLog} />
      </div> 
    </div>
    </>
  );  
}

export default CalorieCounter;
