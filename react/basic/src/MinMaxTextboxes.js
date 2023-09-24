import React, { useState } from 'react';

function MinMaxTextboxes() {
  const [minValue, setMinValue] = useState(Number.MAX_VALUE);
  const [maxValue, setMaxValue] = useState(Number.MIN_VALUE);

  const handleInputChange = (event) => {
    const inputVal = Number(event.target.value);
    if (inputVal < minValue) {
      setMinValue(inputVal);
    }
    if (inputVal > maxValue) {
      setMaxValue(inputVal);
    }
  };

  return (
    <div>
      <h2>Minimum and Maximum Textboxes</h2>
      <input type="text" onChange={handleInputChange} />
      <input type="text" onChange={handleInputChange} />
      <input type="text" onChange={handleInputChange} />
      <br />
      <label>Minimum value: {minValue}</label>
      <br />
      <label>Maximum value: {maxValue}</label>
    </div>
  );
}

export default MinMaxTextboxes;
