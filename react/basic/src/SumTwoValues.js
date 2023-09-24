import React, { useState } from 'react';

function SumTwoValues() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  function calculateSum() {
    return Number(value1) + Number(value2);
  }

  return (
    <div>
        <h2>Sum 2 value</h2>
      <label>
        Value 1:
        <input
          type="number"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </label>
      <label>
        Value 2:
        <input
          type="number"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </label>
      <label>
        Sum:
        <input type="number" value={calculateSum()} readOnly />
      </label>
    </div>
  );
}

export default SumTwoValues;
