import React, { useState } from 'react';

const Task6 = () => {
  const MyArray = ['chigozie', 'chiemelie', 'somtoo'];
  const [names, setname] = useState(MyArray);
  const ebuka = () => {
    MyArray.push('ebuka');
    setname([...MyArray]);
  };
  const chisom = () => {
    MyArray.pop();
    setname([...MyArray]);
  };
  return (
    <div>
      {names.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
      <button
        className='border px-10 py-4 rounded-xl bg-lime-200 text-white'
        onClick={ebuka}
      >
        add
      </button>
      <button
        className=' border px-10 py-4 rounded-xl bg-sky-300 text-black'
        onClick={chisom}
      >
        remove
      </button>
    </div>
  );
};

export default Task6;
