import React from 'react';
import whoseHouse from './houses/whoseHouse';
import Hufflepuff from './Hufflepuff';

function Hogwarts() {
  whoseHouse(); // Call the imported function
  return (
    <div>
      <h1>Welcome to Hogwarts!</h1>
      <Hufflepuff />
    </div>
  );
}

export default Hogwarts;
