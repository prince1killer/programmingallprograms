import React, { useState } from 'react';

function SumOfEvenAndOdd() {
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const n = 1; // start number
    const m = 10; // end number
    let sumOfEven = 0;
    let sumOfOdd = 0;

    for (let i = n; i <= m; i++) {
      if (i % 2 === 0) {
        sumOfEven += i;
      } else {
        sumOfOdd += i;
      }
    }

    setResult({ sumOfEven, sumOfOdd });
  };

  return (
    <div>
      <h2>Sum of Even and Odd Numbers Example</h2>
      <button onClick={handleCalculate}>Calculate</button>
      {result && (
        <div>
          <p>Sum of Even Numbers: {result.sumOfEven}</p>
          <p>Sum of Odd Numbers: {result.sumOfOdd}</p>
        </div>
      )}
    </div>
  );
}

export default SumOfEvenAndOdd;
