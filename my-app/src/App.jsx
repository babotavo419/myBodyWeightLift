import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import './AppStyles.css';

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
    if (goal === 'increaseBoth') {
        return (
            <>
                <input className="input" type="number" value={startBodyWeight} placeholder="Starting Body Weight (lbs)" onChange={e => setStartBodyWeight(parseFloat(e.target.value))} />
                <input className="input" type="number" value={startBarbellPress} placeholder="Starting Barbell Weight (lbs)" onChange={e => setStartBarbellPress(parseFloat(e.target.value))} />
                <input className="input" type="number" value={bodyWeightIncreasePerWeek} placeholder="Weekly Body Weight Increase (lbs)" onChange={e => setBodyWeightIncreasePerWeek(parseFloat(e.target.value))} />
                <input className="input" type="number" value={barbellPressIncreasePerWeek} placeholder="Weekly Barbell Weight Increase (lbs)" onChange={e => setBarbellPressIncreasePerWeek(parseFloat(e.target.value))} />
            </>
        );
    } else if (goal === 'maintainWeight') {
        return (
            <>
                <input className="input" type="number" value={startBodyWeight} placeholder="Current Body Weight (lbs)" onChange={e => setStartBodyWeight(parseFloat(e.target.value))} />
                <input className="input" type="number" value={startBarbellPress} placeholder="Starting Barbell Weight (lbs)" onChange={e => setStartBarbellPress(parseFloat(e.target.value))} />
                <input className="input" type="number" value={barbellPressIncreasePerWeek} placeholder="Target Barbell Weight Increase (lbs)" onChange={e => setBarbellPressIncreasePerWeek(parseFloat(e.target.value))} />
            </>
        );
    }
  };  

  return (
    <div className="container">
      <NavBar />
      <h2 className="black-heading">Weight Equalizer Calculator</h2>
  
      <select value={goal} onChange={e => setGoal(e.target.value)} className="input">
        <option value="increaseBoth">Increase Both Weight and Strength</option>
        <option value="maintainWeight">Increase Strength While Maintaining Weight</option>
      </select>
  
      {renderInputFields()}
  
      <button className="button" onClick={calculateEqualizationWeeks}>Calculate</button>
  
      {error && <p className="error">{error}</p>}
  
      {result && (
        <div className="result">
          <p>It will take {result.weeks} weeks.</p>
          <p>Final Body Weight: {result.finalBodyWeight} lbs</p>
          <p>Final Barbell Weight: {result.finalBarbellPress} lbs</p>
        </div>
      )}
    </div>
  );  
}

export default WeightEqualizer;

