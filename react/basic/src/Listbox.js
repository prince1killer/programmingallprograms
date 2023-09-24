import React, { useState } from 'react';

function Listbox() {
  const [availableItems, setAvailableItems] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
  ]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleAddItem = () => {
    const selected = availableItems.filter(
      (item) => document.getElementById('available').options[item].selected
    );
    setAvailableItems(availableItems.filter((item) => !selected.includes(item)));
    setSelectedItems([...selectedItems, ...selected]);
  };

  const handleRemoveItem = () => {
    const removed = selectedItems.filter(
      (item) => document.getElementById('selected').options[item].selected
    );
    setSelectedItems(selectedItems.filter((item) => !removed.includes(item)));
    setAvailableItems([...availableItems, ...removed]);
  };

  return (
    <div>
      <h2>Listbox Example</h2>
      <div>
        <h3>Available Items</h3>
        <select id="available" multiple>
          {availableItems.map((item, index) => (
            <option key={index} value={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={handleAddItem}>{'>'}</button>
        <button onClick={handleRemoveItem}>{'<'}</button>
      </div>
      <div>
        <h3>Selected Items</h3>
        <select id="selected" multiple>
          {selectedItems.map((item, index) => (
            <option key={index} value={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Listbox;
