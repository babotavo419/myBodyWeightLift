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
          value={ounces}
          onChange={handleOuncesChange} 
        />
        <button className="calorie-button" onClick={addItem}>Add Item</button>
  
        <h3>Total Calories: {totalCalories}</h3>
        <ul className="calorie-list">
          {items
          .filter(item => item.date === formatDate(selectedDate))
          .map((item, index) => (
            <li key={index} className="calorie-list-item">
              {item.food}: {item.calories} calories, {item.ounces} oz
              </li>
          ))}
        </ul>
      </div>
      <div className="calorie-calendar-section">
        <CalorieCalendar 
        calorieLog={calorieLog} 
        selectedDate={selectedDate} 
        onSelectDate={setSelectedDate} 
        />
      </div> 
    </div>
    </>
  );  
}

export default CalorieCounter;
