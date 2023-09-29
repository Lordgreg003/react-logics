import React from 'react';
import { useState } from 'react';
import { image1 } from '../images';
const Example1 = () => {
  const [hidden, setHidden] = useState(false);
  const [height, setHeight] = useState(30);
  const [width, setWidth] = useState(30);
  let [borderRadius, setborderRadius] = useState(3);
  let [borderWidth, setborderWidth] = useState(1);
  return (
    <section className='flex flex-col gap-3 w-full items-center'>
      <div
        className={`${hidden && 'invisible'}`}
        style={{
          height: `${height}rem`,
          width: `${width}rem`,
          borderRadius: `${borderRadius}rem`,
          borderWidth: `${borderWidth}rem`,
        }}
      >
        <img
          style={{ borderRadius: `${borderRadius}rem` }}
          className='h-full w-full'
          src={image1}
          alt=''
        />
      </div>
      <div className=''>
        <button
          onClick={() => setHidden(!hidden)}
          className='text-white rounded-md bg-orange-300 p-2'
        >
          Toggle Visibility
        </button>
      </div>
      <div className='flex flex-row gap-3 '>
        <input
          className='p-3 border rounded-md outline-none'
          type='number'
          value={height}
          placeholder='Height'
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          className='p-3 border rounded-md outline-none'
          type='number'
          value={width}
          placeholder='Width'
          onChange={(e) => setWidth(e.target.value)}
        />
      </div>
      <div className='flex flex-row gap-3 '>
        <button
          onClick={() => setborderRadius(++borderRadius)}
          className='text-white rounded-md bg-orange-300 p-2'
        >
          Increase border radius
        </button>
        <button
          onClick={() => setborderRadius(--borderRadius)}
          className='text-white rounded-md bg-orange-300 p-2'
        >
          Decrease border radius
        </button>
      </div>
      <div className='flex flex-row gap-3 '>
        <button
          onClick={() => setborderWidth(++borderWidth)}
          className='text-white rounded-md bg-orange-300 p-2'
        >
          Increase border width
        </button>
        <button
          onClick={() => setborderWidth(--borderWidth)}
          className='text-white rounded-md bg-orange-300 p-2'
        >
          Decrease border width
        </button>
      </div>
    </section>
  );
};

export default Example1;
