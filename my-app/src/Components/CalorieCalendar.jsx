import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalorieCalendar({ calorieLog, selectedDate, onSelectDate }) {
  const formatDate = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  return (
    <div>
      <Calendar onChange={onSelectDate} value={selectedDate} />
      <div>
        <h3>Calories for {formatDate(selectedDate)}:</h3>
        <p>{calorieLog[formatDate(selectedDate)] || 0} kcal</p>
      </div>
    </div>
  );
}

export default CalorieCalendar;

