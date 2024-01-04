import React, { useState } from 'react';

function WeightEqualizer() {
    const [startBodyWeight, setStartBodyWeight] = useState(0);
    const [startBarbellPress, setStartBarbellPress] = useState(0);
    const [bodyWeightIncreasePerWeek, setBodyWeightIncreasePerWeek] = useState(0);
    const [barbellPressIncreasePerWeek, setBarbellPressIncreasePerWeek] = useState(0);
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    function validateInputs() {
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
          return 'The weekly barbell press increase is unrealistic. Please enter a smaller value.';
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
  
      let weeks = (startBarbellPress - startBodyWeight) / (bodyWeightIncreasePerWeek - barbellPressIncreasePerWeek);
      
      // Round weeks to the nearest whole number
      weeks = Math.round(weeks);
  
      const finalBodyWeight = startBodyWeight + weeks * bodyWeightIncreasePerWeek;
      const finalBarbellPress = startBarbellPress + weeks * barbellPressIncreasePerWeek;
  
      setResult({
          weeks,
          finalBodyWeight: finalBodyWeight.toFixed(2), // Rounds to 2 decimal places
          finalBarbellPress: finalBarbellPress.toFixed(2) // Rounds to 2 decimal places
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

    return (
        <div style={containerStyle}>
            <h2>Weight Equalizer Calculator</h2>
            <input style={inputStyle} type="number" placeholder="Starting Body Weight" onChange={e => setStartBodyWeight(parseFloat(e.target.value))} />
            <input style={inputStyle} type="number" placeholder="Starting Barbell Press" onChange={e => setStartBarbellPress(parseFloat(e.target.value))} />
            <input style={inputStyle} type="number" placeholder="Weekly Body Weight Increase" onChange={e => setBodyWeightIncreasePerWeek(parseFloat(e.target.value))} />
            <input style={inputStyle} type="number" placeholder="Weekly Barbell Increase" onChange={e => setBarbellPressIncreasePerWeek(parseFloat(e.target.value))} />
            <button style={buttonStyle} onClick={calculateEqualizationWeeks}>Calculate</button>

            {error && <p style={errorStyle}>{error}</p>}

            {result && (
                <div style={resultStyle}>
                    <p>It will take {result.weeks} weeks.</p>
                    <p>Final Body Weight: {result.finalBodyWeight} lbs</p>
                    <p>Final Barbell Press: {result.finalBarbellPress} lbs</p>
                </div>
            )}
        </div>
    );
}

export default WeightEqualizer;

