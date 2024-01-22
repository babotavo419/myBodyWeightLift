import React, { useState } from 'react';

// A simple form input component
const InputField = ({ label, type, name, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
      {label}
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

// Main component for workout and calorie tracking
const WorkoutTracker = () => {
  const [workout, setWorkout] = useState({
    type: 'weightlifting', // or 'cardio'
    weight: '', // for weightlifting
    reps: '', // for weightlifting
    distance: '', // for cardio in km
    time: '', // for cardio in minutes
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout({ ...workout, [name]: value });
  };

  // Function to log the workout - extend this to save data or calculate calories
  const logWorkout = (e) => {
    e.preventDefault();
    console.log(workout);
    // Here, implement your logic to calculate and log the workout data
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={logWorkout}>
        <InputField label="Type" type="text" name="type" value={workout.type} onChange={handleChange} />
        <InputField label="Weight (kg)" type="number" name="weight" value={workout.weight} onChange={handleChange} />
        <InputField label="Reps" type="number" name="reps" value={workout.reps} onChange={handleChange} />
        <InputField label="Distance (km)" type="number" name="distance" value={workout.distance} onChange={handleChange} />
        <InputField label="Time (minutes)" type="number" name="time" value={workout.time} onChange={handleChange} />

        {/* Add more fields as necessary for different workouts or calculations */}

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Log Workout
        </button>
      </form>
    </div>
  );
};

export default WorkoutTracker;
