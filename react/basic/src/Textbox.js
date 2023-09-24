import React, { useState } from 'react';

function Textbox() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);

    if (!/^[0-9]*$/.test(newValue)) {
      setError('Please enter only numbers.');
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <h2>Textbox Example</h2>
      <label>
        Enter a number:
        <input type="text" value={value} onChange={handleInputChange} />
      </label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Textbox;
