import React from 'react';
import { useState } from 'react';

const Task11 = () => {
  const [number, setnumber] = useState(0);
  const somtoo = () => {
    if (number == 1) {
      setnumber('you are welcome !');
    } else if (number == 2) {
      setnumber('you are welcome !');
    } else if (number == 7) {
      setnumber('you are welcome !');
    } else if (number == 8) {
      setnumber('you are welcome !');
    } else if (number == 9) {
      setnumber('you are welcome !');
    } else if (number == 10) {
      setnumber('you are welcome !');
    } else {
      setnumber('you are not welcome !');
    }
  };
  return (
    <div>
      <input
        className='border px-16 py-3 rounded-xl'
        type='number'
        name=''
        id=''
        value={number}
        onChange={(event) => setnumber(event.target.value)}
      />
      <div>{number}</div>
      <div>
        <button
          className=' border px-10 py-3 bg-black text-white font-bold '
          onClick={somtoo}
        >
          Greet
        </button>
      </div>
    </div>
  );
};

export default Task11;
