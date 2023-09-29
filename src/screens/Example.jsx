import React from 'react';
import { useState } from 'react';

const Example = () => {
  let [boxheight, setBoxheight] = useState('2rem');
  let [boxwidth, setBoxWidth] = useState('2rem');
  let [height, setheight] = useState(2);
  let [width, setWidth] = useState(2);
  return (
    <div className='flex flex-col  gap-3 p-5 items-center'>
      <div
        className={`border-2 border-black`}
        style={{ height: boxheight, width: boxwidth }}
      ></div>
      <div className='flex flex-col gap-3 p-5'>
        <div className='flex items-center gap-2'>
          <input
            className='border p-2 rounded-md'
            type='number'
            onChange={(e) => setheight(e.target.value)}
            value={height}
          />
          <button
            onClick={() => setBoxheight(`${height}rem`)}
            className='bg-orange-300 text-white rounded-md p-2 whitespace-nowrap'
          >
            Change Height
          </button>
        </div>
        <div className='flex items-center gap-2'>
          <input
            className='border p-2 rounded-md'
            onChange={(e) => setWidth(e.target.value)}
            type='number'
            value={width}
          />
          <button
            onClick={() => setBoxWidth(`${width}rem`)}
            className='bg-orange-300 text-white rounded-md p-2  whitespace-nowrap'
          >
            Change Width
          </button>
        </div>
      </div>
    </div>
  );
};

export default Example;
