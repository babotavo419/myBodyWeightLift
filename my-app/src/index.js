// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './Components/App';
import LandingPage from './LandingPage';
import CalorieCounter from './Components/CalorieCounter'; // Import the CalorieCounter component
import WorkoutTracker from './Components/WorkOutTracking';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/weight-equalizer" element={<App />} />
        <Route path="/calorie-counter" element={<CalorieCounter />} />
        <Route path="/workouttracker" element={<WorkoutTracker/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();


