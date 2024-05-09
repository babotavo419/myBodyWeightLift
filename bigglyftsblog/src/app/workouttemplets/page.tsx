import React from 'react';

const workoutTemplates = [
  {
    id: 1,
    name: "Full Body Burn",
    description: "A quick 30-minute workout to target all major muscle groups.",
    duration: "30 minutes",
    intensity: "High"
  },
  {
    id: 2,
    name: "Upper Body Strength",
    description: "Focus on building strength in your arms, chest, and back.",
    duration: "45 minutes",
    intensity: "Medium"
  },
  {
    id: 3,
    name: "Lower Body Blast",
    description: "A leg and glute routine to improve lower body strength.",
    duration: "40 minutes",
    intensity: "High"
  },
  {
    id: 4,
    name: "Core Stability",
    description: "Core-focused exercises to improve balance and stability.",
    duration: "20 minutes",
    intensity: "Low"
  }
];

export default function WorkOutTemplates() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white text-center p-6">
        <h1 className="text-3xl font-bold">Workout Templates</h1>
        <p>Select a workout plan that fits your schedule and goals.</p>
      </header>
      
      <main className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {workoutTemplates.map((template) => (
          <div key={template.id} className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold">{template.name}</h2>
            <p>{template.description}</p>
            <div className="mt-2">
              <span className="text-sm text-gray-700">Duration: {template.duration}</span>
            </div>
            <div className="mt-1">
              <span className="text-sm text-gray-700">Intensity: {template.intensity}</span>
            </div>
          </div>
        ))}
      </main>

      <footer className="bg-blue-500 text-white text-center p-4 mt-4">
        <p>&copy; 2024 Fitness Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

