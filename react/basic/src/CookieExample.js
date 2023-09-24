import React from 'react';
import Cookies from 'js-cookie';
// npm install js-cookie

function CookieExample() {
  const handleClick = () => {
    // Set cookie
    Cookies.set('name', 'John Doe', { expires: 7 });

    // Get cookie
    const name = Cookies.get('name');
    console.log(name);

    // Remove cookie
    Cookies.remove('name');
  };

  return (
    <div>
      <button onClick={handleClick}>Set Cookie</button>
    </div>
  );
}

export default CookieExample;
