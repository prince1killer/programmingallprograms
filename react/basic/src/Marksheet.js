import React, { useState } from 'react';

function Marksheet() {
  const [mathsMarks, setMathsMarks] = useState(0);
  const [englishMarks, setEnglishMarks] = useState(0);
  const [scienceMarks, setScienceMarks] = useState(0);

  const totalMarks = mathsMarks + englishMarks + scienceMarks;
  const percentage = (totalMarks / 300) * 100;

  return (
    <div>
      <h2>Mark Sheet</h2>
      <label>
        Maths Marks:
        <input
          type="number"
          value={mathsMarks}
          onChange={(e) => setMathsMarks(e.target.value)}
        />
      </label>
      <br />
      <label>
        English Marks:
        <input
          type="number"
          value={englishMarks}
          onChange={(e) => setEnglishMarks(e.target.value)}
        />
      </label>
      <br />
      <label>
        Science Marks:
        <input
          type="number"
          value={scienceMarks}
          onChange={(e) => setScienceMarks(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Total Marks: {totalMarks} / 300
      </label>
      <br />
      <label>
        Percentage: {percentage}%
      </label>
      <br />
      <label>
        Grade: {percentage >= 90 ? 'A+' : percentage >= 80 ? 'A' : percentage >= 70 ? 'B+' : percentage >= 60 ? 'B' : percentage >= 50 ? 'C+' : percentage >= 40 ? 'C' : 'F'}
      </label>
    </div>
  );
}

export default Marksheet;
