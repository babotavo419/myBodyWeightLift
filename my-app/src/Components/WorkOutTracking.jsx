import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InputField = ({ label, type, name, value, onChange, visible, unit }) => {
  if (!visible) return null; // Don't render the component if not visible
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label} {unit && <span>({unit})</span>} {/* Display unit if provided */}
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
};

const WorkoutTracker = () => {
  const [workout, setWorkout] = useState({
    type: '', // Default type is empty so user is prompted to choose
    weight: '', 
    reps: '', 
    sets: '', 
    distance: '', 
    time: '', 
    unitSystem: 'metric', // New state for tracking unit system
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout({ ...workout, [name]: value });
  };

  const logWorkout = (e) => {
    e.preventDefault();
    console.log(workout);
    // Implement your logic to calculate and log the workout data
  };

  // Determine unit labels based on the selected unit system
  const weightUnit = workout.unitSystem === 'metric' ? 'kg' : 'lbs';
  const distanceUnit = workout.unitSystem === 'metric' ? 'km' : 'miles';

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
            <Link to="/workouttracker" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300" href="#">
              Workout Tracker
            </Link>
          </div>
        </nav>
      </header>
    <div className="max-w-md mx-auto mt-10">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={logWorkout}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="unitSystem">
            Unit System
          </label>
          <select
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="unitSystem"
            name="unitSystem"
            value={workout.unitSystem}
            onChange={handleChange}
          >
            <option value="metric">Metric (kg, km)</option>
            <option value="imperial">Imperial (lbs, miles)</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
            Workout Type
          </label>
          <select
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="type"
            name="type"
            value={workout.type}
            onChange={handleChange}
          >
            <option value="">Select a workout type</option>
            <option value="strength">Strength Training</option>
            <option value="cardio">Cardio</option>
          </select>
        </div>

        <InputField label="Weight" type="number" name="weight" value={workout.weight} onChange={handleChange} visible={workout.type === 'strength'} unit={weightUnit} />
        <InputField label="Reps" type="number" name="reps" value={workout.reps} onChange={handleChange} visible={workout.type === 'strength'} />
        <InputField label="Sets" type="number" name="sets" value={workout.sets} onChange={handleChange} visible={workout.type === 'strength'} />
        <InputField label="Distance" type="number" name="distance" value={workout.distance} onChange={handleChange} visible={workout.type === 'cardio'} unit={distanceUnit} />
        <InputField label="Time" type="number" name="time" value={workout.time} onChange={handleChange} visible={workout.type === 'cardio'} unit="minutes" />
        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Log Workout
        </button>
      </form>
    </div>
    </div>
  );
};

export default WorkoutTracker;



