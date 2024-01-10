import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styling

function CalorieCalendar({ calorieLog }) {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const formatDate = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  return (
    <div>
      <Calendar onChange={onChange} value={date} />
      <div>
        <h3>Calories for {formatDate(date)}:</h3>
        <p>{calorieLog[formatDate(date)] || 0} kcal</p>
      </div>
    </div>
  );
}

export default CalorieCalendar;
