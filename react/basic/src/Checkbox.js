import React, { useState } from 'react';

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <h2>Checkbox Example</h2>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Check me
      </label>
      <p>{isChecked ? 'Checked!' : 'Unchecked'}</p>
    </div>
  );
}

export default Checkbox;
