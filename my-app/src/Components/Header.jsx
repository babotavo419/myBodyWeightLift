import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div className="flex flex-col mb-2">
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
        </div>
    )

}

export default Header;