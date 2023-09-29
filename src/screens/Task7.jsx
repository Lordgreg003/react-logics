import React from 'react';
import { useState } from 'react';

const Task7 = () => {
  const [color, setColor] = useState('red');

  const [car, setcar] = useState('benz');

  return (
    <div>
      <h1>My favorite color is {color}!</h1>
      <h1>My favorite car is {car}!</h1>
      <button
        className='border py-4 px-10 bg-lime-400 text-white'
        onClick={() => setcar('vovlo')}
      >
        tap me{' '}
      </button>
    </div>
  );
};

export default Task7;
