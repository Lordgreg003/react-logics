import React, { useEffect, useState } from 'react';

const Task12 = () => {
  let [boxheight, setBoxheight] = useState('2rem');
  const [boxwidth, setBoxWidth] = useState('2rem');
  let [height, setheight] = useState(2);
  let [width, setWidth] = useState(2);

  const increase = () => {
    setheight(++height);
    setWidth(++width);
    setBoxheight(`${height}rem`);
    setBoxWidth(`${width}rem`);
  };

  const decrease = () => {
    setheight(--height);
    setWidth(--width);
    setBoxheight(`${height}rem`);
    setBoxWidth(`${width}rem`);
  };

  return (
    <div className='flex flex-col  gap-3 p-5 items-center'>
      <div
        className={`border-2 border-black`}
        style={{ height: boxheight, width: boxwidth }}
      ></div>
      <div className='flex flex-row gap-3 p-5'>
        <button
          onClick={increase}
          className='bg-orange-300 text-white rounded-md p-2'
        >
          Increase
        </button>
        <button
          onClick={decrease}
          className='bg-orange-300 text-white rounded-md p-2'
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Task12;
