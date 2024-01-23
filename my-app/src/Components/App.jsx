import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/*When I was first think of this simple solution I was only think of the barbell press. Hence, the name of the variables.
After getting everything to work I realized that this solution dosent need to apply to just the barbell press. So, thats
why changed the name of the tags.*/

function WeightEqualizer() {
    const [startBodyWeight, setStartBodyWeight] = useState(0);
    const [startBarbellPress, setStartBarbellPress] = useState(0);
    const [bodyWeightIncreasePerWeek, setBodyWeightIncreasePerWeek] = useState(0);
    const [barbellPressIncreasePerWeek, setBarbellPressIncreasePerWeek] = useState(0);
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');
    const [goal, setGoal] = useState('increaseBoth'); // 'increaseBoth' or 'maintainWeight'

    useEffect(() => {
      setStartBodyWeight('');
      setStartBarbellPress('');
      setBodyWeightIncreasePerWeek('');
      setBarbellPressIncreasePerWeek('');
      setError('');
      setResult(null);

  }, [goal]);

    function validateInputs() {
      if (goal === 'increaseBoth') {
          // Validations for increasing both weight and strength
          if (bodyWeightIncreasePerWeek <= 0 || barbellPressIncreasePerWeek <= 0) {
              return 'Weekly increases must be greater than zero.';
          }
          if (barbellPressIncreasePerWeek > 10) {
              return 'This may be possible, but it is recommended to make smaller increases over a longer period of time depending on the end goal.';
          }
          if (bodyWeightIncreasePerWeek >= barbellPressIncreasePerWeek) {
              return 'Barbell press must increase faster than body weight to ever equalize.';
          }
      } else if (goal === 'maintainWeight') {
          // Validations for increasing strength while maintaining weight
          if (startBarbellPress <= 0) {
              return 'Starting barbell press must be greater than zero.';
          }
          if (barbellPressIncreasePerWeek <= 0) {
              return 'Target barbell press increase must be greater than zero.';
          }
          if (barbellPressIncreasePerWeek > 10) {
              return 'This may be possible, but it is recommended to make smaller increases over a longer period of time depending on the end goal.';
          }
      }
    
      return '';
  }

    function calculateEqualizationWeeks() {
      const validationError = validateInputs();
      if (validationError) {
          setError(validationError);
          setResult(null);
          return;
      } else {
          setError('');
      }
  
      let weeks;
      let finalBodyWeight;
      let finalBarbellPress;
  
      if (goal === 'increaseBoth') {
          // Original logic for increasing both weight and strength
          weeks = (startBarbellPress - startBodyWeight) / (bodyWeightIncreasePerWeek - barbellPressIncreasePerWeek);
          weeks = Math.round(weeks);
          finalBodyWeight = startBodyWeight + weeks * bodyWeightIncreasePerWeek;
          finalBarbellPress = startBarbellPress + weeks * barbellPressIncreasePerWeek;
      } else if (goal === 'maintainWeight') {
          // Logic for increasing barbell weight while maintaining body weight
          if (startBarbellPress >= startBodyWeight) {
              setError('Starting barbell press should be less than body weight for this goal.');
              setResult(null);
              return;
          }
  
          weeks = (startBodyWeight - startBarbellPress) / barbellPressIncreasePerWeek;
          weeks = Math.ceil(weeks); // Round up to ensure the barbell weight meets or exceeds body weight
          finalBodyWeight = startBodyWeight; // Body weight remains constant
          finalBarbellPress = startBarbellPress + weeks * barbellPressIncreasePerWeek;
      }
  
      setResult({
          weeks,
          finalBodyWeight: finalBodyWeight.toFixed(2),
          finalBarbellPress: finalBarbellPress.toFixed(2)
      });
  }

  const renderInputFields = () => {

    const inputStyle = "w-full p-2.5 my-2.5 rounded border border-gray-300 text-black";

    if (goal === 'increaseBoth') {
        return (
            <>
                <input
                    className={inputStyle}
                    type="number" 
                    value={startBodyWeight} 
                    placeholder="Starting Body Weight (lbs)" 
                    onChange={e => setStartBodyWeight(parseFloat(e.target.value))} 
                />
                <input 
                    className={inputStyle}
                    type="number" 
                    value={startBarbellPress} 
                    placeholder="Starting Barbell Weight (lbs)" 
                    onChange={e => setStartBarbellPress(parseFloat(e.target.value))} 
                />
                <input 
                    className={inputStyle} 
                    type="number" 
                    value={bodyWeightIncreasePerWeek} 
                    placeholder="Weekly Body Weight Increase (lbs)" 
                    onChange={e => setBodyWeightIncreasePerWeek(parseFloat(e.target.value))} 
                />
                <input 
                    className={inputStyle}
                    type="number" 
                    value={barbellPressIncreasePerWeek} 
                    placeholder="Weekly Barbell Weight Increase (lbs)" 
                    onChange={e => setBarbellPressIncreasePerWeek(parseFloat(e.target.value))} 
                />
            </>
        );
    } else if (goal === 'maintainWeight') {
        return (
            <>
                <input 
                    className={inputStyle}
                    type="number" value={startBodyWeight} 
                    placeholder="Current Body Weight (lbs)" 
                    onChange={e => setStartBodyWeight(parseFloat(e.target.value))} 
                />
                <input 
                    className={inputStyle}
                    type="number" 
                    value={startBarbellPress} 
                    placeholder="Starting Barbell Weight (lbs)" 
                    onChange={e => setStartBarbellPress(parseFloat(e.target.value))} 
                />
                <input 
                    className={inputStyle} 
                    type="number" 
                    value={barbellPressIncreasePerWeek} 
                    placeholder="Target Barbell Weight Increase (lbs)" 
                    onChange={e => setBarbellPressIncreasePerWeek(parseFloat(e.target.value))} 
                />
            </>
        );
    }
  };  

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
    <div className="max-w-md mx-auto p-5 text-center bg-gray-700 rounded-lg shadow-md">
            <h2 className="text-black">Weight Equalizer Calculator</h2>
                <div className="w-full flex flex-col items-center">
                    <label htmlFor="goal-select" className="mb-2 text-lg text-gray-700">Select Your Goal</label>
                        <select 
                            id="goal-select"
                            value={goal} 
                            onChange={e => setGoal(e.target.value)} 
                            className="w-4/5 p-2.5 my-2.5 rounded border border-gray-400 bg-white text-gray-700 appearance-none"
                            style={{ backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="%23999" viewBox="0 0 20 20"><path d="M5.8 7.4c.3-.3.7-.3 1 0l3.2 3.2 3.2-3.2c.3-.3.7-.3 1 0s.3.7 0 1l-4 4c-.3.3-.7.3-1 0l-4-4c-.2-.3-.2-.7 0-1z"/></svg>')`, 
                            backgroundRepeat: 'no-repeat', 
                            backgroundPosition: 'right 0.5rem center', 
                            backgroundSize: '1.5em 1.5em' }}
                            >
                            <option value="" disabled>Select Your Goal</option>
                            <option value="increaseBoth">Increase Both Weight and Strength</option>
                            <option value="maintainWeight">Increase Strength While Maintaining Weight</option>
                        </select>
                </div>
                    {renderInputFields()}
                <button 
                    className="px-5 py-2.5 bg-gray-800 text-white rounded cursor-pointer text-base mt-2.5 hover:bg-slate-500 w-full"
                    onClick={calculateEqualizationWeeks}
                    >
                    Calculate
                </button>
                    {error && <p className="text-red-600 my-2.5">{error}</p>}
                    {result && (
            <div className="bg-slate-700 p-2.5 rounded mt-5 text-white">
                <p>It will take {result.weeks} weeks.</p>
                <p>Final Body Weight: {result.finalBodyWeight} lbs</p>
                <p>Final Barbell Weight: {result.finalBarbellPress} lbs</p>
            </div>
            )}
        </div>
    </div>
  );  
}

export default WeightEqualizer;

