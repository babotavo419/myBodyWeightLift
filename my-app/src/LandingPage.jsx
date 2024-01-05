import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <NavBar />
      <h1 className="landing-header">Welcome to the Weight Equalizer App</h1>
      <p className="landing-text">
        The "Weight Equalizer" app is designed as a fitness planning tool to help users align their body weight and strength training goals, particularly focusing on progressive weight training.
      </p>
      <p className="landing-text">
        The app operates on two main objectives:
      </p>
      <ol className="landing-list">
        <li>
          <strong>Increase Both Weight and Strength</strong>: This mode is for users who aim to simultaneously increase their body weight and the weight they can lift. Users input their current body weight, current lift weight, and their weekly increment goals for both. The app then calculates the number of weeks it will take for the lift weight to equal the body weight.
        </li>
        <li>
          <strong>Increase Strength While Maintaining Weight</strong>: This mode caters to users who wish to increase their lifting capacity without changing their body weight. Users provide their current body weight, current lift weight, and the desired weekly increase for their lift weight.
        </li>
      </ol>
      <p className="landing-text">
        Key Functionalities and Logic include state management and dynamic rendering, input validation, customizable goals, and calculative logic.
      </p>
      <p className="landing-text">
        The app's UI is designed for clarity and ease of use, with a straightforward selection between two main fitness goals and input fields that dynamically adjust to the chosen goal. It includes error handling to guide users towards realistic goal-setting and a results section that displays the calculated outcome.
      </p>
      <Link to="/weight-equalizer" className="landing-button">Get Started</Link>
    </div>
  );
}

export default LandingPage;


