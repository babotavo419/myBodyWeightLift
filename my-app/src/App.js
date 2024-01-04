import React, { useState } from 'react';

function WeightEqualizer() {
    const [startBodyWeight, setStartBodyWeight] = useState(0);
    const [startBarbellPress, setStartBarbellPress] = useState(0);
    const [bodyWeightIncreasePerWeek, setBodyWeightIncreasePerWeek] = useState(0);
    const [barbellPressIncreasePerWeek, setBarbellPressIncreasePerWeek] = useState(0);
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');
    const [goal, setGoal] = useState('increaseBoth'); // 'increaseBoth' or 'maintainWeight'

    function validateInputs() {
      // Additional validation for 'maintainWeight' goal
      if (goal === 'maintainWeight') {
        if (barbellPressIncreasePerWeek > 30) {
            return 'For maintaining weight, the barbell weight should not increase by more than 30 pounds.';
        }
    } else {
        if (bodyWeightIncreasePerWeek <= 0 || barbellPressIncreasePerWeek <= 0) {
            return 'Weekly increases must be greater than zero.';
        }
        if (bodyWeightIncreasePerWeek >= barbellPressIncreasePerWeek) {
            return 'Barbell press must increase faster than body weight to ever equalize.';
        }
        // Define a threshold for what you consider to be an unrealistic increase per week.
        // This threshold can be adjusted based on your requirements.
        const unrealisticIncreaseThreshold = 10; // Example threshold
        if (barbellPressIncreasePerWeek > unrealisticIncreaseThreshold) {
            return 'The weekly barbell press increase is unrealistic. Please enter a value of 10 or lower.';
        }
      }
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
        // Logic for increasing strength while maintaining weight
        // Assuming the user wants to add a specific amount to their barbell press
        const targetBarbellIncrease = 100; // or any other target set by the user
        weeks = targetBarbellIncrease / barbellPressIncreasePerWeek;
        weeks = Math.round(weeks);
        finalBodyWeight = startBodyWeight; // Body weight remains the same
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
                <input style={inputStyle} type="number" placeholder="Starting Body Weight (lbs)" onChange={e => setStartBodyWeight(parseFloat(e.target.value))} />
                <input style={inputStyle} type="number" placeholder="Starting Barbell Press (lbs)" onChange={e => setStartBarbellPress(parseFloat(e.target.value))} />
                <input style={inputStyle} type="number" placeholder="Weekly Body Weight Increase (lbs)" onChange={e => setBodyWeightIncreasePerWeek(parseFloat(e.target.value))} />
                <input style={inputStyle} type="number" placeholder="Weekly Barbell Press Increase (lbs)" onChange={e => setBarbellPressIncreasePerWeek(parseFloat(e.target.value))} />
            </>
        );
    } else if (goal === 'maintainWeight') {
        return (
            <>
                <input style={inputStyle} type="number" placeholder="Current Body Weight (lbs)" onChange={e => setStartBodyWeight(parseFloat(e.target.value))} />
                <input style={inputStyle} type="number" placeholder="Starting Barbell Press (lbs)" onChange={e => setStartBarbellPress(parseFloat(e.target.value))} />
                <input style={inputStyle} type="number" placeholder="Target Barbell Press Increase (lbs)" onChange={e => setBarbellPressIncreasePerWeek(parseFloat(e.target.value))} />
            </>
        );
    }
};

    return (
      <div style={containerStyle}>
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

