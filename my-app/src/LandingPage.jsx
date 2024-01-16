import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faWeightScale, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';


function LandingPage() {
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
      <main className="flex flex-col items-center justify-center flex-grow text-center px-6">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white sm:text-4xl">Welcome to the Body & Weight Equalizer App</h1>
        <h2 className="mt-2 text-sm text-gray-500 dark:text-gray-400 sm:text-base">
        The "Weight Equalizer" app is designed as a fitness planning tool to 
        help users align their body weight and strength training goals, particularly 
        focusing on progressive weight. Key Functionalities and Logic include state management and dynamic rendering, 
        input validation, customizable goals, and calculative logic.The app's UI is designed for clarity and ease of use, with a straightforward 
        selection between two main fitness goals and input fields that dynamically adjust 
        to the chosen goal. It includes error handling to guide users towards realistic goal-setting 
        and a results section that displays the calculated outcome.
        </h2>
        <Link to="/weight-equalizer" className="mt-5 px-5 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg">Get Started</Link>
      </main>
      <section className="flex flex-col items-center justify-center px-6 py-10 bg-gray-100 dark:bg-gray-900">
        <div className="grid gap-6 mb-8 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center p-4 text-center bg-white rounded-lg dark:bg-gray-800">
          <div className="p-3 text-3xl text-gray-800 dark:text-white">
            <FontAwesomeIcon icon={faDumbbell} className="h-6 w-6" />
          </div>
            <h3 className="mt-2 text-lg font-semibold text-gray-700 dark:text-gray-200">The app operates on two main objectives</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Increase Both Weight and Strength or Increase Strength While Maintaining Weight
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 text-center bg-white rounded-lg dark:bg-gray-800">
            <div className="p-3 text-3xl text-gray-800 dark:text-white">
            <FontAwesomeIcon icon={faScaleBalanced} className="h-6 w-6" />
            </div>
            <h3 className="mt-2 text-lg font-semibold text-gray-700 dark:text-gray-200">Increase Both Weight and Strength</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400"> This mode is for users who aim to simultaneously increase their body 
          weight and the weight they can lift. Users input their current body weight, 
          current lift weight, and their weekly increment goals for both. The app then 
          calculates the number of weeks it will take for the lift weight to equal the body weight.</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 text-center bg-white rounded-lg dark:bg-gray-800">
            <div className="p-3 text-3xl text-gray-800 dark:text-white">
            <FontAwesomeIcon icon={faWeightScale} className="h-6 w-6" />
            </div>
            <h3 className="mt-2 text-lg font-semibold text-gray-700 dark:text-gray-200">Increase Strength While Maintaining Weight</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            This mode caters to users who wish to increase their lifting capacity 
          without changing their body weight. Users provide their current body weight, current 
          lift weight, and the desired weekly increase for their lift weight.
            </p>
          </div>
        </div>
      </section>
      <footer className="flex items-center justify-center w-full h-12 border-t dark:border-gray-700">
        <a className="flex items-center justify-center" href="https://twitter.com/octavio31848">
          <TwitterIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </a>
        <a className="flex items-center justify-center ml-4" href="https://www.linkedin.com/in/octaviovsanchez/">
          <LinkedinIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </a>
        <a className="ml-4 text-sm text-gray-500 dark:text-gray-400" href="https://www.octavioweb.dev/">© 2024 octavioweb.dev </a>
      </footer>
    </div>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


export default LandingPage;


