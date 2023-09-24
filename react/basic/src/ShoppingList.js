import React, { useState } from 'react';

function ShoppingList() {
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    const itemName = document.getElementById('itemName').value;
    const itemPrice = document.getElementById('itemPrice').value;

    // Add new item to list
    const newItems = [...items, { name: itemName, price: itemPrice }];
    setItems(newItems);

    // Clear input fields
    document.getElementById('itemName').value = '';
    document.getElementById('itemPrice').value = '';
  };

  return (
    <div>
      <h2>Shopping List</h2>
      <label>
        Item Name:
        <input type="text" id="itemName" />
      </label>
      <label>
        Item Price:
        <input type="text" id="itemPrice" />
      </label>
      <button onClick={handleAddItem}>Add Item</button>
      <br />
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Rs{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
