import React, { useState } from 'react';

function WeightEqualizer() {
    const [startBodyWeight, setStartBodyWeight] = useState(0);
    const [startBarbellPress, setStartBarbellPress] = useState(0);
    const [bodyWeightIncreasePerWeek, setBodyWeightIncreasePerWeek] = useState(0);
    const [barbellPressIncreasePerWeek, setBarbellPressIncreasePerWeek] = useState(0);
    const [result, setResult] = useState(null);

    function calculateEqualizationWeeks() {
        if (bodyWeightIncreasePerWeek >= barbellPressIncreasePerWeek) {
            alert("Barbell press must increase faster than body weight to ever equalize.");
            return;
        }

        const weeks = (startBarbellPress - startBodyWeight) / (bodyWeightIncreasePerWeek - barbellPressIncreasePerWeek);
        const finalBodyWeight = startBodyWeight + weeks * bodyWeightIncreasePerWeek;
        const finalBarbellPress = startBarbellPress + weeks * barbellPressIncreasePerWeek;

        setResult({
            weeks,
            finalBodyWeight,
            finalBarbellPress
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

    return (
        <div style={containerStyle}>
            <h2>Weight Equalizer Calculator</h2>
            <input style={inputStyle} type="number" placeholder="Starting Body Weight" onChange={e => setStartBodyWeight(parseFloat(e.target.value))} />
            <input style={inputStyle} type="number" placeholder="Starting Barbell Press" onChange={e => setStartBarbellPress(parseFloat(e.target.value))} />
            <input style={inputStyle} type="number" placeholder="Weekly Body Weight Increase" onChange={e => setBodyWeightIncreasePerWeek(parseFloat(e.target.value))} />
            <input style={inputStyle} type="number" placeholder="Weekly Barbell Press Increase" onChange={e => setBarbellPressIncreasePerWeek(parseFloat(e.target.value))} />
            <button style={buttonStyle} onClick={calculateEqualizationWeeks}>Calculate</button>

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

