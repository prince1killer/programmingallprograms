import React, { useState } from 'react';

function DynamicTextboxes() {
  const [inputValues, setInputValues] = useState([]);

  const handleInputChange = (index, event) => {
    const values = [...inputValues];
    values[index] = event.target.value;
    setInputValues(values);
  };

  const renderTextboxes = () => {
    const textboxes = [];
    for (let i = 0; i < 15; i++) {
      textboxes.push(
        <input
          type="text"
          key={i}
          value={inputValues[i] || ''}
          onChange={(e) => handleInputChange(i, e)}
        />
      );
    }
    return textboxes;
  };

  return (
    <div>
      <h2>Dynamic Textboxes</h2>
      {renderTextboxes()}
    </div>
  );
}

export default DynamicTextboxes;
