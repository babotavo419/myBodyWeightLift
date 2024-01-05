import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
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

    const containerStyle = {
        maxWidth: '500px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f3f3f3',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    };

    const inputStyle = {
        width: '80%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #ccc'
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px'
    };

    const resultStyle = {
        backgroundColor: '#e9ecef',
        padding: '10px',
        borderRadius: '5px',
        marginTop: '20px'
    };

    const errorStyle = {
      color: 'red',
      margin: '10px 0'
  };

  const renderInputFields = () => {
    if (goal === 'increaseBoth') {
        return (
            <>
                <input style={inputStyle} type="number" value={startBodyWeight} placeholder="Starting Body Weight (lbs)" onChange={e => setStartBodyWeight(parseFloat(e.target.value))} />
                <input style={inputStyle} type="number" value={startBarbellPress} placeholder="Starting Barbell Weight (lbs)" onChange={e => setStartBarbellPress(parseFloat(e.target.value))} />
                <input style={inputStyle} type="number" value={bodyWeightIncreasePerWeek} placeholder="Weekly Body Weight Increase (lbs)" onChange={e => setBodyWeightIncreasePerWeek(parseFloat(e.target.value))} />
                <input style={inputStyle} type="number" value={barbellPressIncreasePerWeek} placeholder="Weekly Barbell Weight Increase (lbs)" onChange={e => setBarbellPressIncreasePerWeek(parseFloat(e.target.value))} />
            </>
        );
    } else if (goal === 'maintainWeight') {
        return (
            <>
                <input style={inputStyle} type="number" value={startBodyWeight} placeholder="Current Body Weight (lbs)" onChange={e => setStartBodyWeight(parseFloat(e.target.value))} />
                <input style={inputStyle} type="number" value={startBarbellPress} placeholder="Starting Barbell Weight (lbs)" onChange={e => setStartBarbellPress(parseFloat(e.target.value))} />
                <input style={inputStyle} type="number" value={barbellPressIncreasePerWeek} placeholder="Target Barbell Weight Increase (lbs)" onChange={e => setBarbellPressIncreasePerWeek(parseFloat(e.target.value))} />
            </>
        );
    }
  };  

    return (
      <div style={containerStyle}>
        <NavBar />
      <h2>Weight Equalizer Calculator</h2>

      <select value={goal} onChange={e => setGoal(e.target.value)}>
          <option value="increaseBoth">Increase Both Weight and Strength</option>
          <option value="maintainWeight">Increase Strength While Maintaining Weight</option>
      </select>

      {renderInputFields()}

      <button style={buttonStyle} onClick={calculateEqualizationWeeks}>Calculate</button>

            {error && <p style={errorStyle}>{error}</p>}

            {result && (
                <div style={resultStyle}>
                    <p>It will take {result.weeks} weeks.</p>
                    <p>Final Body Weight: {result.finalBodyWeight} lbs</p>
                    <p>Final Barbell Weight: {result.finalBarbellPress} lbs</p>
                </div>
            )}
        </div>
    );
}

export default WeightEqualizer;

