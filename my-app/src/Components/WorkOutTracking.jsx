import React, { useState } from 'react';

const InputField = ({ label, type, name, value, onChange, visible }) => {
  if (!visible) return null; // Don't render the component if not visible
  return (
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
};

const WorkoutTracker = () => {
  const [workout, setWorkout] = useState({
    type: '', // Default type is empty so user is prompted to choose
    weight: '', 
    reps: '', 
    sets: '', // New category for strength training
    distance: '', 
    time: '', 
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

  return (
    <div className="max-w-md mx-auto mt-10">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={logWorkout}>
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

        <InputField label="Weight (kg)" type="number" name="weight" value={workout.weight} onChange={handleChange} visible={workout.type === 'strength'} />
        <InputField label="Reps" type="number" name="reps" value={workout.reps} onChange={handleChange} visible={workout.type === 'strength'} />
        <InputField label="Sets" type="number" name="sets" value={workout.sets} onChange={handleChange} visible={workout.type === 'strength'} />
        <InputField label="Distance (km)" type="number" name="distance" value={workout.distance} onChange={handleChange} visible={workout.type === 'cardio'} />
        <InputField label="Time (minutes)" type="number" name="time" value={workout.time} onChange={handleChange} visible={workout.type === 'cardio'} />
        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Log Workout
        </button>
      </form>
    </div>
  );
};

export default WorkoutTracker;


