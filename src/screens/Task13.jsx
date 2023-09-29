import React, { useState } from 'react';

const Task13 = () => {
  const [boxheight, setboxheight] = useState('2rem');
  const [boxwidth, setboxwidth] = useState('2rem');
  let [height, setheight] = useState(2);
  let [width, setwidth] = useState(2);

  const increaseHeight = () => {
    setheight(++height);
    setboxheight(`${height}rem`);
  };

  const increaseWidth = () => {
    setwidth(++width);
    setboxwidth(`${width}rem`);
  };

  const decreaseHeight = () => {
    setheight(--height);
    setboxheight(`${height}rem`);
  };

  const decreaseWidth = () => {
    setwidth(--width);
    setboxwidth(`${width}rem`);
  };

  return (
    <div className=' flex flex-col gap-10 '>
      <div className=' flex flex-row justify-center'>
        <div
          className={`border-2 border-black rounded-md`}
          style={{ height: boxheight, width: boxwidth }}
        ></div>
      </div>
      <div className='flex flex-row justify-center gap-5  bg-green-100 '>
        <button
          className='bg-orange-300  text-white rounded-md p-2'
          onClick={increaseHeight}
        >
          increase height
        </button>
        <button
          className=' border p-2 bg-black text-white font-bold  '
          onClick={increaseWidth}
        >
          increase width
        </button>
        <button
          className='border p-2 rounded-md bg-lime-200 text-white'
          onClick={decreaseHeight}
        >
          decrease hight
        </button>
        <button
          className='bg-orange-300 text-white rounded-md p-2'
          onClick={decreaseWidth}
        >
          decrease width
        </button>
      </div>
    </div>
  );
};

export default Task13;
